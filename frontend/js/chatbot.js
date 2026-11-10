<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us | Ecometrix Consultants Pvt. Ltd.</title>
  <meta name="description" content="Crafting a Sustainable Future - the Vision, Mission, Core Values, Focus and Approach of Ecometrix Consultants Pvt. Ltd. (EMC), an ISO 9001:2015 & ISO 27001:2013 certified engineering consulting company.">
  <link rel="stylesheet" href="css/global.css">
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/footer.css">
  <link rel="stylesheet" href="css/modal.css">
  <link rel="stylesheet" href="css/about.css">
  <script src="js/i18n.js"></script>
</head>
<body>

  <a href="#main-content" class="skip-link">Skip to Main Content</a>

  <header class="site-header">
    <div class="container header-container">
      <a href="index.html" class="brand-logo">
        <img src="assets/logo/emclogo.png" alt="Ecometrix Logo">
      </a>
      <ul class="nav-menu">
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li><a href="about.html" class="nav-link active">About Us</a></li>
        <li><a href="our-services.html" class="nav-link">Our Services</a></li>
        <li><a href="services.html" class="nav-link">Delivery Experience</a></li>
        <!-- <li><a href="projects.html" class="nav-link">Projects</a></li>
        <li><a href="insights.html" class="nav-link">Insights</a></li> -->
        <li class="nav-item-has-dropdown">
          <a href="advisory-board.html" class="nav-link">Our Peoples ▾</a>
          <ul class="nav-dropdown">
            <li><a href="advisory-board.html" class="nav-dropdown-link">Advisory Board</a></li>
            <li><a href="team-emc.html" class="nav-dropdown-link">Team EMC</a></li>
          </ul>
        </li>
        <li><a href="careers.html" class="nav-link">Careers</a></li>
        <li><a href="contact.html" class="nav-link">Contact</a></li>
        <li><a href="#" class="nav-link emcone-nav-btn" onclick="openEmconeModal(event)">EMCOne</a></li>
      </ul>
      <div class="header-actions">
        <button class="nav-search-btn" title="Global Search (Ctrl + K)" aria-label="Search" onclick="window.openSearchModal && window.openSearchModal()">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>

        <button type="button" class="header-pref-toggle" id="prefModalBtn" title="Site Preferences & Accessibility Controls (Theme, Language, A11y)">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg> <span class="current-lang-code">EN</span>
        </button>

        <a href="contact.html" class="btn btn-primary">Let's Connect →</a>

        <button class="mobile-toggle" aria-label="Toggle mobile menu">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </div>
  </header>

  <div class="mobile-nav-drawer">
    <a href="index.html" class="mobile-nav-link">Home</a>
    <a href="about.html" class="mobile-nav-link active">About Us</a>
    <a href="our-services.html" class="mobile-nav-link">Our Services</a>
    <a href="services.html" class="mobile-nav-link">Delivery Experience</a>
    <!-- <a href="projects.html" class="mobile-nav-link">Projects</a>
    <a href="insights.html" class="mobile-nav-link">Insights</a> -->
    <div class="mobile-nav-group">
      <div class="mobile-nav-group-title">Our Peoples</div>
      <a href="advisory-board.html" class="mobile-nav-link mobile-nav-sublink">Advisory Board</a>
      <a href="team-emc.html" class="mobile-nav-link mobile-nav-sublink">Team EMC</a>
    </div>
    <a href="careers.html" class="mobile-nav-link">Careers</a>
    <a href="contact.html" class="mobile-nav-link">Contact</a>
    <a href="#" class="mobile-nav-link emcone-nav-btn" onclick="openEmconeModal(event)">EMCOne Portal</a>

    <div style="display:flex; align-items:center; justify-content:space-between; margin-top:16px; padding:12px; background:var(--light-green-bg); border-radius:var(--radius-sm);">
      <span style="font-size:0.8125rem; font-weight:700; color:var(--navy-text);">Quick Tools:</span>
      <div style="display:flex; gap:8px;">
        <button type="button" class="header-action-btn header-pref-toggle" title="Site Preferences & Accessibility">⚙️</button>
        <button type="button" class="header-action-btn" data-a11y-action="contrast" title="High Contrast">♿</button>
        <button type="button" class="header-action-btn" data-a11y-action="large" title="Increase Font Size">A+</button>
      </div>
    </div>

    <a href="contact.html" class="btn btn-primary" style="margin-top:12px; text-align:center;">Let's Connect →</a>
  </div>

  <!-- ===================== HERO ===================== -->
  <section id="main-content" tabindex="-1" class="about-earth-hero">
    <div class="about-earth-stars" aria-hidden="true"></div>
    <video class="about-earth-video" id="aboutEarthVideo" autoplay muted loop playsinline preload="metadata" aria-hidden="true">
      <source src="assets/videos/earth-in-galaxy.mp4" type="video/mp4">
      <source src="https://ecometrix.co.in/wp-content/themes/emc_child/videos/Earth%20in%20Galaxy%204k.mp4" type="video/mp4">
    </video>
    <div class="about-earth-overlay" aria-hidden="true"></div>
    <div class="container">
      <div class="breadcrumbs">
        <a href="index.html">Home</a>
        <span>›</span>
        <span>About Us</span>
      </div>
      <div class="about-earth-content">
        <div class="section-badge">ABOUT US</div>
        <h1 class="about-earth-title">Crafting a <span>Sustainable Future</span></h1>
        <p class="about-earth-lead">
          By focusing on our Vision, Mission and Core Values, we at EMC create a shared sense of purpose and direction that guides our organizational decisions, actions, and interactions. They serve as a compass, enabling us to navigate challenges, pursue excellence, and achieve success as a united and purpose-driven team.
        </p>
      </div>
    </div>
  </section>

  <!-- ===================== VISION & MISSION (icons only, open layout) ===================== -->
  <section class="about-sec about-vm-section" id="vision-mission">
    <div class="container">
      <div class="about-vm-wrap" data-reveal>

        <div class="about-vm-item">
          <span class="about-vm-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </span>
          <div class="about-vm-body">
            <h3>Our Vision</h3>
            <p>To be a globally trusted partner of choice in providing integrated &amp; multi-disciplinary engineering consultancy solutions.</p>
          </div>
        </div>

        <span class="about-vm-sep" aria-hidden="true"></span>

        <div class="about-vm-item">
          <span class="about-vm-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
          </span>
          <div class="about-vm-body">
            <h3>Our Mission</h3>
            <p>To transform lives, empower communities and create a climate-smart future through innovative, data driven, leading-edge engineering and project management services.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ===================== CORE VALUES (icons only, no photos) ===================== -->
  <section class="about-sec about-values-section" id="core-values">
    <div class="container">
      <div class="about-sec-head center" data-reveal>
        <div class="section-badge">CORE VALUES</div>
        <h2 class="about-sec-title">Core Values</h2>
        <p class="about-sec-sub">The principles that guide every decision, every project and every relationship at EMC.</p>
      </div>

      <ul class="about-values-grid">
        <li class="about-value-item" data-reveal style="--reveal-delay:0.00s">
          <span class="about-value-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg></span>
          <h3>Client Satisfaction</h3>
          <p>The success of our clients is at the heart of our business excellence. We believe that timeliness in delivery is essential for customer satisfaction.</p>
        </li>
        <li class="about-value-item" data-reveal style="--reveal-delay:0.06s">
          <span class="about-value-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg></span>
          <h3>Technology Adaptation</h3>
          <p>In an ever-evolving world, we welcome change and adopt cutting-edge technologies to deliver projects with speed and scale.</p>
        </li>
        <li class="about-value-item" data-reveal style="--reveal-delay:0.12s">
          <span class="about-value-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></span>
          <h3>Integrity &amp; Trust</h3>
          <p>We are committed to being accountable, transparent and trustworthy, as we hold the highest standards of integrity and ethics in our actions.</p>
        </li>
        <li class="about-value-item" data-reveal style="--reveal-delay:0.18s">
          <span class="about-value-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></span>
          <h3>People First, Business Later</h3>
          <p>Our people are our greatest assets. We foster a people first approach where everyone is valued, appreciated and encouraged to thrive.</p>
        </li>
        <li class="about-value-item" data-reveal style="--reveal-delay:0.24s">
          <span class="about-value-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
          <h3>Teamwork</h3>
          <p>We promote a supportive and collaborative team culture by nurturing fellowship, mutual respect and collective responsibility.</p>
        </li>
        <li class="about-value-item" data-reveal style="--reveal-delay:0.30s">
          <span class="about-value-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg></span>
          <h3>Excellence</h3>
          <p>We pursue excellence persistently, ensuring that our work must reflect our commitment to the highest quality solutions &amp; services.</p>
        </li>
      </ul>
    </div>
  </section>

  <!-- ===================== OUR FOCUS ===================== -->
  <!-- <section class="about-sec" id="our-focus">
    <div class="container">
      <div class="about-sec-head center" data-reveal>
        <h2 class="about-sec-title">Our Focus</h2>
      </div>
      <div class="about-focus-strip" data-reveal>
        <div class="about-focus-panel active" tabindex="0" role="group" aria-label="Innovation">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80" alt="Global digital network representing innovation" loading="lazy" onerror="this.onerror=null;this.src='assets/about/focus-innovation.jpg'">
          <div class="about-focus-shade" aria-hidden="true"></div>
          <div class="about-focus-info">
            <span class="about-focus-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span>
            <h3>Innovation</h3>
            <p>We thrive on pushing boundaries, exploring uncharted territories and redefining what's possible. Our solutions are born at the intersection of creativity and practicality.</p>
          </div>
        </div>
        <div class="about-focus-panel" tabindex="0" role="group" aria-label="Collaboration">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80" alt="Business team in a collaborative meeting" loading="lazy" onerror="this.onerror=null;this.src='assets/about/focus-collaboration.jpg'">
          <div class="about-focus-shade" aria-hidden="true"></div>
          <div class="about-focus-info">
            <span class="about-focus-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></span>
            <h3>Collaboration</h3>
            <p>We don't work in silos, we thrive in synergy. By partnering with clients, stakeholders and communities, we co-create strategies that resonate. Together, we amplify impact.</p>
          </div>
        </div>
        <div class="about-focus-panel" tabindex="0" role="group" aria-label="Sustainability">
          <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80" alt="Solar panels and wind turbines for clean energy" loading="lazy" onerror="this.onerror=null;this.src='assets/about/focus-sustainability.jpg'">
          <div class="about-focus-shade" aria-hidden="true"></div>
          <div class="about-focus-info">
            <span class="about-focus-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg></span>
            <h3>Sustainability</h3>
            <p>It's not just a buzzword for us - it's our ethos. We uphold the highest standards of environmental responsibility. Our projects leave footprints of progress, not carbon.</p>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <!-- ===================== OUR APPROACH ===================== -->
  <!-- <section class="about-sec about-approach-section" id="our-approach">
    <div class="container">
      <div class="about-sec-head center" data-reveal>
        <h2 class="about-sec-title">Our Approach</h2>
        <p class="about-sec-sub">We believe that success is not solely the result of exceptional work quality, but also arises from our consistent professionalism and the thoughtful way we build relationships with our clients.</p>
      </div>
      <div class="about-approach-steps">
        <div class="about-approach-item" data-reveal style="--reveal-delay:0.00s">
          <div class="about-approach-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg></div>
          <h3>End-to-End</h3>
          <p>We support our clients in every step making a seamless journey, from idea to conceptualization, survey to design, planning to operation and beyond.</p>
        </div>
        <div class="about-approach-item" data-reveal style="--reveal-delay:0.10s">
          <div class="about-approach-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
          <h3>Multidisciplinary</h3>
          <p>Expert teams work closely with our clients across every aspect of service delivery with speed and scale combined with diligent monitoring and evaluation to bring in quality and excellence.</p>
        </div>
        <div class="about-approach-item" data-reveal style="--reveal-delay:0.20s">
          <div class="about-approach-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg></div>
          <h3>Future-Focused</h3>
          <p>We help provide support to communities to thrive in a changing world, adapting our focus to climate change, technical competency and future-focused state-of-the-art solutions that break paradigms.</p>
        </div>
      </div>
    </div>
  </section> -->

  <!-- ===================== WHAT SETS US APART ===================== -->
  <section class="about-apart-section" id="what-sets-us-apart">
    <img class="about-apart-bg" src="assets/about/what-sets-us-apart.jpg" alt="Industrial water pipeline at dusk with a city skyline in the background" loading="lazy">
    <div class="about-apart-shade" aria-hidden="true"></div>
    <div class="container about-apart-inner">
      <div class="about-apart-head" data-reveal>
        <div class="about-apart-badge">WHAT SETS US APART</div>
        <h2>What Sets Us Apart</h2>
        <span class="about-apart-bar" aria-hidden="true"></span>
      </div>
      <div class="about-apart-cols">
        <div class="about-apart-col" data-reveal>
          <span class="about-apart-label">Our Team</span>
          <p>Multidisciplinary expertise combining technical depth with local understanding</p>
        </div>
        <div class="about-apart-col" data-reveal style="--reveal-delay:0.10s">
          <span class="about-apart-label">Our Approach</span>
          <p>Integrated thinking connecting global knowledge with local realities</p>
        </div>
        <div class="about-apart-col" data-reveal style="--reveal-delay:0.20s">
          <span class="about-apart-label">Our Ethos</span>
          <p>Enduring partnerships across sectors, geographies and generations</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== OUR STORY ===================== -->
  <section class="container">
    <div class="about-story-grid">
      <div>
        <div class="section-badge">OUR STORY</div>
        <h2 style="font-size:2.25rem; font-weight:800; color:var(--navy-text); margin-bottom:20px; line-height:1.2;">From a Shared Vision to a National Impact</h2>
        <p style="font-size:0.9375rem; color:var(--text-body); line-height:1.7; margin-bottom:16px;">
          Ecometrix Consultants Pvt. Ltd. (EMC) was established in 2015 in Bhubaneswar, Odisha with a clear vision — to deliver innovative, sustainable and people-centric infrastructure solutions.
        </p>
        <p style="font-size:0.9375rem; color:var(--text-body); line-height:1.7; margin-bottom:16px;">
          Over the years, we have grown into a leading engineering and technical consultancy, working across water supply, used water management, stormwater drainage, urban infrastructure planning, GIS & IT, transportation, digital solutions and beyond.
        </p>
        <p style="font-size:0.9375rem; color:var(--text-body); line-height:1.7; margin-bottom:24px;">
          Today, with 8 regional offices, a strong multidisciplinary team and a growing international footprint, EMC continues to create solutions that enhance the quality of life for millions of people across India and beyond.
        </p>
        <a href="contact.html" class="btn btn-primary">Know More About Us →</a>
      </div>

      <div class="about-building-card">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" alt="EMC Corporate Building">
        <div class="about-building-overlay">
          <div class="section-badge" style="color:var(--accent-green);">EMC HEADQUARTERS</div>
          <h3 style="color:#FFF; font-size:1.25rem;">Built on trust. Driven by impact.</h3>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== EMERGING DIRECTIONS ===================== -->
  <section class="emerging-directions-section" id="emergingDirections">
    <div class="container">
      <div class="focus-areas-header left-aligned">
        <h2 class="focus-title">EMERGING DIRECTIONS</h2>
        <div class="title-divider-line"></div>
        <p class="focus-subtitle">Driving efficiency while widening our footprint into next-generation domain areas</p>
      </div>

      <div class="emerging-diagram-stage">
        <div class="emerging-wheel-col">
          <div class="emerging-wheel-box">
            <div class="wheel-bg-aura"></div>
            <div class="wheel-orbit-ring ring-1"></div>
            <div class="wheel-orbit-ring ring-2"></div>
            <div class="wheel-sonar-pulse"></div>

            <svg viewBox="0 0 500 500" class="emerging-svg-canvas">
              <defs>
                <clipPath id="clip-center"><circle cx="250" cy="250" r="75" /></clipPath>
                <clipPath id="clip-sec-1"><path d="M 120.6,158.8 A 175,175 0 0,1 310.4,85.6 L 287.3,179.5 A 75,75 0 0,0 206.0,210.9 Z" /></clipPath>
                <clipPath id="clip-sec-2"><path d="M 323.0,88.9 A 175,175 0 0,1 424.2,232.0 L 324.7,242.3 A 75,75 0 0,0 281.3,180.9 Z" /></clipPath>
                <clipPath id="clip-sec-3"><path d="M 424.2,244.3 A 175,175 0 0,1 328.0,380.0 L 283.4,305.7 A 75,75 0 0,0 324.7,247.5 Z" /></clipPath>
                <clipPath id="clip-sec-4"><path d="M 315.3,383.4 A 175,175 0 0,1 127.3,332.6 L 197.4,285.4 A 75,75 0 0,0 278.0,307.2 Z" /></clipPath>
                <clipPath id="clip-sec-5"><path d="M 120.6,322.2 A 175,175 0 0,1 114.7,167.6 L 192.0,214.7 A 75,75 0 0,0 194.5,281.0 Z" /></clipPath>
              </defs>

              <g class="sector-group sec-quadrant" id="quadrant-1" data-step="1">
                <image href="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80" x="0" y="0" width="500" height="500" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-sec-1)" class="quadrant-img" />
              </g>
              <g class="sector-group sec-quadrant" id="quadrant-2" data-step="2">
                <image href="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80" x="0" y="0" width="500" height="500" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-sec-2)" class="quadrant-img" />
              </g>
              <g class="sector-group sec-quadrant" id="quadrant-3" data-step="3">
                <image href="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" x="0" y="0" width="500" height="500" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-sec-3)" class="quadrant-img" />
              </g>
              <g class="sector-group sec-quadrant" id="quadrant-4" data-step="4">
                <image href="https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=800&q=80" x="0" y="0" width="500" height="500" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-sec-4)" class="quadrant-img" />
              </g>
              <g class="sector-group sec-quadrant" id="quadrant-5" data-step="5">
                <image href="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" x="0" y="0" width="500" height="500" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-sec-5)" class="quadrant-img" />
              </g>

              <g class="wheel-center-hub" id="centerHub">
                <circle cx="250" cy="250" r="75" fill="#FFFFFF" filter="drop-shadow(0 6px 16px rgba(0,0,0,0.12))" />
                <circle cx="250" cy="250" r="75" fill="none" stroke="#5B9423" stroke-width="4" class="center-hub-ring" />
                <image href="assets/logo/emclogo.png" x="185" y="215" width="130" height="70" preserveAspectRatio="xMidYMid meet" />
              </g>
            </svg>
          </div>

          <div class="sector-controls-bar">
            <div class="sector-nav-pills">
              <button class="sector-pill-btn active" data-step="1">01</button>
              <button class="sector-pill-btn" data-step="2">02</button>
              <button class="sector-pill-btn" data-step="3">03</button>
              <button class="sector-pill-btn" data-step="4">04</button>
              <button class="sector-pill-btn" data-step="5">05</button>
            </div>
            <div class="sector-auto-timer">
              <div class="timer-progress-fill" id="timerProgress"></div>
            </div>
          </div>
        </div>

        <div class="emerging-cards-stage">

          <div class="sector-detail-card active" data-step="1" id="node-1">
            <div class="sector-card-header">
              <div class="sector-card-badge"><span class="badge-num">01</span> / 05 &bull; DOMAIN FOCUS</div>
              <div class="sector-card-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="28" height="28"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h2m0 0h2m-4-4h4m-4-4h4m-4-4h4m-8 8H7m0-4h2m-2-4h2"/></svg></div>
            </div>
            <h3 class="sector-card-title">Buildings & Institutional Infrastructure</h3>
            <p class="sector-card-desc">Smart green buildings, educational campuses, high-performance structural engineering & sustainable architecture engineered for resilience.</p>
            <div class="sector-card-highlights">
              <div class="highlight-item"><span class="highlight-bullet">✓</span><span>High-Performance Structural Engineering & Smart Design</span></div>
              <div class="highlight-item"><span class="highlight-bullet">✓</span><span>Green Campus Master Planning & Institutional Infrastructure</span></div>
              <div class="highlight-item"><span class="highlight-bullet">✓</span><span>Sustainable Architecture & Energy Efficient Building Systems</span></div>
            </div>
            <div class="sector-card-action"><a href="services.html" class="btn btn-primary">Explore Services & Portfolio →</a></div>
          </div>

          <div class="sector-detail-card" data-step="2" id="node-2">
            <div class="sector-card-header">
              <div class="sector-card-badge"><span class="badge-num">02</span> / 05 &bull; DOMAIN FOCUS</div>
              <div class="sector-card-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="28" height="28"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg></div>
            </div>
            <h3 class="sector-card-title">Renewable Energy & Green Transition</h3>
            <p class="sector-card-desc">Solar parks, wind energy integration, carbon footprint reduction & green transition roadmaps guiding corporate & public sustainability goals.</p>
            <div class="sector-card-highlights">
              <div class="highlight-item"><span class="highlight-bullet">✓</span><span>Solar Parks & Renewable Energy Grid Integration</span></div>
              <div class="highlight-item"><span class="highlight-bullet">✓</span><span>Net-Zero Carbon Footprint Reduction Strategies</span></div>
              <div class="highlight-item"><span class="highlight-bullet">✓</span><span>Green Energy Transition Advisory & Detailed Project Reports</span></div>
            </div>
            <div class="sector-card-action"><a href="services.html" class="btn btn-primary">Explore Services & Portfolio →</a></div>
          </div>

          <div class="sector-detail-card" data-step="3" id="node-3">
            <div class="sector-card-header">
              <div class="sector-card-badge"><span class="badge-num">03</span> / 05 &bull; DOMAIN FOCUS</div>
              <div class="sector-card-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="28" height="28"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3.332.83-4.5 2.09C10.832 3.83 9.26 3 7.5 3A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7z"/></svg></div>
            </div>
            <h3 class="sector-card-title">Healthcare & Public Infrastructure</h3>
            <p class="sector-card-desc">Modern hospital campuses, public health facilities & specialized medical equipment master planning for scalable community wellness.</p>
            <div class="sector-card-highlights">
              <div class="highlight-item"><span class="highlight-bullet">✓</span><span>Modern Hospital Campus Design & Utility Planning</span></div>
              <div class="highlight-item"><span class="highlight-bullet">✓</span><span>Public Health Facility Infrastructure & Medical Equipment Placement</span></div>
              <div class="highlight-item"><span class="highlight-bullet">✓</span><span>High-Reliability Emergency Infrastructure & Bio-safety Systems</span></div>
            </div>
            <div class="sector-card-action"><a href="services.html" class="btn btn-primary">Explore Services & Portfolio →</a></div>
          </div>

          <div class="sector-detail-card" data-step="4" id="node-4">
            <div class="sector-card-header">
              <div class="sector-card-badge"><span class="badge-num">04</span> / 05 &bull; DOMAIN FOCUS</div>
              <div class="sector-card-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="28" height="28"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg></div>
            </div>
            <h3 class="sector-card-title">Integrated Water Resource Management</h3>
            <p class="sector-card-desc">Used water recycling, 24x7 water supply grids, river basin rejuvenation & dam analytics driving water security nationwide.</p>
            <div class="sector-card-highlights">
              <div class="highlight-item"><span class="highlight-bullet">✓</span><span>24x7 Smart Urban Water Supply Grids & Smart Metering</span></div>
              <div class="highlight-item"><span class="highlight-bullet">✓</span><span>Used Water Recycling Plants & Sewage Treatment Infrastructure</span></div>
              <div class="highlight-item"><span class="highlight-bullet">✓</span><span>River Basin Rejuvenation, Canal Systems & Dam Safety Analytics</span></div>
            </div>
            <div class="sector-card-action"><a href="services.html" class="btn btn-primary">Explore Services & Portfolio →</a></div>
          </div>

          <div class="sector-detail-card" data-step="5" id="node-5">
            <div class="sector-card-header">
              <div class="sector-card-badge"><span class="badge-num">05</span> / 05 &bull; DOMAIN FOCUS</div>
              <div class="sector-card-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="28" height="28"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V7a2 2 0 00-2-2h-1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
            </div>
            <h3 class="sector-card-title">Climate Adaptation & Systems</h3>
            <p class="sector-card-desc">Disaster resilience modeling, environmental vulnerability impact studies & sustainable climate frameworks empowering smart governance.</p>
            <div class="sector-card-highlights">
              <div class="highlight-item"><span class="highlight-bullet">✓</span><span>Disaster Resilience & Climate Risk Assessment Modeling</span></div>
              <div class="highlight-item"><span class="highlight-bullet">✓</span><span>Environmental & Social Impact Studies (ESIA)</span></div>
              <div class="highlight-item"><span class="highlight-bullet">✓</span><span>Coastal Protection, Flood Resilience & Climate Frameworks</span></div>
            </div>
            <div class="sector-card-action"><a href="services.html" class="btn btn-primary">Explore Services & Portfolio →</a></div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-main">
        <div class="footer-brand footer-brand-card">
          <div class="footer-card-header">
            <img src="assets/logo/emclogo.png" alt="EMC Logo" class="footer-card-logo">
          </div>
          <div class="footer-card-body">
            <div class="footer-company-name">Ecometrix Consultants Pvt. Ltd.</div>
            <ul class="footer-contact-list">
              <li class="footer-contact-item">
                <svg class="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>DCB 119, 1st Floor, DLF Cybercity,Patia, Bhubaneswar – 751024, Odisha, India</span>
              </li>
              <li class="footer-contact-item">
                <svg class="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:+916742973849">+91 674 2973849</a>
              </li>
              <li class="footer-contact-item">
                <svg class="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:info@ecometrix.co.in">info@ecometrix.co.in</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-nav">
          <ul class="footer-links">
            <li><a href="index.html" class="footer-links">Home</a></li>
            <li><a href="about.html" class="footer-links active">About Us</a></li>
            <li><a href="our-services.html" class="footer-link">Our Services</a></li>
            <li><a href="services.html" class="footer-link">Delivery Experience</a></li>
            <!-- <li><a href="projects.html" class="footer-link">Projects</a></li>
            <li><a href="insights.html" class="footer-link">Insights</a></li> -->
            <li class="nav-item-has-dropdown">
              <a href="advisory-board.html" class="footer-link">Our Peoples ▾</a>
              <ul class="nav-dropdown">
                <li><a href="advisory-board.html" class="nav-dropdown-link">Advisory Board</a></li>
                <li><a href="team-emc.html" class="nav-dropdown-link">Team EMC</a></li>
              </ul>
            </li>
            <li><a href="careers.html" class="footer-link">Careers</a></li>
            <li><a href="contact.html" class="footer-link">Contact</a></li>
            <li><a href="#" class="footer-link emcone-nav-btn" onclick="openEmconeModal(event)">EMCOne</a></li>
          </ul>
        </div>
        <div class="footer-slogan">
          <!-- <div class="handwritten-quote-light">People Places Progress Together</div> -->
          <div class="footer-newsletter-box">
            <h5 class="newsletter-title">Subscribe to Insights</h5>
            <p class="newsletter-desc">Get our latest infrastructure & sustainability updates delivered directly to your inbox.</p>
            <form class="newsletter-form" onsubmit="event.preventDefault(); handleNewsletterSubmit(this);">
              <div class="newsletter-input-group">
                <input type="email" placeholder="Enter your email address..." required class="newsletter-input">
                <button type="submit" class="newsletter-btn" title="Subscribe">
                  <span>Subscribe</span>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
              <div class="newsletter-feedback" style="display:none;"></div>
            </form>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© 2024 Ecometrix Consultants Pvt. Ltd. All rights reserved.</div>
        <div class="footer-visitor-counter">
          <span class="visitor-pulse-dot"></span>
          <span class="visitor-counter-text">Live Visitors:</span>
          <span class="visitor-counter-number" id="visitorCounterDisplay">57,896</span>
        </div>
        <div class="footer-bottom-links">
          <a href="privacy.html">Privacy Policy</a>
          <span>|</span>
          <a href="terms.html">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="js/navigation.js"></script>
  <script src="js/modal.js"></script>
  <script src="js/search.js"></script>

  <!-- Emerging Directions: wheel + cards rotation -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const emergingSection = document.getElementById('emergingDirections');
      if (!emergingSection) return;

      const centerHub = document.getElementById('centerHub');
      const quadrants = document.querySelectorAll('.sec-quadrant');
      const cards = document.querySelectorAll('.sector-detail-card');
      const pillBtns = document.querySelectorAll('.sector-pill-btn');
      const timerProgress = document.getElementById('timerProgress');

      let currentStep = 1;
      let rotationInterval = null;
      let isHovered = false;
      const ROTATION_DELAY = 4000;

      if (centerHub) centerHub.classList.add('hub-active');

      function activateStep(step) {
        currentStep = step;
        quadrants.forEach(q => q.classList.toggle('active-focus', parseInt(q.getAttribute('data-step')) === step));
        cards.forEach(c => c.classList.toggle('active', parseInt(c.getAttribute('data-step')) === step));
        pillBtns.forEach(b => b.classList.toggle('active', parseInt(b.getAttribute('data-step')) === step));
        resetProgressBar();
      }

      function resetProgressBar() {
        if (!timerProgress) return;
        timerProgress.style.transition = 'none';
        timerProgress.style.width = '0%';
        void timerProgress.offsetWidth;
        if (!isHovered) {
          timerProgress.style.transition = `width ${ROTATION_DELAY}ms linear`;
          timerProgress.style.width = '100%';
        }
      }

      function startAutoRotation() {
        stopAutoRotation();
        activateStep(currentStep);
        rotationInterval = setInterval(() => {
          if (!isHovered) {
            currentStep = (currentStep % 5) + 1;
            activateStep(currentStep);
          }
        }, ROTATION_DELAY);
      }

      function stopAutoRotation() {
        if (rotationInterval) { clearInterval(rotationInterval); rotationInterval = null; }
        if (timerProgress) { timerProgress.style.transition = 'none'; timerProgress.style.width = '0%'; }
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => entry.isIntersecting ? startAutoRotation() : stopAutoRotation());
      }, { threshold: 0.2 });
      observer.observe(emergingSection);

      quadrants.forEach(quad => {
        quad.addEventListener('click', () => {
          activateStep(parseInt(quad.getAttribute('data-step')));
          startAutoRotation();
        });
        quad.addEventListener('mouseenter', () => {
          isHovered = true;
          activateStep(parseInt(quad.getAttribute('data-step')));
          if (timerProgress) timerProgress.style.width = '0%';
        });
        quad.addEventListener('mouseleave', () => { isHovered = false; resetProgressBar(); });
      });

      pillBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          activateStep(parseInt(btn.getAttribute('data-step')));
          startAutoRotation();
        });
      });

      const stage = document.querySelector('.emerging-diagram-stage');
      if (stage) {
        stage.addEventListener('mouseenter', () => { isHovered = true; if (timerProgress) timerProgress.style.width = '0%'; });
        stage.addEventListener('mouseleave', () => { isHovered = false; resetProgressBar(); });
      }
    });
  </script>

  <!-- About page: hero video fallback + scroll reveal -->
  <script>
    (function () {
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var video = document.getElementById('aboutEarthVideo');
      if (video) {
        if (reduce) { video.removeAttribute('autoplay'); video.pause(); }
        else { var pr = video.play(); if (pr && pr.catch) pr.catch(function () {}); }
      }
      var items = document.querySelectorAll('[data-reveal]');
      if (!('IntersectionObserver' in window) || reduce) return;
      items.forEach(function (el) { el.classList.add('reveal-init'); });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.15 });
      items.forEach(function (el) { io.observe(el); });
    })();
  </script>

  <!-- SITE PREFERENCES & ACCESSIBILITY INTERACTIVE CONTROL MODAL -->
  <div class="emc-pref-overlay" id="emcPrefOverlay">
    <div class="emc-pref-modal">
      <div class="emc-pref-header">
        <div class="emc-pref-title"><span>⚙️</span> <span>Site Preferences & Accessibility</span></div>
        <button type="button" class="emc-pref-close" id="closePrefBtn" title="Close Panel">&times;</button>
      </div>

      <div class="emc-pref-section">
        <div class="emc-pref-section-title">🌐 Language / भाषा / ଭାଷା</div>
        <div class="emc-pref-grid">
          <button type="button" class="lang-opt-btn active" data-lang="en"><span class="flag">🇬🇧</span><span>English</span></button>
          <button type="button" class="lang-opt-btn" data-lang="hi"><span class="flag">🇮🇳</span><span>हिन्दी</span></button>
          <button type="button" class="lang-opt-btn" data-lang="od"><span class="flag">🇮🇳</span><span>ଓଡ଼ିଆ</span></button>
        </div>
      </div>

      <div class="emc-pref-section">
        <div class="emc-pref-section-title">🌓 Theme Mode</div>
        <div class="theme-opt-grid">
          <button type="button" class="theme-opt-btn theme-toggle-btn" data-theme-val="light"><span>☀️</span> <span>Light Mode</span></button>
          <button type="button" class="theme-opt-btn theme-toggle-btn" data-theme-val="dark"><span>🌙</span> <span>Dark Mode</span></button>
        </div>
      </div>

      <div class="emc-pref-section">
        <div class="emc-pref-section-title">♿ Accessibility Controls</div>
        <div class="font-size-grid" style="margin-bottom:10px;">
          <button type="button" class="font-size-btn" data-a11y-action="small">A- (14px)</button>
          <button type="button" class="font-size-btn" data-a11y-action="medium">A (16px)</button>
          <button type="button" class="font-size-btn" data-a11y-action="large">A+ (18px)</button>
          <button type="button" class="font-size-btn" data-a11y-action="xlarge">A++ (20px)</button>
        </div>
        <button type="button" class="high-contrast-toggle-btn" data-a11y-action="contrast"><span>👁️</span> <span>Toggle High Contrast Mode (WCAG AAA)</span></button>
      </div>
    </div>
  </div>

  <script src="js/cookie-consent.js"></script>
  <script src="js/chatbot.js"></script>
  <script>
    /* Our Focus: expanding panels */
    (function () {
      var panels = document.querySelectorAll('.about-focus-panel');
      function activate(p) { panels.forEach(function (x) { x.classList.toggle('active', x === p); }); }
      panels.forEach(function (p) {
        p.addEventListener('mouseenter', function () { activate(p); });
        p.addEventListener('focus', function () { activate(p); });
        p.addEventListener('click', function () { activate(p); });
      });
    })();
  </script>
</body>
</html>