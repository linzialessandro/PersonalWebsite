---
type: Concept
title: Routing
description: Client-side routing configuration using BrowserRouter, lazy inner routes, and a GitHub Pages SPA fallback.
resource: src/App.jsx
tags: [architecture, routing, react-router]
timestamp: 2026-08-13T18:00:00Z
---

# Routing

The app uses `BrowserRouter` with a production basename of `/PersonalWebsite/`. GitHub Pages has no rewrite rules, so the Vite build copies `index.html` to `404.html`. Legacy `#/path` URLs are rewritten on first load.

Home is imported eagerly. Inner pages are `React.lazy` route modules.

## Route Table

| Path            | Page      | Nav label |
| --------------- | --------- | --------- |
| `/`             | Home      | name      |
| `/publications` | Research  | Research  |
| `/teaching`     | Teaching  | Teaching  |
| `/cv`           | CV        | CV        |
| `/academic-net` | Network   | Network   |
| `/ai-gallery`   | Dialogues | Dialogues |
| `*`             | Not found | —         |
