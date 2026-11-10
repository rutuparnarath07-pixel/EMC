
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.ab-reveal');
    if (!items.length) return;
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  }
  
  var LAND = [
    // North America (+ Central America)
    [[-168,66],[-162,70],[-140,70],[-125,70],[-95,72],[-82,69],[-80,63],[-93,60],[-94,57],[-82,52],[-78,55],[-77,62],[-68,60],[-62,57],[-56,52],[-60,47],[-66,44],[-70,42],[-74,40],[-76,35],[-81,31],[-80,26],[-82,27],[-84,30],[-90,29],[-97,27],[-97,22],[-94,18],[-90,21],[-87,21],[-88,16],[-83,15],[-83,10],[-79,9],[-77,8],[-80,7],[-85,10],[-87,13],[-92,15],[-97,16],[-105,20],[-112,29],[-115,31],[-117,32],[-121,35],[-124,40],[-124,47],[-128,51],[-135,58],[-146,61],[-152,59],[-158,57],[-164,55],[-158,59],[-165,62]],
    // South America
    [[-77,8],[-72,12],[-63,10],[-52,5],[-50,0],[-44,-2],[-35,-5],[-35,-9],[-39,-15],[-41,-22],[-48,-26],[-53,-34],[-58,-38],[-62,-39],[-65,-45],[-68,-50],[-69,-55],[-74,-52],[-75,-46],[-73,-37],[-71,-30],[-70,-18],[-76,-14],[-81,-6],[-80,-2],[-78,2]],
    // Greenland
    [[-73,78],[-60,82],[-30,83],[-20,75],[-22,70],[-43,60],[-52,65],[-55,70]],
    // Eurasia
    [[-9,37],[-9,43],[-2,44],[-4,48],[2,51],[8,54],[8,57],[11,54],[14,54],[20,55],[22,60],[30,60],[24,65],[21,66],[17,62],[19,60],[16,56],[12,56],[10,59],[5,59],[5,62],[14,67],[22,70],[30,70],[41,67],[34,66],[44,66],[60,69],[70,73],[80,73],[100,77],[112,74],[130,72],[140,72],[160,70],[180,69],[180,65],[170,60],[163,59],[156,51],[155,58],[143,59],[137,54],[140,48],[131,43],[129,40],[129,35],[126,35],[125,39],[121,40],[122,37],[119,35],[122,30],[120,25],[110,21],[108,17],[109,12],[105,9],[101,13],[100,8],[103,1],[98,8],[98,16],[94,17],[92,22],[87,21],[80,15],[80,10],[77,8],[73,17],[72,21],[67,25],[57,25],[56,27],[50,30],[48,30],[51,25],[56,24],[59,22],[52,16],[43,13],[39,21],[35,28],[34,31],[36,36],[30,36],[26,38],[26,40],[29,41],[40,41],[35,42],[28,41],[24,40],[22,37],[19,40],[14,45],[12,44],[16,41],[18,40],[16,38],[12,38],[9,44],[3,43],[0,39],[-5,36]],
    // Africa
    [[-17,21],[-13,28],[-6,36],[10,37],[11,33],[20,31],[32,31],[34,28],[38,20],[43,12],[51,12],[46,3],[40,-3],[40,-15],[35,-24],[32,-29],[27,-34],[20,-35],[17,-30],[12,-17],[14,-8],[9,-1],[9,4],[4,6],[-8,4],[-13,8],[-17,14]],
    // British Isles
    [[-6,50],[1,51],[2,53],[-2,56],[-5,58],[-6,55],[-3,54],[-5,52]],
    // Japan
    [[130,31],[135,34],[140,36],[142,40],[141,45],[145,44],[141,41],[138,38],[134,35]],
    // Sumatra
    [[95,5],[106,-6],[104,-3],[98,2]],
    // Borneo
    [[109,2],[117,7],[119,1],[116,-4],[111,-3]],
    // Australia
    [[114,-22],[122,-18],[130,-12],[137,-12],[142,-11],[146,-19],[153,-26],[150,-37],[141,-38],[135,-35],[131,-31],[116,-35]],
    // Madagascar
    [[44,-25],[47,-25],[50,-15],[49,-12],[44,-17]],
    // New Zealand (south + north, merged coarse)
    [[172,-34],[178,-38],[175,-41],[172,-44],[168,-46],[171,-41]],
    // Sri Lanka
    [[79.7,6.0],[81.9,7.3],[80.2,9.8],[79.8,8.0]]
  ];

  function inPoly(lon, lat, poly) {
    var inside = false;
    for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      var xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
      if (((yi > lat) !== (yj > lat)) && (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi)) inside = !inside;
    }
    return inside;
  }

  function isLand(lon, lat) {
    if (lat < -72) return true; // Antarctica
    for (var k = 0; k < LAND.length; k++) if (inPoly(lon, lat, LAND[k])) return true;
    return false;
  }

  /* ---------- Globe ---------- */
  function initGlobe() {
    var canvas = document.getElementById('abGlobe');
    var hero = document.querySelector('.ab-hero');
    if (!canvas || !hero || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var D2R = Math.PI / 180;

    // Land dots (pre-computed once)
    var pts = [];
    var step = 2.3;
    for (var lat = -86; lat <= 86; lat += step) {
      var cl = Math.cos(lat * D2R);
      var lonStep = step / Math.max(cl, 0.08);
      for (var lon = -180; lon < 180; lon += lonStep) {
        if (isLand(lon, lat)) {
          var la = lat * D2R, lo = lon * D2R;
          pts.push([Math.sin(la), Math.cos(la), Math.sin(lo), Math.cos(lo)]);
        }
      }
    }
    var N = pts.length;

    // Graticule dots (faint grid)
    var grid = [];
    var g, t;
    for (g = -60; g <= 60; g += 30) {
      for (t = -180; t < 180; t += 4) {
        var la2 = g * D2R, lo2 = t * D2R;
        grid.push([Math.sin(la2), Math.cos(la2), Math.sin(lo2), Math.cos(lo2)]);
      }
    }
    for (g = -180; g < 180; g += 30) {
      for (t = -86; t <= 86; t += 4) {
        var la3 = t * D2R, lo3 = g * D2R;
        grid.push([Math.sin(la3), Math.cos(la3), Math.sin(lo3), Math.cos(lo3)]);
      }
    }

    // EMC locations (HQ = first)
    function city(name, lat, lon, hq) {
      var la = lat * D2R, lo = lon * D2R;
      return { name: name, hq: !!hq, p: [Math.sin(la), Math.cos(la), Math.sin(lo), Math.cos(lo)] };
    }
    var cities = [
      city('Bhubaneswar', 20.27, 85.84, true),
      city('Chennai', 13.08, 80.27),
      city('Coimbatore', 11.0, 76.96),
      city('Sambalpur', 21.47, 83.97),
      city('Tezpur', 26.63, 92.79)
    ];

    // Stars
    var stars = [];
    for (var s = 0; s < 140; s++) {
      stars.push({ x: Math.random(), y: Math.random(), r: Math.random() * 1.2 + 0.2, p: Math.random() * 6.28, sp: 0.5 + Math.random() * 1.5 });
    }

    var W = 0, H = 0, cx = 0, cy = 0, R = 0, dpr = 1;
    function resize() {
      var rect = hero.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(rect.width, 320);
      H = Math.max(rect.height, 320);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (W > 900) {
        R = Math.min(H * 0.42, W * 0.27);
        cx = W * 0.74;
        cy = H * 0.52;
      } else {
        R = Math.min(W * 0.40, 220);
        cx = W / 2;
        cy = H - R - 28;
      }
    }

    var lam0 = 70 * D2R;          // start centred near India
    var phi0 = 22 * D2R;          // axial tilt (view from north)
    var sinP = Math.sin(phi0), cosP = Math.cos(phi0);
    var running = false, last = 0, raf = 0;

    function draw(ts) {
      ctx.clearRect(0, 0, W, H);

      // stars
      var tt = ts / 1000;
      for (var i = 0; i < stars.length; i++) {
        var st = stars[i];
        var a = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(tt * st.sp + st.p));
        ctx.globalAlpha = a * 0.8;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(st.x * W, st.y * H, st.r, 0, 6.283);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // atmosphere glow
      var glow = ctx.createRadialGradient(cx, cy, R * 0.92, cx, cy, R * 1.45);
      glow.addColorStop(0, 'rgba(159,208,50,0.30)');
      glow.addColorStop(0.35, 'rgba(56,189,248,0.14)');
      glow.addColorStop(1, 'rgba(8,17,24,0)');
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(cx, cy, R * 1.45, 0, 6.283); ctx.fill();

      // orbit ring — back half
      drawRing(tt, false);

      // ocean sphere
      var sea = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
      sea.addColorStop(0, '#12405a');
      sea.addColorStop(0.55, '#0a2638');
      sea.addColorStop(1, '#050f1a');
      ctx.fillStyle = sea;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.283); ctx.fill();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(159,208,50,0.55)';
      ctx.stroke();

      var cl0 = Math.cos(lam0), sl0 = Math.sin(lam0);
      var p, x, y, z, cd, sd, k;

      // graticule
      ctx.fillStyle = 'rgba(148,210,255,0.22)';
      for (k = 0; k < grid.length; k++) {
        p = grid[k];
        cd = p[3] * cl0 + p[2] * sl0;
        z = sinP * p[0] + cosP * p[1] * cd;
        if (z <= 0) continue;
        sd = p[2] * cl0 - p[3] * sl0;
        x = p[1] * sd;
        y = cosP * p[0] - sinP * p[1] * cd;
        ctx.fillRect(cx + x * R, cy - y * R, 1, 1);
      }

      // land dots
      var size = Math.max(1.35, R / 135);
      for (k = 0; k < N; k++) {
        p = pts[k];
        cd = p[3] * cl0 + p[2] * sl0;
        z = sinP * p[0] + cosP * p[1] * cd;
        if (z <= 0) continue;
        sd = p[2] * cl0 - p[3] * sl0;
        x = p[1] * sd;
        y = cosP * p[0] - sinP * p[1] * cd;
        ctx.globalAlpha = 0.28 + 0.72 * z;
        ctx.fillStyle = z > 0.55 ? '#b9e84f' : '#7fb029';
        ctx.fillRect(cx + x * R - size / 2, cy - y * R - size / 2, size, size);
      }
      ctx.globalAlpha = 1;

      // EMC locations
      for (k = 0; k < cities.length; k++) {
        var c = cities[k], q = c.p;
        cd = q[3] * cl0 + q[2] * sl0;
        z = sinP * q[0] + cosP * q[1] * cd;
        if (z <= 0.08) continue;
        sd = q[2] * cl0 - q[3] * sl0;
        x = cx + q[1] * sd * R;
        y = cy - (cosP * q[0] - sinP * q[1] * cd) * R;
        var pulse = (tt * 0.9 + k * 0.2) % 1;
        if (c.hq) {
          ctx.globalAlpha = (1 - pulse) * z;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.arc(x, y, 4 + pulse * 22, 0, 6.283); ctx.stroke();
          ctx.globalAlpha = z;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath(); ctx.arc(x, y, 4, 0, 6.283); ctx.fill();
          ctx.fillStyle = '#9fd032';
          ctx.beginPath(); ctx.arc(x, y, 2.2, 0, 6.283); ctx.fill();
          if (W > 560) {
            ctx.font = '700 12px "Plus Jakarta Sans", sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText('EMC HQ · Bhubaneswar', x + 12, y - 8);
          }
        } else {
          ctx.globalAlpha = 0.9 * z;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath(); ctx.arc(x, y, 1.9, 0, 6.283); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      // rim light
      var rim = ctx.createRadialGradient(cx, cy, R * 0.82, cx, cy, R);
      rim.addColorStop(0, 'rgba(56,189,248,0)');
      rim.addColorStop(1, 'rgba(56,189,248,0.22)');
      ctx.fillStyle = rim;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.283); ctx.fill();

      // orbit ring — front half
      drawRing(tt, true);
    }

    function drawRing(tt, front) {
      var rx = R * 1.38, ry = R * 0.34, rot = -20 * D2R;
      var cr = Math.cos(rot), sr = Math.sin(rot);
      function pt(a) {
        var ex = Math.cos(a) * rx, ey = Math.sin(a) * ry;
        return [cx + ex * cr - ey * sr, cy + ex * sr + ey * cr];
      }
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(159,208,50,0.35)';
      ctx.beginPath();
      var a0 = front ? 0 : Math.PI, a1 = front ? Math.PI : Math.PI * 2;
      for (var a = a0; a <= a1 + 0.001; a += 0.05) {
        var q = pt(a);
        if (a === a0) ctx.moveTo(q[0], q[1]); else ctx.lineTo(q[0], q[1]);
      }
      ctx.stroke();
      // satellite
      var sa = (tt * 0.55) % (Math.PI * 2);
      var isFront = Math.sin(sa) > 0;
      if (isFront === front) {
        var sp = pt(sa);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#9fd032';
        ctx.shadowBlur = 12;
        ctx.beginPath(); ctx.arc(sp[0], sp[1], 3, 0, 6.283); ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function loop(ts) {
      if (!running) return;
      var dt = last ? Math.min(ts - last, 60) : 16;
      last = ts;
      lam0 += dt * 0.000115 * 1.0; // ~ 1 full turn per ~55s
      draw(ts);
      raf = requestAnimationFrame(loop);
    }
    function start() {
      if (running || reduce) return;
      running = true; last = 0;
      raf = requestAnimationFrame(loop);
    }
    function stop() { running = false; cancelAnimationFrame(raf); }

    resize();
    draw(0);
    if (!reduce) start();

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () { resize(); draw(performance.now()); }, 120);
    });
    document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) {
        en[0].isIntersecting ? start() : stop();
      }, { threshold: 0.02 }).observe(hero);
    }

    // Optional real video (drop file at assets/videos/earth-in-galaxy.mp4)
    var vid = hero.querySelector('.ab-hero-video');
    if (vid && vid.dataset.src && !reduce && window.innerWidth > 768) {
      vid.addEventListener('canplay', function () {
        vid.classList.add('ready');
        canvas.classList.add('hidden-by-video');
        vid.play && vid.play().catch(function () {});
      }, { once: true });
      vid.src = vid.dataset.src;
    }
  }

  function boot() { initReveal(); initGlobe(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();