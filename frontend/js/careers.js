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

const HR_EMAIL = 'info@ecometrix.co.in';

/* ---------- Helpers ---------- */
function escapeHTML(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

const PIN_ICON = '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="vertical-align:middle; margin-right:4px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('jobsListContainer');
  if (!container) return;

  renderJobsList(JOBS_DATA, container);
  setupJobFilters(container);

  // Ek hi listener: View Details button ya card par click
  container.addEventListener('click', (e) => {
    const card = e.target.closest('.job-card');
    if (!card) return;
    const job = JOBS_DATA.find(j => j.id === parseInt(card.dataset.id, 10));
    if (!job) return;

    openJobModal(job);
  });
});

/* ---------- Job list ---------- */
function renderJobsList(data, container) {
  if (data.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:var(--text-muted); padding:40px 0;">No open positions matching your filter.</p>';
    return;
  }

  container.innerHTML = data.map(job => `
    <div class="job-card" data-id="${job.id}">
      <div class="job-info">
        <div class="job-icon"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div>
        <div>
          <h3 class="job-title">${escapeHTML(job.title)}</h3>
          <div class="job-location">${PIN_ICON}${escapeHTML(job.location)} • Posted ${escapeHTML(job.postedDate)}</div>
          <div class="job-tags">
            <span class="job-tag">${escapeHTML(job.department)}</span>
            <span class="job-tag">${escapeHTML(job.type)}</span>
          </div>
        </div>
      </div>
      <div class="job-actions">
        <button type="button" class="job-btn job-btn-apply" data-action="view">View Details →</button>
      </div>
    </div>
  `).join('');
}

/* ---------- Filters + search ---------- */
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
        j.department.toLowerCase().includes(searchQuery) ||
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
      currentDept = btn.getAttribute('data-category') || 'All';
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

/* ---------- Modal: details + apply form ---------- */
function openJobModal(job) {
  const respHtml = job.responsibilities.map(r => `<li>${escapeHTML(r)}</li>`).join('');
  const reqHtml = job.requirements.map(r => `<li>${escapeHTML(r)}</li>`).join('');

  const modalHtml = `
    <div class="job-modal-inner">
      <div class="jd-tags">
        <span class="job-tag jd-tag-dept">${escapeHTML(job.department)}</span>
        <span class="job-tag">${escapeHTML(job.type)}</span>
      </div>
      <h2 class="jd-title">${escapeHTML(job.title)}</h2>
      <div class="jd-meta">${PIN_ICON}${escapeHTML(job.location)} • Posted ${escapeHTML(job.postedDate)}</div>
      <p class="jd-desc">${escapeHTML(job.description)}</p>

      <div class="jd-cols">
        <div class="jd-block">
          <h4>Key Responsibilities</h4>
          <ul>${respHtml}</ul>
        </div>
        <div class="jd-block">
          <h4>Qualifications &amp; Requirements</h4>
          <ul>${reqHtml}</ul>
        </div>
      </div>

      <section class="apply-card" id="jobApplySection">
        <div class="apply-head">
          <div class="apply-head-icon">
            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
          </div>
          <div>
            <h3>Apply for this Position</h3>
            <p>${escapeHTML(job.title)} &middot; takes about 2 minutes</p>
          </div>
        </div>

        <form id="jobApplyForm" class="apply-form" novalidate>
          <input type="hidden" name="job_id" value="${job.id}">
          <input type="hidden" name="job_title" value="${escapeHTML(job.title)}">

          <div class="apply-row">
            <label class="apply-field">
              <span>Full Name <b>*</b></span>
              <input type="text" name="full_name" placeholder="e.g. Priya Sahu" required autocomplete="name">
            </label>
            <label class="apply-field">
              <span>Email Address <b>*</b></span>
              <input type="email" name="email" placeholder="you@example.com" required autocomplete="email">
            </label>
          </div>

          <div class="apply-row">
            <label class="apply-field">
              <span>Phone Number <b>*</b></span>
              <input type="tel" name="phone" placeholder="+91 98765 43210" required autocomplete="tel">
            </label>
            <label class="apply-field">
              <span>Years of Experience <b>*</b></span>
              <input type="text" name="experience" placeholder="e.g. 3 years" required>
            </label>
          </div>

          <label class="apply-field">
            <span>Cover Letter / Brief Profile</span>
            <textarea name="cover_letter" rows="4" placeholder="Tell us briefly about your experience and why you'd like to join Ecometrix."></textarea>
          </label>

          <div id="jobFormMsg" class="apply-msg" role="alert" style="display:none;"></div>

          <div class="apply-actions">
            <button type="submit" class="apply-submit" id="jobSubmitBtn">Submit Application →</button>
            <span class="apply-note">Your details are only used for hiring at Ecometrix.</span>
          </div>
        </form>
      </section>
    </div>
  `;

  window.emcModal.open(modalHtml);

  const applyForm = document.getElementById('jobApplyForm');
  if (applyForm) applyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitApplication(applyForm, job);
  });
}

function showFormMsg(el, text, ok) {
  el.textContent = text;
  el.style.display = 'block';
  el.className = 'apply-msg ' + (ok ? 'ok' : 'err');
}

function submitApplication(form, job) {
  const msg = document.getElementById('jobFormMsg');
  const btn = document.getElementById('jobSubmitBtn');
  const payload = Object.fromEntries(new FormData(form).entries());

  // Validation
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email || '');
  if (!payload.full_name.trim() || !emailOk || !payload.phone.trim() || !payload.experience.trim()) {
    showFormMsg(msg, 'Please fill all required fields with a valid email address.', false);
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Submitting...';
  msg.style.display = 'none';

  fetch('/api/jobs/apply', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(res => {
      if (!res.ok) throw new Error('Server error ' + res.status);
      return res.json().catch(() => ({}));
    })
    .then(() => {
      form.reset();
      btn.textContent = 'Submitted ✓';
      showFormMsg(msg, 'Application submitted successfully! EMC HR team will get in touch soon.', true);
      setTimeout(() => window.emcModal.close(), 2500);
    })
    .catch(() => {
      // Backend na chale to jhoota "success" nahi dikhate; email ka option dete hain
      btn.disabled = false;
      btn.textContent = 'Submit Application →';
      const subject = encodeURIComponent('Application: ' + job.title);
      const body = encodeURIComponent(
        'Position: ' + job.title + '\nName: ' + payload.full_name +
        '\nEmail: ' + payload.email + '\nPhone: ' + payload.phone +
        '\nExperience: ' + payload.experience + '\n\n' + (payload.cover_letter || '')
      );
      msg.style.display = 'block';
      msg.className = 'apply-msg err';
      msg.innerHTML = 'Application online submit nahi ho paayi. Please try again, ya ' +
        '<a href="mailto:' + HR_EMAIL + '?subject=' + subject + '&body=' + body + '" style="color:inherit; text-decoration:underline;">email se bhej do</a> (CV attach karke).';
    });
}
