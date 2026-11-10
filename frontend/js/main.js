/* ==========================================================================
   MAIN GLOBAL INITIALIZER, SCROLL ANIMATIONS & METRIC COUNTERS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgressBar();
  initScrollRevealAnimations();
  initMetricCounters();
  initVisitorCounter();
  initHeroSlider();
  initInteractiveIndiaMap();
  initScrollDrivenExpertiseMorph();
});

/* Interactive India Map Data & State Detail View */
const indiaStateData = {
  assam: {
    name: "Assam",
    region: "North East Region",
    office: "Regional Hub: Guwahati, Assam",
    projects: 18,
    sectors: [
      { name: "Water Supply & Sanitation", count: 7, percent: 39 },
      { name: "Urban Infrastructure & Roads", count: 5, percent: 28 },
      { name: "Environmental Impact Assessment", count: 4, percent: 22 },
      { name: "GIS & Master Planning", count: 2, percent: 11 }
    ],
    highlights: ["Guwahati Urban Water Supply", "Brahmaputra Flood Protection Consultancy", "Assam Municipal GIS Survey"]
  },
  odisha: {
    name: "Odisha",
    region: "Corporate Headquarters",
    office: "Headquarters: DLF Cybercity, Patia, Bhubaneswar",
    projects: 45,
    sectors: [
      { name: "Smart Water & Sanitation (BASUDHA)", count: 18, percent: 40 },
      { name: "Urban Development & Roads", count: 12, percent: 27 },
      { name: "Environmental & Forest Ecology", count: 9, percent: 20 },
      { name: "Solid Waste & GIS Mapping", count: 6, percent: 13 }
    ],
    highlights: ["Bhubaneswar Smart City Water Grid", "Odisha Coastal Zone Management", "Patia Urban Sewerage Project"]
  },
  delhi: {
    name: "Delhi / NCR",
    region: "Northern Region",
    office: "Regional Hub: New Delhi",
    projects: 24,
    sectors: [
      { name: "Master Planning & Urban Mobility", count: 10, percent: 42 },
      { name: "Environmental Compliance", count: 8, percent: 33 },
      { name: "GIS & Remote Sensing", count: 6, percent: 25 }
    ],
    highlights: ["NCR Regional Connectivity Study", "Yamuna Basin Environment Assessment", "Delhi Smart Utilities Mapping"]
  },
  maharashtra: {
    name: "Maharashtra",
    region: "Western Region",
    office: "Regional Hub: Mumbai / Pune",
    projects: 22,
    sectors: [
      { name: "Water Supply & Sewerage", count: 9, percent: 41 },
      { name: "Industrial Infrastructure", count: 7, percent: 32 },
      { name: "Environmental Advisory", count: 6, percent: 27 }
    ],
    highlights: ["MMRDA Urban Utilities Planning", "Pune Metro Corridor ELS Study", "Thane Lake Conservation Project"]
  },
  gujarat: {
    name: "Gujarat",
    region: "West Zone Hub",
    office: "Regional Hub: Ahmedabad",
    projects: 16,
    sectors: [
      { name: "Water & Wastewater Management", count: 7, percent: 44 },
      { name: "Renewable Energy Infrastructure", count: 5, percent: 31 },
      { name: "Environmental Audits", count: 4, percent: 25 }
    ],
    highlights: ["Sabarmati Riverfront Phase II Study", "GIFT City Smart Utilities", "Dholera SIR Environmental Planning"]
  },
  karnataka: {
    name: "Karnataka",
    region: "Southern Region",
    office: "Regional Hub: Bengaluru",
    projects: 19,
    sectors: [
      { name: "Smart Cities & GIS Systems", count: 8, percent: 42 },
      { name: "Bulk Water Supply Schemes", count: 6, percent: 32 },
      { name: "Urban Transport Infrastructure", count: 5, percent: 26 }
    ],
    highlights: ["Bengaluru Peripheral Ring Road EIA", "Mysuru Heritage Water Grid", "Mangaluru Port Environmental Survey"]
  },
  westbengal: {
    name: "West Bengal",
    region: "Eastern Region",
    office: "Regional Hub: Kolkata",
    projects: 15,
    sectors: [
      { name: "Flood Management & Coastal Dev", count: 6, percent: 40 },
      { name: "Urban Water Supply", count: 5, percent: 33 },
      { name: "Solid Waste Management", count: 4, percent: 27 }
    ],
    highlights: ["Sundarbans Coastal Resilience Project", "KMDA Urban Sewerage Master Plan", "Asansol Industrial Water Grid"]
  },
  madhyapradesh: {
    name: "Madhya Pradesh",
    region: "Central Region",
    office: "Regional Hub: Bhopal",
    projects: 12,
    sectors: [
      { name: "Rural & Urban Water Supply", count: 6, percent: 50 },
      { name: "Environmental Monitoring", count: 4, percent: 33 },
      { name: "Watershed Management", count: 2, percent: 17 }
    ],
    highlights: ["MP Jal Nigam Rural Pipeline Grid", "Bhopal Smart Lake Restoration", "Indore Eco-Industrial Audit"]
  },
  uttarpradesh: {
    name: "Uttar Pradesh",
    region: "North Zone",
    office: "Regional Hub: Lucknow / Noida",
    projects: 21,
    sectors: [
      { name: "Clean Ganga & Water Treatment", count: 9, percent: 43 },
      { name: "Urban Roads & Smart Drainage", count: 7, percent: 33 },
      { name: "GIS Land Record Digitization", count: 5, percent: 24 }
    ],
    highlights: ["Noida International Airport Area EIA", "Lucknow Smart Sewerage Network", "Varanasi Heritage Ghats Audit"]
  },
  telangana: {
    name: "Telangana",
    region: "South-Central Hub",
    office: "Regional Hub: Hyderabad",
    projects: 14,
    sectors: [
      { name: "Mission Bhagiratha Water Grid", count: 6, percent: 43 },
      { name: "IT Corridor Infrastructure", count: 5, percent: 36 },
      { name: "GIS Utilities Mapping", count: 3, percent: 21 }
    ],
    highlights: ["Hyderabad Outer Ring Road Utilities", "Telangana Regional Water Grid", "Warangal Smart City Planning"]
  },
  rajasthan: {
    name: "Rajasthan",
    region: "North-West Zone",
    office: "Regional Hub: Jaipur",
    projects: 13,
    sectors: [
      { name: "Desert Water Supply & Canal Systems", count: 6, percent: 46 },
      { name: "Solar Park Environmental Planning", count: 4, percent: 31 },
      { name: "Heritage City Urban Infra", count: 3, percent: 23 }
    ],
    highlights: ["Jaipur Smart Heritage Corridor", "Jodhpur Water Supply Scheme", "Bhadla Solar Park Environmental Impact"]
  }
};

