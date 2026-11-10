/* Autoglas Zentrum Aydin · Shop-Entwurf
   Beispielsortiment, Filter, Warenkorb (nur im Browser), Wischer-Finder nach HSN/TSN. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const euro = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
  const WA = 'https://wa.me/4917620908479?text=';

  // Beispielsortiment (Preise im Entwurf frei angenommen)
  const ARTIKEL = [
    { id: 'w-satz', kat: 'wischer', name: 'Flachbalken-Wischer, Satz vorne', spec: 'passend nach Fahrzeugschein, mit Adapter', preis: 24.9, ab: true, bild: 'w-satz', alt: 'Wischerarm auf rotem Lack vor der Windschutzscheibe', grund: 'Montage: Vorschlag', gross: true,
      punkte: ['nach HSN/TSN zugeordnet', 'Montage beim Abholen (Vorschlag)', 'leise und streifenfrei'] },
    { id: 'w-premium', kat: 'wischer', name: 'Hybrid-Wischer Premium, Satz', spec: 'leise, streifenfrei, für Autos mit Kamera', preis: 34.9, ab: true, bild: 'w-premium', alt: 'Wischerblatt mit Regentropfen in Nahaufnahme', grund: 'Montage: Vorschlag' },
    { id: 'w-heck', kat: 'wischer', name: 'Heckwischer', spec: 'für Kombi, SUV und Kleinwagen', preis: 9.9, ab: true, bild: 'w-heck', alt: 'Scheibe voller Regentropfen mit Wischern', grund: 'Montage: Vorschlag' },
    { id: 'p-winter5', kat: 'winter', name: 'Winter-Scheibenreiniger 5 L', spec: 'gebrauchsfertig bis −20 °C', preis: 12.9, bild: 'p-winter5', alt: 'Behälter für Scheibenwaschwasser im Motorraum mit gelbem Deckel', grund: '2,58 € / L' },
    { id: 'p-sommer', kat: 'pflege', name: 'Sommer-Konzentrat 1 L', spec: 'ergibt bis zu 100 L Waschwasser', preis: 6.9, bild: 'p-sommer', alt: 'Außenspiegel mit Landstraße im Sommer', grund: '6,90 € / L' },
    { id: 'p-insekt', kat: 'pflege', name: 'Insektenentferner 500 ml', spec: 'löst Rückstände ohne Kratzen', preis: 5.9, bild: 'p-insekt', alt: 'Hand wäscht roten Lack mit einem Schwamm', grund: '11,80 € / L' },
    { id: 'p-versiegelung', kat: 'pflege', name: 'Scheibenversiegelung 100 ml', spec: 'Regen perlt ab, bessere Sicht nachts', preis: 14.9, bild: 'p-versiegelung', alt: 'Wassertropfen perlen auf Glas', grund: '149,00 € / L' },
    { id: 'p-enteiser', kat: 'winter', name: 'Enteiser-Spray 500 ml', spec: 'wirkt in Sekunden, schont Gummis', preis: 5.9, bild: 'p-enteiser', alt: 'Eisblumen auf einer Autoscheibe', grund: '11,80 € / L' },
    { id: 'p-kratzer', kat: 'winter', name: 'Eiskratzer mit Handschuh', spec: 'warme Hand, Messinglippe', preis: 7.9, bild: 'p-kratzer', alt: 'Eiskratzer mit kariertem Handschuh auf einem Tisch', grund: 'Stück' },
    { id: 'p-abdeckung', kat: 'winter', name: 'Frontscheiben-Abdeckung', spec: 'gegen Eis und Schnee, mit Magneten', preis: 14.9, bild: 'p-abdeckung', alt: 'Rotes Auto mit Schnee auf dem Dach', grund: 'Stück' },
    { id: 'g-check', kat: 'gutschein', name: 'Gutschein Herbstcheck', spec: 'Scheibe, Wischer, Wasser, Frostschutz', preis: 19.9, bild: 'g-check', alt: 'Landstraße durch einen bunten Herbstwald', grund: 'einlösbar in Duisburg' },
    { id: 'paket-winter', kat: 'winter', versteckt: true, name: 'Winterpaket', spec: 'Reiniger 5 L, Enteiser, Eiskratzer, Abdeckung', preis: 34.9, bild: 'winter', alt: '', grund: 'Paket' },
    { id: 'g-50', kat: 'gutschein', name: 'Geschenkgutschein 50 €', spec: 'für Reparatur, Tausch oder Shop', preis: 50, bild: 'g-50', alt: 'Hand hält einen Autoschlüssel', grund: 'per Mail oder gedruckt' }
  ];
  // Einzeldatei-Vorschau legt eingebettete Bilder in window.AZA_BILDER ab
  const bildUrl = (n) => (window.AZA_BILDER && window.AZA_BILDER[n]) || 'assets/img/shop/' + n + '.jpg';

  /* ---------- Speicher (nur Komfort, darf fehlen) ---------- */
  const lesen = () => { try { return JSON.parse(localStorage.getItem('aza-korb') || '{}'); } catch (e) { return {}; } };
  const schreiben = (k) => { try { localStorage.setItem('aza-korb', JSON.stringify(k)); } catch (e) { /* privat oder blockiert: Korb lebt im Speicher weiter */ } };
  let korb = lesen();
  let liefer = 'abholung';

  /* ---------- Regal ---------- */
  const regal = $('[data-regal]');
  const preisHtml = (p, ab) => { const [e, c] = p.toFixed(2).split('.'); return `${ab ? '<small>ab</small>' : ''}${e}<sup>${c}</sup><small>€</small>`; };
  function regalBauen(kat) {
    regal.textContent = '';
    const liste = ARTIKEL.filter((a) => !a.versteckt && (kat === 'alle' || a.kat === kat));
    if (!liste.length) { regal.innerHTML = '<li class="regal__leer">Hier ist gerade nichts im Regal.</li>'; return; }
    liste.forEach((a, i) => {
      const gross = a.gross && (kat === 'alle' || kat === a.kat);
      const li = document.createElement('li'); if (gross) li.className = 'gross';
      li.innerHTML = `
        <article class="produkt${gross ? ' produkt--gross' : ''}" aria-labelledby="t-${a.id}">
          <figure class="produkt__bild">
            <img src="${bildUrl(a.bild)}" alt="${a.alt}" width="800" height="600" loading="${i < 4 ? 'eager' : 'lazy'}" decoding="async">
          </figure>
          <div class="produkt__info">
            <h3 class="produkt__name" id="t-${a.id}">${a.name}</h3>
            <p class="produkt__spec">${a.spec}</p>
            ${gross && a.punkte ? `<ul class="produkt__punkte" role="list">${a.punkte.map((p) => `<li>${p}</li>`).join('')}</ul>` : '<span></span>'}
            <div class="produkt__preis"><span class="preis">${preisHtml(a.preis, a.ab)}</span><span class="produkt__grund">${a.grund}</span></div>
            <button class="btn btn--schwarz produkt__korb" type="button" data-rein="${a.id}"><span>In den Korb</span></button>
          </div>
        </article>`;
      regal.appendChild(li);
    });
    const extra = document.createElement('li'); extra.className = 'anfrage';
    extra.innerHTML = `<div class="anfrage__kachel"><p class="anfrage__titel">Wir besorgen's.</p><p>Spezielle Wischer, Pflege oder Zubehör für dein Modell. Kurz schreiben, wir sagen dir Preis und Termin.</p><a class="btn btn--schwarz" href="${WA + encodeURIComponent('Hallo, ich suche folgendes Zubehör: ')}"><span>Per WhatsApp fragen</span></a></div>`;
    regal.appendChild(extra);
    knoepfeMarkieren();
  }
  const filter = $('[data-filter]');
  $$('button', filter).forEach((b) => {
    const k = b.dataset.kat; const n = ARTIKEL.filter((a) => !a.versteckt && (k === 'alle' || a.kat === k)).length;
    $(`[data-anzahl="${k}"]`, b).textContent = String(n);
    b.addEventListener('click', () => {
      $$('button', filter).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      regalBauen(k);
    });
  });
  // Sprung per Anker (#wischer, #pflege, #winter) vorfiltern
  const start = (location.hash || '').slice(1);
  const startKnopf = start && $(`[data-kat="${start}"]`, filter);
  if (startKnopf) { startKnopf.click(); setTimeout(() => $('#sortiment').scrollIntoView(), 50); } else regalBauen('alle');

  regal.addEventListener('click', (e) => {
    const b = e.target.closest('[data-rein]'); if (!b) return;
    rein(b.dataset.rein, 1);
    b.classList.add('is-drin'); $('span', b).textContent = 'Im Korb';
    setTimeout(() => { b.classList.remove('is-drin'); knoepfeMarkieren(); }, 1400);
  });
  function knoepfeMarkieren() {
    $$('[data-rein]', regal).forEach((b) => { if (!b.classList.contains('is-drin')) $('span', b).textContent = korb[b.dataset.rein] ? `Noch einen (${korb[b.dataset.rein].n} im Korb)` : 'In den Korb'; });
  }

  /* ---------- Korb ---------- */
  const zahl = $('[data-korb-zahl]'); const korbKnopf = $('[data-korb-auf]');
  const schublade = $('[data-schublade]'); const schatten = $('[data-schatten]'); const posten = $('[data-posten]');
  function rein(id, n, notiz) {
    const k = korb[id] || { n: 0 }; k.n += n; if (notiz) k.notiz = notiz;
    if (k.n <= 0) delete korb[id]; else korb[id] = k;
    schreiben(korb); zeichnen();
    korbKnopf.classList.remove('hupf'); void korbKnopf.offsetWidth; korbKnopf.classList.add('hupf');
  }
  function zeichnen() {
    const ids = Object.keys(korb).filter((id) => ARTIKEL.some((a) => a.id === id));
    const stueck = ids.reduce((s, id) => s + korb[id].n, 0);
    zahl.textContent = String(stueck);
    zahl.setAttribute('aria-label', `${stueck} Artikel im Korb`);
    posten.textContent = '';
    if (!ids.length) {
      posten.innerHTML = '<li class="schublade__leer"><p>Noch leer. Fang mit Wischern an, die sind nach einem Winter fast immer durch.</p><a class="btn btn--schwarz" href="#sortiment" data-korb-zu-link><span>Zum Sortiment</span></a></li>';
    }
    let summe = 0;
    ids.forEach((id) => {
      const a = ARTIKEL.find((x) => x.id === id); const k = korb[id]; summe += a.preis * k.n;
      const li = document.createElement('li'); li.className = 'posten';
      li.innerHTML = `
        <span class="posten__bild"><img src="${bildUrl(a.bild)}" alt="" width="58" height="58"></span>
        <div><b>${a.name}</b><small>${k.notiz ? k.notiz : a.spec}</small><br>
          <span class="menge"><button type="button" data-minus="${id}" aria-label="Eins weniger">−</button><output aria-live="polite">${k.n}</output><button type="button" data-plus="${id}" aria-label="Eins mehr">+</button></span></div>
        <div class="posten__preis">${euro.format(a.preis * k.n)}<button class="posten__weg" type="button" data-weg="${id}">Entfernen</button></div>`;
      posten.appendChild(li);
    });
    if (liefer === 'versand' && ids.length) summe += 4.9;
    $('[data-summe]').textContent = euro.format(summe);
    knoepfeMarkieren();
  }
  posten.addEventListener('click', (e) => {
    const t = e.target.closest('button'); if (!t) return;
    if (t.dataset.plus) rein(t.dataset.plus, 1);
    if (t.dataset.minus) rein(t.dataset.minus, -1);
    if (t.dataset.weg) { delete korb[t.dataset.weg]; schreiben(korb); zeichnen(); }
  });
  $$('input[name="liefer"]').forEach((r) => r.addEventListener('change', () => { liefer = r.value; zeichnen(); }));
  let zuletzt = null;
  const oeffnen = (auf) => {
    schublade.classList.toggle('is-offen', auf); schatten.classList.toggle('is-offen', auf);
    schublade.setAttribute('aria-hidden', String(!auf)); korbKnopf.setAttribute('aria-expanded', String(auf));
    if (auf) { zuletzt = document.activeElement; setTimeout(() => $('[data-korb-zu]').focus(), 60); }
    else { $('[data-kasse-hinweis]').classList.remove('is-da'); (zuletzt || korbKnopf).focus(); }
  };
  korbKnopf.addEventListener('click', () => oeffnen(true));
  $('[data-korb-zu]').addEventListener('click', () => oeffnen(false));
  schatten.addEventListener('click', () => oeffnen(false));
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && schublade.classList.contains('is-offen')) oeffnen(false); });
  $('[data-kasse]').addEventListener('click', () => $('[data-kasse-hinweis]').classList.add('is-da'));
  posten.addEventListener('click', (e) => { if (e.target.closest('[data-korb-zu-link]')) oeffnen(false); });
  // Winterpaket: vier Artikel auf einmal, Paketpreis als Hinweis
  const paket = $('[data-paket]');
  if (paket) paket.addEventListener('click', () => {
    rein('paket-winter', 1);
    $('span', paket).textContent = 'Im Korb'; setTimeout(() => { $('span', paket).textContent = 'Paket in den Korb'; }, 1600);
    oeffnen(true);
  });
  zeichnen();

  /* ---------- Wischer-Finder ---------- */
  const form = $('[data-finder]'); const hsn = $('[data-hsn]'); const tsn = $('[data-tsn]'); const antwort = $('[data-finder-antwort]');
  hsn.addEventListener('input', () => { hsn.value = hsn.value.replace(/\D/g, '').slice(0, 4); hsn.closest('.feld').dataset.fehler = 'false'; });
  tsn.addEventListener('input', () => { tsn.value = tsn.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3); tsn.closest('.feld').dataset.fehler = 'false'; });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const okH = /^\d{4}$/.test(hsn.value), okT = /^[A-Z0-9]{3}$/.test(tsn.value);
    hsn.closest('.feld').dataset.fehler = String(!okH); tsn.closest('.feld').dataset.fehler = String(!okT);
    if (!okH || !okT) {
      antwort.innerHTML = !okH ? '<b>Feld 2.1:</b> Da stehen genau 4 Ziffern.' : '<b>Feld 2.2:</b> Die ersten 3 Zeichen reichen.';
      (!okH ? hsn : tsn).focus(); return;
    }
    const code = `HSN ${hsn.value} / TSN ${tsn.value}`;
    antwort.innerHTML = `<b>${code}</b> ist notiert. Wir suchen den passenden Satz raus und bestätigen dir Länge und Preis per WhatsApp. <a href="${WA + encodeURIComponent(`Hallo, ich brauche Wischer für ${code}.`)}" style="color:inherit">Direkt schreiben</a>`;
    rein('w-satz', 1, `für ${code}`);
    oeffnen(true);
  });
})();
