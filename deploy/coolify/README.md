# Coolify: Demo von Autoglas Zentrum Aydin

Statische Auslieferung über nginx, kein Build-Schritt, keine Umgebungsvariablen.
Ausgeliefert werden nur `index.html`, `shop.html` und `assets/`.

## Einstellungen in Coolify

Neue Resource → Application → GitHub App (privates Repo) oder Public Repository:

| Feld | Wert |
|---|---|
| Repository | das neue Repo |
| Branch | `main` |
| Build Pack | `Dockerfile` |
| Base Directory | `/` |
| Dockerfile Location | `/Dockerfile` (Standardwert, nichts ändern) |
| Ports Exposes | `80` (Port Mappings leer lassen) |
| Domain | z. B. `https://autoglasaydin.hk-growthoperator.de` |
| Health Check | aus (dann gilt der aus dem Dockerfile) oder Pfad `/gesund`, Status `204` |

„Automatic Deployment“ einschalten, dann baut jeder Push auf `main` die Demo neu.

Das `Dockerfile` liegt in der Repo-Wurzel, die nginx-Konfiguration hier unter
`deploy/coolify/nginx.conf`. Kommt `open Dockerfile: no such file or directory`,
steht `Dockerfile Location` auf einem anderen Pfad als `/Dockerfile`, oder
`Base Directory` ist nicht `/`.

Für die Subdomain braucht es einen DNS-Eintrag (A-Record) auf den Coolify-Server,
falls bei hk-growthoperator.de kein Wildcard-Eintrag besteht.

## Demo-Modus

- Jede Antwort trägt `X-Robots-Tag: noindex, nofollow, noarchive`, `robots.txt` sperrt alles.
  So rankt der Entwurf nicht neben der echten Seite autoglaszentrum-aydin.de.
- Für den Livegang die Zeile `X-Robots-Tag` (dreimal) und den Block `robots.txt` in
  `nginx.conf` entfernen.
- WhatsApp- und Telefonlinks zeigen auf die echten Nummern des Betriebs.

## Zwischenspeicher

HTML, CSS und JS gehen mit `Cache-Control: no-cache` raus (Browser fragt kurz nach,
meist 304). Zusätzlich hängt das Dockerfile beim Bauen `?v=<Prüfsumme>` an alle
CSS/JS-Verweise. So zeigt nach einem Deploy kein Browser eine alte Fassung.
Bilder 1 Tag, Schriften 30 Tage.

## Adressen

| Adresse | Antwort |
|---|---|
| `/` | Startseite |
| `/shop` | Shop (`/shop.html` leitet mit 301 dorthin) |
| `/gesund` | 204, nur für die Gesundheitsprüfung |
| `/robots.txt` | `Disallow: /` |
| alles andere | 404 mit der Startseite als Inhalt |

## Nach dem Deploy prüfen

```bash
curl -sI https://<adresse>/ | grep -iE "^HTTP|x-robots"   # 200 + noindex
curl -sI https://<adresse>/shop | head -1                 # 200
curl -s  https://<adresse>/robots.txt                     # Disallow: /
```

## Was hier geprüft wurde (04.11.2026)

Image lokal mit Docker gebaut (Kontext = Repo-Wurzel, wie in Coolify) und gestartet:
`nginx -t` fehlerfrei, Container „healthy“, alle Adressen oben wie beschrieben,
gzip für CSS/JS, Cache-Header für Schriften und Assets, beide Seiten im Browser
ohne Konsolenfehler, alle Schriften geladen.

## Wenn „Bad Gateway“ kommt

`Ports Exposes` muss `80` sein (leer = Coolify rät 3000). Danach **Redeploy**,
nicht nur Restart, damit die Traefik-Labels neu geschrieben werden.
