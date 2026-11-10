/* ==========================================================================
   GLOBAL CLIENT-SIDE & BACKEND SEARCH MODULE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.querySelector('.nav-search-btn');

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      openSearchModal();
    });
  }
});

function openSearchModal() {
  const searchHtml = `
    <div style="padding: 36px 40px;">
      <h3 style="margin-bottom: 8px;">Global Search</h3>
      <p style="color: var(--text-muted); font-size: 0.875rem; margin-bottom: 24px;">Search across EMC services, projects, insights, team members, and career opportunities.</p>
      
      <div class="search-box" style="width: 100%; margin-bottom: 24px;">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input type="text" id="globalSearchInput" placeholder="Type keywords e.g. Water Supply, GIS, Chinmay, Urban..." style="font-size: 1rem; padding: 16px 20px 16px 48px;" autofocus>
      </div>

      <div id="globalSearchResults" style="max-height: 400px; overflow-y: auto;">
        <p style="text-align: center; color: var(--text-muted); padding: 40px 0;">Start typing to search EMC portal...</p>
      </div>
    </div>
  `;

  window.emcModal.open(searchHtml);

  const input = document.getElementById('globalSearchInput');
  const resultsContainer = document.getElementById('globalSearchResults');

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length < 2) {
      resultsContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 40px 0;">Type at least 2 characters to search...</p>';
      return;
    }

    // Try fetching from backend API or search static registry
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then(res => res.json())
      .then(data => {
        renderSearchResults(data, resultsContainer);
      })
      .catch(() => {
        // Fallback local search mock
        renderLocalMockSearch(query, resultsContainer);
      });
  });
}

function renderSearchResults(data, container) {
  if (!data || data.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 40px 0;">No matching results found.</p>';
    return;
  }

  let html = '<div style="display: flex; flex-direction: column; gap: 12px;">';
  data.forEach(item => {
    html += `
      <div style="padding: 16px; border: 1px solid var(--border-color); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: space-between; gap: 16px;">
        <div>
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary-green); text-transform: uppercase;">${item.type}</span>
          <h4 style="font-size: 1rem; font-weight: 700; margin: 4px 0;">${item.title}</h4>
          <p style="font-size: 0.8125rem; color: var(--text-muted); margin: 0;">${item.description}</p>
        </div>
        <a href="${item.url}" class="btn btn-secondary btn-sm" onclick="window.emcModal.close()">View →</a>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

function renderLocalMockSearch(query, container) {
  const sampleItems = [
    { type: 'Page', title: 'Our Services', description: 'Plan & Assess, Survey & Investigate, Design & Engineer, Manage & Deliver, Digital & Spatial', url: 'our-services.html' },
    { type: 'Service', title: 'Water Supply Engineering', description: '24x7 water supply systems, hydraulic modelling & NRW management', url: 'services.html' },
    { type: 'Service', title: 'Used Water Management & STP', description: 'Sewerage, wastewater treatment and reuse solutions', url: 'services.html' },
    { type: 'Project', title: '24x7 Drink from Tap Water Systems', description: 'Landmark water supply infrastructure across Odisha cities', url: 'projects.html' },
    { type: 'Project', title: 'Spatial Data & GIS Intelligence Platform', description: 'GIS-based decision support systems for urban planning', url: 'projects.html' },
    { type: 'Team', title: 'Chinmay Tripathy', description: 'Chief Executive Officer - Environmental Engineer', url: 'team-emc.html' },
    { type: 'Team', title: 'Advisory Board', description: 'Distinguished advisors guiding EMC across water, sanitation, environment and infrastructure', url: 'advisory-board.html' },
    { type: 'Career', title: 'Project Engineer - Water Supply', description: 'Bhubaneswar, Odisha - Full-Time', url: 'careers.html' }
  ];

  const filtered = sampleItems.filter(item => 
    item.title.toLowerCase().includes(query) || 
    item.description.toLowerCase().includes(query) ||
    item.type.toLowerCase().includes(query)
  );

  renderSearchResults(filtered, container);
}