function initInteractiveIndiaMap() {
  const mapWrapper = document.getElementById('indiaMapWrapper');
  const detailView = document.getElementById('stateDetailView');
  const backBtn = document.getElementById('backToIndiaMapBtn');
  const stateTitle = document.getElementById('stateTitleName');
  const stateOffice = document.getElementById('stateOfficeInfo');
  const stateRegion = document.getElementById('stateRegionTag');
  const stateProjects = document.getElementById('stateProjectCount');
  const sectorsList = document.getElementById('stateSectorsList');
  const highlightsList = document.getElementById('stateHighlightsList');

  if (!mapWrapper || !detailView) return;

  function showStateDetail(stateKey) {
    const data = indiaStateData[stateKey];
    if (!data) return;

    stateTitle.textContent = data.name;
    stateOffice.textContent = data.office;
    stateRegion.textContent = data.region;
    stateProjects.textContent = data.projects;

    // Render Sector Breakdown Bars
    sectorsList.innerHTML = data.sectors.map(sec => `
      <div class="sector-progress-item">
        <div class="sector-info">
          <span class="sector-name">${sec.name}</span>
          <span class="sector-count">${sec.count} Projects (${sec.percent}%)</span>
        </div>
        <div class="sector-bar-track">
          <div class="sector-bar-fill" style="width: ${sec.percent}%;"></div>
        </div>
      </div>
    `).join('');

    // Render Highlight Badges
    highlightsList.innerHTML = data.highlights.map(hl => `
      <span class="highlight-pill">✓ ${hl}</span>
    `).join('');

    // Transition: Hide India Map, Show State Detail View
    mapWrapper.style.display = 'none';
    detailView.style.display = 'block';
  }

  function hideStateDetail() {
    detailView.style.display = 'none';
    mapWrapper.style.display = 'block';
  }

  // Bind click handlers on SVG paths & marker pins
  document.querySelectorAll('.map-state-path.active-state, .state-marker').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const stateKey = el.getAttribute('data-state');
      if (stateKey) {
        showStateDetail(stateKey);
      }
    });
  });

  // Back button click
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      hideStateDetail();
    });
  }

  // Click outside state-detail-card to reset map to India map
  document.addEventListener('click', (e) => {
    if (detailView.style.display !== 'none') {
      const card = document.getElementById('stateDetailCard');
      if (card && !card.contains(e.target) && !e.target.closest('.state-marker') && !e.target.closest('.map-state-path')) {
        hideStateDetail();
      }
    }
  });
}

