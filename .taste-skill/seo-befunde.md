# Lokales SEO · Befunde und Vorgaben für den Neubau

Stand 10.11.2026 · Agent `local-seo` (Skill `seo-local`) · Nur gelesen, **nichts geändert** (Redesign läuft parallel).

Geprüfter Stand: Commit `6639720` (10.11.2026 10:53), Dateien `index.html` (md5 af46f528…), `shop.html` (34842f54…), `deploy/coolify/nginx.conf` (c5081026…). Zeilenangaben beziehen sich auf diesen Stand und verschieben sich mit dem Neubau.

Geschäftstyp: **Hybrid** (Werkstatt mit Adresse plus mobiler Service 50 km). Schema-Typ `AutoRepair` passt.

## Was stimmt (geprüft)

- NAP Duisburg auf beiden Seiten identisch mit `ENTWURF-NOTIZEN.md`, Agent-Fakten und alter Website: Autoglas Zentrum Aydin, Duisburger Str. 150, 47166 Duisburg, +49 203 36989833 (`tel:+4920336989833`), Info@AutoglasZentrum-Aydin.de, Mo bis Sa 9:30 bis 18:00.
- `geo` im JSON-LD (index.html:26) identisch mit dem Schema der alten Seite (7 Nachkommastellen).
- `areaServed` (index.html:28) deckungsgleich mit dem Schema der alten Seite.
- `shop.html` hat kein Product-/Offer-Schema. Richtig so.
- Demo-Schutz wirkt: Abruf 10.11.2026 von `https://autoglasaydin.hk-growthoperator.de/` und `/shop` liefert `x-robots-tag: noindex, nofollow, noarchive`, `/robots.txt` liefert `Disallow: /`. In `nginx.conf:38` steht der Header auf Serverebene mit `always`, keine `location` setzt eigene `add_header`, also gilt er auch für robots.txt und 404.

## Befunde nach Schwere

Spalte „Wann“: E = schon im Entwurf beheben, L = spätestens zum Livegang.

### Kritisch

| # | Wann | Datei/Stelle | Befund | Vorgabe |
|---|---|---|---|---|
| K1 | L | nginx.conf:50-54, Dockerfile `COPY index.html shop.html` | Die alte Seite hat mindestens 20 Adressen (Liste unten). Die neue Seite kennt nur `/` und `/shop`. Alles andere endet in 404. Damit gehen die Rankings der Stadt- und Leistungsseiten verloren. | Seiten unter gleicher URL neu bauen oder per 301 umziehen (Tabelle „Weiterleitungen“). Neue HTML-Dateien auch im Dockerfile `COPY` ergänzen, sonst fehlen sie im Image. |
| K2 | L | index.html:653-654, shop.html:235-239 | Impressum, Datenschutz (Shop zusätzlich AGB, Widerruf, Versand) zeigen auf `#`. Die alte Seite hat `/impressum` und `/datenschutz`. | Gleiche URLs `/impressum`, `/datenschutz` behalten. Ohne Impressum kein Livegang. |

### Hoch

