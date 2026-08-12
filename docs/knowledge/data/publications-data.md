---
type: Concept
title: Publications Data
description: Static dataset of 12 published papers, 3 preprints, and 1 submitted manuscript with DOI links.
resource: src/data/publications.js
tags: [data, publications, research]
timestamp: 2026-08-13T12:00:00Z
---

# Publications Data

Exports three arrays consumed by [Publications Page](/pages/publications.md).

| Export         | Count | Description                  |
| -------------- | ----- | ---------------------------- |
| `publications` | 12    | Published papers (2019–2025) |
| `preprints`    | 3     | arXiv preprints              |
| `submissions`  | 1     | Manuscripts under review     |

Each entry has: `id`, `title`, `authors`, `journal`, `link` (DOI URL or null), and optional `linkText`.
