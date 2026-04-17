// ============================================================
// TEKKEN 8 LEARNING SITE — DATA & RENDERER
// ============================================================

// Global state
const state = {
  notation: 'icon', // 'icon' | 'text'
  activeSection: 'home',
  activeChar: null,
  activeSubTab: null,
};

// ============================================================
// NOTATION RENDERER
// ============================================================

const DIR_MAP = {
  'f': 'f', 'b': 'b', 'u': 'u', 'd': 'd',
  'df': 'df', 'db': 'db', 'uf': 'uf', 'ub': 'ub',
  'F': 'fhold', 'B': 'bhold', 'U': 'uhold', 'D': 'dhold',
  'DF': 'dfhold', 'DB': 'dbhold', 'UF': 'ufhold', 'UB': 'ubhold',
  'N': 'n', 'n': 'n',
};

const BTN_MAP = {
  '1': '1', '2': '2', '3': '3', '4': '4',
  '1+2': '1_2', '3+4': '3_4', '1+3': '1_3', '2+4': '2_4',
  '1+4': '1_4', '2+3': '2_3', '1+2+3': '1_2_3', '1+2+4': '1_2_4',
  '1+3+4': '1_3_4', '2+3+4': '2_3_4', '1+2+3+4': '1_2_3_4',
};

// PROP icons - used inline with moves
const PROP_ICONS = {
  heat: 'heat', homing: 'homing', powercrush: 'powercrush',
  tornado: 'tornado', chip: 'chip', forcecrouch: 'forcecrouch',
  wallblast: 'Wallblast', wallbound: 'Wallbound', wallbreak: 'Wallbreak',
  floorblast: 'Floorblast', floorbreak: 'Floorbreak', balconybreak: 'Balconybreak',
};

function iconHTML(name, size = 22) {
  const src = ICONS[name];
  if (!src) return `[?${name}]`;
  return `<img src="${src}" class="ico" style="width:${size}px;height:${size}px;" alt="${name}">`;
}

function propIconHTML(name, size = 18) {
  const iconName = PROP_ICONS[name] || name;
  return iconHTML(iconName, size);
}

// Render a move notation as either icons or text
function renderMove(notation, size = 18) {
  if (state.notation === 'text') {
    return `<span class="move-text">${notation}</span>`;
  }
  // Icon mode
  const parts = [];
  const tokens = notation.split(/([,\s])/);
  for (const token of tokens) {
    if (token === '' || token === ' ') continue;
    if (token === ',') {
      parts.push('<span class="sep">,</span>');
      continue;
    }
    if (token.includes('+')) {
      const subparts = token.split('+');
      const buttonParts = subparts.filter(p => '1234'.includes(p));
      if (buttonParts.length === subparts.length) {
        // All buttons - use combo icon
        const comboKey = buttonParts.sort().join('+');
        if (BTN_MAP[comboKey]) {
          parts.push(iconHTML(BTN_MAP[comboKey], size + 4));
          continue;
        }
      }
      // Mixed
      for (let i = 0; i < subparts.length; i++) {
        if (i > 0) parts.push('<span class="plus">+</span>');
        const sub = subparts[i];
        if (DIR_MAP[sub]) parts.push(iconHTML(DIR_MAP[sub], size));
        else if (BTN_MAP[sub]) parts.push(iconHTML(BTN_MAP[sub], size + 4));
        else parts.push(`<span class="txt">${sub}</span>`);
      }
      continue;
    }
    if (DIR_MAP[token]) {
      parts.push(iconHTML(DIR_MAP[token], size));
      continue;
    }
    if (BTN_MAP[token]) {
      parts.push(iconHTML(BTN_MAP[token], size + 4));
      continue;
    }
    parts.push(`<span class="txt">${token}</span>`);
  }
  return `<span class="move">${parts.join('')}</span>`;
}

// Shorthand
function mv(notation, size) { return renderMove(notation, size); }
function cmd(character, notation) {
  const url = `https://okizeme.gg/database/${character}`;
  return `<a href="${url}" class="cmd-link" target="_blank" rel="noopener">${mv(notation, 16)}</a>`;
}
function prop(name, size) { return propIconHTML(name, size); }

