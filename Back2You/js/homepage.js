/**
 * Back2You – Homepage logic
 */

document.addEventListener("DOMContentLoaded", async () => {
  const recentContainer = document.getElementById("recentItems");
  if (!recentContainer) return;

  UI.showLoading(recentContainer, "Loading recent items...");

  try {
    const items = await API.getRecentItems(6);
    if (!items.length) {
      UI.showEmptyState(
        recentContainer,
        "No items yet",
        "Be the first to report a lost or found item.",
        `<a href="report-lost.html" class="btn btn-primary">Report Lost Item</a>`
      );
      return;
    }

    recentContainer.innerHTML = items.map(item => UI.createItemCard(item)).join("");
  } catch (err) {
    console.error(err);
    UI.showEmptyState(recentContainer, "Something went wrong", "Could not load items.");
  }

  // Category pill clicks → go to search with filter
  document.querySelectorAll(".category-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const cat = pill.dataset.category;
      window.location.href = `search.html?category=${encodeURIComponent(cat)}`;
    });
  });
});
