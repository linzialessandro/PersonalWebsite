---
type: Concept
title: Publications Page
description: Academic publications page with three sections — published papers, preprints, and submitted manuscripts.
resource: src/pages/Publications.jsx
tags: [pages, publications, research]
timestamp: 2026-06-30T18:35:00Z
---

# Publications Page

Route: `/publications`. Renders three sections using data from [Publications Data](/docs/knowledge/data/publications-data.md).

## Sections

| Section   | Data export    | Count     |
| --------- | -------------- | --------- |
| Published | `publications` | 12 papers |
| Preprints | `preprints`    | 1 paper   |
| Submitted | `submissions`  | 3 papers  |

Each entry is rendered via [PublicationItem](/docs/knowledge/components/publication-item.md). The author name "A. Linzi" is bolded in every entry.
