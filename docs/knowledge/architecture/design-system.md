---
type: Concept
title: Design System
description: Design tokens, typography, and component classes defined in index.css and applied via Tailwind CSS 4.
resource: src/index.css
tags: [architecture, design, css, tokens]
timestamp: 2026-10-28T12:00:00Z
---

# Design System

The visual language is defined in `src/index.css` using Tailwind CSS 4's `@theme` directive, `@layer base`, and `@layer components`. See `docs/design-plan-oct2026.md` for the full specification.

## Color Tokens

| Token                      | Value     | Usage                               |
| -------------------------- | --------- | ----------------------------------- |
| `--color-background`       | `#f6f6f2` | Archival Stone Paper page canvas    |
| `--color-on-primary`       | `#f6f6f2` | Text on primary accent fills        |
| `--color-secondary`        | `#edebe4` | Folio Ledger Wash recessed surfaces |
| `--color-muted`            | `#edebe4` | Muted plate wash                    |
| `--color-foreground`       | `#16181d` | Carbon Ink primary text and titles  |
| `--color-primary`          | `#16181d` | Primary structural ink              |
| `--color-muted-foreground` | `#525866` | Slate Marginalia secondary metadata |
| `--color-accent`           | `#1b3b6f` | Prussian Theorem Ink links/actions  |
| `--color-accent-cyan`      | `#1b3b6f` | Unified academic link accent        |
| `--color-border`           | `#d6d4cc` | Hairline ledger rules               |

## Typography

| Token            | Font                    | Usage                                     |
| ---------------- | ----------------------- | ----------------------------------------- |
| `--font-heading` | Newsreader / book serif | Headings (`h1` to `h6`), epigraph, kicker |
| `--font-body`    | Source Sans 3 / Archivo | Body copy, navigation, tabular metadata   |

`Newsreader` and `Source Sans 3` are linked in `index.html`, and `@fontsource/archivo` (weights 400, 500, and 600 with `latin-ext`) is imported in `src/main.jsx` as a self-hosted fallback.

## Component layer

`site-masthead`, `page-shell`, `monograph-hero`, `seminar-index`, `page-header`, `index-plate`, `year-group`, `pub-item`, `btn`, `btn-outline`, `btn-primary`, `text-link`, `timeline`, `modal-overlay`.
