# Art-Direktion · Neugestaltung Startseite Autoglas Zentrum Aydin

Stand 10.11.2026 · Art-Direktor · Grundlage: Skill `design-taste-frontend`, `ENTWURF-NOTIZEN.md` (einzige Faktenquelle), Vorher-Messung `.taste-skill/before/`.
Gezogene Richtung: `.taste-skill/richtung.md` (Blatt + Nachtrag mit Redraws). Code wurde nicht geändert.

Lesart des Auftrags: Der Kunde findet den Entwurf „zu generisch“. Gemeint ist nicht die Farbe, sondern dass die Seite aus den Bausteinen des typischen lauten Lokalbetriebs besteht (Riesen-Kursiv-Versalien auf Rot, gezeichnete Scheibe, Etiketten über jeder Überschrift, 01-bis-09-Liste, Kassenbons, Handy-Attrappe, Kachelreihen). Neugestaltung heißt: gleiche Inhalte und Funktionen, neue Komposition, neues Argument, echte Bilder.

---

## 1. Kritik Ist-Stand

Gesehen wurden alle gelisteten Screenshots: `desktop-fold`, `desktop-page-01..03`, `tablet-fold`, `tablet-page-01..02`, `mobile-fold`, `mobile-page-01..02`. Die Aufnahmen reichen bis „Jede Scheibe hat ihre Form“ (12 von 18,6 Bildschirmen). Stimmen, Karte, Instagram, Shop-Teaser, FAQ und Schluss sind auf keinem Screenshot und werden hier nicht bewertet.

```
ROUND 0 (Ist-Stand, .taste-skill/before)
Seen in one second: „SCHEIBE KAPUTT?“ in riesigen weißen Kursiv-Versalien auf Rot, daneben eine gezeichnete Windschutzscheibe.
Idea (one sentence): Werkstattplakat in Logorot, das Glas zeigt statt darüber zu reden; deckt man das Logo ab, passt das Plakat zu jedem Autoglas-Betrieb, und ab dem zweiten Bildschirm wird es zur Folge von Standardblöcken.
Live thing: 2-Euro-Test (echte Regel, echtes Ergebnis mit WhatsApp-Link), aber zerlegt in drei nummerierte Schritte in einer dunklen Karte, Text darin 11–14 px.
Layout words by section: hero=split-poster / laufband=marquee / test=zwei-karten-split / riss=gepinnt-vollflächig (3 Screens) / leistungen=nummerierte Indexliste / kosten=split+bons+kachelwand / ablauf=handy-attrappe+nummerierte Schritte / formen=kachelreihe (6 gleiche)
Scores: design 5 · usability 5 · creativity 6 · content 6.5 → overall 5.4
Caps applied: inspect-FAIL vorhanden (≤ 6.0); Etiketten, 01/02-Nummern, Schatten in Ruhe, Haarlinien, Verlauf (≤ 6.5); 0 echte Bilder gezählt (design ≤ 6.5); leerer Bereich, weil der Chat nicht eingeblendet wurde (usability ≤ 5); Text unter verdeckendem Element (usability ≤ 6); Pass 3, Seite könnte einem Wettbewerber gehören (creativity ≤ 6). Bindend: usability 5, creativity 6.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. Die Idee ist die der Branche, nicht die des Betriebs (desktop-fold, desktop-page-02, desktop-page-03): Riesen-Versalien auf Rot und gezeichnete Scheibe könnten bei jedem Glaser stehen; danach öffnet jeder Abschnitt mit einem kleinen roten Versal-Etikett (14 Etiketten, 33 Mini-Versalien gemessen) und Nummern (01–09 in Leistungen, 1–4 im Ablauf), dazu sechs gleiche Kacheln „PKW/SUV/…“. Fix: neue Richtung (Abschnitt 4), die Sätze, Leute und den Ort des Betriebs trägt; Etiketten und Nummern ersatzlos weg.
2. Keine Hierarchie in der Schrift (desktop-page-01 Test, tablet-page-01, mobile-page-01): 31 Schriftgrößen, 3 Schriftfamilien (Sofia Sans, Condensed, Extra Condensed), fast alles kursiv; 22 Textblöcke unter 13 px (Reglerskala „1 mm / 2-Euro-Münze ≈ 26 mm / 40 mm“, Tacho-Beschriftung, Bons), Fließtext im Test und in „Was kostet dich das?“ grau und um 14 px. Fix: eine Superfamilie, fünf Größen, aufrecht, Fließtext ≥ 17 px in voller Tinte.
3. Der Riss-Abschnitt und der Chat brechen (desktop-page-01 unten rechts, desktop-page-02 oben, desktop-page-03 unten links, tablet-page-02): drei Bildschirme fast leerer dunkler Fläche (Füllgrad 0,31 und 0,28) mit gepinntem Text, der 75–100 % verdeckt wird („Tag 1: Klack. 4 mm.“, „Woche 3: Frost.“); die Handy-Attrappe im Ablauf ist auf allen Breiten leer, weil die Einblendung nicht feuert. Fix: Scroll-Szene streichen, ihre Aussage in Test-Ergebnis und FAQ; Chat als echter, sofort sichtbarer Inhalt.
```

