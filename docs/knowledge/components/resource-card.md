---
type: Concept
title: ResourceCard Component
description: Reusable card for linking to external resources or downloads, with an icon, title, subtitle, and action button.
resource: src/components/ResourceCard.jsx
tags: [components, ui, resources]
timestamp: 2026-06-30T18:33:00Z
---

# ResourceCard Component

A stateless card used on pages like Teaching or CV to present downloadable or linkable resources.

## Props

| Prop          | Type             | Default                   | Description                                                    |
| ------------- | ---------------- | ------------------------- | -------------------------------------------------------------- |
| `title`       | string           | —                         | Primary label                                                  |
| `subtitle`    | string           | —                         | Optional secondary text                                        |
| `icon`        | Lucide component | —                         | Icon rendered in a colored circle                              |
| `color`       | string (rgba)    | —                         | Accent color for icon background and tint                      |
| `link`        | string           | —                         | URL for the action button                                      |
| `linkText`    | string           | `"Open"` / `"Download"`   | Button label                                                   |
| `isDownload`  | boolean          | —                         | When true, triggers browser download and shows a Download icon |
| `bgOpacity`   | string           | `"0.2"`                   | Icon background opacity                                        |
| `borderColor` | string           | `"rgba(255,255,255,0.1)"` | Card border                                                    |

## Styling

Glassmorphism card (`rgba(255,255,255,0.05)` background, `12px` border-radius). The icon sits inside a circular tinted container derived from the `color` prop.
