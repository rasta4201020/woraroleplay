# Wora Roleplay — weboldal

Egyszerű, gyors, statikus weboldal (HTML/CSS/JS), amit GitHub Pages-re tudsz kitenni.

## Fájlok

- `index.html` — a főoldal
- `styles.css` — stílusok
- `script.js` — menü + linkek beállítása

## Linkek beállítása

Nyisd meg a `script.js` fájlt, és írd át ezt:

```js
const LINKS = {
  discord: "https://discord.gg/IDE_JON_A_SAJAT_LINKED",
  whitelist: "https://example.com/whitelist",
  rules: "https://example.com/szabalyzat",
};
```

## GitHub Pages (Git nélkül, legegyszerűbb)

1. GitHubon hozz létre egy új repository-t (pl. `wora-roleplay-web`).
2. Menj a repo oldalán: **Add file → Upload files**.
3. Húzd fel a 3 fájlt: `index.html`, `styles.css`, `script.js` (és opcionálisan `README.md`).
4. Repo beállítások: **Settings → Pages**.
5. **Build and deployment**: Source = **Deploy from a branch**.
6. Branch = **main**, folder = **/(root)**, majd **Save**.
7. Pár perc múlva itt lesz a weboldal URL-je.

## GitHub Pages (Git-tel)

Ha felteszed a Git-et Windowsra, akkor a mappában:

```bash
git init
git add .
git commit -m "Add Wora Roleplay landing page"
git branch -M main
git remote add origin https://github.com/<USER>/<REPO>.git
git push -u origin main
```

Utána ugyanúgy: **Settings → Pages** → main / root.
