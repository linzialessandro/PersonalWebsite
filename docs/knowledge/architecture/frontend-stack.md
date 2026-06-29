---
type: Concept
title: Frontend Stack
description: Documentation of the libraries and tools used in the frontend of the Website project.
tags: [architecture, frontend, react, vite]
timestamp: 2026-06-29T21:50:00Z
---

# Frontend Stack

The website is a modern single-page application built primarily using React and bundled with Vite.

## Core Technologies

- **React 18**: The core UI library (`react`, `react-dom`).
- **React Router**: For client-side routing (`react-router-dom`).
- **Vite**: Build tool and local development server (`vite`, `@vitejs/plugin-react`).

## Styling and UI

- **Tailwind CSS 4**: Used for utility-first styling (`tailwindcss`, `@tailwindcss/vite`).
- **Framer Motion**: Utilized for animations and interactive UI components (`framer-motion`).
- **Lucide React**: Icon library (`lucide-react`).
- **Utility Libraries**: `clsx` and `tailwind-merge` for dynamic class name merging.

## Deployment & Tooling

- **GitHub Pages**: Deployed directly to GitHub pages using the `gh-pages` package.
- **Linting & Formatting**: Configured with `eslint`, `prettier`, and `lint-staged` running on git hooks via `husky`.
