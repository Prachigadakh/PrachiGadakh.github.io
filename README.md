# Prachi Gadakh's Portfolio
## Features

*   **Modern Single-Page Design:** A clean, single-page application with smooth-scrolling navigation between sections.
*   **Interactive & Animated:** Implements subtle animations and transitions using Framer Motion, including scroll-reveal effects and interactive 3D card tilts.
*   **Data-Driven Content:** All portfolio content (experience, projects, skills) is managed in `src/data/portfolio.ts` for easy maintenance and updates.
*   **Component-Based Architecture:** Structured into reusable React components for sections like Hero, About, Experience, Skills, Projects, and Contact.
*   **Responsive:** Features a mobile-friendly navigation overlay to ensure a seamless experience on all devices.

## Tech Stack

*   **Frontend:** React, TypeScript
*   **Build Tool:** Vite
*   **Animation:** Framer Motion
*   **Icons:** Lucide React
*   **Styling:** CSS Modules & Inline Styles

## Directory Structure

The project is organized into the following key directories:

```
.
├── src
│   ├── components
│   │   ├── layout      # Navbar, Footer
│   │   ├── sections    # Individual portfolio sections (Hero, About, etc.)
│   │   └── ui          # Reusable UI elements like SectionHeader
│   ├── data            # Centralized portfolio data (experience, projects)
│   ├── hooks           # Custom React hooks for UI logic
│   └── types           # TypeScript type definitions
├── index.html          # Main HTML entry point
└── vite.config.ts      # Vite configuration
```

## Running Locally

To run the portfolio website on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Prachigadakh/PrachiGadakh.github.io.git
    cd PrachiGadakh.github.io
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

4.  **Build for production:**
    ```bash
    npm run build
    ```
    This command generates the static files in the `dist` directory, ready for deployment.