| # | Wann | Datei/Stelle | Befund | Vorgabe |
|---|---|---|---|---|
| H1 | E | index.html:6, shop.html:6, index.html:9 | „Entwurf“ fehlt im `<title>` (Projektregel 1) und im `og:title`. | Titel aus Abschnitt „Kopfbereich“ übernehmen. |
| H2 | E | index.html:6 | Startseiten-Titel ohne Hauptbegriff „Autoglas Duisburg“. Die alte Seite heißt „Autoglas Duisburg \| Autoglas Zentrum Aydin“. „Essen“ steht im Titel, obwohl dort keine Adresse belegt ist. | Siehe Kopfbereich. Essen erst in den Titel einer eigenen Essen-Seite, wenn die Adresse da ist. |
| H3 | E | index.html:105 | `h1` = „Scheibe kaputt?“, ohne Leistung und Ort. Alte Seite: „Autoglas-Reparatur und Austausch in Duisburg“. | h1-Vorschlag unten. Der Gestaltungssatz darf bleiben, Leistung und Ort müssen mit ins `h1`. |
| H4 | E | index.html:17-31 | JSON-LD unvollständig: kein `@id`, kein `hasMap`, kein `addressRegion`, `areaServed` nur als Textliste, Leistungen fehlen. Werte selbst sind korrekt. | Vollständiges JSON-LD unten übernehmen. |
| H5 | L | ENTWURF-NOTIZEN Offen 3 und 4 | Laut Notizen nennen Verzeichnisse teils Telefon 0203 36989837 und Öffnung 6:30. Das widerspricht Website und Schema (…833, 9:30). Von mir nicht nachgeprüft, Google-Unternehmensprofil nicht eingesehen. | Mit dem Kunden die richtigen Werte klären, dann Google-Profil, Verzeichnisse und Website angleichen. Seite und Schema erst ändern, wenn der Kunde andere Werte nennt. |
| H6 | L | alte Seite `/autoglas-aachen`, index.html:339, :448, :606 | Widerspruch im Einzugsgebiet: Die alte Aachen-Seite sagt „im Umkreis von 100 km rund um Duisburg“, die alte Leistungsseite und der Entwurf sagen 50 km. Luftlinie zur Werkstatt (Koordinaten aus assets/js/site.js:366-383): Aachen 93 km, Düren 79 km. Der Umkreis-Prüfer im Entwurf sagt einem Aachener also „nicht im Gebiet“. | Kunde entscheidet 50 oder 100 km. Bei 50 km: Aachen und Düren nicht als Seiten übernehmen, sondern umleiten (Tabelle), nicht ins `areaServed`. |
| H7 | E | index.html:341, :459, :462-467 | „Transporter“, „LKW“, „US-Cars/Pick-up“ sind in `ENTWURF-NOTIZEN.md` nicht einzeln belegt und auf der alten Startseite und `/leistungen` nicht zu finden. Belegt sind dort nur Wohnmobile sowie Firmenkunden und Fuhrparks. | Vom Kunden bestätigen lassen (Projektregel 2). Bis dahin nicht in Schema, Title oder Description. Liegt Texter/Frontend, nicht SEO-Kopf. |

### Mittel

| # | Wann | Datei/Stelle | Befund | Vorgabe |
|---|---|---|---|---|
| M1 | E | index.html:7 | Description 185 Zeichen (Google schneidet bei etwa 155 ab). Enthält „Essen“ ohne Adresse und „Mit Teilkasko meist kostenlos“, das als Quelle in den Notizen nicht aufgeführt ist. | Neue Description unten (153 Zeichen, nur belegte Aussagen). |
| M2 | E | shop.html:6, :7, :87 | Shop: Title ohne Entwurf und ohne Sortiment, `h1` „Shop.“ allein. Description nennt „Wischer-Montage“, laut Notizen Offen 5 nur Vorschlag. | Kopf und h1 unten. |
| M3 | E | index.html:9-11, shop.html (keine) | Kein `og:image`, `og:url`, `og:site_name`, `og:locale`, auf dem Shop gar keine OG-Tags. Wichtig schon jetzt, weil der Entwurf als Link per WhatsApp an den Kunden geht und dort ohne Vorschaubild erscheint. | OG-Block unten. Vorschaubild 1200 × 630 aus `vorschau/01-start-desktop.png` zuschneiden und unter `assets/img/` ablegen. |
| M4 | L | index.html:64, :71, :91, :343, :570-583, :630, :652; shop.html:46-71, :217; nginx.conf:49, :51 | Interne Links auf `shop.html` und `index.html`. Auf der Demo ist jeder Shop-Klick ein 301-Umweg (nginx.conf:49). `/index.html` und `/index` liefern die Startseite doppelt (try_files). | Im Entwurf so lassen (Doppelklick-Vorschau braucht `.html`). Zum Livegang beim Bauen umschreiben: `href="index.html` → `href="/`, `href="shop.html` → `href="/shop` (wie der vorhandene `sed`-Schritt im Dockerfile) und `/index.html` per `if ($request_uri …)` auf `/` umleiten (Block unten). **Nicht** `location = /index.html { return 301 /; }`: zusammen mit `index index.html` und `error_page 404 /index.html` ergibt das eine Endlosschleife auf `/` (lokal getestet). |
| M5 | L | beide Seiten | Kein `canonical`, keine `sitemap.xml`. Im Entwurf richtig (noindex). Die alte `sitemap.xml` listet nur 5 von mindestens 20 Adressen (Stadt- und Leistungsseiten fehlen). | Zum Livegang: selbstverweisender `canonical` je Seite, `sitemap.xml` mit allen indexierbaren Seiten, `Sitemap:`-Zeile in robots.txt. |
| M6 | E | index.html:56, :529-531, shop.html:38 | Essen erscheint als „Standort“ ohne Adresse. | Kein eigener LocalBusiness-Eintrag für Essen, solange die Adresse fehlt. Essen nur in `areaServed`. Danach `/autoglas-essen` als Standortseite (siehe unten). |
| M7 | E | index.html (oben), :660 | Auf der Startseite steht „Entwurf“ nur im Fußbereich, auf dem Shop oben (shop.html:86). Projektregel 1 verlangt eine Entwurfsleiste auf jeder Seite. | Beim Neubau oben auf beiden Seiten. Frontend-Thema. |
| M8 | E | shop.html:97, :266 | „Versand in ganz Deutschland“ und „PayPal, Karte, Klarna und Apple Pay“ sind nicht belegt (Offen 5 und 10). | Als Vorschlag kennzeichnen oder weglassen. Texter-Thema. |