/* Hero Auto-Slider & Interactive Controls */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.hero-slider-prev');
  const nextBtn = document.querySelector('.hero-slider-next');
  const sliderSection = document.querySelector('.hero-slider-section');

  if (slides.length === 0) return;

  let currentSlide = 0;
  let slideInterval = null;
  const slideDuration = 4500; // 4.5 seconds per slide

  function goToSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
  }

  function startAutoPlay() {
    if (!slideInterval) {
      slideInterval = setInterval(nextSlide, slideDuration);
    }
  }

  function stopAutoPlay() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  // Click events for dots
  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      stopAutoPlay();
      const slideIndex = parseInt(e.currentTarget.getAttribute('data-slide'));
      goToSlide(slideIndex);
      startAutoPlay();
    });
  });

  // Click events for prev/next
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopAutoPlay();
      prevSlide();
      startAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopAutoPlay();
      nextSlide();
      startAutoPlay();
    });
  }

  // Pause on hover
  if (sliderSection) {
    sliderSection.addEventListener('mouseenter', stopAutoPlay);
    sliderSection.addEventListener('mouseleave', startAutoPlay);
  }

  // Start initial auto-play
  startAutoPlay();
}

/* Live Visitor Counter (+5 per session starting from 57,896) */
async function initVisitorCounter() {
  const counterDisplays = document.querySelectorAll('#visitorCounterDisplay');
  if (counterDisplays.length === 0) return;

  let formatted = '57,901';

  try {
    const res = await fetch('/api/visitor-counter');
    if (res.ok) {
      const data = await res.json();
      if (data.formatted) {
        formatted = data.formatted;
      }
    } else {
      formatted = getFallbackCounter();
    }
  } catch (e) {
    formatted = getFallbackCounter();
  }

  counterDisplays.forEach(el => {
    el.textContent = formatted;
  });
}

function getFallbackCounter() {
  let count = parseInt(localStorage.getItem('emc_visitor_count') || '57896');
  count += 5;
  localStorage.setItem('emc_visitor_count', count.toString());
  return count.toLocaleString('en-US');
}

/* Scroll Progress Bar */
function initScrollProgressBar() {
  let progressBar = document.querySelector('.scroll-progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    document.body.appendChild(progressBar);
  }

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = `${scrolled}%`;
  });
}

/* Scroll Reveal Animations (Fade up, slide in with stagger) */
function initScrollRevealAnimations() {
  const selectors = [
    '.service-card',
    '.project-card',
    '.insight-card',
    '.team-card',
    '.advisor-card',
    '.stat-item',
    '.advantage-card',
    '.value-card',
    '.capability-item',
    '.faq-item',
    '.page-hero-grid',
    '.ceo-grid',
    '.cta-banner'
  ];

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, index) => {
      if (!el.classList.contains('reveal-on-scroll')) {
        el.classList.add('reveal-on-scroll');
        // Apply stagger delay based on index in group
        const delayClass = `stagger-delay-${(index % 4) + 1}`;
        el.classList.add(delayClass);
      }
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

/* Metric Counter Animation */
function initMetricCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  statNumbers.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const text = el.innerText.trim();
  const match = text.match(/^([^\d]*)([\d,]+)(\+?.*)$/);
  if (!match) return;

  const prefix = match[1];
  const targetNum = parseInt(match[2].replace(/,/g, ''));
  const suffix = match[3];

  let current = 0;
  const duration = 1600;
  const stepTime = 30;
  const steps = duration / stepTime;
  const increment = targetNum / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= targetNum) {
      el.innerText = `${prefix}${targetNum.toLocaleString()}${suffix}`;
      clearInterval(timer);
    } else {
      el.innerText = `${prefix}${Math.floor(current).toLocaleString()}${suffix}`;
    }
  }, stepTime);
}

