# Autoglas Zentrum Aydin · Website-Entwurf

Stand 10. November 2026. Zwei Seiten: `index.html` (Startseite) und `shop.html` (Shop-Ausblick).
Öffnen: `index.html` doppelklicken. Läuft ohne Server, ohne Baukasten, ohne Internet (nur WhatsApp, Instagram und Route verlinken nach draußen).

## Die Idee in einem Satz

Die Werkstatt redet auf Instagram und WhatsApp in kurzen Sätzen („Scheibe kaputt?“, „Hi Bruder, alles klar?“, „Komm vorbei“). Die Seite macht genau diese Sätze plakatgroß, und an der Stelle eines Wortes steht das Ding selbst: das Foto der Scheibe, die 2-Euro-Münze, der Preis auf dem roten Logofeld, die Adresse.

## Was die Seite besonders macht

| Baustein | Was passiert | Warum das verkauft |
|---|---|---|
| Start | „Scheibe [Foto] kaputt?“ als ein Satz über die ganze Breite, darunter Foto per WhatsApp, Öffnungsstatus und Telefon | In einer Sekunde klar, worum es geht und was man tun soll |
| 2-Euro-Test | Lage antippen, Größe am Regler einstellen, der Steinschlag liegt in echter Größe auf einer gezeichneten 2-Euro-Münze. Wird er größer als die Münze, reißen Linien über den Rand. Ergebnis mit Kosten, Dauer, Klebeband-Tipp und WhatsApp-Text | Nimmt die Unsicherheit, führt direkt zu WhatsApp mit vorausgefülltem Text |
| Kosten | „Mit Teilkasko meistens 0 €.“ Der Preis steht im roten Logofeld, darunter die Logos der Versicherer | Versicherungsthema in fünf Sekunden verstanden |
| Leistungen | Tabelle, jede Zeile öffnet WhatsApp mit der Leistung im Text, daneben ein Foto aus der eigenen Halle | Weniger Klicks bis zur Anfrage |
| Ablauf | Vier Sätze als Treppe, jeder mit einer Chat-Blase im Ton der Werkstatt | Zeigt den Ablauf statt ihn zu beschreiben |
| Kundenstimmen | Eine Stimme groß von Rand zu Rand, fünf weitere als Liste | Echte Sätze statt Sterne |
| Karte (GIS) | Eigene Karte aus echten Geodaten (Rhein, Ruhr, Autobahnen), 50-km-Radius als Punktraster, Werkstatt, Essen, Gummersbach. Prüfer: Stadt eingeben oder Standort teilen | Beantwortet „Kommt ihr zu mir?“ direkt. Keine Google-Karte, also DSGVO-ruhig |
| Shop-Band | Fotos aus dem Sortiment schweben beim Scrollen um die Überschrift | Lenkt auf den Shop, ohne Werbeblock |
| Mobile Leiste | Anrufen, WhatsApp, Route unten am Handy. Weicht beim Lesen aus, kommt beim Hochscrollen zurück | Die meisten Kunden kommen übers Handy |
| Shop | Wischer-Finder nach Fahrzeugschein (Feld 2.1 und 2.2), Filter, Winterpaket, Warenkorb mit Abholung oder Versand | Wirkt wie aus der Werkstatt, nicht wie ein Baukasten-Shop |

Gestaltung: zwei Schriften (Barlow Condensed für Sätze, Barlow für Text), fünf Größen, Logorot nur als Fläche. Keine Etiketten über Überschriften, keine Nummerierung, keine Linien, keine Schatten, keine Verläufe. Geprüft mit dem Browser-Prüfer aus `design-taste-frontend` bei 1440, 768 und 390 px.

Technik nebenbei: Logo als scharfe Vektordatei nachgebaut (bisher nur JPG), Schriften lokal eingebunden, keine Tracker, strukturierte Daten für Google (AutoRepair), saubere Überschriftenstruktur, funktioniert mit Tastatur und bei „weniger Bewegung“ im Betriebssystem.

## Was aus echten Quellen stammt

