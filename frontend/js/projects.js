/* ==========================================================================
   PROJECTS PORTFOLIO MODULE & TABBED DETAIL MODAL HANDLER
   ========================================================================== */

const PROJECTS_DATA = [
  {
    id: 1,
    title: "24x7 Drink from Tap Water Supply System",
    category: "Water Supply",
    location: "Bhubaneswar & Cuttack, Odisha",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "End-to-end design, detailed engineering, and project management for 24x7 continuous high-pressure tap water supply system.",
    client: "Housing & Urban Development Dept, Govt. of Odisha",
    period: "2020 - 2024",
    value: "₹ 450 Crore (Approx.)",
    capacity: "250 MLD",
    beneficiaries: "1.2 Million Citizens",
    overview: "This landmark project involved complete hydraulic modelling, non-revenue water (NRW) reduction strategy, smart meter integration, and distribution pipeline modernization to provide 100% drink-from-tap compliance across major urban municipal bodies in Odisha.",
    scope: "Hydraulic network modelling, DMA creation, SCADA telemetry integration, water quality monitoring sensors, and PMC supervision.",
    highlights: [
      "First state in India to implement 100% 24x7 drink-from-tap water quality standard across major urban centers.",
      "DMA segmentation achieved NRW loss reduction from 42% down to 14%."
    ],
    impact: "Provides safe, reliable drinking water directly from taps 24x7, eliminating household water filtration costs and boosting public health.",
    quote: "Safe, 24x7 drinking water straight from the tap for every urban household."
  },
  {
    id: 2,
    title: "Sewage Treatment Plant with Reuse System",
    category: "Used Water Management",
    location: "Cuttack, Odisha",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Planning, design, procurement support and project management for a modern 100 MLD sewage treatment plant with treated water reuse.",
    client: "Cuttack Municipal Corporation (CMC)",
    period: "2021 - 2024",
    value: "₹ 320 Crore (Approx.)",
    capacity: "100 MLD",
    beneficiaries: "~3 Lakh Citizens",
    overview: "The project involved end-to-end design, detailed engineering, procurement support and project management for a 100 MLD sewage treatment plant with treated water reuse for non-potable applications. The project aims to improve environmental quality, restore water bodies and support sustainable urban growth in Cuttack.",
    scope: "Process engineering design, SBR technology evaluation, trunk sewer trunk network layout, environmental impact monitoring.",
    highlights: [
      "100 MLD STP commissioned with SBR advanced biological treatment process.",
      "Treated effluent reused for industrial cooling and municipal park landscaping."
    ],
    impact: "Significant reduction in organic pollution load to Mahanadi river system and enhanced urban liveability.",
    quote: "Cleaner water today, healthier communities tomorrow."
  },
  {
    id: 3,
    title: "Urban Stormwater & Drainage Master Plan",
    category: "Stormwater & Drainage",
    location: "Rourkela, Odisha",
    image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=800&q=80"],
    shortDesc: "Comprehensive drainage master plan and flood mitigation strategy for a climate-resilient smart city.",
    client: "Rourkela Smart City Limited",
    period: "2022 - 2024",
    value: "₹ 180 Crore",
    capacity: "Flood Basin",
    beneficiaries: "500,000 Citizens",
    overview: "Comprehensive hydrological modeling using SWMM software to redesign urban drainage channels, retention ponds, and natural outfalls.",
    scope: "1D/2D hydrodynamic modeling, GIS contour mapping, retention basin sizing, DPR preparation.",
    highlights: ["Eliminated 18 chronic waterlogging hotspots across Rourkela city."],
    impact: "Prevented urban monsoon flooding and protected commercial district assets.",
    quote: "Flood-ready urban drainage engineered for heavy monsoons."
  },
  {
    id: 4,
    title: "City Master Development Plan & Utility Corridors",
    category: "Urban Infrastructure",
    location: "Bhubaneswar, Odisha",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"],
    shortDesc: "Strategic planning, zoning framework and smart utility corridor advisory for sustainable urban expansion.",
    client: "Bhubaneswar Development Authority (BDA)",
    period: "2019 - 2023",
    value: "₹ 1,200 Crore Network",
    capacity: "Master Plan",
    beneficiaries: "1.5 Million Citizens",
    overview: "Integrated urban expansion master plan incorporating transit-oriented development (TOD), green belts, and underground utility ducting.",
    scope: "Land use mapping, population projection, infrastructure sizing, zoning regulation formulation.",
    highlights: ["Designed underground multi-utility ducts separating power, telecom, and water."],
    impact: "Guided structured, sustainable urban growth for Bhubaneswar vision 2030.",
    quote: "Building connected, resilient cities for tomorrow."
  },
  {
    id: 5,
    title: "Urban Mobility & Highway Corridor Improvement",
    category: "Transportation",
    location: "Multiple Locations, Odisha",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80"],
    shortDesc: "Planning and engineering support for safer, smarter and more efficient urban transport corridors.",
    client: "Works Department, Govt. of Odisha",
    period: "2020 - 2023",
    value: "₹ 550 Crore",
    capacity: "250 km Corridor",
    beneficiaries: "2 Million Commuters",
    overview: "Corridor widening, junction improvement, pedestrian safety signals, and non-motorized transport (NMT) cycle tracks.",
    scope: "Traffic survey, pavement design, road safety audit, DPR preparation.",
    highlights: ["Reduced corridor traffic congestion delay times by 35%."],
    impact: "Enhanced commuter safety and lowered vehicular emissions.",
    quote: "Safer, greener transit networks connecting citizens."
  },
  {
    id: 6,
    title: "Spatial Data & GIS Digital Platform",
    category: "GIS & IT",
    location: "Odisha (State-wide)",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"],
    shortDesc: "GIS-based decision support systems and digital platforms for evidence-based governance.",
    client: "State Urban Development Agency",
    period: "2021 - Present",
    value: "State Platform",
    capacity: "114 ULBs",
    beneficiaries: "State-wide Coverage",
    overview: "High-resolution UAV drone mapping and WebGIS portal enabling real-time property tax assessment and infrastructure monitoring.",
    scope: "Drone survey, AI feature extraction, WebGIS portal coding, database integration.",
    highlights: ["Digitized over 1.5 million urban property assets with spatial accuracy."],
    impact: "Increased municipal revenue collection efficiency by 40%.",
    quote: "Empowering governance with spatial intelligence."
  },
  {
    id: 7,
    title: "PMC for Urban Infrastructure Projects",
    category: "Project Management",
    location: "Odisha",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80"],
    shortDesc: "End-to-end project management consultancy for large-scale urban infrastructure packages.",
    client: "Urban Local Bodies",
    period: "2018 - Present",
    value: "₹ 2,000 Crore Portfolio",
    capacity: "PMC Supervision",
    beneficiaries: "Multiple Cities",
    overview: "Full lifecycle construction management, quality assurance audits, safety compliance, and bill certification.",
    scope: "Contract administration, site supervision, quality control, progress reporting.",
    highlights: ["Maintained zero-accident safety record across major construction sites."],
    impact: "Ensured high engineering quality and timely project completion.",
    quote: "Rigorous PMC supervision for quality engineering."
  },
  {
    id: 8,
    title: "Urban Water & Sanitation Project (JICA-assisted)",
    category: "International",
    location: "South Asia / International Partnership",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"],
    shortDesc: "Engineering advisory and implementation support for international multilateral-funded water supply infrastructure.",
    client: "International Development Agency / JICA",
    period: "2020 - 2024",
    value: "Multilateral Funded",
    capacity: "International",
    beneficiaries: "Cross-border Impact",
    overview: "Technical collaboration aligning local engineering practices with JICA international standards for urban sanitation.",
    scope: "Design review, environmental safeguard auditing, institutional capacity development.",
    highlights: ["Complied with strict international environmental & social guidelines."],
    impact: "Established benchmark international standard water infrastructure.",
    quote: "Bridging global technical standards with local execution."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('projectsGridContainer');
  if (!container) return;

  renderProjectsGrid(PROJECTS_DATA, container);
  setupProjectFilters(container);
});

