---
type: Concept
title: Site Info Modal
description: Overlay modal displaying open-source license, privacy policy, and acknowledgements inside a TerminalWindow frame.
resource: src/components/SiteInfoModal.jsx
tags: [components, ui, modal]
timestamp: 2026-06-30T18:33:00Z
---

# Site Info Modal

A controlled modal (`isOpen` / `onClose` props) that renders three info blocks — Open Source, Privacy, and Acknowledgements — inside a [TerminalWindow](/docs/knowledge/components/terminal-window.md) with the title `./site_info.sh`.

## Behaviour

- Returns `null` when `isOpen` is false (no DOM output).
- Clicking the backdrop overlay calls `onClose`; clicks inside the content are stopped via `stopPropagation`.
- A close button (`X` icon from Lucide) sits in the top-right corner.

## Content Blocks

| Block            | Summary                                                         |
| ---------------- | --------------------------------------------------------------- |
| Open Source      | MIT License, links to GitHub                                    |
| Privacy          | No cookies or trackers; only Google Search Console for indexing |
| Acknowledgements | Credit to AI agents used during development                     |
