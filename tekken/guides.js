// ============================================================
// GUIDE CONTENT — Returns HTML strings. Called on render.
// All move notations go through mv() so they re-render on toggle.
// ============================================================

// ------------------ BEGINNER CONTENT ------------------

function sectionFundamentals() {
  return `
    <div class="section-head">
      <div class="kicker">§01</div>
      <h2>Fundamentals</h2>
      <p class="lede">Every character uses the same four attack buttons, the same eight directions, and the same block mechanics. Learn the language once — use it forever.</p>
    </div>

    <div class="card priority">
      <h3>What actually separates ranks</h3>
      <p>Tekken isn't about memorizing 150 moves. At every rank, players who master four fundamentals beat players who know forty moves poorly:</p>
      <div class="priority-grid">
        <div><div class="n">01</div><b>React to lows</b><span>Most losses at lower ranks are low-mixup losses.</span></div>
        <div><div class="n">02</div><b>Punish unsafe moves</b><span>Memorize i10, i12, i15 punishers cold.</span></div>
        <div><div class="n">03</div><b>One consistent combo</b><span>95% hit rate beats nine combos at 50%.</span></div>
        <div><div class="n">04</div><b>Stop mashing</b><span>After blocking, wait. Read. Then strike.</span></div>
      </div>
    </div>

    <h3 class="subhead">The Four Buttons</h3>
    <p class="body">Every character in Tekken 8 shares the same four-button layout. Each button controls a specific limb, and that mapping never changes.</p>
    <div class="btn-cards">
      <div class="btn-card c1">
        <div class="btn-icon">${iconHTML('1', 48)}</div>
        <b>Left Punch</b>
        <div class="map">PS <span>□</span> · Xbox <span>X</span></div>
        <p>Fastest attack. Jabs and pokes.</p>
      </div>
      <div class="btn-card c2">
        <div class="btn-icon">${iconHTML('2', 48)}</div>
        <b>Right Punch</b>
        <div class="map">PS <span>△</span> · Xbox <span>Y</span></div>
        <p>Power punches, launchers.</p>
      </div>
      <div class="btn-card c3">
        <div class="btn-icon">${iconHTML('3', 48)}</div>
        <b>Left Kick</b>
        <div class="map">PS <span>✕</span> · Xbox <span>A</span></div>
        <p>Mid kicks, stance entries.</p>
      </div>
      <div class="btn-card c4">
        <div class="btn-icon">${iconHTML('4', 48)}</div>
        <b>Right Kick</b>
        <div class="map">PS <span>○</span> · Xbox <span>B</span></div>
        <p>Big-damage kicks, launchers.</p>
      </div>
    </div>

    <div class="tip-box">
      <b>Combined inputs.</b> ${iconHTML('1_2', 22)} means press 1 and 2 at the same time. Common pairings: ${iconHTML('1_2', 22)} both punches &middot; ${iconHTML('3_4', 22)} both kicks &middot; ${iconHTML('1_3', 22)} left throw &middot; ${iconHTML('2_4', 22)} right throw.
    </div>

    <h3 class="subhead">Directional Arrows — Tap vs. Hold</h3>
    <div class="two-col">
      <div>
        <p class="body"><b>The key distinction:</b> lowercase versus UPPERCASE. Tekken notation uses case to tell you whether to tap the direction or hold it. This is the single thing that trips up the most beginners.</p>
        <p class="body"><b class="accent-warm">Lowercase = TAP.</b> Press, release immediately. "${mv('f')}" means tap forward once.</p>
        <p class="body"><b class="accent-cool">UPPERCASE = HOLD.</b> Press and keep holding through the next input. "${mv('F')}" means hold forward until further input.</p>
        <div class="tip-box">
          <b>Example.</b> ${mv('f,F+2')} reads: tap forward ${iconHTML('f', 16)}, then hold forward ${iconHTML('fhold', 16)} while pressing ${iconHTML('2', 20)}. A dash attack.
        </div>
        <p class="body">The hold icons throughout this site have outlined double-border so you can tell them apart from solid tap arrows at a glance.</p>
      </div>
      <div>
        <div class="dir-compass">
          <div class="row"><div>${iconHTML('ub', 36)}<span>ub</span></div><div>${iconHTML('u', 36)}<span>u</span></div><div>${iconHTML('uf', 36)}<span>uf</span></div></div>
          <div class="row"><div>${iconHTML('b', 36)}<span>b</span></div><div>${iconHTML('n', 36)}<span>N</span></div><div>${iconHTML('f', 36)}<span>f</span></div></div>
          <div class="row"><div>${iconHTML('db', 36)}<span>db</span></div><div>${iconHTML('d', 36)}<span>d</span></div><div>${iconHTML('df', 36)}<span>df</span></div></div>
        </div>
        <h4 class="minihead">Hold variants</h4>
        <div class="hold-grid">
          <div>${iconHTML('fhold', 22)} <span>F</span></div>
          <div>${iconHTML('bhold', 22)} <span>B</span></div>
          <div>${iconHTML('uhold', 22)} <span>U</span></div>
          <div>${iconHTML('dhold', 22)} <span>D</span></div>
          <div>${iconHTML('dfhold', 22)} <span>DF</span></div>
          <div>${iconHTML('dbhold', 22)} <span>DB</span></div>
          <div>${iconHTML('ufhold', 22)} <span>UF</span></div>
          <div>${iconHTML('ubhold', 22)} <span>UB</span></div>
        </div>
      </div>
    </div>

    <h3 class="subhead">Motion Inputs</h3>
    <table class="data">
      <thead><tr><th>Notation</th><th>Meaning</th><th>Sequence</th><th>Used for</th></tr></thead>
      <tbody>
        <tr><td><span class="code">qcf</span></td><td>Quarter-circle forward — roll the stick d → df → f</td><td>${iconHTML('d',18)} → ${iconHTML('df',18)} → ${iconHTML('f',18)}</td><td>Nina's ${mv('qcf+1')}, dragon punches</td></tr>
        <tr><td><span class="code">qcb</span></td><td>Quarter-circle back — d → db → b</td><td>${iconHTML('d',18)} → ${iconHTML('db',18)} → ${iconHTML('b',18)}</td><td>Nina's ${mv('qcb+4')} backsway</td></tr>
        <tr><td><span class="code">f,f</span></td><td>Dash. Tap forward twice.</td><td>${iconHTML('f',18)} → ${iconHTML('f',18)}</td><td>Dash attacks</td></tr>
        <tr><td><span class="code">f,f,F</span></td><td>Run. Tap, tap, hold.</td><td>${iconHTML('f',18)} → ${iconHTML('f',18)} → ${iconHTML('fhold',18)}</td><td>Running moves</td></tr>
        <tr><td><span class="code">~</span></td><td>Cancel or smooth transition</td><td>—</td><td><span class="code">ss1~qcf+1</span></td></tr>
        <tr><td><span class="code">WS</span></td><td>While Standing (rising from crouch)</td><td>—</td><td>${mv('ws4')} for Jun</td></tr>
        <tr><td><span class="code">FC</span></td><td>Full Crouch</td><td>—</td><td>${mv('FC.df+1')}</td></tr>
      </tbody>
    </table>
  `;
}