### Niedrig

| # | Wann | Datei/Stelle | Befund | Vorgabe |
|---|---|---|---|---|
| N1 | E | nginx.conf:38-43 | `Disallow: /` sperrt Crawler aus, dadurch sehen sie den `noindex`-Header nicht. Eine fremd verlinkte Demo-URL könnte als nackte Adresse im Index landen. Für eine Demo vertretbar, beides bleibt laut Auftrag. | Wenn es dichter sein soll: HTTP-Basic-Auth in Coolify. Sonst so lassen. |
| N2 | L | deploy/coolify/README.md („Zeile X-Robots-Tag (dreimal)“) | Der Header steht nur einmal (nginx.conf:38). | Anleitung präzisieren, sonst sucht beim Livegang jemand zwei weitere Zeilen. |
| N3 | E | index.html:634-647, shop.html:221-233 | Fußbereich nutzt `h4` ohne `h3` davor. | Fußüberschriften als `h2` mit kleiner Optik oder als `p`. |
| N4 | E | index.html:476-489 | Kundenstimmen. | Nicht als `Review` oder `aggregateRating` auszeichnen: Bewertungen, die ein Unternehmen auf der eigenen Seite über sich selbst zeigt, bringen bei LocalBusiness keine Sterne, und eine belegte Gesamtzahl gibt es nicht. |
| N5 | E | index.html:597-607 | FAQ. | Kein `FAQPage` nötig, FAQ-Rich-Results zeigt Google nur noch für Behörden- und Gesundheitsseiten. Text als sichtbarer Inhalt reicht. |
| N6 | L | nginx.conf:54 | 404 zeigt die Startseite (Status bleibt 404). | Zum Livegang eigene 404-Seite mit Links zu Leistungen und Einsatzgebiet. |
| N7 | E | index.html:525 vs. :635 | „47166 Duisburg-Obermarxloh“ und „47166 Duisburg“. Kein Fehler. | Postanschrift überall „Duisburger Str. 150, 47166 Duisburg“, Ortsteil Obermarxloh als eigener Zusatz. |

## Vorgaben für den Neubau

### Kopfbereich Startseite (Entwurf)

