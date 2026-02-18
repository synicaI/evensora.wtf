# evensora.lol

Landing page statique (HTML/CSS/JS), inspirée de juju.lol.

## Lancer le projet

> ⚠️ N'utilise pas un chemin fixe comme `/workspace/evensora.lol` sur Windows.
> Va dans **le dossier réel où tu as cloné/téléchargé le projet**.

### Option A — Ouvrir directement

Double-clique sur `index.html`.

### Option B — Serveur local Python (recommandé)

#### Windows (PowerShell)

```powershell
cd "C:\chemin\vers\evensora.lol"
py -m http.server 8000
```

#### macOS / Linux

```bash
cd /chemin/vers/evensora.lol
python3 -m http.server 8000
```

### Option C — Serveur local Node.js

```bash
npm install
npm run start
```

Puis ouvre:

- <http://localhost:8000> (Python)
- ou <http://localhost:3000> (Node)

## Dépannage

### Erreur: `Le chemin d’accès spécifié est introuvable`

Cela veut dire que le dossier passé à `cd` n’existe pas sur ta machine.

1. Vérifie où se trouve le projet (Explorateur/Finder).
2. Copie le chemin exact du dossier.
3. Refais `cd` avec ce chemin exact.

Exemple Windows:

```powershell
cd "C:\Users\TonNom\Desktop\evensora.lol"
```

## Structure

- `index.html` — structure de la page
- `styles.css` — styles et responsive
- `script.js` — animation des étoiles + toggle audio
- `package.json` — script de démarrage Node (utile pour Railway)

## Hébergement (alternative simple si Vercel te bloque)

### Option 1 — Railway (recommandé si tu veux éviter Vercel)

1. Push le repo sur GitHub.
2. Va sur Railway → **New Project** → **Deploy from GitHub repo**.
3. Sélectionne ce repo.
4. Railway détecte `package.json` et lance `npm start` automatiquement.
5. Quand c'est déployé, récupère l'URL `*.up.railway.app`.
6. Dans Railway, ajoute ton domaine custom: `evensora.lol` (+ `www.evensora.lol` si voulu).

### Option 2 — Netlify (ultra simple)

1. Va sur Netlify → **Add new site** → **Deploy manually**.
2. Glisse-dépose le dossier du projet (ou connecte GitHub).
3. Ajoute ensuite `evensora.lol` dans **Domain management**.

## Configurer le DNS (Railway)

Dans Railway, la fenêtre **Configure DNS Records** te donne les valeurs exactes à copier.
Pour ton cas actuel:

- **CNAME**
  - **Name**: `@`
  - **Value**: `tv7igjvo.up.railway.app`
- **TXT**
  - **Name**: `_railway-verify`
  - **Value**: `railway-verify=3b97a6a4c412af5bbb6e33bb53d92bc26647ee37a417dea62c4de8e3521dd036`

> ⚠️ Si ton registrar n'accepte pas `CNAME` sur `@`, utilise la stratégie équivalente proposée par ton DNS provider:
> `ALIAS/ANAME` sur `@` vers `tv7igjvo.up.railway.app`, puis garde le TXT `_railway-verify`.

Optionnel pour `www`:

- **CNAME**
  - **Name**: `www`
  - **Value**: `tv7igjvo.up.railway.app`

## Vérifier

Après propagation DNS, teste:

- <https://evensora.lol>
- <https://www.evensora.lol>
