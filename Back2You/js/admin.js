/**
 * Back2You – Admin Dashboard (Phase 2 – Visual Demo Only)
 * No real permissions or data changes yet.
 */

document.addEventListener("DOMContentLoaded", async () => {
  // Highlight that this is a visual demo
  const notice = document.getElementById("adminNotice");
  if (notice) {
    notice.innerHTML = `
      <div class="alert alert-warning">
        <strong>Admin Demo View</strong> — This page shows the future layout. 
        Real admin permissions and live data management will be enabled after Supabase + RLS (Phase 4 & 8).
      </div>
    `;
  }

  // Stats
  const items = await API.getItems();
  const lostCount = items.filter(i => i.status === "lost").length;
  const foundCount = items.filter(i => i.status === "found").length;
  const returnedCount = items.filter(i => i.status === "returned").length;

  const setStat = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setStat("statTotal", items.length);
  setStat("statLost", lostCount);
  setStat("statFound", foundCount);
  setStat("statReturned", returnedCount);

  // Reports table
  const reportsTable = document.getElementById("adminReportsTable");
  if (reportsTable) {
    reportsTable.innerHTML = `
      <div class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Type</th>
              <th>Category</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${items.map(item => `
              <tr>
                <td>
                  <strong>${item.title}</strong>
                  ${item.isDemo ? '<span class="demo-badge" style="margin-left:0.35rem">Demo</span>' : ""}
                </td>
                <td>${item.type}</td>
                <td>${item.category}</td>
                <td>${UI.statusBadge(item.status)}</td>
                <td>${UI.formatDate(item.date)}</td>
                <td>
                  <a href="../item-details.html?id=${item.id}" class="btn btn-sm btn-outline">View</a>
                  <button class="btn btn-sm btn-ghost" onclick="UI.showToast('Demo: Edit not available yet','info')">Edit</button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  // Users table (static demo)
  const usersTable = document.getElementById("adminUsersTable");
  if (usersTable) {
    usersTable.innerHTML = `
      <div class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Demo Student 1</td>
              <td>student1@example.com</td>
              <td><span class="category-badge">Student</span></td>
              <td>12 Oct 2025</td>
              <td><button class="btn btn-sm btn-ghost" onclick="UI.showToast('Demo only','info')">Manage</button></td>
            </tr>
            <tr>
              <td>Demo Student 2</td>
              <td>student2@example.com</td>
              <td><span class="category-badge">Student</span></td>
              <td>15 Oct 2025</td>
              <td><button class="btn btn-sm btn-ghost" onclick="UI.showToast('Demo only','info')">Manage</button></td>
            </tr>
            <tr>
              <td>Admin User</td>
              <td>admin@iims.edu</td>
              <td><span class="status-badge status-found">Admin</span></td>
              <td>01 Oct 2025</td>
              <td><button class="btn btn-sm btn-ghost" onclick="UI.showToast('Demo only','info')">Manage</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm text-muted mt-4">These are placeholder users. Real user list will load from Supabase after authentication is connected.</p>
    `;
  }
});
