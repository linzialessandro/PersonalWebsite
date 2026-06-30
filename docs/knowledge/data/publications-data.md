---
type: Concept
title: Publications Data
description: Static dataset of 12 published papers, 1 preprint, and 3 submitted manuscripts with DOI links.
resource: src/data/publications.js
tags: [data, publications, research]
timestamp: 2026-06-30T18:35:00Z
---

# Publications Data

Exports three arrays consumed by [Publications Page](/docs/knowledge/pages/publications.md).

| Export         | Count | Description                  |
| -------------- | ----- | ---------------------------- |
| `publications` | 12    | Published papers (2019–2025) |
| `preprints`    | 1     | arXiv preprints              |
| `submissions`  | 3     | Manuscripts under review     |

Each entry has: `id`, `title`, `authors`, `journal`, `link` (DOI URL or null), and optional `linkText`.

Journals represented include: Journal of Algebra, Israel Journal of Mathematics, AIMS Mathematics, Journal of Pure and Applied Algebra, Italian Journal of Pure and Applied Mathematics.
