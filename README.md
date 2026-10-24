# Portfolio Nourhane – Next.js

## Lancer en local
```bash
npm install
npm run dev        # http://localhost:3000
```

## Photo
Télécharge ta photo actuelle et place-la ici : `public/avatar.jpg`
(sinon la lettre « N » s'affiche à la place).

## Déployer
**Vercel (le plus simple)** : pousse sur GitHub → vercel.com → Import → Deploy.

**GitHub Pages** :
```bash
NEXT_PUBLIC_BASE_PATH=/nourhane-bendjeddou_portfolio npm run build
# le site statique est dans le dossier /out
```
Puis publie le contenu de `out/` (ex. avec l'action `peaceiris/actions-gh-pages`).
Pour un domaine perso ou Vercel, build sans la variable.

## Modifier le contenu
Tout le texte (projets, expériences, compétences) est dans `app/data.js`.
Les couleurs sont dans `:root` de `app/globals.css`.
