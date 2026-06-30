---
type: Concept
title: Routing
description: Client-side routing configuration using HashRouter and nested routes under Layout.
resource: src/App.jsx
tags: [architecture, routing, react-router]
timestamp: 2026-06-30T18:35:00Z
---

# Routing

The app uses `HashRouter` from `react-router-dom` (not `BrowserRouter`) because it deploys to GitHub Pages, which does not support server-side URL rewriting.

## Route Table

All routes are nested under a single [Layout](/docs/knowledge/components/layout.md) route.

| Path            | Component                                                 | Nav label           |
| --------------- | --------------------------------------------------------- | ------------------- |
| `/` (index)     | [Home](/docs/knowledge/pages/home.md)                     | `cd /home`          |
| `/cv`           | [CV](/docs/knowledge/pages/cv.md)                         | `./cv.sh`           |
| `/publications` | [Publications](/docs/knowledge/pages/publications.md)     | `./research.sh`     |
| `/teaching`     | [Teaching](/docs/knowledge/pages/teaching.md)             | `./teaching.sh`     |
| `/academic-net` | [Academic Network](/docs/knowledge/pages/academic-net.md) | `./academic-net.sh` |
| `/ai-gallery`   | [AI Gallery](/docs/knowledge/pages/ai-gallery.md)         | `./ai-gallery.sh`   |

## Deployment

Vite config sets `base: './'` for relative asset paths. Deployment uses `gh-pages -d dist` (the `deploy` npm script).
