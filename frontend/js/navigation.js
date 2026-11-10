/* ==========================================================================
   NAVIGATION, HEADER, A11Y, THEME, LANGUAGE & EMCONE PORTAL MODULE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Sticky header shadow on scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile navigation drawer toggle
  initMobileNav();

  // Active navigation link highlighting
  initActiveNavLink();

  // Site Preference Control Modal System
  initPreferenceModal();

  // Global site enhancements & accessibility
  initThemeSystem();
  initA11ySystem();
  initLanguageSwitcher();
  initBackToTopButton();
  initKeyboardShortcuts();
});

/* Interactive Site Preferences & Accessibility Control Modal */
function getOrCreatePrefOverlay() {
  let prefOverlay = document.getElementById('emcPrefOverlay');
  if (!prefOverlay) {
    prefOverlay = document.createElement('div');
    prefOverlay.id = 'emcPrefOverlay';
    prefOverlay.className = 'emc-pref-overlay';
    prefOverlay.innerHTML = `
      <div class="emc-pref-modal">
        <div class="emc-pref-header">
          <div class="emc-pref-title">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg> <span>Site Preferences & Accessibility</span>
          </div>
          <button type="button" class="emc-pref-close" id="closePrefBtn" title="Close Panel">&times;</button>
        </div>

        <!-- Language Selector -->
        <div class="emc-pref-section">
          <div class="emc-pref-section-title"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg> Language / भाषा / ଭାଷା</div>
          <div class="emc-pref-grid">
            <button type="button" class="lang-opt-btn active" data-lang="en">
              <span class="lang-badge">EN</span>
              <span>English</span>
            </button>
            <button type="button" class="lang-opt-btn" data-lang="hi">
              <span class="lang-badge">HI</span>
              <span>हिन्दी</span>
            </button>
            <button type="button" class="lang-opt-btn" data-lang="od">
              <span class="lang-badge">OD</span>
              <span>ଓଡ଼ିଆ</span>
            </button>
          </div>
        </div>

        <!-- Theme Switcher -->
        <div class="emc-pref-section">
          <div class="emc-pref-section-title"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg> Theme Mode</div>
          <div class="theme-opt-grid">
            <button type="button" class="theme-opt-btn theme-toggle-btn" data-theme-val="light">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg> <span>Light Mode</span>
            </button>
            <button type="button" class="theme-opt-btn theme-toggle-btn" data-theme-val="dark">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg> <span>Dark Mode</span>
            </button>
          </div>
        </div>

        <!-- Font Sizing & High Contrast -->
        <div class="emc-pref-section">
          <div class="emc-pref-section-title"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg> Accessibility Controls</div>
          <div class="font-size-grid" style="margin-bottom:10px;">
            <button type="button" class="font-size-btn" data-a11y-action="small">A- (14px)</button>
            <button type="button" class="font-size-btn" data-a11y-action="medium">A (16px)</button>
            <button type="button" class="font-size-btn" data-a11y-action="large">A+ (18px)</button>
            <button type="button" class="font-size-btn" data-a11y-action="xlarge">A++ (20px)</button>
          </div>
          <button type="button" class="high-contrast-toggle-btn" data-a11y-action="contrast">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg> <span>Toggle High Contrast Mode (WCAG AAA)</span>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(prefOverlay);
    initThemeSystem();
    initA11ySystem();
    initLanguageSwitcher();
  }
  return prefOverlay;
}

function initPreferenceModal() {
  document.addEventListener('click', (e) => {
    const prefToggleBtn = e.target.closest('.header-pref-toggle, #prefModalBtn, #emcPrefToggleBtn');
    if (prefToggleBtn) {
      e.stopPropagation();
      const prefOverlay = getOrCreatePrefOverlay();
      prefOverlay.classList.add('open');
    }

    const closeBtn = e.target.closest('#closePrefBtn');
    if (closeBtn) {
      const prefOverlay = document.getElementById('emcPrefOverlay');
      if (prefOverlay) prefOverlay.classList.remove('open');
    }

    const prefOverlay = document.getElementById('emcPrefOverlay');
    if (prefOverlay && e.target === prefOverlay) {
      prefOverlay.classList.remove('open');
    }
  });
}


/* Mobile Menu Drawer Toggle */
function initMobileNav() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile drawer when clicking a link inside it
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/* Active Nav Link Highlighting */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .nav-dropdown-link');
  const peoplePages = ['advisory-board.html', 'team-emc.html'];

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href')?.split('/').pop();
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    } else if (
      (currentPath.includes('about') || currentPath.includes('vision') || currentPath.includes('mission')) &&
      linkPath === 'about.html'
    ) {
      link.classList.add('active');
    }
  });

  // Highlight the parent "Our Peoples" tab when on Advisory Board / Team EMC
  if (peoplePages.includes(currentPath)) {
    document.querySelectorAll('.nav-item-has-dropdown > .nav-link').forEach(l => l.classList.add('active'));
  }
}

/* Theme Switcher System (Light/Dark Mode) */
function initThemeSystem() {
  const savedTheme = localStorage.getItem('emc_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButtonIcons(savedTheme);

  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetVal = btn.getAttribute('data-theme-val');
      let nextTheme = targetVal;
      if (!nextTheme) {
        const current = document.documentElement.getAttribute('data-theme');
        nextTheme = current === 'dark' ? 'light' : 'dark';
      }
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('emc_theme', nextTheme);
      updateThemeButtonIcons(nextTheme);
    });
  });
}

function updateThemeButtonIcons(theme) {
  document.querySelectorAll('.theme-toggle-btn:not([data-theme-val])').forEach(btn => {
    btn.innerHTML = theme === 'dark'
      ? `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
      : `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
    btn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  });

  document.querySelectorAll('.theme-opt-btn').forEach(btn => {
    if (btn.getAttribute('data-theme-val') === theme) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/* Accessibility (A11y) System: Font Sizing & High Contrast */
function initA11ySystem() {
  const savedFontSize = localStorage.getItem('emc_font_size') || 'medium';
  document.documentElement.setAttribute('data-font-size', savedFontSize);

  const savedContrast = localStorage.getItem('emc_contrast');
  if (savedContrast === 'high') {
    document.documentElement.setAttribute('data-contrast', 'high');
  }

  // Event handlers for a11y action buttons
  document.querySelectorAll('[data-a11y-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const action = btn.getAttribute('data-a11y-action');
      if (action === 'contrast') {
        const isHigh = document.documentElement.getAttribute('data-contrast') === 'high';
        if (isHigh) {
          document.documentElement.removeAttribute('data-contrast');
          localStorage.removeItem('emc_contrast');
        } else {
          document.documentElement.setAttribute('data-contrast', 'high');
          localStorage.setItem('emc_contrast', 'high');
        }
      } else if (['small', 'medium', 'large', 'xlarge'].includes(action)) {
        document.documentElement.setAttribute('data-font-size', action);
        localStorage.setItem('emc_font_size', action);
      }
    });
  });
}

/* Multi-Language Support Switcher */
function initLanguageSwitcher() {
  const savedLang = localStorage.getItem('emc_language') || 'en';
  if (window.applyLanguageTranslation) {
    window.applyLanguageTranslation(savedLang);
  }

  document.querySelectorAll('.lang-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (!lang) return;
      if (window.applyLanguageTranslation) {
        window.applyLanguageTranslation(lang);
      }
    });
  });
}

/* Back to Top Floating Button */
function initBackToTopButton() {
  let btn = document.getElementById('backToTopBtn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'backToTopBtn';
    btn.className = 'back-to-top-btn';
    btn.setAttribute('title', 'Back to top');
    btn.setAttribute('aria-label', 'Scroll back to top');
    btn.innerHTML = `
      <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
      </svg>
    `;
    document.body.appendChild(btn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* Keyboard Search Shortcut (Ctrl + K or /) */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (
      (e.ctrlKey && e.key === 'k') ||
      (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA')
    ) {
      e.preventDefault();
      if (window.openSearchModal) {
        window.openSearchModal();
      }
    }
  });
}

/* ==========================================================================
   EMCONE INTERNAL APPLICATION POPUP DIALOG LOGIC
   ========================================================================== */

function openEmconeModal(event) {
  if (event) event.preventDefault();

  let modal = document.getElementById('emconeModalOverlay');

  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'emconeModalOverlay';
    modal.className = 'emcone-modal-overlay';
    modal.innerHTML = `
      <div class="emcone-modal-card" role="dialog" aria-modal="true" aria-labelledby="emconeTitle">
        <button type="button" class="emcone-modal-close" onclick="closeEmconeModal()" title="Close modal" aria-label="Close">✕</button>

        <div class="emcone-modal-header">
          <div class="emcone-icon-badge">
            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <div>
            <h3 id="emconeTitle" class="emcone-modal-title">EMCOne Portal</h3>
            <div class="emcone-modal-subtitle">Internal Employee Platform</div>
          </div>
        </div>

        <div class="emcone-disclaimer-box">
          <div class="emcone-disclaimer-icon"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg></div>
          <div class="emcone-disclaimer-content">
            <strong>Disclaimer:</strong> EMCOne is an internal application for its employees.
          </div>
        </div>

        <p class="emcone-modal-message">
          You are currently leaving the Official website. Are you sure you want to proceed to EMCOne?
        </p>

        <div class="emcone-modal-actions">
          <button type="button" class="emcone-btn emcone-btn-proceed" onclick="proceedToEmcone()">
            Yes, Proceed →
          </button>
          <button type="button" class="emcone-btn emcone-btn-stay" onclick="closeEmconeModal()">
            No, Stay here
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeEmconeModal();
    });
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeEmconeModal() {
  const modal = document.getElementById('emconeModalOverlay');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function proceedToEmcone() {
  closeEmconeModal();
  window.open('https://emcone.ecometrix.co.in', '_blank');
}

// Global Exports
window.openEmconeModal = openEmconeModal;
window.closeEmconeModal = closeEmconeModal;
window.proceedToEmcone = proceedToEmcone;