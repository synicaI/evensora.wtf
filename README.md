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

Puis ouvre:

- <http://localhost:8000>
- ou <http://127.0.0.1:8000/index.html>

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
