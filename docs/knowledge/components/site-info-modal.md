---
type: Concept
title: Site Info Modal
description: Accessible dialog overlay for license, privacy, and acknowledgements.
resource: src/components/SiteInfoModal.jsx
tags: [components, ui, modal]
timestamp: 2026-08-13T12:00:00Z
---

# Site Info Modal

A controlled dialog (`isOpen` / `onClose`) portaled to `document.body`. It uses `role="dialog"`, `aria-modal`, a focus trap, Escape to close, and restores focus to the opener.

## Content Blocks

| Block            | Summary                                                        |
| ---------------- | -------------------------------------------------------------- |
| Open Source      | MIT License, links to GitHub                                   |
| Privacy          | No cookies or trackers; self-hosted fonts; Search Console only |
| Acknowledgements | Credit to AI agents used during development                    |
