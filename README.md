# Alessandro Linzi - Personal Website

Welcome to the repository for my personal and professional website. This site serves as a central hub for my academic profile, research publications, teaching materials, and interactive projects.

Live site: [https://linzialessandro.github.io/PersonalWebsite/](https://linzialessandro.github.io/PersonalWebsite/)

## About This Repository

This project is a modern Single Page Application (SPA) built to highlight my work in Valuation Theory and related mathematical fields. It was developed using:

- **React 18**: For modular component architecture and efficient rendering.
- **Vite 6**: As the frontend build tool for fast development and optimized production builds.
- **Tailwind CSS v4**: Utility-first styling combined with a custom theme and component layer.
- **React Router v7**: Path-based routing via `BrowserRouter`, with a `404.html` fallback for GitHub Pages and a redirect from older hash URLs.
- **Framer Motion**: For smooth micro-animations and page transitions.
- **Lucide React**: For icons.

## Project Structure

- `src/components/`: Reusable UI (`Header`, `Footer`, `Layout`, `PublicationItem`, `SiteInfoModal`).
- `src/pages/`: Home, Research, Teaching, CV, Network, Dialogues.
- `src/data/`: Static content modules that feed the pages (`cv.js`, `publications.js`, `teaching.js`, `academicNet.js`, `aiGallery.js`, `profile.js`).
- `src/assets/`: Static assets including PDFs for the CV and teaching materials.
- `src/index.css`: Design tokens, typography, and component styles.
- `docs/knowledge/`: Open Knowledge Format (OKF) documentation graph.

## Local Development

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.

## Formatting, Linting & Tests

The project uses ESLint and Prettier on commits (Husky + lint-staged), plus a small Vitest suite for content contracts and routing.

```bash
npm run lint
npm test
```

## Deployment

Pushes to `main` run GitHub Actions: lint, test, build, then publish `dist` to the `gh-pages` branch. GitHub Pages is served from that branch at `/PersonalWebsite/`.

A production build also copies `index.html` to `404.html` so deep links such as `/publications` work on GitHub Pages. Older `#/publications` URLs are rewritten to path routes on first load.

Manual deploy is still available:

```bash
npm run deploy
```

---

_Created and maintained by Alessandro Linzi._
