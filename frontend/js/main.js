/* ==========================================================================
   MAIN GLOBAL INITIALIZER, SCROLL ANIMATIONS & METRIC COUNTERS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgressBar();
  initScrollRevealAnimations();
  initMetricCounters();
  initVisitorCounter();
  initHeroSlider();
  initWorldMap();
  initScrollDrivenExpertiseMorph();
});

/* Our Presence: interactive world map (Bhubaneswar HQ linked with partner countries) */
function initWorldMap() {
  const wrap = document.getElementById('worldMapWrapper');
  if (!wrap) return;

  const routes = wrap.querySelectorAll('.wm-route');
  const hoverables = wrap.querySelectorAll('.wm-node, .wm-chip, .wm-dots-india');
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reduced motion: stop plane animation and park planes mid-route
  if (reduceMotion) {
    wrap.querySelectorAll('.wm-plane').forEach(plane => {
      const motion = plane.querySelector('animateMotion');
      const href = motion && motion.querySelector('mpath') && motion.querySelector('mpath').getAttribute('href');
      const path = href ? wrap.querySelector(href) : null;
      if (path && path.getPointAtLength) {
        const len = path.getTotalLength();
        const pt = path.getPointAtLength(len * 0.5);
        const pt2 = path.getPointAtLength(len * 0.52);
        const ang = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180 / Math.PI;
        plane.setAttribute('transform', `translate(${pt.x} ${pt.y}) rotate(${ang})`);
      }
      if (motion) motion.remove();
    });
  }

  function setActive(key) {
    wrap.classList.add('has-focus');
    wrap.querySelectorAll('[data-node]').forEach(el => {
      el.classList.toggle('is-active', el.getAttribute('data-node') === key);
    });
    // HQ highlights every route
    if (key === 'bhubaneswar' || key === 'india') routes.forEach(r => r.classList.add('is-active'));
  }

  function clearActive() {
    wrap.classList.remove('has-focus');
    wrap.querySelectorAll('.is-active').forEach(el => el.classList.remove('is-active'));
  }

  hoverables.forEach(el => {
    const key = el.getAttribute('data-node');
    el.addEventListener('mouseenter', () => setActive(key));
    el.addEventListener('mouseleave', clearActive);
    el.addEventListener('focus', () => setActive(key));
    el.addEventListener('blur', clearActive);
    // Touch: tap toggles highlight
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      if (el.classList.contains('is-active') && wrap.classList.contains('has-focus') && e.pointerType === 'touch') clearActive();
      else setActive(key);
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.wm-node, .wm-chip, .wm-dots-india')) clearActive();
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