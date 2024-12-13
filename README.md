# MentHub Frontend

MentHub is a platform designed to connect women in STEM and those transitioning into STEM with experienced mentors. The platform facilitates mentorship relationships, fostering career growth, knowledge sharing, and professional development.

This repository contains the **frontend** of MentHub, built with React and Vite.

---

## Features

- View a list of open projects (mentorship opportunities).
- View detailed information about a specific project, including pledges (mentorship hours committed).
- Login functionality to authenticate users.
- Restrict project creation functionality to logged-in users.
- Responsive and user-friendly design.

---

## Project Requirements

### Functional Requirements

- [x] **Homepage:** Display a list of all mentorship projects with relevant details.
- [x] **Project Details Page:** View detailed information about a selected mentorship project.
- [x] Includes title, description, goal, and pledges.
- [x] **Login Page:** Allow users to log in and securely store tokens.
- [x] **Create Project Page:** Allow logged-in users to create mentorship projects.
- [x] **Protected Routes:** Restrict access to the Create Project page for non-authenticated users.
- [x] **Global Navigation Bar:**
  - [x] Includes links to Home, Login, and Create Project (for logged-in users).
  - [x] Logout button for authenticated users.

---

## Tech Stack

- **Frontend Framework:** React with Vite
- **Styling:** CSS (global and component-level styles)
- **Routing:** React Router
- **State Management:** React Context for authentication
- **API:** Fetch-based API integration

---

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
