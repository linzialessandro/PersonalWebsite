---
type: Concept
title: Publications Page
description: Academic publications page with three sections — published papers, preprints, and submitted manuscripts.
resource: src/pages/Publications.jsx
tags: [pages, publications, research]
timestamp: 2026-08-13T12:00:00Z
---

# Publications Page

Route: `/publications`. Renders three sections using data from [Publications Data](/data/publications-data.md).

## Sections

| Section   | Data export    | Count     |
| --------- | -------------- | --------- |
| Published | `publications` | 12 papers |
| Preprints | `preprints`    | 3 papers  |
| Submitted | `submissions`  | 1 paper   |

Each entry is rendered via [PublicationItem](/components/publication-item.md). The author name "A. Linzi" is bolded in every entry.
