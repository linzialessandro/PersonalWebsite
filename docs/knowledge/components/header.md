---
type: Concept
title: Header Component
description: Sticky top navigation bar with terminal-style branding and responsive mobile menu.
resource: src/components/Header.jsx
tags: [components, navigation, ui]
timestamp: 2026-06-30T18:33:00Z
---

# Header Component

A sticky header rendered at the top of every page via [Layout](/docs/knowledge/components/layout.md). Styled as a rounded pill with glassmorphism (`backdrop-blur-xl`, `bg-background/80`).

## Branding

Displays a terminal-style prompt: `alessandro@website:~$` followed by a `cd /home` link (routes to `/`).

## Navigation

Defines a `navLinks` array with five entries:

| Label               | Route           |
| ------------------- | --------------- |
| `./cv.sh`           | `/cv`           |
| `./research.sh`     | `/publications` |
| `./teaching.sh`     | `/teaching`     |
| `./academic-net.sh` | `/academic-net` |
| `./ai-gallery.sh`   | `/ai-gallery`   |

Active route detection uses `useLocation().pathname` for exact matching. Active links get an accent background and inset border shadow.

## Responsive Behaviour

- **Desktop (`lg+`)**: Horizontal nav rendered inline inside the pill.
- **Mobile (`< lg`)**: A hamburger toggle (`Menu` / `X` from Lucide) controls a Framer Motion animated dropdown panel below the header. Clicking any link calls `closeMenu`.
