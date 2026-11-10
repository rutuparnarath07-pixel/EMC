/* ==========================================================================
   UNIFIED DYNAMIC MODAL ENGINE
   ========================================================================== */

class ModalEngine {
  constructor() {
    this.init();
  }

  init() {
    if (!document.querySelector('.modal-backdrop')) {
      const backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop';
      backdrop.id = 'globalModalBackdrop';
      backdrop.innerHTML = `
        <div class="modal-card" id="globalModalCard">
          <button class="modal-close-btn" id="globalModalClose" aria-label="Close modal">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div id="globalModalContent"></div>
        </div>
      `;
      document.body.appendChild(backdrop);
    }

    this.backdrop = document.getElementById('globalModalBackdrop');
    this.closeBtn = document.getElementById('globalModalClose');
    this.contentContainer = document.getElementById('globalModalContent');

    // Event Listeners
    this.closeBtn.addEventListener('click', () => this.close());
    this.backdrop.addEventListener('click', (e) => {
      if (e.target === this.backdrop) {
        this.close();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.backdrop.classList.contains('active')) {
        this.close();
      }
    });
  }

  open(htmlContent, customClass = '') {
    this.contentContainer.innerHTML = htmlContent;
    this.contentContainer.className = customClass;
    this.backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Bind tab switching inside modal if present
    const tabBtns = this.contentContainer.querySelectorAll('.project-tab-btn');
    const tabPanes = this.contentContainer.querySelectorAll('.project-tab-pane');

    if (tabBtns.length > 0) {
      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetTab = btn.getAttribute('data-tab');
          tabBtns.forEach(b => b.classList.remove('active'));
          tabPanes.forEach(p => p.classList.remove('active'));

          btn.classList.add('active');
          const targetPane = this.contentContainer.querySelector(`#tab-${targetTab}`);
          if (targetPane) targetPane.classList.add('active');
        });
      });
    }
  }

  close() {
    this.backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

window.emcModal = new ModalEngine();
