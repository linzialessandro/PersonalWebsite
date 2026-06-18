# Alessandro Linzi - Personal Website

Welcome to the repository for my personal and professional website. This site serves as a central hub for my academic profile, research publications, teaching materials, and interactive projects.

## About This Repository

This project is a modern Single Page Application (SPA) built to highlight my work in Valuation Theory and related mathematical fields. It was developed using:

- **React**: For modular component architecture and efficient rendering.
- **Vite**: As the frontend build tool for lightning-fast development and optimized production builds.
- **Vanilla CSS**: Implementing a premium, glassmorphism-inspired design system with custom typography and smooth animations.
- **React Router**: For seamless navigation between sections without page reloads.

## Project Structure

- `src/components/`: Reusable UI components (`Header.jsx`, `Footer.jsx`).
- `src/pages/`: Individual page views (`Home.jsx`, `CV.jsx`, `Publications.jsx`, etc.).
- `src/assets/`: Static assets including PDFs for my CV, publications, and dialogues.
- `src/index.css`: Global styles and design system tokens.

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

## Deployment

The repository is configured to be seamlessly deployed to GitHub Pages.

To deploy the latest changes:
```bash
npm run deploy
```
This command automatically builds the project and pushes the optimized static assets to the `gh-pages` branch.

---
*Created and maintained by Alessandro Linzi.*