```html
<title>Entwurf · Autoglas Duisburg: Steinschlag &amp; Scheibentausch | Autoglas Zentrum Aydin</title>
<meta name="description" content="Steinschlag-Reparatur, Scheibentausch und Kamera-Kalibrierung in Duisburg. Direkt mit jeder Versicherung abgerechnet, mobil bis 50 km. Foto per WhatsApp.">
<meta property="og:type" content="website">
<meta property="og:locale" content="de_DE">
<meta property="og:site_name" content="Autoglas Zentrum Aydin">
<meta property="og:title" content="Entwurf · Autoglas Zentrum Aydin, Autoglas in Duisburg">
<meta property="og:description" content="Steinschlag oder neue Scheibe? Foto per WhatsApp, Rückmeldung innerhalb von 24 Stunden. Wir rechnen direkt mit deiner Versicherung ab.">
<meta property="og:url" content="https://autoglasaydin.hk-growthoperator.de/">
<meta property="og:image" content="https://autoglasaydin.hk-growthoperator.de/assets/img/og-startseite.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

- Kein `canonical` im Entwurf (noindex reicht, ein canonical auf die echte Domain wäre ein Widerspruch).
- `og-startseite.jpg` gibt es noch nicht, siehe M3.
- Titel 82 Zeichen mit Entwurf-Vorsatz, 72 ohne. Der Suchbegriff steht vorn, ein Abschneiden trifft nur den Markennamen.
- Belege: 24 Stunden (alte Startseite: „wir garantieren eine Rückmeldung innerhalb von 24 Stunden“), Versicherung, 50 km, Kamera-Kalibrierung (alte `/leistungen`).

### h1 Startseite

Empfohlen (Gestaltungssatz bleibt, Ort und Leistung kommen ins h1):

```html
<h1 class="hero__titel display" id="hero-titel"><span>Scheibe</span> <span class="z2">kaputt?</span> <span class="hero__ort">Autoglas-Reparatur und Scheibentausch in Duisburg</span></h1>
```

Die dritte Zeile darf optisch klein sein, sie muss nur im `h1` stehen. Nur ein `h1` pro Seite.

### JSON-LD Startseite (ersetzt index.html:17-31)

Geprüft mit `json.loads`, gültiges JSON. Alle Werte aus `ENTWURF-NOTIZEN.md`, Agent-Fakten, alter Website oder Auftrag. `priceRange`, `aggregateRating`, `image`, `logo` bewusst weggelassen (unbelegt beziehungsweise noch kein Foto und kein Raster-Logo auf der Live-Domain).

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://autoglaszentrum-aydin.de/#website",
      "url": "https://autoglaszentrum-aydin.de/",
      "name": "Autoglas Zentrum Aydin",
      "inLanguage": "de-DE",
      "publisher": { "@id": "https://autoglaszentrum-aydin.de/#werkstatt" }
    },
    {
      "@type": "AutoRepair",
      "@id": "https://autoglaszentrum-aydin.de/#werkstatt",
      "name": "Autoglas Zentrum Aydin",
      "url": "https://autoglaszentrum-aydin.de/",
      "description": "Autoglas-Fachbetrieb in Duisburg-Obermarxloh: Steinschlag-Reparatur, Scheibentausch, Kamera-Kalibrierung und mobiler Service im Umkreis von 50 km. Direkte Abrechnung mit jeder Versicherung.",
      "telephone": "+49 203 36989833",
      "email": "Info@AutoglasZentrum-Aydin.de",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Duisburger Str. 150",
        "postalCode": "47166",
        "addressLocality": "Duisburg",
        "addressRegion": "Nordrhein-Westfalen",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.4906217,
        "longitude": 6.7808339
      },
      "hasMap": "https://maps.app.goo.gl/vNScVN2UxSXLt74x9",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:30",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        {
          "@type": "GeoCircle",
          "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 51.4906217, "longitude": 6.7808339 },
          "geoRadius": 50000
        },
        { "@type": "City", "name": "Duisburg" },
        { "@type": "City", "name": "Oberhausen" },
        { "@type": "City", "name": "Mülheim an der Ruhr" },
        { "@type": "City", "name": "Essen" },
        { "@type": "City", "name": "Moers" },
        { "@type": "City", "name": "Dinslaken" },
        { "@type": "City", "name": "Bottrop" },
        { "@type": "City", "name": "Voerde" },
        { "@type": "City", "name": "Rheinberg" },
        { "@type": "City", "name": "Kamp-Lintfort" },
        { "@type": "City", "name": "Neukirchen-Vluyn" },
        { "@type": "City", "name": "Gelsenkirchen" },
        { "@type": "City", "name": "Krefeld" },
        { "@type": "City", "name": "Wesel" },
        { "@type": "City", "name": "Düsseldorf" }
      ],
      "sameAs": ["https://www.instagram.com/autoglaszentrumaydin/"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Autoglas-Leistungen",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Steinschlag-Reparatur" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Frontscheibe tauschen", "description": "Neue Windschutzscheibe für alle Marken, 30 Jahre Garantie auf Dichtigkeit." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seitenscheibe und Heckscheibe ersetzen" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kamera-Kalibrierung nach dem Scheibentausch" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobiler Autoglas-Service im Umkreis von 50 km" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Scheiben für Wohnmobile" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Autoglas für Firmenkunden und Fuhrparks" } }
        ]
      }
    }
  ]
}
</script>
```

