# Autoglas Zentrum Aydin · Website-Entwurf

Entwurf von HK Growth Operator für die Autoglas-Werkstatt Autoglas Zentrum Aydin (Duisburg, Essen, Gummersbach geplant). Ziel: ein Entwurf, den wir dem Betrieb als Link schicken. Kein Livegang ohne Freigabe des Kunden.

## Was hier liegt

- `index.html`, `shop.html`: statisches HTML, kein Build-Schritt
- `assets/css`, `assets/js`, `assets/fonts` (lokal, DSGVO), `assets/img`
- `Dockerfile` + `deploy/coolify/`: nginx-Image für Coolify. Jeder Push auf `main` wird automatisch neu deployt (Demo: https://autoglasaydin.hk-growthoperator.de)
- `ENTWURF-NOTIZEN.md`: belegte Fakten, Quellen, offene Punkte. **Einzige Faktenquelle.**
- `vorschau-einzeldatei/`: eigenständige HTML-Dateien zum Verschicken, erzeugt aus den Seiten
- `.claude/agents/`, `.claude/skills/`: Agents und Skills für die Arbeit an der Seite

## Regeln

1. **Entwurf bleibt Entwurf.** Entwurfsleiste auf jeder Seite, „Entwurf“ im `<title>`, `noindex` in nginx. Erst beim Livegang entfernen.
2. **Nichts erfinden.** Keine Bewertungen, Zahlen, Logos, Zitate oder Leistungen, die nicht in `ENTWURF-NOTIZEN.md` belegt sind. Shop-Preise sind Beispielpreise und so gekennzeichnet.
3. **Design nach `design-taste-frontend`.** Dessen Hausregeln gelten für jede Änderung: keine Etiketten über Überschriften, keine 01/02/03-Nummern, keine Haarlinien, keine Schatten in Ruhe, keine Verläufe, keine Mini-Großbuchstaben, höchstens zwei Schriften.
4. **Marke:** Logorot #FE0000 (Bildschirmfassung etwas vertieft), Wortmarke als Vektor (Montserrat), nicht verändern.
5. **Texte:** Deutsch, du-Form, kurz und direkt. Keine Gedankenstriche im Fließtext.
6. **Bilder:** Eigene Fotos des Betriebs zuerst, sonst freie Bilder mit Lizenz und Bildnachweis. Fremde Bilder nie als Produkt oder Team des Betriebs ausgeben.

## Ablauf mit den Agents

| Schritt | Agent | Skill |
|---|---|---|
| Richtung, Idee, Kritik | `art-direktor` | design-taste-frontend |
| Texte, Faktencheck | `texter` | design-taste-frontend (copy.md) |
| Umsetzung, Gates | `frontend-bauer` | design-taste-frontend, verification-before-completion |
| Lokales SEO | `local-seo` | seo-local |
| Abnahme vor Push/Versand | `qa-abnahme` | unlazy, verification-before-completion |

Reihenfolge für eine Überarbeitung: art-direktor → texter → frontend-bauer → art-direktor (Kritik) → local-seo → qa-abnahme → Push.

## Prüfen

```bash
python3 -m http.server 8766                       # lokal ansehen
node .claude/skills/design-taste-frontend/scripts/lint.mjs index.html shop.html assets/css assets/js
CHROME_PATH=werkzeuge/chrome-ohne-sandbox.sh node .claude/skills/design-taste-frontend/scripts/inspect.mjs index.html --out .taste-skill/after
docker build -t autoglas-demo . && docker run --rm -p 8090:80 autoglas-demo
```

`werkzeuge/chrome-ohne-sandbox.sh` ist nur in Cloud-Containern nötig, in denen als root gearbeitet wird.

## Herkunft der Skills

| Skill | Quelle | Lizenz |
|---|---|---|
| design-taste-frontend | HKGrowthOperator/taste-skill (12af471) | MIT |
| seo-local | HKGrowthOperator/claude-seo (6be93f4) | MIT |
| unlazy | HKGrowthOperator/unlazy (1667149) | MIT |
| verification-before-completion | HKGrowthOperator/superpowers (fe78c2a) | MIT |
