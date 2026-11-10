/* ==========================================================================
   INSIGHTS & PUBLICATIONS MODULE & NEWSLETTER HANDLER
   ========================================================================== */

const INSIGHTS_DATA = [
  {
    id: 1,
    title: "The Role of GIS in Smarter Urban Planning",
    type: "Article",
    category: "GIS & IT",
    date: "05 SEP 2026",
    author: "Priyanka Sahu",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    summary: "How spatial data is transforming infrastructure planning, asset management, and evidence-based municipal decision-making.",
    content: "Spatial analytics enable city authorities to visualize infrastructure networks layer-by-layer..."
  },
  {
    id: 2,
    title: "24x7 Water Supply System in Bhubaneswar",
    type: "Case Study",
    category: "Water Infrastructure",
    date: "28 AUG 2026",
    author: "Chinmay Tripathy",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=600&q=80",
    summary: "A deep dive look at the planning, hydraulic design, DMA structuring, and implementation of a 24x7 drink-from-tap water system.",
    content: "Transitioning a city from intermittent supply to continuous 24x7 pressure requires strict DMA isolation..."
  },
  {
    id: 3,
    title: "Nature-Based Solutions for Urban Flood Resilience",
    type: "Research Paper",
    category: "Climate Resilience",
    date: "18 AUG 2026",
    author: "Swati Mishra",
    image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=600&q=80",
    summary: "A review of global best practices in sponge cities and blue-green infrastructure and their relevance for Indian flood management.",
    content: "Incorporating wetlands, retention basins, and permeable pavements reduces peak storm runoff..."
  },
  {
    id: 4,
    title: "Ecometrix Supports Smart Infrastructure Initiative",
    type: "News",
    category: "Corporate News",
    date: "10 AUG 2026",
    author: "EMC Media Team",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    summary: "Partnering with city authorities to deploy digital solutions and GIS platforms for better urban governance.",
    content: "EMC announces its strategic technology partnership with municipal corporations..."
  },
  {
    id: 5,
    title: "Webinar: Digital Tools for Sustainable Cities",
    type: "Events",
    category: "Webinar",
    date: "02 AUG 2026",
    author: "EMC Events",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    summary: "Join our upcoming panel webinar on how digital technologies can accelerate sustainable urban development.",
    content: "Register today for our interactive session with multidisciplinary experts..."
  },
  {
    id: 6,
    title: "Wastewater Reuse: From Challenge to Opportunity",
    type: "Article",
    category: "Used Water",
    date: "25 JUL 2026",
    author: "Debashis Rout",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    summary: "How treated wastewater can create circular economic value for industries and urban ecosystems.",
    content: "Recycling 100 MLD of treated effluent conserves freshwater reserves..."
  },
  {
    id: 7,
    title: "Urban Mobility Solutions for Growing Cities",
    type: "Case Study",
    category: "Transportation",
    date: "15 JUL 2026",
    author: "Amit Kumar",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=600&q=80",
    summary: "Integrated transport planning for safer, greener, and more inclusive urban mobility corridors.",
    content: "Combining dedicated bus lanes, bike paths, and smart traffic control..."
  },
  {
    id: 8,
    title: "Data-Driven Infrastructure Asset Management",
    type: "Research Paper",
    category: "Digital Solutions",
    date: "05 JUL 2026",
    author: "Satyabrata Behera",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    summary: "Leveraging IoT sensor data and analytics for longer asset life and optimized operations.",
    content: "Predictive maintenance algorithms reduce utility downtime by 40%..."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('insightsGridContainer');
  if (container) {
    renderInsightsGrid(INSIGHTS_DATA, container);
    setupInsightFilters(container);
  }

  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      
      fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      .then(res => res.json())
      .then(() => {
        alert('Thank you for subscribing to EMC Insights!');
        newsletterForm.reset();
      })
      .catch(() => {
        alert('Thank you for subscribing to EMC Insights!');
        newsletterForm.reset();
      });
    });
  }
});

function renderInsightsGrid(data, container) {
  if (data.length === 0) {
    container.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:var(--text-muted); padding:40px 0;">No articles found.</p>';
    return;
  }

  container.innerHTML = data.map(item => `
    <div class="insight-card" data-id="${item.id}">
      <div class="insight-card-img">
        <img src="${item.image}" alt="${item.title}">
        <div class="insight-type-badge">${item.type}</div>
      </div>
      <div class="insight-card-body">
        <div class="insight-meta">
          <span class="insight-category-tag">${item.category}</span>
          <span>•</span>
          <span>${item.date}</span>
        </div>
        <h3 class="insight-card-title">${item.title}</h3>
        <p class="insight-card-desc">${item.summary}</p>
        <div style="font-size:0.875rem; font-weight:700; color:var(--primary-green); margin-top:auto; cursor:pointer;">Read Article →</div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.insight-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'));
      const insight = INSIGHTS_DATA.find(i => i.id === id);
      if (insight) openInsightModal(insight);
    });
  });
}

function setupInsightFilters(container) {
  const filterBtns = document.querySelectorAll('.insights-filter-btn');
  const searchInput = document.getElementById('insightsSearchInput');

  let currentCategory = 'All';
  let searchQuery = '';

  function filterInsights() {
    let res = INSIGHTS_DATA;
    if (currentCategory !== 'All') {
      res = res.filter(i => i.type.toLowerCase().includes(currentCategory.toLowerCase()) || i.category.toLowerCase().includes(currentCategory.toLowerCase()));
    }
    if (searchQuery) {
      res = res.filter(i => 
        i.title.toLowerCase().includes(searchQuery) ||
        i.summary.toLowerCase().includes(searchQuery)
      );
    }
    renderInsightsGrid(res, container);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      filterInsights();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterInsights();
    });
  }
}

function openInsightModal(insight) {
  const modalHtml = `
    <div style="padding: 40px;">
      <div class="insight-meta" style="font-size:0.875rem; margin-bottom:12px;">
        <span class="insight-category-tag" style="font-size:0.875rem;">${insight.category}</span>
        <span>•</span>
        <span>${insight.date}</span>
        <span>•</span>
        <span>By ${insight.author}</span>
      </div>
      
      <h1 style="font-size:2.25rem; font-weight:800; color:var(--navy-text); margin-bottom:20px; line-height:1.2;">${insight.title}</h1>
      
      <img src="${insight.image}" alt="${insight.title}" style="width:100%; height:320px; object-fit:cover; border-radius:var(--radius-md); margin-bottom:28px;">
      
      <p style="font-size:1.125rem; font-weight:600; color:var(--navy-text); line-height:1.6; margin-bottom:20px;">${insight.summary}</p>
      
      <div style="font-size:1rem; color:var(--text-body); line-height:1.8;">
        <p>${insight.content}</p>
        <p>Ecometrix Consultants Pvt. Ltd. continues to drive technical thought leadership and sustainable infrastructure frameworks across India. For inquiries or collaboration on this topic, reach out to our specialist team.</p>
      </div>
      
      <div style="margin-top:32px; padding-top:20px; border-top:1px solid var(--border-color); display:flex; align-items:center; justify-content:space-between;">
        <a href="contact.html" class="btn btn-primary" onclick="window.emcModal.close()">Contact Author Team →</a>
        <button class="btn btn-secondary btn-sm" onclick="navigator.clipboard.writeText(window.location.href); alert('Link copied!')">Share Article <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="vertical-align:middle; margin-left:4px;"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></button>
      </div>
    </div>
  `;

  window.emcModal.open(modalHtml);
}