- Adresse, Telefon, WhatsApp, E-Mail, Öffnungszeiten Mo bis Sa 9:30 bis 18:00: aktuelle Website autoglaszentrum-aydin.de
- Leistungen, 30 Jahre Garantie auf Dichtigkeit, Kamera-Kalibrierung, 50 km mobiler Service, 2-Euro-Regel, Klebeband-Tipp: aktuelle Website
- Kundenstimmen (Guido B., Mira S., Gabi M., Karl H., Niklas F., Theorist): wörtlich gekürzt von der aktuellen Website
  Volltexte, aus denen gekürzt wurde (aktuelle Website, abgerufen 03.11.2026):
  - Gabi M.: „Nur zu empfehlen. Sehr freundlich, persönlich. Ich musste mich um nichts kümmern mit der Versicherung. Gehörte alles mit zum Service. Termin hab ich auch sehr schnell bekommen“
  - Guido B.: „Toller Service. Bin ohne Termin hingefahren, eine halbe Stunde später war der Steinschlag ausgebessert. Dabei freundlicher Service und ein gutes Gefühl. Sehr zu empfehlen.“
  - Mira S.: „Ich hatte einen kaputte Windschutzscheibe und bekam von heute auf morgen einen Termin zum Wechsel. Mir wurde unglaublich schnell geholfen und hatte nach nicht einmal 3 Stunden mein Auto wieder und dazu noch sehr nette Mitarbeiter als Kontakt. Kann ich mit bestem Gewissen weiterempfehlen und werde das auch tun :)“
  - Karl H.: „Scheibe vom Wohnmobil wurde schnellstens ersetzt. Bester Service, bester Preis.“
  - Niklas F.: „Wurde eine neue Scheibe eingebaut. Gute Arbeit und innerhalb zwei Stunden konnte das Auto wieder abgeholt werden. Preis absolut in Ordnung, deutlich billiger als bekannte Alternativen... Kann ich nur empfehlen.“ (Preisvergleich auf der Seite weggelassen)
  - Theorist: „Sehr gute, ordentliche Arbeit. Von Anruf bis zur installierten Windschutzscheibe vergeht nicht viel Zeit. Das Team ist sehr nett und in der Nähe gibt es viele Restaurants / Cafés, falls man sich den spannenden Prozess nicht anschauen möchte.“
- „Alle Marken & Modelle“, „Wir arbeiten mit allen gängigen Versicherungen“, „Versicherungsbeitrag steigt nicht“, Herbstcheck: eigene Instagram-Posts (`assets/img/ig-post-*.jpg`)
- Ortsteil Obermarxloh: Eintrag im Branchenverzeichnis nochoffen.de (Adresse …/obermarxloh-autoglas-zentrum-aydin-inh-melin), Postleitzahl 47166
- Fahrzeugtypen „PKW, LKW, Wohnmobile und US-Cars“ sowie „LKW · Transporter · Wohnmobile · US-Cars · Seiten- & Heckscheiben“: eigene Instagram-Posts des Betriebs (@autoglaszentrumaydin, Screenshot vom 03.11.2026). Auf der alten Website nur Wohnmobile und Firmenkunden
- Steinschlagreparatur mit Teilkasko „in der Regel 100 % kostenlos“, Austausch nur Selbstbeteiligung „z. B. 150 €“, kein Schadenfreiheitsverlust: Instagram-Post „Scheibenschaden? Kein Problem!“
- Versichererliste und Versicherer-Logos (HUK-COBURG, Allianz, ERGO, AXA, Generali, R+V, DEVK, HDI, VHV, LVM, Württembergische, Provinzial): aktuelle Website, freigestellt und optisch gleich groß gemacht, Farben und Proportionen unverändert
- Instagram-Bilder: aus dem Screenshot geschnitten (niedrige Auflösung, nur für den Entwurf). Auf der Startseite nur noch der Handschlag im Ablauf
- Startbild und Leistungsfoto (neue Frontscheibe mit Saughebern): Andrew Bone, „Jag having new windscreen fitted“, CC BY 2.0, Flickr (Fotos 36982044961 und 36935185746), zugeschnitten, Kennzeichen nicht im Bild. Fremde Fotos, nicht der Betrieb: zum Livegang durch eigene Fotos ersetzen
- Shop-Fotos: freie Fotos über Openverse (Flickr, rawpixel), Lizenzen CC BY und CC0. Die Gutscheine sind bewusst ohne Foto, als Fläche mit dem Betrag. Fotografen und Lizenzen stehen auf der Shop-Seite unter „Bildnachweise“. Für den Livegang durch eigene Produktfotos aus der Werkstatt ersetzen
- Orte in `areaServed` (JSON-LD): die Städte der bestehenden Stadtseiten (siehe Offen 12) plus Duisburg, dazu der 50-km-Kreis. Link „Route planen“ (maps.app.goo.gl/vNScVN2UxSXLt74x9): Routenlink auf der aktuellen Website, abgerufen 03.11.2026
- Koordinaten der Werkstatt: strukturierte Daten der aktuellen Website. Flüsse und Autobahnen: Natural Earth (gemeinfrei)

