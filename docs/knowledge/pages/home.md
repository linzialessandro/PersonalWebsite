---
type: Concept
title: Home Page
description: Landing page with hero section, terminal-style profile, Principia Mathematica quote, and Site Info Modal trigger.
resource: src/pages/Home.jsx
tags: [pages, home, hero]
timestamp: 2026-06-30T18:35:00Z
---

# Home Page

The landing page at route `/`. Two-column grid on desktop (`lg` breakpoint): left column has identity and branding, right column has a [TerminalWindow](/docs/knowledge/components/terminal-window.md) running `cat profile.txt`.

## Left Column

- Status badge: "Research Profile" with pulsing green dot.
- Name: "Alessandro Linzi".
- Tagline: mathematician specializing in model theory of valued fields, constructive logic, and foundations of computation.
- CTA buttons: mailto link ("Contact Me"), internal link to `/publications`.
- Social icons: GitHub, LinkedIn.

## Right Column

A [TerminalWindow](/docs/knowledge/components/terminal-window.md) with title `cat profile.txt` and 300ms delay, containing three sections: `EXPERTISE`, `RESEARCH_INTERESTS`, `ACADEMIC_EXPERIENCE`.

## Quote Section

A Framer Motion `whileInView` reveal block quoting Bertrand Russell's _Principia Mathematica_ (1912) on the proposition 1+1=2.

## Site Info Button

A fixed-position `Info` icon button in the bottom-right corner triggers the [SiteInfoModal](/docs/knowledge/components/site-info-modal.md).