function sectionCoreMechanics() {
  return `
    <div class="section-head">
      <div class="kicker">§02</div>
      <h2>Core Mechanics</h2>
      <p class="lede">How the game actually works — hit levels, frame data, throws, and the Heat system.</p>
    </div>

    <h3 class="subhead">Hit Levels — The Universal Mix-Up</h3>
    <p class="body">Every move in Tekken hits at one of three levels. This is the core of every mix-up you'll ever face.</p>
    <table class="data">
      <thead><tr><th>Level</th><th>Hits when</th><th>Blocked by</th><th>Dodged by</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td><b class="accent-cool">HIGH</b></td><td>Opponent standing</td><td>Stand block (neutral / ${iconHTML('b', 14)})</td><td>Crouching (${iconHTML('d', 14)})</td><td>Most jabs, many kicks</td></tr>
        <tr><td><b class="accent-good">MID</b></td><td>Standing OR crouching — catches both</td><td>Stand block only</td><td class="warn">Nothing — <b>hits crouchers</b></td><td>${mv('df+2')} — most launchers</td></tr>
        <tr><td><b class="accent-warm">LOW</b></td><td>Standing opponents</td><td>Crouch block (${iconHTML('db', 14)})</td><td>Jumping (${iconHTML('u', 14)})</td><td>${mv('db+3')}, sweeps</td></tr>
      </tbody>
    </table>
    <div class="tip-box">
      <b>The mix-up logic.</b> Opponent throws a mid — you must stand block. Next round they switch to a low — you must crouch block. Reading which is coming, and reacting fast enough, is Tekken's most important skill.
    </div>

    <h3 class="subhead">Move Property Icons</h3>
    <p class="body">In TekkenDocs and Okizeme frame data, these property icons appear next to moves. Learn them once and you'll recognize them forever.</p>
    <div class="prop-grid">
      <div class="prop-item">${iconHTML('heat', 32)}<div><b>Heat Engager</b><span>Activates Heat state on hit. Build toward these.</span></div></div>
      <div class="prop-item">${iconHTML('homing', 32)}<div><b>Homing</b><span>Tracks sidesteps. Cannot be stepped.</span></div></div>
      <div class="prop-item">${iconHTML('powercrush', 32)}<div><b>Power Crush</b><span>Absorbs one hit during startup. Armor.</span></div></div>
      <div class="prop-item">${iconHTML('tornado', 32)}<div><b>Tornado (T!)</b><span>Extends juggles. Used mid-combo.</span></div></div>
      <div class="prop-item">${iconHTML('chip', 32)}<div><b>Chip Damage</b><span>Deals damage even on block (usually in Heat).</span></div></div>
      <div class="prop-item">${iconHTML('forcecrouch', 32)}<div><b>Force Crouch</b><span>Forces opponent into crouch on hit or block.</span></div></div>
      <div class="prop-item">${iconHTML('Wallblast', 32)}<div><b>Wall Blast</b><span>Slams opponent into wall. Wall-combo starter.</span></div></div>
      <div class="prop-item">${iconHTML('Wallbound', 32)}<div><b>Wall Bound</b><span>Bounces off wall for extended juggle.</span></div></div>
      <div class="prop-item">${iconHTML('Wallbreak', 32)}<div><b>Wall Break</b><span>Breaks breakable walls for bonus damage.</span></div></div>
      <div class="prop-item">${iconHTML('Floorblast', 32)}<div><b>Floor Blast</b><span>Slams opponent into floor. Big damage.</span></div></div>
      <div class="prop-item">${iconHTML('Floorbreak', 32)}<div><b>Floor Break</b><span>Breaks breakable floors. Bonus damage.</span></div></div>
      <div class="prop-item">${iconHTML('Balconybreak', 32)}<div><b>Balcony Break</b><span>Stage transition — resets to a new arena.</span></div></div>
    </div>

    <h3 class="subhead">Frame Data — Stop Fearing the Numbers</h3>
    <div class="two-col">
      <div>
        <h4 class="minihead">The three numbers that matter</h4>
        <p class="body"><b class="accent-good">Startup (i-frames).</b> How fast the move comes out. "i15" = first active hit on frame 15. Lower is faster.</p>
        <p class="body"><b class="accent-warm">On Block.</b> What happens to <em>you</em> if opponent blocks. Negative = their turn (punishable). Positive = your turn.</p>
        <p class="body"><b class="accent-cool">On Hit.</b> What happens if the move connects. Positive on hit means you can keep pressuring.</p>
        <h4 class="minihead">Reading "-14 on block"</h4>
        <p class="body">That means after they blocked your move, you're stuck for 14 frames. Anyone with an i14 move or faster punishes you. That's why ${mv('uf+1')} (i10) is the universal "always punishes" move.</p>
      </div>
      <div>
        <h4 class="minihead">Punishment thresholds</h4>
        <table class="data compact">
          <thead><tr><th>If blocked at</th><th>Punish with</th></tr></thead>
          <tbody>
            <tr><td class="warn">-10 or worse</td><td>Your i10 punisher</td></tr>
            <tr><td class="warn">-12 or worse</td><td>Your i12 (more damage)</td></tr>
            <tr><td class="warn">-13 to -14</td><td>i13/14 (heat engager or big string)</td></tr>
            <tr><td class="warn">-15 or worse</td><td><b class="accent-good">LAUNCH — full combo</b></td></tr>
          </tbody>
        </table>
        <div class="warn-box">
          <b>Why this matters.</b> 80% of rank progress at Flame Ruler comes from punishing properly. If you don't know which of your character's moves are i10/i12/i15, you're leaving free damage on the table every single round.
        </div>
      </div>
    </div>

    <h3 class="subhead">Throws, Sidestep &amp; Heat</h3>
    <div class="three-col">
      <div class="mini-card">
        <h4>Sidestep & Movement</h4>
        <p>Most Tekken attacks are <b>linear</b> — they only hit straight. Sidestep around them.</p>
        <p><b>Sidestep (SS):</b> Tap ${iconHTML('u', 14)} or ${iconHTML('d', 14)} briefly.</p>
        <p><b>Sidewalk:</b> Hold ${iconHTML('uhold', 14)} or ${iconHTML('dhold', 14)}.</p>
        <p>Homing moves ${propIconHTML('homing', 14)} track sidesteps — you can't step them. Use them when opponent sidesteps too much.</p>
      </div>
      <div class="mini-card">
        <h4>Throws & Breaks</h4>
        <p>Throws bypass guard. Drilling breaks unlocks 1–2 full ranks.</p>
        <table class="data compact">
          <tr><th>Throw</th><th>Break with</th></tr>
          <tr><td>${iconHTML('1_3', 20)}</td><td>${iconHTML('1', 20)} — left</td></tr>
          <tr><td>${iconHTML('2_4', 20)}</td><td>${iconHTML('2', 20)} — right</td></tr>
          <tr><td>${iconHTML('1_2', 20)}</td><td>${iconHTML('1_2', 22)} — front</td></tr>
        </table>
        <p class="sm">Watch their arm. Left arm forward = break 1. Right arm forward = break 2.</p>
      </div>
      <div class="mini-card">
        <h4>Heat System</h4>
        <p>Heat is a free power-up per round. One activation only.</p>
        <p><b>Activate:</b> Press R1/RB, or land a Heat Engager ${propIconHTML('heat', 14)}.</p>
        <p><b>While active:</b> chip damage on blocks, enhanced moves, Heat Dash (R1 mid-combo), Heat Smash (${iconHTML('2_3', 18)}).</p>
        <p class="sm warn">Don't activate Heat as panic — it wastes the resource.</p>
      </div>
    </div>
  `;
}

