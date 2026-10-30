/**
 * Back2You – Student Dashboard (Phase 2 – Demo)
 * Shows sample data. Real user-specific data comes after auth + backend.
 */

document.addEventListener("DOMContentLoaded", async () => {
  const myReports = document.getElementById("myReports");
  const myClaims = document.getElementById("myClaims");

  // Demo notice
  const notice = document.getElementById("demoNotice");
  if (notice) {
    notice.innerHTML = `
      <div class="alert alert-info">
        <strong>Demo Mode</strong> — You are viewing sample data. 
        After login (Phase 3) this page will show only <em>your</em> reports and claims.
      </div>
    `;
  }

  // Show a few demo items as "my reports"
  if (myReports) {
    UI.showLoading(myReports);
    const items = await API.getRecentItems(4);
    if (!items.length) {
      UI.showEmptyState(myReports, "No reports yet", "You haven't reported any items.");
    } else {
      myReports.innerHTML = `
        <div class="table-wrapper">
          <table class="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Type</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${items.map(item => `
                <tr>
                  <td>
                    <strong>${item.title}</strong>
                    ${item.isDemo ? '<span class="demo-badge" style="margin-left:0.4rem">Demo</span>' : ""}
                  </td>
                  <td>${item.type === "found" ? "Found" : "Lost"}</td>
                  <td>${UI.statusBadge(item.status)}</td>
                  <td>${UI.formatDate(item.date)}</td>
                  <td><a href="item-details.html?id=${item.id}" class="btn btn-sm btn-outline">View</a></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }
  }

  // Simulated claims section
  if (myClaims) {
    myClaims.innerHTML = `
      <div class="empty-state" style="padding:2rem">
        <div class="empty-state-icon">📋</div>
        <h3>No claims yet</h3>
        <p>When you submit a claim on a found item, it will appear here.</p>
      </div>
    `;
  }
});
