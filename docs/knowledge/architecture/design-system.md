---
type: Concept
title: Design System
description: Design tokens, typography, and component classes defined in index.css and applied via Tailwind CSS 4.
resource: src/index.css
tags: [architecture, design, css, tokens]
timestamp: 2026-08-13T12:00:00Z
---

# Design System

The visual language is defined in `src/index.css` using Tailwind CSS 4's `@theme` directive, `@layer base`, and `@layer components`.

## Color Tokens

| Token                      | Value     | Usage                                       |
| -------------------------- | --------- | ------------------------------------------- |
| `--color-primary`          | `#0f172a` | Dark blue base                              |
| `--color-background`       | `#020617` | Page background                             |
| `--color-foreground`       | `#f8fafc` | Primary text                                |
| `--color-muted-foreground` | `#94a3b8` | Secondary text, nav, quotes                 |
| `--color-accent`           | `#22c55e` | Green accent (links, active states, cursor) |
| `--color-accent-cyan`      | `#06b6d4` | Cyan accent (headings, in-page links)       |
| `--color-secondary`        | `#1e293b` | Card/panel backgrounds                      |
| `--color-muted`            | `#1a1e2f` | Subdued backgrounds                         |
| `--color-border`           | `#334155` | Border color                                |
| `--color-terminal`         | `#0a0a0a` | Terminal window background                  |

## Typography

| Token            | Font           | Usage                     |
| ---------------- | -------------- | ------------------------- |
| `--font-heading` | Archivo        | Headings (h1–h6)          |
| `--font-body`    | Space Grotesk  | Body text                 |
| `--font-mono`    | JetBrains Mono | Code, terminal, nav links |

All three fonts are self-hosted via `@fontsource` and imported from `src/main.jsx`.

## Component layer

Shared classes used by inner pages: `page-shell`, `glass-card`, `pub-item`, `resource-card`, `btn`, `btn-outline`, `btn-primary`, `text-link`, `quote-section`, `modal-overlay`.

## Motion

`MotionConfig reducedMotion="user"` wraps the app. A `prefers-reduced-motion` CSS rule disables non-essential animation.
