# Autoglas Zentrum Aydin · Website-Entwurf

Stand 3. November 2026. Zwei Seiten: `index.html` (Startseite) und `shop.html` (Shop-Ausblick).
Öffnen: `index.html` doppelklicken. Läuft ohne Server, ohne Baukasten, ohne Internet (nur WhatsApp, Instagram und Route verlinken nach draußen).

## Die Idee in einem Satz

Die Seite redet wie ihr Instagram („Scheibe kaputt?“, „Hi Bruder, alles klar?“), sieht aus wie ein Werkstattplakat in ihrem Logorot und zeigt das Thema Glas, statt nur darüber zu reden.

## Was die Seite besonders macht

| Baustein | Was passiert | Warum das verkauft |
|---|---|---|
| Hero mit Scheibe | Regen auf einer Windschutzscheibe, zwei Wischer wischen ihn weg, Steinschlag mit Markierung | Sofort klar, worum es geht. Kein Stockfoto |
| 2-Euro-Test | Kunde tippt auf die Stelle, schiebt die Größe neben eine 2-Euro-Münze, sagt „Riss ja/nein“. Ergebnis: Reparatur oder neue Scheibe, Kosten, Dauer | Nimmt die Unsicherheit, führt direkt zu WhatsApp mit vorausgefülltem Text |
| Riss beim Scrollen | Der Steinschlag reißt beim Scrollen weiter, Kilometer und Temperatur laufen mit | Erklärt, warum man heute kommen sollte |
| Leistungen als Liste | Jede Zeile öffnet WhatsApp mit der Leistung schon im Text | Weniger Klicks bis zur Anfrage |
| Kassenbons | „Du zahlst 0 €*“ und „150 € (z. B. deine SB)“ als Beispielrechnung | Versicherungsthema in 5 Sekunden verstanden |
| Chat | WhatsApp-Verlauf spielt sich ab, in ihrer Sprache | Zeigt den Ablauf statt ihn zu beschreiben |
| Karte (GIS) | Eigene Karte aus echten Geodaten (Rhein, Ruhr, Lippe, Maas, Autobahnen), 50-km-Radius als Punktraster, Werkstatt, Essen, Gummersbach. Prüfer: Stadt eingeben oder Standort teilen, Luftlinie wird berechnet | Beantwortet „Kommt ihr zu mir?“ direkt. Keine Google-Karte, also DSGVO-ruhig |
| Live-Status | Oben steht „jetzt geöffnet, bis 18:00“ oder „öffnet Montag 9:30“, nach Berliner Zeit | Wirkt lebendig, spart Anrufe |
| Mobile Leiste | Anrufen, WhatsApp, Route immer unten am Handy | Die meisten Kunden kommen übers Handy |
| Shop | Wischer-Finder direkt im nachgebauten Fahrzeugschein (Feld 2.1 HSN, 2.2 TSN), Regal-Etiketten mit Grundpreis, Filter, Warenkorb mit Abholung oder Versand | Shop wirkt wie aus der Werkstatt, nicht wie ein Baukasten-Shop |

Technik nebenbei: Logo als scharfe Vektordatei nachgebaut (bisher nur JPG), Schriften lokal eingebunden, keine Tracker, strukturierte Daten für Google (AutoRepair), saubere Überschriftenstruktur, funktioniert mit Tastatur und bei „weniger Bewegung“ im Betriebssystem.

## Was aus echten Quellen stammt

- Adresse, Telefon, WhatsApp, E-Mail, Öffnungszeiten Mo bis Sa 9:30 bis 18:00: aktuelle Website autoglaszentrum-aydin.de
- Leistungen, 30 Jahre Garantie auf Dichtigkeit, Kamera-Kalibrierung, 50 km mobiler Service, 2-Euro-Regel, Klebeband-Tipp: aktuelle Website
- Kundenstimmen (Guido B., Mira S., Gabi M., Karl H., Niklas F., Theorist): wörtlich gekürzt von der aktuellen Website
- Versichererliste und Versicherer-Logos (HUK-COBURG, Allianz, ERGO, AXA, Generali, R+V, DEVK, HDI, VHV, LVM, Württembergische, Provinzial): aktuelle Website, freigestellt und optisch gleich groß gemacht, Farben und Proportionen unverändert
- Instagram-Bilder: aus dem Screenshot geschnitten (niedrige Auflösung, nur für den Entwurf)
- Shop-Fotos: freie Fotos über Openverse (Flickr, rawpixel), Lizenzen CC BY, CC0 und Public Domain. Fotografen und Lizenzen stehen auf der Shop-Seite unter „Bildnachweise“. Für den Livegang durch eigene Produktfotos aus der Werkstatt ersetzen
- Koordinaten der Werkstatt: strukturierte Daten der aktuellen Website. Flüsse und Autobahnen: Natural Earth (gemeinfrei)

## Offen, vor dem Livegang mit dem Kunden klären

