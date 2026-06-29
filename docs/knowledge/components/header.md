---
type: Concept
title: Header Component
description: The main navigation header for the website.
resource: src/components/Header.jsx
tags: [components, navigation, ui]
timestamp: 2026-06-29T21:50:00Z
---

# Header Component

The `Header` component is rendered at the top of the application across all pages.

## Location

Located at `src/components/Header.jsx`.

## Responsibilities

- Houses the primary navigation links to pages such as Home, CV, Publications, Teaching, etc.
- Manages responsive design (mobile hamburger menu vs. desktop navigation).
- Often includes branding or logo elements.
- Integrates with React Router (`<Link>` or `<NavLink>`) to handle client-side route changes without page reloads.
