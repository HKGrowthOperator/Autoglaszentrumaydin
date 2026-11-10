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
    { id: 'w-satz', kat: 'wischer', name: 'Flachbalken-Wischer, Satz vorne', spec: 'passend nach Fahrzeugschein, mit Adapter', preis: 24.9, ab: true, bild: 'w-satz', alt: 'Wischerarm auf rotem Lack vor der Windschutzscheibe', grund: 'Montage inklusive', gross: true,
      punkte: ['nach HSN/TSN zugeordnet', 'beim Abholen direkt montiert', 'leise und streifenfrei'] },
    { id: 'w-premium', kat: 'wischer', name: 'Hybrid-Wischer Premium, Satz', spec: 'leise und streifenfrei, passend nach Fahrzeugschein', preis: 34.9, ab: true, bild: 'w-premium', alt: 'Wischerblatt mit Regentropfen in Nahaufnahme', grund: 'Montage inklusive' },
    { id: 'w-heck', kat: 'wischer', name: 'Heckwischer', spec: 'für Kombi, SUV und Kleinwagen', preis: 9.9, ab: true, bild: 'w-heck', alt: 'Scheibe voller Regentropfen mit Wischern', grund: 'Montage inklusive' },
    { id: 'p-winter5', kat: 'winter', name: 'Winter-Scheibenreiniger 5 L', spec: 'gebrauchsfertig bis −20 °C', preis: 12.9, bild: 'p-winter5', alt: 'Behälter für Scheibenwaschwasser im Motorraum mit gelbem Deckel', grund: '2,58 € / L' },
    { id: 'p-sommer', kat: 'pflege', name: 'Sommer-Konzentrat 1 L', spec: 'ergibt bis zu 100 L Waschwasser', preis: 6.9, bild: 'p-sommer', alt: 'Waschwasser auf der Windschutzscheibe, dahinter die Autobahn', grund: '6,90 € / L' },
    { id: 'p-insekt', kat: 'pflege', name: 'Insektenentferner 500 ml', spec: 'löst Rückstände ohne Kratzen', preis: 5.9, bild: 'p-insekt', alt: 'Hand wäscht roten Lack mit einem Schwamm', grund: '11,80 € / L' },
    { id: 'p-versiegelung', kat: 'pflege', name: 'Scheibenversiegelung 100 ml', spec: 'Regen perlt ab, bessere Sicht nachts', preis: 14.9, bild: 'p-versiegelung', alt: 'Wassertropfen perlen auf Glas', grund: '149,00 € / L' },
    { id: 'p-enteiser', kat: 'winter', name: 'Enteiser-Spray 500 ml', spec: 'wirkt in Sekunden, schont Gummis', preis: 5.9, bild: 'p-enteiser', alt: 'Eisblumen auf einer Autoscheibe', grund: '11,80 € / L' },
    { id: 'p-kratzer', kat: 'winter', name: 'Eiskratzer mit Handschuh', spec: 'warme Hand, Messinglippe', preis: 7.9, bild: 'p-kratzer', alt: 'Eiskratzer mit kariertem Handschuh auf einem Tisch', grund: 'Stück' },
    { id: 'p-abdeckung', kat: 'winter', name: 'Frontscheiben-Abdeckung', spec: 'gegen Eis und Schnee, mit Magneten', preis: 14.9, bild: 'p-abdeckung', alt: 'Rotes Auto mit Schnee auf dem Dach', grund: 'Stück' },
    { id: 'g-check', kat: 'gutschein', name: 'Gutschein Herbstcheck', spec: 'Scheibe, Wischer, Wasser, Frostschutz', preis: 19.9, flaeche: 'Herbst&shy;check', grund: 'einlösbar in Duisburg' },
    { id: 'paket-winter', kat: 'winter', versteckt: true, name: 'Winterpaket', spec: 'Reiniger 5 L, Enteiser, Eiskratzer, Abdeckung', preis: 34.9, bild: 'winter', alt: '', grund: 'Paket' },
    { id: 'g-50', kat: 'gutschein', name: 'Geschenkgutschein 50 €', spec: 'für Reparatur, Tausch oder Shop', preis: 50, flaeche: '50&nbsp;€', grund: 'per Mail oder gedruckt' }
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
  const preisText = (p, ab) => (ab ? 'ab ' : '') + euro.format(p);
  function regalBauen(kat) {
    regal.textContent = '';
    const liste = ARTIKEL.filter((a) => !a.versteckt && (kat === 'alle' || a.kat === kat));
    if (!liste.length) { regal.innerHTML = '<li class="regal__leer">Hier ist gerade nichts im Regal.</li>'; return; }
    liste.forEach((a, i) => {
      const gross = a.gross && (kat === 'alle' || kat === a.kat);
      const li = document.createElement('li'); if (gross) li.className = 'gross';
      li.innerHTML = `
        <article class="produkt${gross ? ' produkt--gross' : ''}" aria-labelledby="t-${a.id}">
          ${a.flaeche
            ? `<figure class="produkt__bild produkt__bild--flaeche" aria-hidden="true"><span>${a.flaeche}</span></figure>`
            : `<figure class="produkt__bild"><img src="${bildUrl(a.bild)}" alt="${a.alt}" width="800" height="600" loading="${i < 4 ? 'eager' : 'lazy'}" decoding="async"></figure>`}
          <div class="produkt__info">
            <h3 class="produkt__name" id="t-${a.id}">${a.name}</h3>
            <p class="produkt__spec">${a.spec}</p>
            ${gross && a.punkte ? `<ul class="produkt__punkte" role="list">${a.punkte.map((p) => `<li>${p}</li>`).join('')}</ul>` : ''}
            <p class="produkt__preis"><span class="preis">${preisText(a.preis, a.ab)}</span><span class="produkt__grund">${a.grund}</span></p>
            <button class="knopf knopf--tinte produkt__korb" type="button" data-rein="${a.id}"><span>In den Korb</span></button>
          </div>
        </article>`;
      regal.appendChild(li);
    });
    const extra = document.createElement('li'); extra.className = 'anfrage';
    extra.innerHTML = `<h3>Nicht dabei? Wir besorgen es.</h3><p>Spezielle Wischer, Pflege oder Zubehör für dein Modell. Kurz schreiben, wir sagen dir Preis und Termin.</p><a class="knopf knopf--rot" href="${WA + encodeURIComponent('Hallo, ich suche folgendes Zubehör: ')}" data-wa>Per WhatsApp fragen</a>`;
    regal.appendChild(extra);
    knoepfeMarkieren();
    auftritt();
  }
  // Produkte treten je Reihe versetzt auf, einmal beim Eintreten
  let beobachter = null;
  function auftritt() {
    const teile = $$('.regal > li');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) { teile.forEach((t) => t.classList.add('ist-da')); return; }
    if (beobachter) beobachter.disconnect();
    beobachter = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('ist-da'); beobachter.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: 0.1 });
    teile.forEach((t, i) => { t.style.setProperty('--d', ((i % 3) * 0.08).toFixed(2) + 's'); beobachter.observe(t); });
  }
  const filter = $('[data-filter]');
  $$('button', filter).forEach((b) => {
    const k = b.dataset.kat;
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
      posten.innerHTML = '<li class="schublade__leer"><p>Noch leer. Fang mit Wischern an, vor dem Winter lohnt ein frischer Satz.</p><a class="knopf knopf--tinte" href="#sortiment" data-korb-zu-link>Zum Sortiment</a></li>';
    }
    let summe = 0;
    ids.forEach((id) => {
      const a = ARTIKEL.find((x) => x.id === id); const k = korb[id]; summe += a.preis * k.n;
      const li = document.createElement('li'); li.className = 'posten';
      li.innerHTML = `
        ${a.flaeche ? '<span class="posten__flaeche" aria-hidden="true"></span>' : `<img src="${bildUrl(a.bild)}" alt="" width="64" height="64">`}
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
    schublade.hidden = !auf; schatten.hidden = !auf;
    korbKnopf.setAttribute('aria-expanded', String(auf));
    document.body.style.overflow = auf ? 'hidden' : '';
    if (auf) { zuletzt = document.activeElement; setTimeout(() => $('[data-korb-zu]').focus(), 60); }
    else { $('[data-kasse-hinweis]').hidden = true; (zuletzt || korbKnopf).focus(); }
  };
  korbKnopf.addEventListener('click', () => oeffnen(true));
  $('[data-korb-zu]').addEventListener('click', () => oeffnen(false));
  schatten.addEventListener('click', () => oeffnen(false));
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !schublade.hidden) oeffnen(false); });
  $('[data-kasse]').addEventListener('click', () => { $('[data-kasse-hinweis]').hidden = false; });
  posten.addEventListener('click', (e) => { if (e.target.closest('[data-korb-zu-link]')) oeffnen(false); });
  // Winterpaket: vier Artikel auf einmal, Paketpreis als Hinweis
  const paket = $('[data-paket]');
  if (paket) paket.addEventListener('click', () => {
    rein('paket-winter', 1);
    paket.textContent = 'Im Korb'; setTimeout(() => { paket.textContent = 'Paket in den Korb'; }, 1600);
    oeffnen(true);
  });
  zeichnen();

  /* ---------- Wischer-Finder ---------- */
  const form = $('[data-finder]'); const hsn = $('[data-hsn]'); const tsn = $('[data-tsn]'); const antwort = $('[data-finder-antwort]');
  const feld = (i) => i.closest('.finder__feld');
  hsn.addEventListener('input', () => { hsn.value = hsn.value.replace(/\D/g, '').slice(0, 4); feld(hsn).dataset.fehler = 'false'; });
  tsn.addEventListener('input', () => { tsn.value = tsn.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3); feld(tsn).dataset.fehler = 'false'; });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const okH = /^\d{4}$/.test(hsn.value), okT = /^[A-Z0-9]{3}$/.test(tsn.value);
    feld(hsn).dataset.fehler = String(!okH); feld(tsn).dataset.fehler = String(!okT);
    if (!okH || !okT) {
      antwort.textContent = !okH ? 'Feld 2.1: Da stehen genau 4 Ziffern.' : 'Feld 2.2: Gib die ersten 3 Zeichen ein.';
      (!okH ? hsn : tsn).focus(); return;
    }
    const code = `HSN ${hsn.value} / TSN ${tsn.value}`;
    antwort.innerHTML = `Für ${code} liegt ein Wischer-Satz vorne in deinem Korb. Länge und Preis bestätigen wir dir nach der Bestellung. <a href="${WA + encodeURIComponent(`Hallo, ich brauche Wischer für ${code}.`)}">Direkt schreiben</a>`;
    rein('w-satz', 1, `für ${code}`);
    oeffnen(true);
  });
})();