Herkunft `areaServed`: die 11 Städte aus dem Schema der alten Seite plus Voerde, Rheinberg, Kamp-Lintfort, Neukirchen-Vluyn (alte Stadtseiten, alle unter 50 km Luftlinie). Aachen und Düren fehlen absichtlich (H6). Bestätigt der Kunde Transporter, LKW oder US-Cars, kommt je ein `Service` dazu. Die Angaben `offers` enthalten bewusst keine Preise.

`url` und `@id` zeigen auf die echte Domain, auch auf der Demo. Das ist gewollt: Das Schema beschreibt den Betrieb, nicht den Demo-Server.

### Kopfbereich und h1 Shop (Entwurf)

```html
<title>Entwurf · Shop: Wischer, Scheibenpflege &amp; Winterzubehör | Autoglas Zentrum Aydin</title>
<meta name="description" content="Wischer passend nach Fahrzeugschein, Scheibenpflege und Winterzubehör. Online bestellen und in der Werkstatt in Duisburg abholen.">
<meta property="og:type" content="website">
<meta property="og:locale" content="de_DE">
<meta property="og:site_name" content="Autoglas Zentrum Aydin">
<meta property="og:title" content="Entwurf · Shop von Autoglas Zentrum Aydin">
<meta property="og:description" content="Wischer nach Fahrzeugschein, Pflege und Winterzubehör. Abholung in der Werkstatt in Duisburg.">
<meta property="og:url" content="https://autoglasaydin.hk-growthoperator.de/shop">
<meta property="og:image" content="https://autoglasaydin.hk-growthoperator.de/assets/img/og-shop.jpg">
```

```html
<h1 class="display" id="shop-titel">Shop. <span class="shop__ort">Wischer und Scheibenpflege, abholen in Duisburg</span></h1>
```

**Shop-Schema im Entwurf: keines.** Kein `Product`, kein `Offer`, kein `AggregateOffer`, keine Preise in strukturierten Daten, solange Sortiment und Preise Beispiele sind. Das gilt auch für die drei Preisetiketten im Shop-Teaser der Startseite (index.html:573-586). Zum Livegang mit echtem Shopsystem: `Product` mit `Offer` je Artikel (`price`, `priceCurrency` EUR, `availability`), dazu `shippingDetails` und `hasMerchantReturnPolicy`. Shopify, WooCommerce und Shopware setzen das meist selbst, dann nicht zusätzlich von Hand auszeichnen.

### Änderungen erst zum Livegang

