---
type: Concept
title: AI Gallery Data
description: Static dataset of 9 AI-generated mathematician dialogues (PDFs) and 2 mathematical poems.
resource: src/data/aiGallery.js
tags: [data, ai, gallery, creative]
timestamp: 2026-06-30T18:35:00Z
---

# AI Gallery Data

Exports two arrays consumed by [AI Gallery Page](/docs/knowledge/pages/ai-gallery.md).

| Export      | Count | Description                                                   |
| ----------- | ----- | ------------------------------------------------------------- |
| `dialogues` | 9     | PDF dialogues with historical mathematicians                  |
| `poetry`    | 2     | Mathematical poems ("The Riemann Zeta", "Fibonacci's Spiral") |

Dialogue PDFs are imported from `src/assets/Dialogues/`. One entry (Bellavitis) is marked `lang: "IT"` (Italian).
