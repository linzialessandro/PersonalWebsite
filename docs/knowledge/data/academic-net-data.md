---
type: Concept
title: Academic Network Data
description: Static dataset of 9 research collaborators and 5 academic community links.
resource: src/data/academicNet.js
tags: [data, network, collaborators]
timestamp: 2026-06-30T18:35:00Z
---

# Academic Network Data

Exports two arrays consumed by [Academic Network Page](/docs/knowledge/pages/academic-net.md).

| Export       | Count | Description                                                         |
| ------------ | ----- | ------------------------------------------------------------------- |
| `colleagues` | 9     | Collaborator profiles with name, optional website, and social links |
| `otherLinks` | 5     | External academic resource links                                    |

Collaborator entries have: `name`, optional `url` (personal website), and `links` array (LinkedIn, ResearchGate, GitHub).