function sectionDefense() {
  return `
    <div class="section-head">
      <div class="kicker">§03</div>
      <h2>Defense & Wake-Up</h2>
      <p class="lede">What to do when you're blocking, getting knocked down, or getting up. The most under-studied skill at every rank.</p>
    </div>

    <h3 class="subhead">Defensive Hierarchy</h3>
    <ol class="steplist">
      <li><b>Stand block by default.</b> Covers highs and mids. Tekken is a block-mid-react-to-lows game.</li>
      <li><b>React to lows with crouch block.</b> Most lows are slow enough to block on reaction if you're paying attention.</li>
      <li><b>Break throws.</b> Watch the arm. 1 for left, 2 for right, 1+2 for front. Drill this daily.</li>
      <li><b>Sidestep predictable strings.</b> If their combo keeps whiffing on sidestep, keep stepping.</li>
      <li><b>Punish blocked unsafe moves.</b> Launch anything -15 or worse.</li>
      <li><b class="warn">DO NOT MASH after block.</b> This is THE Tekken mistake. If a move is safe (0 to -10), wait. Their next move counter-hits your mash.</li>
    </ol>
    <div class="warn-box">
      <b>The Mash Trap.</b> 80% of Flame Ruler losses come from mashing a jab after blocking something you didn't know the frames of. Learn to respect blocked moves. Wait for concrete openings.
    </div>

    <h3 class="subhead">Knockdown &amp; Wake-Up — Your Options</h3>
    <p class="body">You get knocked down two or three times per round. What you do next decides whether you eat a huge mix-up or reset to neutral safely.</p>
    <table class="data">
      <thead><tr><th>Option</th><th>Input</th><th>What happens</th><th>When to use</th></tr></thead>
      <tbody>
        <tr><td><b>Stay down</b></td><td>Nothing</td><td>Stay grounded.</td><td>Vs players who don't know ground oki. Risky otherwise.</td></tr>
        <tr><td><b>Quick stand</b></td><td>${iconHTML('u', 20)}</td><td>Pop up neutral.</td><td class="good"><b>Best default.</b> Block mid immediately after.</td></tr>
        <tr><td><b>Roll back</b></td><td>${iconHTML('bhold', 20)}</td><td>Roll away, gain space.</td><td>Vs rushdown (Azucena, Dragunov).</td></tr>
        <tr><td><b>Roll forward</b></td><td>${iconHTML('fhold', 20)}</td><td>Roll past them.</td><td>Niche — vs throw-heavy oki (King).</td></tr>
        <tr><td><b>Roll sideways</b></td><td>${iconHTML('uhold', 20)} or ${iconHTML('dhold', 20)}</td><td>Roll to the side.</td><td>Evade linear wake-up attacks.</td></tr>
        <tr><td><b>Spring kick</b></td><td>${mv('u+3+4')}</td><td>Flip-up kick, hits mid.</td><td class="warn">Punishable on block (-12+). Use sparingly.</td></tr>
        <tr><td><b>Low wake-up kick</b></td><td>${mv('d+3')} or ${mv('d+3+4')}</td><td>Short low kick.</td><td>Catches pressers. Launchable on block.</td></tr>
        <tr><td><b>High wake-up kick</b></td><td>${mv('d+4')}</td><td>High rising kick.</td><td>Catches close opponents. Duckable.</td></tr>
        <tr><td><b>Block on rise</b></td><td>Hold block</td><td>Guard high/mid as you stand.</td><td class="good">Safest when unsure about oki.</td></tr>
      </tbody>
    </table>

    <h3 class="subhead">Offensive Okizeme — Pressuring Them On The Ground</h3>
    <p class="body">When <em>you</em> knock them down, oki is where rounds are won. The opponent must guess between multiple options, and you can force bad choices.</p>
    <table class="data">
      <thead><tr><th>Situation</th><th>Best follow-up</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td>Opponent face-up on ground</td><td>Mid attack at their feet</td><td>Catches slow wake-up, beats spring kick.</td></tr>
        <tr><td>Just ended a combo</td><td>Dash in + safe pressure move</td><td>They're stuck momentarily. Establish plus frames.</td></tr>
        <tr><td>Near wall after combo</td><td>Low/mid mix-up</td><td>They can't roll back. Forced to guess.</td></tr>
        <tr><td>They roll backward</td><td>Long-range homing ${propIconHTML('homing', 14)}</td><td>Catches retreat before neutral reset.</td></tr>
        <tr><td>They roll sideways</td><td>Homing move or dash-and-wait</td><td>Tracking catches rolls.</td></tr>
        <tr><td>They stay down</td><td>Ground stomp (${mv('d+3')}) or reset neutral</td><td>Free chip or walk away.</td></tr>
      </tbody>
    </table>
  `;
}

