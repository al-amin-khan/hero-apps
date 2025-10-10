# Live Link: 

# [https://hero-apps-al-amin-khan.netlify.app/](https://hero-apps-al-amin-khan.netlify.app/)

# Hero Apps

Hero Apps is a Vite-powered React experience that showcases a catalog of mobile applications. It combines curated data, interactive search, detailed analytics, and local-install simulation to demonstrate modern frontend patterns with React Router v7, Tailwind CSS (via DaisyUI), and React Toastify.

## Overview

- Browse a grid of featured apps, view spotlight statistics, and drill into rich detail pages.
- Install apps to a personal library stored in `localStorage`, then manage or remove them from the Installation screen.
- Explore rating distributions with Recharts visualizations and receive instant feedback via toast notifications.

## Tech Stack

- `React 19` with `React Router 7.9` for routing.
- `Vite 7` tooling with native Tailwind CSS v4 integration and DaisyUI components.
- `React Icons` and `lucide-react` for iconography.
- `React Toastify` for non-blocking notifications.
- `Recharts` for data visualization.

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or a compatible package manager).

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`). Hot Module Replacement is enabled by default.

### Build for production

```bash
npm run build
```

The production bundle is emitted to `dist/`.

### Preview the production build locally

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

## Project Structure

```
src/
  assets/                Static images and icons
  components/            Reusable UI (cards, charts, banner, footer, etc.)
  hooks/                 Custom hooks (localStorage, debounce, JSON fetcher)
  layouts/               Root layout with navbar & footer chrome
  pages/                 Top-level route views (Home, Apps, Installation, NotFound)
  routes/Routes.jsx      React Router v7 configuration
  main.jsx               Application entry, router provider, toast container
public/apps.json         Primary app catalog consumed across views
```

## Application Walkthrough

- **Home (`/` or `/home`)** – Hero banner, product stats, and a trending apps carousel sourced from the first eight entries in `apps.json`.
- **Apps (`/apps`)** – Searchable grid of every catalog item. Uses a debounced search term and skeleton placeholders (`Loading` component) while filtering or fetching.
- **App Detail (`/apps/:id`)** – Displays metadata, rating breakdown (`RatingBarChart`), and install button. Installs add an entry to `localStorage` and trigger toast feedback.
- **Installation (`/installation`)** – Reads installed app IDs from `localStorage`, merges them with the catalog (`useAppsListJSON`), and renders `InstalledAppCard` tiles with sort controls.
- **Error States** – `AppNotFound` handles unknown app IDs, and `NotFound` covers unmatched routes. Both include navigation helpers.

## Data & State Flow

- `useAppsListJSON` fetches `public/apps.json` once on mount and exposes `{ data, loading, error }` for components to consume.
- `useLocalStorage` wraps reads/writes to the `installedApps` key; IDs are stored as strings to simplify equality checks.
- Installation state hydrates from `localStorage` on page load, ensuring persistence between sessions.
- Sorting and filtering always operate on derived state so the original dataset remains untouched.

## Reusable Hooks & Components

- `useDebounce` – Delays updates to expensive computations (search filtering) to improve perceived performance.
- `Loading` – DaisyUI skeletons for consistent loading placeholders across grids and list views.
- `InstalledAppCard` – Accepts a fully-populated `app` object plus an `onUninstall` callback; renders download/rating badges and uninstall action.
- `RatingBarChart` – Vertical bar chart showcasing rating distribution using Recharts primitives, with label annotations.

## Styling Guidelines

- Tailwind CSS v4 utility classes provide layout and typography, while DaisyUI themes power ready-made components (`btn`, `card`, `select`, `skeleton`, etc.).
- Gradient helpers (e.g., `bg-linear-[125deg,#632EE3,#9F62F2]`, `bg-gradient`) deliver the branded accent colors used across buttons and headings.
- Global styles live in `src/index.css` and `src/App.css`; update these files for cross-site theming adjustments.

## Working With `apps.json`

- Located at `public/apps.json`; the catalog is served statically by Vite.
- Each entry requires: `id`, `title`, `companyName`, `description`, `downloads`, `ratingAvg`, `ratings[]`, `size`, `image`, and optional review metadata.
- Adding or editing entries triggers automatic reloads thanks to Vite’s static asset watching.

## Notifications

- Toasts are dispatched through `react-toastify` (see `CardDetail.jsx` and `Installation.jsx` flows). The provider is registered once in `main.jsx`.
- When extending features, import `toast` from `react-toastify` and prefer non-blocking feedback to keep user interactions fluid.

## Contributing

1. Fork or clone the repository.
2. Create a feature branch: `git checkout -b feature/my-update`.
3. Install dependencies and run `npm run dev` to validate changes locally.
4. Run `npm run lint` (and any additional tests you add) before opening a pull request.
5. Describe your changes clearly, including screenshots for UI updates when possible.

---

Questions or ideas? Open an issue or start a discussion—new app data, UI polish, and performance tweaks are all welcome.
