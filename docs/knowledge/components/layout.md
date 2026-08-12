---
type: Concept
title: Layout Component
description: Root layout shell that composes a skip link, Header, page content, and Footer.
resource: src/components/Layout.jsx
tags: [components, routing, layout]
timestamp: 2026-08-13T12:00:00Z
---

# Layout Component

A thin wrapper used as the top-level route element in React Router. Renders:

1. A skip-to-content link
2. [Header](/components/header.md)
3. `<main id="main-content">` containing `<Outlet />`
4. [Footer](/components/footer.md)
