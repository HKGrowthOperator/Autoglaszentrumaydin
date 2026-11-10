/* Autoglas Zentrum Aydin · Website-Entwurf · Interaktionen
   Ohne Bibliotheken, ohne Tracker, ohne externe Kacheln.
   Alles, was hier passiert, ist ohne Skript auch lesbar: Das HTML trägt den Standardzustand. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const NS = 'http://www.w3.org/2000/svg';
  const el = (tag, attrs = {}, parent) => {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  };
  const rng = (seed) => () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const WA = 'https://wa.me/4917620908479?text=';

  /* 1 · Öffnungsstatus (Europe/Berlin, Mo bis Sa 9:30 bis 18:00) */
  function oeffnung() {
    const box = $('[data-status]'); if (!box) return;
    const parts = new Intl.DateTimeFormat('de-DE', { timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
    const get = (t) => (parts.find((p) => p.type === t) || {}).value || '';
    const tage = { Mo: 1, Di: 2, Mi: 3, Do: 4, Fr: 5, Sa: 6, So: 0 };
    const tag = tage[get('weekday').replace('.', '').slice(0, 2)];
    const min = (parseInt(get('hour'), 10) % 24) * 60 + parseInt(get('minute'), 10);
    const werktag = tag >= 1 && tag <= 6;
    let text;
    if (werktag && min >= 570 && min < 1080) text = 'Heute bis 18 Uhr offen';
    else if (werktag && min < 570) text = 'Heute ab 9:30 offen';
    else if (tag >= 1 && tag <= 5) text = 'Morgen ab 9:30 offen';
    else text = 'Montag ab 9:30 offen';
    box.textContent = text;
  }

  /* 2 · Menü am Handy */
  function menu() {
    const m = $('[data-menu]'); const auf = $('[data-menu-auf]'); const zu = $('[data-menu-zu]');
    if (!m || !auf || !zu) return;
    const setze = (offen) => {
      m.hidden = !offen;
      auf.setAttribute('aria-expanded', String(offen));
      document.body.style.overflow = offen ? 'hidden' : '';
      if (offen) $('a', m).focus(); else auf.focus();
    };
    auf.addEventListener('click', () => setze(true));
    zu.addEventListener('click', () => setze(false));
    $$('[data-menu-link]', m).forEach((a) => a.addEventListener('click', () => {
      m.hidden = true; auf.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
    }));
    addEventListener('keydown', (e) => { if (e.key === 'Escape' && !m.hidden) setze(false); });
  }

  /* 3 · 2-Euro-Test: der Steinschlag liegt in echter Größe auf der Münze
     Münze: r = 100 Einheiten bei 25,75 mm Durchmesser */
  function test() {
    const root = $('[data-test]'); if (!root) return;
    const range = $('[data-groesse]', root); const wert = $('[data-groesse-wert]', root);
    const chipG = $('[data-chip]', root); const sterne = $('[data-sterne]', root);
    const box = $('[data-ergebnis]', root);
    const MM = 200 / 25.75;
    const R = rng(7);
    const beine = Array.from({ length: 9 }, (_, i) => ({ a: (i / 9) * Math.PI * 2 + (R() - 0.5) * 0.5, l: 0.72 + R() * 0.3 }));
    const risse = [
      { a: -0.5, knick: [0.35, -0.25, 0.3] },
      { a: 2.45, knick: [-0.3, 0.2, -0.35] },
      { a: 1.35, knick: [0.25, 0.3, -0.2] }
    ];
    // zwölf Sterne wie auf der Münze, flach
    const stern = (cx, cy, r) => {
      let d = '';
      for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2 - Math.PI / 2; const rr = i % 2 ? r * 0.45 : r; d += (i ? 'L' : 'M') + (cx + Math.cos(a) * rr).toFixed(2) + ' ' + (cy + Math.sin(a) * rr).toFixed(2); }
      return d + 'Z';
    };
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
      el('path', { d: stern(Math.cos(a) * 84.5, Math.sin(a) * 84.5, 6) }, sterne);
    }

    function zeichne(d, laeuft) {
      chipG.textContent = '';
      const r = (d / 2) * MM;
      const kern = Math.max(2.2, r * 0.26);
      el('circle', { r: kern.toFixed(2), class: 'chip__kern' }, chipG);
      let pd = '';
      for (const b of beine) pd += `M${(Math.cos(b.a) * kern).toFixed(2)} ${(Math.sin(b.a) * kern).toFixed(2)}L${(Math.cos(b.a) * r * b.l).toFixed(2)} ${(Math.sin(b.a) * r * b.l).toFixed(2)}`;
      el('path', { d: pd, class: 'chip__beine', 'stroke-width': clamp(r / 16, 1.6, 4).toFixed(2) }, chipG);
      if (r > 8) el('circle', { r: (r * 0.94).toFixed(2), class: 'chip__hof', 'stroke-width': clamp(r / 30, 1.2, 2.4).toFixed(2) }, chipG);
      if (!laeuft) return;
      // Risse brechen über den Münzrand hinaus
      let rd = '';
      for (const s of risse) {
        let x = Math.cos(s.a) * r * 0.8, y = Math.sin(s.a) * r * 0.8, a = s.a;
        rd += `M${x.toFixed(1)} ${y.toFixed(1)}`;
        const schritt = Math.max(150, 175 - r * 0.4) / s.knick.length;
        for (const k of s.knick) { a += k; x += Math.cos(a) * schritt; y += Math.sin(a) * schritt; rd += `L${x.toFixed(1)} ${y.toFixed(1)}`; }
      }
      el('path', { d: rd, class: 'chip__riss' }, chipG);
    }

    const TEXTE = {
      reparatur: {
        satz: 'Das reparieren wir.',
        kosten: 'Mit Teilkasko kostet dich das in der Regel nichts.',
        dauer: 'Oft in einer halben Stunde erledigt, in Duisburg oder mobil bei dir.'
      },
      tausch: {
        satz: 'Die Scheibe muss neu.',
        kosten: 'Mit Teilkasko zahlst du nur deine Selbstbeteiligung. Ohne Teilkasko: fester Preis vorab am Telefon.',
        dauer: 'Oft noch am selben Tag, das Auto meist nach ein paar Stunden zurück.'
      }
    };
    const LAGE = { beifahrer: 'auf der Beifahrerseite', fahrer: 'direkt vor dem Fahrer', rand: 'am Rand', riss: 'mit Riss' };
    let letzteArt = box.dataset.art;

    function auswerten() {
      const d = parseInt(range.value, 10);
      const lage = ($('input[name="lage"]:checked', root) || {}).value || 'beifahrer';
      wert.textContent = d + ' mm';
      let art = 'reparatur', grund;
      if (lage === 'riss') { art = 'tausch'; grund = 'Sobald ein Riss rausläuft, hält keine Reparatur mehr.'; }
      else if (d > 25.75) { art = 'tausch'; grund = `${d} mm ist größer als die Münze. Das lässt sich nicht mehr sauber füllen.`; }
      else if (lage === 'fahrer') { art = 'tausch'; grund = 'Direkt vor dem Fahrer reparieren wir nicht, die Stelle würde genau dort die Sicht stören.'; }
      else if (lage === 'rand') { art = 'tausch'; grund = 'So nah am Rand steht das Glas unter Spannung. Eine Reparatur hält dort meistens nicht.'; }
      else if (d >= 22) grund = 'Knapp an der Grenze. Schick ein Foto, dann sagen wir dir genau, ob es noch geht.';
      else grund = 'Klein und nicht im Sichtfeld: Das füllen wir mit Harz, die Scheibe bleibt drin.';
      zeichne(d, lage === 'riss' || d > 25.75);
      const t = TEXTE[art];
      if (art !== letzteArt && !ruhig) { box.classList.add('wechselt'); setTimeout(() => box.classList.remove('wechselt'), 180); }
      letzteArt = art;
      box.dataset.art = art;
      $('[data-ergebnis-satz]', box).textContent = t.satz;
      $('[data-ergebnis-grund]', box).textContent = grund;
      $('[data-ergebnis-kosten]', box).textContent = t.kosten;
      $('[data-ergebnis-dauer]', box).textContent = t.dauer;
      const nachricht = art === 'reparatur'
        ? `Hallo, ich habe einen Steinschlag (ca. ${d} mm) ${LAGE[lage]}. Kann man das reparieren?`
        : `Hallo, ich brauche wahrscheinlich eine neue Scheibe (Schaden ca. ${d} mm, ${LAGE[lage]}).`;
      $('[data-ergebnis-link]', box).href = WA + encodeURIComponent(nachricht);
    }
    range.addEventListener('input', auswerten);
    $$('input[name="lage"]', root).forEach((r) => r.addEventListener('change', auswerten));
    auswerten();
  }

  /* 4 · Karte (Natural Earth) mit 50-km-Umkreis und Umkreisprüfer */
  const WERKSTATT = { lat: 51.4906217, lon: 6.7808339 };
  // [Name, Breite, Länge, Kartenrolle (0 = nur Suche, 1 = klein, 2 = groß), Beschriftung dx, dy, Anker]
  const ORTE = [
    ['Duisburg', 51.4344, 6.7623, 0], ['Essen', 51.4556, 7.0116, 0], ['Düsseldorf', 51.2277, 6.7735, 2, 14, 7, 'start'],
    ['Oberhausen', 51.4963, 6.8638, 0], ['Mülheim an der Ruhr', 51.4275, 6.8825, 0], ['Bottrop', 51.5236, 6.9285, 0],
    ['Gelsenkirchen', 51.5177, 7.0857, 0], ['Gladbeck', 51.5711, 6.9877, 0], ['Dinslaken', 51.5623, 6.7434, 1, -12, -8, 'end'],
    ['Voerde', 51.5966, 6.6866, 0], ['Wesel', 51.6583, 6.6179, 1, 12, -6, 'start'], ['Hünxe', 51.6457, 6.7685, 0], ['Hamminkeln', 51.7297, 6.5904, 0],
    ['Rees', 51.759, 6.3977, 0], ['Emmerich am Rhein', 51.8384, 6.2459, 0], ['Kleve', 51.7887, 6.1386, 1, 12, 6, 'start'], ['Goch', 51.6838, 6.1619, 0],
    ['Kevelaer', 51.5833, 6.2482, 0], ['Geldern', 51.5197, 6.3236, 1, -12, 6, 'end'], ['Issum', 51.5333, 6.425, 0], ['Alpen', 51.5789, 6.5131, 0],
    ['Xanten', 51.6622, 6.4536, 1, -12, -4, 'end'], ['Sonsbeck', 51.6097, 6.3772, 0], ['Rheinberg', 51.5466, 6.6007, 0],
    ['Kamp-Lintfort', 51.5034, 6.5476, 0], ['Moers', 51.4516, 6.6408, 1, -12, 7, 'end'], ['Neukirchen-Vluyn', 51.4419, 6.5466, 0],
    ['Krefeld', 51.3388, 6.5853, 1, -12, 7, 'end'], ['Kempen', 51.3644, 6.4194, 0], ['Tönisvorst', 51.32, 6.493, 0], ['Willich', 51.2633, 6.5492, 0],
    ['Viersen', 51.2556, 6.395, 0], ['Mönchengladbach', 51.1805, 6.4428, 1, -12, 7, 'end'], ['Meerbusch', 51.2559, 6.6894, 0], ['Kaarst', 51.2286, 6.617, 0],
    ['Neuss', 51.2042, 6.6879, 1, -12, 16, 'end'], ['Ratingen', 51.2973, 6.8494, 1, 12, 7, 'start'], ['Heiligenhaus', 51.3267, 6.9713, 0],
    ['Velbert', 51.3398, 7.0416, 1, 12, 7, 'start'], ['Mettmann', 51.2504, 6.9752, 0], ['Erkrath', 51.2244, 6.9081, 0], ['Hilden', 51.1714, 6.9394, 0],
    ['Haan', 51.1931, 7.0131, 0], ['Wuppertal', 51.2562, 7.1508, 1, 12, 7, 'start'], ['Solingen', 51.1652, 7.0671, 1, 12, 8, 'start'], ['Langenfeld', 51.1092, 6.9481, 0],
    ['Hattingen', 51.399, 7.1858, 0], ['Bochum', 51.4818, 7.2162, 1, 12, 7, 'start'], ['Herne', 51.5388, 7.2257, 0], ['Herten', 51.5957, 7.141, 0],
    ['Recklinghausen', 51.6141, 7.1979, 1, 12, 7, 'start'], ['Marl', 51.6567, 7.09, 0], ['Dorsten', 51.6604, 6.9646, 1, 12, -4, 'start'], ['Schermbeck', 51.695, 6.875, 0],
    ['Haltern am See', 51.7425, 7.1849, 0], ['Bocholt', 51.8389, 6.6153, 1, 12, 7, 'start'], ['Dortmund', 51.5136, 7.4653, 1, 12, 7, 'start'], ['Witten', 51.4436, 7.3528, 0],
    ['Castrop-Rauxel', 51.55, 7.3167, 0], ['Venlo', 51.3704, 6.1724, 1, 12, 7, 'start'], ['Köln', 50.9375, 6.9603, 0], ['Gummersbach', 51.0266, 7.5646, 0],
    ['Aachen', 50.7753, 6.0839, 0], ['Düren', 50.8034, 6.482, 0],
    ['Duisburg-Walsum', 51.528, 6.733, 0], ['Duisburg-Homberg', 51.455, 6.698, 0], ['Duisburg-Rheinhausen', 51.401, 6.722, 0], ['Duisburg-Hamborn', 51.495, 6.775, 0], ['Duisburg-Marxloh', 51.498, 6.786, 0]
  ];
  const kmZwischen = (a, b) => {
    const r = Math.PI / 180; const dLat = (b.lat - a.lat) * r, dLon = (b.lon - a.lon) * r;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLon / 2) ** 2;
    return 2 * 6371 * Math.asin(Math.sqrt(h));
  };

  function karte() {
    const svg = $('[data-karte-svg]'); const M = window.AZA_MAP; if (!svg || !M) return;
    const [LON0, , , LAT1] = M.bbox; const P = (lat, lon) => [(lon - LON0) * M.kx * M.u, (LAT1 - lat) * M.ky * M.u];
    const [wx, wy] = P(WERKSTATT.lat, WERKSTATT.lon);
    const U = M.u; // Einheiten pro km
    const defs = el('defs', {}, svg);
    const cp = el('clipPath', { id: 'k-rand' }, defs); el('rect', { width: M.w, height: M.h }, cp);
    const root = el('g', { 'clip-path': 'url(#k-rand)' }, svg);

    // Erreichbarkeit als Punktraster, dichter an der Werkstatt
    const gd = el('g', { class: 'k-raster' }, root);
    const st = 3.2 * U;
    for (let y = st / 2; y < M.h; y += st) for (let x = st / 2; x < M.w; x += st) {
      const d = Math.hypot(x - wx, y - wy) / U; if (d > 50) continue;
      el('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: (0.9 + 3 * Math.pow(1 - d / 50, 0.8)).toFixed(2), opacity: (0.25 + 0.5 * (1 - d / 50)).toFixed(2) }, gd);
    }
    const gr = el('g', { class: 'k-strasse' }, root);
    M.roads.forEach((d) => el('path', { d }, gr));
    const gw = el('g', { class: 'k-fluss' }, root);
    M.rivers.forEach((r) => el('path', { d: r.d, 'stroke-width': r.name === 'Rhein' ? 5 : 2.6 }, gw));
    el('circle', { class: 'k-ring', cx: wx, cy: wy, r: 50 * U }, root);

    const gs = el('g', {}, root);
    ORTE.filter((o) => o[3] > 0).forEach(([n, la, lo, rolle, dx, dy, anc]) => {
      const [x, y] = P(la, lo); const g = el('g', { class: 'k-stadt' + (rolle === 2 ? ' gross' : '') }, gs);
      el('circle', { cx: x, cy: y, r: rolle === 2 ? 5 : 3.6 }, g);
      const t = el('text', { x: x + dx, y: y + dy, 'text-anchor': anc }, g);
      t.textContent = n === 'Mülheim an der Ruhr' ? 'Mülheim' : n;
    });
    const ziel = el('g', { class: 'k-ziel' }, root);

    const marke = (lat, lon, label, art, [ox, oy, anc]) => {
      const [x, y] = P(lat, lon); const g = el('g', { class: 'k-marke' + (art === 'bald' ? ' bald' : '') }, root);
      if (art === 'bald') el('circle', { cx: x, cy: y, r: 9 }, g);
      else el('rect', { x: x - 10, y: y - 10, width: 20, height: 20 }, g);
      const t = el('text', { x: x + ox, y: y + oy, 'text-anchor': anc }, g); t.textContent = label;
    };
    marke(WERKSTATT.lat, WERKSTATT.lon, 'Werkstatt Duisburg', 'haupt', [18, -16, 'start']);
    marke(51.4556, 7.0116, 'Essen', 'haupt', [18, 30, 'start']);
    marke(51.0266, 7.5646, 'Gummersbach, bald', 'bald', [-16, -18, 'end']);

    // Prüfer
    const form = $('[data-pruefer]'); const input = $('[data-ort-eingabe]'); const out = $('[data-ergebnis-ort]'); const dl = $('[data-orte-liste]');
    if (!form || !input || !out) return;
    ORTE.map((o) => o[0]).sort((a, b) => a.localeCompare(b, 'de')).forEach((n) => { const o = document.createElement('option'); o.value = n; dl.appendChild(o); });
    const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss').replace(/[^a-z]/g, '');
    const sag = (satz) => { out.textContent = satz; };
    function zeige(name, lat, lon) {
      const d = Math.max(1, Math.round(kmZwischen(WERKSTATT, { lat, lon })));
      const zuGummersbach = kmZwischen({ lat: 51.0266, lon: 7.5646 }, { lat, lon });
      if (d <= 50) sag(`${name}: rund ${d} km Luftlinie. Wir kommen zu dir, oder du kommst vorbei.`);
      else if (zuGummersbach < 28) sag(`${name}: rund ${d} km. Bald bist du näher dran, in Gummersbach eröffnen wir demnächst.`);
      else sag(`${name}: rund ${d} km, außerhalb vom mobilen Radius. Ruf kurz an, oft finden wir trotzdem einen Weg.`);
      ziel.textContent = '';
      const [x, y] = P(lat, lon);
      if (x < -20 || y < -20 || x > M.w + 20 || y > M.h + 20) return;
      el('path', { d: `M${wx} ${wy}L${x} ${y}` }, ziel);
      el('circle', { cx: x, cy: y, r: 7 }, ziel);
      const t = el('text', { x: x + 14, y: y - 14 }, ziel); t.textContent = `${name}, ${d} km`;
      if (x > M.w - 260) { t.setAttribute('x', x - 14); t.setAttribute('text-anchor', 'end'); }
    }
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = norm(input.value); if (!q) { input.focus(); return; }
      const treffer = ORTE.find((o) => norm(o[0]) === q) || ORTE.find((o) => norm(o[0]).startsWith(q)) || ORTE.find((o) => norm(o[0]).includes(q));
      if (!treffer) { ziel.textContent = ''; sag('Den Ort kennt der Entwurf noch nicht. Probier die nächste größere Stadt.'); return; }
      input.value = treffer[0]; zeige(treffer[0], treffer[1], treffer[2]);
    });
    input.addEventListener('change', () => { if (ORTE.some((o) => o[0] === input.value)) form.requestSubmit(); });
    const knopf = $('[data-standort]');
    if (knopf) knopf.addEventListener('click', () => {
      if (!navigator.geolocation) { sag('Dein Browser gibt keinen Standort raus. Gib einfach deine Stadt ein.'); return; }
      sag('Suche deinen Standort …');
      navigator.geolocation.getCurrentPosition(
        (pos) => zeige('Dein Standort', pos.coords.latitude, pos.coords.longitude),
        () => sag('Standort nicht verfügbar. Gib einfach deine Stadt ein.'),
        { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 }
      );
    });
  }

  /* 5 · Auftritte: je Abschnitt einmal, Teile 70 ms versetzt */
  function auftritte() {
    const els = $$('[data-auftritt]');
    if (ruhig || !('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('ist-da')); return; }
    const gruppen = new Map();
    els.forEach((e) => { const s = e.closest('section, footer') || document.body; const i = gruppen.get(s) || 0; e.style.setProperty('--d', (i * 0.07).toFixed(2) + 's'); gruppen.set(s, i + 1); });
    const ob = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('ist-da'); ob.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: 0.1 });
    els.forEach((e) => ob.observe(e));
    // Sicherheitsnetz: nichts bleibt unsichtbar, falls der Beobachter hängt
    setTimeout(() => els.forEach((e) => { if (e.getBoundingClientRect().top < innerHeight) e.classList.add('ist-da'); }), 2500);
  }

  /* 6 · Shop-Band: die Fotos driften scrollgebunden um die Überschrift */
  function drift() {
    const band = $('[data-shopband]'); if (!band || ruhig) return;
    const bilder = $$('[data-drift]', band);
    let tick = false, sichtbar = false;
    const setze = () => {
      tick = false;
      if (!matchMedia('(min-width: 861px)').matches) { bilder.forEach((b) => { b.style.translate = ''; }); return; }
      const r = band.getBoundingClientRect();
      const p = clamp((innerHeight - r.top) / (innerHeight + r.height), 0, 1) - 0.5;
      bilder.forEach((b) => { const f = parseFloat(b.dataset.drift) || 0.06; b.style.translate = `0 ${(-p * f * b.offsetHeight * 2).toFixed(1)}px`; });
    };
    new IntersectionObserver(([e]) => { sichtbar = e.isIntersecting; if (sichtbar) setze(); }).observe(band);
    addEventListener('scroll', () => { if (sichtbar && !tick) { tick = true; requestAnimationFrame(setze); } }, { passive: true });
    addEventListener('resize', setze);
    setze();
  }

  /* 7 · Schnellkontakt am Handy: weicht beim Lesen nach unten aus, kommt beim Hochscrollen zurück */
  function leiste() {
    const l = $('.aktionsleiste'); if (!l) return;
    let letzte = scrollY, tick = false;
    const setze = () => {
      tick = false;
      const y = scrollY;
      if (y < innerHeight * 0.5) l.classList.remove('weg');
      else if (y > letzte + 6) l.classList.add('weg');
      else if (y < letzte - 6) l.classList.remove('weg');
      letzte = y;
    };
    addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(setze); } }, { passive: true });
  }

  const sicher = (fn) => { try { fn(); } catch (err) { console.error('[Entwurf]', fn.name, err); } };
  [oeffnung, menu, test, karte, auftritte, drift, leiste].forEach(sicher);
  setInterval(() => sicher(oeffnung), 60000);
})();
