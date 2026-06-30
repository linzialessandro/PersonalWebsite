# Alessandro Linzi - Personal Website

Welcome to the repository for my personal and professional website. This site serves as a central hub for my academic profile, research publications, teaching materials, and interactive projects.

## About This Repository

This project is a modern Single Page Application (SPA) built to highlight my work in Valuation Theory and related mathematical fields. It was developed using:

- **React 18**: For modular component architecture and efficient rendering.
- **Vite 6**: As the frontend build tool for fast development and optimized production builds.
- **Tailwind CSS v4**: Utility-first styling combined with a custom theme and glassmorphism-inspired design tokens.
- **React Router v7**: For seamless navigation between pages via `HashRouter` (ensuring compatibility with static hosting like GitHub Pages).
- **Framer Motion**: For smooth micro-animations and page transitions.
- **Lucide React**: For icons.

## Project Structure

- `src/components/`: Reusable UI components (`Header.jsx`, `Footer.jsx`, `Layout.jsx`, `TerminalWindow.jsx`, `ResourceCard.jsx`, `PublicationItem.jsx`, `SiteInfoModal.jsx`).
- `src/pages/`: Individual page views:
  - `Home.jsx`: Landing page containing academic bio and terminal overview.
  - `CV.jsx`: Timeline of academic and professional history.
  - `Publications.jsx`: List of papers and research materials.
  - `Teaching.jsx`: Curated math resources and download links.
  - `AcademicNet.jsx`: Grid of collaborators and mathematical reference links.
  - `AIGallery.jsx`: Creative gallery of AI-generated dialogues and poetry.
- `src/data/`: Static mock data modules defining the content for the pages (`cv.js`, `publications.js`, `teaching.js`, `academicNet.js`, `aiGallery.js`).
- `src/assets/`: Static assets including PDFs for CV and teaching materials.
  - `src/assets/Dialogues/`: Contains dynamically generated Socratic dialogue PDFs.
- `src/index.css`: Global styles, typography scale, and custom Tailwind CSS theme configuration.
- `docs/knowledge/`: Open Knowledge Format (OKF) documentation graph.

## Socratic Dialogue Generation

The project includes a utility script to dynamically generate Socratic dialogue PDFs from text specifications:

```bash
node generate_dialogues.mjs
```

This script uses `pdfkit` to compile dialogue transcripts (e.g. Lovelace, Noether, Ramanujan, von Neumann) into PDF files under `src/assets/Dialogues/`.

## Local Development

To run the website locally on your machine:

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

## Formatting & Linting

The project uses ESLint and Prettier for code quality and formatting, managed on commits using Husky and lint-staged:

```bash
# Run manual lint check
npm run lint
```

## Deployment

The repository is configured to be seamlessly deployed to GitHub Pages.

To deploy the latest changes:

```bash
npm run deploy
```

This command automatically builds the project and pushes the optimized static assets to the `gh-pages` branch.

---

_Created and maintained by Alessandro Linzi._
