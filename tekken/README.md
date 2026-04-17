# Tekken 8 Codex

A single-page Tekken 8 beginner's guide and character playbook — all content in one site, with a toggle between icon notation and text notation. Built to work on any device, no build step required.

## What's included

- **Beginner's guide** — fundamentals, core mechanics, defense & wake-up, 90-day training plan, ranks & character picks, glossary & resources.
- **Character guides** for Jun Kazama, Nina Williams, Miary Zo, and Lili Rochefort. Each has 8 sub-tabs: Overview, Punishers, Key Moves, Combos, Stances & Tech, Pressure & Heat, Matchups, Do's & Don'ts.
- **Notation toggle** in the top-right. Switches every move between icon visuals (↘ + 2) and plain text (`df+2`). Preference persists between visits.
- **Clickable moves** — every notation is a link to that move's video and frame data on okizeme.gg.
- **Mobile-responsive** — sidebar collapses to a drawer below 900px width.
- **Shareable URLs** — hash-based routing. Bookmark `index.html#char/jun/combos` and land on Jun's combo tab.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (any name — for example `tekken-codex`).
2. Push these files to the `main` branch:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/tekken-codex.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", **Branch** to `main`, folder `/ (root)`. Click **Save**.
5. Wait ~30 seconds. Your site will be live at `https://YOUR-USERNAME.github.io/tekken-codex/`.

On mobile, add it to your home screen from Safari/Chrome for an app-like experience.

## Local preview

Just open `index.html` in a browser — no server needed. Or, if you prefer, run a local server:

```
python3 -m http.server 8000
# then open http://localhost:8000
```

## Files

| File | Purpose |
|---|---|
| `index.html` | Shell — loads the scripts |
| `style.css` | All styles |
| `icons.js` | 47 PNG icons embedded as base64 |
| `renderer.js` | Notation renderer (icon/text toggle) |
| `guides.js` | Beginner guide sections |
| `chars.js` | Character data (Jun, Nina, Miary Zo, Lili) |
| `app.js` | Navigation, routing, main render loop |

## Updating content

All content is data-driven. To add a matchup, edit the matchup array in `chars.js`. To add a new character, add an entry to the `CHARACTERS` object following the same shape as Jun.

## Credits

- Frame data from [TekkenDocs](https://tekkendocs.com).
- Video links via [okizeme.gg](https://okizeme.gg).
- Not affiliated with Bandai Namco.
