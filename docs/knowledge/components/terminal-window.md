---
type: Concept
title: Terminal Window Component
description: Styled container that mimics a macOS terminal window with traffic-light buttons and a blinking cursor animation.
resource: src/components/TerminalWindow.jsx
tags: [components, ui, framer-motion]
timestamp: 2026-06-30T18:33:00Z
---

# Terminal Window Component

A presentation wrapper that renders its children inside a terminal-themed frame. Used by [Site Info Modal](/docs/knowledge/components/site-info-modal.md) and the Home page hero.

## Props

| Prop       | Type        | Default  | Description                               |
| ---------- | ----------- | -------- | ----------------------------------------- |
| `title`    | string      | `"bash"` | Text shown centred in the title bar       |
| `children` | ReactNode   | —        | Content rendered inside the terminal body |
| `delay`    | number (ms) | `0`      | Delay before content becomes visible      |

## Rendering Sequence

1. On mount, a `setTimeout` of `delay` ms sets `isVisible` to `true`.
2. Once visible, the content fades in with a stagger animation (`staggerChildren: 0.1`, `delayChildren: 0.2`) via Framer Motion variants.
3. A blinking green cursor (`bg-accent`, CSS `blink` keyframe at `1s step-end infinite`) appears after the content.

## Structure

- **Title bar**: `bg-secondary/40` with three coloured dots (red, yellow, green) and a centred monospace title.
- **Body**: `bg-[#0a0a0a]/90` with `backdrop-blur-md`, minimum height `200px`, monospace font.
