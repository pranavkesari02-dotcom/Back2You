/**
 * Back2You – Search & Filter page logic
 */

document.addEventListener("DOMContentLoaded", async () => {
  const resultsContainer = document.getElementById("searchResults");
  const resultCount = document.getElementById("resultCount");
  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("filterCategory");
  const locationSelect = document.getElementById("filterLocation");
  const statusSelect = document.getElementById("filterStatus");
  const typeSelect = document.getElementById("filterType");
  const searchForm = document.getElementById("searchForm");

  // Populate category & location dropdowns from demo data
  if (categorySelect && window.CATEGORIES) {
    window.CATEGORIES.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      categorySelect.appendChild(opt);
    });
  }

  if (locationSelect && window.LOCATIONS) {
    window.LOCATIONS.forEach(l => {
      const opt = document.createElement("option");
      opt.value = l;
      opt.textContent = l;
      locationSelect.appendChild(opt);
    });
  }

  // Read URL params (e.g. from homepage category click)
  const params = new URLSearchParams(window.location.search);
  if (params.get("category") && categorySelect) {
    categorySelect.value = params.get("category");
  }
  if (params.get("q") && searchInput) {
    searchInput.value = params.get("q");
  }

  async function performSearch() {
    if (!resultsContainer) return;

    UI.showLoading(resultsContainer, "Searching...");

    const filters = {
      keyword: searchInput ? searchInput.value.trim() : "",
      category: categorySelect ? categorySelect.value : "all",
      location: locationSelect ? locationSelect.value : "all",
      status: statusSelect ? statusSelect.value : "all",
      type: typeSelect ? typeSelect.value : "all"
    };

    try {
      const items = await API.searchItems(filters);

      if (resultCount) {
        resultCount.textContent = `${items.length} item${items.length !== 1 ? "s" : ""} found`;
      }

      if (!items.length) {
        UI.showEmptyState(
          resultsContainer,
          "No matching items",
          "Try changing your filters or search keywords.",
          `<button class="btn btn-outline" onclick="window.location.reload()">Clear Filters</button>`
        );
        return;
      }

      resultsContainer.innerHTML = `
        <div class="grid grid-cols-3 gap-6" id="itemsGrid">
          ${items.map(item => UI.createItemCard(item)).join("")}
        </div>
      `;
    } catch (err) {
      console.error(err);
      UI.showEmptyState(resultsContainer, "Search failed", "Please try again.");
    }
  }

  // Initial load
  performSearch();

  // Form submit
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      performSearch();
    });
  }

  // Live filter change
  [categorySelect, locationSelect, statusSelect, typeSelect].forEach(el => {
    if (el) el.addEventListener("change", performSearch);
  });
});
