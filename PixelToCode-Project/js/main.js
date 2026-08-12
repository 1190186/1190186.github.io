/* ==========================================================================
   PixelToCode - Main Navigation & UI Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle logic
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const desktopSidebar = document.querySelector('.desktop-sidebar');

  if (mobileToggle && desktopSidebar) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = desktopSidebar.style.display === 'flex';
      if (isVisible) {
        desktopSidebar.style.display = '';
      } else {
        desktopSidebar.style.display = 'flex';
        desktopSidebar.style.position = 'fixed';
        desktopSidebar.style.top = '64px';
        desktopSidebar.style.height = 'calc(100vh - 64px)';
        desktopSidebar.style.zIndex = '60';
        desktopSidebar.style.width = '100%';
        desktopSidebar.style.borderRadius = '0';
      }
    });
  }
});

/**
 * Displays a temporary toast notification in the UI.
 * @param {string} message - Message to display inside the toast.
 */
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="material-symbols-outlined" style="color: var(--secondary-fixed-dim);">check_circle</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 200ms ease-out';
    setTimeout(() => toast.remove(), 200);
  }, 2500);
}