function sectionTrainingPlan() {
  return `
    <div class="section-head">
      <div class="kicker">§04</div>
      <h2>The 90-Day Plan</h2>
      <p class="lede">From complete beginner to Purple rank in three months. Realistic goals, daily structure, no shortcuts.</p>
    </div>

    <p class="body"><b>Target:</b> 45–60 min practice + 30–60 min ranked daily, 5 days/week. Rest days matter — your brain consolidates motor skills during sleep.</p>

    <div class="month-grid">
      <div class="month-card m1">
        <div class="month-tag">Month 01 / Foundations</div>
        <div class="month-target">Target rank: Start → Green</div>
        <p>Goal: understand how the game works. Drill basics. <b>Do not worry about losing.</b></p>
        <div class="week-block">
          <h4>Week 1 — Setup</h4>
          <ul><li>Days 1–2: Play Arcade Quest (built-in tutorials)</li><li>Day 3: Try 5 characters, pick main</li><li>Day 4: Learn main's full move list</li><li>Day 5: 50 reps of one combo off main's launcher</li><li>Days 6–7: 10 unranked matches. Don't worry about winning.</li></ul>
        </div>
        <div class="week-block">
          <h4>Week 2 — Inputs</h4>
          <ul><li>Turn ON input display (Training options)</li><li>Walk, backdash, crouch, jump consciously</li><li>Drill qcf/qcb if applicable</li><li>Throw breaks: ${iconHTML('1_3',16)}→${iconHTML('1',16)}, ${iconHTML('2_4',16)}→${iconHTML('2',16)}, ${iconHTML('1_2',16)}→${iconHTML('1_2',16)}</li><li>Start ranked. Lose freely.</li></ul>
        </div>
        <div class="week-block">
          <h4>Week 3 — Defense</h4>
          <ul><li>Dummy set to "random block" (mid/low/high)</li><li>15 min/day blocking. Just block, don't attack.</li><li>Learn 3 punishers: i10, i13, i15 for main</li><li>Use Replay Takeover on every loss</li><li>Break the mash habit</li></ul>
        </div>
        <div class="week-block">
          <h4>Week 4 — Assembly</h4>
          <ul><li>Combo at 80% consistency</li><li>3 pokes: jab, mid, one low</li><li>5+ ranked matches daily</li><li>Phone-video yourself, spot patterns</li><li><b class="accent-warm">Target: 1st Dan → Fighter</b></li></ul>
        </div>
        <div class="mantra">"I am learning, not winning."</div>
      </div>

      <div class="month-card m2">
        <div class="month-tag">Month 02 / Real Tekken</div>
        <div class="month-target">Target rank: Green → Flame Ruler</div>
        <p>Goal: build frame awareness. Expand toolkit. Start winning consistently.</p>
        <div class="week-block">
          <h4>Week 5 — Full punishers</h4>
          <ul><li>Memorize ALL main's punishers: i10, i12, i13, i15, i17</li><li>Memorize While-Standing punishers</li><li>Drill random-block punish 15 min/day</li><li>Know 5 most common unsafe moves in ranked</li></ul>
        </div>
        <div class="week-block">
          <h4>Week 6 — Advanced combos</h4>
          <ul><li>Add 2 more launchers (CH, low-CH)</li><li>Learn 1 wall combo</li><li>100 daily reps of BnB</li><li>Watch 1 top-player replay for main</li></ul>
        </div>
        <div class="week-block">
          <h4>Week 7 — Neutral</h4>
          <ul><li>Identify main's top 3 pokes</li><li>Top 2 whiff punishers</li><li>Practice backdash → whiff punish</li><li>Start using sidestep deliberately</li></ul>
        </div>
        <div class="week-block">
          <h4>Week 8 — Heat</h4>
          <ul><li>Learn main's Heat Engagers ${propIconHTML('heat', 14)}</li><li>Drill Heat Dash extensions</li><li>Use Heat offensively, not as panic</li><li><b class="accent-warm">Target: Warrior → Flame Ruler</b></li></ul>
        </div>
        <div class="mantra">"I stop guessing and start knowing."</div>
      </div>

      <div class="month-card m3">
        <div class="month-tag">Month 03 / Break into Purple</div>
        <div class="month-target">Target rank: Flame Ruler → Garyu/Bushin</div>
        <p>Goal: matchup knowledge, wall game, Korean Backdash basics, mental reset habits.</p>
        <div class="week-block">
          <h4>Week 9 — Korean Backdash</h4>
          <ul><li>Input: ${iconHTML('b',14)} → N → ${iconHTML('b',14)} → ${iconHTML('db',14)} → ${iconHTML('b',14)} → ${iconHTML('db',14)}…</li><li>5 min/day drill, slow clean reps first</li><li>Input display ON — verify clean inputs</li><li>Integrate 1–2 KBDs per round</li></ul>
        </div>
        <div class="week-block">
          <h4>Week 10 — Matchups</h4>
          <ul><li>Pick 5 most-faced characters</li><li>Learn 1 key unsafe move per character</li><li>Know SSL vs SSR for each</li><li>Learn to duck their common highs</li></ul>
        </div>
        <div class="week-block">
          <h4>Week 11 — Wall game</h4>
          <ul><li>Learn wall splat → wall combo → wall break</li><li>Drill wall-carry routes</li><li>Practice wall oki mix-ups</li><li>Identify best wall engager for main</li></ul>
        </div>
        <div class="week-block">
          <h4>Week 12 — Mental</h4>
          <ul><li>Stop when tilted (two-loss rule)</li><li>Review 3 replays per session</li><li>Journal: "what did I do wrong?"</li><li>Study top-player footage</li><li><b class="accent-warm">Target: Garyu / Bushin (Purple)</b></li></ul>
        </div>
        <div class="mantra">"Every loss has a reason."</div>
      </div>
    </div>

    <h3 class="subhead">Beyond Month 3 — The Road to Tekken Emperor</h3>
    <div class="three-col">
      <div class="mini-card outline-purple">
        <h4>Months 4–6 · Blue</h4>
        <ul><li>KBD becomes reflex</li><li>All standing punishers automatic</li><li>10+ matchup strategies known</li><li>Consistent wall game</li><li>Counter-hit setups</li><li>Study opposing movesets</li></ul>
      </div>
      <div class="mini-card outline-blue">
        <h4>Months 6–12 · Red</h4>
        <ul><li>Frame trap mastery</li><li>Mix-up conditioning</li><li>Optimize combos by starter/position</li><li>1:1 ratio of replay review to ranked</li><li>Play a secondary character</li><li>Tournament practice</li></ul>
      </div>
      <div class="mini-card outline-red">
        <h4>Year 2+ · Tekken Emperor</h4>
        <ul><li>Mid-match adaptation</li><li>Anticipating opponent reads</li><li>Frame-perfect inputs</li><li>Coaching, tournament play</li><li>Matchup mastery (20+ characters)</li><li>Mental fortitude under pressure</li></ul>
      </div>
    </div>
  `;
}

