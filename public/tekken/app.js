// ============================================================
// APP.JS — Main render loop + routing + navigation
// ============================================================

// Sections registry
const SECTIONS = {
  home: { label: 'Home', render: renderHome },
  fundamentals: { label: 'Fundamentals', render: sectionFundamentals, num: '01' },
  'core-mechanics': { label: 'Core Mechanics', render: sectionCoreMechanics, num: '02' },
  defense: { label: 'Defense & Wake-Up', render: sectionDefense, num: '03' },
  training: { label: 'The 90-Day Plan', render: sectionTrainingPlan, num: '04' },
  ranks: { label: 'Ranks & Picks', render: sectionRanksAndPicks, num: '05' },
  glossary: { label: 'Glossary', render: sectionGlossary, num: '06' },
  movement: { label: 'Movement & KBD', render: sectionMovement, num: '07' },
};

const CHAR_TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'punishers', label: 'Punishers' },
  { key: 'moves', label: 'Key Moves' },
  { key: 'framedata', label: 'Frame Data' },
  { key: 'combos', label: 'Combos' },
  { key: 'stances', label: 'Stances & Tech' },
  { key: 'pressure', label: 'Pressure & Heat' },
  { key: 'frametraps', label: 'Frame Traps' },
  { key: 'matchups', label: 'Matchups' },
  { key: 'defense_vs', label: 'Defense Against' },
  { key: 'dos_donts', label: "Do's & Don'ts" },
];

// ============================================================
// HOME PAGE
// ============================================================

