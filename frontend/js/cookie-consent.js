/* ==========================================================================
   COOKIE CONSENT & PRIVACY BANNER MODULE (THOUGHTWORKS-STYLE)
   ========================================================================== */

(function () {
  'use strict';

  const COOKIE_STORAGE_KEY = 'emc_cookie_consent_choice';

  function initCookieConsent() {
    // Check if user has already responded
    const savedConsent = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (savedConsent) {
      return; // Already handled
    }

    // Render Banner HTML
    renderBanner();

    // Adjust chatbot mascot position if mascot exists
    adjustMascotPosition(true);
  }

  function renderBanner() {
    // Create Banner Element
    const bannerDiv = document.createElement('div');
    bannerDiv.id = 'emcCookieConsentBanner';
    bannerDiv.className = 'emc-cookie-banner';
    bannerDiv.innerHTML = `
      <div class="emc-cookie-container">
        <button type="button" class="emc-cookie-close-btn" id="emcCookieCloseBtn" title="Close privacy banner" aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="emc-cookie-text">
          👋 Welcome to Ecometrix Consultant's Official website. Ecometrix respects your privacy and only uses cookies that are essential for this site to function. If you enjoy our content and would like a personalized experience please “accept optional cookies”. See our <a href="privacy.html" class="emc-cookie-privacy-link">Privacy policy</a> for more.
        </div>

        <div class="emc-cookie-actions">
          <button type="button" class="emc-cookie-btn emc-cookie-btn-accept" id="emcCookieAcceptBtn">
            Accept optional cookies
          </button>
          <button type="button" class="emc-cookie-btn emc-cookie-btn-decline" id="emcCookieDeclineBtn">
            Decline cookies
          </button>
          <button type="button" class="emc-cookie-btn emc-cookie-btn-manage" id="emcCookieManageBtn">
            Manage preferences
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(bannerDiv);

    // Event Listeners
    document.getElementById('emcCookieAcceptBtn').addEventListener('click', () => {
      saveConsent('accepted_all');
      dismissBanner();
    });

    document.getElementById('emcCookieDeclineBtn').addEventListener('click', () => {
      saveConsent('declined_optional');
      dismissBanner();
    });

    document.getElementById('emcCookieCloseBtn').addEventListener('click', () => {
      saveConsent('closed');
      dismissBanner();
    });

    document.getElementById('emcCookieManageBtn').addEventListener('click', () => {
      openPreferencesModal();
    });
  }

  function dismissBanner() {
    const banner = document.getElementById('emcCookieConsentBanner');
    if (banner) {
      banner.classList.add('emc-cookie-banner-hiding');
      setTimeout(() => {
        banner.remove();
        adjustMascotPosition(false);
      }, 400);
    }
  }

  function saveConsent(status) {
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify({
      status: status,
      timestamp: new Date().toISOString()
    }));
  }

  function adjustMascotPosition(bannerVisible) {
    const mascotContainer = document.querySelector('.emc-mascot-container');
    if (!mascotContainer) return;

    if (bannerVisible) {
      mascotContainer.style.bottom = '175px';
      mascotContainer.style.transition = 'bottom 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    } else {
      mascotContainer.style.bottom = '24px';
    }
  }

  // Preferences Modal Manager
  function openPreferencesModal() {
    // Check if modal already exists
    if (document.getElementById('emcCookiePrefModal')) return;

    const modalDiv = document.createElement('div');
    modalDiv.id = 'emcCookiePrefModal';
    modalDiv.className = 'emc-cookie-modal-overlay';
    modalDiv.innerHTML = `
      <div class="emc-cookie-modal-card">
        <div class="emc-cookie-modal-header">
          <div>
            <h3 class="emc-cookie-modal-title">Cookie Preferences</h3>
            <p class="emc-cookie-modal-sub">Customize your privacy and cookie settings for Ecometrix Consultants.</p>
          </div>
          <button type="button" class="emc-cookie-modal-close" id="emcClosePrefModal">✕</button>
        </div>

        <div class="emc-cookie-modal-body">
          <div class="emc-pref-group">
            <div class="emc-pref-header">
              <div class="emc-pref-info">
                <h4>Essential Website Cookies</h4>
                <span class="emc-pref-badge required">Always Active</span>
              </div>
            </div>
            <p class="emc-pref-desc">Necessary for core website security, session navigation, visitor counters, and form submission APIs. These cannot be disabled.</p>
          </div>

          <div class="emc-pref-group">
            <div class="emc-pref-header">
              <div class="emc-pref-info">
                <h4>Analytics & Performance Cookies</h4>
                <span class="emc-pref-badge optional">Optional</span>
              </div>
              <label class="emc-toggle-switch">
                <input type="checkbox" id="prefAnalytics" checked>
                <span class="emc-toggle-slider"></span>
              </label>
            </div>
            <p class="emc-pref-desc">Helps us measure site traffic, page load performance, and optimize technical infrastructure content across India.</p>
          </div>

          <div class="emc-pref-group">
            <div class="emc-pref-header">
              <div class="emc-pref-info">
                <h4>AI Mascot Chatbot & Personalization</h4>
                <span class="emc-pref-badge optional">Optional</span>
              </div>
              <label class="emc-toggle-switch">
                <input type="checkbox" id="prefChatbot" checked>
                <span class="emc-toggle-slider"></span>
              </label>
            </div>
            <p class="emc-pref-desc">Saves your greeting time preferences, mascot animation states, and pre-fills job seeker or visitor meeting forms.</p>
          </div>
        </div>

        <div class="emc-cookie-modal-footer">
          <button type="button" class="emc-cookie-btn emc-cookie-btn-decline" id="emcSavePrefBtn">Save Preferences</button>
          <button type="button" class="emc-cookie-btn emc-cookie-btn-accept" id="emcAcceptAllPrefBtn">Accept All</button>
        </div>
      </div>
    `;

    document.body.appendChild(modalDiv);

    // Event listeners
    document.getElementById('emcClosePrefModal').onclick = () => modalDiv.remove();

    document.getElementById('emcSavePrefBtn').onclick = () => {
      const analytics = document.getElementById('prefAnalytics').checked;
      const chatbot = document.getElementById('prefChatbot').checked;
      localStorage.setItem('emc_cookie_preferences', JSON.stringify({ analytics, chatbot }));
      saveConsent('custom_preferences');
      modalDiv.remove();
      dismissBanner();
    };

    document.getElementById('emcAcceptAllPrefBtn').onclick = () => {
      saveConsent('accepted_all');
      modalDiv.remove();
      dismissBanner();
    };
  }

  // Initialize on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieConsent);
  } else {
    initCookieConsent();
  }

})();
