# Plan: Entwurf vom 5. November ausbessern, KI-Slop raus

Stand 10. November 2026. Grundlage ist der zurückgesetzte erste Entwurf (Commit `7f34429`).
Ziel: Das Design bleibt, wie es ist. Raus kommt nur, was nach KI-Baukasten aussieht, was nicht belegt ist und was am Handy stört.

## Wurzel: Das bleibt unverändert

- Farben: Logorot, Schwarz, Creme. Schwarzer Kopf mit rotem Knopf „Foto schicken“.
- Schrift: Sofia Sans, kursiv und schmal, in Großbuchstaben für die Überschriften.
- Start: „Scheibe kaputt?“ auf Rot mit der gezeichneten Scheibe, Regen und Wischern.
- 2-Euro-Test mit Münze, Riss-Szene, Karte mit 50-km-Umkreis, Versicherer-Logos, Instagram-Bilder, Kundenstimmen, Shop mit Fahrzeugschein-Finder.
- Texte im Ton der Werkstatt („Hi Bruder, alles klar?“).

## Stamm: Das kommt raus oder wird ersetzt

Gemessen mit dem Prüfer aus `design-taste-frontend` (Startseite und Shop, Stand 5. November): 69 harte Befunde, davon 12 Nummerierungen, 14 Verläufe, 23 Schatten, 18 Trennlinien, 2 Emoji. Dazu 14 Etiketten über Überschriften und 33 Mini-Beschriftungen. Startseite am Desktop 18,6 Bildschirme, am Handy 29.

| # | Was | Wo | Stattdessen |
|---|---|---|---|
| 1 | Kleine rote Etiketten über jeder Überschrift („DER 2-EURO-TEST“, „LEISTUNGEN“, „KOSTEN“, „SO LÄUFT'S“, „FRAGEN“ …) | alle Abschnitte | ersatzlos weg, die Überschrift sagt es schon |
| 2 | Nummern 01 bis 09, 1 bis 4, 1 bis 3 | Leistungen, Ablauf, 2-Euro-Test, Shop-Karten | weg, die Reihenfolge reicht |
| 3 | Kleine Stempel und Abzeichen: Kästchen rechts in jeder Leistungszeile, „NEU“ am Shop, „WERKSTATT“, „STANDORT“, „BALD“, Initialen-Kästchen bei den Stimmen | Leistungen, Kopf, Standorte, Stimmen | als normaler Text in Satzschreibung oder weg |
| 4 | Trennlinien zwischen allen Zeilen | Leistungen, Stimmen, Fragen, Fuß | Abstand statt Linie |
| 5 | Schatten | Handy, Kassenbons, Shop-Karten | flach, ohne Schatten |
| 6 | Handy-Attrappe um den WhatsApp-Chat | Ablauf | nur die Chat-Blasen, ohne Gerät |
| 7 | Barcode-Verlauf und Schatten an den Kassenbons | Kosten | Bons bleiben als Idee, aber flach und ohne Barcode |
| 8 | Logo-Laufband unter dem Start | Start | weg, die Logos stehen schon bei den Kosten |
| 9 | Statusleiste ganz oben mit grünem Punkt und Mittelpunkten | Kopf | schlichte Zeile „Heute offen bis 18:00“ ohne Punkt |
| 10 | Strichzeichnungen der Scheibenformen | „Jede Scheibe hat ihre Form“ | Abschnitt weg, Fahrzeugtypen stehen in den Leistungen |
| 11 | Emoji „✓“ im Korb | Shop | Wort „Im Korb“ |
| 12 | 31 Schriftgrößen, viel Text unter 14 px | überall | fünf bis sechs Größen, Fließtext mindestens 17 px, Schrift bleibt Sofia Sans |
| 13 | Riss-Szene über drei Bildschirme festgehalten | Riss | gleiche Szene, kürzer (etwa 1,5 Bildschirme) |

## Texte: Unbelegtes raus (siehe Nachtrag in `ENTWURF-NOTIZEN.md`)

- Ändern: „oft noch am selben Tag“, „Termin, oft noch heute“, Festpreis ohne Teilkasko, „Fachbetrieb“, „auch nach Einbruch“, Gummersbach „bald“ (belegt ist „geplant“), „Termine in Essen nach Absprache“.
- Im Shop klar als Vorschlag markieren: Montage beim Abholen, Versand, Zahlarten, Sortiment und Preise.
- Bleibt: „Rückmeldung innerhalb von 24 Stunden“, das steht auf der Website des Betriebs.

## Handy: von 29 auf etwa 15 Bildschirme

- Punkte 1 bis 13 sparen schon viel Höhe (Formen-Abschnitt, Laufband, Riss kürzer, Handy-Attrappe).
- Leistungen als kompakte Liste ohne Kästchen, Kassenbons untereinander und kleiner, Fragen enger.
- Startbildschirm: Überschrift, Scheibe und WhatsApp-Knopf sichtbar, ohne zu scrollen.

## Krone: So läuft die Umsetzung

1. Jeder Punkt ist ein eigener Commit. Jeder Schritt lässt sich einzeln zurücknehmen.
2. Vor jedem Push: Screenshots vorher und nachher (Desktop und Handy) an dich.
3. Prüfung je Schritt: Prüfer und Lint, Funktionstest (2-Euro-Test, Karte, Menü, Shop, Korb, Finder), keine Konsolenfehler, Docker-Build.
4. Texte prüft der Agent `texter` gegen `ENTWURF-NOTIZEN.md`, die Abnahme macht `qa-abnahme`.
5. Kein neues Design, keine neuen Abschnitte, keine neuen Farben oder Schriften.

## Stand: umgesetzt am 10. November

Alle 13 Punkte, die Texte und die Handy-Fassung sind umgesetzt, jeder Schritt als eigener Commit. Zusätzlich auf Wunsch raus: Beschriftung im Startbild, Riss-Animation. Prüfer: 0 Befunde (vorher 69). Startseite Desktop 14,0 statt 18,6 Bildschirme, Handy 17 statt 29.

## Entschieden (10. November)

- Alles umsetzen.
- Kassenbons bleiben, flach: ohne Schatten, ohne Schräglage, ohne Barcode.
- Symbole in den Knöpfen (WhatsApp, Telefon, Route) bleiben.