function renderHome() {
  const sectionTiles = Object.entries(SECTIONS)
    .filter(([k]) => k !== 'home')
    .map(([key, s]) => `
      <div class="home-tile" data-nav="section:${key}">
        <div class="num">§${s.num}</div>
        <h3>${s.label}</h3>
        <p>${getSectionBlurb(key)}</p>
        <div class="arrow">READ →</div>
      </div>
    `).join('');

  const charTiles = Object.entries(CHARACTERS).map(([key, c]) => `
    <div class="char-tile" data-nav="char:${key}" style="--char-color: ${c.color}">
      <div class="char-tile-img">
        ${c.image
          ? `<img src="${c.image}" alt="${c.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<div class=&quot;portrait-fallback-sm&quot;>${c.name.charAt(0)}</div>';">`
          : `<div class="portrait-fallback-sm">${c.name.charAt(0)}</div>`
        }
      </div>
      <div class="char-tile-body">
        <div class="diff">${c.difficulty}</div>
        <h3>${c.name}</h3>
        <div class="subtitle">${c.subtitle}</div>
        <div class="tags">
          ${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="hero">
      <div class="hero-label">Season 3 · Flame Ruler Playbook</div>
      <h1>TEKKEN 8<br><span class="alt">Beginner's Codex</span></h1>
      <p class="hero-lede">One stop for everything a new Tekken player needs: fundamentals, wake-up theory, a 90-day path from beginner to Purple, and in-depth guides for Jun, Nina, Miary Zo, and Lili — with inputs in either icon or text notation.</p>
      <div class="hero-stats">
        <div class="hero-stat"><div class="n">4</div><div class="l">Character guides</div></div>
        <div class="hero-stat"><div class="n">7</div><div class="l">Beginner chapters</div></div>
        <div class="hero-stat"><div class="n">90</div><div class="l">Day training plan</div></div>
        <div class="hero-stat"><div class="n">∞</div><div class="l">Okizeme links</div></div>
      </div>
    </div>

    <h2 class="section-heading">Beginner's Guide</h2>
    <p class="section-subheading">Start here if you're new. These seven chapters give you the language, the mechanics, and the roadmap.</p>
    <div class="home-grid">${sectionTiles}</div>

    <div class="chars-section">
      <h2 class="section-heading">Character Guides</h2>
      <p class="section-subheading">Click the move notation in any guide to open its video and frame data on okizeme.gg.</p>
      <div class="char-grid">${charTiles}</div>
    </div>

    <div class="trackers-section">
      <h2 class="section-heading">Tournament Trackers</h2>
      <p class="section-subheading">Find local & online Tekken events, check stream schedules, register for tournaments, and track top player results.</p>
      <div class="trackers-grid">
        <a class="tracker-card" href="https://www.start.gg/search/tournaments?filter=Tekken" target="_blank" rel="noopener">
          <div class="tracker-logo">start.gg</div>
          <h3>start.gg · Tekken Tournaments</h3>
          <p>The biggest tournament platform — find brackets, register for locals, check upcoming majors, and watch results from the global Tekken scene. Filter by location, date, prize pool.</p>
          <div class="tracker-cta">Browse tournaments →</div>
        </a>
        <a class="tracker-card" href="https://sk-tekken.com/tracker" target="_blank" rel="noopener">
          <div class="tracker-logo">SK Tracker</div>
          <h3>SK-Tekken Tracker</h3>
          <p>Detailed Tekken 8 tournament tracker with player rankings, head-to-head records, character usage stats, and bracket-level stream info.</p>
          <div class="tracker-cta">Open tracker →</div>
        </a>
        <a class="tracker-card" href="https://tekken-esports.bn-ent.net/schedule?lang=en&order=0&event_status=1" target="_blank" rel="noopener">
          <div class="tracker-logo">OFFICIAL</div>
          <h3>TEKKEN Esports Portal</h3>
          <p>Bandai Namco's official Tekken World Tour schedule — tier list tournaments (DOJO, CHALLENGER, MASTER), regional finals, and the road to the World Tour Finals.</p>
          <div class="tracker-cta">View TWT schedule →</div>
        </a>
        <a class="tracker-card" href="https://liquipedia.net/fighters/Tekken_8/Tournaments" target="_blank" rel="noopener">
          <div class="tracker-logo">Liquipedia</div>
          <h3>Liquipedia · Tekken 8</h3>
          <p>Full historical tournament archive with prize pools, entrant counts, player records, and bracket links. The reference for top-level Tekken scene stats.</p>
          <div class="tracker-cta">Open archive →</div>
        </a>
      </div>
    </div>

    <div class="tip-box" style="margin-top: 32px;">
      <b>Quick tip:</b> Use the <b>ICON / TEXT</b> toggle in the top bar to switch between visual notation (${iconHTML('df', 18)}${iconHTML('2', 22)}) and text notation (<span class="code">df+2</span>). Your choice persists across the site.
    </div>
  `;
}

function getSectionBlurb(key) {
  const blurbs = {
    fundamentals: 'The four buttons, the eight directions, and how to read move notation. Start here.',
    'core-mechanics': 'Hit levels, frame data, throws, sidestep, and the Heat system. How Tekken actually works.',
    defense: 'Blocking, punishing, knockdown options, and the art of not mashing. The most under-studied skill.',
    training: 'A week-by-week plan from beginner to Purple rank. Realistic goals, daily structure.',
    ranks: 'How the rank ladder works, which characters to pick, and universal do\'s and don\'ts.',
    glossary: 'The Tekken vocabulary — every acronym and term, plus the best external resources.',
    movement: 'Backdash, sidestep, sidewalk, and Korean Backdash. The skill that separates ranks.',
  };
  return blurbs[key] || '';
}

// ============================================================
// CHARACTER PAGE
// ============================================================

function renderCharacterPage() {
  const c = CHARACTERS[state.activeChar];
  if (!c) return renderHome();

  const tab = state.activeSubTab || 'overview';
  const tabFn = c[tab] || c.overview;
  const tabContent = typeof tabFn === 'function' ? tabFn() : tabFn;

  const subtabsHTML = CHAR_TABS.map(t => `
    <button class="subtab ${t.key === tab ? 'active' : ''}" data-subtab="${t.key}">${t.label}</button>
  `).join('');

  return `
    <div class="char-header" style="--char-color: ${c.color}">
      <div class="char-header-text">
        <div class="kicker">Character Guide</div>
        <h1>${c.name}</h1>
        <div class="subtitle">${c.subtitle}</div>
        <div class="meta">
          <span class="tag">Difficulty · ${c.difficulty}</span>
          ${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          <a class="tag" href="https://okizeme.gg/database/${c.okizeme}" target="_blank" rel="noopener" style="color: var(--char-color, var(--accent)); border-color: currentColor;">okizeme.gg ↗</a>
        </div>
      </div>
      <div class="char-portrait">
        ${c.image
          ? `<img src="${c.image}" alt="${c.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<div class=&quot;portrait-fallback&quot;>${c.name.charAt(0)}</div>';">`
          : `<div class="portrait-fallback">${c.name.charAt(0)}</div>`
        }
      </div>
    </div>

    <div class="subtabs">${subtabsHTML}</div>
    <div class="subtab-content">${tabContent}</div>
  `;
}

// ============================================================
// SECTION PAGE
// ============================================================

function renderSectionPage() {
  const section = SECTIONS[state.activeSection];
  if (!section) return renderHome();
  return section.render();
}

// ============================================================
// MAIN RENDER
// ============================================================

function render() {
  const contentEl = document.getElementById('content');
  if (!contentEl) return;

  let html;
  if (state.activeSection === 'home') {
    html = renderHome();
  } else if (state.activeSection === 'char') {
    html = renderCharacterPage();
  } else {
    html = renderSectionPage();
  }
  contentEl.innerHTML = html;

  // Update sidebar active state
  updateSidebar();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Bind tile clicks (home page tiles)
  contentEl.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => {
      const nav = el.dataset.nav;
      const [type, key] = nav.split(':');
      if (type === 'section') {
        navigate('section', key);
      } else if (type === 'char') {
        navigate('char', key);
      }
    });
  });

  // Bind subtab clicks (character page)
  contentEl.querySelectorAll('[data-subtab]').forEach(el => {
    el.addEventListener('click', () => {
      state.activeSubTab = el.dataset.subtab;
      updateHash();
      render();
    });
  });
}

