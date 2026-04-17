// ============================================================
// CHARACTER GUIDES — Expanded Season 2/3 edition
// Jun: Pagani (TekkenDocs, Jul 2025, v2.03)
// Nina: Lalo (TekkenDocs, Apr 2026, v3.01)
// Miary Zo: TekkenDocs frame data + dotesports + tekken8combo
// Lili: DewGlider (TekkenDocs, Jul 2025, v2.03)
// All move fields are arrow functions so notation toggles re-render.
// ============================================================

const CHARACTERS = {

  // ================================================================
  // JUN KAZAMA — Pagani's Season 2 Guide
  // ================================================================
  jun: {
    name: 'Jun Kazama',
    subtitle: 'The Kazama Bloodline · Counter-Hit Fundamentalist',
    difficulty: 'Medium',
    okizeme: 'jun',
    color: '#ff6b8b',
    accent: '#c9184a',
    tags: ['Stances: GEN · IZU · MIA', 'Counter-Hit Focused', 'Kazama Essence', 'Mid-Range Specialist'],

    overview: () => `
      <p class="body"><b>Jun is a fundamentals-based mid-range character</b> with three stances (Genjitsu, Izumo, Miare), strong counter-hit fishing, and the unique Kazama Essence install system. Pagani (top-level Jun, TekkenDocs) rates her as <b>intermediate difficulty</b> — 135 moves total, simple inputs, easy staple combos, but demands mastery of mental frames and conditioning to open defensive opponents.</p>

      <p class="body">The Kazama gameplan focuses on <b>neutral, defensive play, keepout, and catching opponents' timing with counter-hits</b>. Her toolkit includes keepout tools with reach like ${mv('df+4')} and ${mv('b+3')}, heavy CH tools like ${mv('d+3+4')} and ${mv('f+2+3')}, and elite i10 punishment via ${mv('uf+1')} and ${mv('FC.df+1')}.</p>

      <h3 class="subhead">Strengths</h3>
      <div class="mini-card outline-good">
        <ul>
          <li><b>Good movement</b> — decent sidestep and backdash amplify her neutral game</li>
          <li><b>Strong heat game</b> — ${mv('f+1+2')} parry in heat becomes MIA 2 combo, chip damage favors her not the opponent</li>
          <li><b>Solid tracking and space control</b> — ${mv('df+3')} is a safe knockdown mid homing move with great range, ${mv('b+2,2')} and ${mv('d+4')} for poking, ${mv('f,F+2')} and ${mv('f,F+1+2')} track to her strong side</li>
          <li><b>Big damage via CH</b> — ${mv('df+4')}, ${mv('d+3+4')}, ${mv('ws2')}, ${mv('FC.df+2')} all lead to launches</li>
          <li><b>Elite i10 punishment</b> — ${mv('uf+1')} KND with left-axis travel, ${mv('FC.df+1')} i10 low-block KND</li>
        </ul>
      </div>

      <h3 class="subhead">Weaknesses</h3>
      <div class="mini-card outline-bad">
        <ul>
          <li><b>Needs opponent flaws</b> — defense shuts her down. She needs CH reads/commitments for damage. Keepout characters and strong-movement characters are hard matchups.</li>
          <li><b>Kazama power self-damage</b> — ${mv('f+2,1+2')}, ${mv('df+2,1+2')} deal more damage to Jun than opponent on block, including non-recoverable health</li>
          <li><b>Offense requires mental frames</b> — multi-hit strings have bad frame data; requires fake pressure/conditioning</li>
          <li><b>Struggles to make life-lead comebacks</b> — risk-reward lows are unorthodox and stance-locked (${mv('FC.df+3')} poor clean hitbox, ${mv('GEN.1')} and ${mv('IZU.4,1')} both stance-locked)</li>
        </ul>
      </div>

      <h3 class="subhead">Heat System</h3>
      <div class="tip-box">
        <p><b>Jun's heat is CH-focused and amplifies her conditioning gameplan:</b></p>
        <ul style="margin: 8px 0 0 16px; line-height: 1.7;">
          <li>${mv('f+1+2')} becomes a <b>parry</b> (frame 5+) that combos into a guaranteed ${mv('MIA.2~F')}</li>
          <li>Kazama power moves deal <b>more chip to opponent</b> than Jun takes — ${mv('f,F+1+2')} becomes a monstrous pressure tool</li>
          <li>Kazama moves deal <b>half the chip</b> to Jun they normally would outside heat</li>
          <li>Gains ${mv('H.GEN.1,1+2')} as an extra hellsweep (costs 420 heat, not all of it)</li>
          <li>${mv('f+2,1+2')} becomes a <b>safe, hit-confirmable heat dash launcher</b> — the most important change</li>
        </ul>
      </div>

      <h3 class="subhead">Kazama Essence (Season 2 Install)</h3>
      <p class="body">Built via <b>Kazama power moves</b>: ${mv('d+1+2')}, ${mv('f+2')}, ${mv('df+2')}, ${mv('uf+1')}, ${mv('FC.df+1')}, ${mv('1+2')}, ${mv('f,F+1+2')}. Each grants different essence. <b>At 100 Essence, install activates</b> — enhances three moves:</p>
      <ul class="body" style="margin: 8px 0 14px 16px; line-height: 1.7;">
        <li>${mv('d+1+2')} — slight damage buff</li>
        <li>${mv('IZU.4,1')} — slight damage buff</li>
        <li>${mv('MIA.2')} — <b>massive buff</b>: damage 30 → 38, range extends halfway across screen (remains -20 OB, punishable by most Rage Arts)</li>
      </ul>
      <p class="body"><b>Essence persists between rounds</b>, so build it early. Your wall combo with install active does huge damage. Successful ${mv('uf+1')} and ${mv('FC.df+1')} grant 10 Essence each — you build install while punishing.</p>

      <div class="tip-box">
        <b>Playstyle summary:</b> Short-to-mid range. Poke for close pressure (${mv('b+2')}, ${mv('d+4')}, ${mv('db+3')}, ${mv('b+4,2')}). Mid-range for keepout or whiff punish with ${mv('f+2')} Demon Slayer. Long-range: ${mv('df+4')}, ${mv('df+3')}/${mv('f,F+3')} homing, and Kazama power moves ${mv('d+1+2')} and ${mv('MIA.2')}.
      </div>
    `,

    punishers: () => `
      <h3 class="subhead">Standing Punishers</h3>
      ${fd('jun', [
        { cmd: '1,2,2', level: 'h,h,h', startup: 'i10', dmg: '5,6,9', block: '+4', hit: '+11', ch: '+20c', notes: 'Hit-confirm 3-hit jab string. +11 OH into IZU stance pressure. Heals Jun and builds Essence. Best i10 for stance pressure or health.' },
        { cmd: 'uf+1', level: 'h', startup: 'i10', dmg: '22', block: '-14', hit: '+12a (+3)', ch: '', props: ['heat'], notes: 'i10 KND with left-axis travel. Costs 12 HP. Grants 10 Essence on hit. Use when you need damage/KND.' },
        { cmd: '2,1,4,1', level: 'h,h,m,h', startup: 'i11', dmg: '8,10,10,15', block: '-9', hit: '', ch: '', notes: 'Hit-confirm 28 dmg i12 punish. Full string +2 chip OB (pushback). 2,1,4 only is -1 close range.' },
        { cmd: '1+2', level: 'h,m', startup: 'i13', dmg: '10,14', block: '-9', hit: '+6', ch: '', props: ['heat'], notes: 'i13 heat engager.' },
        { cmd: 'b+4,2', level: 'm,m', startup: 'i13', dmg: '10,14', block: '-9', hit: '+6', ch: '', notes: 'Situational hit-confirm. Leaves +6 OH. Staple combo filler.' },
        { cmd: 'db+1,1,1+2', level: 'm,h,m', startup: 'i15', dmg: '13,12,20', block: '-11', hit: '+45a', ch: '', notes: 'Hit-confirm 45 dmg into KND. Grants healing on success. Confirm with db+1,1 (-11) then commit.' },
        { cmd: 'df+2,1+2', level: 'm,m', startup: 'i15', dmg: '14,20', block: '-17', hit: '+35a', ch: '', props: ['tornado'], notes: 'Best i16 launcher. Most damage and best combo routes.' },
        { cmd: 'f+2', level: 'M', startup: 'i17', dmg: '25', block: '-18', hit: '+32a (+17)', ch: '', notes: 'Long-range launcher. Demon Slayer. Unsafe but huge reward.' },
      ])}

      <h3 class="subhead">While-Standing (Crouching) Punishers</h3>
      ${fd('jun', [
        { cmd: 'FC.df+1', level: 'h', startup: 'i10', dmg: '36', block: '-19', hit: '+12a', ch: '', props: ['heat'], notes: 'i10 low-block KND with huge wall travel. Costs 18 HP. Best i10 WS punisher in game when wall is near. +10 Essence.' },
        { cmd: 'ws4', level: 'm', startup: 'i11', dmg: '16', block: '-9', hit: '+8', ch: '', notes: 'KND punish with good oki. Use when low-HP no-wall.' },
        { cmd: 'ws2,1', level: 'm,h', startup: 'i13', dmg: '12,15', block: '-12', hit: '+32a oCH', ch: '', notes: 'KND with wallsplat. Best pick if wall behind opponent — no Kazama cost.' },
        { cmd: 'ws3', level: 'm', startup: 'i14', dmg: '16', block: '-10', hit: '+19a', ch: '', notes: 'Fastest WS launcher.' },
        { cmd: 'uf+4,3', level: 'm,m', startup: 'i16', dmg: '14,14', block: '-13', hit: '+24a', ch: '', notes: 'Hopkick launcher. Use on off-axis angles.' },
        { cmd: 'ws3+4', level: 'm', startup: 'i18', dmg: '27', block: '-16', hit: '+40a', ch: '', notes: 'Strongest WS launcher.' },
      ])}

      <h3 class="subhead">Whiff Punishers</h3>
      ${fd('jun', [
        { cmd: '1,2,2', level: 'h,h,h', startup: 'i10', dmg: '5,6,9', block: '+4', hit: '+11', ch: '+20c', notes: 'Fast hit-confirm punish into IZU pressure.' },
        { cmd: 'df+4', level: 'm', startup: 'i15', dmg: '18', block: '-14', hit: '+48a (+17)', ch: '+52a', notes: 'Long-range i15 mid. Key mid-range keepout/whiff punish.' },
        { cmd: 'f+2', level: 'M', startup: 'i17', dmg: '25', block: '-18', hit: '+32a (+17)', ch: '', notes: 'Long-range launch punisher — Jun\'s signature.' },
        { cmd: 'uf+3+4', level: 'm,M', startup: 'i20~23', dmg: '5,18', block: '-8~-4', hit: '+18a', ch: '', notes: 'Active-frame re-tracking. Safe OB, guaranteed run-up f+2. Mid-crushes.' },
      ])}

      <div class="tip-box"><b>Punisher philosophy (Pagani):</b> "Both ${mv('uf+1')} and ${mv('FC.df+1')} are very unsafe, but the insane damage potential is worth the punishment. Both grant 10 Kazama Essence when landed — you're doing damage AND building your install."</div>
    `,

    moves: () => `
      <p class="body">Pagani's <b>Top 10 Moves</b> plus her most important notable moves. These are the buttons she lives and dies by at high level.</p>

      <h3 class="subhead">1 · ${mv('df+3')} — Her Key Neutral Move</h3>
      <p class="body"><b>Submissive Heel.</b> Jun's #1 space control move. Strong for denying movement and controlling neutral. KND on hit, wallsplats from close range, unique animation wallsplats from angles. Only -8 OB (safe), long reach, low hitbox catches most evasive stances/moves. "Extremely solid mid — a lot of characters would love to have a space control move like this."</p>
      <p class="body sm"><span class="code">m · i17 · -8 OB · +19a (+10) OH</span></p>

      <h3 class="subhead">2 · ${mv('d+3+4')} — Cancans (CH Panic Launcher)</h3>
      <p class="body"><b>Her strongest counter-hit tool.</b> Notorious — wildly hated, made stronger in T8 because cancans count as aerial status and <b>cannot be low-parried</b>. i14 startup. Low/high 2-hit. Airborne from frame 5 — evades lows, minimal risk on CH. Counters Power Crushes (first hit is low). -6 OB with pushback if opponent doesn't duck. Don't make them obvious, don't be afraid to use them.</p>
      <p class="body sm"><span class="code">l,h · i14, i24~27 · -25 OB · +30a (+20) OH</span></p>

      <h3 class="subhead">3 · ${mv('ws2')} / ${mv('ws2,1')} — CH Launcher</h3>
      <p class="body">i13 startup, -8 OB, very good tracking. In T8 gained <b>CH launcher</b> property. On CH you can launch with immediate tornado like ${mv('d+1+2')}. Set up via moves that recover in crouch: ${mv('db+2')}, ${mv('f+2~DF')}, ${mv('GEN.3~D')}. ${mv('ws2,1')} extension is her i13 WS punisher (-12 OB so be careful). One of her strongest tools to freeze opponents.</p>
      <p class="body sm"><span class="code">m · i13~14 · -8 OB · +5 OH · +32a oCH</span></p>

      <h3 class="subhead">4 · ${mv('b+2')} / ${mv('b+2,2')} / ${mv('b+2,1,2')} — Go-To Mid Check</h3>
      <p class="body">Jun's high-level mid check. Mid ender ${mv('b+2,2')} or high string enders condition opponents not to disrespect ${mv('b+2')}. Both ${mv('b+2')} and ${mv('b+2,2')} are -9 OB but have <b>great range, hitbox, and tracking</b> (especially hit 2). +2/+3 OH. String ender pushes opponent away OH, resetting neutral.</p>
      <p class="body"><b>${mv('b+2,1,2')}</b> — scariest option. String ender CH launches. Second hit duckable (mix with ${mv('b+2,2')}). ${mv('b+2,1')} also transitions to stance — look for ${mv('GEN.1')} mix.</p>
      <p class="body sm"><span class="code">m · i14~15 · -9 OB · +2 OH</span></p>

      <h3 class="subhead">5 · ${mv('SS.4')} — Her Signature Pressure Tool</h3>
      <p class="body">Lost TTT2 CH launcher glory but gained <b>Heat Engager</b> in T8. i18 startup, <b>+6 OB</b>. Comes from sidestep — grants sidestep evasion. In Heat, becomes launcher (if blocked Heat Dash, only +5). Access via built-in sidesteps: ${mv('f+3~D(U)')}, ${mv('1,2~D(U)')}, and MIA~D(U) — but i21 from those.</p>
      <p class="body sm"><span class="code">m · i18~20 · +6 OB · +8c OH</span></p>

      <h3 class="subhead">6 · ${mv('f,F+1+2')} — Forward-Advancing Pressure Mid</h3>
      <p class="body">Deals chip to both Jun and opponent on block. Access to <b>both stances</b> via hold F (GEN) or B (MIA). On its own +6 OB, transitions become +9 OB. Very good tracking and hitbox. BUT — i22 from instant FF input, so <b>slow</b> — requires conditioning. Kazama Essence move — include to build install while pressuring.</p>
      <p class="body sm"><span class="code">m · i22 · +6 OB · +23a (+13) OH</span></p>

      <h3 class="subhead">7 · ${mv('f+2,1+2')} — Demon Slayer / Whiff Punisher</h3>
      <p class="body">i17 startup, -18 OB raw, <b>very rewarding on hit</b>. Signature Kazama whiff punisher. Solid range, great hitbox. Jun has <b>unique ability to turn launcher into Heat engager</b> — doesn't launch but becomes -9 OB (safe). <b>In Heat</b>, ${mv('f+2,1+2')} into heat dash becomes hit-confirm launcher. Covers weak side. ${mv('f+2')} has unique evasiveness — sometimes goes under mids.</p>
      <p class="body sm"><span class="code">M,M · i17~18 · -9 OB (with 1+2 in heat) · +32a (+17) OH</span></p>

      <h3 class="subhead">8 · ${mv('FC.df+2')} — Grace (Low Poke)</h3>
      <p class="body">Known Kazama button. i16 low, good tracking both sides, guarantees ${mv('ws3')} launcher on CH — <b>free launcher off a low</b>. Only -11 OB. Locked behind crouching state. Complements ${mv('ws2')} beautifully — apply crouching mid/low mix with great CH rewards.</p>
      <p class="body sm"><span class="code">L · i16~17 · -11 OB · +0 OH · +14 oCH</span></p>

      <h3 class="subhead">9 · ${mv('uf+1')} / ${mv('FC.df+1')} — Divine Exile Heaven/Earth (i10 Punishers)</h3>
      <p class="body">Covered in Punishers tab. Both i10 KND with wild travel, very unsafe (-14 / -19), self-damage (12 / 18 HP). Each grants <b>10 Kazama Essence on land</b>. Build install while punishing.</p>
      <p class="body sm"><span class="code">h,h · i10, i26 · -14 OB · +12a (+3) OH</span></p>

      <h3 class="subhead">10 · ${mv('1,2,2')} — Mishima-Style Jab String</h3>
      <p class="body">In S2, turned from CH confirm into <b>NH confirm</b>. Access to IZUMO with heavy + frames (+11 OH) forces respect. <b>Heals Jun</b> (one of few healing moves), builds Essence. Can hit-confirm when low HP. Grab mix with ${mv('IZU.1+3')} or safe stance mid ${mv('IZU.f+1+2')} — both grant extra healing.</p>
      <p class="body sm"><span class="code">h,h,h · i10 · +4 OB · +11 OH · +20c oCH</span></p>

      <h3 class="subhead">Notable Supplementary Moves</h3>

      <h4 class="minihead">${mv('f+4')} — Homing Heat Setup</h4>
      <p class="body sm">Altered from TTT2 (was launcher). Now +13 OH for guaranteed damage. Common follow-up: ${mv('1+2')} (i13 punisher/HE). Range and recovery make it space control + keepout. i19, +3 OB, high homing. <b>Guaranteed heat engager on hit.</b></p>

      <h4 class="minihead">${mv('MIA.1+2')} — Season 2 Stance Homing Mid</h4>
      <p class="body sm">Builds essence, long range, high evasion, strong aerial tailspin on aerial opponents, +4 OB. Transitions to IZUMO <b>without block properties</b> — commit to new move. Forces IZU interaction. Counters: ${mv('IZU.1+3')} throw (i14) and ${mv('IZU.1')} (i13) are fastest stance buttons. Fast mids: ${mv('IZU.3')} and ${mv('IZU.f+1+2')}.</p>

      <h4 class="minihead">${mv('GEN.1')} — Chunkiest Low</h4>
      <p class="body sm">20 damage, <b>+3 OH</b> — sets up ${mv('ws2')} as CH frame trap while making ${mv('ws2')} hard to step. Very good left tracking. Grounded followup on CH. -12 OB. Enter GEN via: ${mv('ws1,1,F')}, ${mv('b+2,1,F')}, ${mv('f,F+2~F')}, ${mv('f,F+1+2~F')}.</p>

      <h4 class="minihead">${mv('uf+3')} — Low-Profiling Safe CH Launcher</h4>
      <p class="body sm">TTT2 survivor. i20 mid, -6 OB, safe CH launcher. <b>+5 on NH</b> — loop on NH forces opponent to block followup. If they disrespect +5, ${mv('d+3+4')} counter-hits for launch.</p>

      <h4 class="minihead">${mv('df+4')} — Long-Range CH Tool</h4>
      <p class="body sm">i15, fast AND long-reaching. CH launcher. Decent weak-side tracking (SSR). Keepout and whiff punisher. NH crumple stun forces tech roll — new mix situation, combos at wall. -14 OB.</p>

      <h4 class="minihead">${mv('d+4')} / ${mv('d+4,4')} — Legacy Low Poke</h4>
      <p class="body sm">Old go-to TTT2 low. Fast i15, solid range, very good tracking. -1 OH — creates whiff punish chance. -12 OB. Follow-up is HIGH (KND + wallsplat NH/CH) but <b>does not jail</b> — can be ducked. Mostly use as poke.</p>

      <h4 class="minihead">${mv('db+3')} — New T8 Low for Pressure</h4>
      <p class="body sm">Added in T8 for pressure poking. <b>+2 OH</b>, +6 on CH (CH stun <b>looks more plus than it is</b>). If respected → room for ${mv('SS.4')} / ${mv('f,F+1+2')}. If disrespected → CH hard. Less range than ${mv('d+4')} but more pressure.</p>

      <h4 class="minihead">${mv('uf+3+4')} — Pagani's Personal Pick</h4>
      <p class="body sm">Long-range mid with <b>fast follow-up active frames</b> (hit 2 is i2~6). If opponent whiff punishes too early, it <b>realigns and tracks</b>. Mostly -8 OB or safer. Hits grounded, guaranteed mid followup NH/CH (run-up ${mv('f+2')}). Niche: late active frames near wall → ${mv('uf+2')} mini-combo. Low-profiles via jump frames. Linear — can be stepped. Excellent round ender (42 damage).</p>
    `,

    framedata: () => `
      <div class="section-head">
        <h3 class="subhead">Complete Frame Data Reference — Jun Kazama</h3>
      </div>

      <p class="body">Full frame data for Jun's most-used moves. <b>Click any command</b> to open the move's video on okizeme.gg. Data sourced from TekkenDocs Season 2 (v2.03). Toggle ICON ↔ TEXT notation with the top-right switch.</p>

      <h3 class="subhead">Pokes &amp; Mids</h3>
      ${fd('jun', [
        { cmd: '1', level: 'h', startup: 'i10', dmg: '5', block: '+1', hit: '+8', ch: '', notes: 'Jab. Access to 1,2 / 1,2,2 / 1,2,4 strings.' },
        { cmd: '1,2', level: 'h,h', startup: 'i10', dmg: '5,8', block: '-1', hit: '+8', ch: '', notes: 'Standard jab string. Builds into 1,2,2 heal string.' },
        { cmd: '1,2,2', level: 'h,h,h', startup: 'i10', dmg: '5,6,9', block: '+4', hit: '+11', ch: '+20c', notes: 'Hit-confirm into IZU. Heals Jun. Builds Essence.' },
        { cmd: '1,2,4', level: 'h,h,h', startup: 'i10', dmg: '5,8,12', block: '-9', hit: '+8', ch: '', notes: 'Alternate ender — safer option.' },
        { cmd: '2,1,4', level: 'h,h,m', startup: 'i11', dmg: '8,10,10', block: '-1', hit: '+6', ch: '', notes: 'i12 punisher core. End at -1 close range.' },
        { cmd: '2,1,4,1', level: 'h,h,m,h', startup: 'i11', dmg: '8,10,10,15', block: '-9', hit: '+13', ch: '', notes: 'Full i12 punish — +2 chip pushback.' },
        { cmd: '4', level: 'h', startup: 'i12', dmg: '15', block: '-9', hit: '+7', ch: '+32d', notes: 'i12 high. Grounded hit on CH.' },
        { cmd: 'df+1', level: 'm', startup: 'i13', dmg: '12', block: '-1', hit: '+5', ch: '', notes: 'Main mid check. Safe, plus-frame pressure.' },
        { cmd: 'df+1,2', level: 'm,m', startup: 'i13', dmg: '12,14', block: '-7', hit: '+3', ch: '', notes: 'Mid-mid extension.' },
        { cmd: 'df+2', level: 'm', startup: 'i15', dmg: '14', block: '-9', hit: '+22a', ch: '', notes: 'Raw i15 launcher.' },
        { cmd: 'df+2,1+2', level: 'm,m', startup: 'i15', dmg: '14,20', block: '-17', hit: '+35a', ch: '', props: ['tornado'], notes: 'i15 launcher with T! ender. Best i16 launch route.' },
        { cmd: 'df+3', level: 'm', startup: 'i17', dmg: '20', block: '-8', hit: '+19a (+10)', ch: '', props: ['homing'], notes: 'Homing mid, KND on hit, wallsplats from close. #1 space control.' },
        { cmd: 'df+4', level: 'm', startup: 'i15', dmg: '21', block: '-14', hit: '+48a (+17)', ch: '+52a', notes: 'Long-range CH launcher. Crumple stun NH.' },
        { cmd: 'b+2', level: 'm', startup: 'i14', dmg: '15', block: '-9', hit: '+2', ch: '', notes: 'Great range/hitbox. +2 OH.' },
        { cmd: 'b+2,2', level: 'm,m', startup: 'i14', dmg: '15,17', block: '-9', hit: '+3', ch: '', notes: 'Mid ender, pushback OH resets neutral.' },
        { cmd: 'b+2,1,2', level: 'm,h,h', startup: 'i14', dmg: '15,10,15', block: '-9', hit: '', ch: 'launch', notes: 'CH launcher ender. 2nd hit duckable.' },
        { cmd: 'b+3', level: 'm', startup: 'i16', dmg: '22', block: '-19~-18', hit: '+22a (+12)', ch: '', notes: 'Keepout launcher. Backwards recovery tricky to punish.' },
        { cmd: 'b+4,2', level: 'm,m', startup: 'i13', dmg: '10,14', block: '-9', hit: '+6', ch: '', notes: 'Core combo filler.' },
        { cmd: 'f+2', level: 'M', startup: 'i17', dmg: '25', block: '-18', hit: '+32a (+17)', ch: '', notes: 'Demon Slayer. Evades some mids. Raw launcher.' },
        { cmd: 'f+2,1+2', level: 'M,M', startup: 'i17', dmg: '25,18', block: '-9', hit: '+32a (+17)', ch: '', props: ['heat'], notes: 'Heat engager ender — makes f+2 safe. In heat: hit-confirm launcher via heat dash.' },
        { cmd: 'f+3,2', level: 'm,h', startup: 'i15', dmg: '14,15', block: '-6', hit: '+2', ch: '', notes: 'Core combo tool. Can cancel to GEN with F.' },
        { cmd: 'f+4', level: 'h', startup: 'i19', dmg: '20', block: '+3', hit: '+13', ch: '', props: ['homing'], notes: 'Homing, +3 OB. On hit → guaranteed 1+2 heat engager.' },
        { cmd: 'uf+1', level: 'h', startup: 'i10', dmg: '22', block: '-14', hit: '+12a', ch: '', props: ['heat'], notes: 'Divine Exile Heaven. i10 KND, costs 12 HP, +10 Essence.' },
        { cmd: 'uf+3', level: 'm', startup: 'i20', dmg: '20', block: '-6', hit: '+5', ch: '+30a', notes: 'Low-profiling safe CH launcher. +5 NH loop.' },
        { cmd: 'uf+3+4', level: 'm,M', startup: 'i20~23', dmg: '5,18', block: '-8~-4', hit: '+18a', ch: '', notes: 'Active frames re-track. Mid-crushing.' },
        { cmd: 'u+2', level: 'h', startup: 'i18', dmg: '18', block: '-6', hit: '+10a', ch: '', props: ['homing'], notes: 'Homing → IZU stance transition.' },
      ])}

      <h3 class="subhead">Lows</h3>
      ${fd('jun', [
        { cmd: 'db+3', level: 'L', startup: 'i18', dmg: '15', block: '-12', hit: '+2', ch: '+6c', notes: 'Main low poke. CH stun looks more plus than it is.' },
        { cmd: 'd+4', level: 'L', startup: 'i15', dmg: '12', block: '-12', hit: '-1', ch: '', notes: 'Fast low with spacing. Legacy TTT2 tool.' },
        { cmd: 'd+4,4', level: 'L,h', startup: 'i15', dmg: '12,20', block: '-13', hit: 'KND', ch: '', notes: 'High follow-up, KND/wallsplat NH/CH. Duckable — doesn\'t jail.' },
        { cmd: 'd+3+4', level: 'l,h', startup: 'i14, i24', dmg: '12,18', block: '-25', hit: '+30a', ch: '+30a', notes: 'CANCANS. Aerial from f5. Cannot be low-parried. CH launcher. -6 OB if not ducked.' },
        { cmd: 'd+1+2', level: 'M', startup: 'i21', dmg: '20', block: '-17', hit: '+22a', ch: '', props: ['tornado'], notes: 'Instant tornado. Kazama power move. Builds Essence.' },
        { cmd: 'FC.df+1', level: 'h', startup: 'i10', dmg: '36', block: '-19', hit: '+12a', ch: '', props: ['heat'], notes: 'i10 low-punish KND. Costs 18 HP. +10 Essence.' },
        { cmd: 'FC.df+2', level: 'L', startup: 'i16', dmg: '15', block: '-11', hit: '+0', ch: '+14', notes: 'Grace. i16 low, good tracking, CH guarantees ws3 launcher.' },
        { cmd: 'FC.df+3', level: 'L', startup: 'i22', dmg: '18', block: '-13', hit: '+5', ch: '', notes: 'Chunky low. Poor clean hitbox.' },
        { cmd: 'db+1,1,1+2', level: 'm,h,m', startup: 'i15', dmg: '13,12,20', block: '-11', hit: '+45a', ch: '', notes: 'Hit-confirm i15 launcher. Heals on success.' },
        { cmd: 'db+2', level: 'M', startup: 'i18', dmg: '18', block: '-10', hit: '+5', ch: '', notes: 'Recovers in crouch → ws2 setup.' },
      ])}

      <h3 class="subhead">Pressure &amp; Stance-Entry Moves</h3>
      ${fd('jun', [
        { cmd: 'SS.4', level: 'm', startup: 'i18~20', dmg: '25', block: '+6', hit: '+8c', ch: '', props: ['heat'], notes: '+6 OB pressure. Heat engager. Linear.' },
        { cmd: 'f,F+2', level: 'm', startup: 'i15', dmg: '18', block: '-6', hit: '+5', ch: '', notes: 'Running mid. Transitions: ~F for GEN, ~B for MIA cancel.' },
        { cmd: 'f,F+2,2', level: 'm,m', startup: 'i15', dmg: '18,16', block: '-9', hit: '+5', ch: '', notes: 'Extension.' },
        { cmd: 'f,F+2,3', level: 'm,L', startup: 'i15', dmg: '18,16', block: '-15', hit: 'KND', ch: '', notes: 'Low ender. Combo ender for carry.' },
        { cmd: 'f,F+1+2', level: 'm', startup: 'i22', dmg: '25', block: '+6', hit: '+23a (+13)', ch: '', props: ['heat', 'chip'], notes: 'Kazama power. +6 OB, chip damage. Monstrous in heat.' },
        { cmd: 'f,F+3', level: 'm', startup: 'i18', dmg: '20', block: '-7', hit: '+8', ch: '', props: ['homing'], notes: 'Homing running kick.' },
        { cmd: 'f,F+3,3+4', level: 'm,m', startup: 'i18', dmg: '20,22', block: '-9', hit: 'KND', ch: '', notes: 'Extension. Floor break ender.' },
        { cmd: '1+2', level: 'h,m', startup: 'i13', dmg: '10,14', block: '-9', hit: '+6', ch: '', props: ['heat'], notes: 'i13 heat engager combo tool.' },
        { cmd: 'f+1+2', level: 'h', startup: 'i23', dmg: '0', block: '—', hit: 'parry', ch: '', notes: 'In Heat becomes punch parry (frame 5+), combos into MIA.2~F.' },
        { cmd: 'f+2+3', level: '', startup: 'i28~29', dmg: '0', block: '0', hit: '+25a', ch: '', notes: 'Punch parry sebaki. High. Sebaki frames from i4. -0 OB.' },
        { cmd: 'b+1+3', level: '', startup: 'i4 reversal', dmg: '0', block: '—', hit: 'reversal', ch: '', notes: 'Punch AND kick reversal like Asuka. Countered by throws.' },
      ])}

      <h3 class="subhead">Stance Moves — GEN / IZU / MIA</h3>
      ${fd('jun', [
        { cmd: 'GEN.1', level: 'L', startup: 'i20~21', dmg: '20', block: '-12', hit: '+3c', ch: '+26a', notes: 'Chunkiest low. Good left tracking. Grounded followup on CH.' },
        { cmd: 'GEN.2', level: 'm', startup: 'i19', dmg: '22', block: '-12', hit: '+10', ch: '', props: ['powercrush'], notes: 'Power crush in stance.' },
        { cmd: 'GEN.3', level: 'm', startup: 'i14', dmg: '14', block: '-5', hit: '+3', ch: '', notes: 'Can cancel to crouch with D.' },
        { cmd: 'GEN.3,2', level: 'm,m', startup: 'i14', dmg: '14,20', block: '-13', hit: 'KND', ch: '', notes: 'Spike combo ender.' },
        { cmd: 'GEN.4', level: 'h', startup: 'i12', dmg: '18', block: '-9', hit: '+5', ch: '', props: ['homing'], notes: 'Homing high.' },
        { cmd: 'IZU.1,1', level: 'h,h', startup: 'i12', dmg: '8,12', block: '-3', hit: '+6', ch: '', notes: 'Most common combo filler. +8~9 OH.' },
        { cmd: 'IZU.2', level: 'm', startup: 'i16', dmg: '20', block: '-17', hit: '+35a', ch: '', notes: 'Stance launcher.' },
        { cmd: 'IZU.3', level: 'm', startup: 'i15', dmg: '18', block: '-8', hit: '+5', ch: '', props: ['heat'], notes: 'Mid heat engager. Airborne — jumps over duckjabs.' },
        { cmd: 'IZU.4,1', level: 'L,m', startup: 'i19', dmg: '14,16', block: '-13', hit: 'KND', ch: '', notes: 'Low hellsweep. Damage-buffed with Kazama Essence.' },
        { cmd: 'IZU.1+2', level: 'm', startup: 'i18', dmg: '24', block: '-13', hit: '+25a', ch: '', notes: 'Floor break combo ender.' },
        { cmd: 'IZU.f+1+2', level: 'm', startup: 'i17', dmg: '18', block: '-6', hit: '+5', ch: '+25a', props: ['homing'], notes: 'Safe homing mid. CH followup: DB1,1,1+2.' },
        { cmd: 'IZU.1+3', level: 'th', startup: 'i14', dmg: '30', block: '', hit: 'throw', ch: '', notes: 'Stance throw. Heals Jun. Break with 1.' },
        { cmd: 'MIA.1', level: 'm', startup: 'i15', dmg: '15', block: '-5', hit: '+3', ch: '', props: ['tornado'], notes: 'Tornado extender.' },
        { cmd: 'MIA.2', level: 'sm', startup: 'i16', dmg: '30 (38 w/Essence)', block: '-20', hit: '+26a (+0)', ch: '', props: ['heat'], notes: 'HE + combo finisher. Kazama Essence: 30→38 dmg, half-screen range.' },
        { cmd: 'MIA.1+2', level: 'm', startup: 'i20', dmg: '18', block: '+4', hit: '+11g', ch: '', props: ['homing'], notes: 'Homing → IZU. +4 OB. Heals 3 HP / 1 Essence.' },
      ])}

      <h3 class="subhead">Throws &amp; Rage Art</h3>
      ${fd('jun', [
        { cmd: '1+3', level: 't', startup: 'i12~14', dmg: '35', block: '', hit: 'throw', ch: '', notes: 'Break with 1. Left throw.' },
        { cmd: '2+4', level: 't', startup: 'i12~14', dmg: '35', block: '', hit: 'throw', ch: '', notes: 'Break with 2. Right throw.' },
        { cmd: 'uf+1+2', level: 't', startup: 'i12', dmg: '35', block: '', hit: 'throw', ch: '', notes: 'Front grab. Break with 1+2.' },
        { cmd: 'R.df+1+2', level: 'm,t', startup: 'i20', dmg: '55+', block: '-18', hit: '+0d', ch: '', props: ['powercrush'], notes: 'Rage Art. Damage scales with HP. Reversal break. Power crush 8+.' },
        { cmd: 'H.2+3', level: 'm', startup: 'i13', dmg: '55', block: 'safe', hit: 'KND', ch: '', notes: 'Heat Smash — huge range, safe. Consumes heat.' },
      ])}
    `,

    combos: () => `
      <div class="section-head">
        <h3 class="subhead">Bread-and-Butter Combo Routes</h3>
      </div>

      <p class="body"><b>Pagani's recommended skeleton:</b> <span class="stance-label">launcher</span> → ${mv('b+4,2')} → ${mv('f+3')} → ${mv('b+2,1~B')} → MIA.${mv('1+2')} → IZU.${mv('2')} <span class="props-inline">${prop('tornado', 14)}</span> → GEN ender. Learn skeleton, swap the launcher.</p>

      <h3 class="subhead">Optimal Combos (High-Level Routes)</h3>

      <table class="data">
        <thead><tr><th style="width: 22%">Starter</th><th>Route</th></tr></thead>
        <tbody>
          <tr><td>${mv('f+2')} / ${mv('IZU.2')}</td><td class="route">${mv('f+4')} → ${mv('f,F+2~B')} → MIA.${mv('1+2')} → ${mv('f+3')} → ${mv('b+2,1~B')} → MIA.${mv('1+2')} → IZU.${mv('2')} ${prop('tornado', 14)} → GEN.${mv('3')} (delay) ${mv('2')}</td></tr>
          <tr><td>${mv('df+2,1+2')} / ${mv('ws3+4')}</td><td class="route">${mv('f+4')} → ${mv('b+4,2')} → ${mv('f+3')} → ${mv('b+2,1~B')} → MIA.${mv('1+2')} → IZU.${mv('2')} ${prop('tornado', 14)} → GEN.${mv('3')} (delay) ${mv('2')}</td></tr>
          <tr><td>${mv('d+1+2')} / ${mv('MIA.1')} / CH ${mv('uf+2')} / CH ${mv('b+2,1,2')}</td><td class="route">GEN.${mv('4')} → ${mv('b+4,2')} → ${mv('f+3')} → ${mv('b+2,1~B')} → MIA.${mv('1+2')} → IZU.${mv('1~F')} → GEN (slight delay) ${mv('2')}</td></tr>
          <tr><td>CH ${mv('uf+3')} / CH ${mv('ws2')} / CH ${mv('ws1+2')} / CH ${mv('df+4')}</td><td class="route">${mv('d+1+2')} ${prop('tornado', 14)} → GEN.${mv('4')} → ${mv('f+3')} → ${mv('b+2,1~B')} → MIA.${mv('1+2')} → IZU.${mv('1~F')} → GEN ${mv('2')}</td></tr>
          <tr><td>${mv('b+3,2')} / ${mv('uf+4,3')}</td><td class="route">GEN.${mv('4')} → ${mv('f+3')} → ${mv('b+2,1~B')} → MIA.${mv('1+2')} → IZU.${mv('1~F')} → GEN ${mv('2')}</td></tr>
          <tr><td>CH ${mv('d+2')}</td><td class="route">${mv('FC.df+2')} → ${mv('ws2')} → ${mv('f+3')} → ${mv('b+2,1~B')} → MIA.${mv('1+2')} → IZU.${mv('f+1,1')} ${prop('tornado', 14)} → GEN.${mv('3')} (delay) ${mv('2')}</td></tr>
          <tr><td>CH ${mv('d+3+4')} / ${mv('ws3')}</td><td class="route">${mv('4')} → ${mv('f,F+2~B')} → MIA.${mv('1+2')} → ${mv('f+3')} → ${mv('b+2,1~B')} → MIA.${mv('1+2')} → IZU.${mv('2')} ${prop('tornado', 14)} → GEN.${mv('3')} (delay) ${mv('2')}</td></tr>
          <tr><td>${mv('f+2+3')} punch parry</td><td class="route">Sidewalk right → ${mv('d+1+2')} ${prop('tornado', 14)} → GEN.${mv('4')} → ${mv('b+4,2')} → ${mv('f,F+2~B')} → MIA.${mv('1+2')} → IZU.${mv('1~F')} → GEN ${mv('2')}</td></tr>
        </tbody>
      </table>

      <h3 class="subhead">Beginner Combos</h3>

      <table class="data">
        <thead><tr><th style="width: 22%">Starter</th><th>Route</th></tr></thead>
        <tbody>
          <tr><td>${mv('f+2')}</td><td class="route">${mv('f+3')} → ${mv('1,1')} → IZU.${mv('1,1')} ${prop('tornado', 14)} → (F1) IZU.${mv('1,1')}</td></tr>
          <tr><td>${mv('d+3+4')}</td><td class="route">${mv('4')} → ${mv('f+1')} → IZU.${mv('1,1')} ${prop('tornado', 14)} → (F1) IZU.${mv('1,1')}</td></tr>
          <tr><td>${mv('df+2')}</td><td class="route">${mv('4')} → ${mv('1,1')} → IZU.${mv('1,1')} ${prop('tornado', 14)} → (F1) IZU.${mv('1,1')}</td></tr>
          <tr><td>${mv('df+2,1+2')} / ${mv('ws3+4')}</td><td class="route">${mv('uf+3')} → ${mv('1,1')} → IZU.${mv('1,1')} ${prop('tornado', 14)} → (F1) IZU.${mv('1,1')}</td></tr>
          <tr><td>${mv('b+3,2')}</td><td class="route">Run up ${mv('uf+4,3')} → MIA.${mv('2')}</td></tr>
          <tr><td>${mv('uf+4,3')}</td><td class="route">GEN.${mv('4')} → ${mv('1,1')} → IZU.${mv('1,1')}</td></tr>
        </tbody>
      </table>

      <h3 class="subhead">Combo Enders</h3>

      <h4 class="minihead">Carry (drive to wall)</h4>
      <p class="body">${cmd('jun','b+4,2')} · MIA.${mv('1+2')}, IZU.${mv('1')} · ${cmd('jun','f,F+2,3')} · ${cmd('jun','ws2,1')} · ${cmd('jun','df+2,1+2')} · ${cmd('jun','ws3+4')} · ${cmd('jun','d+3+4')}</p>

      <h4 class="minihead">Floor break <span class="props-inline">${prop('floorbreak', 14)}</span></h4>
      <p class="body">${cmd('jun','SS.4')} · ${cmd('jun','d+2')} · ${cmd('jun','IZU.1+2')} · ${cmd('jun','f,F+3,3+4')} · ${cmd('jun','uf+3+4')}</p>

      <h4 class="minihead">Wall break <span class="props-inline">${prop('wallbreak', 14)}</span></h4>
      <p class="body">${cmd('jun','MIA.2')} · ${cmd('jun','3')} · ${cmd('jun','f,F+2,2')} · ${cmd('jun','ws1,1,4')} · ${cmd('jun','f,F+1+2')}</p>

      <h3 class="subhead">Wall Combos</h3>

      <h4 class="minihead">Without Tornado</h4>
      <p class="body">${cmd('jun','1+4,2,4')} · ${cmd('jun','db+1,1,1+2')} · ${mv('uf+4,3')} MIA.${mv('2')}</p>

      <h4 class="minihead">With Tornado <span class="props-inline">${prop('tornado', 14)}</span></h4>
      <ul class="body" style="margin: 8px 0 0 20px; line-height: 1.9;">
        <li>${mv('d+1+2')} ${prop('tornado', 14)} → ${mv('uf+4,3')} MIA.${mv('2')}</li>
        <li>${mv('f+3,4')} ${prop('tornado', 14)} → ${mv('f,F+2')}, MIA.${mv('2')}</li>
        <li>${mv('u+2')}, IZU.${mv('1,1')} ${prop('tornado', 14)} → ${mv('f,F+2,2')}</li>
        <li>${mv('b+2,1,2')} ${prop('tornado', 14)} → ${mv('ws1,1,2')}</li>
      </ul>
    `,

    stances: () => `
      <h3 class="subhead">The Three Stances — Detailed Breakdown</h3>

      <p class="body">Pagani's stance philosophy: <b>Izumo for offense forcing, Genjitsu for mix and combos, Miare for healing and niche keepout.</b> All three interconnect via transitions.</p>

      <h3 class="subhead">IZUMO (IZU) — Offensive Forcing Stance</h3>
      <div class="card">
        <p class="body"><b>Enter:</b> ${mv('f+3+4')} (raw), ${mv('1,2,2')}, ${mv('1,1')}, ${mv('f+1')}, ${mv('u+2')} (homing), ${mv('MIA.1+2')} (homing). Transitions grant health (unless via ${mv('MIA.1+2')}) and Kazama Essence.</p>
        <p class="body"><b>Izumo Smash (${mv('1,1~F')} / ${mv('f+1~F')}):</b> Only transitions that <b>don't grant + OB</b>, but Jun CAN block in this unique transition.</p>
        <p class="body"><b>Any other IZU transition:</b> Cannot block, but <b>+4 OB</b> to force offense. <b>+8~9 OH (smash)</b> or <b>+11 OH (any other)</b> — room for 50/50s.</p>

        <h4 class="minihead">IZU Moves</h4>
        <table class="data compact">
          <tr><td>${cmd('jun','IZU.1,1')}</td><td>Standard string, combo filler ${prop('tornado', 14)}</td></tr>
          <tr><td>${cmd('jun','IZU.1,2')}</td><td>Alt extension — CH combos</td></tr>
          <tr><td>${cmd('jun','IZU.2')}</td><td>Stance launcher (punishable)</td></tr>
          <tr><td>${cmd('jun','IZU.3')}</td><td>Mid HE, airborne jumps duckjabs ${prop('heat', 14)}</td></tr>
          <tr><td>${cmd('jun','IZU.4,1')}</td><td>Low hellsweep (Essence buff)</td></tr>
          <tr><td>${cmd('jun','IZU.1+2')}</td><td>Floor break ender ${prop('floorbreak', 14)}</td></tr>
          <tr><td>${cmd('jun','IZU.f+1+2')}</td><td>Safe homing mid ${prop('homing', 14)}</td></tr>
          <tr><td>${cmd('jun','IZU.1+3')}</td><td>Stance throw — heals Jun, break 1</td></tr>
        </table>

        <div class="tip-box"><b>Forced 50/50:</b> From IZU +4 OB, opponent faces ${mv('IZU.1+3')} (throw), ${mv('IZU.1')} (i13 high), ${mv('IZU.3')} (HE mid), ${mv('IZU.4,1')} (low).</div>
      </div>

      <h3 class="subhead">GENJITSU (GEN) — Mix and Combo Stance</h3>
      <div class="card">
        <p class="body"><b>Enter:</b> ${mv('b+3+4')} (raw), ${mv('f,F+2~F')}, ${mv('b+2,1~F')}, ${mv('ws1,1~F')}, ${mv('f,F+1+2~F')}.</p>
        <p class="body"><b>Unique property:</b> GEN auto-attacks when opponent uses <b>low attack OR throw</b>. Entering GEN on opponent's low grants healing + followup. <b class="warn">Cannot block in GEN stance.</b></p>

        <h4 class="minihead">GEN Moves</h4>
        <table class="data compact">
          <tr><td>${cmd('jun','GEN.1')}</td><td>Chunkiest low. +3 OH. Great left tracking.</td></tr>
          <tr><td>${cmd('jun','GEN.2')}</td><td>Power Crush ${prop('powercrush', 14)}</td></tr>
          <tr><td>${cmd('jun','GEN.3')}</td><td>Mid, cancel to crouch with D</td></tr>
          <tr><td>${cmd('jun','GEN.3,2')}</td><td>Spike ender</td></tr>
          <tr><td>${cmd('jun','GEN.4')}</td><td>Homing high ${prop('homing', 14)}</td></tr>
          <tr><td>${cmd('jun','H.GEN.1,1+2')}</td><td>In-Heat hellsweep launcher (420 heat)</td></tr>
        </table>

        <div class="tip-box"><b>Strong low/mid mix:</b> ${mv('GEN.1')} (low) vs ${mv('GEN.3,2')} (mid).</div>
      </div>

      <h3 class="subhead">MIARE (MIA) — New S2 Stance</h3>
      <div class="card">
        <p class="body"><b>Enter:</b> From GEN (${mv('GEN.3+4')}) or IZU transitions. Rare direct entry.</p>
        <p class="body"><b>Only 3 attacks.</b> Used for combo routing and risky keepout. ${mv('MIA.1+2')} heals 3 HP + 1 Essence per burst (2s — <b>nerfed S2</b>). MIA has built-in sidesteps: tap U or D.</p>

        <h4 class="minihead">MIA Moves</h4>
        <table class="data compact">
          <tr><td>${cmd('jun','MIA.1')}</td><td>Combo filler ${prop('tornado', 14)}</td></tr>
          <tr><td>${cmd('jun','MIA.2')}</td><td><b>Kazama Essence showpiece.</b> 30 → 38 dmg, half-screen range. -20 OB (RA-punishable).</td></tr>
          <tr><td>${cmd('jun','MIA.1+2')}</td><td>Homing → IZU. +4 OB. Heals ${prop('homing', 14)}</td></tr>
        </table>
      </div>
    `,

    pressure: () => `
      <h3 class="subhead">Plus-Frame Pressure Tools</h3>
      <p class="body">Jun's pressure is about <b>forcing opponent commits via plus frames</b>, then CH-ing their mash or landing free damage if respected. Pagani: "${mv('f,F+1+2')} and ${mv('SS.4')} are Jun's only truly scary pressure tools at +6. Loop them for fake mental frames."</p>

      ${fd('jun', [
        { cmd: 'f,F+1+2', level: 'm', startup: 'i22', dmg: '25', block: '+6', hit: '+23a (+13)', ch: '', props: ['heat', 'chip'], notes: 'Main +6 pressure. Chip damage. Monstrous in heat.' },
        { cmd: 'SS.4', level: 'm', startup: 'i18', dmg: '25', block: '+6', hit: '+8c', ch: '', props: ['heat'], notes: '+6 OB, HE. Linear.' },
        { cmd: 'f+4', level: 'h', startup: 'i19', dmg: '20', block: '+3', hit: '+13', ch: '', props: ['homing'], notes: '+3 OB homing. Guaranteed HE OH.' },
        { cmd: 'df+1', level: 'm', startup: 'i13', dmg: '12', block: '-1', hit: '+5', ch: '', notes: 'Safe mid check. Keeps turn.' },
      ])}

      <h3 class="subhead">Heat Activation Strategy</h3>
      <ul class="body" style="margin: 10px 0 14px 20px; line-height: 1.7;">
        <li><b>CH paths:</b> ${mv('1+2')} CH → ${mv('f+2')} → ${mv('f+4')} → ${mv('f+3,2')} → ${mv('1')} → ${mv('2+3')} Heat Smash (full combo)</li>
        <li><b>Punishment:</b> ${mv('db+1+2')}-style HE are +OB, pressure continues</li>
        <li><b>Combo integration:</b> Never activate defensively — you lose your most valuable resource</li>
      </ul>

      <h4 class="minihead">In-Heat Specials</h4>
      ${fd('jun', [
        { cmd: 'H.2+3', level: 'm', startup: 'i13', dmg: '55', block: 'safe', hit: 'KND', ch: '', notes: 'Heat Smash — huge range, safe.' },
        { cmd: 'H.f+1+2', level: 'h', startup: 'i23', dmg: '0', block: '—', hit: 'parry', ch: '', notes: 'Parry from f5+. Combos into MIA.2~F guaranteed.' },
        { cmd: 'H.GEN.1,1+2', level: 'L,M', startup: 'i18', dmg: '14,20', block: '-13', hit: '+28a', ch: '', notes: 'In-heat extra hellsweep. 420 heat cost.' },
        { cmd: 'H.f+2,1+2', level: 'M,M', startup: 'i17', dmg: '25,18', block: '-9', hit: '+32a (+17)', ch: '', props: ['heat'], notes: 'Safe hit-confirm launcher via heat dash.' },
      ])}

      <h3 class="subhead">Kazama Essence Building</h3>
      <div class="tip-box"><b>Essence-building hierarchy:</b>
        <ol style="margin: 8px 0 0 20px; line-height: 1.7;">
          <li>Land ${mv('uf+1')} / ${mv('FC.df+1')} — 10 Essence each</li>
          <li>Loop ${mv('f,F+1+2')} — builds via block AND hit</li>
          <li>${mv('df+2,1+2')} and ${mv('f+2,1+2')} enders</li>
          <li>Don't waste ${mv('d+1+2')} raw — use in combos</li>
        </ol>
      </div>
    `,

    frametraps: () => `
      <h3 class="subhead">Frame Traps — Forcing Opponent Commitment</h3>
      <p class="body">Pagani: "Most Jun frame traps work because opponents <b>don't know they're + OB</b>. Loop these consistently and watch opponents freeze."</p>

      <h3 class="subhead">Primary Frame Traps</h3>

      <div class="card">
        <h4 class="minihead">After ${mv('f,F+3,3+4')}</h4>
        <p class="body sm">→ ${mv('1+3')}/${mv('2+4')} throw · ${mv('4')} i12 high CH</p>
        <p class="body sm"><i>Logic:</i> Throws beat sitters; i12 mid beats mashers.</p>
      </div>

      <div class="card">
        <h4 class="minihead">After ${mv('SS.4')} (+6 OB)</h4>
        <p class="body sm">→ ${mv('d+3+4')} CH launcher · ${mv('df+2')} launcher</p>
        <p class="body sm"><i>Logic:</i> ${mv('d+3+4')} aerial counters their mash at frame 5+.</p>
      </div>

      <div class="card">
        <h4 class="minihead">After ${mv('GEN.4')}</h4>
        <p class="body sm">→ ${mv('f+1+2')} heat parry · ${mv('4')} i12 check</p>
      </div>

      <div class="card">
        <h4 class="minihead">After ${mv('f,F+1+2~F')} (GEN +9 OB)</h4>
        <p class="body sm">→ GEN.${mv('3,2')} mid spike · GEN.${mv('2')} Power Crush</p>
      </div>

      <h3 class="subhead">Counter-Hit Fishing Setups</h3>
      <table class="data">
        <thead><tr><th>Bait</th><th>CH Tool</th><th>Payoff</th></tr></thead>
        <tbody>
          <tr><td>${mv('db+3')} (+2 OH)</td><td>${mv('d+3+4')} / ${mv('SS.4')} / ${mv('f,F+1+2')}</td><td>CH launch / HE / pressure loop</td></tr>
          <tr><td>${mv('1,2')} blocked</td><td>${mv('d+3+4')}</td><td>CH launcher</td></tr>
          <tr><td>${mv('GEN.1')} (+3 OH)</td><td>${mv('ws2')}</td><td>CH i13 launcher</td></tr>
          <tr><td>${mv('df+1')} (+5 OH)</td><td>${mv('df+2,1+2')} · ${mv('f+2,1+2')}</td><td>Launch vs mash / HE vs slow</td></tr>
          <tr><td>${mv('f+4')} (+3 OB)</td><td>${mv('df+1')} · ${mv('1,2,2')} IZU force</td><td>Loop pressure + conditioning</td></tr>
        </tbody>
      </table>

      <h3 class="subhead">Knowledge Checks</h3>
      <div class="card">
        <h4 class="minihead">${mv('1+4,3,4')} — Low/High/Mid/Low string</h4>
        <p class="body sm">Has mid ender too. Speed gap is large. Good players react to ender — low most common. At mid levels, rarely punished.</p>
      </div>
      <div class="card">
        <h4 class="minihead">${mv('f,F+3,3+4')} — Long-Range Homing + Chain</h4>
        <p class="body sm">-9 OB, follow-up +3 OB. <b>Interruptible up to 12 frames</b>. Or sidewalk right.</p>
      </div>
      <div class="card">
        <h4 class="minihead">${mv('db+4,4,4')} / Heron Dance</h4>
        <p class="body sm">Old Kazama low. <b>All hits after first are safe OB</b> — only punish first. Low-parry followups for guaranteed damage.</p>
      </div>
      <div class="card">
        <h4 class="minihead">${mv('f+2+3')} — Punch Sebaki</h4>
        <p class="body sm">Sebaki frames i4. <b>i29 startup</b> — slow, 0 OB, high, duckable. React → duck → launch.</p>
      </div>
      <div class="card">
        <h4 class="minihead">${mv('b+1+3')} — Reversal</h4>
        <p class="body sm">Same as Asuka's — punches AND kicks. <b>Countered by throws.</b></p>
      </div>
      <div class="card">
        <h4 class="minihead">${mv('MIA.2')} — Kazama Essence Sniper</h4>
        <p class="body sm"><b>Still -20 OB!</b> RA-punishable. Linear beam — step or block, stay patient.</p>
      </div>
    `,

    matchups: () => `
      <h3 class="subhead">Matchup Tips</h3>
      <p class="body">Jun struggles against keepout and strong-movement characters. Know unsafe moves per character and SSL/SSR direction.</p>

      <div class="matchups">
        ${[
          ['Jin','SSL EWGF. Respect df+2 mid. Duck heat engagers. Blocked EWGF → ${f+2}. Fish CH with ${df+4}.'],
          ['Kazuya','SSL electrics. Duck highs during pressure. Bait wavedash, punish Hellsweep with launch.'],
          ['King','THROW BREAK DRILLS. ${1}/${2} break most. ${df+1} beats command grabs.'],
          ['Dragunov','SSR works. Block his ${df+2}, punish with ${f+2}. Respect lows — no mash.'],
          ['Paul','Duck ${qcb+4}. SSL deathfist. CH ${d+3+4} beats his armor.'],
          ['Law','SSR most strings. Dragon tail unsafe — punish every blocked hit.'],
          ['Reina','SSL Sentai. Respect ws2. Block first — heavy frame traps.'],
          ['Yoshimitsu','Don\'t chase. Whiff-punish with ${f+2}. ${1+4} beats throws.'],
          ['Hwoarang','Respect stance switches. Flamingo mids linear — SSR. ${df+3} homing catches transitions.'],
          ['Bryan','Backdash respect. Punish blocked Taunt Jet Upper with ${f+2}. Hard fundamentals MU.'],
          ['Nina','Interrupt ss1 cancels with ${d+3+4}. Low-crush ${d+3+4} vs jabs.'],
          ['Azucena','Libertador linear — SSR. Duck high strings. Punish stance entries.'],
          ['Miary Zo','Lows unsafe — punish ${db+3} with launch. Step linear MOR.2. Essence ${MIA.2} catches her at range.'],
          ['Lili','Keep close. Interrupt Dew Glide with ${df+1}. Punish ${df+3+4} with launch.'],
          ['Heihachi','Duck electrics. Hellsweep -15 OB → ${df+2,1+2}. Respect wavedash pressure.'],
          ['Alisa','Chainsaw awkward. ${df+4} outranges most stuff. Respect stomp loops.'],
          ['Feng','Stances linear-ish. SSL Shifting Clouds. Punish command grabs with jab.'],
          ['Clive','Projectiles annoy. Close with ${f,F+2}. Punish MP stance individually.'],
          ['Victor','Teleport tricky — block and wait. ${df+3} catches teleports.'],
        ].map(([char, tip]) => `<div class="m-row"><span class="char">${char}</span><span class="tip">${tip.replace(/\$\{([^}]+)\}/g, (_, n) => mv(n))}</span></div>`).join('')}
      </div>
    `,

    defense_vs: () => `
      <h3 class="subhead">Playing Against Jun Kazama</h3>
      <p class="body">From Pagani's <b>Defensive Tips</b> — essential for anyone facing a good Jun.</p>

      <h3 class="subhead">Anti-Jun Core Principles</h3>

      <div class="card">
        <h4 class="minihead">Stay patient, play defensive</h4>
        <p class="body">Jun <b>struggles to open defensive opponents</b>. Her lows are weak NH. She's designed to punish offense — <b>don't give her offense</b>.</p>
      </div>

      <div class="card">
        <h4 class="minihead">Know when to step</h4>
        <p class="body">Jun has <b>10 homing moves</b>. Near wall, play quickly/safely with small steps — avoid ${mv('df+3')} clip.</p>
      </div>

      <div class="card">
        <h4 class="minihead">Respect Jun in Heat</h4>
        <p class="body">Safer retaliation + hit-confirm launcher. <b>Occasionally step to her strong side in heat</b> — hit-confirm launcher has little left-tracking.</p>
      </div>

      <div class="card warn-box">
        <h4 class="minihead">DO NOT low-parry or neutral-guard ${mv('d+3+4')}</h4>
        <p class="body">Cancans can't be low-parried. Parry attempt <b>gets you launched on NH</b>! Press D or DB. 9-frame gap — not holding back = launch. <b>Always hold back vs this matchup.</b></p>
      </div>

      <h3 class="subhead">Specific Move Counters</h3>
      <div class="card"><h4 class="minihead">${mv('b+3')}</h4><p class="body">Launch-punish (-19 / -18 OB).</p></div>
      <div class="card"><h4 class="minihead">${mv('d+3+4')}</h4><p class="body">Sidesteppable. If only first hit lands and second whiffs (common during sidestep), Jun is <b>-14</b> — launch.</p></div>
      <div class="card"><h4 class="minihead">${mv('1+4,3,4(1)')} / ${mv('DF+3+4,(4)(1)')}</h4><p class="body">Low is i25, mid i33 — <b>visually telling</b>. Duck first, react to mid ender. Both enders <b>launchable OB</b>.</p></div>
      <div class="card"><h4 class="minihead">${mv('ws1,4(1+2)(2)')}</h4><p class="body">Low/mid enders. <b>Can't react.</b> Take the low. Mid ender -20 OB, low -16 OB — both launchable.</p></div>
      <div class="card"><h4 class="minihead">${mv('f+2+3')}</h4><p class="body">Sebaki from i4 but i29 startup. React → duck → launch.</p></div>
      <div class="card"><h4 class="minihead">${mv('f,F+3,3+4')}</h4><p class="body"><b>Sidestep right between hits!</b></p></div>
      <div class="card"><h4 class="minihead">${mv('SS.4')} loops</h4><p class="body"><b>Linear either direction!</b> Side step/walk and punish.</p></div>

      <div class="do-dont">
        <div class="do">
          <h4>When facing Jun, DO</h4>
          <ul>
            <li>Block mostly — her lows are weak</li>
            <li>Punish ${mv('MIA.2')} (-20) with RA/launch</li>
            <li>Step her loops and stance entries</li>
            <li>Duck and react to string enders</li>
            <li>Use keepout to limit her</li>
            <li>Respect CH buttons — don't mash</li>
            <li>Hold back vs ${mv('d+3+4')}</li>
          </ul>
        </div>
        <div class="dont">
          <h4>When facing Jun, DON'T</h4>
          <ul>
            <li>Press wildly into her block pressure</li>
            <li>Low-parry ${mv('d+3+4')}</li>
            <li>Stand block ${mv('d+3+4')}</li>
            <li>Ignore her Heat</li>
            <li>Give whiff punish opportunities</li>
            <li>Stay in mid-range where ${mv('f+2')} lives</li>
            <li>Get lazy near walls</li>
          </ul>
        </div>
      </div>
    `,

    dos_donts: () => `
      <h3 class="subhead">Jun Do's and Don'ts</h3>

      <div class="do-dont">
        <div class="do">
          <h4>DO</h4>
          <ul>
            <li>Drill i10/i13/i15/i16 punishers 5 min before every session</li>
            <li>Use Replay Takeover after every loss</li>
            <li>Block first, CH second</li>
            <li>Use ${mv('df+1')}, ${mv('b+2')}, ${mv('b+2,2')} as core mid checks</li>
            <li>Master one combo route — skeleton is universal</li>
            <li>Build Kazama Essence early — persists between rounds</li>
            <li>Learn throw breaks — 1 and 2 daily</li>
            <li>Use ${mv('df+3')} to control space</li>
            <li>Fish CH with ${mv('d+3+4')} and ${mv('df+4')}</li>
            <li>Use heat offensively — never as panic</li>
            <li>Know stance transitions cold</li>
            <li>Respect self-damage on Kazama moves</li>
          </ul>
        </div>
        <div class="dont">
          <h4>DON'T</h4>
          <ul>
            <li>Grind KBD yet — 5 min/day max until Purple</li>
            <li>Mash after blocking — #1 Jun mistake</li>
            <li>Spam ${mv('uf+1')} / ${mv('FC.df+1')} — self-damage adds up</li>
            <li>Use Kazama power moves at critical low HP</li>
            <li>Duck randomly vs mids</li>
            <li>Switch characters every week</li>
            <li>Panic Power Crush on wake-up</li>
            <li>Rely on ${mv('b+3')} — -19 OB</li>
            <li>Spam ${mv('MIA.2')} — -20 OB</li>
            <li>Over-use ${mv('GEN.4')} — steppable</li>
            <li>Neglect heat hit-confirm launcher</li>
            <li>Forget defense wins Jun games</li>
          </ul>
        </div>
      </div>

      <h3 class="subhead">8-Week Jun Development Plan</h3>
      <table class="data">
        <thead><tr><th>Week</th><th>Focus</th></tr></thead>
        <tbody>
          <tr><td>Week 1</td><td>Drill ${mv('uf+1')} + ${mv('FC.df+1')} (50 reps vs random block). Learn one ${mv('df+2,1+2')} combo route. Know i10/i12/i13/i15 punishers.</td></tr>
          <tr><td>Week 2</td><td>Master WS punishers. Add ${mv('df+4')} CH keepout. Drill ${mv('d+3+4')}.</td></tr>
          <tr><td>Week 3</td><td>Neutral pokes: ${mv('df+1')}, ${mv('b+2')}, ${mv('f+4')}. Sidestep practice — know SSL/SSR for 5 most-faced.</td></tr>
          <tr><td>Week 4</td><td>Wall combos: ${mv('uf+4,3')} MIA.${mv('2')}, ${mv('db+1,1,1+2')}. Tornado enders.</td></tr>
          <tr><td>Week 5</td><td>Heat engagers + IZU/MIA transitions. Heat parry practice.</td></tr>
          <tr><td>Week 6</td><td>Kazama Essence building plan. MIA.2 Essence-buffed range.</td></tr>
          <tr><td>Week 7</td><td>Matchup-specific prep: 5 characters. Unsafe moves + SSL/SSR.</td></tr>
          <tr><td>Week 8</td><td>Replay review intensive. 5 min KBD daily. Tournament push.</td></tr>
        </tbody>
      </table>
    `,
  },


  // ================================================================
  // NINA WILLIAMS — Lalo's Season 3 Guide
  // ================================================================
  nina: {
    name: 'Nina Williams',
    subtitle: 'The Silent Assassin · No Stances · Execution Expert',
    difficulty: 'Expert',
    okizeme: 'nina',
    color: '#8fb8ff',
    accent: '#0c3a6b',
    tags: ['Rushdown Specialist', 'Chain Throws', 'SS1 Cancels', 'Range-0 Poker'],

    overview: () => `
      <p class="body"><b>Nina Williams is very well-rounded and has some of the best small Tekken in the game.</b> She's a jack of all trades while excelling at range 0 poking. Her main game plan is to <b>overwhelm and suffocate opponents at range 0</b> and search for counter hits while making reads. She has diverse playstyles — most top-level Nina players pilot her quite differently.</p>

      <p class="body">She is 1 of 3 back-sway characters, which makes Korean back-dashing with her harder than other characters. She has a unique movement option called <b>Hayashida-step</b>, which is evasive. Her main plus frames come from ${mv('SS.1')} canceling, running ${mv('f,f+1+2')}, and ${mv('db+3')}.</p>

      <p class="body"><b>SS1 canceling</b> requires execution to utilize all plus frames, even though it's +10 on block. In reality, with a good cancel, it's <b>more like +5 to +7</b> and takes practice to execute the unique input. She has her iconic butterfly loops — not needed in T8 thanks to strong aerial tail spins — but still provide more combo routes, and most of her launchers' max damage routes still involve them.</p>

      <p class="body">She also has setups involving her <b>unbreakable betrayer throw</b> from back sway (${mv('qcb,B+1+3')}). She has very strong wall pressure since the opponent cannot backdash out of range of her ss1, making it harder to deal with — from this move, Nina punishes many options the defender has.</p>

      <h3 class="subhead">Strengths</h3>
      <div class="mini-card outline-good">
        <ul>
          <li><b>Rushdown and Lockdown</b> — stays in opponent's face with ${mv('SS.1')} and lockdown tools</li>
          <li><b>Super well-rounded</b> — specializes in poking and small Tekken</li>
          <li><b>Full throw game</b> + ability to delete gray health</li>
          <li><b>Amazing combo game</b> and wall carry</li>
          <li><b>Very strong heat options</b> — chip damage from ${mv('H.f+3+4,2')}, ${mv('H.b+1+2')}, etc.</li>
        </ul>
      </div>

      <h3 class="subhead">Weaknesses</h3>
      <div class="mini-card outline-bad">
        <ul>
          <li><b>Vulnerable to 14f launchers</b> — she has many moves that are -14 OB</li>
          <li><b>Very demanding in execution</b> — perfect KBD, SS1 cancels, Hayashida step, high-damage combos need practice</li>
          <li><b>Struggles vs strong keepout</b> — excels at range 0, trouble against characters that create space</li>
          <li><b>Needs reads</b> — pressure from many buttons can be challenged/interrupted; must condition opponent</li>
        </ul>
      </div>

      <h3 class="subhead">Heat System</h3>
      <div class="tip-box">
        <p><b>Nina's heat game is amazing</b>, mainly due to <b>amplified guns</b>. These buttons become a nightmare:</p>
        <ul style="margin: 8px 0 0 16px; line-height: 1.7;">
          <li>${mv('H.f+3+4,2')}, ${mv('H.b+1+2')}, ${mv('H.1,2,1,1+2')}, ${mv('H.df+1,2,1,1+2')}, ${mv('H.ws1,1+2')}, ${mv('H.b+3+4,1+2')}</li>
          <li><b>Stronger punishment</b> via ${mv('H.db+1+2')} and ${mv('H.f+3+4,1')} heat dash</li>
          <li>${mv('H.ws1,1+2')} amplified damage and wallsplat range — <b>100+ damage gun wallsplats</b> condition opponents to block</li>
          <li><b>Gray health deletion</b> makes her heat + chip damage even stronger (chain throws, ${mv('df+2+4')}, ${mv('b+1+2')}, ${mv('FC.df+2')})</li>
          <li>Heat Smash is fast, high-crushes, floor-breaks, gives full combo, fully tracks to her weakside</li>
        </ul>
      </div>

      <div class="warn-box"><b>Honest take:</b> Nina has one of the highest execution ceilings in the roster. If you're serious about climbing, pick her as your <b>main</b> knowing it takes months; or pick her as a <b>secondary</b> to sharpen your fundamentals. Either way, she'll make your spacing game much stronger.</div>
    `,

    punishers: () => `
      <h3 class="subhead">Standing Punishers</h3>
      ${fd('nina', [
        { cmd: '1,4', level: 'h,h', startup: 'i10', dmg: '5,10', block: '-3', hit: '+1', ch: '', notes: '10f standard punish. Use 1,4 for damage, 1,2 for plus frames.' },
        { cmd: '1,2', level: 'h,h', startup: 'i10', dmg: '5,10', block: '-3', hit: '+8', ch: '', notes: '10f string into SS cancel for pressure. Less damage than 1,4 but more + OH.' },
        { cmd: 'db+1+2', level: 'h,m', startup: 'i11', dmg: '10,14', block: '-14', hit: '+10a (+1)', ch: '', props: ['heat'], notes: 'i11 heat engager that wallsplats. Best i11 punisher for HE.' },
        { cmd: 'b+1,4', level: 'h,h', startup: 'i12', dmg: '10,18', block: '-7', hit: '+7', ch: '', notes: 'High damage, long range i12 punish. +7 OH. Go-to if not heat engaging.' },
        { cmd: 'f+3+4,1', level: 'm,m', startup: 'i14', dmg: '15,18', block: '-14', hit: 'KND', ch: '', props: ['heat'], notes: 'Mid-mid heat engager that wallsplats. More damage than db+1+2.' },
        { cmd: 'b+3+4,1+2', level: 'm,m', startup: 'i14', dmg: '15,24', block: '-9', hit: '+16a (+16)', ch: '', notes: 'Most damaging punish. Twitch-confirmable. Amplified in heat, wallsplats far. Use near wall or in heat.' },
        { cmd: 'df+2', level: 'm', startup: 'i15', dmg: '14', block: '-7', hit: '+34a (+24)', ch: '', notes: 'Safe i15 launcher. DOES NOT launch crouching. Least range of any df2.' },
        { cmd: 'b+1+4', level: 'h,h,h,h', startup: 'i15', dmg: '5,5,5,15', block: '-15', hit: 'KND', ch: '', notes: 'Long-range NH launcher. More damage than df2 but -15 OB. Launches crouching.' },
        { cmd: 'db+3+4', level: 'm', startup: 'i18', dmg: '27', block: '-14', hit: '+45a', ch: '', notes: 'Long range mid → very high damage. Punishes Law ws2, Kazuya db1+2.' },
      ])}

      <h3 class="subhead">While-Standing (Crouching) Punishers</h3>
      ${fd('nina', [
        { cmd: 'ws4', level: 'm', startup: 'i11', dmg: '16', block: '-9', hit: '+7', ch: '', notes: 'Classic ws4. +7 OH. Has extension ws4,3,1+2 fully guaranteed on CH (interrupts Kazuya 1,2,4,3).' },
        { cmd: 'ws1,1+2', level: 'm,h', startup: 'i13', dmg: '12,20', block: '-14', hit: 'wallsplat', ch: '', props: ['heat'], notes: 'Mid-high (doesn\'t jail) that wallsplats. Amplified in heat — massive damage and range.' },
        { cmd: 'FC.df+2', level: 'L', startup: 'i14', dmg: '14', block: '-9', hit: '+8', ch: '', notes: 'S3 addition. Deletes gray health + gives oki. Use no walls + no heat.' },
        { cmd: 'ws2', level: 'm', startup: 'i15', dmg: '15', block: '-13', hit: '+35a', ch: '', notes: 'Classic i15 NH launcher.' },
        { cmd: 'ws3+4', level: 'm', startup: 'i18', dmg: '24', block: '-16', hit: '+40a', ch: '', notes: 'Most damaging / longest-range WS punish. Usually for hellsweeps or low whiff after backdash-duck.' },
      ])}

      <h3 class="subhead">Whiff Punishers</h3>
      ${fd('nina', [
        { cmd: 'SS.2', level: 'm', startup: 'i13', dmg: '18', block: '-14', hit: '+33a (+23)', ch: '', notes: 'Fastest launcher. 13f mid from sidestep. Adds evasion — read on linear move or confirm whiff punish.' },
        { cmd: 'db+1+2', level: 'h,m', startup: 'i11', dmg: '10,14', block: '-14', hit: '+10a (+1)', ch: '', props: ['heat'], notes: 'Fast go-to for good-recovery moves. HE.' },
        { cmd: 'b+1,4', level: 'h,h', startup: 'i12', dmg: '10,18', block: '-7', hit: '+7', ch: '', notes: 'Fast whiff punisher with good range.' },
        { cmd: 'df+2', level: 'm', startup: 'i15', dmg: '14', block: '-7', hit: '+34a (+24)', ch: '', notes: 'Safe NH launcher.' },
        { cmd: 'b+1+4', level: 'h,h,h,h', startup: 'i15', dmg: '5,5,5,15', block: '-15', hit: 'KND', ch: '', notes: 'More range + launches crouching, but -15 OB.' },
        { cmd: 'db+3+4', level: 'm', startup: 'i18', dmg: '27', block: '-14', hit: '+45a', ch: '', notes: 'Long-range mid for big whiffs where b+1+4 out of range.' },
      ])}
    `,

    moves: () => `
      <p class="body">Lalo's <b>Top 10 Moves</b> with expanded commentary. These are the buttons Nina lives and dies by in Season 3.</p>

      <h3 class="subhead">1 · ${mv('SS.1')} — Her Best Move</h3>
      <p class="body"><b>Nina's signature.</b> Main way to start pressure with plus frames. From ss1, you can hold forward and be +10 (access to all qcf + while-standing moves), or hold back into backsway (cancelable by sidestep for whole moveset access). <b>Perfect cancel is about +6 OB</b>. Because it cancels into sidestep, you can loop SS-based moves.</p>
      <p class="body"><b>Best options from ss1:</b> ${mv('SS.1~qcf+1+2')}, ${mv('SS.1~qcf+1')}, ${mv('SS.1~qcf+3')}, ${mv('SS.1~qcf+2')}, ${mv('SS.1~df+1,2')}, ${mv('SS.1~db+3')}, ${mv('SS.1~SS.1')}</p>
      <p class="body sm"><span class="code">m · i14~15 · -10 OB · +3 OH</span></p>

      <h3 class="subhead">2 · ${mv('df+1,2')} — The Iconic Williams df1</h3>
      <p class="body"><b>13-frame mid with high extension that jails on block.</b> Nina has a lot from this move:</p>
      <ul class="body" style="margin: 8px 0 14px 16px; line-height: 1.7;">
        <li>${mv('df+1,2,4')} (high) — CH launch attempt</li>
        <li>${mv('df+1,2,1+2')} (mid) — wallsplat/KND, catches duckers BUT <b>-14 OB</b>, risky</li>
        <li>Extensions can be <b>heavily delayed</b></li>
        <li>Can go into qcf from ${mv('df+1,2')} (0 OB) — common: ${mv('df+1,2~ws4')}</li>
        <li>SS cancel after df12 — if opponent respects extensions, cancel into ${mv('SS.1')} for plus pressure or ${mv('SS.4')} for low CH launcher</li>
      </ul>
      <p class="body sm"><span class="code">m,h · i13~14 · -5 OB · +2 OH</span></p>

      <h3 class="subhead">3 · ${mv('b+2,2,2')} — Homing CH Launcher String</h3>
      <p class="body">12-frame homing high/high/high. First 2 hits jail, 3rd hit delayable. <b>On CH leaves Nina at +14</b> for a guaranteed ${mv('f+3+4,1')} heat engager. If first hit CHs, CH-confirm whole string = wallsplat for huge damage.</p>
      <p class="body">Can <b>cancel last hit into SS</b> by holding U/D while inputting string. Mind game because opponent can option-select the last-hit extension vs SS cancel.</p>
      <p class="body sm"><span class="code">h,h,h · i12 · -9 OB · +9g OH · +14c oCH</span></p>

      <h3 class="subhead">4 · ${mv('1,2')} — 10f Jail String</h3>
      <p class="body">10-frame high-high jab string. Has <b>${mv('1,2,4')}</b> CH launcher extension (uninterruptible on immediate timing — only way to counter is ducking) and <b>${mv('1,2,1+2')}</b> mid wallsplat/KND extension. Nina can't enter qcf from 1,2 but can SS-cancel like df1,2 with better frames. <b>On hit, ss cancel is +11 → ss1 becomes uninterruptible</b>.</p>
      <p class="body sm"><span class="code">h,h · i10 · -3 OB · +8 OH</span></p>

      <h3 class="subhead">5 · ${mv('df+2')} — Safe i15 Launcher</h3>
      <p class="body">Standard 15f safe mid launcher. Drawbacks: doesn't launch crouching, no high-crushing, not much tracking, <b>least range of any df2 in the game</b>. Still an amazing move to have safely in back pocket.</p>
      <p class="body sm"><span class="code">m · i15~16 · -7 OB · +34a (+24) OH</span></p>

      <h3 class="subhead">6 · ${mv('f+3+4')} — 14f Mid Knee Heat Engager</h3>
      <p class="body">14f mid knee with two extensions. <b>Unparryable</b> (knee). Very good tracking at +4 or higher. Can be 14f punish.</p>
      <ul class="body" style="margin: 8px 0 14px 16px; line-height: 1.7;">
        <li><b>${mv('f+3+4,1')}</b> — mid heat engage, -14 OB, parryable, wallsplats</li>
        <li><b>${mv('f+3+4,2')}</b> — mid guns, safe OB, amplified in heat, guaranteed if f3+4 CHs, armorable</li>
      </ul>
      <p class="body sm"><span class="code">m · i14 · -6 OB · +1 OH · +6 oCH</span></p>

      <h3 class="subhead">7 · ${mv('db+3')} — Main Standing Low Poke</h3>
      <p class="body">20f low, <b>+4 OH</b>, -13 OB. On CH knocks down for guaranteed ${mv('f,F+3')} (or ${mv('qcf+2')} at wall). <b>Hits grounded</b>.</p>
      <p class="body sm"><span class="code">L · i20 · -13 OB · +4c OH · +13a oCH</span></p>

      <h3 class="subhead">8 · ${mv('f,f,F+1+2')} / ${mv('qcf+1+2')} — Main Running Move</h3>
      <p class="body"><b>+4 OB heat engage mid</b> that deals chip. Extremely linear and can be floated (airborne in startup). <b>S2 added qcf+1+2</b> — allows Nina to keep + frames if you think opponent won't mash into qcf (mainly from ss1). Most people don't challenge ss1 — its + frames + options scare them. Now ${mv('qcf+1+2')} allows ss1 → f1+2 keeping pressure on non-challengers. Acts as heat dash launcher.</p>
      <p class="body sm"><span class="code">m · i20~21 · +4 OB · +12a (+3) OH</span></p>

      <h3 class="subhead">9 · ${mv('qcf+1')} — Long-Range High CH Launcher</h3>
      <p class="body">14f <b>+1 OB high</b> that CH launches and does chip. Very good for CH fishing — decent range.</p>
      <p class="body sm"><span class="code">h · i14~16 · +1~+3 OB · +3~+5 OH · +47a (+37) oCH</span></p>

      <h3 class="subhead">10 · ${mv('qcf+2')} — Wallsplat Heat Engager</h3>
      <p class="body">Safe wallsplat mid HE (launches in heat) that <b>tracks to her weakside</b>! Good range — works in neutral. <b>Hits grounded, fully flips them</b> for great oki.</p>
      <p class="body sm"><span class="code">M · i16~17 · -8 OB · +32a (+17) OH</span></p>

      <h3 class="subhead">Notable Supplementary Moves</h3>

      <h4 class="minihead">${mv('db+2')} — Long-Range CH Launching Homing Mid</h4>
      <p class="body sm">Only -5 OB, <b>slow i24 startup</b>. Main combo tool.</p>

      <h4 class="minihead">${mv('SS.4')} — Low CH Launcher String</h4>
      <p class="body sm">20f low, +6 on hit, -14 OB. Has high extension that jails if low hits, leaves -7 with chip damage. If first hit CHs, <b>string CH launches</b> (not confirmable). Good from ${mv('1,2~SS')} or ${mv('df+1,2~SS')} since it high-crushes. Oki tool — hits grounded.</p>

      <h4 class="minihead">${mv('f+1+2')} — 17f Mid Power Crush</h4>
      <p class="body sm">Wallsplats, can be done from crouching, -14 OB.</p>

      <h4 class="minihead">${mv('f+2,1')} / ${mv('f+2,1,3')} — Fast CH Launcher</h4>
      <p class="body sm">13f CH launcher with safe high extension and -15 mid extension. Hit-confirmable but not easy. Good range. Neutral + CH fishing.</p>

      <h4 class="minihead">${mv('FC.df+4')} — Wipe the Floor</h4>
      <p class="body sm">20f KND low with guaranteed follow-up. CH launches. Most damaging option: ss (up) OTG ${mv('d+3+4')}.</p>

      <h4 class="minihead">${mv('f+4,2')} — Mid-High Heat Engager</h4>
      <p class="body sm">Natural HE, hit-confirmable, SS-cancelable. Wallsplats, heat dash launches.</p>

      <h4 class="minihead">${mv('b+1+2')} — -4 Mid Gray Health Delete</h4>
      <p class="body sm">Guaranteed ${mv('f,F+3')} follow-up on hit. <b>Deletes gray health</b>. In heat amplifies: +2 OB, wallsplats, much more damage/chip.</p>

      <h4 class="minihead">${mv('qcf+3')} — Long Range High-Crushing Slide</h4>
      <p class="body sm">20f, -20 OB if close (launch-punishable), 0 OH. Fully spaced out becomes safer. Great CH tool. Can do after ${mv('SS.1')}, ${mv('df+1,2')}, etc.</p>

      <h4 class="minihead">${mv('4,4')} — 11f Magic 4</h4>
      <p class="body sm">S3 addition. 11f high-high CH launcher. Doesn't jail. Main way to interrupt charged moves and guard breaks. Fastest CH launcher. Launchable OB, not hit-confirmable.</p>

      <h4 class="minihead">${mv('uf+2,1')} — 18f NH Launcher</h4>
      <p class="body sm">18f mid-mid NH launcher. Twitch-confirmable. -13 OB, can crush jabs sometimes.</p>

      <h4 class="minihead">${mv('b+3,4')} — Fully Hit-Confirmable</h4>
      <p class="body sm">Mid-high, <b>+14 OH</b> for guaranteed ${mv('f+3+4,1')} follow-up. First part -6 OB. Second part very delayable CH launcher.</p>

      <h4 class="minihead">${mv('f+3')} — 14f High-High CH Launcher</h4>
      <p class="body sm">+3 OB, great tracking. Highs don't jail — duckable on block, not easy. Knowledge check. Don't overuse.</p>
    `,

    framedata: () => `
      <div class="section-head">
        <h3 class="subhead">Complete Frame Data Reference — Nina Williams</h3>
      </div>

      <p class="body">Full Season 3 frame data for Nina's most-used moves. Data from TekkenDocs (v3.01, April 2026).</p>

      <h3 class="subhead">Jabs &amp; Highs</h3>
      ${fd('nina', [
        { cmd: '1', level: 'h', startup: 'i10', dmg: '5', block: '+1', hit: '+8', ch: '', notes: 'Jab.' },
        { cmd: '1,2', level: 'h,h', startup: 'i10', dmg: '5,10', block: '-3', hit: '+8', ch: '', notes: 'Jail string. SS-cancelable.' },
        { cmd: '1,2,1', level: 'h,h,h', startup: 'i10', dmg: '5,10,17', block: '-3', hit: '+2', ch: '', notes: 'Extension.' },
        { cmd: '1,2,1,1+2', level: 'h,h,h,h,h,h', startup: 'i10', dmg: '5,10,17,6,6,6', block: '-9', hit: '+8c', ch: '', notes: 'Full string. Amplified in heat.' },
        { cmd: '1,2,4', level: 'h,h,h', startup: 'i10', dmg: '5,10,17', block: '-13', hit: 'CH launch', ch: '', notes: 'CH launcher ender. Uninterruptible immediate timing.' },
        { cmd: '1,4', level: 'h,h', startup: 'i10', dmg: '5,10', block: '-3', hit: '+1', ch: '', notes: '10f punish with damage.' },
        { cmd: '2', level: 'h', startup: 'i11', dmg: '8', block: '+1', hit: '+8', ch: '', notes: 'Standing 2.' },
        { cmd: '2,3', level: 'h,m', startup: 'i10', dmg: '8,12', block: '-13', hit: '+0d', ch: '', notes: '10f CH into chain throw. -13 OB.' },
        { cmd: '4,4', level: 'h,h', startup: 'i11', dmg: '12,18', block: '-7', hit: '+4', ch: 'launch', notes: 'S3 magic-4 CH launcher. Doesn\'t jail.' },
        { cmd: '4,3', level: 'h,m', startup: 'i11', dmg: '12,14', block: '-7', hit: '+5', ch: '', notes: 'Mid extension (fuzzy-guardable).' },
      ])}

      <h3 class="subhead">df / b / f Mids</h3>
      ${fd('nina', [
        { cmd: 'df+1', level: 'm', startup: 'i13', dmg: '10', block: '-1', hit: '+5', ch: '', notes: 'Safe mid check.' },
        { cmd: 'df+1,2', level: 'm,h', startup: 'i13~14', dmg: '10,14', block: '-5', hit: '+2', ch: '', notes: 'Iconic Williams string. Extensions: 4 / 1+2 / qcf / SS.' },
        { cmd: 'df+1,2,4', level: 'm,h,h', startup: 'i13', dmg: '10,14,16', block: '-13', hit: 'CH launch', ch: '', notes: 'CH launch ender.' },
        { cmd: 'df+1,2,1+2', level: 'm,h,m', startup: 'i13', dmg: '10,14,18', block: '-14', hit: 'KND', ch: '', notes: 'Catches ducking. -14 OB, risky.' },
        { cmd: 'df+2', level: 'm', startup: 'i15', dmg: '14', block: '-7', hit: '+34a (+24)', ch: '', notes: 'Safe NH launcher. No launch crouching.' },
        { cmd: 'df+3,2', level: 'm,h', startup: 'i14', dmg: '10,12', block: '+1', hit: '+5', ch: '+12', notes: 'Plus on block mid-high. Hit-confirmable. Hold back for backsway frame trap.' },
        { cmd: 'df+2+4', level: 't', startup: 'i14', dmg: '23', block: '', hit: 'throw', ch: '', notes: 'Deletes gray health.' },
        { cmd: 'f+2,1', level: 'h,m', startup: 'i13', dmg: '12,10', block: '-13', hit: '-6s', ch: 'launch', notes: 'Fast CH launcher. Safe high extension / -15 mid extension. Hit-confirmable.' },
        { cmd: 'f+2,1,3', level: 'h,m,M', startup: 'i13', dmg: '12,10,21', block: '-15~-13', hit: '+27a', ch: '', notes: 'Mid extension.' },
        { cmd: 'f+3', level: 'h,h', startup: 'i14~15', dmg: '14,17', block: '+3~+4', hit: '+24a (+15)', ch: '+54a', notes: 'Great tracking. Duckable on block.' },
        { cmd: 'f+3+4', level: 'm', startup: 'i14', dmg: '15', block: '-6', hit: '+1', ch: '+6', notes: 'Unparryable knee.' },
        { cmd: 'f+3+4,1', level: 'm,m', startup: 'i14', dmg: '15,18', block: '-14', hit: 'KND', ch: '', props: ['heat'], notes: 'Mid HE wallsplat.' },
        { cmd: 'f+3+4,2', level: 'm,h', startup: 'i14', dmg: '15,20', block: 'safe', hit: '+8', ch: '', notes: 'Mid guns. Amplified in heat. Armorable.' },
        { cmd: 'f+4,2', level: 'm,h', startup: 'i21~22', dmg: '21,16', block: '-9', hit: '+13c', ch: '', props: ['heat'], notes: 'Natural HE. SS-cancelable. Wallsplats, heat dash launches.' },
        { cmd: 'b+1,4', level: 'h,h', startup: 'i12', dmg: '10,18', block: '-7', hit: '+7', ch: '', notes: 'i12 long-range punish.' },
        { cmd: 'b+1+2', level: 'm,m', startup: 'i16', dmg: '20,15', block: '-4', hit: '+5a', ch: '', notes: '-4 mid. Guaranteed f,F+3 follow-up. Deletes gray health. Amplified in heat: +2 OB, wallsplats.' },
        { cmd: 'b+1+4', level: 'h,h,h,h', startup: 'i15', dmg: '5,5,5,15', block: '-15', hit: 'KND', ch: '', notes: 'Long-range launcher. Launches crouching. -15 OB.' },
        { cmd: 'b+2,2,2', level: 'h,h,h', startup: 'i12', dmg: '10,12,18', block: '-9', hit: '+9g', ch: '+14c', props: ['homing'], notes: 'Homing CH launcher. +14 OH for f3+4,1.' },
        { cmd: 'b+3,4', level: 'm,h', startup: 'i18', dmg: '15,18', block: '-8', hit: '+14c', ch: '+45a', notes: 'Hit-confirmable. +14 OH = free f3+4,1.' },
        { cmd: 'b+3+4,1+2', level: 'm,m', startup: 'i14', dmg: '15,24', block: '-9', hit: '+16a', ch: '', notes: 'Most damaging punish. Twitch-confirmable.' },
      ])}

      <h3 class="subhead">Uf / Up Launchers</h3>
      ${fd('nina', [
        { cmd: 'uf+1', level: 'm', startup: 'i14', dmg: '18', block: '-10', hit: '+21a (+11)', ch: '', notes: 'Safe orbital that low-crushes.' },
        { cmd: 'uf+2,1', level: 'm,m', startup: 'i18', dmg: '17,14', block: '-13', hit: '+49a (+40)', ch: '', notes: '18f NH launcher. Twitch-confirmable.' },
        { cmd: 'uf+3', level: 'm', startup: 'i14', dmg: '18', block: '-10', hit: '+21a (+11)', ch: '', notes: 'Wallsplats, low crushes.' },
        { cmd: 'uf+4,3,4', level: 'h,L,h', startup: 'i18', dmg: '12,13,14', block: '-6', hit: '+5', ch: '', notes: 'SS-cancelable. Knowledge check vs low-level.' },
        { cmd: 'ub+1', level: 'm', startup: 'i20~21', dmg: '20', block: '-16', hit: '+20a', ch: '', notes: 'Evasive mid launcher. Pickup with d2,2 or d4,1.' },
      ])}

      <h3 class="subhead">Lows</h3>
      ${fd('nina', [
        { cmd: 'db+3', level: 'L', startup: 'i20', dmg: '18', block: '-13', hit: '+4c', ch: '+13a', notes: 'Main low poke. Hits grounded. +4 OH. CH → guaranteed ff3.' },
        { cmd: 'SS.4', level: 'L', startup: 'i20', dmg: '18', block: '-14', hit: '+6c', ch: '', notes: 'High-crushing. Hits grounded. CH extension launches.' },
        { cmd: 'd+4,1', level: 'L,h', startup: 'i12', dmg: '8,13', block: '+0', hit: '+6', ch: '+11', notes: 'High-crushing 12f low-high. NC on CH. Duckable.' },
        { cmd: 'd+2', level: 'L', startup: 'i20', dmg: '18', block: '-12', hit: '+0', ch: '+5', notes: 'High-crush low. +2 into qcf. Round ender.' },
        { cmd: 'd+2,2', level: 'L,M', startup: 'i20', dmg: '18,20', block: '-12', hit: '+17a (+0)', ch: '+71a (+55)', notes: '-12 only. 2nd part CH launcher.' },
        { cmd: 'd+3,2', level: 'L,m', startup: 'i16', dmg: '12,18', block: '-7', hit: '+11', ch: '', notes: 'Low-mid. +11 → guaranteed db1+2 HE wallsplat.' },
        { cmd: 'd+3,4,3', level: 'L,h,m', startup: 'i16', dmg: '12,10,18', block: '-7', hit: '+22a', ch: '', notes: 'Low-high-mid. NC on CH. High-crushing, safe. qcf2 follow-up guaranteed.' },
        { cmd: 'db+4,3', level: 'L,m', startup: 'i16', dmg: '10,15', block: '-13', hit: '+71a (+55)', ch: '', notes: 'High-crush CH option.' },
        { cmd: 'db+1+2', level: 'h,m', startup: 'i11', dmg: '10,14', block: '-14', hit: '+10a (+1)', ch: '', props: ['heat'], notes: '11f wallsplat HE. Main i11 punish/panic heatdash.' },
        { cmd: 'FC.df+2', level: 'L', startup: 'i14', dmg: '14', block: '-9', hit: '+8', ch: '', notes: 'S3 low. Deletes gray health + oki.' },
        { cmd: 'FC.df+4', level: 'L', startup: 'i20', dmg: '18', block: '-14', hit: 'KND', ch: 'launch', notes: 'Wipe the Floor. Guaranteed follow-up. CH launches.' },
      ])}

      <h3 class="subhead">QCF / Crouch Dash Moves</h3>
      ${fd('nina', [
        { cmd: 'qcf+1', level: 'h', startup: 'i14~16', dmg: '18', block: '+1~+3', hit: '+3~+5', ch: '+47a (+37)', notes: '+1 OB high CH launcher. Chip.' },
        { cmd: 'qcf+2', level: 'M', startup: 'i16~17', dmg: '20', block: '-8', hit: '+32a (+17)', ch: '', props: ['heat'], notes: 'Safe wallsplat HE. Tracks weakside. Hits grounded → oki.' },
        { cmd: 'qcf+3', level: 'L', startup: 'i19~28', dmg: '24', block: '-20~-11', hit: '+0c~+9c', ch: '+21a', notes: 'Long-range slide. High-crushing. Launch-punish if close.' },
        { cmd: 'qcf+1+2', level: 'm', startup: 'i20~21', dmg: '25', block: '+4', hit: '+12a (+3)', ch: '', props: ['heat'], notes: 'From SS.1. Preserves + frames vs non-mashers.' },
        { cmd: 'qcf+4,3,1+2', level: 'L,h,h', startup: 'i22', dmg: '15,12,14', block: '-14', hit: 'KND', ch: '', notes: 'Combo ender with wall carry.' },
        { cmd: 'qcf+1+3', level: 't', startup: 'i12~14', dmg: '40', block: '', hit: 'chain throw', ch: '', notes: 'Break with 1.' },
        { cmd: 'qcf+2+4', level: 't', startup: 'i12~14', dmg: '40', block: '', hit: 'chain throw', ch: '', notes: 'Break with 2.' },
        { cmd: 'qcb,B+1+3', level: 't', startup: 'i12~14', dmg: '50+', block: '', hit: 'UNBREAKABLE', ch: '', notes: 'Betrayer throw. Use in oki setups.' },
        { cmd: 'ws2', level: 'm', startup: 'i15', dmg: '15', block: '-13', hit: '+35a', ch: '', notes: '15f NH launcher.' },
        { cmd: 'ws4', level: 'm', startup: 'i11', dmg: '16', block: '-9', hit: '+7', ch: '', notes: 'CH ws4,3,1+2 fully guaranteed.' },
        { cmd: 'ws1,1+2', level: 'm,h', startup: 'i13', dmg: '12,20', block: '-14', hit: 'wallsplat', ch: '', props: ['heat'], notes: 'Doesn\'t jail. Amplified in heat.' },
        { cmd: 'ws3+4', level: 'm', startup: 'i18', dmg: '24', block: '-16', hit: '+40a', ch: '', notes: 'Longest WS punish.' },
      ])}

      <h3 class="subhead">SS Moves</h3>
      ${fd('nina', [
        { cmd: 'SS.1', level: 'm', startup: 'i14~15', dmg: '16', block: '-10', hit: '+3', ch: '', notes: '+10 if cancel to F/QCF. ~+6 with clean cancel. Signature.' },
        { cmd: 'SS.2', level: 'm', startup: 'i13~14', dmg: '16', block: '-14', hit: '+33a (+23)', ch: '', notes: 'Fastest NH launcher. Evasive. Whiff-punish/read.' },
        { cmd: 'SS.1+2', level: 'm', startup: 'i19', dmg: '22', block: '+0', hit: '+25a', ch: '', notes: 'Sidestep evasion + range + safe. Followup combos.' },
        { cmd: 'SS.1+2,1+2', level: 'm,sm,sm', startup: 'i19', dmg: '22,15,15', block: '-9', hit: '+16a', ch: '', notes: 'Finish for wallsplat + chip. Amplified in heat.' },
      ])}

      <h3 class="subhead">Running / Special</h3>
      ${fd('nina', [
        { cmd: 'f,f,F+1+2', level: 'm', startup: 'i20~21', dmg: '25', block: '+4', hit: '+12a (+3)', ch: '', props: ['heat'], notes: '+4 OB heat engager. Chip. Linear.' },
        { cmd: 'f,F+2', level: 'm', startup: 'i15', dmg: '18', block: '-9', hit: '+7', ch: '', notes: 'Running mid.' },
        { cmd: 'f,F+3', level: 'm', startup: 'i20', dmg: '20', block: '-9', hit: '+8', ch: '', notes: 'Running kick.' },
        { cmd: 'f+1+2', level: 'm', startup: 'i17', dmg: '20', block: '-14', hit: '+11a (+2)', ch: '', props: ['powercrush'], notes: '17f mid PC. Wallsplats. Can do from crouching.' },
        { cmd: 'df,df+1', level: 't', startup: 'i12', dmg: '40', block: '', hit: 'throw', ch: '', props: ['floorbreak'], notes: 'Floor-break throw.' },
      ])}

      <h3 class="subhead">Throws &amp; Rage Art</h3>
      ${fd('nina', [
        { cmd: '1+3', level: 't', startup: 'i12~14', dmg: '35', block: '', hit: 'throw', ch: '', notes: 'Left throw. Break 1.' },
        { cmd: '2+4', level: 't', startup: 'i12~14', dmg: '35', block: '', hit: 'throw', ch: '', notes: 'Right throw. Break 2.' },
        { cmd: 'R.df+1+2', level: 'm,t', startup: 'i20', dmg: '55+', block: '-18', hit: '+0d', ch: '', props: ['powercrush'], notes: 'Rage Art.' },
        { cmd: 'H.2+3', level: 'm', startup: 'i14', dmg: '55', block: 'safe', hit: 'KND', ch: '', notes: 'Heat Smash — fast, high-crush, floor break, tracks weakside.' },
      ])}
    `,

    combos: () => `
      <div class="section-head">
        <h3 class="subhead">Bread-and-Butter Combos (Lalo's Routes)</h3>
      </div>

      <h3 class="subhead">Optimal Routes</h3>
      <table class="data">
        <thead><tr><th style="width: 22%">Starter</th><th>Route</th></tr></thead>
        <tbody>
          <tr><td>${mv('df+2')}</td><td class="route">${mv('uf+4')} → ${mv('uf+3')} → ${mv('df+3,2~db+2')} → ${mv('f,F')} → ${mv('df+3,2~b+4')} ${prop('tornado', 14)} → ${mv('db+2')} → ${mv('qcf+2')}</td></tr>
          <tr><td>${mv('ws2')}</td><td class="route">${mv('uf+3')} → ${mv('df+3,2~SS.1~db+2')} → ${mv('f,F')} → ${mv('df+3,2~b+4')} ${prop('tornado', 14)} → ${mv('qcf+4,3,1+2')}</td></tr>
          <tr><td>CH ${mv('4,4')}</td><td class="route">${mv('d+4,1')} → ${mv('df+3,2~db+2')} → ${mv('f,F')} → ${mv('db+3+4')} ${prop('tornado', 14)} → ${mv('db+2')} → ${mv('1+4')}</td></tr>
          <tr><td>CH ${mv('f+3')}</td><td class="route">Same as ws3 or ${mv('qcf+1')} ${mv('qcf+1')} → ${mv('df+3,2~db+2')} → ${mv('f,F')} → ${mv('df+3,2~b+4')} ${prop('tornado', 14)} → ${mv('SS.1~qcf+2')}</td></tr>
          <tr><td>Low parry / CH ${mv('FC.df+4')}</td><td class="route">${mv('qcf+1')} ${mv('qcf+1')} → ${mv('df+3,2~db+2')} → ${mv('f,F')} → ${mv('df+3,2~db+2')} → ${mv('f,F')} → ${mv('1+4')} <span class="sm">(skip one qcf+1 if too hard)</span></td></tr>
          <tr><td>CH ${mv('qcf+3')}</td><td class="route">${mv('d+2')} → ${mv('uf+3')} → ${mv('df+3,2~db+2')} → ${mv('f,F')} → ${mv('df+3,2~b+4')} → <i>ender of choice</i></td></tr>
          <tr><td>CH ${mv('f+2,1,3')}</td><td class="route">${mv('SS.1~db+2')} → ${mv('f,F')} → ${mv('df+3,2~db+2')} → ${mv('f,F')} → ${mv('1+4')}</td></tr>
          <tr><td>Heat dash</td><td class="route">Same as f3 counter-hit route</td></tr>
          <tr><td>${mv('ub+1')}</td><td class="route">${mv('d+2,2')} → ${mv('SS.1~db+2')} → ${mv('f,F')} → ${mv('df+3,2~db+2')} → ${mv('f,F')} → ${mv('qcf+4,3,1+2')}</td></tr>
        </tbody>
      </table>

      <h3 class="subhead">Beginner Combos</h3>
      <table class="data">
        <thead><tr><th style="width: 22%">Starter</th><th>Route</th></tr></thead>
        <tbody>
          <tr><td>${mv('df+2')}</td><td class="route">${mv('uf+4')} → ${mv('uf+3')} → ${mv('df+3,2')} → ${mv('b+3+4,3')} ${prop('tornado', 14)} → ${mv('qcf+4,3,1+2')}</td></tr>
          <tr><td>${mv('ws2')}</td><td class="route">${mv('uf+3')} → ${mv('df+3,2~ws1')} → ${mv('df+3,2~b+4')} → ${mv('db+2')} → ${mv('qcf+2')}</td></tr>
          <tr><td>CH ${mv('qcf+3')}</td><td class="route">${mv('d+4,1')} → ${mv('df+3,2')} → ${mv('b+3+4,3')} ${prop('tornado', 14)} → ${mv('qcf+4,3,1+2')}</td></tr>
          <tr><td><b>Key combo to learn</b></td><td class="route">${mv('uf+3')} → ${mv('df+3,2~SS.1~db+2')} → ${mv('f,F')} → ${mv('df+3,2~b+4')} ${prop('tornado', 14)} → ${mv('db+2')} → ${mv('f,F')} → ${mv('1+4')}</td></tr>
          <tr><td>Instant tornado easy</td><td class="route">${mv('qcf+1')} → ${mv('df+3,2~ws1')} → ${mv('df+3,2~b+4')}</td></tr>
        </tbody>
      </table>

      <h3 class="subhead">Combo Enders</h3>

      <h4 class="minihead">Carry</h4>
      <p class="body">${mv('SS.1~qcf+2')}</p>

      <h4 class="minihead">Floor break <span class="props-inline">${prop('floorbreak', 14)}</span></h4>
      <p class="body">${mv('db+2')} → ${mv('f,F')} → ${mv('1+4')}</p>

      <h4 class="minihead">Wall break <span class="props-inline">${prop('wallbreak', 14)}</span></h4>
      <p class="body">${mv('qcf+4,3,1+2')}</p>

      <h3 class="subhead">Wall Combos</h3>

      <h4 class="minihead">Without Tornado</h4>
      <p class="body">${mv('SS.1~df+1')} ${mv('d+3+4')} · ${mv('df+3,2~qcf+2')} (flipover oki) · ${mv('SS.1~df+1,2,1+2')}</p>
      <p class="body sm"><i>Note: Replace ss1 with 2 if you don't want ss1 cancel.</i></p>

      <h4 class="minihead">With Tornado</h4>
      <p class="body">${mv('b+3+4,3')} ${prop('tornado', 14)} → ${mv('SS.1~1,2,1+2')}</p>

      <h3 class="subhead">Small Combos</h3>
      ${[
        ['FC DF4', 'ss(up) d+3+4'],
        ['ss(up)', 'qcf+2'],
        ['ff3', 'ws3+4'],
        ['CH ss1+2', 'Run in db4,3 full combo. Too hard → qcf+2 or d+3+4'],
        ['b+3,4', 'f+3+4,1'],
        ['ff2', 'qcf+1+2'],
        ['qcf+2', 'b+1+2'],
        ['ff3', '(b+3+4),3'],
        ['d+3+4', 'qcf+2'],
        ['CH (b+2,2),2', 'f+3+4,1'],
        ['CH (d+4),1', 'db+1+2'],
      ].map(([starter, ender]) => `<div style="padding: 6px 0; border-bottom: 1px solid var(--border); font-size: 13px; line-height: 1.6;"><b style="color: var(--accent-warm); font-family: var(--frame); display: inline-block; min-width: 240px;">${starter}</b> <span style="color: var(--text-dim)">→</span> <span>${ender}</span></div>`).join('')}
    `,

    stances: () => `
      <h3 class="subhead">No Stances — QCF &amp; QCB</h3>
      <p class="body">Nina doesn't have stances, but she does have a <b>crouch dash</b> (qcf) and <b>backsway</b> (qcb). Master these first.</p>

      <h3 class="subhead">QCF / Crouch Dash</h3>
      <div class="card">
        <p class="body"><b>Enter manually</b> via qcf motion, or from ${mv('df+1,2')}, ${mv('1+4')}, ${mv('3+4')}, ${mv('SS.1')} by holding forward.</p>
        <p class="body"><b>If you keep holding forward</b> during crouch dash → qcf moves. <b>If you release</b> → while-standing moves.</p>

        <h4 class="minihead">Best QCF Moves</h4>
        <table class="data compact">
          <tr><td>${cmd('nina','qcf+1')}</td><td>+1 OB high CH launcher with chip</td></tr>
          <tr><td>${cmd('nina','qcf+2')}</td><td>Safe wallsplat mid HE, tracks weakside ${prop('heat', 14)}</td></tr>
          <tr><td>${cmd('nina','qcf+3')}</td><td>Long-range slide, high-crush (-20 close)</td></tr>
          <tr><td>${cmd('nina','qcf+1+2')}</td><td>+4 OB HE (from SS.1)</td></tr>
          <tr><td>${cmd('nina','qcf+4,3,1+2')}</td><td>Combo ender with wall carry</td></tr>
          <tr><td>${cmd('nina','ws4')}</td><td>Classic 11f mid punish</td></tr>
        </table>

        <h4 class="minihead">Chain Throws (Delete Gray Health)</h4>
        <table class="data compact">
          <tr><td>${cmd('nina','qcf+1+3')}</td><td>Chain throw — break 1</td></tr>
          <tr><td>${cmd('nina','qcf+2+4')}</td><td>Chain throw — break 2</td></tr>
          <tr><td>${cmd('nina','df,df+1')}</td><td>Floor break throw ${prop('floorbreak', 14)}</td></tr>
        </table>
      </div>

      <h3 class="subhead">QCB / Backsway</h3>
      <div class="card">
        <p class="body"><b>qcb is evasive</b> and <b>auto-blocks lows</b>. Loop it and do <b>Hayashida step</b> by canceling into sidestep and repeating the sequence. Use qcb to evade moves and whiff punish with ${mv('df+2')} after.</p>

        <table class="data compact">
          <tr><td>${cmd('nina','qcb+1+3')}</td><td class="warn">UNBREAKABLE chain throw — short range, use in oki (after 1,2,1+2 wall combo)</td></tr>
          <tr><td>${cmd('nina','qcb,B+1+3')}</td><td><b>Betrayer</b> throw — setups from backsway</td></tr>
        </table>

        <div class="tip-box"><b>Backsway → WS punish:</b> If backsway auto-blocks a low, you can use your normal while-standing buttons to punish it.</div>
      </div>

      <h3 class="subhead">SS1 Cancels — The Cornerstone</h3>
      <div class="tip-box">
        <p><b>${mv('SS.1')} is Nina's #1 move.</b> In a vacuum it's a mid poke — but with correct timing canceling into crouch dash, you get +5 to +7 OB and access to all qcf/ws moves.</p>
        <p><b>Drill the cancel 50x a day.</b> Perfect cancel = ranks climb.</p>
      </div>

      <h3 class="subhead">Hayashida Step</h3>
      <p class="body">Nina's unique movement. Loop qcb into sidestep: <b>qcb → SS → qcb → SS...</b>. This evasive sequence is incredibly hard to catch. Use to reset neutral or bait whiffs.</p>
    `,

    pressure: () => `
      <h3 class="subhead">Plus-Frame Pressure Tools</h3>

      ${fd('nina', [
        { cmd: 'SS.1 (cancel F)', level: 'm', startup: 'i14', dmg: '16', block: '+5~+7', hit: '+3', ch: '', notes: 'Main +6~7 pressure. Access to qcf/ws. Clean cancel essential.' },
        { cmd: 'f,f,F+1+2', level: 'm', startup: 'i20', dmg: '25', block: '+4', hit: '+12a', ch: '', props: ['heat'], notes: 'Running +4 OB heat engager.' },
        { cmd: 'db+3 (OH)', level: 'L', startup: 'i20', dmg: '18', block: '-13', hit: '+4c', ch: '+13a', notes: '+4 OH low for pressure continue.' },
        { cmd: 'f+4,2~SS', level: 'm,h', startup: 'i21~22', dmg: '21,16', block: '-9', hit: '+13c', ch: '', notes: 'SS-cancel for SS1 loop pressure.' },
        { cmd: 'df+3,2', level: 'm,h', startup: 'i14', dmg: '10,12', block: '+1', hit: '+5', ch: '+12', notes: '+1 OB mid-high. Hit-confirmable. Backsway-cancelable.' },
      ])}

      <h3 class="subhead">Heat Nina — Amplified Guns</h3>
      <p class="body">Nina's Heat mode gives her the strongest "amplified" moveset in the game. She becomes a nightmare.</p>

      <h4 class="minihead">Heat Engagers (${prop('heat', 14)})</h4>
      <p class="body">${cmd('nina','f+3+4,1')} · ${cmd('nina','f+3+4,2')} (ampable) · ${cmd('nina','db+1+2')} · ${cmd('nina','f,f,F+1+2')} · ${cmd('nina','qcf+2')} · ${cmd('nina','f+4,2')}</p>

      <h4 class="minihead">Amplified In-Heat Moves</h4>
      ${fd('nina', [
        { cmd: 'H.f+3+4,2', level: 'm,h', startup: 'i14', dmg: '15,25', block: 'safe', hit: '+8', ch: '', notes: 'Amplified guns — massive chip/damage.' },
        { cmd: 'H.b+1+2', level: 'm,m', startup: 'i16', dmg: '25,20', block: '+2', hit: '+5a', ch: '', notes: '+2 OB, wallsplats. Gray health delete.' },
        { cmd: 'H.1,2,1,1+2', level: 'h,h,h,h,h,h', startup: 'i10', dmg: '5,10,17,6,6,6', block: '-2', hit: '+29a (+3)', ch: '', notes: 'Amplified 10f string.' },
        { cmd: 'H.df+1,2,1,1+2', level: 'm,h,h,h', startup: 'i13', dmg: '10,14,17,18', block: '-2', hit: '+32a', ch: '', notes: 'Amplified df1 ender.' },
        { cmd: 'H.ws1,1+2', level: 'm,h', startup: 'i13', dmg: '12,30', block: '-10', hit: 'wallsplat (far)', ch: '', notes: 'Amplified — 100+ damage gun wallsplat.' },
        { cmd: 'H.b+3+4,1+2', level: 'm,m', startup: 'i14', dmg: '15,35', block: '-5', hit: '+16a', ch: '', notes: 'Amplified b3+4.' },
        { cmd: 'H.2+3', level: 'm', startup: 'i14', dmg: '55', block: 'safe', hit: 'KND', ch: '', props: ['floorbreak'], notes: 'Heat Smash — fast, high-crushing, floor break, tracks weakside.' },
      ])}

      <div class="tip-box"><b>Threat conditioning:</b> The constant threat of 100+ damage from a heat gun wallsplat forces opponent to block, which lets you rush down and chip them.</div>
    `,

    frametraps: () => `
      <h3 class="subhead">Frame Traps (Lalo's Picks)</h3>

      <div class="card">
        <h4 class="minihead">${mv('db+3')} / ${mv('WR+1+2')} → ${mv('f+3+4,2')} / ${mv('df+1,2')}</h4>
        <p class="body sm">After +4 OH low, fastest mid check beats mash.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('SS.4')} / CH ${mv('d+4,1')} → ${mv('df+2')}</h4>
        <p class="body sm">+6 OH from SS.4 → launcher frame trap.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('f,F+2~f')} → ${mv('qcf+2')}</h4>
        <p class="body sm">QCF cancel into safe HE.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('d+2~f')} → ${mv('ws4')} / CH ${mv('ws4,3,1+2')}</h4>
        <p class="body sm">After crouch-cancel. Full string guaranteed on CH.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('df+1')} (+5 OH) → ${mv('df+2')} / ${mv('f+3+4,2')}</h4>
        <p class="body sm">Launch vs mash / HE vs slow response.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('H.b+1+2')} → ${mv('ws4')} / ${mv('ws4,3,1+2')}</h4>
        <p class="body sm">In heat: +2 OB creates unblockable trap into 11f mid.</p>
      </div>

      <h3 class="subhead">Knowledge Checks</h3>

      <div class="card">
        <h4 class="minihead">${mv('d+3,4,3')} / ${mv('d+3,2')}</h4>
        <p class="body">low-high-mid, safe, natural on CH, → ${mv('qcf+2')} guaranteed. Also ${mv('d+3,2')} low-mid that's +11 → guaranteed ${mv('db+1+2')} HE wallsplat.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('d+2,2')}</h4>
        <p class="body">Low-mid, only -12. Second part is a CH launcher. Great for round ends.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('uf+4,3,4')}</h4>
        <p class="body">High-low-high, SS-cancelable. Knowledge check vs lower-level opponents.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('SS.4')} frames on hit</h4>
        <p class="body">A lot of people don't know <b>ss4 is +6 on hit</b> — use ${mv('df+2')} after as frame trap. Many will fall for it.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('df+3,2')}</h4>
        <p class="body">Plus on block mid-high, hit-confirmable. If blocked, hold back for backsway and use WS2 as frame trap.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('SS.1')}</h4>
        <p class="body">Your best move — many don't know frames. Use ${mv('SS.1~qcf+1')} for CH launches on mashers.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('f+3')}</h4>
        <p class="body">14f high-high CH launcher, +3 OB, great tracking. Highs don't jail — duckable. Knowledge check; rarely punished unless overused.</p>
      </div>

      <h3 class="subhead">Panic Moves</h3>
      <ul class="body" style="margin: 10px 0 14px 20px; line-height: 1.7;">
        <li><b>${mv('d+4,1')}</b> — 12f high-crushing low-high, natural on CH, SS-cancelable. Duckable and launchable.</li>
        <li><b>${mv('uf+3')}</b> — 14f wallsplat mid, low-crushes. -10 OB.</li>
        <li><b>${mv('ub+1')}</b> — evasive mid launcher, -16 OB.</li>
        <li><b>${mv('d+3,4,3')}</b> — low-high-mid, natural CH, guaranteed ${mv('qcf+2')}. High-crushing, safe. 2nd hit duckable.</li>
        <li><b>${mv('SS.2')}</b> — 13f mid NH launcher, not launch-punishable. Evasive panic.</li>
      </ul>
    `,

    matchups: () => `
      <h3 class="subhead">Matchup Tips</h3>
      <p class="body">Nina excels at range 0 — your main goal every MU is to get there and stay there. Characters with strong keepout make your life hard.</p>

      <div class="matchups">
        ${[
          ['Jin','Stay range 0 — his mid-range kills you. Interrupt EWGF startup with ${df+1,2} preemptive pressure.'],
          ['Kazuya','SSL electric. Your ${db+3} beats his mids at range 0. Don\'t get knocked down near wall.'],
          ['King','Throw break drills! Your ${qcb+1+3} unbreakable counters his throws. Stay at range 1.'],
          ['Dragunov','Respect his ${df+2}. Whiff-punish lows with ${df+2}. He beats your keepout — get close.'],
          ['Paul','Duck his deathfist, punish with ${ws2} → full combo.'],
          ['Jun','Her CH game counters yours. Avoid predictable jab patterns. Use Hayashida to bait her ${f+2}.'],
          ['Reina','Her stance mix is linear — SSL Sentai. Interrupt her pressure with ${db+3}.'],
          ['Azucena','Very even. Both range-0 specialists. Execution wins.'],
          ['Victor','Dangerous at range. Get in with qcf run moves. Punish teleports with launcher.'],
          ['Lili','Keepout nightmare. Must get in. Use ${db+2} homing + qcb evasion.'],
          ['Miary Zo','Small-frame character. Interrupt MOR stance with ${1,2}. Punish ${db+3} on block.'],
          ['Yoshimitsu','His Flash ignores throws — be patient. Punish stance entries.'],
          ['Mishima mirrors','Stay range 0. Interrupt wavedash with ${df+1,2}. Never fullscreen.'],
          ['Hwoarang','Flamingo range tough. Use ${SS.1} to weave in. Punish blocked stance moves.'],
          ['Bryan','Tough MU. His backdash + keepout kills your approach. Patience.'],
          ['Law','SSR his strings. Interrupt Dragon Tail with ${db+3}.'],
          ['Alisa','Chainsaw outranges you. Get in and lock down — she struggles defensively.'],
          ['Feng','His stances are mid-range — you can bait them. Stay close.'],
          ['Heihachi','Duck hellsweep → ${ws3+4} launch. Your range 0 beats his neutral.'],
        ].map(([char, tip]) => `<div class="m-row"><span class="char">${char}</span><span class="tip">${tip.replace(/\$\{([^}]+)\}/g, (_, n) => mv(n))}</span></div>`).join('')}
      </div>
    `,

    defense_vs: () => `
      <h3 class="subhead">Playing Against Nina Williams (Lalo's Defensive Tips)</h3>

      <h3 class="subhead">Core Principles</h3>

      <div class="card">
        <h4 class="minihead">Crouchjab / challenge her pressure</h4>
        <p class="body">After moves like ${mv('df+1,2')}, <b>crouch jab beats every option except the mid extension</b>, which is -14. Use crouchjab a lot. If your character has a 10f CH button, it's a good way to check her after df12.</p>
      </div>

      <div class="card">
        <h4 class="minihead">Look out for ${mv('FC.df+4')}</h4>
        <p class="body">Whenever you use a move that puts Nina in crouching, OR if she enters manually, <b>be ready to block her ${mv('FC.df+4')}</b> (Wipe the Floor).</p>
      </div>

      <div class="card warn-box">
        <h4 class="minihead">Don't mash on ${mv('SS.1')}</h4>
        <p class="body">SS.1 does have some interruptible options (${mv('SS.1~qcf+1+2')}, ${mv('SS.1~db+3')}, ${mv('SS.1')} loop) but <b>not worth the risk</b> because she has many CH launchers and is way too plus (+10). <b>Backdash after ss1 on block</b> so she can't loop it. On hit ss1 is +27 — don't try anything.</p>
      </div>

      <div class="card">
        <h4 class="minihead">Keepout</h4>
        <p class="body">Nina excels at range 0 — <b>space her out</b>. In neutral, look out for her slide ${mv('qcf+3')} and common neutral ${mv('f+4,2')}.</p>
      </div>

      <div class="card">
        <h4 class="minihead">Which way to step</h4>
        <p class="body"><b>Step Nina to your right in general.</b> BUT — when she's in heat, heat smash is almost homing right, and her ${mv('qcf+2')} heatdash launcher tracks right too. <b>No heat → right. Heat → left.</b></p>
      </div>

      <h3 class="subhead">Specific Move Counters</h3>
      <div class="card"><h4 class="minihead">${mv('d+4,1')}</h4><p class="body">Super important to punish. She can cancel into SS — do your 15f while-standing launcher FAST, or use 13f / 11f.</p></div>
      <div class="card"><h4 class="minihead">${mv('ub+1')}</h4><p class="body">Evasive mid launcher. Launch-punish -16.</p></div>
      <div class="card"><h4 class="minihead">${mv('b+2,2,2')}</h4><p class="body">Last hit is non-jailing high, can be SS-cancel. Fuzzy-duck and punish if she commits to last hit.</p></div>
      <div class="card"><h4 class="minihead">${mv('2,3')}</h4><p class="body">Nina's 10f CH into chain throw. -13 OB.</p></div>
      <div class="card"><h4 class="minihead">${mv('4,4')}</h4><p class="body">S3 magic-4 launcher. 2nd hit is non-jailing high — <b>duck and launch</b>. Also ${mv('4,3')}; mid extension can be fuzzy-guarded.</p></div>
      <div class="card"><h4 class="minihead">${mv('qcf+3')}</h4><p class="body">-20 close, less negative if spaced. Punish based on distance (but usually &gt; -15).</p></div>
      <div class="card"><h4 class="minihead">${mv('f+2,1,3')}</h4><p class="body">${mv('f+2,1')} alone is -13. Safe high follow-up (${mv('f+2,1,4')}) and -15 mid (${mv('f+2,1,3')}).</p></div>
      <div class="card"><h4 class="minihead">${mv('db+4,3')} / ${mv('d+3,4,3')}</h4><p class="body">High-crush CH options. db43 -12 OB. d343 = low-high-mid → duck and launch 2nd hit or parry last.</p></div>
      <div class="card"><h4 class="minihead">${mv('f+1+2')}</h4><p class="body">17f PC with long range, from crouching/crouchdash. -14 OB. Some characters launch-punish it.</p></div>
      <div class="card"><h4 class="minihead">${mv('SS.2')}</h4><p class="body">Fastest launcher, used offensively and defensively. Evasive button for linear moves (crouch jab). -14 OB.</p></div>
    `,

    dos_donts: () => `
      <div class="do-dont">
        <div class="do">
          <h4>DO</h4>
          <ul>
            <li>Drill SS1 cancels 15 min/day until automatic</li>
            <li>Master ${mv('df+1,2')} and all its extensions + SS cancel</li>
            <li>Practice qcf/qcb flows until instinctive</li>
            <li>Learn Hayashida step slowly then speed up</li>
            <li>Condition opponent to block before throwing</li>
            <li>Use chain throws after wall splats</li>
            <li>Drill KBD — Nina needs it (backsway character)</li>
            <li>Build heat, threaten ${mv('H.ws1,1+2')} wallsplat</li>
            <li>Delete gray health with ${mv('FC.df+2')}, ${mv('b+1+2')}, chain throws</li>
            <li>Use ${mv('SS.2')} as evasive launcher</li>
            <li>Use ${mv('qcb,B+1+3')} Betrayer in oki</li>
          </ul>
        </div>
        <div class="dont">
          <h4>DON'T</h4>
          <ul>
            <li>Spam ${mv('df+1,2')} — duckable</li>
            <li>Pick Nina if just starting Tekken</li>
            <li>Abandon her after a week — execution takes months</li>
            <li>Spam Power Crush ${mv('f+1+2')}</li>
            <li>Play at long range — her weakness</li>
            <li>Forget SS.1's cancel timing</li>
            <li>Ignore her Heat — it's insane</li>
            <li>Lose opener respect — don't mash wake-up</li>
            <li>Commit to ${mv('b+2,2,2')} 3rd hit every time — duckable</li>
            <li>Forget her backsway = harder KBD</li>
          </ul>
        </div>
      </div>
    `,
  },

  // ================================================================
  // MIARY ZO — Fighting God Reborn (Season 2 DLC)
  // Data: TekkenDocs frame data + Dot Esports guide + kagewebsite combos
  // ================================================================
  miary: {
    name: 'Miary Zo',
    subtitle: 'The Fighting God Reborn · Morengy Rushdown',
    difficulty: 'Easy–Medium',
    okizeme: 'miary-zo',
    color: '#ffb347',
    accent: '#c67818',
    tags: ['Stances: MOR · BAO', 'Rushdown + Pressure', 'Beginner Friendly', 'Wall Carry Queen'],

    overview: () => `
      <p class="body"><b>Miary Zo is a rushdown character</b> from Madagascar combining Morengy (a Malagasy martial art), various African martial arts, animal mimicry, and Ogre powers. She's the "Fighting God Reborn" — the spiritual successor to Tekken 3's Ogre and the final DLC fighter of Season 2.</p>

      <p class="body">She epitomizes a rushdown archetype with a very <b>in-your-face approach</b>, basic moves that are plus on block, and various mixup tools through her stances. Not demanding in execution, but some of her moves have very little tracking and small hitboxes — you can still whiff what would have been a good input. Goal: condition your opponent, catch them pressing unwisely, and exert maximum pressure without getting caught off-guard.</p>

      <h3 class="subhead">Strengths</h3>
      <div class="mini-card outline-good">
        <ul>
          <li><b>Strong neutral tools</b> — pokes that reach near Range 3 (${mv('d+3')}, ${mv('df+3')}), safe CH launchers (${mv('df+4')}, ${mv('SS.2')}), and one of the only newcomers with a safe ${mv('df+2')} (only -7 OB)</li>
          <li><b>Two stances</b> (MOR + BAO) give incredible mixup potential with endless transition mind games</li>
          <li><b>Lots of plus-on-block moves</b> — consistent pressure while looking for openings</li>
          <li><b>Environmentally friendly</b> — her strongest combo ender breaks the floor, she can throw herself off walls. Breaking her (1+3) throw sticks her to the wall; both (1+3) and (2+4) floor-break. Her (uf+1+2) throw wall-breaks, easily triggering Balcony Breaks and Wall Blasts</li>
          <li><b>Lots of knockdowns, jail traps, and disruption</b></li>
          <li><b>Formidable wall carry</b> even on regular combos</li>
          <li><b>Beginner friendly</b> — straightforward movelist, strong pokes, easy inputs</li>
          <li><b>Strong Heat amplifications</b> — ${mv('H.f+4,2')} becomes +2 OB, ${mv('H.f,F+2,2')} and ${mv('H.u+3,2')} get massive buffs</li>
        </ul>
      </div>

      <h3 class="subhead">Weaknesses</h3>
      <div class="mini-card outline-bad">
        <ul>
          <li><b>Painful backdash</b> — one of the worst in the game</li>
          <li><b>Almost no good tracking moves</b> — even ${mv('df+2')} can be sidestepped by several characters</li>
          <li><b>Risky approach</b> — moves are either too risky (${mv('f,f,F+2,1')}) or too slow without conditioning (${mv('f,f,F+3')}, ${mv('f,F+3')})</li>
          <li><b>Weaker stance mix</b> — BAO's stance mix can be challenged at all times, even after being hit by the moves that put her into it</li>
          <li><b>Very low damage output</b> — her strings deal miserable damage, requiring you to win more 50/50s. Combo damage is also mediocre even with heat</li>
          <li><b>Launch-punishable lows</b> — ${mv('db+3')} (-26) leaves her super vulnerable</li>
          <li><b>Small hitboxes</b> on key moves — ${mv('df+2')} included</li>
          <li><b>Limited homing</b> — only ${mv('df+3')} and ${mv('f,F+3')} for anti-sidestep</li>
        </ul>
      </div>

      <h3 class="subhead">Heat System</h3>
      <div class="tip-box">
        <p><b>Miary's Heat amplifies her pressure with powered-up string extensions:</b></p>
        <ul style="margin: 8px 0 0 16px; line-height: 1.7;">
          <li>${mv('H.f+4,2')} — becomes <b>+2 OB</b> (from -9 OB). Massive pressure upgrade</li>
          <li>${mv('H.MOR.4,3,1+2')} — adds 3rd hit with balcony break</li>
          <li>${mv('H.f,F+2,2')} — amplified damage + reach</li>
          <li>${mv('H.u+3,2')} — new Tornado launcher</li>
          <li>${mv('H.uf+3,2')} — becomes +4 OB with Balcony Break</li>
          <li>${mv('H.2+3')} Heat Smash — mid throw with floor break</li>
          <li>${mv('H.b+3+4')} — Tromba wall slam transition with heat burst</li>
        </ul>
      </div>

      <h3 class="subhead">Her Third Stance — Tromba (TRO)</h3>
      <p class="body"><b>Miary has a technically third stance called Tromba</b> — where she clings to the wall briefly. Enter via ${mv('b+3+4')} on wall contact (or ${mv('H.b+3+4')} without wall contact in heat). Cancel with DB. Low crush. Rarely comes into play at most ranks — we include it here for completeness.</p>

      <div class="tip-box">
        <b>Playstyle summary:</b> Pressure with plus-frame moves from Morengy stance. Mix MOR.${mv('4,3')} (low) vs MOR.${mv('1,2')} (mid HE). Wall carry every combo. When opponent respects blocks, throw or enter stance. Use ${mv('df+3')} homing vs sidesteppers. Avoid raw ${mv('db+3')} — launch-punishable.
      </div>
    `,

    punishers: () => `
      <h3 class="subhead">Standing Punishers</h3>
      ${fd('miary-zo', [
        { cmd: '1,2', level: 'h,h', startup: 'i10', dmg: '5,6', block: '-3', hit: '+8', ch: '', notes: 'Standard i10 jab string. Recovers 2f faster on block/hit.' },
        { cmd: '2', level: 'h', startup: 'i11', dmg: '10', block: '-2', hit: '+9', ch: '', notes: 'Standing jab. -2 OB lets her keep turn.' },
        { cmd: '4', level: 'h', startup: 'i12', dmg: '12', block: '-12', hit: '-2', ch: '', notes: 'i12 kick — use when no HE needed.' },
        { cmd: '3,2', level: 'm,h', startup: 'i13', dmg: '12,20', block: '-6', hit: '+24a (+14)', ch: '', props: ['heat', 'balconybreak'], notes: 'i13 Heat Engager + Balcony Break. Heat Dash: +5, +43d (+35). Low crush 14~31.' },
        { cmd: 'df+2', level: 'm', startup: 'i15', dmg: '12', block: '-7', hit: '+34a (+24)', ch: 'launch', notes: 'Safe launcher. Launches crouchers on CH. +4s vs crouching.' },
        { cmd: '1+2', level: 'm,h', startup: 'i15', dmg: '8,16', block: '-9', hit: '+4', ch: '', props: ['heat', 'balconybreak'], notes: 'i15 HE + Balcony Break (airborne). Wall Crush +16g. Good SSR tracking. Jails.' },
        { cmd: 'uf+1', level: 'm,t', startup: 'i17', dmg: '13,8,29', block: '-15', hit: '-5d', ch: '', props: ['floorbreak'], notes: 'Mid throw with Floor Break. Transitions to attack throw on front hit.' },
        { cmd: 'qcf+1', level: 'm', startup: 'i17', dmg: '25', block: '-9', hit: '+25a (+15)', ch: '', props: ['balconybreak'], notes: 'Big-damage elbow launcher. Balcony Break. Bufferable.' },
      ])}

      <h3 class="subhead">While-Standing (Crouching) Punishers</h3>
      ${fd('miary-zo', [
        { cmd: 'ws4', level: 'm', startup: 'i11', dmg: '15', block: '-4', hit: '+7', ch: '', notes: 'Safe quick poke-out. +7 OH.' },
        { cmd: 'ws1,4', level: 'm,m', startup: 'i13', dmg: '12,20', block: '-13', hit: '+18a (+9)', ch: '', props: ['heat', 'balconybreak'], notes: 'i13 HE + Balcony Break. Heat Dash: +5, +43d (+35). Core WS punisher.' },
        { cmd: 'ws2', level: 'm', startup: 'i15', dmg: '15', block: '-13', hit: '+32a (+22)', ch: '', notes: 'i15 launcher. Jab evasion. Raw WS launch.' },
        { cmd: 'ws3', level: 'm', startup: 'i20', dmg: '20', block: '+4', hit: '+7c', ch: '+54a', notes: 'Spike launcher. +4 OB — rare plus-on-block WS move.' },
      ])}

      <h3 class="subhead">Whiff Punishers</h3>
      ${fd('miary-zo', [
        { cmd: 'df+2', level: 'm', startup: 'i15', dmg: '12', block: '-7', hit: '+34a (+24)', ch: '', notes: 'Safe mid-range whiff punish launcher.' },
        { cmd: 'SS.2', level: 'm', startup: 'i20', dmg: '22', block: '+1', hit: '+3', ch: '+59a', props: ['balconybreak'], notes: 'SS launcher. Balcony Break (airborne). MOR +4 OB on hit via ~F.' },
        { cmd: 'uf+4,4', level: 'm,m', startup: 'i15~16', dmg: '10,23', block: '-13', hit: '+67a (+51)', ch: '', props: ['tornado'], notes: 'Instant Tornado on hit. Juggle starter whiff punish.' },
        { cmd: 'qcf+1', level: 'm', startup: 'i17', dmg: '25', block: '-9', hit: '+25a (+15)', ch: '', props: ['balconybreak'], notes: 'Big-damage bufferable launcher.' },
      ])}

      <div class="tip-box"><b>Miary's punishment is safe and direct.</b> ${mv('df+2')} at -7 is extremely hard to punish, making her one of the only characters with a <b>safe i15 launcher</b>. Abuse it against unsafe moves — the reward is high, and the risk on block is minimal.</div>
    `,

    moves: () => `
      <p class="body">Miary Zo's key moves — the toolkit that defines her pressure rushdown playstyle. Her best moves often <b>auto-transition</b> into stances, creating constant mixup threats.</p>

      <h3 class="subhead">1 · ${mv('df+3')} — Safe Homing Mid</h3>
      <p class="body"><b>Her only reliable homing tool.</b> i20 mid, -9 OB. Safe enough to throw out regularly, and it's a weapon (Ogre powers) so it hits with a tailspin effect. Anti-sidestep primary.</p>
      <p class="body sm"><span class="code">m · i20~21 · -9 OB · +4 OH</span></p>

      <h3 class="subhead">2 · ${mv('df+4')} — CH Knee Launcher</h3>
      <p class="body"><b>Knee CH launcher</b> with +57 on CH. Only -4 OB (very safe). Auto-enters MOR via F (at -1 OB / +8 OH / +60a on CH). A core pressure and CH tool in one.</p>
      <p class="body sm"><span class="code">m · i16 · -4 OB · +5 OH · +57a oCH</span></p>

      <h3 class="subhead">3 · ${mv('db+3')} — Best Low, Biggest Risk</h3>
      <p class="body"><b>Her best low</b> — tracks, can't be low-parried (weapon), staggers on block, launches on CH (+44a). High crush from frame 8. BUT — <b>-26 OB</b>. This is launch-punishable by every character. Use <b>only</b> when you have a hard read on a high attack or need guaranteed chip.</p>
      <p class="body sm"><span class="code">L · i22~23 · -26 OB · +5c OH · +44a oCH</span></p>

      <h3 class="subhead">4 · ${mv('d+3')} — Long-Range Tracking Low</h3>
      <p class="body">Long-range low poke (weapon). Tracks. Can't be parried. +1 OH. Use as safe chip tool from mid-range. Only -14 OB — doesn't launch.</p>
      <p class="body sm"><span class="code">L · i20 · -14 OB · +1 OH · +12g oCH</span></p>

      <h3 class="subhead">5 · ${mv('df+1,1,2')} / ${mv('df+1,1,1+2')} — Core String</h3>
      <p class="body">i13 mid string with two powerful extensions. ${mv('df+1,1,2')} is a mid-high-M spike ender that <b>force-crouches</b> on hit. ${mv('df+1,1,1+2')} is the tornado ender — use for combo filler. ${mv('df+1,1~F')} transitions to MOR +0 OB / +8 OH. Essential pressure string.</p>
      <p class="body sm"><span class="code">m,h,M · i13 · -12 OB · +5a OH · +50a oCH (2 hit)</span></p>

      <h3 class="subhead">6 · ${mv('b+4')} — Big Mid, Long Range</h3>
      <p class="body">19 damage mid with great right sidestep tracking. <b>Balcony Break</b>. +22a on hit for mini-juggle. Only -2 OB. A true mid-range poke that gets big reward. Low crush 9~35.</p>
      <p class="body sm"><span class="code">m · i19 · -2 OB · +22a (+13) OH · +39a oCH</span></p>

      <h3 class="subhead">7 · ${mv('f+4,2')} — Mid-Mid Balcony Break</h3>
      <p class="body">Mid-mid combo string, -9 OB, Balcony Break on hit. ${mv('f+4,d+2')} pushes opponent to foreground, ${mv('f+4,u+2')} to background — stage control in 3D.  Power up in Heat. Interrupt with i7 from 1st block.</p>
      <p class="body sm"><span class="code">m,m · i18 · -9 OB · +16a (+7) OH</span></p>

      <h3 class="subhead">8 · ${mv('u+3')} — High-Reward Mid</h3>
      <p class="body">Mid weapon attack. <b>+27g on hit</b> — opponent recovers crouching, huge oki setup. -9 OB. Low crush 9~28, floating state. In Heat: ${mv('H.u+3,2')} becomes a new Tornado launcher.</p>
      <p class="body sm"><span class="code">m · i17~18 · -9 OB · +27g OH · +40a oCH</span></p>

      <h3 class="subhead">9 · ${mv('SS.2')} — Sidestep Launcher</h3>
      <p class="body">Mid launcher off sidestep. +1 OB and +3 OH (plus frames!), Balcony Break (airborne). Enter MOR with ~F (+4 / +6 / r32). Sidestep is 9f — effective startup is i29, but the payoff is massive when opponent commits to a linear attack.</p>
      <p class="body sm"><span class="code">m · i20 (i29 effective) · +1 OB · +3 OH · +59a oCH</span></p>

      <h3 class="subhead">10 · ${mv('1+2')} — HE Wall Crush</h3>
      <p class="body">i15 mid-high Heat Engager. Wall Crush +16g on hit. Balcony Break (airborne). Good SSR tracking. Jails from 1st attack. Chip in heat. One of the best i15 HEs in the game — <b>safe on block at -9</b>, launches on hit. Heat Dash: +5, +36a (+26).</p>
      <p class="body sm"><span class="code">m,h · i15 · -9 OB · +4 OH</span></p>

      <h3 class="subhead">Supplementary Key Moves</h3>

      <h4 class="minihead">${mv('f,f,F+3')} — Running BAO Access</h4>
      <p class="body sm">+6 to +9 OB with chip. Auto-transitions to BAO stance. Chip damage on block. Balcony Break. Low crush 21~35. <b>Plus-frame running tool</b> — forces BAO mix after.</p>
      <p class="body sm"><span class="code">m · i23~26 · +6~+9 OB · +19a (+9) OH</span></p>

      <h4 class="minihead">${mv('b+2,3,2')} — Mid-High-H String</h4>
      <p class="body sm">Mid-high-high string ending in weapon attack. Jails from 3rd attack. Chip damage on block. -6 OB. Balcony Break. Strong poke that ends plus OH (+21d).</p>
      <p class="body sm"><span class="code">m,h,h · i13 · -6 OB · +21d OH</span></p>

      <h4 class="minihead">${mv('b+3,4,2')} — Aerial Tailspin String</h4>
      <p class="body sm">Mid-high-high combo string. Strong Aerial Tailspin (combo extender). Balcony Break. ${mv('b+3,4,2~F')} enters MOR at -1 OB / +19a (+10) / r30. Chip damage on block. Core combo filler.</p>
      <p class="body sm"><span class="code">m,h,h · i16 · -13 OB · +7a (-2) OH</span></p>

      <h4 class="minihead">${mv('b+1+2')} — Power Crush</h4>
      <p class="body sm">i18 PC. Balcony Break. Spike. -13 OB. Block advantage -9 on successful attack absorption with chip damage. Power crush frames 7~17.</p>
      <p class="body sm"><span class="code">m · i18 · -13 OB · +20a (+15) OH</span></p>

      <h4 class="minihead">${mv('FC.df+4')} — Full-Crouch Low</h4>
      <p class="body sm">i18 low. Clean hit adds 4 damage (+9a). Stagger on block. High crush 1~44. But -26 OB — same risk as ${mv('db+3')}. Use sparingly.</p>

      <h4 class="minihead">${mv('f+2')} — Punch Sabaki</h4>
      <p class="body sm">i20 mid. Balcony Break (airborne). On successful parry: +30d (+22) and Balcony Break. Parry state frames 5~10. Use as a read against jab-heavy pressure.</p>
      <p class="body sm"><span class="code">m · i20 · -13 OB · +5 OH</span></p>

      <h4 class="minihead">${mv('uf+4,4')} — Tornado Juggle</h4>
      <p class="body sm">i15~16 mid-mid. Combo from 1st hit. <b>Instant Tornado on hit</b>. Low crush 1~49. A common juggle extender — forces T! to let you continue combos.</p>
      <p class="body sm"><span class="code">m,m · i15~16 · -13 OB · +67a (+51) OH</span></p>
    `,

    framedata: () => `
      <div class="section-head">
        <h3 class="subhead">Complete Frame Data — Miary Zo</h3>
      </div>

      <p class="body">Full frame data for Miary Zo's essential moves. Click any command to open okizeme.gg. Data sourced from TekkenDocs v3.00.</p>

      <h3 class="subhead">Jabs &amp; Light Pokes</h3>
      ${fd('miary-zo', [
        { cmd: '1', level: 'h', startup: 'i10', dmg: '5', block: '+1', hit: '+8', ch: '', notes: 'Jab. Recovers 2f faster on hit/block.' },
        { cmd: '1,1', level: 'h,h', startup: 'i10,i16', dmg: '5,5', block: '-4', hit: '+3', ch: '', notes: 'Jails from 1st with 2f delay. Combo from 1st with 4f delay.' },
        { cmd: '1,1,2', level: 'h,h,h,h', startup: 'i10,i15~16,i11~12', dmg: '5,5,4,8', block: '-11', hit: '+2', ch: '', props: ['balconybreak'], notes: 'Balcony Break (airborne). Wall Crush +16g. ~F enters MOR.' },
        { cmd: '1,2', level: 'h,h', startup: 'i10,i13', dmg: '5,6', block: '-3', hit: '+8', ch: '', notes: 'Jails from 1st with 4f delay.' },
        { cmd: '1,2,2', level: 'h,h,h', startup: 'i10,i28~30', dmg: '5,6,20', block: '-7', hit: '+14d', ch: '+67a (+51)', props: ['tornado', 'balconybreak'], notes: 'Combo from 1st CH. Instant Tornado on CH.' },
        { cmd: '1,3', level: 'h,m', startup: 'i10,i20', dmg: '5,10', block: '-6', hit: '+0', ch: '', notes: 'Links to 10-hit strings. +0c on crouching hit.' },
        { cmd: '2', level: 'h', startup: 'i11', dmg: '10', block: '-2', hit: '+9', ch: '', notes: 'Standing jab.' },
        { cmd: '2,2', level: 'h,h', startup: 'i11,i28~30', dmg: '10,20', block: '-7', hit: '+14d', ch: '+67a (+51)', props: ['tornado', 'balconybreak'], notes: 'Instant Tornado on CH.' },
        { cmd: '3', level: 'm', startup: 'i13~14', dmg: '12', block: '-9', hit: '+5', ch: '', notes: 'Fast mid check.' },
        { cmd: '3,1', level: 'm,m', startup: 'i13~14,i18~19', dmg: '12,10', block: '-10', hit: '+1', ch: '', notes: 'Jails. ~F enters MOR at -7/+4/r25.' },
        { cmd: '3,1,2', level: 'm,m,m', startup: 'i13~14,i16~18', dmg: '12,10,22', block: '-14', hit: '+28a (+13)', ch: '', notes: 'Combo from 2nd CH with 11f delay.' },
        { cmd: '3,2', level: 'm,h', startup: 'i13~14,i26~28', dmg: '12,20', block: '-6', hit: '+24a (+14)', ch: '', props: ['heat', 'balconybreak'], notes: 'HE. Heat Dash: +5, +43d. Low crush 14~31.' },
        { cmd: '4', level: 'h', startup: 'i12', dmg: '12', block: '-12', hit: '-2', ch: '', notes: 'i12 high kick.' },
        { cmd: '4,4', level: 'h,h', startup: 'i12,i29~30', dmg: '12,20', block: '-13', hit: '+6', ch: '', notes: 'Jails from 1st. Auto BAO on hit +6/r26. Low crush 30~50.' },
      ])}

      <h3 class="subhead">Forward Mids &amp; Stance-Entry Moves</h3>
      ${fd('miary-zo', [
        { cmd: 'f+2', level: 'm', startup: 'i20', dmg: '23', block: '-13', hit: '+5', ch: '', props: ['balconybreak'], notes: 'Punch Sabaki (frames 5~10). +30d on parry.' },
        { cmd: 'f+4', level: 'm', startup: 'i18', dmg: '12', block: '-6', hit: '+2', ch: '', notes: 'Low crush 9~14.' },
        { cmd: 'f+4,2', level: 'm,m', startup: 'i18,i31', dmg: '12,20', block: '-9', hit: '+16a (+7)', ch: '', props: ['balconybreak'], notes: 'Weapon. Chip on block. f+4,d+2 foreground, f+4,u+2 background.' },
        { cmd: 'f+4,4', level: 'm,h', startup: 'i18,i26', dmg: '12,15', block: '-5', hit: '+9', ch: '', notes: 'Low crush 21~22.' },
        { cmd: 'f+4,4,4', level: 'm,h,h', startup: 'i18,i30~31', dmg: '12,15,30', block: '-9', hit: '+14d', ch: '', props: ['balconybreak'], notes: 'Low crush 8~34.' },
        { cmd: 'f+1+2,1+2,3+4', level: 'm×5,m,m', startup: 'i14~15', dmg: '3,3,3,2,2,5,12', block: '-22', hit: '+6a (-11)', ch: '', props: ['balconybreak'], notes: 'Full f+1+2 string ender. Low crush 19~28.' },
        { cmd: 'f+3+4', level: 'm', startup: 'i18', dmg: '10', block: '-9', hit: '+3', ch: '', notes: 'Low crush 9~18.' },
        { cmd: 'f+3+4,2', level: 'm,m', startup: 'i18,i29~30', dmg: '10,20', block: '-20', hit: '+64a (+48)', ch: '', props: ['tornado'], notes: 'Instant Tornado on hit. Can hit grounded off-axis (steel pedal).' },
      ])}

      <h3 class="subhead">Forward+Diagonal Attacks</h3>
      ${fd('miary-zo', [
        { cmd: 'df+1', level: 'm', startup: 'i13', dmg: '10', block: '-2', hit: '+5', ch: '', notes: 'Safe i13 mid. Core poke.' },
        { cmd: 'df+1,1', level: 'm,h', startup: 'i13,i19', dmg: '10,17', block: '-3', hit: '+5', ch: '', notes: '~F enters MOR at +0/+8/r22.' },
        { cmd: 'df+1,1,2', level: 'm,h,M', startup: 'i13,i30', dmg: '10,17,20', block: '-12', hit: '+5a', ch: '+50a', props: ['forcecrouch'], notes: 'Spike ender. Weapon. Force crouch on hit.' },
        { cmd: 'df+1,1,1+2', level: 'm,h,M', startup: 'i13,i27~28', dmg: '10,17,23', block: '-17', hit: '+35a (+25)', ch: '', props: ['tornado'], notes: 'T! ender. Weapon. Chip on block.' },
        { cmd: 'df+1,4', level: 'm,m', startup: 'i13,i18~19', dmg: '10,17', block: '-13', hit: '+6', ch: '+35a (+25)', notes: 'Knee. Auto BAO on hit +6/r24.' },
        { cmd: 'df+2', level: 'm', startup: 'i15~16', dmg: '12', block: '-7', hit: '+34a (+24)', ch: 'launch', notes: 'Safe launcher (crouchers on CH). +4s vs crouching.' },
        { cmd: 'df+3', level: 'm', startup: 'i20~21', dmg: '15', block: '-9', hit: '+4', ch: '', props: ['homing'], notes: 'Homing weapon mid.' },
        { cmd: 'df+3,3', level: 'm,m', startup: 'i20~21,i26~27', dmg: '15,20', block: '-13', hit: '+15a (+6)', ch: '', props: ['balconybreak'], notes: 'Homing weapon 2-hit.' },
        { cmd: 'df+4', level: 'm', startup: 'i16', dmg: '17', block: '-4', hit: '+5', ch: '+57a', notes: 'Knee CH launcher. Auto MOR with ~F.' },
        { cmd: 'df+3+4', level: 'L', startup: 'i21', dmg: '17', block: '-15', hit: '-4', ch: '+6a', notes: 'High crush 6~45. Unsafe low.' },
      ])}

      <h3 class="subhead">Lows &amp; Down Attacks</h3>
      ${fd('miary-zo', [
        { cmd: 'd+2', level: 'M', startup: 'i26', dmg: '20', block: '-4c', hit: '+8d', ch: '+53a', props: ['forcecrouch'], notes: 'Spike. Weapon. Chip on block.' },
        { cmd: 'd+3', level: 'L', startup: 'i20', dmg: '14', block: '-14', hit: '+1', ch: '+12g', notes: 'Tracking weapon low. High crush from 12.' },
        { cmd: 'd+1+2', level: 'M', startup: 'i19~20', dmg: '23', block: '-17', hit: '+35a (+25)', ch: '', props: ['tornado'], notes: 'Instant Tornado. High crush 9~18. Chip on block.' },
        { cmd: 'db+2', level: 'm', startup: 'i15', dmg: '10', block: '-11', hit: '+2', ch: '', notes: 'Mid poke.' },
        { cmd: 'db+2,3', level: 'm,m', startup: 'i15,i23~24', dmg: '10,10', block: '-11', hit: '+2', ch: '', notes: 'Knee ender.' },
        { cmd: 'db+2,4', level: 'm,m', startup: 'i15,i22~23', dmg: '10,17', block: '-13', hit: '+6', ch: '+35a (+25)', notes: 'Knee. Auto BAO on hit.' },
        { cmd: 'db+3', level: 'L', startup: 'i22~23', dmg: '21', block: '-26', hit: '+5c', ch: '+44a', notes: 'BEST LOW. Stagger on block. High crush from 8. LAUNCH-PUNISHABLE on block.' },
        { cmd: 'db+4', level: 'L', startup: 'i18', dmg: '13', block: '-12', hit: '+1', ch: '', notes: 'Fast safe low.' },
        { cmd: 'db+1+2', level: 'h', startup: 'i18', dmg: '18', block: '+3', hit: '+13c', ch: '', props: ['balconybreak'], notes: '+3 OB plus frames. Airborne Balcony Break.' },
      ])}

      <h3 class="subhead">Back Attacks</h3>
      ${fd('miary-zo', [
        { cmd: 'b+1', level: 'h', startup: 'i12~13', dmg: '10', block: '-9', hit: '+4', ch: '+4s', notes: 'Elbow.' },
        { cmd: 'b+1,4', level: 'h,h', startup: 'i12~13,i22~23', dmg: '10,21', block: '-13', hit: '+16a (-1)', ch: '+71a (+55)', props: ['tornado', 'balconybreak'], notes: 'Tornado ender. CH: first hit → full launch +71a.' },
        { cmd: 'b+2', level: 'h', startup: 'i13', dmg: '10', block: '-12', hit: '+0', ch: '', props: ['homing'], notes: 'Homing high.' },
        { cmd: 'b+2,3', level: 'h,h', startup: 'i13,i18~19', dmg: '10,16', block: '-9', hit: '+2', ch: '', notes: '~F enters MOR at -6/+5/r28.' },
        { cmd: 'b+2,3,2', level: 'h,h,h,h,h', startup: 'i13,i27~29', dmg: '10,16,5,8,12', block: '-6', hit: '+21d', ch: '', props: ['balconybreak'], notes: 'Weapon. Jails from 3rd attack. Chip on block.' },
        { cmd: 'b+3', level: 'm', startup: 'i16~17', dmg: '9', block: '-13', hit: '-2', ch: '', notes: 'Mid launcher setup.' },
        { cmd: 'b+3,4', level: 'm,h', startup: 'i16~17,i24', dmg: '9,13', block: '-13', hit: '-5', ch: '', notes: 'Low crush 14~42.' },
        { cmd: 'b+3,4,2', level: 'm,h,h', startup: 'i16~17,i28~29', dmg: '9,13,19', block: '-13', hit: '+7a (-2)', ch: '', props: ['balconybreak'], notes: 'Strong Aerial Tailspin. ~F MOR at -1/+19a/r30.' },
        { cmd: 'b+4', level: 'm', startup: 'i19', dmg: '19', block: '-2', hit: '+22a (+13)', ch: '+39a', props: ['balconybreak'], notes: 'Good right sidestep tracking. Low crush 9~35.' },
        { cmd: 'b+1+2', level: 'm', startup: 'i18', dmg: '25', block: '-13', hit: '+20a (+15)', ch: '', props: ['powercrush', 'balconybreak'], notes: 'Spike. Power crush 7~17.' },
      ])}

      <h3 class="subhead">Up &amp; Jumping Attacks</h3>
      ${fd('miary-zo', [
        { cmd: 'u+3', level: 'm', startup: 'i17~18', dmg: '17', block: '-9', hit: '+27g', ch: '+40a', notes: 'Weapon. Opponent crouches on hit. Low crush 9~28.' },
        { cmd: 'u+4', level: 'm', startup: 'i16~17', dmg: '17', block: '-13', hit: '+6', ch: '+35a (+25)', notes: 'Knee. Auto BAO on hit. Low crush 9~32.' },
        { cmd: 'u+1+2', level: 'm', startup: 'i22', dmg: '20', block: '+4', hit: '+13c', ch: '', props: ['floorbreak'], notes: 'Floor Break. Chip on block. +4 OB!' },
        { cmd: 'uf+1', level: 'm,t', startup: 'i17', dmg: '13,8,29', block: '-15', hit: '-5d', ch: '', props: ['floorbreak'], notes: 'Floor Break throw.' },
        { cmd: 'uf+2', level: 'h', startup: 'i17', dmg: '14', block: '-2', hit: '+2', ch: '+3', notes: 'Safe high.' },
        { cmd: 'uf+2,3', level: 'h,L', startup: 'i17,i27~28', dmg: '14,14', block: '-14', hit: '+2c', ch: '', notes: 'High-low mixup.' },
        { cmd: 'uf+2,4', level: 'h,m', startup: 'i17,i31~32', dmg: '14,20', block: '-11', hit: '+6c', ch: '', props: ['floorbreak'], notes: 'Floor Break.' },
        { cmd: 'uf+3', level: 'h,h,m', startup: 'i18~19,i9~10,i9~10', dmg: '6,6,12', block: '-7', hit: '+6', ch: '', props: ['balconybreak'], notes: 'Weapon. Low crush 9~38.' },
        { cmd: 'uf+4', level: 'm', startup: 'i15~16', dmg: '10', block: '-15', hit: '-7s', ch: '', notes: 'Low crush 9~31.' },
        { cmd: 'uf+4,4', level: 'm,m', startup: 'i15~16,i24~25', dmg: '10,23', block: '-13', hit: '+67a (+51)', ch: '', props: ['tornado'], notes: 'Instant Tornado on hit. Main T! extender.' },
        { cmd: 'uf+3+4', level: 'm', startup: 'i25~16', dmg: '18', block: '-5', hit: '+20a', ch: '', notes: 'Spike. Low crush 9~30.' },
      ])}

      <h3 class="subhead">Dashing &amp; Running</h3>
      ${fd('miary-zo', [
        { cmd: 'f,F+2', level: 'm', startup: 'i15~16', dmg: '14', block: '-9', hit: '+7', ch: '', notes: 'Dash mid.' },
        { cmd: 'f,F+2,2', level: 'm,m', startup: 'i15~16,i22~23', dmg: '14,14,4,10', block: '-9', hit: '+32a (+6)', ch: '', props: ['balconybreak'], notes: 'Weapon. Chip on block. Power up in Heat.' },
        { cmd: 'f,F+3', level: 'm', startup: 'i20~21', dmg: '19', block: '-9', hit: '+6', ch: '', props: ['homing', 'balconybreak'], notes: 'Strong Aerial Tailspin. Homing.' },
        { cmd: 'qcf+1', level: 'm', startup: 'i17', dmg: '25', block: '-9', hit: '+25a (+15)', ch: '', props: ['balconybreak'], notes: 'Bufferable elbow launcher.' },
        { cmd: 'f,f,F+2', level: 'h', startup: 'i14', dmg: '12', block: '-9', hit: '-3', ch: '', notes: 'Running high.' },
        { cmd: 'f,f,F+2,1', level: 'h,h', startup: 'i14,i17~18', dmg: '12,14', block: '+1', hit: '+33d (+25)', ch: '', props: ['balconybreak'], notes: 'Elbow. Jails from 1st. +1 OB. Chip. ~F MOR +4/+36d/r27.' },
        { cmd: 'f,f,F+3', level: 'm', startup: 'i23~26', dmg: '30', block: '+6~+9', hit: '+19a (+9)', ch: '', props: ['balconybreak'], notes: 'Running mid. +6~+9 OB. Auto BAO on hit/block. Low crush 21~35.' },
        { cmd: 'b,B+2+3', level: 'm!', startup: 'i62~63', dmg: '30', block: '—', hit: '-6d', ch: '', props: ['balconybreak'], notes: 'Slow unblockable mid.' },
      ])}

      <h3 class="subhead">Sidestep &amp; Stance Moves</h3>
      ${fd('miary-zo', [
        { cmd: 'SS.2', level: 'm', startup: 'i20 (i29 effective)', dmg: '22', block: '+1', hit: '+3', ch: '+59a', props: ['balconybreak'], notes: 'SS launcher. Airborne Balcony Break. ~F MOR +4/+6/r32.' },
        { cmd: 'MOR.1', level: 'm', startup: 'i13', dmg: '14', block: '-4', hit: '+8', ch: '', notes: 'Good right sidestep tracking.' },
        { cmd: 'MOR.1,2', level: 'm,h,h,h', startup: 'i13,i21~23', dmg: '14,5,8,12', block: '-3', hit: '+24d', ch: '', props: ['heat', 'balconybreak'], notes: 'HE 5-hit. Heat Dash: +5, +36a (+26). Weapon.' },
        { cmd: 'MOR.1,4', level: 'm,m', startup: 'i13,i22~23', dmg: '14,20', block: '-13', hit: '+6', ch: '+35a (+25)', notes: 'Knee. Auto BAO on hit.' },
        { cmd: 'MOR.2', level: 'M', startup: 'i15~17', dmg: '20', block: '-6', hit: '+18a (+1)', ch: '+72a (+56)', props: ['tornado', 'balconybreak'], notes: 'Elbow. Jab evasion. Steel pedal.' },
        { cmd: 'MOR.3', level: 'm', startup: 'i17', dmg: '20', block: '-13', hit: '+12a (+3)', ch: '', props: ['powercrush', 'balconybreak'], notes: 'Power crush 7~16. -9 OB on absorption.' },
        { cmd: 'MOR.4', level: 'L', startup: 'i17', dmg: '10', block: '-12', hit: '-1', ch: '', notes: 'High crush 1~29.' },
        { cmd: 'MOR.4,3', level: 'L,h', startup: 'i17,i22~23', dmg: '10,14', block: '-13', hit: '+6', ch: '', props: ['balconybreak'], notes: 'Airborne Balcony Break. Mix-up low.' },
        { cmd: 'MOR.1+2', level: 'm', startup: 'i26', dmg: '23', block: '+6', hit: '+29d', ch: '+84a (+64)', props: ['floorbreak'], notes: 'Spike. Auto BAO on hit/block. Chip. Low crush 6~24. +6 OB!' },
        { cmd: 'BAO.1', level: 'h', startup: 'i13~14', dmg: '12', block: '+4', hit: '+9', ch: '', notes: 'Low crush 1~80. +4 OB.' },
        { cmd: 'BAO.1,4', level: 'h,m,m', startup: 'i13~14,i25~26,i7~8', dmg: '12,5,20', block: '-5', hit: '+24d', ch: '', props: ['balconybreak', 'floorbreak'], notes: 'Low crush 1~31. Chip on block.' },
        { cmd: 'BAO.2', level: 'M', startup: 'i23~25', dmg: '24', block: '-18', hit: '+33a (+23)', ch: '', props: ['tornado'], notes: 'Weapon. Steel pedal. Low crush 1~50.' },
        { cmd: 'BAO.3', level: 'm,m', startup: 'i19~20,i10~11', dmg: '15,25', block: '-9', hit: '+15d (+5)', ch: '', props: ['heat', 'homing', 'balconybreak'], notes: 'Homing HE. Low crush 1~66.' },
        { cmd: 'BAO.4', level: 'L,m', startup: 'i18~19,i27~28', dmg: '18,20', block: '-24', hit: '-2d', ch: '+66a (+50)', props: ['tornado'], notes: 'Jab evasion. Low crush 1~43.' },
      ])}

      <h3 class="subhead">While Standing &amp; Full Crouch</h3>
      ${fd('miary-zo', [
        { cmd: 'ws1', level: 'm', startup: 'i13~14', dmg: '12', block: '-8', hit: '+7', ch: '', notes: 'Safe WS mid.' },
        { cmd: 'ws1,4', level: 'm,m', startup: 'i13~14,i20', dmg: '12,20', block: '-13', hit: '+18a (+9)', ch: '', props: ['heat', 'balconybreak'], notes: 'HE. Heat Dash: +5, +43d (+35).' },
        { cmd: 'ws2', level: 'm', startup: 'i15~16', dmg: '15', block: '-13', hit: '+32a (+22)', ch: '', notes: 'Jab evasion launcher.' },
        { cmd: 'ws3', level: 'm', startup: 'i20', dmg: '20', block: '+4', hit: '+7c', ch: '+54a', notes: 'Spike. Plus-on-block WS!' },
        { cmd: 'ws4', level: 'm', startup: 'i11~12', dmg: '15', block: '-4', hit: '+7', ch: '', notes: 'Safe quick WS kick.' },
        { cmd: 'FC.df+4', level: 'L', startup: 'i18~19', dmg: '16', block: '-26', hit: '+4c', ch: '', notes: 'Clean hit +9a, 4 extra damage. Stagger on block. High crush 1~44.' },
      ])}

      <h3 class="subhead">Throws &amp; Rage Art</h3>
      ${fd('miary-zo', [
        { cmd: '1+3', level: 't', startup: 'i12~14', dmg: '35', block: '-9', hit: '-5d', ch: '', props: ['floorbreak'], notes: 'Floor Break. Homing. Break 1 or 2. ~Wall enters WAL.' },
        { cmd: '2+4', level: 't', startup: 'i12~14', dmg: '35', block: '-6', hit: '-3d', ch: '', props: ['floorbreak'], notes: 'Floor Break. Homing. Side switch on hit.' },
        { cmd: 'Back Throw', level: 't', startup: 'i12~14', dmg: '50', block: '—', hit: '+0d', ch: '', props: ['floorbreak'], notes: 'UNBREAKABLE.' },
        { cmd: 'Left Throw', level: 't', startup: 'i12~14', dmg: '40', block: '-3', hit: '-6d', ch: '', props: ['floorbreak'], notes: 'Break 1.' },
        { cmd: 'Right Throw', level: 't', startup: 'i12~14', dmg: '40', block: '-3', hit: '-3d', ch: '', props: ['floorbreak'], notes: 'Break 2. Side switch.' },
        { cmd: 'uf+1+2', level: 't', startup: 'i12', dmg: '40', block: '-3', hit: '+0d', ch: '', props: ['balconybreak'], notes: 'Break 1+2.' },
        { cmd: '2+3', level: 'm', startup: 'i16', dmg: '12,12', block: '+1', hit: '+2c', ch: '', props: ['powercrush'], notes: 'Heat Burst. Cancel to r45 with b,b. Power crush 7~16.' },
        { cmd: 'H.2+3', level: 'm,th', startup: 'i17~18', dmg: '52', block: '+6', hit: '-5d', ch: '', props: ['floorbreak'], notes: 'Heat Smash. Floor Break. Auto BAO +6/r24 on block.' },
        { cmd: 'R.df+1+2', level: 'm,t', startup: 'i20', dmg: '55+', block: '-18', hit: '+0d', ch: '', props: ['powercrush'], notes: 'Rage Art. Damage scales with HP up to 82.' },
      ])}
    `,

    combos: () => `
      <div class="section-head">
        <h3 class="subhead">Bread-and-Butter Combos</h3>
      </div>

      <p class="body">Miary's combos emphasize <b>wall carry</b> over raw damage. Her damage is mediocre compared to the cast, but she drives opponents into walls consistently. FBl = Floor Blast. T! = Tornado <span class="props-inline">${prop('tornado', 14)}</span>.</p>

      <p class="body"><b>Core combo skeleton:</b> <span class="stance-label">launcher</span> → ${mv('uf+3')} → ${mv('df+4~F')} → MOR.${mv('1,4')} → BAO.${mv('2')} → ${mv('b+3,4,2~F')} → MOR.${mv('db')} → ${mv('uf+1')}</p>

      <h3 class="subhead">Optimal Combos (Max Damage Routes)</h3>

      <table class="data">
        <thead><tr><th style="width: 20%">Starter</th><th>Route</th></tr></thead>
        <tbody>
          <tr><td>${mv('d+1+2')} (Rage combo)</td><td class="route">${mv('d+1+2')} → ${mv('u+3')} → ${mv('u+3')} → ${mv('df+4~F')} → MOR.${mv('1,4')} → BAO.${mv('2')} → ${mv('b+3,4,2~F')} → MOR.${mv('db')} → ${mv('uf+1')} → FBl → ${mv('f,f+3')} → dash → Heat Burst → ${mv('3,2~F')} → ${mv('f+1+2,1+2,3+4')} <span class="sm">(121 damage)</span></td></tr>
          <tr><td>CH ${mv('db+3')}</td><td class="route">${mv('db+3')} → ${mv('u+3')} → ${mv('df+4~F')} → MOR.${mv('1,4')} → BAO.${mv('2')} → ${mv('b+3,4')} → ${mv('qcf+1')}</td></tr>
          <tr><td>${mv('df+2')} launch</td><td class="route">${mv('df+2')} → ${mv('u+3')} → ${mv('df+4~F')} → ${mv('u+1+2')} → ${mv('4,4')} → BAO.${mv('2')} → ${mv('b+3,4,2~F')} → ${mv('1,2')} <span class="sm">(71 damage, 13 hits)</span></td></tr>
          <tr><td>${mv('uf+4,4')} T! starter</td><td class="route">${mv('uf+4,4')} ${prop('tornado', 14)} → ${mv('df+4~F')} → MOR.${mv('1,4')} → BAO.${mv('2')} → wall carry ender</td></tr>
          <tr><td>${mv('qcf+1')} launch</td><td class="route">${mv('qcf+1')} → ${mv('uf+3')} → ${mv('df+4~F')} → MOR.${mv('1,4')} → BAO.${mv('2')} → ${mv('qcf+1')}</td></tr>
          <tr><td>${mv('3,2')} HE ${prop('heat', 14)}</td><td class="route">${mv('3,2')} → Heat Dash → ${mv('uf+3')} → combo filler → MOR.${mv('1,2')}</td></tr>
          <tr><td>${mv('1+2')} HE ${prop('heat', 14)}</td><td class="route">${mv('1+2')} → Heat Dash → ${mv('df+4~F')} → MOR.${mv('1,4')} → BAO.${mv('2')} → wall splat ender</td></tr>
          <tr><td>${mv('ws1,4')} HE</td><td class="route">${mv('ws1,4')} → Heat Dash → ${mv('df+4~F')} → MOR.${mv('1,4')} → BAO.${mv('2')} → ${mv('b+3,4,2~F')} → ${mv('1,2')}</td></tr>
        </tbody>
      </table>

      <h3 class="subhead">Beginner Combos (Simpler Routes)</h3>

      <table class="data">
        <thead><tr><th style="width: 20%">Starter</th><th>Route</th></tr></thead>
        <tbody>
          <tr><td>${mv('df+2')}</td><td class="route">${mv('df+2')} → ${mv('u+3')} → ${mv('df+4~F')} → ${mv('u+1+2')} → ${mv('4,4')} → BAO.${mv('2')} → dash → ${mv('u+1')} <span class="sm">(66 damage, 10 hits)</span></td></tr>
          <tr><td>${mv('qcf+1')}</td><td class="route">${mv('qcf+1')} → ${mv('uf+3')} → ${mv('b+3,4,2')}</td></tr>
          <tr><td>${mv('uf+4,4')}</td><td class="route">${mv('uf+4,4')} ${prop('tornado', 14)} → ${mv('f,F+2,2')}</td></tr>
          <tr><td>${mv('b+4')}</td><td class="route">${mv('b+4')} → ${mv('f,F+2')} → ${mv('b+3,4,2')}</td></tr>
          <tr><td>${mv('ws2')}</td><td class="route">${mv('ws2')} → ${mv('uf+3')} → ${mv('f,F+2,2')}</td></tr>
        </tbody>
      </table>

      <h3 class="subhead">Combo Enders</h3>

      <h4 class="minihead">Wall Carry</h4>
      <p class="body">${cmd('miary-zo','b+3,4,2~F')} → MOR follow · ${cmd('miary-zo','f,F+2,2')} · ${cmd('miary-zo','MOR.1,4')} → BAO.${mv('2')}</p>

      <h4 class="minihead">Floor Break <span class="props-inline">${prop('floorbreak', 14)}</span></h4>
      <p class="body">${cmd('miary-zo','uf+1')} · ${cmd('miary-zo','uf+1+2')} · ${cmd('miary-zo','MOR.1+2')} · ${cmd('miary-zo','u+1+2')} · ${cmd('miary-zo','H.2+3')} Heat Smash</p>

      <h4 class="minihead">Wall Combos</h4>
      <ul class="body" style="margin: 8px 0 0 20px; line-height: 1.9;">
        <li>${mv('f+1+2,1+2,3+4')} — standard wall ender (Balcony Break)</li>
        <li>After wall splat: ${mv('uf+3')} → ${mv('f,F+2,2')}</li>
        <li>Corner: ${mv('4,4')} → BAO.${mv('2')} → ${mv('b+3,4,2~F')}</li>
      </ul>

      <h3 class="subhead">Small Combos (Off Various Starters)</h3>
      ${[
        ['CH db+3', 'u+3 → df+4,F → MOR.1,4 → BAO.2 → qcf+1'],
        ['CH MOR.4,3', 'MOR.1+2 for spike + BAO transition'],
        ['CH b+1,4', 'b+1,4 itself launches on CH +71a — route into combo'],
        ['CH df+4', 'df+4~F auto-MOR → MOR.2 T! → juggle filler'],
        ['CH SS.2', 'uf+3 → wall carry route'],
        ['CH u+3', '+27g allows oki mixup (not juggle — force-crouch followup)'],
        ['db+1+2', '+3 OB plus-frame pressure — no combo, convert pressure'],
      ].map(([starter, ender]) => `<div style="padding: 6px 0; border-bottom: 1px solid var(--border); font-size: 13px; line-height: 1.6;"><b style="color: var(--accent-warm); font-family: var(--frame); display: inline-block; min-width: 200px;">${starter}</b> <span style="color: var(--text-dim)">→</span> <span>${ender}</span></div>`).join('')}
    `,

    stances: () => `
      <h3 class="subhead">The Two Stances — MOR and BAO</h3>

      <p class="body">Miary has two main stances: <b>Morengy Miroso (MOR)</b> — her offensive pressure stance, and <b>Baobab Mihira (BAO)</b> — her pole/weapon stance. Both can transition into each other creating deep mind games. Her third stance (<b>Tromba / WAL</b>) is situational.</p>

      <h3 class="subhead">MOR — Morengy Miroso</h3>
      <div class="card">
        <p class="body"><b>Enter:</b> ${mv('3,1~F')}, ${mv('df+1,1~F')}, ${mv('b+2,3~F')}, ${mv('b+3,4,2~F')}, ${mv('f,f,F+2,1~F')}, auto from MOR.${mv('1,2')}/MOR.${mv('2')}/MOR.${mv('3')}. Low crush on entry.</p>

        <p class="body"><b>Strategy:</b> MOR is Miary's primary mixup stance. Entry grants plus frames or pressure. The core 50/50 is <b>MOR.${mv('4,3')}</b> (low) vs <b>MOR.${mv('1,2')}</b> (mid HE). Mix with ${mv('MOR.1+2')} spike (+6 OB!) for unexpected plus frames.</p>

        <h4 class="minihead">MOR Moves</h4>
        <table class="data compact">
          <tr><td>${cmd('miary-zo','MOR.1')}</td><td>Mid +8 OH, -4 OB. Good SSR tracking.</td></tr>
          <tr><td>${cmd('miary-zo','MOR.1,2')}</td><td>HE ${prop('heat', 14)} 5-hit string. Balcony Break. Jails from 2nd.</td></tr>
          <tr><td>${cmd('miary-zo','MOR.1,4')}</td><td>Knee CH launcher. Auto BAO on hit +6/r24.</td></tr>
          <tr><td>${cmd('miary-zo','MOR.2')}</td><td>T! ${prop('tornado', 14)} elbow. Balcony Break. Jab evasion. Steel pedal.</td></tr>
          <tr><td>${cmd('miary-zo','MOR.3')}</td><td>Power Crush ${prop('powercrush', 14)}. Balcony Break.</td></tr>
          <tr><td>${cmd('miary-zo','MOR.4,3')}</td><td><b>Mix-up low.</b> Plus OH, -13 OB. Airborne Balcony Break.</td></tr>
          <tr><td>${cmd('miary-zo','H.MOR.4,3,1+2')}</td><td>In-Heat 3rd hit adds Balcony Break.</td></tr>
          <tr><td>${cmd('miary-zo','MOR.1+2')}</td><td>Spike mid. +6 OB! Auto BAO. Floor Break on hit. +29d OH, +84a oCH.</td></tr>
          <tr><td>${cmd('miary-zo','MOR.u+1+2')}</td><td>Low-crush mid. -2 OB. Low crush 13~29.</td></tr>
          <tr><td>${cmd('miary-zo','MOR.db')}</td><td>Cancel crouch / duck.</td></tr>
        </table>
      </div>

      <h3 class="subhead">BAO — Baobab Mihira (Pole Stance)</h3>
      <div class="card">
        <p class="body"><b>Enter (auto):</b> ${mv('db+2,4')} on hit, ${mv('MOR.1,4')} on hit, ${mv('df+1,4')} on hit, ${mv('u+4')} on hit, ${mv('4,4')} on hit, ${mv('f,f,F+3')} on hit/block, ${mv('MOR.1+2')} on hit/block, ${mv('MOR.3')} on hit. Cancel with B.</p>

        <p class="body"><b>Strategy:</b> BAO is your <b>combo filler + mixup stance</b>. Many of Miary's string extensions auto-transition here. Use BAO.${mv('2')} for tornado, BAO.${mv('3')} for HE, and BAO.${mv('1,4')} for floor-break combo enders.</p>

        <div class="warn-box"><b>Key weakness (Dot Esports):</b> "BAO's stance mix can be challenged at all times, even after being hit by the moves that put her into it." Don't rely on BAO for mixup — use it for combos.</div>

        <h4 class="minihead">BAO Moves</h4>
        <table class="data compact">
          <tr><td>${cmd('miary-zo','BAO.1')}</td><td>+4 OB low-crush high. Low crush 1~80.</td></tr>
          <tr><td>${cmd('miary-zo','BAO.1,4')}</td><td>Floor Break ender ${prop('floorbreak', 14)}. Low crush 1~31.</td></tr>
          <tr><td>${cmd('miary-zo','BAO.2')}</td><td>T! ${prop('tornado', 14)} launcher. Weapon. Steel pedal.</td></tr>
          <tr><td>${cmd('miary-zo','BAO.3')}</td><td>HE ${prop('heat', 14)} homing ${prop('homing', 14)}. Balcony Break.</td></tr>
          <tr><td>${cmd('miary-zo','BAO.4')}</td><td>Low → mid. T! on CH. Jab evasion.</td></tr>
          <tr><td>${cmd('miary-zo','BAO.F')}</td><td>Advance. Low crush 1~12, floating 13~15, high crush 21~59.</td></tr>
          <tr><td>${cmd('miary-zo','BAO.uf')}</td><td>Evasive forward leap. Low crush 1~83, floating 84~86.</td></tr>
        </table>
      </div>

      <h3 class="subhead">WAL (Tromba) — Wall Cling</h3>
      <div class="card">
        <p class="body"><b>Enter:</b> ${mv('b+3+4')} on wall contact, ${mv('H.b+3+4')} without wall in Heat. Cancel with DB.</p>

        <table class="data compact">
          <tr><td>${cmd('miary-zo','WAL.4')}</td><td>40 damage mid! +2 OB, Reversal Break. Balcony Break. ~F MOR +5/+13d.</td></tr>
          <tr><td>${cmd('miary-zo','WAL.F')}</td><td>Drop to MOR. Low crush 1~12, floating 13~20, high crush 21~59.</td></tr>
          <tr><td>${cmd('miary-zo','WAL.uf')}</td><td>Drop to BAO. Low crush.</td></tr>
        </table>

        <p class="body sm">Rarely used outside specific wall setups. Good for mix-ups near the wall but commits Miary to a specific follow-up.</p>
      </div>

      <h3 class="subhead">Stance Entry Summary</h3>
      ${fd('miary-zo', [
        { cmd: '3,1~F', level: 'm,m', startup: 'i13~14', dmg: '12,10', block: '-7', hit: '+4', ch: '', notes: '→ MOR at r25.' },
        { cmd: 'df+1,1~F', level: 'm,h', startup: 'i13,i19', dmg: '10,17', block: '+0', hit: '+8', ch: '', notes: '→ MOR at r22.' },
        { cmd: 'b+2,3~F', level: 'h,h', startup: 'i13,i18~19', dmg: '10,16', block: '-6', hit: '+5', ch: '', notes: '→ MOR at r28.' },
        { cmd: 'b+3,4,2~F', level: 'm,h,h', startup: 'i16~17', dmg: '9,13,19', block: '-1', hit: '+19a (+10)', ch: '', notes: '→ MOR at r30. Aerial Tailspin.' },
        { cmd: 'f,f,F+2,1~F', level: 'h,h', startup: 'i14', dmg: '12,14', block: '+4', hit: '+36d (+28)', ch: '', notes: '→ MOR at r27. +4 OB!' },
        { cmd: 'SS.2~F', level: 'm', startup: 'i20', dmg: '22', block: '+4', hit: '+6', ch: '', notes: '→ MOR at r32.' },
        { cmd: 'db+2,4', level: 'm,m', startup: 'i15', dmg: '10,17', block: '-13', hit: '+6 BAO', ch: '', notes: 'Auto BAO on hit only.' },
        { cmd: 'MOR.1,4', level: 'm,m', startup: 'i13', dmg: '14,20', block: '-13', hit: '+6 BAO', ch: '', notes: 'Auto BAO on hit.' },
        { cmd: 'MOR.1+2', level: 'm', startup: 'i26', dmg: '23', block: '+6 BAO', hit: '+29d BAO', ch: '+84a (+63)', notes: 'Auto BAO on hit/block!' },
        { cmd: 'MOR.3', level: 'm', startup: 'i17', dmg: '20', block: '-13', hit: '+12a', ch: '', notes: 'PC → auto BAO.' },
        { cmd: 'f,f,F+3', level: 'm', startup: 'i23~26', dmg: '30', block: '+6~+9 BAO', hit: '+19a BAO', ch: '', notes: 'Auto BAO on hit/block.' },
        { cmd: 'u+4', level: 'm', startup: 'i16~17', dmg: '17', block: '-13', hit: '+6 BAO', ch: '+35a (+25)', notes: 'Auto BAO on hit.' },
      ])}
    `,

    pressure: () => `
      <h3 class="subhead">Plus-Frame Pressure Tools</h3>

      <p class="body">Miary's pressure is built on <b>multiple plus-on-block moves</b> — she's one of the few characters who can maintain constant frame advantage without big commits.</p>

      ${fd('miary-zo', [
        { cmd: '1', level: 'h', startup: 'i10', dmg: '5', block: '+1', hit: '+8', ch: '', notes: 'Jab jail pressure.' },
        { cmd: 'db+1+2', level: 'h', startup: 'i18', dmg: '18', block: '+3', hit: '+13c', ch: '', props: ['balconybreak'], notes: 'Airborne Balcony Break. Jab frame trap setup.' },
        { cmd: 'u+1+2', level: 'm', startup: 'i22', dmg: '20', block: '+4', hit: '+13c', ch: '', props: ['floorbreak'], notes: 'Floor Break setup.' },
        { cmd: 'f,f,F+2,1', level: 'h,h', startup: 'i14', dmg: '12,14', block: '+1', hit: '+33d (+25)', ch: '', props: ['balconybreak'], notes: 'Jails from 1st. Chip.' },
        { cmd: 'f,f,F+3', level: 'm', startup: 'i23~26', dmg: '30', block: '+6~+9', hit: '+19a (+9)', ch: '', props: ['balconybreak'], notes: 'Auto BAO +6/r34. Low crush 21~35.' },
        { cmd: 'BAO.1', level: 'h', startup: 'i13~14', dmg: '12', block: '+4', hit: '+9', ch: '', notes: 'Continue BAO pressure.' },
        { cmd: 'MOR.1+2', level: 'm', startup: 'i26', dmg: '23', block: '+6', hit: '+29d', ch: '+84a', props: ['floorbreak'], notes: '+6 OB with auto-BAO. Rare plus-frame combo tool.' },
        { cmd: 'ws3', level: 'm', startup: 'i20', dmg: '20', block: '+4', hit: '+7c', ch: '+54a', notes: 'WS spike mid. +4 OB.' },
        { cmd: 'H.f+4,2', level: 'm,m', startup: 'i18', dmg: '12,25', block: '+2', hit: '+16a (+7)', ch: '', props: ['balconybreak'], notes: 'In-heat: +2 OB (from -9). Massive upgrade.' },
        { cmd: 'H.uf+3,2', level: 'h,h,m,m', startup: 'i18~19', dmg: '6,6,12,22', block: '+4', hit: '+17a (+7)', ch: '', props: ['balconybreak'], notes: 'In-heat becomes +4 OB.' },
      ])}

      <h3 class="subhead">Pressure Loops &amp; Sequences</h3>

      <div class="card">
        <h4 class="minihead">Core Loop: ${mv('df+1,1~F')} → MOR Mix</h4>
        <p class="body">${mv('df+1,1')} at -3 OB means opponent has to guess. ${mv('df+1,1~F')} to MOR forces another guess. From MOR: low (${mv('MOR.4,3')}), mid (${mv('MOR.1,4')}), throw, or ${mv('MOR.1+2')} spike. Loop this pattern — opponent eventually commits to something and you react.</p>
      </div>

      <div class="card">
        <h4 class="minihead">Dash Loop: ${mv('f,f,F+3')} → BAO</h4>
        <p class="body">+6 OB with auto BAO. BAO gives you another mix (${mv('BAO.1')} for +4 OB, ${mv('BAO.3')} for HE, ${mv('BAO.4')} for low-mid). Essentially a double plus-frame pressure tool.</p>
      </div>

      <div class="card">
        <h4 class="minihead">HE into Heat Dash</h4>
        <p class="body">Options: ${mv('3,2')} → Heat Dash launch · ${mv('1+2')} → Heat Dash launch · ${mv('ws1,4')} → Heat Dash launch · ${mv('MOR.1,2')} → Heat Dash. All land huge follow-ups. Build to heat, commit to HE when opponent respects.</p>
      </div>

      <h3 class="subhead">Heat Miary — Amplified Fighting God</h3>

      <p class="body">In Heat, Miary's key string extensions power up dramatically:</p>

      ${fd('miary-zo', [
        { cmd: 'H.2+3', level: 'm,th', startup: 'i17~18', dmg: '52', block: '+6', hit: '-5d', ch: '', props: ['floorbreak'], notes: 'Heat Smash. Mid throw. Auto BAO +6 on block only.' },
        { cmd: 'H.f+4,2', level: 'm,m', startup: 'i18', dmg: '12,25', block: '+2', hit: '+16a (+7)', ch: '', props: ['balconybreak'], notes: 'Becomes +2 OB (big upgrade).' },
        { cmd: 'H.f,F+2,2', level: 'm,m', startup: 'i15~16', dmg: '14,33', block: '-1', hit: '+40a (+14)', ch: '', props: ['balconybreak'], notes: 'Power-up damage and reach.' },
        { cmd: 'H.MOR.4,3,1+2', level: 'L,h,m', startup: 'i17', dmg: '10,14,20', block: '-17', hit: '+14a (-3)', ch: '', props: ['balconybreak'], notes: '3rd hit adds Balcony Break + high crush.' },
        { cmd: 'H.u+3,2', level: 'm,m', startup: 'i17~18,i30~32', dmg: '17,27', block: '-9', hit: '+65a (+49)', ch: '', props: ['tornado'], notes: 'New Tornado launcher. 5 chip on block.' },
        { cmd: 'H.uf+3,2', level: 'h,h,m,m', startup: 'i18~19', dmg: '6,6,12,22', block: '+4', hit: '+17a (+7)', ch: '', props: ['balconybreak'], notes: '+4 OB (was -7 OB).' },
        { cmd: 'H.b+3+4', level: '', startup: '', dmg: '', block: '', hit: '', ch: '', notes: 'Wall slam transition without wall contact — partially consumes Heat Time.' },
      ])}

      <h3 class="subhead">Whiff Punish &amp; Spacing</h3>

      <div class="three-col">
        <div class="mini-card">
          <h4>Close range</h4>
          <p>${mv('1,2')} i10 · ${mv('df+1')} i13 mid check · ${mv('df+2')} i15 safe launcher</p>
        </div>
        <div class="mini-card">
          <h4>Mid range</h4>
          <p>${mv('b+4')} big mid · ${mv('uf+4,4')} T! · ${mv('qcf+1')} elbow</p>
        </div>
        <div class="mini-card">
          <h4>Long range</h4>
          <p>${mv('df+3')} homing · ${mv('f,F+3')} homing · ${mv('d+3')} tracking low</p>
        </div>
      </div>
    `,

    frametraps: () => `
      <h3 class="subhead">Frame Traps — Miary's Pressure Web</h3>

      <p class="body">Miary's pressure relies on chaining plus-frame moves into follow-ups that beat mash. Use these to force commits.</p>

      <div class="card">
        <h4 class="minihead">After ${mv('db+1+2')} (+3 OB)</h4>
        <p class="body sm">→ ${mv('1,2')} jab frame trap · ${mv('df+1')} mid check · throw mix</p>
        <p class="body sm"><i>Logic:</i> +3 means ${mv('1')} (i10) beats any i11+ response. Throw forces standing.</p>
      </div>

      <div class="card">
        <h4 class="minihead">After ${mv('f,f,F+2,1')} (+1 OB)</h4>
        <p class="body sm">→ ${mv('df+1')} i13 · ${mv('df+2')} i15 launcher · ${mv('1,2')} i10</p>
        <p class="body sm"><i>Logic:</i> Jails from 1st hit. +1 OB lets i10 jab beat their i11 response.</p>
      </div>

      <div class="card">
        <h4 class="minihead">After ${mv('f,f,F+3')} (+6~+9 OB, auto BAO)</h4>
        <p class="body sm">→ BAO.${mv('1')} +4 OB · BAO.${mv('3')} HE · BAO.${mv('4')} low mixup</p>
        <p class="body sm"><i>Logic:</i> Huge plus + stance mixup. BAO.1 re-establishes pressure, BAO.4 threatens low.</p>
      </div>

      <div class="card">
        <h4 class="minihead">After ${mv('u+1+2')} (+4 OB)</h4>
        <p class="body sm">→ Floor break setup · ${mv('df+1')} frame trap · ${mv('df+2')} launcher</p>
        <p class="body sm"><i>Logic:</i> +4 OB is enough for any i14 attack to beat a jab response.</p>
      </div>

      <div class="card">
        <h4 class="minihead">After ${mv('MOR.1+2')} (+6 OB, auto BAO)</h4>
        <p class="body sm">→ BAO.${mv('1')} continuation · BAO.${mv('3')} homing HE · BAO.${mv('F')} advance</p>
        <p class="body sm"><i>Logic:</i> Rare +6 OB spike that transitions to stance. Pressure continues indefinitely.</p>
      </div>

      <h3 class="subhead">Counter-Hit Fishing Setups</h3>

      <table class="data">
        <thead><tr><th>Bait</th><th>CH Tool</th><th>Payoff</th></tr></thead>
        <tbody>
          <tr><td>${mv('df+1')} blocked</td><td>${mv('df+2')} i15 · ${mv('df+4')} i16</td><td>Launch vs mash</td></tr>
          <tr><td>${mv('1')} jab trades</td><td>${mv('db+3')} on read</td><td>Big CH low launch (worth risk)</td></tr>
          <tr><td>${mv('db+3')} hit</td><td>Followup: Run ${mv('u+3')}</td><td>Oki mixup, force-crouch setup</td></tr>
          <tr><td>${mv('df+4')} on CH</td><td>Auto MOR → mixup</td><td>+57a launch potential</td></tr>
          <tr><td>${mv('SS.2')} on CH</td><td>+59a launch</td><td>Full juggle from sidestep</td></tr>
          <tr><td>${mv('b+1,4')} 1st CH</td><td>String continues +71a</td><td>Massive CH damage</td></tr>
          <tr><td>${mv('uf+4,4')}</td><td>Instant T! on hit</td><td>Free juggle without meter</td></tr>
          <tr><td>${mv('MOR.1,4')} blocked</td><td>Mix with MOR.4,3 low</td><td>50/50 forced</td></tr>
        </tbody>
      </table>

      <h3 class="subhead">Knowledge Checks</h3>

      <div class="card">
        <h4 class="minihead">${mv('f+4,4,4')} — 3-Hit High Sequence</h4>
        <p class="body sm">Mid-high-high. Extensions can be delayed 1f. <b>The 3rd hit is duckable</b> — good players react. Use sparingly. -9 OB on full string.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('b+2,3,2')} — 3-Hit High Ender</h4>
        <p class="body sm">Mid-high-high-weapon string. Jails from 3rd hit. Chip damage. <b>Ends -6 OB</b>, so it's close to safe. The weapon hits are hard to react to. Good mental frames tool.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('BAO.4')} — Low to Mid</h4>
        <p class="body sm">Low → mid. The low is i18~19, second hit i27~28. -24 OB on full string. <b>Second hit launches on CH (+66a)</b>. Used sparingly — opponent can low-parry the first hit, but not many realize this.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('db+3')} — The Danger Low</h4>
        <p class="body sm">Can't be low-parried (weapon). But <b>-26 OB</b>. Use only on hard reads against high-attack habits. Stagger on block lets good players still punish. High crush from frame 8.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('1+2+3+4')} — Install Taunt</h4>
        <p class="body sm">Can't block for 5 seconds. CH state on next attack for 5 seconds (T7 legacy, now 10% damage buff in T8 S2). Meme move — use only in casual matches.</p>
      </div>
    `,

    matchups: () => `
      <h3 class="subhead">Matchup Tips — Miary Zo</h3>

      <p class="body">Miary's range-limited pressure and slow backdash make matchup knowledge critical. Know which characters outrange you (most) and compensate with plus-frame bullying.</p>

      <div class="matchups">
        ${[
          ['Jin','Stay outside his mid-range. Homing ${df+3} beats sidestep. Punish blocked EWGF with ${df+2} launcher. Your ${b+1+2} PC beats his offense.'],
          ['Kazuya','Low-crush jab pressure with MOR.1. Block electrics first, punish deathfist on block with ${qcf+1}. Your ${df+2} punishes blocked Hellsweep.'],
          ['King','Break throws religiously. ${1}/${2} for chain throws. Your ${b+1+2} Power Crush beats his command grabs in neutral.'],
          ['Dragunov','Very hard matchup. Stay at plus frames with ${db+1+2}. Punish every unsafe move with ${df+2}. His ${df+2} beats yours at range.'],
          ['Paul','Duck his deathfist → ${ws2} launch. SSL most strings. Your ${b+4} outranges his pokes.'],
          ['Jun','Her ${d+3+4} beats your mash. Respect first, then mix with MOR.4,3 vs MOR.1,2. Punish blocked ${f+2} with launch.'],
          ['Nina','Range 0 is brutal. Use ${df+3} homing to interrupt her ss1 cancels. Your ${1+2} HE beats her pressure.'],
          ['Lili','She keeps you out with ${f+4}. Run in with ${f,f,F+3} to close gap. Beat ${df+3+4} on block with ${df+2} launch.'],
          ['Reina','SSL her Sentai. Block first, punish her -13 lows with launch. Your MOR.1+2 +6 OB beats her frame checks.'],
          ['Hwoarang','Duck flamingo highs. Homing ${df+3} catches his stance switches. ${1+2} HE punishes his -9 stuff.'],
          ['Azucena','Interrupt her Libertador with jabs. Small hitboxes hurt you here. Use ${b+4} to outspace.'],
          ['Yoshimitsu','Patience. Your BAO stance beats his throws. Punish Flash with ${ws2}. Don\'t chase through his teleports.'],
          ['Bryan','Respect backdash — your moves whiff. Keep pressure plus-frame tight. Your ${df+2} punishes his ${df+2} mirror.'],
          ['Heihachi','Duck his electrics. Hellsweep punishable on block — launch. Your CH ${df+4} knee catches his timing.'],
          ['Alisa','Stomp loops counter your mash. Block mid, react to lows. ${df+3} homing catches her rocket punches.'],
          ['Feng','Shifting Clouds is linear — SSL. Your ${b+4} outranges his mids. Punish blocked Kenpo with ${df+2}.'],
          ['Steve','Sway mixups — careful with ${db+3}. Your ${df+3} homing catches his evasive steps.'],
          ['Lars','Dash-cancel pressure threatens yours. Use ${1+2} HE to interrupt. Break his command grabs.'],
          ['Clive','His projectiles annoy at mid-range. Close with ${f,F+3}. Punish his MP stance moves individually.'],
          ['Victor','Teleport warp — block first. Your ${df+3} catches teleports. Launch his slow approach with ${df+2}.'],
        ].map(([char, tip]) => `<div class="m-row"><span class="char">${char}</span><span class="tip">${tip.replace(/\$\{([^}]+)\}/g, (_, n) => mv(n))}</span></div>`).join('')}
      </div>

      <div class="tip-box"><b>General Miary matchup advice:</b> Her backdash is among the worst in the game. Avoid characters with long-range whiff punishers (Dragunov, Bryan, Feng). Compensate with plus-frame loops and ${mv('f,f,F+3')} closer-ins. Learn to <b>step into her pressure</b> rather than backing off — her tools work best at range 1.</div>
    `,

    defense_vs: () => `
      <h3 class="subhead">Playing Against Miary Zo</h3>

      <p class="body">Miary's pressure is relentless but her toolkit has exploitable holes. Knowing what to punish and what to step defines the matchup.</p>

      <h3 class="subhead">Anti-Miary Core Principles</h3>

      <div class="card">
        <h4 class="minihead">Punish ${mv('db+3')} hard</h4>
        <p class="body">Her best low is <b>-26 OB</b> with stagger. Every character has a launch punish for this. Block it, launch. This alone makes her struggle against patient defense.</p>
      </div>

      <div class="card">
        <h4 class="minihead">Challenge BAO stance</h4>
        <p class="body">"BAO's stance mix can be challenged at all times, even after being hit by the moves that put her into it." BAO.${mv('2')} is -18 OB — launch it. BAO.${mv('4')} first hit is i18 low, duckable.</p>
      </div>

      <div class="card">
        <h4 class="minihead">Step her linear moves</h4>
        <p class="body">Miary has limited tracking. ${mv('df+2')} can be sidestepped by several characters. Her only real homing is ${mv('df+3')}. SSR most of her strings — step and whiff punish.</p>
      </div>

      <div class="card">
        <h4 class="minihead">Exploit her slow backdash</h4>
        <p class="body">One of the worst in the game. If you push her with dash pressure, she can't escape. Run-up throws, running mids, and plus-frame loops corner her easily.</p>
      </div>

      <div class="card warn-box">
        <h4 class="minihead">Respect her plus-frame moves</h4>
        <p class="body">${mv('f,f,F+3')} is +6~+9 OB. ${mv('MOR.1+2')} is +6 OB. ${mv('db+1+2')} is +3 OB. Don't mash — she'll CH you. Wait for her to commit to a string, then interrupt with your i10 or punish the unsafe move.</p>
      </div>

      <h3 class="subhead">Specific Move Counters</h3>

      <div class="card">
        <h4 class="minihead">${mv('db+3')} — Best Low</h4>
        <p class="body">-26 OB with stagger. <b>Launch punish every time</b>. Your character's best i15 launcher works here.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('f+3+4,2')} — Tornado String</h4>
        <p class="body">-20 OB on full string. Always launchable. Can hit grounded off-axis (steel pedal) — so if you're knocked down at an angle, watch out. But on block, launch it.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('BAO.2')} — Tornado Launcher</h4>
        <p class="body">-18 OB. Launch it. Only useful in combos for her — raw usage is suicide.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('MOR.4,3')} — Low mixup</h4>
        <p class="body">-13 OB, airborne Balcony Break on hit. i17 low, slow enough to block if you're looking for it. Good players low-parry the first hit.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('uf+4')} — Unsafe i15 Mid</h4>
        <p class="body">Only -15 OB raw (launch-punishable), but the extension ${mv('uf+4,4')} is -13 with Tornado. Usually she commits to the extension — launch the raw uf+4 attempt.</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('FC.df+4')} — Crouch Low</h4>
        <p class="body">-26 OB with stagger. Launch punish when blocked. Clean hit does extra damage but requires specific spacing.</p>
      </div>

      <h3 class="subhead">Defensive Summary</h3>

      <div class="do-dont">
        <div class="do">
          <h4>When facing Miary, DO</h4>
          <ul>
            <li>Block and react to ${mv('db+3')} — always punish</li>
            <li>Launch ${mv('BAO.2')} and ${mv('f+3+4,2')} on block</li>
            <li>Sidestep her linear moves (most!) — she has limited homing</li>
            <li>Challenge BAO stance — it's not truly safe</li>
            <li>Force her to backdash — she's slow</li>
            <li>Corner her — pressure her slow movement</li>
            <li>Duck her high strings (${mv('b+2,3,2')} 3rd hit)</li>
            <li>Respect plus-frame moves, don't mash</li>
          </ul>
        </div>
        <div class="dont">
          <h4>When facing Miary, DON'T</h4>
          <ul>
            <li>Mash after blocking — CH fishing everywhere</li>
            <li>Let her loop ${mv('f,f,F+3')} → BAO pressure</li>
            <li>Stand block ${mv('db+3')} if you see it — crouch-block is correct</li>
            <li>Play passive vs her plus-frame game — force commits</li>
            <li>Try to outrange her (unless you have great pokes) — fight range 1</li>
            <li>Forget her Heat amplifies her pressure significantly</li>
            <li>Stay down after knockdown — she has strong oki</li>
          </ul>
        </div>
      </div>
    `,

    dos_donts: () => `
      <h3 class="subhead">The Ultimate Miary Zo Do's and Don'ts</h3>

      <div class="do-dont">
        <div class="do">
          <h4>DO</h4>
          <ul>
            <li><b>Spam plus-on-block moves</b> for pressure — ${mv('db+1+2')}, ${mv('u+1+2')}, ${mv('ws3')}, ${mv('MOR.1+2')}</li>
            <li>Use ${mv('df+3')} homing vs sidesteppers — it's your only reliable one</li>
            <li>Enter MOR via string cancels, not raw — safer transitions</li>
            <li>Master BAO cancel (hold B) to bait and reset</li>
            <li><b>Wall-carry every combo</b> — her damage is mediocre, maximize position</li>
            <li>Mix MOR.${mv('4,3')} (low) vs MOR.${mv('1,2')} (mid HE)</li>
            <li>Break throws with 1 and 2 breaks drill daily</li>
            <li>Build to Heat, then pressure with amplified strings</li>
            <li>Use ${mv('df+2')} safely — it's -7 OB and launches on CH crouchers</li>
            <li>Know your ${mv('b+1,4')} CH confirm — +71a if first hit CH</li>
            <li>Use ${mv('f,f,F+3')} as dash-in mix starter</li>
            <li>Use ${mv('f+2')} punch sabaki as a defensive option (parry from f5~10)</li>
          </ul>
        </div>
        <div class="dont">
          <h4>DON'T</h4>
          <ul>
            <li><b>Don't spam ${mv('db+3')}</b> — launch-punishable (-26)</li>
            <li>Don't use ${mv('df+3+4')} raw — -15 OB</li>
            <li>Don't use ${mv('FC.df+4')} raw — same -26 punish as db+3</li>
            <li>Don't forget her backdash is terrible — play forward, not backward</li>
            <li>Don't expect big damage — she trades volume for pressure</li>
            <li>Don't rely on BAO stance vs throw-heavy characters</li>
            <li>Don't ignore Heat amplifications — they define her power spikes</li>
            <li>Don't step into her own linear moves vs good players</li>
            <li>Don't use ${mv('BAO.2')} raw — -18 OB launch-punishable</li>
            <li>Don't use ${mv('f+3+4,2')} raw — -20 OB always launches</li>
            <li>Don't commit to raw ${mv('b,B+2+3')} unblockable — too slow (i62)</li>
            <li>Don't neglect the 3D stage — push opponents to interactables (${mv('f+4,d+2')} / ${mv('f+4,u+2')})</li>
          </ul>
        </div>
      </div>

      <h3 class="subhead">4-Week Miary Zo Development Plan</h3>

      <table class="data">
        <thead><tr><th>Week</th><th>Focus</th></tr></thead>
        <tbody>
          <tr><td>Week 1</td><td>Punishers cold. Drill i10 ${mv('1,2')}, i11 ${mv('2')}, i13 ${mv('3,2')} HE. Learn ${mv('df+2')} safe launcher spacing. Throw break drill.</td></tr>
          <tr><td>Week 2</td><td>Combo skeleton: ${mv('df+2')} → ${mv('u+3')} → ${mv('df+4~F')} → MOR.${mv('1,4')} → BAO.${mv('2')} → ${mv('b+3,4,2~F')} → ${mv('1,2')}. Drill 50 reps.</td></tr>
          <tr><td>Week 3</td><td>Plus-frame pressure. Loop ${mv('db+1+2')} / ${mv('u+1+2')} / ${mv('MOR.1+2')}. Recognize stance entries vs BAO-safe pressure.</td></tr>
          <tr><td>Week 4</td><td>Add ${mv('db+3')} for hard reads (use sparingly). Master ${mv('df+3')} homing timing.</td></tr>
          <tr><td>Week 5</td><td>BAO stance mixups. Learn ${mv('BAO.3')} homing HE paths. Drill Heat Dash conversions.</td></tr>
          <tr><td>Week 6</td><td>Heat amplifications. Practice ${mv('H.f+4,2')} (+2 OB) pressure. ${mv('H.u+3,2')} new T! launcher.</td></tr>
          <tr><td>Week 7</td><td>Matchup prep: 5 characters. Identify their unsafe moves Miary can launch. SSL/SSR maps.</td></tr>
          <tr><td>Week 8</td><td>Replay review. 5 min backdash drills daily (compensate her weakness). Tournament push.</td></tr>
        </tbody>
      </table>
    `,
  },

  // ================================================================
  // LILI ROCHEFORT — DewGlider's Season 2 Guide
  // ================================================================
  lili: {
    name: 'Lili Rochefort',
    subtitle: 'The Noble Ballerina · Feisty Rabbit & Dew Glide',
    difficulty: 'Easy–Medium',
    okizeme: 'lili',
    color: '#e8c3e8',
    accent: '#7a4c8a',
    tags: ['Long-Range Pokes', 'Plus-Frame Pressure', 'Feisty Rabbit', 'Dew Glide', 'Mid-Range Specialist'],

    overview: () => `
      <p class="body"><b>Lili is the fashionista dancing diva of Tekken 8.</b> Her gameplay features <b>extremely long-range tools</b> that let her play her preferred distance: mid-range. Moves like ${mv('df+3+4')} and ${mv('SS.4')} are slower linear mids reaching opponents from far, letting her fish for combos while setting up fast backturn pressure (${mv('BT.d+2')} and ${mv('BT.3')}).</p>

      <p class="body">She balances with ${mv('3+4')} and ${mv('d+3')} which <b>track very well</b>, ensuring opponents play her game instead of sidestepping. Lili is <b>beginner-friendly</b> with a simple yet effective gameplan balancing keepout and lockdown. Her 50/50s are very strong but require committing to setups like staying in backturn or jumping into Feisty Rabbit.</p>

      <p class="body"><b>Amazing CH tools</b> lead to big damage — ${mv('f+4')}, ${mv('SS.4')}, ${mv('df+3')}. She fishes with these to snipe approachers or mashers, creating space and staying at her preferred range. From there: ${mv('qcf+3+4')} (+6 OB), ${mv('d+1,2')} (+3 OH), or ${mv('b+1~F')} (0 OB into Dew Glide).</p>

      <h3 class="subhead">Strengths</h3>
      <div class="mini-card outline-good">
        <ul>
          <li><b>Best sidestep in the game</b> — evades situations other characters can't escape</li>
          <li><b>Most toxic wake-up situations in heat</b> — Feisty Rabbit, ${mv('b+3')} or ${mv('b+4')}</li>
          <li><b>Strong stand-alone moves</b> — doesn't rely on string pressure. Chunky mids (${mv('df+3')}, ${mv('f+4')}, ${mv('f+3')}) and annoying lows (${mv('d+3')}, ${mv('d+1,2')})</li>
          <li><b>Versatile</b> — simple/patient (bait whiffs with movement) or lockdown-heavy (${mv('df+3')} +3 OB, ${mv('qcf+3+4')} +6 OB, ${mv('f,F+4~B')})</li>
        </ul>
      </div>

      <h3 class="subhead">Weaknesses</h3>
      <div class="mini-card outline-bad">
        <ul>
          <li><b>Poor tracking</b> — her biggest weakness. Many key pressure moves can be stepped</li>
          <li><b>Most key moves revolve around 20f mark</b> — she feels slow</li>
          <li><b>Easy to interrupt and CH launch</b> with fast moves</li>
        </ul>
      </div>

      <h3 class="subhead">Heat System</h3>
      <div class="tip-box">
        <p><b>Lili's heat centers on Feisty Rabbit:</b></p>
        <ul style="margin: 8px 0 0 16px; line-height: 1.7;">
          <li>Setup Feisty Rabbit (${mv('b+3')} or ${mv('b+4')}) — bunny-hops for 50/50 mixups on wake-up or after massive plus frames</li>
          <li><b>Recovers Heat Bar</b> via double jump (hold ${mv('b+3')} or ${mv('b+4')})</li>
          <li>Chip with enhanced ${mv('f,F+3+4')} (+7 OB) and variations (${mv('qcf+1,4')}, ${mv('1,2,4')}, ${mv('b+4,4')}, ${mv('b+3,4')}). Most +7 OB, ${mv('1,2,4')} is +5</li>
          <li>S2 NEW Heat Smash: from-neutral 16f (was 23), old animation became heat string ${mv('3+4,3+4')}. Keeps low BT Heat Smash</li>
          <li>${mv('3+4,3+4')} is +7 in backturn — safe mixup entry</li>
          <li>New Heat Smash goes into Dew Glide at <b>+14</b> when holding F</li>
        </ul>
      </div>

      <div class="tip-box"><b>Playstyle:</b> Control space with ${mv('df+3')} (+3 OB), ${mv('f+4')} (long-range CH), ${mv('3+4')} (+6 lockdown). Bait whiffs with backdash, punish with ${mv('df+3+4')}. Drive to wall for massive damage. ${mv('d+1,2')} + FC mix for opening defense. Heat = Feisty Rabbit 50/50.</div>
    `,

    punishers: () => `
      <h3 class="subhead">Standing Punishers</h3>
      ${fd('lili', [
        { cmd: '1,1', level: 'h,h', startup: 'i10', dmg: '7,12', block: '-6', hit: '+4', ch: '', notes: 'i10 in BT +4 OH. Anti-air / interrupt / whiff punish.' },
        { cmd: '2,4', level: 'h,h', startup: 'i10', dmg: '10,18', block: '-2~+2', hit: '+24a (+15)', ch: '', notes: 'Bed Time. KND / wall splat. Best wall-game i10.' },
        { cmd: '1,2', level: 'h,h', startup: 'i10', dmg: '7,12', block: '+1', hit: '+8', ch: '', notes: '+8 OH jab string.' },
        { cmd: 'f+2,3', level: 'h,m', startup: 'i12', dmg: '10,20', block: '-13', hit: 'KND', ch: '', notes: 'Long-range KND/wallsplat. f+2 high — watch crouchers.' },
        { cmd: 'b+2,1', level: 'h,m', startup: 'i13', dmg: '10,16', block: '-4', hit: '+7', ch: '', notes: 'Mix into Dew Glide (hold F) or backturn (hold B).' },
        { cmd: '3,1', level: 'm,m', startup: 'i15', dmg: '14,18', block: '-13', hit: '+14d', ch: '', props: ['heat'], notes: 'Peacock Waltz. Long-range HE.' },
        { cmd: 'df+2', level: 'm', startup: 'i15', dmg: '18', block: '-13', hit: '+27a', ch: '', notes: 'Go-to launcher.' },
        { cmd: 'uf+3', level: 'm', startup: 'i15', dmg: '20', block: '-13', hit: '+24a', ch: '', notes: 'Hopkick, quick whiff punish.' },
        { cmd: 'df+3+4', level: 'M', startup: 'i20~24', dmg: '25', block: '-4~+1', hit: '+27a', ch: '', props: ['heat'], notes: 'Cartwheel. Long-range HE launcher.' },
      ])}

      <h3 class="subhead">While-Standing Punishers</h3>
      ${fd('lili', [
        { cmd: 'FC.db+1', level: 'SL', startup: 'i10', dmg: '14', block: '-12', hit: '+1', ch: '', notes: 'Downjab i10.' },
        { cmd: 'ws4', level: 'm', startup: 'i11', dmg: '17', block: '-9', hit: '+6', ch: '', notes: 'Safe KND mid.' },
        { cmd: 'ws1,2', level: 'm,h', startup: 'i13', dmg: '12,15', block: '-12', hit: '+20a', ch: '', notes: 'Hold F → Dew Glide mix.' },
        { cmd: 'FC.df+1', level: 'm', startup: 'i14', dmg: '18', block: '-6', hit: '+19a (+2)', ch: '+34d', notes: 'Safe KND mid. Good tracking + evasion. CH → qcf+3 oki.' },
        { cmd: 'ws3', level: 'm', startup: 'i15', dmg: '22', block: '-12', hit: '+42a', ch: '', props: ['tornado'], notes: 'Evasive instant tornado launcher.' },
        { cmd: 'ws2', level: 'm', startup: 'i16', dmg: '20', block: '-13', hit: '+27a', ch: '', notes: 'Good for punishing stagger lows.' },
      ])}

      <h3 class="subhead">Whiff Punishers</h3>
      ${fd('lili', [
        { cmd: '1,1', level: 'h,h', startup: 'i10', dmg: '7,12', block: '-6', hit: '+4', ch: '', notes: 'Interrupts strings on whiff. CH guarantees 1,1,3.' },
        { cmd: 'f+2,3', level: 'h,m', startup: 'i12', dmg: '10,20', block: '-13', hit: 'KND', ch: '', notes: 'Very long range. f+2 high — avoid vs crouching recovery.' },
        { cmd: 'df+2', level: 'm', startup: 'i15', dmg: '18', block: '-13', hit: '+27a', ch: '', notes: 'Go-to distance launcher.' },
        { cmd: '3,1', level: 'm,m', startup: 'i15', dmg: '14,18', block: '-13', hit: '+14d', ch: '', props: ['heat'], notes: 'Long-range HE.' },
        { cmd: 'df+3+4', level: 'M', startup: 'i20', dmg: '25', block: '-4~+1', hit: '+27a', ch: '', props: ['heat'], notes: 'Longest range HE launcher.' },
      ])}
    `,

    moves: () => `
      <p class="body">DewGlider's <b>Top 10 Moves</b> — the essential Lili toolkit.</p>

      <h3 class="subhead">1 · ${mv('df+3')} — Submissive Heel (Top Move)</h3>
      <p class="body"><b>Arguably her best CH tool.</b> 20f <b>+3 OB mid</b> that forces crouched state. CH launcher (doesn't track — realign/time carefully). +3 OB = oppressive pressure. Mix with ${mv('df+4')} (tracking), ${mv('d+3')} / ${mv('d+1,2')} (lows that stop PC and Heat Bursts).</p>
      <p class="body sm"><span class="code">m · i20~22 · +3c OB · +8c OH · +19a oCH</span></p>

      <h3 class="subhead">2 · ${mv('b+1')} — Dew Glide Entry</h3>
      <p class="body">17f mid poke. -8 OB alone, but <b>neutral or -2 with Dew Glide transition</b> (hold F). Safe pressure starter with cancel mix (tap U + hold B → sidestep block). On CH, ${mv('b+1~F')} → ${mv('qcf+2,1')} guaranteed (homing HE heat dash launcher). If mashing, finish ${mv('b+1,4')} (-11 OB) to beat PC/RA/sidesteps. S2 additions: slide (${mv('DEW.df+3')}), ${mv('SS.4')} from FC (${mv('FC.df+4')} / ${mv('DEW.df+4')}) — high-evading CH launchers.</p>
      <p class="body sm"><span class="code">m · i17 · -8 OB · +2 OH · +8 oCH</span></p>

      <h3 class="subhead">3 · ${mv('d+1,2')} — Unseeable Low-High</h3>
      <p class="body">Fast, <b>unseeable low-high</b> natural combo. +3 OH. ${mv('d+1~D')} → Full Crouch (access to ${mv('FC.df+1')} evasive mid wallsplat). ${mv('d+1,2~B')} → backturn mind game: ${mv('BT.d+2')} (HC low) vs ${mv('BT.3')} (HC mid). Downjab beats BT mix — finish ${mv('d+1,2,4')}, use PC ${mv('BT.2')}, or jump-over ${mv('BT.3+4')} sometimes to avoid predictability.</p>
      <p class="body sm"><span class="code">L,h · i18 · -8 OB · +3 OH · +5 oCH</span></p>

      <h3 class="subhead">4 · ${mv('3,1')} — Peacock Waltz</h3>
      <p class="body">Longest whiff punisher. <b>15f heat engager</b> launches as heat dash. Unparryable first hit (${mv('3')}) is mid, -11 OB in BT. Extensions ${mv('3,2')} / ${mv('3,1')} parryable — bait these in heat and choose BT option every now and then.</p>
      <p class="body sm"><span class="code">m,m · i15~16 · -13 OB · +14d OH</span></p>

      <h3 class="subhead">5 · ${mv('df+4,4')} — Dominating Heel</h3>
      <p class="body">13f mid-low natural combo that tracks well. Fast mid check of choice alongside ${mv('df+1')} (linear, -1 OB). ${mv('df+4')} catches movement, especially after frame advantage (${mv('df+3')} / ${mv('qcf+3+4')} OB). -8 OB. Forces toxic mind games.</p>
      <p class="body sm"><span class="code">m,L · i13~14 · -13 OB · -2 OH · +8 oCH</span></p>

      <h3 class="subhead">6 · ${mv('DEW.3+4')} / ${mv('qcf+3+4')} — Cloisonne Pressure</h3>
      <p class="body">Best pressure tool. <b>+6 OB</b> with high + low evasion at different animation points. Comes out as fast as 12-14f. Double high — can be stepped. At +17 OH → Feisty Rabbit setup via ${mv('b+3')} / ${mv('b+4')}. ${mv('df+3')} / ${mv('f+4')} at +17 are unavoidable. S2: now tailspins in combos.</p>
      <p class="body sm"><span class="code">h,h · i12~14 · +6 OB · +17g OH</span></p>

      <h3 class="subhead">7 · ${mv('d+3')} — Thorn Whip</h3>
      <p class="body">One of longest-range lows in the game. Tracks well. Borderline unseeable. +1 or +2 OH depending on range. Only +1-2 OH so many opponents mash CH launchers vs Lili — stay ahead. Followups ${mv('df+4')} / ${mv('1,1')} / ${mv('db+3')} for reads, else step away or block.</p>
      <p class="body sm"><span class="code">L · i19~20 · -12 OB · +1 OH · +5c oCH</span></p>

      <h3 class="subhead">8 · ${mv('f+4')} — Keepout Mid</h3>
      <p class="body">-9 OB with pushback — creates space. Watch opponent, outspace strings, snipe from across stage for CH launch. Extreme OH pushback — try to get back in with ${mv('3+4')} to predict sidesteps.</p>
      <p class="body sm"><span class="code">m · i17 · -9 OB · +7 OH · +57a oCH</span></p>

      <h3 class="subhead">9 · ${mv('f,F+4')} — Root of Evil</h3>
      <p class="body">Iconic low. +10 OH → deadly backturn mixups. 8f i8 HE from BT (${mv('BT.1,4')}) or KND (${mv('BT.1,2')}) — guaranteed on CH, will catch NH if moving. ${mv('BT.3+4')} jump-over, ${mv('BT.d+2')} HC low, ${mv('BT.3')} HC mid, ${mv('BT.1+2')} launch, ${mv('BT.d+3+4')} sweep.</p>
      <p class="body sm"><span class="code">L · i22~23 · -12 OB · +4 OH</span></p>

      <h3 class="subhead">10 · ${mv('SS.4')} / ${mv('DEW.df+4')} / ${mv('FC.df+4')}</h3>
      <p class="body">Like ${mv('f+4')}, fishes CH launches mid-screen while staying safe. <b>-4 OB</b>, leaves her in BT. From BT: hold db creates space → ${mv('ws2')} whiff punish; ${mv('BT.1,2')}/${mv('BT.1,4')} 8f jabs trade with opponent's 12f; ${mv('BT.3')}/${mv('BT.d+2')} high-crushing; ${mv('BT.2')} PC; ${mv('BT.3+4')} jump-over. New S2: Feisty Rabbit transition from Dew Glide (${mv('DEW.df+4')}) or FC (${mv('FC.df+4')}).</p>
      <p class="body sm"><span class="code">m · i20~21 · -4 OB · +4 OH · +64 oCH</span></p>

      <h3 class="subhead">Notable Moves</h3>

      <h4 class="minihead">${mv('b+2,1')}</h4>
      <p class="body sm">-4 OB high-mid. Hold F → Dew Glide, hold B → backturn. SS cancel via tap U for pressure. vs mash: ${mv('BT.3,4')}, ${mv('BT.d+2')}, ${mv('qcf+1')} go under. PC ${mv('BT.2')} / ${mv('qcf+1+2')} stop mash. Finish ${mv('b+2,1,1+2')} wall break.</p>

      <h4 class="minihead">${mv('H.2+3')} Heat Smash (S2 NEW)</h4>
      <p class="body sm">16f fast (down from 23). Mid + throw. <b>+7 OB</b> — frame trap setup. Hold F → Dew Glide at +14 (undeniable mix). With uf+1+2 throw, 2 CH launchers (DEW.df+4, DEW.df+3), options wide. Or DEW.1,4 for safe chip + throw/slide mix. DEW.1,2 for wallsplat read (-14 OB if wrong).</p>

      <h4 class="minihead">${mv('f,f,F+1+2')} Zephyrantes (S2 NEW)</h4>
      <p class="body sm">Lili's first proper running move. Fast, interesting tracking up close, +4 OB chip. Sets 2-player proximity — throws / jabs beat PC, ${mv('df+4')} tracking mid keeps them honest. Continue with ${mv('qcf+3+4')} lockdown or ${mv('d+1,2~B')} backturn. On hit → ${mv('qcf+3')} ground for big damage.</p>

      <h4 class="minihead">${mv('FC.df+3')} / ${mv('DEW.df+3')} Horizon Slide</h4>
      <p class="body sm">S2 buff: 23f → 19f borderline unseeable. High crush. Now accessible from Dew Glide (new low in this stance). Chip + CH launch potential.</p>

      <h4 class="minihead">${mv('SS.1+2')}</h4>
      <p class="body sm">Mid CH launcher. 0 OB. ${mv('1,1')}, ${mv('db+3')}, ${mv('d+1,2')}, ${mv('df+4,4')}, or throw setups.</p>

      <h4 class="minihead">${mv('BT.d+2')} / BT Heat Smash</h4>
      <p class="body sm">16f HC tracking lows. +5 OH → ${mv('FC.df+1')} safe KND mid followup. Beats jab interrupts, loses to Heat Burst/PC — use ${mv('ws4')} to cover those. BT Heat Smash unparryable version, wallsplats from angles. CH crouch cancel (tap U) → ${mv('qcf+3')} ground guaranteed.</p>

      <h4 class="minihead">${mv('BT.3,4')}</h4>
      <p class="body sm">Double-hit mid check from BT — fast + homing. HC first hit. -10/-12 OB. Ground followup guaranteed on both hits (${mv('qcf+3')} or ${mv('FC.df+1')} for flip-over → Feisty Rabbit setup).</p>

      <h4 class="minihead">${mv('BT.4,3+4')}</h4>
      <p class="body sm">Shears to Spinning Edge. Legacy wall combo, S2 now natural and uninterruptible (not even SS/sidewalk). Mid misdirection to low. Semi-safe at -7 OB with pushback. 40 damage knockdown if they respect.</p>

      <h4 class="minihead">${mv('FC.df+1')}</h4>
      <p class="body sm">Safe KND mid, good tracking + evasion. Set up via ${mv('BT.d+4')} / ${mv('BT.d+2')} hit, ${mv('d+1~d')}, or ${mv('db+1')} downjab. CH → ${mv('qcf+3')} ground.</p>

      <h4 class="minihead">${mv('df+3+4')}</h4>
      <p class="body sm">Cartwheel — longest-range launcher. -4 OB leaves in BT. BT mix → ${mv('BT.2')} PC/${mv('BT.3+4')} downjab-beater. Or ${mv('df+3+4,3+4')} finisher, or back/db for safer. Mix with ${mv('d+3')} / ${mv('3+4')} to stop steppers.</p>

      <h4 class="minihead">${mv('3+4')} / ${mv('H.3+4,3+4')}</h4>
      <p class="body sm">Black Swan. Longest move in game. Homing double-high HE. Max range → duckable/launchable. Sweet spot: both hits on block (jails, chips, -2 OB). Heat string same starting animation — slow, best at plus frames or whiff punish. +7 BT on hit → BT mix. Goes under highs at close range sometimes.</p>

      <h4 class="minihead">${mv('db+3')}</h4>
      <p class="body sm">Twist of Fate. Full high crush with built-in crouching. Catches mashing. Use after your own jabs/${mv('df+1')}/${mv('f+3')}/${mv('d+3')}. NH → ${mv('qcf+3')} ground.</p>

      <h4 class="minihead">${mv('1,1')}</h4>
      <p class="body sm">i10 BT +4 OH. Best as interruption/anti-air/whiff punish (chunky hitbox). On block -6 — downjabbable. Finish ${mv('1,1,3')} to stop downjabs (-15, risky). CH first jab → full string guaranteed.</p>

      <h4 class="minihead">${mv('2,4')} Bed Time</h4>
      <p class="body sm">Best 10f punish in game. KND / wallsplat. Great near wall + sidestep. Will wallsplat sideways because KND animation pushes off-axis. Drawback: ${mv('2')} jab has bad hitbox/range — must be very close.</p>

      <h4 class="minihead">${mv('b+3')} / ${mv('b+4')} Feisty Rabbit</h4>
      <p class="body sm">Outside heat: movement tool (hold F → Dew Glide → tap U cancel). Popular: ${mv('d+3')} / ${mv('d+1,2')} change-up timing. ${mv('b+3,2')} / ${mv('b+4,2')} safe HE. In heat: TRUE 50/50. Low (${mv('b+3,3')} / ${mv('b+4,3')}) KND NH → ${mv('qcf+3')} / ${mv('ws3')} ground. Mid (${mv('b+3,2')} / ${mv('b+4,2')}) heat dash launcher + ${mv('qcf+2,1')} via Dew Glide. Best as wake-up or post-wall. Hold ${mv('b+3')} / ${mv('b+4')} to recover heat bar.</p>

      <h4 class="minihead">${mv('f,F+3+4')} Piercing Thorn</h4>
      <p class="body sm">Chip damage on block + variations (${mv('qcf+1,4')}, ${mv('1,2,4')}, ${mv('b+3,4')}, ${mv('b+4,4')}). Very linear — use at heavy + frames (+17 post-HE). Pushback + +7 OB, KND OH, wallsplats. OB: ${mv('3,1')} beats all but PC, ${mv('d+3')} stops armor. Or Feisty Rabbit / double jump to recover heat. Spend heat for 16f Heat Smash frame trap (beats PC + mash, loses to RA).</p>

      <h4 class="minihead">${mv('qcf+1,4')}</h4>
      <p class="body sm">Double mid safe at -9. Heat: +7 OB pushback — same situation as Piercing Thorn. CH guaranteed ext → wallsplat combo. 2-3 uses per bar. ${mv('qcf+1,2')} CH launch ext (-14 OB). ${mv('qcf+1,2~B')} backturn scare.</p>

      <h4 class="minihead">${mv('f+3')} Circle Knee</h4>
      <p class="body sm">Slow homing. -3 OB. Similar to ${mv('3+4')} — stepping useful or predict slow with ${mv('1,1')}. Mid + slight pushback. CH → ${mv('qcf+3')} ground. Good after ${mv('df+3')} OB if players commit to sidewalk.</p>

      <h4 class="minihead">${mv('d+2,2')}</h4>
      <p class="body sm">Pre-S2 situational. Now has Feisty Rabbit transition, ${mv('d+2,2,4')} only -13 (was -17). Set up mixes chasing sidestep. Jabs beat FR on block but ext catches mashers.</p>
    `,

    framedata: () => `
      <div class="section-head"><h3 class="subhead">Complete Frame Data Reference — Lili Rochefort</h3></div>
      <p class="body">Full frame data from TekkenDocs Season 2. Click any command for video on okizeme.gg.</p>

      <h3 class="subhead">Jabs & Core Strings</h3>
      ${fd('lili', [
        { cmd: '1', level: 'h', startup: 'i10', dmg: '7', block: '+1', hit: '+8', ch: '', notes: 'Jab.' },
        { cmd: '1,1', level: 'h,h', startup: 'i10', dmg: '7,12', block: '-6', hit: '+4', ch: '', notes: 'BT on hit, +4 OH. Downjabbable OB.' },
        { cmd: '1,1,3', level: 'h,h,h', startup: 'i10', dmg: '7,12,17', block: '-15', hit: '+20a', ch: '', notes: 'Stop downjabs. -15 launch punishable.' },
        { cmd: '1,2', level: 'h,h', startup: 'i10', dmg: '7,12', block: '+1', hit: '+8', ch: '', notes: '+8 OH jab string.' },
        { cmd: '1,2,4', level: 'h,h,h', startup: 'i10', dmg: '7,12,14', block: '+5', hit: '+20a', ch: '', props: ['heat', 'chip'], notes: 'Heat ext — +5 OB, chip.' },
        { cmd: '2,4', level: 'h,h', startup: 'i10', dmg: '10,18', block: '-2~+2', hit: '+24a (+15)', ch: '', notes: 'Bed Time. KND/wallsplat.' },
        { cmd: '3', level: 'm', startup: 'i15', dmg: '14', block: '-11', hit: 'BT', ch: '', notes: 'Mid lead. BT on hit.' },
        { cmd: '3,1', level: 'm,m', startup: 'i15', dmg: '14,18', block: '-13', hit: '+14d', ch: '', props: ['heat'], notes: 'Peacock Waltz HE.' },
        { cmd: '3,2', level: 'm,m', startup: 'i15', dmg: '14,18', block: '-13', hit: '+14d', ch: '', notes: 'Alt 2nd hit, parryable.' },
        { cmd: '4', level: 'h', startup: 'i12', dmg: '14', block: '-9', hit: '+2', ch: '', notes: 'Standard i12.' },
      ])}

      <h3 class="subhead">Pokes & Mids</h3>
      ${fd('lili', [
        { cmd: 'df+1', level: 'm', startup: 'i13', dmg: '10', block: '-1', hit: '+5', ch: '', notes: 'Linear safe mid check.' },
        { cmd: 'df+2', level: 'm', startup: 'i15', dmg: '18', block: '-13', hit: '+27a', ch: '', notes: 'Go-to launcher.' },
        { cmd: 'df+3', level: 'm', startup: 'i20~22', dmg: '18', block: '+3c', hit: '+8c', ch: '+19a', notes: 'Submissive Heel. +3 OB CH launcher. Forces crouched state.' },
        { cmd: 'df+4,4', level: 'm,L', startup: 'i13~14', dmg: '10,12', block: '-13', hit: '-2', ch: '+8', notes: 'Dominating Heel. Mid-low natural combo.' },
        { cmd: 'df+3+4', level: 'M', startup: 'i20~24', dmg: '25', block: '-4~+1', hit: '+27a', ch: '', props: ['heat'], notes: 'Cartwheel HE launcher. -4 OB BT.' },
        { cmd: 'df+3+4,3+4', level: 'M,m', startup: 'i20', dmg: '25,20', block: '-10', hit: 'KND', ch: '', props: ['floorbreak'], notes: 'Floor break ender.' },
        { cmd: 'f+2,3', level: 'h,m', startup: 'i12', dmg: '10,20', block: '-13', hit: 'KND', ch: '', notes: 'Long-range KND/wallsplat.' },
        { cmd: 'f+3', level: 'm', startup: 'i20~22', dmg: '18', block: '-3', hit: '+17a (+8)', ch: '+34d', notes: 'Circle Knee. Homing. CH → qcf+3 ground.' },
        { cmd: 'f+4', level: 'm', startup: 'i17', dmg: '20', block: '-9', hit: '+7', ch: '+57a', notes: 'Keepout CH launcher.' },
        { cmd: 'b+1', level: 'm', startup: 'i17', dmg: '17', block: '-8', hit: '+2', ch: '+8', notes: 'Dew Glide entry. -8 alone, -2 with DEW.' },
        { cmd: 'b+1,4', level: 'm,h', startup: 'i17', dmg: '17,15', block: '-11', hit: '+8', ch: '', notes: 'Beats PC/RA/sidesteps.' },
        { cmd: 'b+2', level: 'h', startup: 'i13', dmg: '10', block: '-9', hit: '+4', ch: '', notes: 'High lead.' },
        { cmd: 'b+2,1', level: 'h,m', startup: 'i13', dmg: '10,16', block: '-4', hit: '+7', ch: '+9', notes: 'Hold F for DEW, B for BT.' },
        { cmd: 'b+2,1,1+2', level: 'h,m,m', startup: 'i13', dmg: '10,16,20', block: '-14', hit: 'wallsplat', ch: '', props: ['wallbreak'], notes: 'Wall break finisher.' },
        { cmd: 'uf+3', level: 'm', startup: 'i15', dmg: '20', block: '-13', hit: '+24a', ch: '', notes: 'Hopkick launcher.' },
        { cmd: 'uf+4,3', level: 'm,m', startup: 'i15', dmg: '14,16', block: '-13', hit: '+24a', ch: '+24a', notes: 'Wall combo filler.' },
      ])}

      <h3 class="subhead">Lows</h3>
      ${fd('lili', [
        { cmd: 'd+3', level: 'L', startup: 'i19~20', dmg: '12', block: '-12', hit: '+1', ch: '+5c', notes: 'Thorn Whip. Long-range tracking low.' },
        { cmd: 'd+1', level: 'SL', startup: 'i14', dmg: '6', block: '-10', hit: '+1', ch: '', notes: 'Downjab. Cancel to FC with d.' },
        { cmd: 'd+1,2', level: 'L,h', startup: 'i18~19', dmg: '6,13', block: '-8', hit: '+3', ch: '+5', notes: 'Unseeable NC. Hold B → BT mix.' },
        { cmd: 'd+1,2,4', level: 'L,h,m', startup: 'i18', dmg: '6,13,17', block: '-13', hit: '+10', ch: '', notes: 'Safe-ish ender.' },
        { cmd: 'db+3', level: 'h', startup: 'i19~22', dmg: '18', block: '-9~-6', hit: '+34d', ch: '+46a', notes: 'Twist of Fate. Full HC.' },
        { cmd: 'db+4', level: 'L', startup: 'i30~31', dmg: '25', block: '-24', hit: '+76a (+60)', ch: '', notes: 'Slow sweep. Launch if blocked.' },
        { cmd: 'd+3+4', level: 'm', startup: 'i17~21', dmg: '28', block: '-21', hit: '+45a', ch: '', notes: 'Matterhorn. Evasive launcher. -21 OB launch punishable!' },
        { cmd: 'd+1+2', level: 'M', startup: 'i20~21', dmg: '25', block: '-13', hit: '+13d', ch: '', props: ['powercrush', 'floorbreak'], notes: 'Standing PC.' },
        { cmd: 'FC.df+1', level: 'm', startup: 'i14', dmg: '18', block: '-6', hit: '+19a (+2)', ch: '+34d', notes: 'Safe KND mid. Combo filler / whiff punish.' },
        { cmd: 'FC.df+3', level: 'L', startup: 'i19~28', dmg: '16', block: '-18~-9', hit: '-2~+7', ch: '+26a', notes: 'Horizon Slide. S2 sped up to 19f unseeable.' },
        { cmd: 'FC.df+4', level: 'm', startup: 'i20~21', dmg: '20', block: '-4', hit: '+4', ch: '+64', notes: 'SS.4 from FC. HC CH launcher.' },
      ])}

      <h3 class="subhead">Sidestep & Dew Glide</h3>
      ${fd('lili', [
        { cmd: 'SS.1+2', level: 'm', startup: 'i19~20', dmg: '20', block: '+0', hit: '+25a (+16)', ch: '+64a', notes: 'Safe CH launcher. Neutral OB.' },
        { cmd: 'SS.4', level: 'm', startup: 'i20~21', dmg: '20', block: '-4', hit: '+4', ch: '+64', notes: 'CH launcher, BT on hit. Same as DEW.df+4.' },
        { cmd: 'SS.3', level: 'm', startup: 'i18', dmg: '15', block: '-13', hit: '+8c', ch: '', notes: 'Sidestep mid.' },
        { cmd: 'DEW.1,4', level: 'm,m', startup: 'i14', dmg: '12,12', block: '-9', hit: '+5', ch: '', props: ['chip'], notes: 'Safe chip in Heat +7 OB.' },
        { cmd: 'DEW.1,2', level: 'm,h', startup: 'i14', dmg: '12,15', block: '-14', hit: 'wallsplat', ch: '', notes: 'Wallsplat read — -14 OB risky.' },
        { cmd: 'DEW.df+3', level: 'L', startup: 'i19', dmg: '16', block: '-18~-9', hit: '-2~+7', ch: '+26a', notes: 'Slide from Dew Glide (S2 new).' },
        { cmd: 'DEW.df+4', level: 'm', startup: 'i20', dmg: '20', block: '-4', hit: '+4', ch: '+64', notes: 'SS.4 from DEW. CH launcher.' },
        { cmd: 'DEW.3+4', level: 'h,h', startup: 'i12~14', dmg: '10,14', block: '+6', hit: '+17g', ch: '', notes: 'Cloisonne. +6 OB pressure. S2: tailspin in combos.' },
        { cmd: 'qcf+3+4', level: 'h,h', startup: 'i12~14', dmg: '10,14', block: '+6', hit: '+17g', ch: '', notes: 'Same as DEW.3+4 raw input.' },
        { cmd: 'uf+1+2', level: 't', startup: 'i12', dmg: '35', block: '—', hit: 'throw', ch: '', props: ['wallbreak'], notes: 'Wall break throw.' },
      ])}

      <h3 class="subhead">Backturn (BT) Moves</h3>
      ${fd('lili', [
        { cmd: 'BT.1,2', level: 'h,h', startup: 'i8', dmg: '7,12', block: '+1', hit: 'KND', ch: '+20a', notes: '8f BT jab → KND. Guaranteed on ff+4 CH.' },
        { cmd: 'BT.1,4', level: 'h,h', startup: 'i8', dmg: '7,14', block: '-9', hit: 'HE', ch: '', props: ['heat'], notes: '8f BT HE. Guaranteed on ff+4 CH.' },
        { cmd: 'BT.2', level: 'm', startup: 'i14', dmg: '20', block: '-13', hit: '+16a', ch: '', props: ['powercrush'], notes: 'BT Power Crush.' },
        { cmd: 'BT.3', level: 'm', startup: 'i16', dmg: '16', block: '-10', hit: '+5', ch: '+46a', props: ['homing'], notes: 'HC homing mid from BT.' },
        { cmd: 'BT.3,4', level: 'm,m', startup: 'i14~15', dmg: '14,20', block: '-12', hit: '+39d (+31)', ch: '', notes: 'BT mid check. Ground followup guaranteed.' },
        { cmd: 'BT.4,3+4', level: 'm,M', startup: 'i26~28', dmg: '14,30', block: '-10~-8', hit: '-1d', ch: '', notes: 'Shears to Spinning Edge. Natural & uninterruptible S2.' },
        { cmd: 'BT.d+2', level: 'L', startup: 'i16', dmg: '12', block: '-12', hit: '+5c', ch: '+14d', notes: 'HC tracking low. +5 OH → FC.df+1 followup.' },
        { cmd: 'BT.1+2', level: 'm', startup: 'i18', dmg: '20', block: '-13', hit: '+27a', ch: '', notes: 'BT launcher.' },
        { cmd: 'BT.3+4', level: '', startup: 'i7', dmg: '0', block: '—', hit: 'evade', ch: '', notes: 'Jump-over evasion.' },
        { cmd: 'BT.d+3+4', level: 'L', startup: 'i20', dmg: '17', block: '-13', hit: '+5c', ch: '', notes: 'BT sweep.' },
        { cmd: 'BT.d+4', level: 'L', startup: 'i16', dmg: '10', block: '-15', hit: '-5', ch: '', notes: 'BT low poke.' },
      ])}

      <h3 class="subhead">Feisty Rabbit (b+3 / b+4)</h3>
      ${fd('lili', [
        { cmd: 'b+3', level: '', startup: 'i0', dmg: '0', block: '—', hit: 'stance', ch: '', notes: 'Feisty Rabbit entry right.' },
        { cmd: 'b+4', level: '', startup: 'i0', dmg: '0', block: '—', hit: 'stance', ch: '', notes: 'Feisty Rabbit entry left.' },
        { cmd: 'b+3,2', level: 'm', startup: 'i15', dmg: '20', block: '-14', hit: '+10a', ch: '', props: ['heat'], notes: 'FR mid HE. Heat: dash launcher.' },
        { cmd: 'b+3,3', level: 'L', startup: 'i18', dmg: '18', block: '-13', hit: 'KND', ch: '', notes: 'FR low KND. Heat true 50/50.' },
        { cmd: 'b+4,2', level: 'm', startup: 'i15', dmg: '20', block: '-14', hit: '+10a', ch: '', props: ['heat'], notes: 'FR mid HE. Same as b+3,2.' },
        { cmd: 'b+4,3', level: 'L', startup: 'i18', dmg: '18', block: '-13', hit: 'KND', ch: '', notes: 'FR low KND.' },
        { cmd: 'b+3 (hold)', level: '', startup: '', dmg: '0', block: '', hit: 'heat regen', ch: '', notes: 'Double jump recovers heat bar.' },
      ])}

      <h3 class="subhead">Running / qcf / Heat Specials</h3>
      ${fd('lili', [
        { cmd: 'f,f,F+1+2', level: 'h,h', startup: 'i13~14', dmg: '14,16', block: '+4', hit: '+33d (+25)', ch: '', props: ['chip'], notes: 'Zephyrantes (S2). +4 OB chip.' },
        { cmd: 'f,F+3+4', level: 'm', startup: 'i19~25', dmg: '20', block: '-2~+4', hit: '+4a', ch: '', props: ['chip'], notes: 'Piercing Thorn. Heat: +7 OB.' },
        { cmd: 'f,F+4', level: 'L', startup: 'i22~23', dmg: '20', block: '-12', hit: '+4', ch: '', notes: 'Root of Evil. +10 OH → BT mix.' },
        { cmd: 'qcf+1', level: 'm', startup: 'i15', dmg: '16', block: '-9', hit: '+5', ch: '+30a', notes: 'Heat: HE.' },
        { cmd: 'qcf+1,4', level: 'm,m', startup: 'i15', dmg: '16,14', block: '-9', hit: '+5', ch: '', props: ['chip'], notes: 'Safe double mid + chip. Heat +7 OB.' },
        { cmd: 'qcf+1,2', level: 'm,m', startup: 'i15', dmg: '16,18', block: '-14', hit: '+24a', ch: '', notes: 'CH launcher ext. Risky.' },
        { cmd: 'qcf+2,1', level: 'h,h', startup: 'i14', dmg: '14,16', block: '-9', hit: '+25a', ch: '', props: ['heat', 'homing'], notes: 'Homing HE. Heat dash launcher.' },
        { cmd: 'qcf+3', level: 'L', startup: 'i19', dmg: '17', block: '-13', hit: 'KND', ch: '', notes: 'Ground hit for combo fillers.' },
        { cmd: 'u+4', level: 'm', startup: 'i15~17', dmg: '20', block: '-13', hit: '+19a (+9)', ch: '+33a (+23)', notes: 'Fast off-ground mid CH launcher.' },
        { cmd: 'u+3+4', level: 'M', startup: 'i36~39', dmg: '25', block: '-8~-5', hit: '+6d', ch: '', notes: 'Jump evasion. Air launcher on head hit.' },
        { cmd: '1+2', level: 'm', startup: 'i12~13', dmg: '16', block: '-12', hit: '+20a (+10)', ch: '', notes: '12f get-off-me tool.' },
      ])}

      <h3 class="subhead">Power Crush, Rage & Heat Smash</h3>
      ${fd('lili', [
        { cmd: 'd+1+2', level: 'M', startup: 'i20', dmg: '25', block: '-13', hit: '+13d', ch: '', props: ['powercrush', 'floorbreak'], notes: 'Standing PC.' },
        { cmd: 'BT.2 PC', level: 'm', startup: 'i14', dmg: '20', block: '-13', hit: '+16a', ch: '', props: ['powercrush'], notes: 'BT Power Crush.' },
        { cmd: 'R.df+1+2', level: 'm,t', startup: 'i20', dmg: '55+', block: '-18', hit: '+0d', ch: '', props: ['powercrush'], notes: 'Rage Art.' },
        { cmd: 'H.2+3', level: 'm,t', startup: 'i16', dmg: '52', block: '+7', hit: '+0d', ch: '', notes: 'Heat Smash. Hold F → Dew Glide at +14 (undeniable mix).' },
        { cmd: 'H.3+4,3+4', level: 'h,h,h,h', startup: 'i23~24', dmg: '10,10,15,20', block: '-2', hit: '+20a (+11)', ch: '', props: ['heat'], notes: 'Black Swan heat string. +7 BT on hit.' },
      ])}
    `,

    combos: () => `
      <h3 class="subhead">Bread-and-Butter Combo Routes</h3>
      <p class="body">DewGlider's optimal: launcher → filler → ${mv('df+3+4')} → ${mv('BT.1,2')} tornado → ${mv('u+1+2')} (hold) → ${mv('qcf+1,4')} / ${mv('qcf+3')}.</p>

      <h3 class="subhead">Optimal Combos</h3>
      <table class="data">
        <thead><tr><th style="width: 22%">Starter</th><th>Route</th></tr></thead>
        <tbody>
          <tr><td>${mv('uf+3')}</td><td class="route">${mv('df+2')} → ${mv('f+2,3')} → ${mv('df+3+4')} → ${mv('BT.1,2')} ${prop('tornado', 14)} → ${mv('u+1+2')} (hold) → ${mv('qcf+1,4')}</td></tr>
          <tr><td>${mv('df+2')}</td><td class="route">${mv('f+2,3')} → ${mv('f,F+3~f+3+4')} → ${mv('df+3+4')} → ${mv('BT.1,2')} ${prop('tornado', 14)} → ${mv('u+1+2')} (hold) → ${mv('qcf+3')}</td></tr>
          <tr><td>${mv('ws3')} / ${mv('db+4')} / low parry</td><td class="route">${mv('qcf+3')} → ${mv('df+1')} → ${mv('b+2,1~f+3+4')} → ${mv('WR+1+2')} → ${mv('qcf+1,4')}</td></tr>
          <tr><td>${mv('ws2')} / ${mv('d+3+4')}</td><td class="route">${mv('u+3,3~f+3+4')} → ${mv('df+3+4')} → ${mv('BT.1,2')} ${prop('tornado', 14)} → ${mv('u+1+2')} (hold) → ${mv('qcf+3')}</td></tr>
          <tr><td>${mv('u+3+4')}</td><td class="route">${mv('qcf+3')} → ${mv('qcf+3')} → ${mv('3,2~f+3+4')} → ${mv('WR+1+2')} → ${mv('qcf+1,4')}</td></tr>
          <tr><td>${mv('BT.1+2')}</td><td class="route">${mv('db+2')} → ${mv('ws1,2~f+3+4')} → ${mv('df+3+4')} → ${mv('BT.1,2')} ${prop('tornado', 14)} → ${mv('u+1+2')} (hold) → ${mv('qcf+3')}</td></tr>
          <tr><td>CH ${mv('f+4')} / ${mv('qcf+1,(2)')} / ${mv('1,1(3)')}</td><td class="route">${mv('qcf+3')} → ${mv('qcf+3')} → ${mv('3,2~f+3+4')} → ${mv('WR+1+2')} → ${mv('qcf+1,4')}</td></tr>
          <tr><td>CH ${mv('FC.df+3')}</td><td class="route">${mv('d+1,2~B')} → ${mv('BT.3,4')} → ${mv('b+1,4')} ${prop('tornado', 14)} → ${mv('u+1+2')} (hold) → ${mv('qcf+3')}</td></tr>
          <tr><td>${mv('df+3+4')} / ${mv('SS.4')}</td><td class="route">${mv('BT.3,4')} → ${mv('b+1~f+3+4')} → ${mv('df+3+4')} → ${mv('BT.1,2')} ${prop('tornado', 14)} → ${mv('u+1+2')} (hold) → ${mv('qcf+3')}</td></tr>
        </tbody>
      </table>

      <h3 class="subhead">Beginner Combos</h3>
      <table class="data">
        <thead><tr><th style="width: 22%">Starter</th><th>Route</th></tr></thead>
        <tbody>
          <tr><td>${mv('uf+3')} / ${mv('df+2')}</td><td class="route">${mv('df+2~B')} → ${mv('BT.1,2')} → ${mv('f,F+3,f+1,4')}</td></tr>
          <tr><td>${mv('ws3')} / ${mv('db+4')} / low parry</td><td class="route">${mv('df+2~B')} → ${mv('BT.3,4')} → ${mv('b+1~f+1,4')}</td></tr>
          <tr><td>${mv('ws2')} / ${mv('d+3+4')}</td><td class="route">${mv('u+3,3~f+3')} → ${mv('f,F+3,f+1,4')}</td></tr>
          <tr><td>${mv('u+3+4')}</td><td class="route">${mv('f+4')} → ${mv('df+3+4')} → ${mv('BT.3,4')} → ${mv('b+1~f+1,4')}</td></tr>
          <tr><td>${mv('BT.1+2')}</td><td class="route">${mv('db+2')} → ${mv('ws1,2~f+3')} → ${mv('f,F+3~f+1,4')}</td></tr>
        </tbody>
      </table>

      <h3 class="subhead">Combo Enders</h3>
      <h4 class="minihead">Carry</h4>
      <p class="body">${mv('3+4')} · ${mv('f+2,3')} · ${mv('b+1,4')} · ${mv('df+3+4,BT.1,2')}</p>
      <h4 class="minihead">Floor break ${prop('floorbreak', 14)}</h4>
      <p class="body">${mv('f,F+4')} · ${mv('df+3+4,3+4')} · ${mv('H.3+4,3+4')} · ${mv('f,F+3,3+4')} · ${mv('d+1+2')}</p>
      <h4 class="minihead">Wall break ${prop('wallbreak', 14)}</h4>
      <p class="body">${mv('b+2,1,1+2')} · ${mv('d+2,2,4')} · ${mv('f,F+3+4')}</p>

      <h3 class="subhead">Wall Combos</h3>
      <h4 class="minihead">Without Tornado</h4>
      <ul class="body" style="margin: 8px 0 0 20px; line-height: 1.9;">
        <li>${mv('uf+4,3')}</li>
        <li>${mv('ws1,2~F')} → ${mv('3')}</li>
        <li>${mv('2')} → ${mv('db+2')} → ${mv('FC.df+1')}</li>
      </ul>
      <h4 class="minihead">With Tornado ${prop('tornado', 14)}</h4>
      <ul class="body" style="margin: 8px 0 0 20px; line-height: 1.9;">
        <li>${mv('b+1,4')} ${prop('tornado', 14)} → ${mv('uf+4,3')}</li>
        <li>${mv('qcf+3')} ${prop('tornado', 14)} → ${mv('ws1,2~F')} → ${mv('3')}</li>
        <li>${mv('qcf+3')} ${prop('tornado', 14)} → ${mv('2')} → ${mv('db+2')} → ${mv('FC.df+1')}</li>
      </ul>

      <h3 class="subhead">Small Combos</h3>
      ${[
        ['CH FC.df+1 / ss3 / BT.3,4 / CH uf+4,(3)', 'qcf+3 or fc.df+1 for better oki'],
        ['CH f,F+4~B', 'BT.1,2 KND or BT.1,4 HE'],
        ['CH f+3 / db+3 NH / WR+1+2', 'qcf+3 ground'],
        ['CH BT.d+2', 'Crouch cancel (tap U) then qcf+3'],
        ['CH f+1+2', '1+2'],
        ['f,F+3', 'f,F+3,3+4 or f,F+3~F → DEW.2,1 / DEW.3+4'],
        ['CH b+1 / 3,2', 'DEW.2,1 or DEW.3+4'],
        ['CH b+2,(1)', 'BT.1,2 or BT.1,4'],
      ].map(([starter, ender]) => `<div style="padding: 6px 0; border-bottom: 1px solid var(--border); font-size: 13px;"><b style="color: var(--accent-warm); font-family: var(--frame); display: inline-block; min-width: 260px;">${starter}</b> <span style="color: var(--text-dim)">→</span> <span>${ender}</span></div>`).join('')}
    `,

    stances: () => `
      <h3 class="subhead">Lili's Stances: Backturn, Dew Glide, Feisty Rabbit</h3>

      <h3 class="subhead">Backturn (BT) — Core Mix-Up Stance</h3>
      <div class="card">
        <p class="body"><b>Enter via:</b> ${mv('SS.4')}, ${mv('DEW.df+4')}, ${mv('FC.df+4')} (CH launcher lands in BT), ${mv('3')} intro, ${mv('d+1,2~B')}, ${mv('b+2,1~B')}, ${mv('df+3+4')} (after cartwheel), ${mv('3+4')} heat string, or after ${mv('f,F+4')} Root of Evil hit.</p>

        <h4 class="minihead">BT Attack Menu</h4>
        <table class="data compact">
          <tr><td>${cmd('lili','BT.1,2')}</td><td>8f jab → KND. Guaranteed on ff+4 CH.</td></tr>
          <tr><td>${cmd('lili','BT.1,4')}</td><td>8f jab → HE. Guaranteed on ff+4 CH.</td></tr>
          <tr><td>${cmd('lili','BT.2')}</td><td>PC mid. Beats mash.</td></tr>
          <tr><td>${cmd('lili','BT.3')}</td><td>HC homing mid.</td></tr>
          <tr><td>${cmd('lili','BT.3,4')}</td><td>HC double mid check. Ground followup guaranteed.</td></tr>
          <tr><td>${cmd('lili','BT.d+2')}</td><td>HC tracking low. +5 OH.</td></tr>
          <tr><td>${cmd('lili','BT.1+2')}</td><td>Launcher.</td></tr>
          <tr><td>${cmd('lili','BT.3+4')}</td><td>Jump-over downjab-beater.</td></tr>
          <tr><td>${cmd('lili','BT.d+3+4')}</td><td>Sweep.</td></tr>
          <tr><td>${cmd('lili','BT.4,3+4')}</td><td>Shears — natural uninterruptible S2.</td></tr>
        </table>

        <div class="tip-box"><b>BT 50/50 logic:</b> ${mv('BT.d+2')} (low) vs ${mv('BT.3')} (HC mid). Adds ${mv('BT.3+4')} jump-over vs downjabs and ${mv('BT.2')} PC vs mash. Elite mixup.</div>
      </div>

      <h3 class="subhead">Dew Glide (DEW) — Pressure Stance</h3>
      <div class="card">
        <p class="body"><b>Enter via:</b> ${mv('b+1~F')} (safe entry), ${mv('b+2,1~F')}, ${mv('ws1,2~F')}, ${mv('qcf')} raw input, ${mv('H.2+3')} heat smash hold F (undeniable mix at +14).</p>

        <p class="body"><b>Cancel:</b> Tap U + hold B → sidestep block. Safe escape without commit.</p>

        <h4 class="minihead">DEW Attack Menu</h4>
        <table class="data compact">
          <tr><td>${cmd('lili','DEW.1,4')}</td><td>Safe chip ender. Heat +7 OB.</td></tr>
          <tr><td>${cmd('lili','DEW.1,2')}</td><td>Wallsplat read (-14 OB if wrong).</td></tr>
          <tr><td>${cmd('lili','DEW.df+3')}</td><td>Slide low (S2 new).</td></tr>
          <tr><td>${cmd('lili','DEW.df+4')}</td><td>CH launcher HC. Leaves in BT.</td></tr>
          <tr><td>${cmd('lili','DEW.3+4')}</td><td>Cloisonne. +6 OB, HC/LC evasion.</td></tr>
          <tr><td>${cmd('lili','DEW.2,1')}</td><td>Homing HE (qcf+2,1).</td></tr>
          <tr><td>${cmd('lili','uf+1+2')}</td><td>Wall break throw.</td></tr>
        </table>
      </div>

      <h3 class="subhead">Feisty Rabbit (FR) — Heat 50/50</h3>
      <div class="card">
        <p class="body"><b>Enter via:</b> ${mv('b+3')} (right hop) or ${mv('b+4')} (left hop). Outside heat = movement tool; in heat = true 50/50.</p>

        <p class="body"><b>In heat:</b> Mid (${mv('b+3,2')} / ${mv('b+4,2')}) heat dash launcher + ${mv('qcf+2,1')} via DEW. Low (${mv('b+3,3')} / ${mv('b+4,3')}) KND NH → ${mv('qcf+3')} / ${mv('ws3')} ground.</p>

        <p class="body"><b>Heat bar recovery:</b> Hold ${mv('b+3')} or ${mv('b+4')} for double jump — regenerates heat bar. Best use: post-combo chase or turtling opponents.</p>

        <div class="tip-box"><b>FR setups:</b> After wall combos, after ${mv('qcf+3+4')} OH (+17), on opponent wake-up. Best as wake-up wake for the opponent or after cutting combos short.</div>
      </div>
    `,

    pressure: () => `
      <h3 class="subhead">Plus-Frame Pressure</h3>
      <p class="body">Lili's plus frames come from a select few moves — maximize each. DewGlider's core lockdown: ${mv('df+3')} (+3 OB), ${mv('qcf+3+4')} (+6 OB), ${mv('f,F+3+4')} (+7 Heat), ${mv('f,f,F+1+2')} (+4 OB).</p>

      <h4 class="minihead">Plus-Frame Arsenal</h4>
      ${fd('lili', [
        { cmd: 'df+3', level: 'm', startup: 'i20', dmg: '18', block: '+3c', hit: '+8c', ch: '+19a', notes: 'Submissive Heel. +3 OB CH launcher.' },
        { cmd: 'DEW.3+4', level: 'h,h', startup: 'i12', dmg: '10,14', block: '+6', hit: '+17g', ch: '', notes: 'Cloisonne. +6 OB. HC/LC evasion.' },
        { cmd: 'f,F+3+4', level: 'm', startup: 'i19', dmg: '20', block: '-2 (+7 Heat)', hit: '+4a', ch: '', props: ['chip'], notes: 'Piercing Thorn. +7 OB in Heat.' },
        { cmd: 'f,f,F+1+2', level: 'h,h', startup: 'i13', dmg: '14,16', block: '+4', hit: '+33d', ch: '', props: ['chip'], notes: 'Zephyrantes. +4 OB chip.' },
        { cmd: 'qcf+1,4', level: 'm,m', startup: 'i15', dmg: '16,14', block: '-9 (+7 Heat)', hit: '+5', ch: '', props: ['chip'], notes: 'Heat +7 OB chip.' },
        { cmd: 'd+1,2', level: 'L,h', startup: 'i18', dmg: '6,13', block: '-8', hit: '+3', ch: '+5', notes: 'Unseeable NC.' },
        { cmd: 'b+2,1', level: 'h,m', startup: 'i13', dmg: '10,16', block: '-4', hit: '+7', ch: '+9', notes: 'DEW/BT mix entry.' },
      ])}

      <h3 class="subhead">Heat Game</h3>
      <p class="body">Heat unlocks Lili's most oppressive tools. Key changes:</p>
      <ul class="body" style="margin: 10px 0 14px 20px; line-height: 1.7;">
        <li>${mv('f,F+3+4')} / ${mv('qcf+1,4')} / ${mv('1,2,4')} / ${mv('b+4,4')} / ${mv('b+3,4')} all become <b>+7 OB</b> (${mv('1,2,4')} is +5) — massive chip while controlling space</li>
        <li>${mv('b+3')} / ${mv('b+4')} Feisty Rabbit becomes <b>true 50/50</b></li>
        <li>${mv('H.2+3')} Heat Smash is 16f fast, +7 OB, goes into DEW at +14 for undeniable mix</li>
        <li>${mv('3+4,3+4')} heat string, +7 BT on hit → BT mix setup</li>
        <li>Heat bar regenerates via FR double-jump (hold ${mv('b+3')} / ${mv('b+4')})</li>
      </ul>

      <h3 class="subhead">Panic Moves</h3>
      ${fd('lili', [
        { cmd: 'u+4', level: 'm', startup: 'i15~17', dmg: '20', block: '-13', hit: '+19a (+9)', ch: '+33a (+23)', notes: 'Fast off-ground CH launcher.' },
        { cmd: 'u+3+4', level: 'M', startup: 'i36~39', dmg: '25', block: '-8~-5', hit: '+6d', ch: '', notes: 'Airborne f3-5. Launcher on head hit.' },
        { cmd: 'd+1+2', level: 'M', startup: 'i20', dmg: '25', block: '-13', hit: '+13d', ch: '', props: ['powercrush'], notes: 'Standing Power Crush.' },
        { cmd: 'd+3+4', level: 'm', startup: 'i17~21', dmg: '28', block: '-21', hit: '+45a (+35)', ch: '', notes: 'Matterhorn. HC mid launcher. -21 OB launch-punishable!' },
        { cmd: 'db+3', level: 'h', startup: 'i19', dmg: '18', block: '-9~-6', hit: '+34d', ch: '+46a', notes: 'Twist of Fate. Full HC.' },
        { cmd: '1+2', level: 'm', startup: 'i12', dmg: '16', block: '-12', hit: '+20a (+10)', ch: '', notes: '12f get-off-me.' },
      ])}
    `,

    frametraps: () => `
      <h3 class="subhead">Frame Traps</h3>
      <p class="body">DewGlider's core lockdown setups:</p>

      <div class="card">
        <h4 class="minihead">${mv('qcf+3+4')} OB (+6)</h4>
        <p class="body sm">→ ${mv('f+1+2')} / ${mv('df+4,4')} · ${mv('1,1')} or ${mv('1,2')} beat PC</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('f,f,F+1+2')} OB (+4)</h4>
        <p class="body sm">→ ${mv('1,2')} / ${mv('1,1')} beat PC · ${mv('df+4')}, ${mv('df+1')}, ${mv('f+1+2')} beat mash</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('df+3')} OB (+3)</h4>
        <p class="body sm">→ ${mv('df+4,4')} tracking mid check</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('f,F+4~B')} OH (+10 BT)</h4>
        <p class="body sm">→ ${mv('BT.d+2')} · ${mv('BT.3,4')} · ${mv('BT.1,4')} · ${mv('BT.1,2')} · ${mv('BT.1+2')}</p>
      </div>

      <div class="card">
        <h4 class="minihead">${mv('1,2')} OH (+8)</h4>
        <p class="body sm">→ ${mv('df+4,4')} · ${mv('f+4')}</p>
      </div>

      <h3 class="subhead">Knowledge Checks</h3>
      <div class="card">
        <h4 class="minihead">${mv('BT.d+2')} into ${mv('ws1,2,4')}</h4>
        <p class="body sm">Flowchart at lower ranks — opponents can't press in between.</p>
      </div>
      <div class="card">
        <h4 class="minihead">${mv('d+2,2,3')} / ${mv('SS.1+2')} / ${mv('2,4')} / ${mv('f+3')} into ${mv('d+3+4')}</h4>
        <p class="body sm">Safe-on-block + d+3+4 evasion — if opponent presses highs/HP mids, launch them.</p>
      </div>
      <div class="card">
        <h4 class="minihead">${mv('f,F+4~B')} into ${mv('BT.1+2')} or ${mv('BT.d+3+4')}</h4>
        <p class="body sm">Root of Evil super plus → BT option CH at lower ranks.</p>
      </div>
      <div class="card">
        <h4 class="minihead">${mv('df+3')} or ${mv('qcf+3+4')} into ${mv('df+4,4')}</h4>
        <p class="body sm">Nasty frame traps where opponent can't step. Abuse at lower ranks. df+4,4 also low-parryable but most don't react.</p>
      </div>
    `,

    matchups: () => `
      <h3 class="subhead">Matchup Tips</h3>
      <div class="matchups">
        ${[
          ['Jin','Outspace with df+3 and ss4. Respect EWGF — duck if predictable.'],
          ['Kazuya','SSL electrics. Whiff-punish hellsweeps with df+3+4.'],
          ['King','Break throws. Keep distance — your range beats his.'],
          ['Dragunov','Hard matchup. Respect df+2. Use ss4 backturn mix to avoid his game.'],
          ['Paul','Duck deathfist for full launch. Outspace his dashes with f+4.'],
          ['Jun','Stay mid-range. Her df+3 homing catches your sidesteps — bait with backdash.'],
          ['Nina','She wants range 0 — deny with f+4 and df+3. Patient play wins.'],
          ['Miary Zo','Slow backdash = stays in your range. Abuse df+3+4 long-range HE.'],
          ['Reina','SSL Sentai. Punish unsafe lows with df+2.'],
          ['Azucena','Her Libertador is linear — step and whiff-punish with df+3+4.'],
          ['Lars','Interrupt DE with jab. Close range hurts him.'],
          ['Feng','Stances linear — SSL. Use db+3 HC against his mashing.'],
          ['Hwoarang','Duck flamingo highs. Your range beats his close game.'],
          ['Bryan','Respect backdash — your moves whiff. Lock down with DEW.3+4.'],
          ['Heihachi','Duck electrics. Hellsweep blocked → launch with df+2.'],
          ['Yoshimitsu','Patience. Punish Flash with ws2. Avoid throw range.'],
          ['Alisa','Chainsaw keepout awkward — close with f,f,F+1+2.'],
          ['Clive','Projectile annoys — close with Zephyrantes.'],
          ['Victor','Teleport tricky. db+3 HC catches warps.'],
          ['Leroy','Parry monster. Avoid commit-heavy moves. Use db+3 and df+4,4.'],
          ['Zafina','Stance-heavy. Respect lows. df+3 homing catches SCR.'],
          ['Eddy','Capoeira evasion. Your ss1+2 neutral OB works.'],
          ['Armor King','Range beats command grab — keep distance.'],
          ['Anna','Ss1 cancels beat you. Stay mid-range and whiff-punish.'],
        ].map(([char, tip]) => `<div class="m-row"><span class="char">${char}</span><span class="tip">${tip.replace(/\$\{([^}]+)\}/g, (_, n) => mv(n))}</span></div>`).join('')}
      </div>
    `,

    defense_vs: () => `
      <h3 class="subhead">Playing Against Lili</h3>
      <p class="body">DewGlider's own defensive tips — exploit her slow backdash-tier approach and weak tracking.</p>

      <h3 class="subhead">Core Anti-Lili Principles</h3>
      <div class="card">
        <h4 class="minihead">Block mid mostly</h4>
        <p class="body">Lili's lows are annoying but not too dangerous compared to her stand-alone mids, which have more range and hit harder.</p>
      </div>
      <div class="card">
        <h4 class="minihead">Pressure with fast tracking moves</h4>
        <p class="body">Most key moves revolve around the 20f mark. <b>Fast CH launchers with tracking</b> give her real trouble since Lili players love to step.</p>
      </div>
      <div class="card">
        <h4 class="minihead">Sidestep and outspace her</h4>
        <p class="body">Even though she excels mid-range, <b>you can outspace many of her moves by stepping / backdashing</b> — make her whiff her approach.</p>
      </div>

      <h3 class="subhead">Specific Move Counters</h3>
      <div class="card">
        <h4 class="minihead">${mv('d+3+4')} Matterhorn</h4>
        <p class="body">Super punishable — <b>-21 OB</b>. Big evasive launcher but don't let her get away. Launch every blocked one.</p>
      </div>
      <div class="card">
        <h4 class="minihead">${mv('u+3+4')}</h4>
        <p class="body">Very evasive, safe on block launcher. Players use as panic. Bait, step/backdash, launch.</p>
      </div>
      <div class="card">
        <h4 class="minihead">${mv('ws1,2,4')}</h4>
        <p class="body">Abusable especially with DEW transition. <b>Duck and launch the 2nd hit</b> to avoid the mix.</p>
      </div>
      <div class="card">
        <h4 class="minihead">${mv('db+4')}</h4>
        <p class="body">One of slowest low sweeps in the game. <b>Duck and launch</b> or interrupt with chunky mid — it's evasive.</p>
      </div>
      <div class="card">
        <h4 class="minihead">${mv('df+4,4')}</h4>
        <p class="body">Block or parry the low stomp. Only has the low extension — telegraphed if you're looking.</p>
      </div>
      <div class="card">
        <h4 class="minihead">${mv('df+3+4')} Cartwheel</h4>
        <p class="body">Outspace by sidewalk / backdash. Interrupt with downjab. Be careful — options beat downjabs from BT, so both players guess.</p>
      </div>
      <div class="card">
        <h4 class="minihead">${mv('3,1')} / ${mv('3,2')} Peacock Waltz</h4>
        <p class="body">Lili players love 3,1 as HE. <b>Punch parry covers both extensions</b>.</p>
      </div>
      <div class="card">
        <h4 class="minihead">Feisty Rabbit Mix</h4>
        <p class="body">Stay on the ground to avoid mids. Only get chipped by the low or qcf+3. Get up safely when she no longer has advantage.</p>
      </div>

      <h3 class="subhead">Defensive Summary</h3>
      <div class="do-dont">
        <div class="do"><h4>When facing Lili, DO</h4><ul>
          <li>Use fast tracking CH launchers (most Lili moves ~20f)</li>
          <li>Sidestep her linear strings consistently</li>
          <li>Outspace with backdashing — her approach is limited</li>
          <li>Block mid primarily — her big damage comes from mids</li>
          <li>Launch -21 ${mv('d+3+4')} every time</li>
          <li>Duck and launch ${mv('ws1,2,4')} second hit</li>
          <li>Punch-parry ${mv('3,1')} / ${mv('3,2')}</li>
          <li>Stay grounded vs Feisty Rabbit mix</li>
        </ul></div>
        <div class="dont"><h4>When facing Lili, DON'T</h4><ul>
          <li>Respect ${mv('u+3+4')} — bait and launch</li>
          <li>Give her mid-range — it's her preferred distance</li>
          <li>Mash into df+3 or qcf+3+4 (frame traps)</li>
          <li>Step into her homing ${mv('3+4')} or ${mv('BT.3')}</li>
          <li>Get wall-splat — her wall game is strong</li>
          <li>Ignore heat Feisty Rabbit threat</li>
          <li>Let her run ${mv('f,f,F+1+2')} Zephyrantes freely</li>
        </ul></div>
      </div>
    `,

    dos_donts: () => `
      <h3 class="subhead">The Ultimate Lili Do's and Don'ts</h3>
      <div class="do-dont">
        <div class="do"><h4>DO</h4><ul>
          <li>Use ${mv('df+3')} as your cornerstone pressure (+3 OB)</li>
          <li>Master Dew Glide cancels (${mv('b+1~F')}, then tap U)</li>
          <li>Learn BT 50/50 cold: ${mv('BT.d+2')} vs ${mv('BT.3')}</li>
          <li>Build heat for Feisty Rabbit 50/50</li>
          <li>Abuse ${mv('qcf+3+4')} +6 OB for lockdown</li>
          <li>Whiff-punish with ${mv('df+3+4')} long-range HE</li>
          <li>Wall-carry every combo — her wall game is elite</li>
          <li>Drill sidestep — her BEST ability in the game</li>
          <li>Know Heat Smash → DEW at +14 (undeniable mix)</li>
          <li>Use ${mv('d+1,2')} unseeable NC to chip</li>
        </ul></div>
        <div class="dont"><h4>DON'T</h4><ul>
          <li>Throw ${mv('d+3+4')} Matterhorn carelessly — -21 OB launch-punish</li>
          <li>Rely on ${mv('u+3+4')} — good players bait and launch</li>
          <li>Force Feisty Rabbit outside heat without setup</li>
          <li>Ignore Lili's poor tracking — don't expect to catch sidesteppers easily</li>
          <li>Commit to slow moves near wall without plus-frame setup</li>
          <li>Overuse ${mv('3+4')} Black Swan — max range duckable/launchable</li>
          <li>Spam ${mv('ws1,2,4')} — second hit duckable</li>
          <li>Chase opponents — she's keepout-based</li>
          <li>Pick Lili if you hate ~20f speed — most moves feel slow</li>
          <li>Forget heat bar regen via FR double-jump</li>
        </ul></div>
      </div>

      <h3 class="subhead">8-Week Lili Development Plan</h3>
      <table class="data">
        <thead><tr><th>Week</th><th>Focus</th></tr></thead>
        <tbody>
          <tr><td>Week 1</td><td>Learn basic pokes: ${mv('df+1')}, ${mv('df+3')}, ${mv('d+3')}, ${mv('d+1,2')}, ${mv('f+4')}, ${mv('b+1')}. Basic punishers.</td></tr>
          <tr><td>Week 2</td><td>Dew Glide entry + cancel. Practice ${mv('b+1~F')} → tap U. Learn ${mv('qcf+3+4')} pressure.</td></tr>
          <tr><td>Week 3</td><td>Sidestep drills — her best tool. Learn SSL/SSR for top 5 matchups.</td></tr>
          <tr><td>Week 4</td><td>Beginner combos cold. ${mv('df+2~B')} → ${mv('BT.1,2')} → ${mv('f,F+3,f+1,4')}.</td></tr>
          <tr><td>Week 5</td><td>BT 50/50 mastery. ${mv('BT.d+2')} vs ${mv('BT.3')}. Add ${mv('BT.2')} PC anti-mash.</td></tr>
          <tr><td>Week 6</td><td>Feisty Rabbit heat 50/50. ${mv('b+3,2')} vs ${mv('b+3,3')}. Heat bar regen double-jump.</td></tr>
          <tr><td>Week 7</td><td>Wall combos. ${mv('uf+4,3')} and ${mv('qcf+3')} T! routes.</td></tr>
          <tr><td>Week 8</td><td>Matchup prep. Replay review. Ranked push.</td></tr>
        </tbody>
      </table>
    `,
  },

};
