---
type: Concept
title: Design System
description: Design tokens, typography, and visual language defined in index.css and applied via Tailwind CSS 4 theme config.
resource: src/index.css
tags: [architecture, design, css, tokens]
timestamp: 2026-06-30T18:35:00Z
---

# Design System

The visual language is defined in `src/index.css` using Tailwind CSS 4's `@theme` directive and `@layer base` rules.

## Color Tokens

| Token                 | Value     | Usage                                       |
| --------------------- | --------- | ------------------------------------------- |
| `--color-primary`     | `#0f172a` | Dark blue base                              |
| `--color-background`  | `#020617` | Page background                             |
| `--color-foreground`  | `#f8fafc` | Primary text                                |
| `--color-accent`      | `#22c55e` | Green accent (links, active states, cursor) |
| `--color-accent-cyan` | `#06b6d4` | Cyan accent (headings, grid pattern)        |
| `--color-secondary`   | `#1e293b` | Card/panel backgrounds                      |
| `--color-muted`       | `#1a1e2f` | Subdued backgrounds                         |
| `--color-border`      | `#334155` | Border color                                |
| `--color-terminal`    | `#0a0a0a` | Terminal window background                  |

## Typography

| Token            | Font           | Usage                     |
| ---------------- | -------------- | ------------------------- |
| `--font-heading` | Archivo        | Headings (h1–h6)          |
| `--font-body`    | Space Grotesk  | Body text                 |
| `--font-mono`    | JetBrains Mono | Code, terminal, nav links |

All three fonts are loaded from Google Fonts.

## Base Layer

- Body has a subtle cyan grid pattern background (`20px × 20px`).
- Text selection is green-tinted (`rgba(34, 197, 94, 0.3)`).
- Headings have a subtle cyan drop-shadow glow.
- A global `blink` keyframe animation drives the terminal cursor.

## Visual Identity

The overall aesthetic is a **dark terminal theme** — dark backgrounds, monospace navigation, green/cyan accents, and glassmorphism (`backdrop-blur`, translucent backgrounds) throughout.
