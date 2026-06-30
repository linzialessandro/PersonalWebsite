---
type: Concept
title: Teaching Page
description: Teaching resources page with 10 content sections covering books, LaTeX guides, apps, AI literacy, coding tools, and math competitions.
resource: src/pages/Teaching.jsx
tags: [pages, teaching, resources]
timestamp: 2026-06-30T18:35:00Z
---

# Teaching Page

Route: `/teaching`. The largest page by source size (16 KB). Renders content from [Teaching Data](/docs/knowledge/data/teaching-data.md).

## Content Sections

The data defines 10 sections, each with a `type` field that determines rendering:

| Section ID           | Type       | Content                                                    |
| -------------------- | ---------- | ---------------------------------------------------------- |
| `book`               | list       | Slovenian engineering math textbook                        |
| `geogebra`           | text       | GeoGebra platform link                                     |
| `first-tex`          | download   | LaTeX presentation PDF download                            |
| `latex-resources`    | links-list | LaTeX learning resources (English + Italian subsection)    |
| `matematician`       | app        | Mate-matician app (MacTutor biographies, Google AI Studio) |
| `ai-literacy`        | text       | Google AI Literacy Guide link                              |
| `prompt-engineering` | quote      | Socratic tutoring prompt example                           |
| `interactive-coding` | links-list | Python/Colab/SciPy resources                               |
| `modern-vis`         | links-list | Desmos, 3Blue1Brown, Manim                                 |
| `math-comp`          | links-list | Project Euler, AoPS                                        |

Uses [ResourceCard](/docs/knowledge/components/resource-card.md) for download items.
