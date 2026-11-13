/* Autoglas Zentrum Aydin · Website-Entwurf · Interaktionen
   Ohne Bibliotheken. Alles läuft lokal, keine Tracker, keine externen Kacheln. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const NS = 'http://www.w3.org/2000/svg';
  const el = (tag, attrs = {}, parent) => {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  };
  const rng = (seed) => () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };

  /* ------------------------------------------------------------------
     1 · Öffnungsstatus (Europe/Berlin, Mo bis Sa 9:30 bis 18:00)
  ------------------------------------------------------------------ */
  function oeffnung() {
    const box = $('[data-status]'); if (!box) return;
    const parts = new Intl.DateTimeFormat('de-DE', { timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
    const get = (t) => (parts.find((p) => p.type === t) || {}).value || '';
    const tage = { Mo: 1, Di: 2, Mi: 3, Do: 4, Fr: 5, Sa: 6, So: 0 };
    const tag = tage[get('weekday').replace('.', '').slice(0, 2)];
    const min = (parseInt(get('hour'), 10) % 24) * 60 + parseInt(get('minute'), 10);
    const auf = 570, zu = 1080;
    let offen = false, text;
    if (tag >= 1 && tag <= 6 && min >= auf && min < zu) { offen = true; text = 'Heute offen bis 18:00'; }
    else if (tag >= 1 && tag <= 6 && min < auf) text = 'Heute offen ab 9:30';
    else if (tag >= 1 && tag <= 5) text = 'Jetzt zu, morgen ab 9:30 offen';
    else text = 'Jetzt zu, Montag ab 9:30 offen';
    box.dataset.offen = String(offen);
    $('[data-status-text]', box).textContent = text;
  }

  /* ------------------------------------------------------------------
     2 · Kopf, Menü, mobile Aktionsleiste
  ------------------------------------------------------------------ */
  function kopf() {
    const k = $('[data-kopf]'); const hero = $('.hero') || $('.shop-kopf');
    const leiste = $('[data-aktionsleiste]');
    let tick = false;
    const update = () => {
      tick = false;
      const grenze = hero ? hero.getBoundingClientRect().bottom : 300;
      k && k.classList.toggle('is-kompakt', grenze < 80);
      leiste && leiste.classList.toggle('is-sichtbar', grenze < 120);
    };
    addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(update); } }, { passive: true });
    update();

    const menu = $('[data-menu]'); const auf = $('[data-menu-auf]'); const zu = $('[data-menu-zu]');
    if (!menu || !auf) return;
    const setze = (offen) => {
      menu.classList.toggle('is-offen', offen);
      auf.setAttribute('aria-expanded', String(offen));
      document.body.style.overflow = offen ? 'hidden' : '';
      if (offen) setTimeout(() => $('a', menu).focus(), 80); else auf.focus();
    };
    auf.addEventListener('click', () => setze(true));
    zu.addEventListener('click', () => setze(false));
    $$('[data-menu-link]', menu).forEach((a) => a.addEventListener('click', () => { menu.classList.remove('is-offen'); auf.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }));
    addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('is-offen')) setze(false); });
  }

  /* ------------------------------------------------------------------
     3 · Hero: Regen auf der Scheibe, zwei Wischer
  ------------------------------------------------------------------ */
  function regen() {
    const box = $('[data-scheibe]'); const cv = $('[data-regen]');
    if (!box || !cv || !cv.getContext) return;
    const ctx = cv.getContext('2d');
    const VW = 1000, VH = 560;
    const glas = new Path2D('M120 30C380-4 620-4 880 30C905 33 920 48 928 70L994 470C999 500 985 520 955 524C650 560 350 560 45 524C15 520 1 500 6 470L72 70C80 48 95 33 120 30Z');
    const R = rng(42);
    const groessen = [1.5, 2.1, 2.8, 3.6, 4.6, 6];
    let W = 0, H = 0, s = 1, sprites = [];
    let tropfen = [];
    const wischer = [
      { px: 250, py: 552, len: 445, ruhe: 9, oben: 121, alt: 9, a: 9, verz: 0 },
      { px: 590, py: 552, len: 402, ruhe: 7, oben: 116, alt: 7, a: 7, verz: 0.07 }
    ];

    function sprite(r) {
      const d = Math.ceil(r * s * 2 * 1.7) + 4; const c = document.createElement('canvas'); c.width = c.height = d;
      const g = c.getContext('2d'); const m = d / 2; const rr = r * s;
      g.fillStyle = 'rgba(0,0,0,0.38)'; g.beginPath(); g.ellipse(m + rr * 0.22, m + rr * 0.34, rr, rr * 0.96, 0, 0, Math.PI * 2); g.fill();
      const gr = g.createRadialGradient(m - rr * 0.32, m - rr * 0.38, rr * 0.05, m, m, rr * 1.05);
      gr.addColorStop(0, 'rgba(255,255,255,0.62)'); gr.addColorStop(0.45, 'rgba(190,220,225,0.16)'); gr.addColorStop(1, 'rgba(10,20,24,0.32)');
      g.fillStyle = gr; g.beginPath(); g.arc(m, m, rr, 0, Math.PI * 2); g.fill();
      g.strokeStyle = 'rgba(255,255,255,0.4)'; g.lineWidth = Math.max(0.8, rr * 0.16);
      g.beginPath(); g.arc(m, m, rr * 0.78, 0.15 * Math.PI, 0.62 * Math.PI); g.stroke();
      g.fillStyle = 'rgba(255,255,255,0.9)'; g.beginPath(); g.arc(m - rr * 0.36, m - rr * 0.4, Math.max(0.6, rr * 0.2), 0, Math.PI * 2); g.fill();
      return c;
    }
    function groesse() {
      const r = box.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.width = Math.max(1, Math.round(r.width * dpr)); H = cv.height = Math.max(1, Math.round(r.height * dpr));
      s = W / VW;
      sprites = groessen.map(sprite);
    }
    function neu(n) {
      for (let i = 0; i < n; i++) {
        const k = R() < 0.82 ? Math.floor(R() * 4) : 4 + Math.floor(R() * 2);
        tropfen.push({ x: 60 + R() * 880, y: 40 + R() * 490, k, vy: 0, lauf: k >= 4 && R() < 0.5, w: R() * 6.28 });
      }
    }
    function zeichneWischer(w) {
      const rad = (w.a * Math.PI) / 180; const dx = Math.cos(rad), dy = -Math.sin(rad);
      const x1 = w.px + dx * w.len, y1 = w.py + dy * w.len;
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'rgba(0,0,0,0.35)'; ctx.lineWidth = 12;
      ctx.beginPath(); ctx.moveTo(w.px + 4, w.py + 6); ctx.lineTo(x1 + 4, y1 + 6); ctx.stroke();
      ctx.strokeStyle = '#0d0b0b'; ctx.lineWidth = 9;
      ctx.beginPath(); ctx.moveTo(w.px, w.py); ctx.lineTo(w.px + dx * w.len * 0.55, w.py + dy * w.len * 0.55); ctx.stroke();
      ctx.strokeStyle = '#141111'; ctx.lineWidth = 7;
      ctx.beginPath(); ctx.moveTo(w.px + dx * w.len * 0.08, w.py + dy * w.len * 0.08); ctx.lineTo(x1, y1); ctx.stroke();
      ctx.strokeStyle = 'rgba(255,255,255,0.14)'; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(w.px + dx * w.len * 0.1 - dy * 3, w.py + dy * w.len * 0.1 + dx * 3); ctx.lineTo(x1 - dy * 3, y1 + dx * 3); ctx.stroke();
    }
    const ease = (t) => 0.5 - Math.cos(Math.PI * t) / 2;
    const ZYKLUS = 6.8, HOCH = 0.78;
    let t0 = performance.now(), laeuft = false, sichtbar = true, raf = 0;

    function bild(now) {
      raf = 0;
      const t = (now - t0) / 1000;
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, W, H);
      ctx.setTransform(s, 0, 0, s, 0, 0);
      ctx.save(); ctx.clip(glas);
      if (!ruhig && tropfen.length < 360) neu(2);
      for (const w of wischer) {
        const u = ((t - w.verz) % ZYKLUS + ZYKLUS) % ZYKLUS;
        let p = 0;
        if (!ruhig) { if (u < HOCH) p = ease(u / HOCH); else if (u < HOCH * 2) p = ease(1 - (u - HOCH) / HOCH); }
        w.alt = w.a; w.a = lerp(w.ruhe, w.oben, p);
        const lo = Math.min(w.alt, w.a) - 1.5, hi = Math.max(w.alt, w.a) + 1.5;
        if (hi - lo > 3.2) {
          tropfen = tropfen.filter((d) => {
            const dx = d.x - w.px, dy = w.py - d.y; const dist = Math.hypot(dx, dy);
            if (dist < 30 || dist > w.len + 6) return true;
            const ang = (Math.atan2(dy, dx) * 180) / Math.PI;
            return ang < lo || ang > hi;
          });
        }
      }
      for (const d of tropfen) {
        if (d.lauf && !ruhig) { d.vy = Math.min(d.vy + 0.004, 0.55); d.y += d.vy; d.x += Math.sin((d.w += 0.05)) * 0.12; }
        const sp = sprites[d.k]; const z = sp.width / s;
        ctx.drawImage(sp, d.x - z / 2, d.y - z / 2, z, z);
      }
      tropfen = tropfen.filter((d) => d.y < 540);
      for (const w of wischer) zeichneWischer(w);
      ctx.restore();
      if (laeuft && sichtbar && !ruhig) raf = requestAnimationFrame(bild);
    }
    const start = () => { if (!raf && !ruhig) { laeuft = true; raf = requestAnimationFrame(bild); } };
    groesse(); neu(ruhig ? 260 : 120);
    if (ruhig) bild(performance.now()); else start();
    new ResizeObserver(() => { groesse(); if (ruhig || !raf) bild(performance.now()); }).observe(box);
    new IntersectionObserver(([e]) => { sichtbar = e.isIntersecting; if (sichtbar) start(); }, { threshold: 0 }).observe(box);
    document.addEventListener('visibilitychange', () => { sichtbar = !document.hidden; if (sichtbar) start(); });
  }

  /* ------------------------------------------------------------------
     4 · 2-Euro-Test
  ------------------------------------------------------------------ */
  function test() {
    const root = $('[data-test]'); if (!root) return;
    const range = $('[data-groesse]', root); const wert = $('[data-groesse-wert]', root);
    const chipG = $('[data-chip]', root); const sterne = $('[data-sterne]', root);
    const mini = $('[data-mini]', root); const miniSvg = $('svg', mini); const miniChip = $('[data-mini-chip]', root);
    const urteil = $('[data-urteil]');
    const MM = 52 / 12.875; // SVG-Einheiten pro mm (2-Euro: 25,75 mm)
    const R = rng(7);
    const beine = Array.from({ length: 9 }, (_, i) => ({ a: (i / 9) * Math.PI * 2 + (R() - 0.5) * 0.5, l: 0.7 + R() * 0.32 }));
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
      el('path', { d: star(Math.cos(a) * 44, Math.sin(a) * 44, 2.6), opacity: '.9' }, sterne);
    }
    function star(cx, cy, r) {
      let d = '';
      for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2 - Math.PI / 2; const rr = i % 2 ? r * 0.45 : r; d += (i ? 'L' : 'M') + (cx + Math.cos(a) * rr).toFixed(2) + ' ' + (cy + Math.sin(a) * rr).toFixed(2); }
      return d + 'Z';
    }
    const presets = { frei: [270, 112], sicht: [95, 112], rand: [362, 70] };
    let ort = 'frei';

    function zone(x, y) {
      if (y < 12 || y > 206) return null;
      const xl = 52 - (y - 18) * (44 / 182), xr = 348 + (y - 18) * (44 / 182);
      if (x < xl || x > xr) return null;
      if (y < 34 || y > 184 || x < xl + 22 || x > xr - 22) return 'rand';
      if (x >= 52 && x <= 138) return 'sicht';
      return 'frei';
    }
    mini.addEventListener('click', (e) => {
      const pt = miniSvg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
      const p = pt.matrixTransform(miniSvg.getScreenCTM().inverse());
      const z = zone(p.x, p.y); if (!z) return;
      ort = z; miniChip.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`);
      $(`input[name="ort"][value="${z}"]`, root).checked = true;
      auswerten();
    });
    $$('input[name="ort"]', root).forEach((r) => r.addEventListener('change', () => {
      ort = r.value; const [x, y] = presets[ort];
      miniChip.setAttribute('transform', `translate(${x} ${y})`); auswerten();
    }));
    $$('input[name="riss"]', root).forEach((r) => r.addEventListener('change', auswerten));
    range.addEventListener('input', auswerten);

    function chip(d, riss) {
      chipG.textContent = '';
      const r = (d / 2) * MM;
      const g = el('g', { fill: 'none', stroke: 'oklch(0.98 0.01 80)', 'stroke-linecap': 'round' }, chipG);
      el('circle', { r: Math.max(1.4, r * 0.3).toFixed(2), fill: 'oklch(0.98 0.01 80 / .35)', 'stroke-width': 1.3 }, g);
      let pd = '';
      for (const b of beine) { const r0 = Math.max(1.4, r * 0.3); pd += `M${(Math.cos(b.a) * r0).toFixed(2)} ${(Math.sin(b.a) * r0).toFixed(2)}L${(Math.cos(b.a) * r * b.l).toFixed(2)} ${(Math.sin(b.a) * r * b.l).toFixed(2)}`; }
      el('path', { d: pd, 'stroke-width': clamp(r / 14, 0.9, 1.8) }, g);
      if (riss) el('path', { d: `M${r * 0.7} ${r * 0.2}C${r + 14} 8 ${r + 22} -14 ${r + 40} -6S ${r + 60} 20 ${r + 86} 12`, 'stroke-width': 1.6 }, g);
      el('circle', { r: 52, 'stroke-dasharray': '3 4', stroke: 'oklch(0.98 0.01 80 / .5)', 'stroke-width': 1 }, g);
    }
    function auswerten() {
      const d = parseInt(range.value, 10);
      const riss = $('input[name="riss"]:checked', root).value === 'ja';
      range.style.setProperty('--p', ((d - 1) / 39) * 100 + '%');
      wert.innerHTML = `${d}<small>mm</small>`;
      chip(d, riss);
      let art = 'reparatur', grund;
      if (riss) { art = 'tausch'; grund = 'Sobald ein Riss rausläuft, hält keine Reparatur mehr. Die Scheibe muss neu.'; }
      else if (d > 26) { art = 'tausch'; grund = `${d} mm ist größer als eine 2-Euro-Münze. Das lässt sich nicht mehr sauber füllen.`; }
      else if (ort === 'sicht') { art = 'tausch'; grund = 'Direkt vor dem Fahrer reparieren wir nicht. Die Reparaturstelle würde genau dort die Sicht stören.'; }
      else if (ort === 'rand') { art = 'tausch'; grund = 'So nah am Rand steht das Glas unter Spannung. Eine Reparatur hält dort meistens nicht.'; }
      else if (d >= 22) grund = 'Knapp an der Grenze. Schick ein Foto, dann sagen wir dir genau, ob es noch geht.';
      else grund = 'Klein und außerhalb vom Sichtfeld: Das füllen wir mit Spezialharz, die Scheibe bleibt drin.';
      urteil.dataset.art = art;
      $('[data-urteil-wort]', urteil).innerHTML = art === 'reparatur' ? '<span>Reparatur.</span>' : '<span>Neue</span><span>Scheibe.</span>';
      $('[data-urteil-grund]', urteil).textContent = grund;
      $('[data-urteil-kosten]', urteil).textContent = art === 'reparatur' ? 'Mit Teilkasko bei den meisten Versicherern 0 €.' : 'Mit Teilkasko nur deine Selbstbeteiligung. Ohne Teilkasko bekommst du nach einem Foto einen Preis.';
      $('[data-urteil-dauer]', urteil).textContent = art === 'reparatur' ? 'Oft in einer halben Stunde erledigt.' : 'Laut Bewertungen unserer Kunden zwei bis drei Stunden.';
      const t = art === 'reparatur' ? `Hallo, ich habe einen Steinschlag (ca. ${d} mm). Kann man das reparieren?` : `Hallo, ich brauche wahrscheinlich eine neue Scheibe (Schaden ca. ${d} mm${riss ? ', mit Riss' : ''}).`;
      $('[data-urteil-link]', urteil).href = 'https://wa.me/4917620908479?text=' + encodeURIComponent(t);
    }
    auswerten();
  }

  /* ------------------------------------------------------------------
     6 · Chat spielt sich ab
  ------------------------------------------------------------------ */
  function chat() {
    const box = $('[data-chat]'); if (!box) return;
    const teile = $$('.blase', box); const tippt = $('[data-tippt]', box);
    if (ruhig) { teile.forEach((b) => b.classList.add('is-da')); return; }
    let lief = false;
    const ob = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || lief) return; lief = true; ob.disconnect();
      const warte = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const b of teile) {
        if (b.classList.contains('blase--aza')) {
          tippt.classList.add('is-da'); b.before(tippt);
          await warte(900); tippt.classList.remove('is-da');
        } else await warte(480);
        b.classList.add('is-da');
        await warte(260);
      }
    }, { threshold: 0.45 });
    ob.observe(box);
  }

  /* ------------------------------------------------------------------
     7 · Einsatzkarte + Umkreis-Prüfung
  ------------------------------------------------------------------ */
  const WERKSTATT = { lat: 51.4906217, lon: 6.7808339 };
  // [Name, Breite, Länge, Kartenrolle (0 = nur Suche, 1 = klein, 2 = groß), Beschriftung dx, dy, Anker]
  const ORTE = [
    ['Duisburg', 51.4344, 6.7623, 2, -14, 30, 'end'], ['Essen', 51.4556, 7.0116, 0], ['Düsseldorf', 51.2277, 6.7735, 2, 12, 6, 'start'],
    ['Oberhausen', 51.4963, 6.8638, 1, 10, -8, 'start'], ['Mülheim an der Ruhr', 51.4275, 6.8825, 1, 10, 18, 'start'], ['Bottrop', 51.5236, 6.9285, 1, 10, -6, 'start'],
    ['Gelsenkirchen', 51.5177, 7.0857, 1, 10, -8, 'start'], ['Gladbeck', 51.5711, 6.9877, 0], ['Dinslaken', 51.5623, 6.7434, 1, -10, -6, 'end'],
    ['Voerde', 51.5966, 6.6866, 0], ['Wesel', 51.6583, 6.6179, 1, 10, -6, 'start'], ['Hünxe', 51.6457, 6.7685, 0], ['Hamminkeln', 51.7297, 6.5904, 0],
    ['Rees', 51.759, 6.3977, 0], ['Emmerich am Rhein', 51.8384, 6.2459, 1, 10, 4, 'start'], ['Kleve', 51.7887, 6.1386, 1, -10, 4, 'end'], ['Goch', 51.6838, 6.1619, 0],
    ['Kevelaer', 51.5833, 6.2482, 0], ['Geldern', 51.5197, 6.3236, 1, -10, 4, 'end'], ['Issum', 51.5333, 6.425, 0], ['Alpen', 51.5789, 6.5131, 0],
    ['Xanten', 51.6622, 6.4536, 1, -10, -4, 'end'], ['Sonsbeck', 51.6097, 6.3772, 0], ['Rheinberg', 51.5466, 6.6007, 1, -10, 4, 'end'],
    ['Kamp-Lintfort', 51.5034, 6.5476, 1, -10, 4, 'end'], ['Moers', 51.4516, 6.6408, 1, -10, 6, 'end'], ['Neukirchen-Vluyn', 51.4419, 6.5466, 0],
    ['Krefeld', 51.3388, 6.5853, 1, -10, 4, 'end'], ['Kempen', 51.3644, 6.4194, 0], ['Tönisvorst', 51.32, 6.493, 0], ['Willich', 51.2633, 6.5492, 0],
    ['Viersen', 51.2556, 6.395, 0], ['Mönchengladbach', 51.1805, 6.4428, 1, -10, 4, 'end'], ['Meerbusch', 51.2559, 6.6894, 0], ['Kaarst', 51.2286, 6.617, 0],
    ['Neuss', 51.2042, 6.6879, 1, -10, 14, 'end'], ['Ratingen', 51.2973, 6.8494, 1, 10, 4, 'start'], ['Heiligenhaus', 51.3267, 6.9713, 0],
    ['Velbert', 51.3398, 7.0416, 1, 10, 4, 'start'], ['Mettmann', 51.2504, 6.9752, 0], ['Erkrath', 51.2244, 6.9081, 0], ['Hilden', 51.1714, 6.9394, 0],
    ['Haan', 51.1931, 7.0131, 0], ['Wuppertal', 51.2562, 7.1508, 1, 10, 4, 'start'], ['Solingen', 51.1652, 7.0671, 1, 10, 6, 'start'], ['Langenfeld', 51.1092, 6.9481, 0],
    ['Hattingen', 51.399, 7.1858, 0], ['Bochum', 51.4818, 7.2162, 1, 10, 4, 'start'], ['Herne', 51.5388, 7.2257, 0], ['Herten', 51.5957, 7.141, 0],
    ['Recklinghausen', 51.6141, 7.1979, 1, 10, 4, 'start'], ['Marl', 51.6567, 7.09, 0], ['Dorsten', 51.6604, 6.9646, 1, 10, -4, 'start'], ['Schermbeck', 51.695, 6.875, 0],
    ['Haltern am See', 51.7425, 7.1849, 0], ['Bocholt', 51.8389, 6.6153, 1, 10, 4, 'start'], ['Dortmund', 51.5136, 7.4653, 1, 10, 4, 'start'], ['Witten', 51.4436, 7.3528, 0],
    ['Castrop-Rauxel', 51.55, 7.3167, 0], ['Venlo', 51.3704, 6.1724, 1, 10, 4, 'start'], ['Köln', 50.9375, 6.9603, 0], ['Gummersbach', 51.0266, 7.5646, 0],
    ['Aachen', 50.7753, 6.0839, 0], ['Düren', 50.8034, 6.482, 0],
    ['Duisburg-Walsum', 51.528, 6.733, 0], ['Duisburg-Homberg', 51.455, 6.698, 0], ['Duisburg-Rheinhausen', 51.401, 6.722, 0], ['Duisburg-Hamborn', 51.495, 6.775, 0], ['Duisburg-Marxloh', 51.498, 6.786, 0]
  ];
  const km = (a, b) => {
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
    el('rect', { width: M.w, height: M.h, fill: 'oklch(0.225 0.013 28)' }, root);
    // Planquadrate wie im Straßenatlas (10 km)
    const gq = el('g', { stroke: 'oklch(1 0 0 / .05)', 'stroke-width': 1 }, root);
    for (let x = 80; x < M.w; x += 80) el('path', { d: `M${x} 0V${M.h}` }, gq);
    for (let y = 80; y < M.h; y += 80) el('path', { d: `M0 ${y}H${M.w}` }, gq);
    const gl = el('g', { fill: 'oklch(1 0 0 / .22)', 'font-size': 12, 'font-weight': 700 }, root);
    'ABCDEFGHIKLM'.split('').forEach((c, i) => { const t = el('text', { x: 40 + i * 80, y: 18, 'text-anchor': 'middle' }, gl); t.textContent = c; });
    for (let i = 0; i < 12; i++) { const t = el('text', { x: 8, y: 44 + i * 80 }, gl); t.textContent = String(i + 1); }
    // Raster der Erreichbarkeit
    const gd = el('g', { fill: 'oklch(0.62 0.21 29)' }, root);
    const st = 3.2 * U;
    for (let y = st / 2; y < M.h; y += st) for (let x = st / 2; x < M.w; x += st) {
      const d = Math.hypot(x - wx, y - wy) / U; if (d > 50) continue;
      el('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: (0.7 + 3.1 * Math.pow(1 - d / 50, 0.8)).toFixed(2), opacity: (0.22 + 0.5 * (1 - d / 50)).toFixed(2) }, gd);
    }
    // Autobahnen, Flüsse
    const gr = el('g', { fill: 'none', stroke: 'oklch(0.93 0.01 80 / .22)', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, root);
    M.roads.forEach((d) => el('path', { d }, gr));
    const gw = el('g', { fill: 'none', stroke: 'oklch(0.72 0.08 195)', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, root);
    M.rivers.forEach((r) => el('path', { d: r.d, 'stroke-width': r.name === 'Rhein' ? 5 : 2.6, opacity: r.name === 'Rhein' ? 0.85 : 0.7 }, gw));
    const fluss = (name, lat, lon, rot) => { const [x, y] = P(lat, lon); const t = el('text', { x, y, transform: `rotate(${rot} ${x} ${y})`, fill: 'oklch(0.72 0.08 195)', 'font-size': 15, 'font-style': 'italic', 'font-weight': 700, 'letter-spacing': 3 }, root); t.textContent = name; };
    fluss('RHEIN', 51.585, 6.655, -62); fluss('RUHR', 51.405, 7.06, -8); fluss('LIPPE', 51.672, 6.86, -14); fluss('MAAS', 51.53, 6.09, -70);
    // Ring 50 km
    el('circle', { class: 'ring', cx: wx, cy: wy, r: 50 * U }, root);
    const rl = el('text', { x: wx + 50 * U * Math.cos(-0.72), y: wy + 50 * U * Math.sin(-0.72) - 10, fill: 'oklch(0.7 0.18 30)', 'font-size': 15, 'font-weight': 800, 'letter-spacing': 1.5, 'text-anchor': 'middle' }, root); rl.textContent = '50 KM';
    // Orte
    const gs = el('g', {}, root);
    ORTE.filter((o) => o[3] > 0).forEach(([n, la, lo, rolle, dx, dy, anc]) => {
      const [x, y] = P(la, lo); const g = el('g', { class: 'stadt' + (rolle === 2 ? ' gross' : '') }, gs);
      el('circle', { cx: x, cy: y, r: rolle === 2 ? 4.5 : 3.2 }, g);
      const t = el('text', { x: x + dx, y: y + dy, 'text-anchor': anc }, g); t.textContent = n === 'Mülheim an der Ruhr' ? 'Mülheim' : n === 'Emmerich am Rhein' ? 'Emmerich' : n;
    });
    // Ziel-Ebene
    const ziel = el('g', {}, root);
    // Standorte
    const marke = (lat, lon, label, sub, art, pos) => {
      const [x, y] = P(lat, lon); const g = el('g', {}, root);
      if (art === 'bald') {
        el('circle', { cx: x, cy: y, r: 9, fill: 'none', stroke: 'oklch(0.86 0.012 70)', 'stroke-width': 2, 'stroke-dasharray': '3 3' }, g);
      } else {
        if (!ruhig) { const pu = el('circle', { cx: x, cy: y, r: 10, fill: 'oklch(0.62 0.21 29)', opacity: .5 }, g); pu.innerHTML = '<animate attributeName="r" from="10" to="34" dur="2.4s" repeatCount="indefinite"/><animate attributeName="opacity" from=".55" to="0" dur="2.4s" repeatCount="indefinite"/>'; }
        el('rect', { x: x - 8, y: y - 8, width: 16, height: 16, fill: 'oklch(0.575 0.232 28.5)', stroke: 'oklch(0.965 0.007 75)', 'stroke-width': 2.5, transform: `rotate(45 ${x} ${y})` }, g);
      }
      const [ox, oy, anc] = pos;
      if (ox > 30 || oy < -30) el('path', { d: `M${x + 7} ${y - 7}L${x + ox - 6} ${y + oy + 8}`, stroke: 'oklch(0.965 0.007 75 / .7)', 'stroke-width': 1.5, fill: 'none' }, g);
      const bx = x + ox, by = y + oy;
      const halo = { stroke: 'oklch(0.225 0.013 28)', 'stroke-width': 6, 'paint-order': 'stroke', 'stroke-linejoin': 'round' };
      const t1 = el('text', { x: bx, y: by, fill: 'oklch(0.965 0.007 75)', 'font-size': 22, 'font-weight': 900, 'font-style': 'italic', 'text-anchor': anc, 'font-family': 'Sofia Sans Extra Condensed, sans-serif', 'letter-spacing': .5, ...halo }, g); t1.textContent = label;
      const t2 = el('text', { x: bx, y: by + 17, fill: art === 'bald' ? 'oklch(0.86 0.012 70)' : 'oklch(0.7 0.18 30)', 'font-size': 13, 'font-weight': 800, 'text-anchor': anc, 'letter-spacing': 1.4, ...halo }, g); t2.textContent = sub;
    };
    marke(WERKSTATT.lat, WERKSTATT.lon, 'WERKSTATT DUISBURG', 'DUISBURGER STR. 150', 'haupt', [40, -92, 'start']);
    marke(51.4556, 7.0116, 'ESSEN', 'STANDORT', 'haupt', [20, 4, 'start']);
    marke(51.0266, 7.5646, 'GUMMERSBACH', 'GEPLANT', 'bald', [-18, -6, 'end']);
    // mobil: Ausschnitt mit Umkreis und Gummersbach, damit nichts seitlich gewischt werden muss
    const schmal = matchMedia('(max-width: 700px)');
    const ausschnitt = () => svg.setAttribute('viewBox', schmal.matches ? '40 10 900 850' : `0 0 ${M.w} ${M.h}`);
    ausschnitt(); schmal.addEventListener('change', ausschnitt);
    // Maßstab + Nordpfeil
    const ms = el('g', { transform: `translate(26 ${M.h - 34})`, fill: 'oklch(0.86 0.012 70)', 'font-size': 12, 'font-weight': 700 }, root);
    el('rect', { width: 10 * U, height: 6, fill: 'oklch(0.86 0.012 70)' }, ms); el('rect', { x: 10 * U, width: 10 * U, height: 6, fill: 'none', stroke: 'oklch(0.86 0.012 70)', 'stroke-width': 1.5 }, ms);
    [[0, '0'], [10 * U, '10'], [20 * U, '20 km']].forEach(([x, t]) => { const n = el('text', { x, y: 22, 'text-anchor': x ? 'middle' : 'start' }, ms); n.textContent = t; });
    const np = el('g', { transform: `translate(${M.w - 40} 46)` }, root);
    el('path', { d: 'M0-20 9 10 0 4-9 10Z', fill: 'oklch(0.86 0.012 70)' }, np); const nt = el('text', { y: 28, 'text-anchor': 'middle', fill: 'oklch(0.86 0.012 70)', 'font-size': 13, 'font-weight': 800 }, np); nt.textContent = 'N';

    // Prüfer
    const form = $('[data-pruefer]'); const input = $('[data-ort-eingabe]'); const out = $('[data-ergebnis]'); const dl = $('[data-orte-liste]');
    const namen = ORTE.map((o) => o[0]).sort((a, b) => a.localeCompare(b, 'de'));
    namen.forEach((n) => { const o = document.createElement('option'); o.value = n; dl.appendChild(o); });
    const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss').replace(/[^a-z]/g, '');
    function zeige(name, lat, lon) {
      const d = km(WERKSTATT, { lat, lon }); const dr = Math.max(1, Math.round(d));
      const dg = km({ lat: 51.0266, lon: 7.5646 }, { lat, lon });
      const drin = d <= 50;
      out.dataset.in = String(drin);
      let txt;
      if (drin) txt = `${name} liegt rund ${dr} km Luftlinie von der Werkstatt entfernt. Wir kommen mobil zu dir, oder du kommst vorbei.`;
      else if (dg < 28) txt = `${name} ist ${dr} km entfernt. In Gummersbach ist ein Standort geplant, dann bist du näher dran.`;
      else txt = `${name} ist ${dr} km entfernt, außerhalb unseres mobilen Radius. Ruf kurz an, dann klären wir, was geht.`;
      out.innerHTML = `<b class="zahl">${dr} km</b><p></p>`; $('p', out).textContent = txt;
      ziel.textContent = '';
      const [x, y] = P(lat, lon);
      el('path', { class: 'linie-ziel', d: `M${wx} ${wy}L${x} ${y}` }, ziel);
      const g = el('g', { class: 'stadt ziel' }, ziel); el('circle', { cx: x, cy: y, r: 6 }, g);
      const t = el('text', { x: x + 12, y: y - 12, 'font-size': 19, 'font-weight': 800, stroke: 'oklch(0.225 0.013 28)', 'stroke-width': 6, 'paint-order': 'stroke', 'stroke-linejoin': 'round' }, g); t.textContent = `${name}, ${dr} km`;
      if (x > M.w - 220) { t.setAttribute('x', x - 12); t.setAttribute('text-anchor', 'end'); }
    }
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = norm(input.value); if (!q) { input.focus(); return; }
      const treffer = ORTE.find((o) => norm(o[0]) === q) || ORTE.find((o) => norm(o[0]).startsWith(q)) || ORTE.find((o) => norm(o[0]).includes(q));
      if (!treffer) { out.dataset.in = ''; out.innerHTML = '<b>Hm.</b><p>Den Ort kennen wir im Entwurf noch nicht. Probier die nächste größere Stadt.</p>'; ziel.textContent = ''; return; }
      input.value = treffer[0]; zeige(treffer[0], treffer[1], treffer[2]);
    });
    input.addEventListener('change', () => { if (ORTE.some((o) => o[0] === input.value)) form.requestSubmit(); });
    $('[data-standort]').addEventListener('click', () => {
      if (!navigator.geolocation) { out.innerHTML = '<b>Hm.</b><p>Dein Browser gibt keinen Standort raus. Gib einfach deine Stadt ein.</p>'; return; }
      out.innerHTML = '<b>…</b><p>Suche deinen Standort.</p>';
      navigator.geolocation.getCurrentPosition(
        (pos) => zeige('Dein Standort', pos.coords.latitude, pos.coords.longitude),
        () => { out.dataset.in = ''; out.innerHTML = '<b>Hm.</b><p>Standort nicht verfügbar. Gib einfach deine Stadt ein.</p>'; },
        { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 }
      );
    });
  }

  /* ------------------------------------------------------------------
     8 · Einblendungen, Start
  ------------------------------------------------------------------ */
  function auftritte() {
    const els = $$('[data-auftritt]');
    if (ruhig || !('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('is-sichtbar')); return; }
    const ob = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-sichtbar'); ob.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    els.forEach((e) => ob.observe(e));
  }

  const sicher = (fn) => { try { fn(); } catch (err) { console.error('[Entwurf]', fn.name, err); } };
  [oeffnung, kopf, regen, test, chat, karte, auftritte].forEach(sicher);
  setInterval(() => sicher(oeffnung), 60000);
  const fertig = () => document.documentElement.classList.add('is-geladen');
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => requestAnimationFrame(fertig));
  setTimeout(fertig, 900);
})();
