---
type: Concept
title: Teaching Data
description: Static dataset defining 10 teaching resource sections with heterogeneous content types.
resource: src/data/teaching.js
tags: [data, teaching, resources]
timestamp: 2026-06-30T18:35:00Z
---

# Teaching Data

Exports a single array `teachingSections` consumed by [Teaching Page](/docs/knowledge/pages/teaching.md). Each section has an `id`, `title`, and `type` that determines rendering:

| Type         | Behaviour                           |
| ------------ | ----------------------------------- |
| `list`       | Bulleted items with optional links  |
| `text`       | Paragraph with optional inline link |
| `download`   | PDF download card                   |
| `links-list` | List of external resource links     |
| `app`        | App showcase with action buttons    |
| `quote`      | Highlighted quote block             |

Imports `FirstTeX.pdf` from assets for the LaTeX download section.