function sectionRanksAndPicks() {
  return `
    <div class="section-head">
      <div class="kicker">§05</div>
      <h2>Ranks &amp; Character Selection</h2>
      <p class="lede">Where the walls are — and how to pick a main that lets you climb through them.</p>
    </div>

    <h3 class="subhead">The Tekken 8 Rank Ladder</h3>
    <div class="rank-strip">
      <div class="rank beginner">Beginner</div>
      <div class="rank green">1st → 9th Dan</div>
      <div class="rank yellow">Warrior → Vanquisher</div>
      <div class="rank orange">Flame Ruler</div>
      <div class="rank purple">Garyu → Bushin</div>
      <div class="rank blue">Raijin → Kishin</div>
      <div class="rank red">Tekken Emperor+</div>
    </div>
    <div class="three-col">
      <div class="mini-card">
        <h4 class="accent-warm">Flame Ruler — The Wall</h4>
        <p>Most players plateau here. To break through, stop winning with raw offense — start winning with <b>blocking, punishing, spacing</b>.</p>
      </div>
      <div class="mini-card">
        <h4 class="accent-purple">Purple — Real Tekken</h4>
        <p>"I can actually play Tekken." Punishers automatic, wall combos consistent, basic matchup knowledge.</p>
      </div>
      <div class="mini-card">
        <h4 class="accent-cool">Blue+ — Expert Tekken</h4>
        <p>KBD smooth, string punishes mid-string, conditions opponents, wall game optimized, replay study religious.</p>
      </div>
    </div>

    <h3 class="subhead">Picking Your Main — Don't Switch Until You're Purple</h3>
    <p class="body"><b class="warn">The #1 beginner mistake</b> is switching characters every week. You'll never get past Flame Ruler. Commit to one main for at least three months.</p>
    <div class="three-col">
      <div class="mini-card outline-good">
        <h4>Easy — Recommended starters</h4>
        <ul>
          <li><b>Lars</b> — big damage, forgiving</li>
          <li><b>Paul</b> — deathfist, simple plan</li>
          <li><b>Jack-8</b> — armor, big buttons</li>
          <li><b>Lili</b> — long range, easy pokes</li>
          <li><b>Asuka</b> — defense, punish-heavy</li>
          <li><b>Miary Zo</b> — plus frames, basic inputs</li>
        </ul>
      </div>
      <div class="mini-card outline-warm">
        <h4>Medium — Teach Tekken depth</h4>
        <ul>
          <li><b>Jun</b> — stances, CH, fundamentals</li>
          <li><b>Reina</b> — Mishima-lite, strong kit</li>
          <li><b>Jin</b> — classic, rewards practice</li>
          <li><b>King</b> — throws, wall oki</li>
          <li><b>Law</b> — fast, aggressive</li>
          <li><b>Azucena</b> — stance, movement</li>
        </ul>
      </div>
      <div class="mini-card outline-bad">
        <h4>Hard — Long learning curve</h4>
        <ul>
          <li><b>Nina</b> — execution, small Tekken</li>
          <li><b>Kazuya</b> — electric, Mishima mix</li>
          <li><b>Steve</b> — sway mixups, no kicks</li>
          <li><b>Yoshimitsu</b> — stances, weird tools</li>
          <li><b>Raven</b> — mix-heavy, evasive</li>
        </ul>
      </div>
    </div>

    <h3 class="subhead">Do's &amp; Don'ts — Universal</h3>
    <div class="do-dont">
      <div class="do">
        <h4>DO</h4>
        <ul>
          <li>Use Replay Takeover every session</li>
          <li>Drill punishers before ranked</li>
          <li>Block first, attack second</li>
          <li>Stick to 1 combo until automatic</li>
          <li>Break throws (drill 1 and 2 breaks)</li>
          <li>Study your own replays</li>
          <li>Rest on frustration</li>
        </ul>
      </div>
      <div class="dont">
        <h4>DON'T</h4>
        <ul>
          <li>Switch mains every week</li>
          <li>Mash buttons after blocking</li>
          <li>Spam wake-up kicks</li>
          <li>Panic Power Crush</li>
          <li>Duck randomly against mids</li>
          <li>Grind KBD before basics</li>
          <li>Rage-queue after losses</li>
        </ul>
      </div>
    </div>
  `;
}