// ============================================================
// SIDEBAR
// ============================================================

function renderSidebar() {
  const beginnerItems = Object.entries(SECTIONS)
    .filter(([k]) => k !== 'home')
    .map(([key, s]) => `
      <button class="nav-item" data-nav-type="section" data-nav-key="${key}">
        <span class="marker">§${s.num}</span>
        ${s.label}
      </button>
    `).join('');

  const charItems = Object.entries(CHARACTERS).map(([key, c]) => `
    <button class="char-nav" data-nav-type="char" data-nav-key="${key}" style="--char-color: ${c.color}">
      <span class="bullet"></span>
      ${c.name}
    </button>
  `).join('');

  return `
    <div class="nav-group">
      <div class="nav-group-label">Home</div>
      <button class="nav-item" data-nav-type="home" data-nav-key="home">
        <span class="marker">◆</span>
        Overview
      </button>
    </div>
    <div class="nav-group">
      <div class="nav-group-label">Beginner's Guide</div>
      ${beginnerItems}
    </div>
    <div class="nav-group">
      <div class="nav-group-label">Characters</div>
      ${charItems}
    </div>
  `;
}

function updateSidebar() {
  document.querySelectorAll('.nav-item, .char-nav').forEach(el => {
    el.classList.remove('active');
    const type = el.dataset.navType;
    const key = el.dataset.navKey;
    if (type === 'home' && state.activeSection === 'home') {
      el.classList.add('active');
    } else if (type === 'section' && state.activeSection === key) {
      el.classList.add('active');
    } else if (type === 'char' && state.activeSection === 'char' && state.activeChar === key) {
      el.classList.add('active');
    }
  });
}

