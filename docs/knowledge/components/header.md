---
type: Concept
title: Header Component
description: Sticky top navigation bar with terminal-style branding and an accessible mobile menu.
resource: src/components/Header.jsx
tags: [components, navigation, ui]
timestamp: 2026-08-13T12:00:00Z
---

# Header Component

A sticky header rendered at the top of every page via [Layout](/components/layout.md). Nav items come from `src/data/nav.js`.

## Responsive Behaviour

- **Desktop (`lg+`)**: Horizontal nav rendered inline inside the pill.
- **Mobile (`< lg`)**: A disclosure button (`aria-expanded`, `aria-controls`) opens a dropdown. Escape, outside click, and route changes close it and restore focus to the toggle.
