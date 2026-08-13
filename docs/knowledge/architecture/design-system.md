---
type: Concept
title: Design System
description: Design tokens, typography, and component classes defined in index.css and applied via Tailwind CSS 4.
resource: src/index.css
tags: [architecture, design, css, tokens]
timestamp: 2026-08-13T20:00:00Z
---

# Design System

The visual language is defined in `src/index.css` using Tailwind CSS 4's `@theme` directive, `@layer base`, and `@layer components`.

## Color Tokens

| Token                      | Value     | Usage                         |
| -------------------------- | --------- | ----------------------------- |
| `--color-background`       | `#020617` | Page background               |
| `--color-foreground`       | `#f8fafc` | Primary text                  |
| `--color-muted-foreground` | `#94a3b8` | Secondary text, nav           |
| `--color-accent`           | `#22c55e` | Links, active states, buttons |
| `--color-accent-cyan`      | `#06b6d4` | In-page links                 |
| `--color-secondary`        | `#1e293b` | Panels                        |
| `--color-border`           | `#334155` | Borders                       |

## Typography

| Token            | Font          | Usage            |
| ---------------- | ------------- | ---------------- |
| `--font-heading` | Archivo       | Headings (h1–h6) |
| `--font-body`    | Space Grotesk | Body text        |

Archivo and Space Grotesk are self-hosted via `@fontsource` and imported from `src/main.jsx`.

## Component layer

`page-shell`, `page-header`, `glass-card`, `pub-item`, `btn`, `btn-outline`, `btn-primary`, `text-link`, `timeline`, `modal-overlay`.