## Offen, vor dem Livegang mit dem Kunden klären

Was auf der Seite noch nicht belegt war, ist im Entwurf vorsichtig formuliert oder weggelassen. Diese Fragen braucht es vom Betrieb:

1. **Essen**: Adresse, Öffnungszeiten, Termine nach Absprache? (Im Entwurf „Adresse folgt“.)
2. **Gummersbach**: Eröffnungsdatum oder grober Zeitraum.
3. **Telefon**: Verzeichnisse nennen teils 0203 36989837, die Website 0203 36989833. Im Entwurf steht …833.
4. **Öffnungszeiten**: Ein Verzeichnis nennt 6:30, die Website 9:30. Im Entwurf steht 9:30. An Feiertagen geschlossen? Bis dahin zeigt der Live-Status an Feiertagen nur die festen Zeiten.
5. **Mobiler Radius**: 50 km (Startseite) oder 100 km (alte Stadtseite Aachen)? Im Einzelfall weiter?
6. **Dauer**: Reparatur meist eine halbe Stunde? Ohne Termin möglich? Tausch am selben Tag oder in wenigen Stunden? Im Entwurf steht nur „sagen wir dir nach dem Foto“, die Kundenstimmen zeigen die Erfahrung.
7. **Preis ohne Teilkasko**: Nennt ihr vorab einen festen Preis? Rückmeldung per WhatsApp innerhalb von 24 Stunden (stand auf der alten Startseite), soll das wieder rein?
8. **Leistungen**: Seiten- und Heckscheibe auch nach Einbruch? Mobiler Service auch auf Firmenhöfen?
9. **Shop**: Sortiment, Preise, Wischer-Montage beim Abholen, Versand (Dienstleister, Preis), Zahlarten, Gutscheine (Herbstcheck, Geschenkgutschein). Alles im Entwurf als Vorschlag gekennzeichnet. Technik: Shopify, WooCommerce oder Shopware.
10. **Kundenstimmen**: Freigabe der Kürzungen. Google-Bewertungen live einbinden, wenn gewünscht (dann mit Cookie-Hinweis).
11. **Fotos**: Einverständnis der Personen aus den Reels; wer ist auf dem Handschlag-Foto? Für den Livegang ein Shooting in der Werkstatt (Team, Halle, echte Scheiben, ein echtes Steinschlag-Foto für den Start) und ein kurzer Clip aus der Halle als bewegtes Bild.
12. **SEO**: Die bestehenden Stadtseiten (Autoglas Oberhausen, Moers, Dinslaken, Essen, Bottrop, Krefeld, Voerde, Rheinberg, Kamp-Lintfort, Neukirchen-Vluyn, Aachen, Düren, Mülheim) und die Unterseiten `/windschutzscheibe-wechseln-duisburg` und `/steinschlag-reparatur-duisburg` übernehmen oder per Weiterleitung umziehen (Tabelle in `.taste-skill/seo-befunde.md`), sonst gehen Rankings verloren.
13. **Rechtliches**: Impressum, Datenschutz, für den Shop zusätzlich AGB, Widerruf, Versandbedingungen.

## Dateien

```
index.html            Startseite
shop.html             Shop
assets/css/           site.css, shop.css, fonts.css
assets/js/            site.js (Interaktionen), shop.js, map-data.js (Kartengrundlage)
assets/fonts/         Barlow und Barlow Condensed (lokal, SIL Open Font License)
assets/img/           Logo als SVG, Icon-Sprite, Instagram-Ausschnitte
vorschau/             Screenshots für Präsentation oder WhatsApp an den Kunden
vorschau-einzeldatei/ Startseite und Shop als je eine Datei zum Verschicken
```