1. „Entwurf · “ aus beiden Titeln und `og:title` entfernen, Entwurfsleisten entfernen.
2. `<link rel="canonical" href="https://autoglaszentrum-aydin.de/">` beziehungsweise `…/shop`, `og:url` auf die echte Domain.
3. JSON-LD um `image` (Werkstattfoto aus dem Shooting) und `logo` (Raster, mindestens 112 × 112 px) ergänzen, beides als absolute URL auf der echten Domain.
4. nginx.conf: Zeile 38 (`X-Robots-Tag`) entfernen, Block 40-43 durch echte robots.txt ersetzen (`Allow: /` plus `Sitemap: https://autoglaszentrum-aydin.de/sitemap.xml`).
5. `sitemap.xml` mit allen indexierbaren Seiten, Weiterleitungen aus der Tabelle unten, `www` auf die Domain ohne `www` umleiten (die alte Seite nutzt `https://autoglaszentrum-aydin.de/` als canonical).
6. Interne Links auf saubere Adressen umschreiben (M4).
7. Google-Unternehmensprofil, Bing Places und Apple Business Connect: NAP und Öffnungszeiten gegen die Website prüfen (H5), Website-Link bleibt `https://autoglaszentrum-aydin.de/`.
8. Essen mit Adresse: `/autoglas-essen` wird Standortseite mit eigenem `AutoRepair` (`@id` `https://autoglaszentrum-aydin.de/autoglas-essen#standort`, eigene Adresse, eigene Öffnungszeiten, eigenes `geo`) und eigenem Google-Profil. Gummersbach genauso, sobald eröffnet.

## Weiterleitungen und Seiten für den Livegang

Alte Adressen, erfasst am 10.11.2026 aus Startseite (Links) und `sitemap.xml` der alten Website. Status 200 selbst geprüft nur für `/`, `/leistungen`, `/autoglas-aachen`; die übrigen sind auf der alten Startseite verlinkt, aber nicht einzeln abgerufen. Vor dem Livegang die vollständige Liste aus der Search Console (Leistung je Seite) holen, die alte Sitemap ist unvollständig.

„Empfohlen“ heißt: Seite unter **gleicher URL** neu bauen, dann braucht es keine Weiterleitung. Die nginx-Regel `try_files $uri $uri.html` liefert z. B. `steinschlag-reparatur-duisburg.html` schon unter der sauberen Adresse aus. „Mindestens“ ist die 301, falls die Seite nicht rechtzeitig fertig wird.

| Alte URL | Alter Title/h1 (wo abgerufen) | Empfohlen | Mindestens (301 nach) |
|---|---|---|---|
| `/` | Autoglas Duisburg \| Autoglas Zentrum Aydin | neue Startseite | bleibt |
| `/leistungen` | Autoglas-Leistungen in Duisburg | Übersicht Leistungen, verlinkt auf die Leistungsseiten | `/#leistungen` |
| `/windschutzscheibe-wechseln-duisburg` | (nicht abgerufen) | eigene Leistungsseite Frontscheibe | `/#leistungen` |
| `/steinschlag-reparatur-duisburg` | (nicht abgerufen) | eigene Leistungsseite Steinschlag, mit 2-Euro-Test | `/#leistungen` |
| `/uber-uns` | (nicht abgerufen) | Über uns mit Fotos vom Shooting | `/` |
| `/impressum` | | Pflichtseite, gleiche URL | keine 301, muss da sein |
| `/datenschutz` | | Pflichtseite, gleiche URL | keine 301, muss da sein |
| `/autoglas-essen` | (nicht abgerufen) | Standortseite Essen, sobald Adresse belegt | `/#gebiet` |
| `/autoglas-oberhausen` | | Stadtseite (5,8 km) | `/#gebiet` |
| `/autoglas-muelheim-an-der-ruhr` | | Stadtseite (9,9 km) | `/#gebiet` |
| `/autoglas-dinslaken` | | Stadtseite (8,4 km) | `/#gebiet` |
| `/autoglas-moers` | | Stadtseite (10,6 km) | `/#gebiet` |
| `/autoglas-bottrop` | | Stadtseite (10,9 km) | `/#gebiet` |
| `/autoglas-voerde` | | Stadtseite (13,5 km) | `/#gebiet` |
| `/autoglas-rheinberg` | | Stadtseite (13,9 km) | `/#gebiet` |
| `/autoglas-kamp-lintfort` | | Stadtseite (16,2 km) | `/#gebiet` |
| `/autoglas-neukirchen-vluyn` | | Stadtseite (17,1 km) | `/#gebiet` |
| `/autoglas-krefeld` | | Stadtseite (21,7 km) | `/#gebiet` |
| `/autoglas-aachen` | Autoglas-Service in Aachen (93 km, Seite nennt 100 km) | nur bei 100-km-Zusage (H6) | `/#gebiet` |
| `/autoglas-dueren` | (nicht abgerufen, 79 km) | nur bei 100-km-Zusage (H6) | `/#gebiet` |
| neu: `/shop` | | Shop | `/shop.html` → `/shop` besteht schon |