function sectionGlossary() {
  return `
    <div class="section-head">
      <div class="kicker">§06</div>
      <h2>Glossary &amp; Resources</h2>
      <p class="lede">The vocabulary of Tekken, plus where to go next when you outgrow this site.</p>
    </div>

    <h3 class="subhead">Complete Glossary</h3>
    <div class="glossary">
      ${[
        ['1 / 2 / 3 / 4', 'L punch / R punch / L kick / R kick'],
        ['f b u d', 'Forward, back, up, down (TAP)'],
        ['df db uf ub', 'Diagonals'],
        ['F B U D', 'HOLD that direction'],
        ['+', 'Press buttons simultaneously'],
        [',', 'Input sequence (press then press)'],
        ['~', 'Cancel / smooth transition'],
        ['CH', 'Counter Hit — hit them mid-attack'],
        ['SS / SSL / SSR', 'Sidestep / Left / Right'],
        ['WS / ws', 'While Standing (rising from crouch)'],
        ['FC', 'Full Crouch'],
        ['OB / OH', 'On Block / On Hit'],
        ['i10, i12', 'Startup frames (lower = faster)'],
        ['-14, +3', 'Frames after the move (- = their turn)'],
        ['qcf / qcb', 'Quarter-circle forward/back motion'],
        ['hcf / hcb', 'Half-circle forward/back motion'],
        ['HE', 'Heat Engager (activates Heat)'],
        ['T! / Tornado', 'Aerial spin state, extends combos'],
        ['KBD', 'Korean Backdash (movement tech)'],
        ['BnB', 'Bread and Butter (staple combo)'],
        ['Oki', 'Okizeme — pressure on knockdown'],
        ['Launcher', 'Move that lifts opponent into juggle'],
        ['Mix / Mix-up', 'Mid/low or throw/strike guessing game'],
        ['Frame trap', 'Plus-frame pressure beating mash'],
        ['Whiff punish', 'Punish after opponent misses a swing'],
        ['Wall carry', 'Driving opponent to wall in combo'],
        ['Wall splat', 'Pinning opponent against wall'],
        ['Plus frames', 'You recover faster than opponent'],
        ['Safe', 'Cannot be punished on block (-9 or better)'],
        ['Unsafe', 'Launch-punishable on block'],
        ['Stagger', 'Forced block animation (can\'t retaliate)'],
        ['Jail', 'Block string that can\'t be interrupted'],
        ['Rage Art (RA)', 'Invulnerable finisher at low HP'],
        ['Heat Smash', 'Big attack during Heat state'],
        ['Heat Dash', 'Mid-combo Heat extender'],
        ['KND', 'Knockdown'],
      ].map(([term, def]) => `<div class="g-item"><dt>${term}</dt><dd>${def}</dd></div>`).join('')}
    </div>

    <h3 class="subhead">External Resources</h3>
    <div class="three-col">
      <div class="mini-card">
        <h4>Frame data &amp; cheat sheets</h4>
        <ul class="links">
          <li><a href="https://okizeme.gg/" target="_blank" rel="noopener">okizeme.gg</a> — frame data + video of every move</li>
          <li><a href="https://tekkendocs.com" target="_blank" rel="noopener">tekkendocs.com</a> — community frame data, guides</li>
          <li><a href="https://wavu.wiki" target="_blank" rel="noopener">wavu.wiki</a> — deep matchup and tech wiki</li>
        </ul>
      </div>
      <div class="mini-card">
        <h4>YouTube channels</h4>
        <ul>
          <li><b>PhiDX</b> — best beginner fundamentals</li>
          <li><b>FrameWhisperer</b> — frame and heat breakdowns</li>
          <li><b>rooflemonger</b> — character starter guides</li>
          <li><b>The Electric Underground</b> — fundamentals</li>
          <li><b>Friendly Koala</b> — mind-games theory</li>
        </ul>
      </div>
      <div class="mini-card">
        <h4>Community</h4>
        <ul>
          <li><b>r/Tekken</b> — replay review threads</li>
          <li><b>TekkenZaibatsu Discord</b> — matchup help</li>
          <li><b>Character Discords</b> — highly active</li>
          <li><b>Fiverr / Metafy</b> — 1:1 coaching</li>
        </ul>
      </div>
    </div>
  `;
}

// ============================================================
// CHARACTER DATA — Each character gets their own tabbed section
// ============================================================

// Continued in chars.js