function renderProjectsGrid(data, container) {
  if (data.length === 0) {
    container.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:var(--text-muted); padding:40px 0;">No projects found in this category.</p>';
    return;
  }

  container.innerHTML = data.map(project => `
    <div class="project-card" data-id="${project.id}">
      <div class="project-card-image">
        <img src="${project.image}" alt="${project.title}">
        <div class="project-category-badge">${project.category}</div>
      </div>
      <div class="project-card-content">
        <h3 class="project-card-title">${project.title}</h3>
        <div class="project-location">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
          ${project.location}
        </div>
        <p class="project-card-desc">${project.shortDesc}</p>
        <div class="project-view-btn">View Project →</div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'));
      const proj = PROJECTS_DATA.find(p => p.id === id);
      if (proj) openProjectModal(proj);
    });
  });
}

function setupProjectFilters(container) {
  const filterBtns = document.querySelectorAll('.projects-filter-btn');
  const searchInput = document.getElementById('projectsSearchInput');

  let currentCat = 'All';
  let searchQuery = '';

  function filterProjects() {
    let res = PROJECTS_DATA;
    if (currentCat !== 'All') {
      res = res.filter(p => p.category === currentCat);
    }
    if (searchQuery) {
      res = res.filter(p => 
        p.title.toLowerCase().includes(searchQuery) ||
        p.location.toLowerCase().includes(searchQuery) ||
        p.shortDesc.toLowerCase().includes(searchQuery)
      );
    }
    renderProjectsGrid(res, container);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.getAttribute('data-category');
      filterProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterProjects();
    });
  }
}

function openProjectModal(proj) {
  const galleryThumbnailsHtml = proj.gallery ? proj.gallery.map((imgUrl, i) => `
    <img src="${imgUrl}" alt="Thumbnail ${i+1}" onclick="document.getElementById('mainProjectModalImg').src='${imgUrl}'" style="width:72px; height:54px; object-fit:cover; border-radius:6px; cursor:pointer; border:2px solid ${i===0?'var(--primary-green)':'transparent'}; transition:var(--transition-fast);">
  `).join('') : '';

  const outcomesListHtml = (proj.highlights || [
    "100 MLD STP commissioned with advanced technology",
    "Treated water reused for industrial and horticulture purposes",
    "Significant reduction in pollution load to river systems",
    "Improved public health and urban liveability",
    "Model for sustainable urban wastewater management"
  ]).map(outcome => `
    <div style="display:flex; align-items:flex-start; gap:10px; margin-bottom:12px;">
      <div style="width:20px; height:20px; border-radius:50%; background:var(--primary-green); color:#fff; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:0.75rem; margin-top:2px;">✓</div>
      <div style="font-size:0.875rem; color:var(--text-body); font-weight:500;">${outcome}</div>
    </div>
  `).join('');

  const modalHtml = `
    <div class="modal-project-content" style="padding:32px 36px;">
      
      <!-- TOP GRID (IMAGE + DETAILS) -->
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:32px; margin-bottom:28px;">
        <div>
          <div style="position:relative; width:100%; height:290px; border-radius:var(--radius-md); overflow:hidden; margin-bottom:12px; box-shadow:var(--shadow-sm);">
            <img id="mainProjectModalImg" src="${proj.image}" alt="${proj.title}" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <div style="display:flex; gap:10px; overflow-x:auto; padding-bottom:4px;">
            ${galleryThumbnailsHtml}
          </div>
        </div>

        <div>
          <div style="font-size:0.75rem; font-weight:800; color:var(--primary-green); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:6px;">${proj.category}</div>
          <h2 style="font-size:1.65rem; font-weight:800; color:var(--navy-text); margin-bottom:8px; line-height:1.25;">${proj.title}</h2>
          <div style="font-size:0.875rem; color:var(--text-muted); display:flex; align-items:center; gap:6px; margin-bottom:16px;">
            <svg width="14" height="14" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${proj.location}
          </div>
          <p style="font-size:0.875rem; color:var(--text-body); line-height:1.6; margin-bottom:20px;">${proj.overview || proj.shortDesc}</p>

          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; padding:16px; background:var(--bg-light); border-radius:var(--radius-sm); border:1px solid var(--border-color); margin-bottom:20px; text-align:center;">
            <div>
              <div style="color:var(--primary-green); margin-bottom:4px;"><svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"></rect><path d="M9 22v-4h6v4"></path></svg></div>
              <div style="font-size:1.125rem; font-weight:800; color:var(--navy-text);">${proj.capacity}</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">Capacity</div>
            </div>
            <div>
              <div style="color:var(--primary-green); margin-bottom:4px;"><svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
              <div style="font-size:1.125rem; font-weight:800; color:var(--navy-text);">${proj.period}</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">Project Period</div>
            </div>
            <div>
              <div style="color:var(--primary-green); margin-bottom:4px;"><svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"></path></svg></div>
              <div style="font-size:1.125rem; font-weight:800; color:var(--navy-text);">${proj.beneficiaries}</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">People Benefited</div>
            </div>
          </div>

          <div style="display:flex; gap:12px;">
            <button class="btn btn-primary btn-sm" style="flex:1;" onclick="alert('Downloading brochure for ${proj.title}')">Download Project Brochure <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></button>
            <button class="btn btn-secondary btn-sm" onclick="navigator.clipboard.writeText(window.location.href); alert('Project link copied!')">Share Project <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></button>
          </div>
        </div>
      </div>

      <!-- MIDDLE TABS BAR -->
      <div class="project-tabs-bar" style="margin-bottom:24px;">
        <button class="project-tab-btn active" data-tab="overview"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="vertical-align:middle; margin-right:6px;"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"></path><path d="M14 2v6h6"></path></svg>Overview</button>
        <button class="project-tab-btn" data-tab="scope"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="vertical-align:middle; margin-right:6px;"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path></svg>Scope & Services</button>
        <button class="project-tab-btn" data-tab="highlights"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="vertical-align:middle; margin-right:6px;"><path d="M18 20V10M12 20V4M6 20v-6"></path></svg>Key Highlights</button>
        <button class="project-tab-btn" data-tab="impact"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="vertical-align:middle; margin-right:6px;"><path d="M12 2a10 10 0 0110 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0112 2z"></path></svg>Impact</button>
        <button class="project-tab-btn" data-tab="gallery"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="vertical-align:middle; margin-right:6px;"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>Gallery</button>
      </div>

      <!-- BOTTOM TAB PANES -->
      <div class="project-tab-pane active" id="tab-overview" style="display:grid; grid-template-columns:1.2fr 1fr; gap:28px;">
        <div>
          <h4 style="font-size:1.125rem; font-weight:800; color:var(--navy-text); margin-bottom:12px;">Project Overview</h4>
          <p style="font-size:0.875rem; color:var(--text-body); line-height:1.7; margin-bottom:24px;">${proj.overview}</p>

          <div style="display:flex; flex-direction:column; gap:16px;">
            <div style="display:flex; align-items:center; gap:12px;">
              <div style="width:36px; height:36px; border-radius:50%; background:var(--light-green-bg); color:var(--primary-green); display:flex; align-items:center; justify-content:center; flex-shrink:0;"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg></div>
              <div>
                <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">CLIENT</div>
                <div style="font-size:0.9375rem; font-weight:700; color:var(--navy-text);">${proj.client}</div>
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:12px;">
              <div style="width:36px; height:36px; border-radius:50%; background:var(--light-green-bg); color:var(--primary-green); display:flex; align-items:center; justify-content:center; flex-shrink:0;"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
              <div>
                <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">PROJECT LOCATION</div>
                <div style="font-size:0.9375rem; font-weight:700; color:var(--navy-text);">${proj.location}</div>
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:12px;">
              <div style="width:36px; height:36px; border-radius:50%; background:var(--light-green-bg); color:var(--primary-green); display:flex; align-items:center; justify-content:center; flex-shrink:0;"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div>
              <div>
                <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">PROJECT VALUE</div>
                <div style="font-size:0.9375rem; font-weight:700; color:var(--primary-green);">${proj.value}</div>
              </div>
            </div>
          </div>
        </div>

        <div style="background:var(--light-green-bg); padding:24px; border-radius:var(--radius-md); border:1px solid rgba(45, 106, 79, 0.15); display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <h4 style="font-size:1.0625rem; font-weight:800; color:var(--primary-green); margin-bottom:16px;">Key Outcomes</h4>
            ${outcomesListHtml}
          </div>
          <div style="margin-top:20px; padding-top:16px; border-top:1px solid rgba(45, 106, 79, 0.2);">
            <div style="font-size:2rem; color:var(--primary-green); line-height:1; font-weight:800;">“</div>
            <p style="font-style:italic; font-size:0.875rem; color:var(--navy-text); font-weight:600; margin:0;">"${proj.quote}"</p>
          </div>
        </div>
      </div>

      <div class="project-tab-pane" id="tab-scope" style="display:none;">
        <div style="grid-column: 1/-1;">
          <h4 style="font-size:1.125rem; font-weight:800; margin-bottom:12px;">Scope & Technical Consultancy Services</h4>
          <p style="font-size:0.9375rem; color:var(--text-body); line-height:1.7;">${proj.scope}</p>
        </div>
      </div>

      <div class="project-tab-pane" id="tab-highlights" style="display:none;">
        <div style="grid-column: 1/-1;">
          <h4 style="font-size:1.125rem; font-weight:800; margin-bottom:12px;">Key Project Highlights</h4>
          ${outcomesListHtml}
        </div>
      </div>

      <div class="project-tab-pane" id="tab-impact" style="display:none;">
        <div style="grid-column: 1/-1;">
          <h4 style="font-size:1.125rem; font-weight:800; margin-bottom:12px;">Social & Environmental Impact</h4>
          <p style="font-size:0.9375rem; color:var(--text-body); line-height:1.7;">${proj.impact}</p>
        </div>
      </div>

      <div class="project-tab-pane" id="tab-gallery" style="display:none;">
        <div style="grid-column: 1/-1; display:grid; grid-template-columns:repeat(3, 1fr); gap:16px;">
          ${(proj.gallery || [proj.image]).map(img => `<img src="${img}" style="width:100%; height:160px; object-fit:cover; border-radius:var(--radius-sm);">`).join('')}
        </div>
      </div>

    </div>
  `;

  window.emcModal.open(modalHtml);

  // Tab switching inside modal
  document.querySelectorAll('.modal-project-content .project-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-project-content .project-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.modal-project-content .project-tab-pane').forEach(p => p.style.display = 'none');
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      const pane = document.getElementById(`tab-${tabId}`);
      if (pane) pane.style.display = (tabId === 'overview') ? 'grid' : 'block';
    });
  });
}