// ============================================================
// FRAME DATA HELPERS
// ============================================================

// Convert hit level shorthand (e.g., "m", "h,h", "L") into colored badges
function hitLevel(level) {
  if (!level) return '';
  return level.split(',').map(lvl => {
    const l = lvl.trim();
    if (!l) return '';
    const upper = l.toUpperCase();
    let cls = 'hl-h';
    if (upper === 'M') cls = 'hl-m';
    else if (upper === 'L') cls = 'hl-l';
    else if (upper === 'T' || upper === 'TH') cls = 'hl-t';
    else if (upper === 'SM') cls = 'hl-sm';
    else if (upper === 'H') cls = 'hl-h';
    return `<span class="hl ${cls}">${upper}</span>`;
  }).join('');
}

// Colorize a frame value by its sign and size
function frameValue(val) {
  if (!val || val === '—' || val === '-') return `<span class="fv-neutral">—</span>`;
  const s = String(val).trim();
  // Match leading sign + number
  const m = s.match(/^(-?\+?)(\d+)/);
  if (!m) return `<span class="fv-neutral">${s}</span>`;
  const sign = m[1];
  const num = parseInt(m[2], 10);
  let cls = 'fv-neutral';
  if (sign === '+' || (s.startsWith('+'))) cls = 'fv-plus';
  else if (s.startsWith('-')) {
    if (num >= 15) cls = 'fv-launch';
    else if (num >= 10) cls = 'fv-minus-punish';
    else cls = 'fv-minus-safe';
  }
  // Special launch markers
  if (s.includes('a') && s.startsWith('+')) cls = 'fv-plus';
  return `<span class="${cls}">${s}</span>`;
}

// Build a frame-data table from an array of move rows.
// Row shape: { char, cmd, level, startup, dmg, block, hit, ch, notes, props }
function frameDataTable(rows, charKey) {
  const legend = `
    <div class="fd-legend">
      <span><b>i##</b> startup frames</span>
      <span><b class="fv-plus">+N</b> plus (your turn)</span>
      <span><b class="fv-minus-safe">-1~-9</b> safe</span>
      <span><b class="fv-minus-punish">-10~-14</b> punishable</span>
      <span><b class="fv-launch">-15+</b> launchable</span>
      <span><b>a</b> airborne</span>
      <span><b>c</b> crouch</span>
      <span><b>d</b> knockdown</span>
      <span><b>g</b> guardbreak</span>
    </div>`;
  const header = `
    <thead><tr>
      <th>Command</th>
      <th class="center">Level</th>
      <th class="center">Startup</th>
      <th class="center">Dmg</th>
      <th class="center">Block</th>
      <th class="center">Hit</th>
      <th class="center">CH</th>
      <th>Notes</th>
    </tr></thead>`;
  const body = rows.map(r => {
    const propsHTML = r.props ? `<span class="props-inline">${r.props.map(p => prop(p, 14)).join('')}</span>` : '';
    return `<tr>
      <td class="cmd-cell">${cmd(charKey, r.cmd)}${propsHTML}</td>
      <td class="center">${hitLevel(r.level)}</td>
      <td class="center"><b>${r.startup || '—'}</b></td>
      <td class="center">${r.dmg || '—'}</td>
      <td class="center">${frameValue(r.block)}</td>
      <td class="center">${frameValue(r.hit)}</td>
      <td class="center">${frameValue(r.ch)}</td>
      <td class="notes-cell">${r.notes || ''}</td>
    </tr>`;
  }).join('');
  return `${legend}<div class="table-scroll"><table class="fd-table">${header}<tbody>${body}</tbody></table></div>`;
}

// Shorthand: fd(charKey, [...rows])
function fd(charKey, rows) { return frameDataTable(rows, charKey); }

// ============================================================
// CONTENT DATA
// ============================================================

// Guide sections and character data follow in guide_data.js
