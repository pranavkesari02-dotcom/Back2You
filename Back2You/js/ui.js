/**
 * Back2You – UI Helpers
 * Toast messages, loading states, empty states, mobile menu
 */

const UI = {
  /**
   * Show a temporary toast notification
   * @param {string} message
   * @param {'success'|'error'|'warning'|'info'} type
   * @param {number} duration ms
   */
  showToast(message, type = "info", duration = 3500) {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <div style="flex:1">
        <strong style="display:block;margin-bottom:2px;text-transform:capitalize">${type}</strong>
        <span style="font-size:0.875rem;color:var(--navy-600)">${message}</span>
      </div>
      <button onclick="this.parentElement.remove()" style="background:none;border:none;cursor:pointer;font-size:1.1rem;color:var(--navy-400);line-height:1">&times;</button>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(40px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  /**
   * Show loading overlay inside a container
   */
  showLoading(container, message = "Loading...") {
    if (typeof container === "string") container = document.querySelector(container);
    if (!container) return;
    container.innerHTML = `
      <div class="loading-overlay">
        <div class="loading-spinner"></div>
        <p>${message}</p>
      </div>
    `;
  },

  /**
   * Render empty state
   */
  showEmptyState(container, title, message, actionHtml = "") {
    if (typeof container === "string") container = document.querySelector(container);
    if (!container) return;
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📭</div>
        <h3>${title}</h3>
        <p>${message}</p>
        ${actionHtml}
      </div>
    `;
  },

  /**
   * Format date for display (YYYY-MM-DD → readable)
   */
  formatDate(dateStr) {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  },

  /**
   * Get status badge HTML
   */
  statusBadge(status) {
    const s = (status || "lost").toLowerCase();
    return `<span class="status-badge status-${s}">${s}</span>`;
  },

  /**
   * Get category badge HTML
   */
  categoryBadge(category) {
    return `<span class="category-badge">${category || "Other"}</span>`;
  },

  /**
   * Create a single item card HTML
   */
  createItemCard(item) {
    const demoBadge = item.isDemo
      ? `<span class="demo-badge item-card-demo">Demo</span>`
      : "";
    const statusClass = `status-${(item.status || "lost").toLowerCase()}`;
    const typeLabel = item.type === "found" ? "Found" : "Lost";

    return `
      <article class="item-card" data-id="${item.id}">
        <div class="item-card-image">
          <img src="${item.image || "assets/images/placeholder-item.png"}" 
               alt="${item.title}" 
               loading="lazy"
               onerror="this.src='https://via.placeholder.com/400x300/e2e8f0/64748b?text=No+Image'">
          <span class="status-badge ${statusClass} item-card-badge">${item.status}</span>
          ${demoBadge}
        </div>
        <div class="item-card-body">
          <h3 class="item-card-title">${item.title}</h3>
          <div class="item-card-meta">
            <span>📍 ${item.location}</span>
            <span>📅 ${this.formatDate(item.date)}</span>
          </div>
          <div class="item-card-footer">
            ${this.categoryBadge(item.category)}
            <a href="item-details.html?id=${item.id}" class="btn btn-sm btn-outline">View Details</a>
          </div>
        </div>
      </article>
    `;
  },

  /**
   * Mobile navigation toggle
   */
  initMobileMenu() {
    const btn = document.querySelector(".mobile-menu-btn");
    const mobileNav = document.querySelector(".mobile-nav");
    if (!btn || !mobileNav) return;

    btn.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      const expanded = mobileNav.classList.contains("open");
      btn.setAttribute("aria-expanded", expanded);
    });

    // Close on link click
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => mobileNav.classList.remove("open"));
    });
  },

  /**
   * Highlight current page in navigation
   */
  setActiveNav() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a, .mobile-nav a, .admin-sidebar a").forEach(link => {
      const href = link.getAttribute("href");
      if (href === path || (path === "" && href === "index.html")) {
        link.classList.add("active");
      }
    });
  }
};

// Auto-init common UI on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  UI.initMobileMenu();
  UI.setActiveNav();
});

window.UI = UI;
