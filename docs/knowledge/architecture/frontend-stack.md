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
- **React Router**: Path-based client-side routing (`react-router-dom`).
- **Vite**: Build tool and local development server (`vite`, `@vitejs/plugin-react`).

## Styling and UI

- **Tailwind CSS 4**: Used for utility-first styling (`tailwindcss`, `@tailwindcss/vite`).
- **Lucide React**: Icon library (`lucide-react`).
- **Fonts**: Self-hosted via `@fontsource` (Archivo, Space Grotesk).

## Deployment & Tooling

- **GitHub Pages**: Built and published from GitHub Actions to the `gh-pages` branch.
- **Linting, formatting, tests**: ESLint, Prettier, lint-staged, Husky, and Vitest.
