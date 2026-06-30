---
type: Concept
title: Layout Component
description: Root layout shell that composes Header, page content (via React Router Outlet), and Footer.
resource: src/components/Layout.jsx
tags: [components, routing, layout]
timestamp: 2026-06-30T18:33:00Z
---

# Layout Component

A thin wrapper used as the top-level route element in React Router. Renders three children in order:

1. [Header](/docs/knowledge/components/header.md)
2. `<main>` containing `<Outlet />` (the matched child route)
3. [Footer](/docs/knowledge/components/footer.md)

No props, no state. All page-level components render inside this shell.