Entfernungen: Luftlinie von der Werkstatt, berechnet aus den Koordinaten in assets/js/site.js. Sie dürfen auf den Stadtseiten stehen, weil sie nachrechenbar sind.

Stadtseiten nur mit eigenem Inhalt bauen (Swap-Test: Ist die Seite nach Austausch des Stadtnamens noch richtig, ist sie eine Brückenseite und schadet eher). Belegbares je Stadt: Entfernung, mobiler Service dort ja oder nein, Weg zur Werkstatt, echte Fälle aus der Stadt (nur mit Freigabe des Kunden). Alle Stadtseiten verlinken auf die Leistungsseiten und zurück auf die Startseite. Eine 301 auf `/#gebiet` landet bei Google als Weiterleitung auf `/` und kann als „Soft 404“ gewertet werden; für die stärksten Stadtseiten (laut Search Console) lohnt der Neubau.

Mindestlösung als nginx-Block, einzufügen im `server`-Block vor `# Saubere Adressen`. Lokal geprüft am 10.11.2026 mit nginx 1.24 (Image nutzt 1.27, gleiche Regeln) auf Basis der aktuellen nginx.conf: `nginx -t` fehlerfrei, `/` 200, `/index.html` und `/index` 301 nach `/`, `/leistungen` und `/leistungen/` 301 nach `/#leistungen`, `/autoglas-moers` und `/autoglas-aachen/` 301 nach `/#gebiet`, `/shop` 200, `/shop.html` 301 nach `/shop`, unbekannte Adresse 404, `X-Robots-Tag` bleibt auch auf den 301-Antworten. Im Coolify-Image noch nicht getestet.

```nginx
# Livegang: alte Adressen ohne neue Seite. Jede Zeile entfernen, sobald die Seite gebaut ist.
# /index.html nur bei echter Anfrage umleiten ($request_uri), sonst Schleife mit "index" und "error_page".
if ($request_uri ~ "^/index(\.html)?(\?|$)") { return 301 /; }
location ~ ^/leistungen/?$ { return 301 /#leistungen; }
location ~ ^/(windschutzscheibe-wechseln-duisburg|steinschlag-reparatur-duisburg)/?$ { return 301 /#leistungen; }
location ~ ^/uber-uns/?$ { return 301 /; }
location ~ ^/autoglas-(essen|oberhausen|muelheim-an-der-ruhr|dinslaken|moers|bottrop|voerde|rheinberg|kamp-lintfort|neukirchen-vluyn|krefeld|aachen|dueren)/?$ { return 301 /#gebiet; }
```

## Offene Fragen an den Kunden (SEO-relevant)

1. Telefon …833 oder …837, Öffnung 9:30 oder 6:30 (H5).
2. Einzugsgebiet 50 oder 100 km, also Aachen und Düren ja oder nein (H6).
3. Transporter, LKW, US-Cars als Leistung bestätigt (H7)?
4. Adresse und Öffnungszeiten Essen, Zeitraum Gummersbach.
5. Zugang zur Search Console der alten Seite (welche Unterseiten bringen Klicks) und zum Google-Unternehmensprofil (Kategorie, NAP, Fotos).

## Grenzen dieser Prüfung

Nicht geprüft: Google-Unternehmensprofil, Bewertungen, Verzeichniseinträge, Rankings, Backlinks, Search-Console-Daten. Abrufe alte Website (10.11.2026): `robots.txt`, `sitemap.xml`, `/`, `/leistungen`, `/autoglas-aachen`. Abrufe Demo: Kopfzeilen von `/` und `/shop`, `/robots.txt`. Statistiken über das Geschäft gibt es hier keine, Zahlen zu Entfernungen sind aus Koordinaten berechnet.
