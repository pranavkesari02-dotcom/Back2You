/**
 * Back2You – Demo Sample Data
 * These records are clearly marked with isDemo: true
 * They will be replaced by real Supabase data in later phases.
 * Never mix with live user reports.
 */

const DEMO_ITEMS = [
  {
    id: "demo-001",
    type: "lost",
    title: "College ID Card – Shraddha G.",
    description: "Blue college identity card with photo. Name: Shraddha Gunji. Lost near the library entrance on the ground floor.",
    category: "ID Card",
    location: "Library Entrance",
    date: "2025-10-18",
    status: "lost",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
    isDemo: true,
    reportedBy: "Demo Student",
    createdAt: "2025-10-18T09:30:00"
  },
  {
    id: "demo-002",
    type: "found",
    title: "Black Leather Wallet",
    description: "Found a black leather wallet containing some cash and cards (details hidden for privacy). Found near the canteen seating area.",
    category: "Wallet/Purse",
    location: "Canteen",
    date: "2025-10-19",
    status: "found",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=300&fit=crop",
    isDemo: true,
    reportedBy: "Demo Student",
    createdAt: "2025-10-19T14:15:00"
  },
  {
    id: "demo-003",
    type: "lost",
    title: "Blue Spiral Notebook – DBMS Notes",
    description: "A4 size blue spiral notebook with Database Management System notes. Has my name written on the first page.",
    category: "Book/Notebook",
    location: "Classroom B-204",
    date: "2025-10-17",
    status: "lost",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
    isDemo: true,
    reportedBy: "Demo Student",
    createdAt: "2025-10-17T11:00:00"
  },
  {
    id: "demo-004",
    type: "found",
    title: "Silver Keychain with 3 Keys",
    description: "Found a silver keychain with three keys and a small green charm. Left near the parking area bike stand.",
    category: "Keys",
    location: "Parking Area",
    date: "2025-10-20",
    status: "found",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&h=300&fit=crop",
    isDemo: true,
    reportedBy: "Demo Student",
    createdAt: "2025-10-20T08:45:00"
  },
  {
    id: "demo-005",
    type: "lost",
    title: "Black Boat Earphones",
    description: "Black wireless Boat earphones in a small charging case. Lost somewhere between the main gate and the computer lab.",
    category: "Earphones/Headphones",
    location: "Computer Lab Corridor",
    date: "2025-10-16",
    status: "lost",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
    isDemo: true,
    reportedBy: "Demo Student",
    createdAt: "2025-10-16T16:20:00"
  },
  {
    id: "demo-006",
    type: "found",
    title: "Red Water Bottle – Milton",
    description: "Red Milton water bottle, approximately 1 litre. Found on the bench outside the sports ground.",
    category: "Water Bottle",
    location: "Sports Ground",
    date: "2025-10-21",
    status: "found",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
    isDemo: true,
    reportedBy: "Demo Student",
    createdAt: "2025-10-21T10:10:00"
  },
  {
    id: "demo-007",
    type: "lost",
    title: "Samsung Galaxy Phone (Black Case)",
    description: "Samsung phone with a plain black protective case. Screen has a small crack on the top right. Lost near the admin office.",
    category: "Mobile Phone",
    location: "Admin Office",
    date: "2025-10-15",
    status: "lost",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    isDemo: true,
    reportedBy: "Demo Student",
    createdAt: "2025-10-15T13:40:00"
  },
  {
    id: "demo-008",
    type: "found",
    title: "Grey Umbrella",
    description: "Compact grey folding umbrella. Found near the main entrance during rain. Still in good condition.",
    category: "Umbrella",
    location: "Main Entrance",
    date: "2025-10-20",
    status: "found",
    image: "https://images.unsplash.com/photo-1517677208171-0bc67480dba0?w=400&h=300&fit=crop",
    isDemo: true,
    reportedBy: "Demo Student",
    createdAt: "2025-10-20T17:30:00"
  },
  {
    id: "demo-009",
    type: "lost",
    title: "Black Backpack with Laptop Sleeve",
    description: "Medium-size black backpack with a padded laptop compartment. Contains some notebooks. Lost in the seminar hall after the workshop.",
    category: "Bag",
    location: "Seminar Hall",
    date: "2025-10-14",
    status: "returned",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    isDemo: true,
    reportedBy: "Demo Student",
    createdAt: "2025-10-14T15:00:00"
  },
  {
    id: "demo-010",
    type: "found",
    title: "Set of Colour Highlighters",
    description: "Pack of 4 coloured highlighters (yellow, pink, green, blue) found on a desk in Classroom A-101.",
    category: "Other",
    location: "Classroom A-101",
    date: "2025-10-21",
    status: "found",
    image: "https://images.unsplash.com/photo-1583485088038-4e6f55d75c6c?w=400&h=300&fit=crop",
    isDemo: true,
    reportedBy: "Demo Student",
    createdAt: "2025-10-21T09:00:00"
  }
];

const CATEGORIES = [
  "ID Card",
  "Book/Notebook",
  "Bag",
  "Wallet/Purse",
  "Keys",
  "Mobile Phone",
  "Earphones/Headphones",
  "Water Bottle",
  "Umbrella",
  "Other"
];

const LOCATIONS = [
  "Library Entrance",
  "Canteen",
  "Classroom B-204",
  "Parking Area",
  "Computer Lab Corridor",
  "Sports Ground",
  "Admin Office",
  "Main Entrance",
  "Seminar Hall",
  "Classroom A-101",
  "Other"
];

// Make available globally for static pages
window.DEMO_ITEMS = DEMO_ITEMS;
window.CATEGORIES = CATEGORIES;
window.LOCATIONS = LOCATIONS;
