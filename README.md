# Maple & Mug Café — React Portfolio Project

A professional, responsive React application built for a fictional cafe. This project demonstrates the transformation of a static website into a full-featured, data-driven web application with a dual-interface architecture.

## 🚀 Project Overview

This project showcases two distinct experiences:

1. **Customer Portal:** A public-facing storefront featuring a dynamic menu, responsive image gallery, and validated contact forms.
2. **Staff Dashboard:** A private administrative interface to manage daily cafe operations.

## 🛠 Tech Stack

- **Framework:** React + Vite
- **Routing:** React Router (Nested routing & URL parameters)
- **State Management:** Context API & React State
- **Styling:** CSS3 (Variable-driven, Responsive Mobile-First)
- **Deployment:** Vercel

## ✨ Key Features

### Customer Side

- **Dynamic Menu:** Data-driven list rendering.
- **Image Gallery:** Responsive grid layout.
- **Form Validation:** Client-side email/input validation.
- **Custom 404 Handling:** Graceful error page routing.

### Staff Dashboard (Admin)

- **Operational Overview:** Real-time derived statistics (Today's orders, Revenue).
- **Menu Management:** CRUD (Create, Read, Update, Delete) capability with live search and filtering.
- **Order Kanban Board:** Interactive status management (New/Preparing/Ready) using React State.
- **Team Management:** Data-driven staff profiles.
- **Settings:** Global store status toggle (Open/Closed).

## 🔑 Accessing the Admin Dashboard

The administrative interface is designed for cafe staff access only.

1. Navigate to: `/admin` (e.g., `https://maple-and-mug-cafe.vercel.app/admin`)
2. Use the **"Staff Management Portal"** link located in the website footer for quick access.
3. _Note: For demonstration purposes, this area is currently open; in a full-scale application, this would be secured by authentication._

## 🧠 Learning Outcomes

This project demonstrates proficiency in:

- **State Management:** Using `useState` and `Context API` to keep UI components in sync.
- **CRUD Operations:** Implementing data mutation logic for live application behavior.
- **Nested Layouts:** Separating the Customer UI from the Admin Dashboard using `react-router-dom`.
- **Derived Data:** Calculating dashboard statistics dynamically from order objects.

## 💻 Getting Started

1. **Clone the repo:** `git clone https://github.com/your-username/maple-and-mug-cafe.git`
2. **Install dependencies:** `npm install`
3. **Run development server:** `npm run dev`
