# Back2You – College Lost & Found Management System

**Academic Project** · SY BCA Semester III · 2025-2026  
Yashaswi Education Society’s International Institute of Management Science, Chinchwad, Pune  
Submitted by: Miss. Shraddha Gunji & Mr. Pranav Kesari  
Under the guidance of: Karishma Kamble

---

## What is Back2You?

Back2You is a modern web application that helps college students report lost belongings, report found items, search and filter items, and reconnect lost items with their rightful owners through a secure claim process.

The name represents a lost belonging finding its way **back to you**.

---

## Current Phase: Phase 2 – Static Frontend (Complete)

This version is a **fully functional static frontend** with:

- Premium responsive design (teal + soft navy)
- All required pages
- Client-side form validation
- Search & filters powered by demo data
- Item cards, status badges, claim interface
- Student & Admin dashboard layouts
- Loading, empty, success and error states
- Mobile navigation

**Authentication, database, and real data persistence are not yet connected.**  
All “save / login / claim” actions are clearly labelled as **Demo Mode** and only simulate the experience.

---

## How to Open the Project

1. Download / extract the `Back2You` folder.
2. Open the folder in **Visual Studio Code**.
3. Open `index.html` in a modern browser (Chrome, Edge, Firefox).
   - Or use the VS Code Live Server extension for the best experience.

No build step or server is required for Phase 2.

---

## Folder Structure

```
Back2You/
├── index.html
├── login.html
├── register.html
├── dashboard.html
├── report-lost.html
├── report-found.html
├── search.html
├── item-details.html
├── admin/
│   ├── index.html
│   ├── reports.html
│   └── users.html
├── css/
│   ├── style.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── config.js
│   ├── auth.js
│   ├── api.js
│   ├── ui.js
│   ├── validation.js
│   ├── homepage.js
│   ├── dashboard.js
│   ├── report.js
│   ├── search.js
│   ├── item-details.js
│   └── admin.js
├── demo/
│   └── sample-data.js      ← 10 realistic demo items
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

---

## Demo Data

10 sample items are included in `demo/sample-data.js`.  
Each is clearly marked with a **Demo** badge so examiners can distinguish sample data from real reports (which will appear after Supabase integration).

---

## Technologies Used (Phase 2)

- HTML5
- CSS3 (custom design system, no frameworks)
- Vanilla JavaScript
- Google Fonts (Inter)
- Visual Studio Code

Later phases will add **Supabase** (Auth, Database, Storage, Row Level Security).

---

## Next Phases

| Phase | Focus |
|-------|--------|
| 3 | Supabase Auth (real register / login / logout) |
| 4 | Database tables + Row Level Security |
| 5 | Report Lost / Found + image upload |
| 6 | Live search & item details |
| 7 | Student dashboard + claim workflow |
| 8 | Admin dashboard with real permissions |
| 9 | Polish & security review |
| 10 | Documentation & viva preparation |

---

## Important Notes for Examiners

- No secret keys or passwords are present in the frontend.
- Private contact details are never shown on public item cards.
- Students cannot edit another student’s reports (will be enforced by RLS).
- Admin role will be assigned manually in the database.
- Claim status is kept separate from item status (Lost / Found / Returned).

---

**Back2You** – Helping belongings find their way home.