function bindSidebar() {
  document.querySelectorAll('.nav-item, .char-nav').forEach(el => {
    el.addEventListener('click', () => {
      const type = el.dataset.navType;
      const key = el.dataset.navKey;
      navigate(type, key);
      // Close mobile drawer
      document.querySelector('.sidebar')?.classList.remove('open');
      document.querySelector('.sidebar-backdrop')?.classList.remove('show');
    });
  });
}

// ============================================================
// NAVIGATION
// ============================================================

function navigate(type, key) {
  if (type === 'home') {
    state.activeSection = 'home';
    state.activeChar = null;
    state.activeSubTab = null;
  } else if (type === 'section') {
    state.activeSection = key;
    state.activeChar = null;
    state.activeSubTab = null;
  } else if (type === 'char') {
    state.activeSection = 'char';
    state.activeChar = key;
    state.activeSubTab = 'overview';
  }
  updateHash();
  render();
}

function updateHash() {
  let hash = '';
  if (state.activeSection === 'home') {
    hash = '';
  } else if (state.activeSection === 'char' && state.activeChar) {
    hash = `#char/${state.activeChar}${state.activeSubTab && state.activeSubTab !== 'overview' ? '/' + state.activeSubTab : ''}`;
  } else {
    hash = `#${state.activeSection}`;
  }
  if (location.hash !== hash) {
    history.replaceState(null, '', hash || location.pathname);
  }
}

function parseHash() {
  const hash = location.hash.slice(1);
  if (!hash) {
    state.activeSection = 'home';
    state.activeChar = null;
    state.activeSubTab = null;
    return;
  }
  const parts = hash.split('/');
  if (parts[0] === 'char' && parts[1] && CHARACTERS[parts[1]]) {
    state.activeSection = 'char';
    state.activeChar = parts[1];
    state.activeSubTab = parts[2] || 'overview';
  } else if (SECTIONS[parts[0]]) {
    state.activeSection = parts[0];
    state.activeChar = null;
    state.activeSubTab = null;
  } else {
    state.activeSection = 'home';
  }
}

// ============================================================
// NOTATION TOGGLE
// ============================================================

function setupNotationToggle() {
  const btns = document.querySelectorAll('.notation-toggle button');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const newMode = btn.dataset.mode;
      if (newMode === state.notation) return;
      state.notation = newMode;
      try { localStorage.setItem('tekken-notation', newMode); } catch (e) {}
      btns.forEach(b => b.classList.toggle('active', b.dataset.mode === newMode));
      render();
    });
  });

  // Load saved preference
  try {
    const saved = localStorage.getItem('tekken-notation');
    if (saved === 'text' || saved === 'icon') {
      state.notation = saved;
      btns.forEach(b => b.classList.toggle('active', b.dataset.mode === saved));
    }
  } catch (e) {}
}

// ============================================================
// MOBILE DRAWER
// ============================================================

function setupMobileDrawer() {
  const menuBtn = document.querySelector('.menu-btn');
  const sidebar = document.querySelector('.sidebar');
  const backdrop = document.querySelector('.sidebar-backdrop');
  if (!menuBtn || !sidebar) return;

  const toggle = (open) => {
    const isOpen = open !== undefined ? open : !sidebar.classList.contains('open');
    sidebar.classList.toggle('open', isOpen);
    backdrop?.classList.toggle('show', isOpen);
  };

  menuBtn.addEventListener('click', () => toggle());
  backdrop?.addEventListener('click', () => toggle(false));
}

// ============================================================
// INIT
// ============================================================

function init() {
  // Populate sidebar
  const sidebarEl = document.querySelector('.sidebar');
  if (sidebarEl) {
    sidebarEl.innerHTML = renderSidebar();
    bindSidebar();
  }

  setupNotationToggle();
  setupMobileDrawer();

  // Handle browser nav (back/forward)
  window.addEventListener('hashchange', () => {
    parseHash();
    render();
  });

  // Initial route
  parseHash();
  render();
}

document.addEventListener('DOMContentLoaded', init);