Weitere Messwerte aus `before/report.json` (für den Vorher-Nachher-Vergleich): 12 FAIL, 12 WARN. FAIL: eyebrow (14), numbering, micro-label (33), shadow (19), button-fx (Verlauf), hairline (13), contrast („Gummersbach bald“ 2:1), few-pictures (0 echte Bilder gezählt), small-text (22), covered-text, edge-text („Steinschlag 4 mm“ 0 px vom Rand), gradient (Barcode der Bons). WARN u. a.: font-count 3, size-count 31, palette-cream (#f6f3ee), card-rows 5, side-scroll, lopsided (618 px leer neben dem Test-Kopf), long-pin, no-footage. Seitenränder 60 px (Skill: 16–32 px), Seitenhöhe 18,6 Bildschirme.

Formaler Mangel unabhängig vom Design: `index.html` hat keine Entwurfsleiste und kein „Entwurf“ im `<title>` (CLAUDE.md Regel 1). `noindex` ist in `deploy/coolify/nginx.conf` vorhanden.

---

## 2. Inventar: was nur diesem Betrieb gehört

Status: **belegt** = in `ENTWURF-NOTIZEN.md` oder auf den eigenen Instagram-Bildern im Projekt sichtbar. **prüfen** = plausibel, aber vor Verwendung als Aussage klären.

| # | Ding | Status |
| --- | --- | --- |
| 1 | Das Logo: weiße Wortmarke (Montserrat, Versalien) auf rotem Feld #FE0000. Das rote Rechteck ist das Erkennungszeichen. | belegt |
| 2 | Duisburger Str. 150, 47166 Duisburg-Obermarxloh (Koordinaten 51.4906, 6.7808). Eine Werkstatt, eine Hausnummer. | belegt |
| 3 | Ihr eigener Spruch auf dem Flyer: „SCHEIBE KAPUTT? Schick uns einfach ein Foto per WhatsApp.“ und die Zeile „Klarer Service. Starke Mobilität.“ | belegt (`assets/img/ig-post-seitenscheibe.jpg`) |
| 4 | Der Ton aus den Reels: „Hi Bruder, alles klar?“, „Ey warte mal, wohin du musst“. | belegt (`ig-reel-handschlag.jpg`, `ig-reel-werkstatt.jpg`) |
| 5 | WhatsApp 0176 20908479 als Hauptkanal, Telefon 0203 36989833. „Antwort garantiert in 24 Stunden“ steht im Entwurf, ist aber nicht in der Quellenliste. | Nummern belegt (Telefon mit Vorbehalt …833/…837); 24 h **prüfen** |
| 6 | Die Halle und die Leute: Mitarbeiter in Weiß mit roten Umhängebändern, ein Mann im roten Pullover am Schreibtisch, rote Tür, Lochwand mit Werkzeug, Banner „& Zubehör“. Rot ist schon ihre Arbeitskleidung. | Bilder belegt; Namen und Rollen („Chef“) **prüfen**; Glasmarke am Aufsteller nicht behaupten |
| 7 | 2-Euro-Regel (kleiner als die Münze, nicht vor dem Fahrer, nicht am Rand: reparieren) und Klebeband-Tipp. Regel ist branchenweit, die Formulierung ist ihre. | belegt |
| 8 | 30 Jahre Garantie auf Dichtigkeit. | belegt |
| 9 | Kamera-Kalibrierung nach dem Tausch. | belegt |
| 10 | Mobil bis 50 km um Duisburg; Kreis um genau diese Hausnummer. | belegt |
| 11 | Teilkasko: „Steinschlagreparatur in der Regel 100 % kostenlos“, Beitrag steigt nicht; direkt abgerechnet mit 12 Versicherern (Logos). | belegt (`ig-post-versicherung.jpg`, Versichererliste) |
| 12 | Marxloh drumherum: „In der Nähe gibt es viele Restaurants und Cafés“ (Kundenstimme Theorist). Marxloher Brautmodenmeile, Schwelgernpark, A59 (Anschluss Duisburg-Marxloh) und A42 in der Nähe. | Kundenstimme belegt; Lage der übrigen **prüfen** (A59 im alten Text nur als Beispiel) |
| 13 | Pkw bis Lkw, Wohnmobile, US-Cars. | belegt (Flyer) |
| 14 | Mo bis Sa 9:30 bis 18:00; Essen (Adresse fehlt), Gummersbach bald. | belegt mit Vorbehalt (6:30 in einem Verzeichnis) |
| 15 | „Aydin“ als Name der Inhaberfamilie. | **prüfen**, nicht verwenden |

---

## 3. Argument der Startseite

Leser: Autofahrer im Raum Duisburg/Ruhrgebiet, meist am Handy, mit einem Steinschlag oder Riss, unsicher was es kostet. Eine Sache, die sie tun sollen: ein Foto per WhatsApp schicken (oder anrufen).

| Abschnitt | Behauptung | Beleg auf der Seite |
| --- | --- | --- |
| Start | Scheibe kaputt? Schick uns ein Foto, wir sagen dir, was es ist. | Ihr Flyer-Spruch, Foto einer Windschutzscheibe im Satz, roter WhatsApp-Knopf, Telefon, „heute bis 18 Uhr offen“, Adresse |
| 2-Euro-Test | Ob reparieren oder neue Scheibe, sagt dir die 2-Euro-Münze in zehn Sekunden. | Der Test selbst: Münze, dein Schaden in deiner Größe, Ergebnis mit Kosten und Dauer, Knopf mit vorausgefülltem Text |
| Kosten | Mit Teilkasko zahlst du für die Reparatur in der Regel nichts, beim Tausch deine Selbstbeteiligung, der Beitrag steigt nicht. | „0 €“ auf dem roten Logofeld, Satz zur SB, 12 Versicherer-Logos, fester Preis ohne Teilkasko |
| Leistungen | Alles, was an Glas am Auto passiert, machen sie, vom Pkw bis zum US-Car, 30 Jahre dicht. | Tabelle mit 10 Zeilen, jede eine WhatsApp-Anfrage; Foto aus der eigenen Halle |
| Ablauf | Ein Foto reicht, den Rest machen sie, im Ton von „Hi Bruder, alles klar?“. | Vier Sätze als Treppe, darunter die passenden Chat-Blasen (als Beispiel gekennzeichnet); Handschlag-Foto aus dem Reel |
| Stimmen | Kunden bestätigen: schnell, ohne Papierkram. | Die 6 echten Stimmen, eine groß, fünf darunter |
| Standorte | Sie kommen zu dir, 50 km um Duisburger Str. 150. | Karte mit Radius, Umkreisprüfer, Adresse als Displayzeile, Essen, Gummersbach |
| Shop | Wischer und Winterkram gibt es jetzt online. | 6 bis 8 Glas-Fotos um die Überschrift, Link zum Shop |
| FAQ | Die Fragen, die jeden Tag kommen, sind offen beantwortet. | 7 Fragen, alle Antworten sichtbar |
| Schluss | Anrufen oder schreiben, beides geht. | Zwei Knöpfe, Öffnungszeiten |

Gestrichen, weil ohne eigene Behauptung oder doppelt: Statusleiste oben (wandert in den Start), Laufband (doppelt zur Logo-Wand), Riss-Szene (Aussage wandert in Test und FAQ), Kassenbons (Aussage trägt der Kosten-Satz), „Jede Scheibe hat ihre Form“ (wird eine Zeile in Leistungen), Instagram-Abschnitt als eigener Block (Fotos wandern in Leistungen, Ablauf, Standorte; Instagram-Link im Fuß und bei Gummersbach).

---

## 4. Richtung

Sektor: `other` (es gibt keinen Sektor für örtliche Handwerks-/Dienstleistungsbetriebe; `physical-product` hätte Richtungen gezogen, die Produktfotos brauchen, die es nicht gibt). Kein `--have`: die Instagram-Ausschnitte sind eigene Fotos, aber 508–624 px aus Screenshots, kein Bestand für vollflächige Bilder.

Ausgeteilt (`--options 3`): `type-only-statement`, `dense-tiles`, `sentence-as-layout`.

Gewählt: **The sentence is the layout** (`sentence-as-layout`), Seed 304284749.
Grund gegen das Inventar: Der Betrieb spricht schon in Sätzen (Flyer: „Scheibe kaputt? Schick uns einfach ein Foto per WhatsApp.“, Reels: „Hi Bruder, alles klar?“), und die eine Handlung der Seite ist, ein Foto zu schicken. Ein Satz, in dem an der Stelle eines Wortes das Ding selbst steht (das Foto, die Münze, der Preis, die Adresse), macht ihren Kanal und ihren Ton zur Komposition.
Verworfen: `type-only-statement`, weil eine reine Typo-Startseite den alten Eindruck „große Wörter auf Rot“ wiederholt und Leute und Halle weglässt. `dense-tiles`, weil ein Kachelbrett wie ein Bento-Raster aus der Software-Welt wirkt und die eine Handlung zwischen vielen gleich großen Feldern verliert.

Redraws (5, je mit Grund, Tabelle im Nachtrag von `richtung.md`): Schrift (Erode → Barlow Condensed/Barlow), Hero (Title in the sky → Photograph for a letter), showcase (→ Object on a disc), how-it-works (→ Lines that step across), gallery (→ Photographs gathered round a heading).

---

## 5. Idee

> Auf dieser Seite wird **der WhatsApp-Ton der Werkstatt aus Obermarxloh („Scheibe kaputt? Schick uns einfach ein Foto“, „Hi Bruder, alles klar?“, „Komm vorbei, Duisburger Str. 150“)** zu **kurzen Sätzen in Plakatgröße, in denen an der Stelle eines Wortes das Ding selbst steht: das Foto der Scheibe, die 2-Euro-Münze, der Preis auf dem roten Logofeld, die Adresse.**

Konkurrenztest: Setzt man Carglass, Junited oder Wintec ein, bricht der Satz an zwei Stellen, am Ton („Hi Bruder“ ist ein Inhaber-Betrieb im Viertel, keine Kette) und am Ort (eine Werkstatt, eine Hausnummer, ein 50-km-Kreis um genau diese Adresse, Marxloher Cafés gegenüber). Ehrlich: Die Geräte allein (Foto im Satz, die 2-Euro-Regel, Foto per WhatsApp) könnte auch ein Wettbewerber nutzen. Die Seite gehört Aydin nur, wenn jede Zeile ihr Material trägt: ihre Sätze, ihre Leute aus den Reels, ihre Adresse, ihr rotes Feld. Daran ist jeder Abschnitt zu messen.

Das rote Rechteck als roter Faden: Logofeld oben links (klein), „0 €“ auf dem roten Block im Kosten-Satz, das ganze Schlussfeld in Rot, am Ende das Logofeld in voller Breite. Ein Zeichen, vier Größen.

**Das eine interaktive Element: der 2-Euro-Test.** Die 2-Euro-Münze ist die große Scheibe des Abschnitts. Auf ihr liegt der Steinschlag, gezeichnet, in der Größe, die du am Regler einstellst (Maßstab: Münze = 25,75 mm). Bleibt der Schaden innerhalb der Münze und wählst du nicht „vor dem Fahrer“, „am Rand“ oder „schon ein Riss“, heißt es „Das reparieren wir.“ Wächst er über den Münzrand hinaus oder läuft ein Riss heraus, bricht die Zeichnung den Rand der Münze, und das Ergebnis heißt „Da muss eine neue Scheibe rein.“ Ergebnis mit Kosten, Dauer, Klebeband-Tipp und Knopf, der WhatsApp mit dem Testergebnis im Text öffnet. Echter Inhalt (ihre Regel), am Handy mit dem Daumen bedienbar, ohne Skript sichtbar mit Standard-Ergebnis, blockiert nichts. Der Umkreisprüfer bei der Karte bleibt als Funktion, wird aber ruhig gebaut (Formular und Ergebniszeile, kein zweites Spielzeug).

---

## 6. Bauanweisung für den frontend-bauer

Gilt nur für `index.html` mit `assets/css/site.css` und `assets/js/site.js`. `site.css` wird auch von `shop.html` geladen: nach dem Umbau `shop.html` öffnen und prüfen, dass nichts bricht; Shop-Neugestaltung ist ein eigener Schritt. Texte kommen vom `texter`; unten stehende Sätze sind Arbeitssätze mit Zeichenbudget, keine Endfassung.

Vor dem Bauen lesen: `.taste-skill/richtung.md` ganz, `references/layout.md` §2–§5, `references/type.md`, `references/motion.md` (Rezept „Image shutter“), `references/imagery.md` §5, §7, §10.

### 6.1 Tokens

**Farbe** (Marke behalten, Proportionen aus der Richtung: ruhiger Grund, volle Tinte, Akzent auf der Handlung):

| Rolle | Token | Wert | Hex ca. | Einsatz |
| --- | --- | --- | --- | --- |
| Grund | `--grund` | `oklch(0.968 0.003 230)` | #F2F5F6 | Seitengrund, kühles Glasweiß, ausdrücklich kein Creme |
| Fläche | `--flaeche` | `oklch(0.925 0.004 230)` | #E4E7E8 | Tonstufe für Kosten und Stimmen; trennt Flächen statt Linien |
| Tinte | `--tinte` | `oklch(0.185 0.012 28)` | #181110 | Fließtext, Überschriften, dunkle Knöpfe (17:1 auf Grund) |
| Tinte weich | `--tinte-2` | `oklch(0.42 0.012 30)` | #534B49 | Nebentexte, nicht gewählte Testantworten (7,8:1 auf Grund, 6,8:1 auf Fläche) |
| Rot | `--rot` | `oklch(0.555 0.225 28.5)` | #D8070D | Bildschirmfassung des Logorots: Hauptknopf „Foto per WhatsApp“, Logofeld, Preisblock, Schlussfeld. Weiß darauf 5,3:1 |
| Asphalt | `--asphalt` | `oklch(0.185 0.012 28)` | #181110 | Feld für Standorte und Fuß |
| Auf dunkel | `--auf-dunkel` / `--auf-dunkel-2` | `oklch(0.968 0.003 230)` / `oklch(0.78 0.008 40)` | #F2F5F6 / #BCB6B3 | Text auf Asphalt (17:1 / 9,3:1) |
| Münze | `--silber` / `--gold` | bestehende Werte `oklch(0.86 0.008 250)` / `oklch(0.8 0.115 84)` | | nur die gezeichnete Münze, flach, ohne Verlauf |

#FE0000 nicht als Fläche mit Text verwenden (Weiß darauf nur 4,0:1). Entfällt: Kreide-Töne (Creme-Warnung), `--glas*`, `--gruen`, alle Verläufe und Schatten.

**Schrift** (aus dem Blatt): Barlow Condensed 700 für Anzeige und Überschriften, Barlow 400 und 500 für Text. Google Fonts, SIL Open Font License, lokal hosten wie bisher: `woff2` für `latin` und `latin-ext` in `assets/fonts/`, `@font-face` in `fonts.css`, Vorladen nur Barlow Condensed 700 latin. Sofia Sans aus `fonts.css` und `<link rel="preload">` entfernen. Höchstens diese zwei Familien. Keine Kursive irgendwo.
Setzung: Anzeige Tracking −0,02em, Zeilenabstand 0,9 (zweizeilig 0,95); Text Zeilenabstand 1,5, Tracking 0, Maß 45–75 Zeichen. **Satzschreibung statt Versalien** (Abweichung vom Typo-Blatt „uppercase for statements“): Die Idee sind gesprochene Sätze, und Barlow ist eine Verkehrsschild-Schrift, die auf Autobahnschildern auch gemischt geschrieben wird; die Versalien-Kursive war Teil des alten Plakat-Looks.

**Größen, genau fünf:**
```css
--step-small:   clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);  /* 13–14: Navigation, Rechtliches, Bildnachweis */
--step-body:    clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem);   /* 17–19: Fließtext, Tabellenzeilen, Knöpfe */
--step-lead:    clamp(1.25rem, 1rem + 1vw, 1.875rem);          /* 20–30: Stützsätze, FAQ-Fragen, Testantworten */
--step-head:    clamp(2.5rem, 1.2rem + 5vw, 5.5rem);           /* 40–88: Abschnittsüberschriften, Ablauf-Zeilen */
--step-display: clamp(4.5rem, 1rem + 9vw, 10.5rem);            /* 72–168: Start-Satz, Kosten-Satz, Adresse, Schlussfrage, große Stimme */
```
Zeilen, die eine Breite füllen sollen (Start-Satz, Adresse), per Messung einpassen (kleines Skript oder SVG `textLength`), nicht per geratenem vw-Wert. Faustwert für Barlow Condensed 700: k ≈ 0,43 (Zeichen pro Zeile ≈ Breite ÷ (Schriftgröße × 0,43)).

**Raster und Abstände:** `--rand: clamp(1rem, 2.2vw, 2rem)` (heute 60 px, künftig 16–32 px), 12 Spalten, `--gutter: clamp(0.75rem, 1.4vw, 1.5rem)`. Kopf und Inhalt auf denselben Rändern. Abschnitte 160–200 px Abstand am Desktop, 72–112 px am Handy. Höchstens drei linke Kanten auf der ganzen Seite: Rand, Spalte 6, Spalte 8.

**Komponenten:** Ein Radius für alles: 0 (Knöpfe, Bilder, Karte, Münze ist rund, weil sie rund ist). Knöpfe flach, eine Füllung, mindestens 48 px hoch, Beschriftung `--step-body` 500, ohne Pfeil außer höchstens am Hauptknopf. Hauptknopf überall gleich benannt: „Foto per WhatsApp“, Fläche `--rot`, Text weiß. Zweitaktion als Textlink. Keine Rahmen, keine Linien, keine Schatten in Ruhe, keine Verläufe, keine Etiketten über Überschriften, keine Nummern, keine Mini-Versalien. Ausnahme `data-ui`: nur die Chat-Blasen im Ablauf (eigene Rundungen erlaubt, CSS unter `[data-ui]`). Formularfelder (Umkreisprüfer, Regler) dürfen ihre Linie behalten.

**Entwurf erkennbar:** Leiste ganz oben auf `--flaeche`, `--step-small`, Tinte: „Entwurf von HK Growth Operator für Autoglas Zentrum Aydin · Stand 10. November 2026 · nicht öffentlich“. `<title>` beginnt mit „Entwurf · “.

### 6.2 Abschnitte in Reihenfolge, je mit Blaupause

Neben jedem Abschnitt eine andere Komposition; Wortliste der Layouts: satz-mit-bild / scheibe-index / farbfeld-satz / tabelle-rechts / treppe / zitat-band / inverses-feld-karte / versammelte-bilder / tabelle-fragen / feld-frage / fuß-mit-name. Kein Wort doppelt.

1. **Start** · Blaupause Hero „Photograph for a letter“ (Grund `--grund`, 100svh).
   Kopfzeile: oben links das Logo als rotes Rechteck mit weißer Wortmarke (`#wortmarke` unverändert), ca. 170–200 px breit, auf `--rand`; rechts bis zu fünf Textlinks in `--step-small`: Kosten, Leistungen, Ablauf, Standorte, Shop (ohne „NEU“-Plakette). Keine schwarze Statusleiste mehr, kein separater Kopf-Knopf.
   Mitte, genau auf halber Höhe, eine Zeile `h1` über 78–88 % der Breite: „Scheibe [Bild] kaputt?“ (15 Zeichen + Bild). Das Bild sitzt im Wortzwischenraum als Querformat, eine x-Höhe hoch, ca. 1,6em breit, auf der Grundlinie, `object-fit: cover`, eckig. Grob 140–150 px Schriftgröße bei 1440.
   40 px darunter, ab Spalte 6: Stützsatz in `--step-lead`, max. 44 Zeichen pro Zeile, sagt, was das ist (Arbeitssatz: „Autoglas-Werkstatt in Duisburg-Obermarxloh. Schick uns ein Foto, wir sagen dir, was es kostet.“). Auf derselben Grundlinie rechtsbündig der Hauptknopf „Foto per WhatsApp“ (Blaupause hat Textlink, laut Blatt angepasst zu echtem Knopf).
   Unten an den Rändern wie ein Passepartout: links „Heute bis 18 Uhr offen · Duisburger Str. 150“ (Live-Status aus `site.js`, ohne Punkt-Symbol), rechts „oder anrufen: 0203 36989833“ als Link, beides `--step-body`.
   Handy: zwei zentrierte Zeilen bei ca. 19vw, das Bild als 3:2-Rahmen in voller Breite zwischen „Scheibe“ und „kaputt?“, Stützsatz und Knopf (volle Breite) darunter, Links werden zu „Menü“. Falls `inspect.mjs` die `h1` dadurch als mehr als zwei Zeilen misst: Bild unter die zweite Zeile setzen.
   Ersetzt: Statusleiste, Kopf, Hero mit gezeichneter Scheibe, Laufband.

2. **2-Euro-Test** · Blaupause „Object on a disc“ (geliehen; Grund `--grund`, ca. 100svh).
   Die Scheibe der Blaupause ist die 2-Euro-Münze, flach gezeichnet (Ring `--silber`, Kern `--gold`, große „2“, keine Radialverläufe, keine Sterne-Details nötig), 56–64vh Durchmesser, Mittelpunkt bei 58 % der Breite. Davor, zentriert, der gezeichnete Steinschlag in Weiß und Tinte, Größe = Reglerwert × (Münzdurchmesser ÷ 25,75 mm). Über 25,75 mm oder bei „schon ein Riss“ laufen Risslinien über den Münzrand hinaus (das „breaking the outline“ der Blaupause).
   Unten links, vom Rand bis auf Höhe des Münz-Unterrands: senkrechte Liste in `--step-lead`. Erste Zeile ist die `h2` in `--tinte-2`: „Reparieren oder tauschen?“. Darunter vier Antworten als Radiogruppe in derselben Größe: „Steinschlag auf der Beifahrerseite“, „Steinschlag vor dem Fahrer“, „Steinschlag am Rand“, „Da läuft schon ein Riss“. Gewählt = `--tinte` plus Gewicht, nicht gewählt = `--tinte-2` voll deckend (kein Ausblassen).
   Unter der Münze, auf ihrer Breite: Regler „Wie groß?“ mit Ausgabe „6 mm“ in `--step-lead` (Skala 1 bis 40 mm als `aria-describedby`-Text in `--step-body`, nicht 11 px).
   Rechts neben dem Münzrand, Spalte mindestens 34 Zeichen breit: das Ergebnis als Satz in `--step-lead` 500 („Das reparieren wir.“ / „Da muss eine neue Scheibe rein.“), darunter in `--step-body` Kosten, Dauer, Wo, der Klebeband-Tipp und der Hauptknopf (WhatsApp mit Testergebnis im Text). Keine `dl`-Tabelle mit Linien.
   Handy: Münze zuerst, 86vw; Antworten als 2×2-Knöpfe (umbrechen, kein seitliches Scrollen, entgegen Blaupause); Regler; Ergebnis darunter.
   Ohne Skript: Standardzustand „Steinschlag auf der Beifahrerseite, 6 mm, reparieren“ ist sichtbar.

3. **Kosten** · Blaupause „One plan as a sentence“ (Feld `--flaeche`, mind. 80svh).
   Der Satz ersetzt die Überschrift (`h2`), zwei Zeilen in `--step-display`, bündig links: Arbeitssatz „Mit Teilkasko / meistens [0 €].“ Das „0 €“ steht auf einem Block in `--rot`, eine Zeilenhöhe hoch, 0,15em Innenabstand, weiße Ziffern; es ist das Logofeld als Preis, nicht anders gesetzt als die übrigen Wörter. Budget: ≤ 19 Zeichen pro Zeile, damit es am Handy bei 11vw zweizeilig bleibt (Preisblock bleibt in Zeile 2, nicht eigene Zeile).
   64 px darunter auf einer Grundlinie: Stützsatz in `--step-lead`, Spalten 1–6 (Reparatur in der Regel 0 €, Tausch nur Selbstbeteiligung, Beitrag steigt nicht, Teilkasko hat keine SF-Klasse); Knopf „Versicherung prüfen lassen“ (Tinte, eckig) rechtsbündig in Spalten 10–12; darunter Textlink „Ohne Teilkasko? Fester Preis vorab am Telefon.“
   Darunter, am Feldfuß: Satz „Direkt abgerechnet mit“ in `--step-body` und die 12 Versicherer-Logos in einer Reihe (Desktop) bzw. 3×4 (Handy), gleiche optische Höhe ca. 32–40 px, frei auf der Fläche: keine Kacheln, keine Schatten, keine Rahmen, nicht animiert; „und allen anderen Kfz-Versicherern.“
   Ersetzt: Kassenbons, Logo-Kachelwand.

4. **Leistungen** · Blaupause „Statement, table pushed right“ (Grund `--grund`).
   Überschrift über die volle Breite, zwei Zeilen `--step-head`, erste Zeile 3vw eingerückt, 4–6 Wörter (Arbeitssatz: „Alles rund um / die Scheibe.“). 96 px darunter die Tabelle in Spalten 8–12, Zeilen in `--step-body` (nicht 15 px), 26 px Abstand, nur Raum zwischen den Zeilen, nach jeder vierten 44 px. Jede Zeile: Art (in `--tinte-2`) · Leistung · Wert rechtsbündig mit einem Pfeil, ganze Zeile ist der WhatsApp-Link mit vorausgefülltem Text:
   Reparatur · Steinschlag reparieren · Teilkasko: meist 0 € / Tausch · Frontscheibe tauschen · 30 Jahre dicht / Tausch · Seiten- und Heckscheibe · auch nach Einbruch / Technik · Kamera kalibrieren · nach dem Tausch // Vor Ort · Mobiler Service · bis 50 km / Abrechnung · Direkt mit der Versicherung · alle Kfz-Versicherer / Fahrzeuge · Pkw, SUV, Transporter · alle Marken / Fahrzeuge · Wohnmobil, Lkw, US-Car · auch große Scheiben // Firmen · Fuhrparks und Dienstwagen · auf eurem Hof / Shop · Wischer und Zubehör · zum Shop.
   Das Wort „Leistungen“ in Spalte 7 entfällt (die Überschrift sagt es). In Spalten 1–4, unten bündig mit der letzten Zeile: ein 4:5-Foto, 22vw breit: `ig-reel-werkstatt.jpg` (Ausschnitt siehe Bildplan).
   Handy: Überschrift ohne Einzug, Tabelle volle Breite, Art über Leistung, Wert rechts; Foto danach 60 % breit am rechten Rand.
   Ersetzt: nummerierte Liste 01–09 mit Rahmen-Plaketten und Haarlinien, Formen-Kacheln.

5. **Ablauf** · Blaupause „Lines that step across“ (Grund `--grund`).
   Vier Zeilen in `--step-head`, je ein ganzer kurzer Satz mit Reihenfolgewort, Treppe ab Spalte 1, 3, 5, 7; Größe so wählen, dass die vierte Zeile ab Spalte 7 in den Rand passt (≤ 24 Zeichen bei ca. 66 px). Erste Zeile ist die `h2`. Arbeitssätze: „Erst schickst du ein Foto.“ / „Dann sagen wir, was Sache ist.“ / „Du kommst vorbei.“ / „Den Papierkram machen wir.“
   Unter jeder Zeile, auf ihrer Kante, 12 px darunter statt des 17-px-Satzes: die passende Chat-Blase als echtes Interface-Fragment (`data-ui`, sofort sichtbar, keine Einblendung): Kunde mit Foto und „Moin, hab nen Steinschlag“ / Werkstatt „Hi Bruder, alles klar? Der ist klein, den reparieren wir.“ / Werkstatt „Komm um 14 Uhr vorbei, Duisburger Str. 150.“ / Werkstatt „Wir rechnen direkt mit deiner Versicherung ab.“ Kennzeichnung als Beispiel im Text unter Zeile 1 (z. B. „So läuft das im Chat, zum Beispiel:“) und im `aria-label`. Unter Zeile 1 außerdem die WhatsApp-Nummer 0176 20908479 als Link.
   Oben rechts, Spalten 10–12, oben bündig mit Zeile 1: `ig-reel-handschlag.jpg` als 5:4 quer (beide Männer im Bild, ohne Untertitel und ohne graue Ecke), nicht tiefer als Zeile 2. Unten links bleibt frei (Blaupause).
   Handy: Zeilen 8,4vw, Einzug 6vw je Stufe, Blasen darunter, Foto nach der zweiten Stufe 60 % breit.
   Ersetzt: Handy-Attrappe, Schritte 1–4 mit Ziffern.

6. **Kundenstimmen** · Blaupause „Quotation spread edge to edge“ (Feld `--flaeche`).
   Eine echte Stimme groß als `blockquote`, zwei Zeilen, `--step-display` eingepasst, jede Zeile `justify-content: space-between` von Rand zu Rand, 0,6em Zeilenabstand: Gabi M. „Ich musste mich um nichts / kümmern mit der Versicherung.“ Darunter eine Zeile in `--step-body`: links „Gabi M.“, rechts „Bewertung, gekürzt“.
   Darunter die übrigen fünf (Guido B., Mira S., Karl H., Niklas F., Theorist) als Textliste in zwei Spalten, `--step-lead`, ohne Karten, ohne Initialen-Kreise, mit der `h2` als erste linke Zelle („Was Kunden schreiben“, `--step-head`), damit der Abschnitt eine Überschrift hat. Quelle „Auszüge aus Kundenbewertungen, gekürzt“ bleibt in `--step-body`.
   Handy: das große Zitat in Aussagegröße (≤ 24 px, max. vier Zeilen, linksbündig), sonst gilt die Zwei-Zeilen-Regel; Liste einspaltig.
   Wortlaut der Zitate nicht weiter kürzen ohne Freigabe.

7. **Standorte** · Geometrie aus der ausgeteilten `contact`-Blaupause „The email as display type“, angepasst (Feld `--asphalt`, 100svh).
   Oben links: `h2` „Kommen wir zu dir?“ in `--step-head`, darunter der Umkreisprüfer (Feld + Knopf „Prüfen“ + „Meinen Standort verwenden“, Ergebnis als Satz in `--step-lead`, `aria-live`). Rechts davon, Spalten 6–12, zwischen Kopf und Displayzeile: die bestehende Karte (Natural Earth, 50-km-Radius, Werkstatt, Essen, Gummersbach), ohne gestrichelte Linien, Radius als Punktraster wie bisher; kein seitliches Wischen.
   12vh über dem Unterrand: die Adresse als Displayzeile, von Rand zu Rand eingepasst, `--step-display`: „Duisburger Str. 150“ als Link zur Route (Hover: `--rot`).
   Untere Ecken in `--step-body`: links „Obermarxloh · Mo bis Sa 9:30 bis 18:00 · 0203 36989833“, rechts „Essen: Termine nach Absprache · Gummersbach: bald, auf Instagram zuerst“.
   Handy: Überschrift, Prüfer, Karte volle Breite, Adresse auf zwei Zeilen („Duisburger“ / „Str. 150“), Ecken untereinander.
   Optional, wenn Platz: `ig-reel-buero.jpg` als kleines 4:5 neben der linken Ecke (Büro der Werkstatt). Rolle der Person im Alt-Text neutral halten, bis geklärt.

8. **Shop** · Blaupause „Photographs gathered round a heading“ (Grund `--grund`, die eine bewusste Ruhe der Seite).
   In der Mitte zentriert: `h2` zweizeilig in `--step-head` (Arbeitssatz „Wischer und Winterkram / jetzt im Shop.“), darunter ein Satz in `--step-body` („Online bestellen, in Duisburg abholen.“) und Textlink „Zum Shop“. Rundherum 6–8 kleine Fotos, 160–200 px breit, ca. 9:10, eckig, ohne Rahmen und Bildunterschrift, im Bereich x 320–1120, zwei davon bis 40 px an den Textblock heran, keines darüber. Jedes driftet scrollgebunden 4–12 % seiner Höhe; bei reduzierter Bewegung still.
   Handy: fünf Fotos zu je 30 % Breite, zwei über, drei unter der Überschrift, keines angeschnitten.
   Beispielpreise aus dem alten Teaser entfallen hier (sie gehören auf `shop.html`).

9. **FAQ** · Blaupause „Large questions, answers beside“ (Grund `--grund`).
   Alle Antworten offen, kein `details`. Erste Zeile: `h2` in `--tinte-2`, Größe wie die Fragen, links, rechte Zelle leer (Arbeitssatz „Jeden Tag gefragt“). Fragen Spalten 1–6 in `--step-lead` 500, max. zwei Zeilen; Antworten Spalten 8–12 in `--step-body`, ca. 40ch, erste Grundlinien bündig; 72–88 px zwischen den Paaren.
   Sieben Paare: Ohne Termin vorbeikommen? / Kann ich mit dem Steinschlag noch warten? (neu: Aussage der gestrichenen Riss-Szene: Temperatursprünge und Schlaglöcher lassen ihn weiterreißen, ein Riss im Sichtfeld kann bei der HU zum Mangel werden; texter prüft) / Steigt mein Beitrag? / Was passiert mit der Kamera hinter der Scheibe? / Wie lange dauert ein Tausch? (mit den Cafés in der Nähe) / Auch Wohnmobil, Lkw oder US-Car? / Was mache ich bis zum Termin? (Klebeband). „Was zahle ich mit Teilkasko?“, „Und ohne Teilkasko?“, „Kommt ihr auch zu mir?“ entfallen, weil Kosten und Standorte sie beantworten.

10. **Schluss** · Blaupause „Question at both edges“ (Feld `--rot` statt „dunkelster Ton“, weil der Fuß danach Asphalt ist; 100svh).
    Frage als `h2` in `--step-display`, weiß, zentriert, ca. 54 % breit: Zeile 1 oben („Anrufen“), Zeile 2 unten („oder schreiben?“). Dazwischen in der optischen Mitte zwei eckige Knöpfe ca. 200×56: links „0203 36989833“ (Fläche `--tinte`, Text weiß), rechts „Foto per WhatsApp“ (Fläche weiß, Text `--tinte`), dazwischen „oder“ in `--step-body`. 16 px darunter, zentriert, `--step-body`: „Mo bis Sa 9:30 bis 18:00 am Telefon, per WhatsApp jederzeit.“
    Handy: Frage auf zwei Zeilen eingepasst (≤ 15 Zeichen je Zeile), Knöpfe untereinander, 72 % breit.

11. **Fuß** · Blaupause „Invitation over a cropped name“, angepasst (Feld `--asphalt`).
    Oberes Drittel, Spalten 1–7: Einladung zweizeilig in `--step-head` („Komm vorbei. / Duisburger Str. 150.“) mit Knopf „Route planen“ (Fläche `--auf-dunkel`, Text Tinte). Spalten 10–12: Telefon, WhatsApp, E-Mail, Instagram in `--step-body`. Darüber, wo Platz: „Klarer Service. Starke Mobilität.“ (ihr Claim).
    Eine Zeile `--step-small` (nicht 12 px): Impressum, Datenschutz, Bildnachweise (eine Zeile mit allen Fotos und Lizenzen), „Entwurf · Stand 10. November 2026“.
    Ganz unten: das Logo als rotes Feld in voller Breite, Wortmarke weiß, **nicht beschnitten** (Markenregel), auf die Breite eingepasst.

Mobile Aktionsleiste (Anrufen, WhatsApp, Route) bleibt: flach, ohne Schatten, ohne Unschärfe, WhatsApp in `--rot`.

### 6.3 Die vier Altbausteine

| Baustein | Entscheidung | Grund |
| --- | --- | --- |
| Riss-Scroll-Abschnitt | **streichen** | 3 Bildschirme fast leer (Füllgrad 0,31/0,28), FAIL covered-text, WARN long-pin und pinned-over-picture; das Blatt teilt keine Scroll-Szene aus. Die Aussage bleibt: im Test-Ergebnis („Da läuft schon ein Riss“ → neue Scheibe, Riss bricht über den Münzrand) und als FAQ „Kann ich noch warten?“. |
| Hero-Scheibe (Regen, Wischer, Canvas) | **umbauen** | Als gezeichnetes Bild zählt sie nicht als Foto, trägt Verlaufsdefinitionen, Mini-Beschriftungen am Rand (edge-text FAIL) und einen erfundenen Glasstempel „AZA · LAMINATED“. Regen und Wischer bleiben als echtes Bild: das Foto im Start-Satz zeigt eine nasse Windschutzscheibe mit Wischer; wenn eine kurze freie Filmschleife gefunden wird, läuft sie dort stumm. Canvas, SVG-Szene und die Regen-Logik in `site.js` entfallen. |
| Laufband (Versicherer) | **streichen** | Bewegte Logos, die man lesen soll; Schatten auf jeder Kachel (FAIL shadow), Etikett „Direkt abgerechnet mit“ als Mini-Versal, seitlich scrollend; doppelt zur Logo-Wand. |
| Logo-Wand | **umbauen** | Bleibt als einziger Ort der 12 Logos, im Kosten-Abschnitt unter dem Satz: ruhig, ohne Kacheln, ohne Schatten, ohne Rahmen, gleiche optische Höhe, Farben und Proportionen der Logos unverändert. |

Außerdem entfallen: Statusleiste oben, „NEU“-Plakette, Kassenbons mit Barcode-Verlauf, Formen-Kacheln, Handy-Attrappe, Instagram-Raster mit Hinweistext, Initialen-Kreise, alle `label`-Etiketten, alle `*__nr`-Nummern, gestrichelte Kreise und Linien, Sofia Sans.

### 6.4 Bildplan

Untergrenze laut Skill: mindestens vier echte Bilder; geplant sind 9 bis 10. Eine Behandlung: unverändert (keine Tönung, kein Graustufen-Mix), eckig, `object-fit: cover`, Hintergrundfarbe `--flaeche` beim Laden, `width`/`height` gesetzt, `loading="lazy"` außer dem Start-Bild.

| Stelle | Bild | Quelle, Lizenz | Ausschnitt, Größe |
| --- | --- | --- | --- |
| Start, im Satz | `assets/img/shop/hero.jpg` (Nachtfahrt im Regen, Wischer, Rücklichter) | eflon, Flickr, CC BY 2.0, zugeschnitten | Desktop ca. 3:1 in einer x-Höhe (ca. 230×75 px), Handy 3:2 in voller Breite. Ersatz vor Livegang: echtes Steinschlag-Foto des Betriebs (beim Kunden anfragen). |
| Leistungen | `assets/img/ig-reel-werkstatt.jpg` (Mitarbeiter winkt in der Halle, rote Tür, Lochwand) | eigenes Instagram-Reel, Entwurf | Ausschnitt x 0–500, y 0–625 px (4:5, ohne Play-Symbol und Untertitel), angezeigt ca. 317 px breit |
| Ablauf | `assets/img/ig-reel-handschlag.jpg` (Handschlag vor einem Kundenauto) | eigenes Instagram-Reel, Entwurf | Ausschnitt x 30–624, y 150–625 px (5:4 quer, 594×475, beide Personen, ohne Untertitel und graue Ecke), angezeigt ≤ 360 px |
| Standorte (optional) | `assets/img/ig-reel-buero.jpg` (Mann im roten Pullover am Schreibtisch) | eigenes Instagram-Reel, Entwurf | Ausschnitt x 0–500, y 120–745 px (4:5, ohne Play-Symbol und ohne unscharfen Kopf im Vordergrund), ≤ 300 px |
| Shop | 6–8 aus `assets/img/shop/`: `w-heck.jpg` (Ivan Radic, CC BY 2.0), `w-premium.jpg` (ChadCooperPhotos, CC BY 2.0), `p-versiegelung.jpg` (jcgoforth, CC BY 2.0), `p-enteiser.jpg` (OakleyOriginals, CC BY 2.0), `winter.jpg` (freestocks.org, CC0), `p-abdeckung.jpg` (shrff, CC BY 2.0), `w-satz.jpg` (Steve Snodgrass, CC BY 2.0), optional `hero.jpg` in anderem Ausschnitt | Flickr, Lizenzen wie auf `shop.html` | eine Familie: Glas bei Regen und Frost; je 160–200 px, 9:10 |
| Kosten | 12 Versicherer-Logos `assets/img/versicherer/*.png` | Website des Betriebs | zählen nicht als Bilder |
| Test, Karte | gezeichnet: 2-Euro-Münze und Steinschlag (SVG, flach), Karte aus Natural Earth | eigen, gemeinfrei | zählen nicht als Bilder |

Bildnachweis: eine Zeile im Fuß mit allen verwendeten CC-Fotos (Titel, Urheber, Lizenz-Link), dazu „Fotos aus dem Instagram-Kanal der Werkstatt, für den Entwurf ausgeschnitten“. Kein Satz über Bildherkunft in den Abschnitten selbst. Kein fremdes Foto als Team, Halle oder Kundenauto des Betriebs ausgeben.

**Suchen in freien Sammlungen** (`scripts/assets.mjs`, drei Suchen, nichts heruntergeladen):

1. „Duisburg Marxloh“ (Openverse und Commons, dazu ein Nachfilter Commons/quer): 205 Treffer bei Openverse, fast nur Kirchen, Hausfassaden, Straßenfotografie. Brauchbar wären:
   - `commons:83578558` „Duisburg Marxloh Kiebitzmühle“ (Windmühle am Schwelgernpark), Willemjans, CC BY-SA 4.0, 4000×3000. Lage zur Werkstatt prüfen.
   - `commons:62408728` „Duisburg, Alte Thyssen-Hauptverwaltung, 2017-09 CN-02“ (Hamborn/Marxloh), Steffen Schmitz, CC BY-SA 4.0, 2884×1938.
   - `commons:62819632` „Duisburg, Marxloh, Roonstraße 90-94“ (Backstein-Wohnhaus), Steffen Schmitz, CC BY-SA 4.0, 3277×2042.
   Nicht empfohlen: „Merkez-Moschee, Duisburg-Marxloh“ (CC BY-SA 2.0) und „Center of Marxloh (Duisburg) (2)“ (CC BY 4.0, Beschreibung rahmt das Viertel religiös): ein Wahrzeichen dieser Art auf einer Werkstattseite würde eine Aussage über den Betrieb treffen, die er selbst nicht trifft. Personen-Straßenfotos (Marxloh 2, 14) ebenfalls nicht.
   Keiner der Funde ist für den Entwurf nötig; als einzelnes Ortsbild in Standorte nur nach Rücksprache.
2. „windshield chip“: Openverse antwortete mit HTTP 504; Commons ohne passenden Treffer (NASCAR, iPhone, Urlaubsfoto). Kein freies Steinschlag-Foto gefunden.
3. Nicht mehr gesucht (Limit drei Suchen): „A59 Duisburg“, „cracked windshield“, und Film: `assets.mjs --video "windshield wiper rain"`. Empfehlung an den frontend-bauer: genau diese Filmsuche einmal ausführen; bei einer sauberen Schleife unter 5 MB (5–20 s, ohne Logo, ohne Personen) ersetzt sie das Standbild im Start-Satz und ist das eine bewegte Bild der Seite. Sonst bleibt das Standbild mit Shutter-Bewegung.

Nicht verwendet: die ausgeteilten Fotos „Coast“ (Meer, ohne Bezug).

### 6.5 Bewegung

- Signatur: „Image shutter“ (`references/motion.md`) genau einmal, auf dem Bild im Start-Satz.
- Je Abschnitt Auftritt der Teile (Überschrift, Text, Bild), 60–90 ms versetzt, 16–32 px Hub mit Deckkraft, einmal beim Eintreten; Inhalt ist ohne Skript sichtbar (die alte leere Handy-Attrappe darf nicht wieder entstehen).
- Live: im Test wächst der Steinschlag mit dem Regler, bricht über den Münzrand; Ergebnissatz wechselt mit 300 ms Überblendung.
- Rückmeldung an allen Knöpfen, Links, Testantworten, Tabellenzeilen (Druck, Hover, Fokus).
- Ein bewegtes Bild: Filmschleife im Start-Satz, falls gefunden; sonst die scrollgebundene Drift der Shop-Fotos.
- Nur `transform` und `opacity`; für `prefers-reduced-motion` alles ohne Weg.
- Prüfen: Inspector zählt mindestens 8 bewegte Elemente (Warnung unter 16).

### 6.6 Für texter und Kunde offen

- Arbeitssätze oben gegen Zeichenbudgets prüfen und in Du-Form final formulieren, ohne Gedankenstriche.
- Nicht belegt, vor Verwendung klären: „Antwort garantiert in 24 Stunden“, „oft noch am selben Tag“, Rolle „Chef“ der Person im roten Pullover, Lage zu A59/A42, Brautmodenmeile, Schwelgernpark.
- Beim Kunden anfragen: ein echtes Handyfoto eines Steinschlags oder Risses aus ihrer Halle (für den Start-Satz und die Chat-Blase), Einverständnis der Personen in den Reels für die Website.
- Telefon …833 oder …837, Öffnung 9:30 oder 6:30, Essen-Adresse, Gummersbach-Termin (wie in `ENTWURF-NOTIZEN.md`).

### 6.7 Abnahme durch den frontend-bauer

```bash
node .claude/skills/design-taste-frontend/scripts/lint.mjs index.html assets/css assets/js
CHROME_PATH=werkzeuge/chrome-ohne-sandbox.sh node .claude/skills/design-taste-frontend/scripts/inspect.mjs index.html --out .taste-skill/after
```
Ziel: 0 FAIL bei 1440, 768 und 390; jede WARN mit einem Satz begründet. Vorher-Werte zum Vergleich: 12 FAIL, 12 WARN, 31 Schriftgrößen, 3 Familien, 0 gezählte echte Bilder, Rand 60 px. Danach Screenshots an den art-direktor zur Kritik (Runde 1). `shop.html` einmal öffnen und auf Bruch durch die neuen Tokens prüfen. `vorschau-einzeldatei/` erst nach Abnahme neu erzeugen.

---

## 7 · Kritik nach dem Umbau (10.11.2026)

Art-Direktor, Runde 1. Gesehen: alle Aufnahmen in `.taste-skill/after/` (desktop-fold, desktop-page-01..03, tablet-fold, tablet-page-01..02, mobile-fold, mobile-page-01..02) und `.taste-skill/after-shop/` (dieselben Sätze). Die Inspector-Bögen enden vor Schluss und Fuß (Startseite) und am Handy vor den Fragen; diese Abschnitte habe ich mit eigenen Aufnahmen bei 1440, 768 und 390 px nachgeholt, dazu der 2-Euro-Test bei 6 mm, 32/34 mm und „Da läuft schon ein Riss“ (Scratch-Ordner, nicht im Repo). Code nicht geändert.

**Messwerte vorher → nachher (Startseite, Inspector):** FAIL 12 → 0 · WARN 12 → 3 (no-footage, statement-length, measure) · Schriftfamilien 3 → 2 · Schriftgrößen 31 → 5 (14, 19, 30, 76, 146) · Mini-Versalien 33 → 0 · Etiketten 14 → 0 · Haarlinien 13 → 0 · Schatten 19 → 0 · Verläufe → 0 · echte Bilder 0 → 10 (Desktop) · Seitenrand 60 → 32 px · Seitenhöhe 18,6 → 13,8 Bildschirme · bewegte Elemente 31. Füllgrad Desktop je Bildschirm: 0,28 · 0,41 · 0,75 · 0,59 · 0,29 · 0,31 · 0,79 · 1 · 0,98 · 0,39 · **0,10** · 0,37.

Die Ornamente sind weg und nichts Verbotenes ist zurückgekommen. Die Seite hat jetzt ein System: eine Schrift in zwei Schnitten, fünf Größen, ein kühler Grund, Rot als Signal, echte Leute aus der Halle. Was jetzt fehlt, ist Spannung und Genauigkeit in der Komposition, und an zwei Stellen liegt etwas über Text.

### Startseite

```
ROUND 1 (nach Umbau, .taste-skill/after + eigene Aufnahmen)
Seen in one second: „Scheibe [Foto] kaputt?“ als eine schwarze Zeile auf hellem Grund, das Nachtfoto mit Wischer im Wortzwischenraum.
Idea (one sentence): Der WhatsApp-Ton der Werkstatt wird zu kurzen Sätzen in Plakatgröße, in denen das Ding selbst an der Stelle eines Wortes steht (Foto, Münze, 0 € auf dem Logofeld, die Adresse); trägt in Start, Kosten, Ablauf, Standorte, Fuß; FAQ und Shop-Band sind wieder neutral.
Live thing: 2-Euro-Test (Münze, Regler, vier Antworten, Ergebnis mit WhatsApp-Vorlage); funktioniert, bricht aber ab 26 mm optisch aus (siehe 1).
Layout words by section: start=satz-mit-bild / test=scheibe-index / kosten=farbfeld-satz / leistungen=tabelle-rechts / ablauf=treppe / stimmen=zitat-band / standorte=inverses-feld-karte / shop=versammelte-bilder / fragen=tabelle-fragen / schluss=feld-frage / fuss=fuß-mit-name. Kein Wort doppelt.
Scores: design 7 · usability 6 · creativity 7 · content 7 → overall 6.7
Caps applied: Text unter Linien (Risse über „Die Scheibe muss neu.“, Regler und Hilfetext) und Knopf über dem Stützsatz bei 768 → usability ≤ 6 (bindend). Sonst kein Deckel: 0 FAIL, keine verbotenen Mittel sichtbar, 10 echte Bilder, Seite bewegt sich, Knopf auf dem ersten Bildschirm, jede Sektion mit Überschrift.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. Der Test kollidiert mit sich selbst (eigene Aufnahme test-32, mt-test-34): ab 26 mm und bei „Riss“ laufen die Risslinien aus der Zeichnung über die rote Ergebnis-Überschrift (sieht durchgestrichen aus), über „Wie groß?“, den Regler und den Hilfetext, am Handy über den Bildschirmrand. Fix: Korrektur 1.
2. Der erste Bildschirm hält nicht zusammen (desktop-fold, tablet-fold, mobile-fold): Stützsatz und Knopf sind an den Fuß gedockt, 200 px unter der h1 (Füllgrad 0,28); bei 768 liegt der Knopf über dem Satz („wir sa|gen“ verdeckt); am Handy deckt die Aktionsleiste den Start-Knopf halb ab. Fix: Korrektur 2.
3. Drei Abschnitte lassen die Hälfte der Breite liegen (desktop-page-02 links oben und rechts oben, desktop-page-03 links unten): Leistungen (Überschrift 360 px breit, rechts oben leer, 0,29), Ablauf (Treppe nur 116 px je Stufe, rechts 40 % leer, 0,31), Shop-Band → Fragen (Bildschirm 11 bei 0,10, Überschrift grau in 30 px). Fix: Korrekturen 6 bis 8.
```

Erwartung nach den Korrekturen 1 bis 8: usability 7,5 bis 8, design 7,5, overall um 7,4. Eine 8 braucht das echte Steinschlag-Foto des Betriebs im Start-Satz (heute ein freies Nachtfoto, zeigt Regen, keinen Schaden) und eine Filmschleife.

**Je Abschnitt (Startseite):**

| Abschnitt | Was trägt | Was nicht |
| --- | --- | --- |
| Start | Der Satz mit dem Bild darin ist das Plakat, das wir wollten; am Handy (Scheibe / Foto / kaputt?) eine eigene, starke Komposition. | Stützsatz und Knopf am Fuß statt unter der Zeile; 768 Knopf über Text; Trennung „Duisburg- / Obermarxloh“; Foto zeigt Regen, keinen Schaden. |
| 2-Euro-Test | Echte Regel, echtes Ergebnis, Knopf mit Vorlage, ohne Skript sichtbar; die Antworten als ruhige Tonflächen. | Risse überlaufen Text; Münze klein (336 px statt ~520); drei Spalten mit drei Oberkanten; „2“ unter dem Steinschlag liest sich als Glocke, der Steinschlag als Rad; Tablet: Ergebnis rechts, linke Hälfte leer; Handy: Legende belegt eine Rasterzelle. |
| Kosten | Stärkster Abschnitt: „Mit Teilkasko / meistens [0 €].“ auf der Fläche, das Logofeld als Preis. Logos ruhig, ohne Kacheln. | Logo-Reihe bricht im Inspector um, „Provinzial“ allein in Zeile 2; HUK und Generali optisch halb so groß. |
| Leistungen | Tabelle lesbar (19 px), ganze Zeile ist WhatsApp-Link, das Hallenfoto mit roter Tür ist echtes Material. | Überschrift zu klein für die Fläche, rechte obere Hälfte leer; Foto weich (Screenshot-Auflösung), bleibt Platzhalter bis zum Shooting. |
| Ablauf | Die Sätze im Ton der Werkstatt mit Chat-Blasen darunter: die Idee ist hier am deutlichsten. | Treppe zu flach, rechts leer; drei rote Blasen machen Rot zum Muster statt zum Signal (Rot jetzt an 9 Stellen); Handschlag am Desktop hochkant, der Kunde bis auf Bart und Ärmel abgeschnitten. |
| Stimmen | Desktop: große Stimme über zwei Zeilen versetzt, Liste ohne Karten, gut. | ≤ 768 fällt die große Stimme auf 17 bis 20 px, kleiner als die Liste darunter; WARN statement-length (Theorist 4 Zeilen bei 30 px). |
| Standorte | Karte, Prüfer und „Duisburger Str. 150“ als Anzeigezeile: eigen, nur dieser Betrieb. | Nebensatz „50 Kilometer …“ in Grau klein; sonst nichts. |
| Shop-Band | Fotos um die Überschrift, eine Bildfamilie (Glas, Regen, Frost), bewusste Ruhe. | Untere Fotos laufen weit aus und erzeugen mit dem FAQ-Kopf den leeren Bildschirm 11. |
| Fragen | Alle Antworten offen, Fragen groß, Antworten 19 px in voller Tinte. | Überschrift „Jeden Tag gefragt“ grau in Fragengröße, liest sich nicht als Überschrift; Antwortspalte bei x 847, eine vierte linke Kante. |
| Schluss | Rotes Feld, Frage an beiden Kanten, zwei klare Knöpfe. | „Rückmeldung innerhalb von 24 Stunden“ ist nicht belegt (siehe 3). |
| Fuß | Einladung mit Adresse, Kontakte, Bildnachweis vollständig, Logo in voller Breite und unbeschnitten. | Nichts Wesentliches. |

### Shop

```
ROUND 1 (Shop, .taste-skill/after-shop)
Seen in one second: „Wischer und Winterkram.“ riesig links unten, das Nachtfoto der Startseite rechts.
Idea (one sentence): Der Shop kommt aus der Werkstatt: Wischer nach Fahrzeugschein (Feld 2.1/2.2) im roten Feld, Winterpaket „Morgens um sieben. Minus vier.“, Mitbringen zum Termin.
Live thing: Wischer-Finder mit HSN/TSN; Korb.
Layout words by section: start=split / finder=farbfeld-formular / sortiment=raster (13 Karten) / winterpaket=inverses-feld-split / termin=satz-knopf / fuss=fuß-mit-name.
Scores: design 6.5 · usability 7 · creativity 6.5 · content 7 → overall 6.7
Caps applied: keiner bindend (0 FAIL, 14 echte Bilder). WARN grey-body (5,1:1) und no-footage.
Top three problems: Start (gleiches Foto wie die Startseite, Stützsatz unter dem Rand, Knopf verloren rechts unter dem Bild, linke obere 40 % leer); Sortiment (grauer Fließtext, am Handy 13 Karten einspaltig = 12 Bildschirme, Korb-Symbol fehlt am Handy); Bildmischung der Karten (Herbstwald, Spiegelstraße, Autoschlüssel auf lila Pullover passen nicht zur Familie Glas/Regen/Frost). Fix: Korrekturen 10 bis 12.
```

| Abschnitt | Was trägt | Was nicht |
| --- | --- | --- |
| Start | Große Zeile, klare Aussage, Entwurfsleiste nennt Beispielpreise. | Foto doppelt zur Startseite; Satz unter dem Rand bei 900 px; Knopf weit vom Satz; oben links leer. |
| Wischer-Finder | Rotes Feld mit den echten Feldern aus dem Fahrzeugschein: der eigene Moment des Shops. | Hinweistexte darin 14 bis 15 px; darf bleiben, ist das eine große Rotfeld des Shops. |
| Sortiment | Echte Preise mit Grundpreis, Montage inklusive, ruhige Knöpfe, Filter als Tonflächen. | Grauer Text; drei Bilder aus fremder Familie; Handy sehr lang; Gutscheine mit Stockfotos. |
| Winterpaket | Bestes Stück des Shops: Eisfoto groß, Preis groß, Inhalt als Tabelle. | Nichts Wesentliches. |
| Termin-Band | „Hast eh einen Termin? Bringen wir mit.“ im Ton. | Leere rechte Mitte am Desktop, vertretbar. |
| Fuß | Wie Startseite. | Navigation im Kopf mittig statt rechts wie auf der Startseite (klein). |

### Korrekturliste für den frontend-bauer (nach Wirkung, höchstens 12)

1. **2-Euro-Test · Risse überlaufen Text.** Ab 26 mm und bei „Da läuft schon ein Riss“ laufen die Risslinien über die Ergebnis-Überschrift, „Wie groß?“, den Regler, den Hilfetext und am Handy über den Bildschirmrand. Tun: Zeichnung auf ihre Bühne begrenzen (`.test svg { overflow: hidden }` oder `clipPath` auf das viewBox-Rechteck); im Skript die Risslänge auf höchstens 0,95 × halbe viewBox kappen und die viewBox so wählen, dass die Münze etwa 66 % davon einnimmt, damit das Brechen über den Münzrand sichtbar bleibt. Ergebnis-Überschrift „Die Scheibe muss neu.“ in `--tinte` statt Rot (der Knopf darunter ist das Rot). Warum: Linien über einer Überschrift deckeln Usability bei 6, und genau das Ergebnis, das zum Anruf führen soll, sieht kaputt aus.
2. **Start · Satz und Knopf an die Zeile, keine Überdeckung.** Desktop: Stützsatz und Knopf hängen 200 px unter der h1 am Fuß (Füllgrad 0,28). 768: der Knopf liegt über dem Stützsatz. 390: die feste Aktionsleiste deckt den Start-Knopf halb ab. Tun: h1, Stützsatz und Knopf als eine Gruppe vertikal zentrieren, Stützsatz 40 px unter der h1 (ab Spalte 6 wie geplant), Knopf auf seiner Grundlinie rechts; die Passepartout-Zeilen (offen/Adresse, anrufen) bleiben unten. Bei ≤ 1024 px Stützsatz Spalten 1–8, Knopf darunter (stapeln, nicht nebeneinander). „Duisburg‑Obermarxloh“ mit geschütztem Bindestrich (`&#8209;`). Mobile Aktionsleiste erst zeigen, wenn der Start-Knopf den Bildschirm verlassen hat (IntersectionObserver; ohne Skript sichtbar lassen und `.start` unten um die Leistenhöhe polstern). Warum: Skill §5, der Stützsatz gehört direkt unter die Überschrift; Überdeckung ist ein Usability-Deckel; der erste Bildschirm ist das, was der Kunde zuerst sieht.
3. **Texte · unbelegte Zusagen entfernen (texter).** „Rückmeldung innerhalb von 24 Stunden“ (Schluss und vorausgefüllter WhatsApp-Text im Test), „Oft noch am selben Tag …“ (Test-Ergebnis Tausch) und „oft holst du dein Auto am selben Tag wieder ab“ (FAQ) stehen nicht in `ENTWURF-NOTIZEN.md` und sind in §6.6 ausdrücklich als ungeklärt markiert. Tun: streichen oder auf Belegtes zurückführen (Kundenstimmen: „nach nicht einmal 3 Stunden“, „innerhalb zwei Stunden“ → „Meist ein paar Stunden.“); „Fester Preis vorab am Telefon“ ebenfalls beim Kunden bestätigen lassen; die Fragen in `ENTWURF-NOTIZEN.md` „Offen“ ergänzen. Warum: CLAUDE.md Regel 2; der Kunde liest jede Zeile als Versprechen in seinem Namen.
4. **Stimmen · große Stimme auf Tablet und Handy.** Bei 768 und 390 fällt „Ich musste mich um nichts kümmern / mit der Versicherung.“ auf 17 bis 20 px, kleiner als die Liste. Tun: bei 768 in Barlow Condensed 700 eingepasst auf zwei Zeilen (~48 px); bei 390 Aussagegröße 24 px, Barlow 500, linksbündig, bis vier Zeilen. Listzitate am Desktop 26 px statt 30 px (behebt WARN statement-length, ohne Zitate zu kürzen). Warum: die eine echte Stimme ist der Beweis des Abschnitts; heute kippt die Hierarchie.
5. **2-Euro-Test · Komposition und Zeichnung.** Münze sichtbar nur ~336 px (37 vh), drei Spalten mit drei Oberkanten, 150 px Luft unter der h2; die „2“ liest sich unter dem Steinschlag als Glocke, der Steinschlag mit gleich langen dicken Speichen und weißem Ring als Rad. Tun: Münze ~520 px (56–64 vh); Antwortliste unten bündig mit der Münz-Unterkante, Ergebnis oben bündig mit der Münz-Oberkante; „2“ als Barlow Condensed 700 auf ~70 % der Kernhöhe; Steinschlag als unregelmäßiger Stern (5–7 dünne Strahlen ungleicher Länge, kleiner dunkler Krater, ohne Ring), auf dem Kern rechts oben, damit die „2“ frei bleibt. Tablet: Ergebnis volle Breite unter dem Regler (heute rechte Hälfte, linke leer). Handy: `legend` über die ganze Rasterbreite (`grid-column: 1 / -1`), damit die vier Antworten ein sauberes 2×2 bilden (heute steht „Da läuft schon ein Riss“ allein). Warum: das eine interaktive Element ist, was Juroren und der Kunde zuerst ausprobieren.
6. **Ablauf · Treppe öffnen, Rot zurücknehmen, Foto quer.** Einzug je Stufe ~116 px, rechts 40 % leer (0,31); drei rote Werkstatt-Blasen; Handschlag hochkant mit abgeschnittenem Kunden. Tun: Stufen auf Spalte 1, 3, 5, 7 (≈ 0 / 240 / 480 / 720 px bei 1440), sodass „Papierkram? Machen wir.“ bis zum rechten Rand reicht; `.blase--werkstatt` in `--tinte` mit `--auf-dunkel`, Kundenblase bleibt `--flaeche`; Handschlag am Desktop `aspect-ratio: 5/4`, Breite 3 Spalten, Ausschnitt mit beiden Personen (Bildplan §6.4). Warum: Rot steht heute an 9 Stellen und verliert die Bedeutung „hier drücken“; die leere rechte Hälfte ist ein Loch, kein Ruhepunkt.
7. **Leistungen · Überschrift trägt die Breite.** „Alles rund um / die Scheibe.“ in 76 px nimmt 360 px ein, rechts oben leer (0,29). Tun: `.leistungen__titel` auf `--step-display` (13 Zeichen je Zeile, passt zweizeilig auch bei 390), erste Zeile 3vw eingerückt wie im Blatt; Tabelle unverändert ab Spalte 7. Warum: jeder Bildschirm ein Plakat mit einem dominanten Ding.
8. **Fragen · echte Überschrift, kein leerer Bildschirm.** Bildschirm 11 Füllgrad 0,10: Shop-Band läuft unten lang aus, FAQ beginnt mit grauer 30-px-Zeile. Tun: `.fragen__titel` in `--step-head`, `--tinte`; Abstand Shop-Band → Fragen auf den normalen Abschnittsabstand (≤ 200 px), untere Shop-Fotos höchstens 120 px unter „Zum Shop“; Antwortspalte auf Spalte 7 (x ≈ 730, dieselbe Kante wie Leistungen-Tabelle und Stimmen-Spalte 2). Warum: Abschnitt ohne lesbare Überschrift, Loch im Seitenfluss, eine Kante weniger.
9. **Kosten · Logo-Reihe als festes Raster.** Bei 1440 mit Scrollleiste bricht „Provinzial“ allein in Zeile 2; HUK, Generali und AXA wirken deutlich kleiner als R+V, HDI, DEVK. Tun: `.kosten__logos { display: grid; grid-template-columns: repeat(12, 1fr); }`, Tablet `repeat(6, 1fr)`, Handy `repeat(3, 1fr)`; Höhen je Logo optisch angleichen (HUK, Generali, AXA etwa +30 %), Farben und Proportionen unverändert. Warum: ein einzelnes umgebrochenes Logo sieht für den Kunden wie ein Fehler bei seinen eigenen Partnern aus.
10. **Shop · erster Bildschirm.** Gleiches Nachtfoto wie die Startseite; Stützsatz unter dem Bildrand (y 885); „Zum Sortiment“ verloren rechts unter dem Bild; linke obere 40 % leer (0,46). Tun: anderes Bild, z. B. `assets/img/shop/w-premium.jpg` (Wischer mit Tropfen, ChadCooperPhotos, CC BY 2.0) im 4:5 rechts; h1 nach oben (Oberkante ≈ 180 px), Stützsatz 40 px darunter, Knopf „Zum Sortiment“ und Textlink „Wischer nach Fahrzeugschein finden“ direkt unter dem Satz links. Warum: zwei Seiten mit demselben Startbild wirken wie eine Vorlage; die Handlung muss bei der Aussage stehen.
11. **Shop · Sortiment lesbar und kürzer am Handy.** Beschreibungen grau (5,1:1, WARN grey-body); am Handy 13 Karten einspaltig = 12 Bildschirme; Korb-Symbol fehlt am Handy (nur ein Punkt neben „Korb“). Tun: Beschreibung in `--tinte`, nur Grundpreis/Einheit in `--tinte-2`; unter 560 px `grid-template-columns: 1fr 1fr` (Bild 1:1, Knopf volle Kartenbreite); `.korb-knopf svg` am Handy feste Breite und Höhe (20 px). Warum: Fließtext in voller Tinte; ein Shop, durch den man am Daumen 12 Bildschirme scrollt, verliert Leute.
12. **Shop · Bildfamilie halten.** „Sommer-Konzentrat“ (Straße im Spiegel), „Gutschein Herbstcheck“ (Herbstwald) und „Geschenkgutschein“ (Autoschlüssel auf lila Pullover) fallen aus der Familie Glas, Regen, Frost. Tun: Sommer-Konzentrat mit einem Bild aus derselben Familie (z. B. `p-versiegelung.jpg`-Ausschnitt mit Tropfen auf Glas), die zwei Gutscheine ohne Foto als Fläche in `--tinte` mit dem Betrag in Barlow Condensed 700 („50 €“, „19,90 €“) in `--auf-dunkel`. Warum: eine Bildbehandlung, ein Licht; ein Gutschein ist ein Betrag, kein Stockfoto.

**WARNs, die bleiben dürfen:** no-footage (die Filmsuche fand keine saubere freie Schleife; vor Livegang ein 10-Sekunden-Handyclip aus der Halle anfragen), measure (nur die einzeilige Entwurfsleiste läuft breit). statement-length verschwindet mit Korrektur 4.

**Weiter offen beim Kunden:** echtes Steinschlag-Foto für den Start-Satz und die Chat-Blase, kurzer Clip aus der Halle, Einverständnis der Personen in den Reels, die Punkte aus §6.6.
