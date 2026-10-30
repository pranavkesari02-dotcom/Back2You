/**
 * Back2You – Item Details + Claim interface
 */

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("itemDetails");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    UI.showEmptyState(
      container,
      "Item not found",
      "No item ID was provided.",
      `<a href="search.html" class="btn btn-primary">Browse Items</a>`
    );
    return;
  }

  UI.showLoading(container, "Loading item...");

  try {
    const item = await API.getItemById(id);

    if (!item) {
      UI.showEmptyState(
        container,
        "Item not found",
        "This item may have been removed or the link is incorrect.",
        `<a href="search.html" class="btn btn-primary">Browse Items</a>`
      );
      return;
    }

    const demoNote = item.isDemo
      ? `<div class="alert alert-warning" style="margin-bottom:1.5rem">
           <strong>Demo Record</strong> — This is sample data for testing. Real reports will appear here after backend integration.
         </div>`
      : "";

    container.innerHTML = `
      ${demoNote}
      <div class="grid grid-cols-2 gap-8" style="align-items:start">
        <div>
          <div class="card" style="overflow:hidden">
            <img src="${item.image}" 
                 alt="${item.title}" 
                 style="width:100%;aspect-ratio:4/3;object-fit:cover"
                 onerror="this.src='https://via.placeholder.com/600x450/e2e8f0/64748b?text=No+Image'">
          </div>
        </div>
        <div>
          <div style="display:flex;gap:0.5rem;margin-bottom:1rem;flex-wrap:wrap">
            ${UI.statusBadge(item.status)}
            ${UI.categoryBadge(item.category)}
            <span class="category-badge">${item.type === "found" ? "Found Item" : "Lost Item"}</span>
          </div>
          <h1 style="margin-bottom:0.75rem">${item.title}</h1>
          <div class="item-card-meta" style="margin-bottom:1.5rem;font-size:0.95rem">
            <span>📍 ${item.location}</span>
            <span>📅 ${UI.formatDate(item.date)}</span>
            <span>👤 ${item.reportedBy || "Student"}</span>
          </div>
          <h4 style="margin-bottom:0.5rem">Description</h4>
          <p style="color:var(--navy-700);margin-bottom:1.5rem;line-height:1.7">${item.description}</p>

          ${item.status !== "returned" ? `
            <div class="claim-box">
              <h4 style="margin-bottom:0.5rem">Is this your item?</h4>
              <p class="text-sm" style="margin-bottom:1rem">
                Submit a claim with a short explanation. The person who reported the item will review it.
                Contact details are kept private until a claim is verified.
              </p>
              <form id="claimForm">
                <div class="form-group">
                  <label class="form-label" for="claimMessage">Why do you believe this is yours? <span class="required">*</span></label>
                  <textarea id="claimMessage" class="form-textarea" rows="3" 
                    placeholder="Describe unique marks, contents, or when/where you lost it..."></textarea>
                  <div class="form-error"></div>
                </div>
                <button type="submit" class="btn btn-primary">Submit Claim</button>
              </form>
            </div>
          ` : `
            <div class="alert alert-success">
              This item has already been marked as <strong>Returned</strong>.
            </div>
          `}
        </div>
      </div>
    `;

    // Claim form handler
    const claimForm = document.getElementById("claimForm");
    if (claimForm) {
      claimForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!Validation.validateClaim(claimForm)) {
          UI.showToast("Please provide more details for your claim", "error");
          return;
        }

        const btn = claimForm.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.textContent = "Submitting...";

        const message = claimForm.querySelector("#claimMessage").value.trim();
        const result = await API.submitClaim(item.id, message);

        UI.showToast(result.message, "warning", 5000);
        btn.disabled = false;
        btn.textContent = "Submit Claim";
        claimForm.reset();
      });
    }
  } catch (err) {
    console.error(err);
    UI.showEmptyState(container, "Error loading item", "Please try again later.");
  }
});
