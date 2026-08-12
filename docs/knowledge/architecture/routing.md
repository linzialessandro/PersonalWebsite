---
type: Concept
title: Routing
description: Client-side routing configuration using BrowserRouter, lazy inner routes, and a GitHub Pages SPA fallback.
resource: src/App.jsx
tags: [architecture, routing, react-router]
timestamp: 2026-08-13T12:00:00Z
---

# Routing

The app uses `BrowserRouter` from `react-router-dom` with a production basename of `/PersonalWebsite/` so URLs are real paths (`/publications`) instead of hashes. GitHub Pages has no rewrite rules, so the Vite build copies `index.html` to `404.html`. A first-load helper in `src/lib/hashRedirect.js` rewrites legacy `#/path` URLs to the equivalent path.

Home is imported eagerly. Inner pages are `React.lazy` route modules.

## Route Table

All routes are nested under a single [Layout](/components/layout.md) route.

| Path            | Component                                  | Nav label           |
| --------------- | ------------------------------------------ | ------------------- |
| `/` (index)     | [Home](/pages/home.md)                     | `cd /home`          |
| `/cv`           | [CV](/pages/cv.md)                         | `./cv.sh`           |
| `/publications` | [Publications](/pages/publications.md)     | `./research.sh`     |
| `/teaching`     | [Teaching](/pages/teaching.md)             | `./teaching.sh`     |
| `/academic-net` | [Academic Network](/pages/academic-net.md) | `./academic-net.sh` |
| `/ai-gallery`   | [AI Gallery](/pages/ai-gallery.md)         | `./ai-gallery.sh`   |
| `*`             | `NotFound`                                 | —                   |

## Deployment

Production Vite `base` is `/PersonalWebsite/`. CI builds on every push/PR and deploys `dist` to `gh-pages` from `main`.
