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
    { id: 'w-satz', kat: 'wischer', name: 'Flachbalken-Wischer, Satz vorne', spec: 'passend nach Fahrzeugschein, mit Adapter', preis: 24.9, ab: true, icon: 'p-wischer', grund: 'Montage inklusive', marke: 'Beliebt' },
    { id: 'w-premium', kat: 'wischer', name: 'Hybrid-Wischer Premium, Satz', spec: 'leise, streifenfrei, für Kameraautos', preis: 34.9, ab: true, icon: 'p-wischer', grund: 'Montage inklusive' },
    { id: 'w-heck', kat: 'wischer', name: 'Heckwischer', spec: 'für Kombi, SUV und Kleinwagen', preis: 9.9, ab: true, icon: 'p-heckwischer', grund: 'Montage inklusive' },
    { id: 'p-winter5', kat: 'winter', name: 'Winter-Scheibenreiniger 5 L', spec: 'gebrauchsfertig bis −20 °C', preis: 12.9, icon: 'p-kanister', grund: '2,58 € / L', marke: 'Saison' },
    { id: 'p-sommer', kat: 'pflege', name: 'Sommer-Scheibenreiniger Konzentrat 1 L', spec: 'ergibt bis zu 100 L', preis: 6.9, icon: 'p-flasche', grund: '6,90 € / L' },
    { id: 'p-insekt', kat: 'pflege', name: 'Insektenentferner 500 ml', spec: 'löst Rückstände ohne Kratzen', preis: 5.9, icon: 'p-spray', grund: '11,80 € / L' },
    { id: 'p-versiegelung', kat: 'pflege', name: 'Scheibenversiegelung 100 ml', spec: 'Regen perlt ab, bessere Sicht nachts', preis: 14.9, icon: 'p-flasche', grund: '149,00 € / L' },
    { id: 'p-enteiser', kat: 'winter', name: 'Enteiser-Spray 500 ml', spec: 'wirkt in Sekunden, schont Gummis', preis: 5.9, icon: 'p-spray', grund: '11,80 € / L' },
    { id: 'p-kratzer', kat: 'winter', name: 'Eiskratzer mit Handschuh', spec: 'Messinglippe, kratzt nicht', preis: 7.9, icon: 'p-kratzer', grund: 'Stück' },
    { id: 'p-abdeckung', kat: 'winter', name: 'Frontscheiben-Abdeckung', spec: 'gegen Eis und Schnee, mit Magneten', preis: 14.9, icon: 'p-abdeckung', grund: 'Stück' },
    { id: 'g-check', kat: 'gutschein', name: 'Gutschein Herbstcheck', spec: 'Scheibe, Wischer, Wasser, Frostschutz', preis: 19.9, icon: 'p-gutschein', grund: 'einlösbar in Duisburg', marke: 'Geschenk' },
    { id: 'g-50', kat: 'gutschein', name: 'Geschenkgutschein 50 €', spec: 'für Reparatur, Tausch oder Shop', preis: 50, icon: 'p-gutschein', grund: 'per Mail oder gedruckt' }
  ];
  const KAT = { wischer: 'Wischer', pflege: 'Pflege', winter: 'Winter', gutschein: 'Gutschein' };

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
    const liste = ARTIKEL.filter((a) => kat === 'alle' || a.kat === kat);
    if (!liste.length) { regal.innerHTML = '<li class="regal__leer">Hier ist gerade nichts im Regal.</li>'; return; }
    liste.forEach((a, i) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <article class="etikett" aria-labelledby="t-${a.id}">
          <span class="etikett__kat" data-kat="${a.kat}"><span>${KAT[a.kat]}</span><span>${String(i + 1).padStart(2, '0')}</span></span>
          ${a.marke ? `<span class="etikett__marke">${a.marke}</span>` : ''}
          <span class="etikett__bild"><svg viewBox="0 0 120 90" aria-hidden="true"><use href="#${a.icon}"/></svg></span>
          <span class="etikett__info">
            <span class="etikett__name" id="t-${a.id}">${a.name}</span>
            <span class="etikett__spec">${a.spec}</span>
            <span></span>
            <span class="etikett__preis"><span class="preis">${preisHtml(a.preis, a.ab)}</span><span class="etikett__grund">${a.grund}</span></span>
            <button class="btn btn--schwarz etikett__korb" type="button" data-rein="${a.id}"><span>In den Korb</span></button>
          </span>
        </article>`;
      regal.appendChild(li);
    });
    knoepfeMarkieren();
  }
  const filter = $('[data-filter]');
  $$('button', filter).forEach((b) => {
    const k = b.dataset.kat; const n = k === 'alle' ? ARTIKEL.length : ARTIKEL.filter((a) => a.kat === k).length;
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
    b.classList.add('is-drin'); $('span', b).textContent = 'Im Korb ✓';
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
      posten.innerHTML = '<li class="schublade__leer"><svg viewBox="0 0 120 90" width="110" aria-hidden="true"><use href="#p-wischer"/></svg><p>Noch leer. Fang mit Wischern an, die stimmen nach einem Winter fast nie mehr.</p></li>';
    }
    let summe = 0;
    ids.forEach((id) => {
      const a = ARTIKEL.find((x) => x.id === id); const k = korb[id]; summe += a.preis * k.n;
      const li = document.createElement('li'); li.className = 'posten';
      li.innerHTML = `
        <span class="posten__bild"><svg viewBox="0 0 120 90" aria-hidden="true"><use href="#${a.icon}"/></svg></span>
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
