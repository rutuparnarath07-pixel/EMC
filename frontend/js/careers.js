/* ==========================================================================
   CAREERS MODULE & JOB APPLICATION MODAL HANDLER
   ========================================================================== */

const JOBS_DATA = [
  {
    id: 1,
    title: "Project Engineer - Water Supply",
    department: "Engineering",
    location: "Bhubaneswar, Odisha",
    type: "Full-time",
    postedDate: "12 Sep 2026",
    description: "Support design, hydraulic modeling and project supervision of 24x7 urban water supply projects across Odisha.",
    responsibilities: [
      "Prepare detailed project reports (DPRs) and hydraulic network models using EPANET/WaterGEMS.",
      "Conduct site inspections and supervise contractor execution quality for water treatment plants.",
      "Coordinate with municipal authorities and client engineering teams."
    ],
    requirements: [
      "B.Tech/M.Tech in Civil / Environmental Engineering.",
      "3-6 years experience in water supply network engineering.",
      "Proficiency in EPANET, AutoCAD, and MS Project."
    ]
  },
  {
    id: 2,
    title: "GIS Analyst",
    department: "GIS & IT",
    location: "Bhubaneswar, Odisha / Remote",
    type: "Full-time",
    postedDate: "08 Sep 2026",
    description: "Work on spatial data analysis, drone mapping integration, and WebGIS utility monitoring platforms.",
    responsibilities: [
      "Perform spatial overlays, geodatabase modeling, and drone orthomosaic image processing.",
      "Develop WebGIS map layers and dashboard widgets."
    ],
    requirements: [
      "Degree in Geoinformatics, Remote Sensing, or GIS.",
      "2+ years experience with ArcGIS Pro, QGIS, and GeoServer."
    ]
  },
  {
    id: 3,
    title: "Environmental Consultant",
    department: "Environmental",
    location: "Multiple Locations",
    type: "Full-time",
    postedDate: "05 Sep 2026",
    description: "Conduct environmental impact assessments (EIA), prepare EMPs and support climate adaptation projects.",
    responsibilities: [
      "Conduct environmental baseline surveys and public consultation meetings.",
      "Prepare EIA reports for statutory clearance."
    ],
    requirements: [
      "M.Sc / M.Tech in Environmental Science / Engineering.",
      "NABET accreditation is preferred."
    ]
  },
  {
    id: 4,
    title: "Urban Planner",
    department: "Urban Planning",
    location: "Bhubaneswar, Odisha",
    type: "Full-time",
    postedDate: "01 Sep 2026",
    description: "Prepare city development master plans, feasibility studies and urban revitalization strategies.",
    responsibilities: [
      "Draft land use zoning maps and municipal utility corridors.",
      "Synthesize demographic growth projections into infrastructure plans."
    ],
    requirements: [
      "Master of Urban Planning (MUP) / B.Arch.",
      "3+ years urban planning consultancy experience."
    ]
  },
  {
    id: 5,
    title: "Software Developer (Full Stack)",
    department: "GIS & IT",
    location: "Bhubaneswar, Odisha / Remote",
    type: "Full-time",
    postedDate: "28 Aug 2026",
    description: "Develop and maintain web-based solutions for infrastructure data portals and smart city dashboards.",
    responsibilities: [
      "Build REST APIs with Python/Node.js and modern frontend web components.",
      "Integrate PostgreSQL/PostGIS spatial databases."
    ],
    requirements: [
      "B.Tech in CS/IT or equivalent experience.",
      "Strong skills in JavaScript, Python/Flask, and SQL databases."
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('jobsListContainer');
  if (!container) return;

  renderJobsList(JOBS_DATA, container);
  setupJobFilters(container);
});

function renderJobsList(data, container) {
  if (data.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:var(--text-muted); padding:40px 0;">No open positions matching your filter.</p>';
    return;
  }

  container.innerHTML = data.map(job => `
    <div class="job-card" data-id="${job.id}">
      <div class="job-info">
        <div class="job-icon"><svg width="24" height="24" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div>
        <div>
          <h3 class="job-title">${job.title}</h3>
          <div class="job-location"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="vertical-align:middle; margin-right:4px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> ${job.location} • Posted ${job.postedDate}</div>
          <div class="job-tags">
            <span class="job-tag">${job.department}</span>
            <span class="job-tag">${job.type}</span>
          </div>
        </div>
      </div>
      <button class="btn btn-secondary btn-sm">View Details →</button>
    </div>
  `).join('');

  container.querySelectorAll('.job-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'));
      const job = JOBS_DATA.find(j => j.id === id);
      if (job) openJobModal(job);
    });
  });
}