/* Global Sector Selection Handler (for onclick access in HTML) */
window.setActiveSector = function (index) {
  const cards = document.querySelectorAll('.expertise-card-morph');
  const dots = document.querySelectorAll('.morph-dot');
  const fill = document.getElementById('morphProgressFill');
  const track = document.getElementById('expertiseScrollTrack');
  const totalSectors = cards.length || 7;

  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add('active');
      card.style.setProperty('--card-flex', '4.2');
    } else {
      card.classList.remove('active');
      card.style.setProperty('--card-flex', '1.0');
    }
  });

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  if (fill) {
    fill.style.width = `${((index + 1) / totalSectors) * 100}%`;
  }

  if (window.innerWidth > 991 && track) {
    const headerOffset = 76;
    const trackTopDoc = window.scrollY + track.getBoundingClientRect().top - headerOffset;
    const trackHeight = track.offsetHeight;
    const viewportHeight = window.innerHeight - headerOffset;
    const maxScroll = trackHeight - viewportHeight;
    const targetScroll = trackTopDoc + (index / (totalSectors - 1)) * maxScroll + 10;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  }
};

/* ==========================================================================
   SCROLL-DRIVEN INTERACTIVE SECTOR MORPH ENGINE (ZOOX INSPIRED)
   ========================================================================== */
function initScrollDrivenExpertiseMorph() {
  const track = document.getElementById('expertiseScrollTrack');
  const stickySec = document.getElementById('stickyExpertiseSection');
  const cards = document.querySelectorAll('.expertise-card-morph');
  const dots = document.querySelectorAll('.morph-dot');
  const fill = document.getElementById('morphProgressFill');

  if (!track || !stickySec || cards.length === 0) return;

  const totalSectors = cards.length; // 7
  let targetProgress = 0;
  let currentProgress = 0;

  function calculateTargetProgress() {
    if (window.innerWidth <= 991) return 0;

    const headerOffset = 76;
    const trackRect = track.getBoundingClientRect();
    const trackTopRelativeToViewport = trackRect.top - headerOffset;
    const trackHeight = trackRect.height;
    const viewportHeight = window.innerHeight - headerOffset;
    const maxScroll = trackHeight - viewportHeight;

    if (maxScroll <= 0) return 0;

    let progress = -trackTopRelativeToViewport / maxScroll;
    return Math.max(0, Math.min(1, progress));
  }

  function renderMorphState(p) {
    const rawIndex = p * (totalSectors - 1);
    const activeIndex = Math.round(rawIndex);

    cards.forEach((card, i) => {
      const dist = Math.abs(rawIndex - i);
      const weight = Math.max(0, 1 - dist);

      // Smoothly interpolate flex-grow
      const flexVal = (1 + 3.2 * weight).toFixed(3);
      card.style.setProperty('--card-flex', flexVal);

      if (i === activeIndex) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    if (fill) {
      fill.style.width = `${((activeIndex + 1) / totalSectors) * 100}%`;
    }
  }

  function smoothRenderLoop() {
    if (window.innerWidth > 991) {
      // Smooth dampening factor (0.07) for deliberate, slow, luxurious storytelling morph
      currentProgress += (targetProgress - currentProgress) * 0.07;

      if (Math.abs(targetProgress - currentProgress) > 0.0001) {
        renderMorphState(currentProgress);
      } else {
        renderMorphState(targetProgress);
      }
    }

    requestAnimationFrame(smoothRenderLoop);
  }

  function onScroll() {
    targetProgress = calculateTargetProgress();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  // Initial setup & start loop
  targetProgress = calculateTargetProgress();
  currentProgress = targetProgress;
  renderMorphState(currentProgress);
  smoothRenderLoop();
}

