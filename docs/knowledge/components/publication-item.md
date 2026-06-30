---
type: Concept
title: PublicationItem Component
description: Card component that renders a single academic publication with title, authors, journal, and optional external link.
resource: src/components/PublicationItem.jsx
tags: [components, ui, publications]
timestamp: 2026-06-30T18:33:00Z
---

# PublicationItem Component

A stateless card that receives a `pub` object and an optional `index` number.

## Props

| Prop    | Type   | Description                                                |
| ------- | ------ | ---------------------------------------------------------- |
| `pub`   | object | Contains `title`, `authors`, `journal`, `link`, `linkText` |
| `index` | number | Optional numeric prefix for ordered lists                  |

## Behaviour

- Renders a `glass-card` div with the publication title, author list, and journal.
- Bolds "A. Linzi" in the author string by splitting on that name and wrapping matches in `<strong>`.
- Conditionally renders an external link (`↗`) when `pub.link` is present. Defaults label to "View Publication" if `pub.linkText` is absent.