function setupJobFilters(container) {
  const filterBtns = document.querySelectorAll('.jobs-filter-btn');
  const searchInput = document.getElementById('jobsSearchInput');

  let currentDept = 'All';
  let searchQuery = '';

  function filterJobs() {
    let res = JOBS_DATA;
    if (currentDept !== 'All') {
      res = res.filter(j => j.department.toLowerCase().includes(currentDept.toLowerCase()));
    }
    if (searchQuery) {
      res = res.filter(j => 
        j.title.toLowerCase().includes(searchQuery) ||
        j.location.toLowerCase().includes(searchQuery) ||
        j.description.toLowerCase().includes(searchQuery)
      );
    }
    renderJobsList(res, container);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDept = btn.getAttribute('data-category');
      filterJobs();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterJobs();
    });
  }
}

function openJobModal(job) {
  const respHtml = job.responsibilities.map(r => `<li>${r}</li>`).join('');
  const reqHtml = job.requirements.map(r => `<li>${r}</li>`).join('');

  const modalHtml = `
    <div style="padding: 40px;">
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:8px;">
        <span class="job-tag" style="background:var(--light-green-bg); color:var(--primary-green); font-weight:700;">${job.department}</span>
        <span class="job-tag">${job.type}</span>
      </div>
      
      <h2 style="font-size:2rem; font-weight:800; color:var(--navy-text); margin-bottom:6px;">${job.title}</h2>
      <div style="font-size:0.9375rem; color:var(--text-muted); margin-bottom:24px;"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="vertical-align:middle; margin-right:4px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> ${job.location} • Posted ${job.postedDate}</div>
      
      <p style="font-size:1rem; color:var(--text-body); line-height:1.6; margin-bottom:24px;">${job.description}</p>
      
      <h4 style="font-size:1.125rem; font-weight:700; margin-bottom:12px;">Key Responsibilities:</h4>
      <ul style="padding-left:20px; font-size:0.9375rem; color:var(--text-body); line-height:1.7; margin-bottom:24px;">${respHtml}</ul>
      
      <h4 style="font-size:1.125rem; font-weight:700; margin-bottom:12px;">Qualifications & Requirements:</h4>
      <ul style="padding-left:20px; font-size:0.9375rem; color:var(--text-body); line-height:1.7; margin-bottom:32px;">${reqHtml}</ul>

      <div style="background:var(--bg-light); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:28px;">
        <h3 style="font-size:1.25rem; font-weight:800; margin-bottom:16px;">Apply for this Position</h3>
        <form id="jobApplyForm" style="display:flex; flex-direction:column; gap:16px;">
          <input type="hidden" name="job_id" value="${job.id}">
          <input type="hidden" name="job_title" value="${job.title}">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <input type="text" name="full_name" placeholder="Full Name *" required class="form-control">
            <input type="email" name="email" placeholder="Email Address *" required class="form-control">
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <input type="tel" name="phone" placeholder="Phone Number *" required class="form-control">
            <input type="text" name="experience" placeholder="Years of Experience *" required class="form-control">
          </div>
          <textarea name="cover_letter" placeholder="Cover Letter / Brief Profile..." class="form-control" style="min-height:90px;"></textarea>
          <button type="submit" class="btn btn-primary" style="align-self:flex-start;">Submit Application →</button>
        </form>
      </div>
    </div>
  `;

  window.emcModal.open(modalHtml);

  const applyForm = document.getElementById('jobApplyForm');
  if (applyForm) {
    applyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(applyForm);
      const payload = Object.fromEntries(formData.entries());

      fetch('/api/jobs/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(res => res.json())
      .then(() => {
        alert('Your job application has been submitted successfully! EMC HR team will get in touch soon.');
        window.emcModal.close();
      })
      .catch(() => {
        alert('Your job application has been submitted successfully! EMC HR team will get in touch soon.');
        window.emcModal.close();
      });
    });
  }
}