1. **Essen**: Adresse und Öffnungszeiten fehlen (im Entwurf „[Adresse folgt]“).
2. **Gummersbach**: Eröffnungsdatum oder grober Zeitraum.
3. **Telefon**: Verzeichnisse nennen teils 0203 36989837, die Website 0203 36989833. Im Entwurf steht …833.
4. **Öffnungszeiten**: ein Verzeichnis nennt 6:30, die Website 9:30. Im Entwurf steht 9:30.
5. **Shop**: Sortiment und Preise sind Beispiele. „Wischer-Montage inklusive“ und „Versand in ganz Deutschland“ sind Vorschläge, keine Zusagen des Kunden.
6. **Fotos**: Für den Livegang ein Shooting in der Werkstatt (Team, Halle, echte Scheiben). Die Instagram-Ausschnitte sind nur Platzhalter.
7. **Bewertungen**: Google-Bewertungen live einbinden, wenn gewünscht (dann mit Cookie-Hinweis).
8. **SEO**: Die bestehenden Stadtseiten (Autoglas Oberhausen, Moers, Dinslaken, Essen, Bottrop, Krefeld, Voerde, Rheinberg, Kamp-Lintfort, Neukirchen-Vluyn, Aachen, Düren, Mülheim) und die Unterseiten `/windschutzscheibe-wechseln-duisburg` und `/steinschlag-reparatur-duisburg` müssen übernommen oder per Weiterleitung umgezogen werden, sonst gehen Rankings verloren.
9. **Rechtliches**: Impressum, Datenschutz, für den Shop zusätzlich AGB, Widerruf, Versandbedingungen.
10. **Shop-Technik**: Shopify, WooCommerce oder Shopware anbinden (Zahlung, Bestände, Rechnungen). Im Entwurf ist die Kasse nur angedeutet.

## Dateien

```
index.html            Startseite
shop.html             Shop
assets/css/           site.css, shop.css, fonts.css
assets/js/            site.js (Interaktionen), shop.js, map-data.js (Kartengrundlage)
assets/fonts/         Sofia Sans (lokal, SIL Open Font License)
assets/img/           Logo als SVG, Icon-Sprite, Instagram-Ausschnitte
vorschau/             Screenshots für Präsentation oder WhatsApp an den Kunden
```

## Nachtrag 10. November 2026: geprüfte Quellen

Die Seite ist auf den Entwurf vom 5. November zurückgesetzt. Bei einer Überarbeitung am 10. November wurden die Quellen geprüft; diese Ergebnisse gelten weiter:

- Kundenstimmen: Volltexte, aus denen gekürzt wurde (aktuelle Website, abgerufen 03.11.2026):
  - Gabi M.: „Nur zu empfehlen. Sehr freundlich, persönlich. Ich musste mich um nichts kümmern mit der Versicherung. Gehörte alles mit zum Service. Termin hab ich auch sehr schnell bekommen“
  - Guido B.: „Toller Service. Bin ohne Termin hingefahren, eine halbe Stunde später war der Steinschlag ausgebessert. Dabei freundlicher Service und ein gutes Gefühl. Sehr zu empfehlen.“
  - Mira S.: „Ich hatte einen kaputte Windschutzscheibe und bekam von heute auf morgen einen Termin zum Wechsel. Mir wurde unglaublich schnell geholfen und hatte nach nicht einmal 3 Stunden mein Auto wieder und dazu noch sehr nette Mitarbeiter als Kontakt. Kann ich mit bestem Gewissen weiterempfehlen und werde das auch tun :)“
  - Karl H.: „Scheibe vom Wohnmobil wurde schnellstens ersetzt. Bester Service, bester Preis.“
  - Niklas F.: „Wurde eine neue Scheibe eingebaut. Gute Arbeit und innerhalb zwei Stunden konnte das Auto wieder abgeholt werden. Preis absolut in Ordnung, deutlich billiger als bekannte Alternativen... Kann ich nur empfehlen.“ (Preisvergleich auf der Seite weggelassen)
  - Theorist: „Sehr gute, ordentliche Arbeit. Von Anruf bis zur installierten Windschutzscheibe vergeht nicht viel Zeit. Das Team ist sehr nett und in der Nähe gibt es viele Restaurants / Cafés, falls man sich den spannenden Prozess nicht anschauen möchte.“
- Belegt durch die aktuelle Website: „wir garantieren eine Rückmeldung innerhalb von 24 Stunden“ (alte Startseite, abgerufen 10.11.2026).
- Nicht belegt und vor dem Versand mit dem Betrieb zu klären, weil der Entwurf sie nennt: Dauer „am selben Tag“, Festpreis ohne Teilkasko, Montage beim Abholen, Versand und Zahlarten im Shop (PayPal, Klarna usw.), Gummersbach „bald“ (belegt ist nur „geplant“), Adresse und Zeiten in Essen.
