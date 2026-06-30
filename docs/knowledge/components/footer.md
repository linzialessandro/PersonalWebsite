---
type: Concept
title: Footer Component
description: Site-wide footer with copyright notice and social links (Email, GitHub, LinkedIn).
resource: src/components/Footer.jsx
tags: [components, ui, navigation]
timestamp: 2026-06-30T18:33:00Z
---

# Footer Component

A stateless footer rendered at the bottom of every page via [Layout](/docs/knowledge/components/layout.md).

## Content

- Copyright line: `© {currentYear} Alessandro Linzi. All rights reserved.`
- Three icon links (Lucide icons): Email (`mailto:`), GitHub, LinkedIn. Each opens in a new tab with `noopener noreferrer`.

## Styling

Uses glassmorphism (`backdrop-blur-md`, `bg-background/50`) and a top border. Responsive flex layout stacks vertically on mobile, row on `md+`.
