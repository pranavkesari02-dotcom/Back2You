/**
 * Back2You – API Layer (Phase 2 – Demo Data Only)
 * All data comes from sample-data.js.
 * Real Supabase calls will replace these functions in later phases.
 */

const API = {
  /**
   * Get all demo items
   */
  getItems() {
    return Promise.resolve([...(window.DEMO_ITEMS || [])]);
  },

  /**
   * Get single item by id
   */
  getItemById(id) {
    const items = window.DEMO_ITEMS || [];
    const item = items.find(i => i.id === id);
    return Promise.resolve(item || null);
  },

  /**
   * Filter items
   * @param {Object} filters { keyword, category, location, status, type }
   */
  searchItems(filters = {}) {
    let results = [...(window.DEMO_ITEMS || [])];

    if (filters.keyword) {
      const q = filters.keyword.toLowerCase();
      results = results.filter(i =>
        i.title.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        i.location.toLowerCase().includes(q)
      );
    }

    if (filters.category && filters.category !== "all") {
      results = results.filter(i => i.category === filters.category);
    }

    if (filters.location && filters.location !== "all") {
      results = results.filter(i =>
        i.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.status && filters.status !== "all") {
      results = results.filter(i => i.status === filters.status);
    }

    if (filters.type && filters.type !== "all") {
      results = results.filter(i => i.type === filters.type);
    }

    // Newest first
    results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return Promise.resolve(results);
  },

  /**
   * Get recent items (for homepage)
   */
  getRecentItems(limit = 6) {
    const items = [...(window.DEMO_ITEMS || [])]
      .filter(i => i.status !== "returned")
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, limit);
    return Promise.resolve(items);
  },

  /**
   * Simulated report submission
   */
  submitReport(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("[Demo] Report submitted:", data);
        resolve({
          success: true,
          message: "Demo mode: Report received locally. Real saving requires Supabase (Phase 5)."
        });
      }, 800);
    });
  },

  /**
   * Simulated claim submission
   */
  submitClaim(itemId, message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("[Demo] Claim submitted for", itemId, message);
        resolve({
          success: true,
          message: "Demo mode: Claim recorded locally. Real claim flow requires backend (Phase 7)."
        });
      }, 700);
    });
  }
};

window.API = API;
