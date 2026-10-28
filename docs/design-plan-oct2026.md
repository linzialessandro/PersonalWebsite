# Visual system design plan (October 2026)

## Subject, audience, and job to be done

- **Subject.** Alessandro Linzi, PhD, is a mathematician and teacher in Udine, Italy. His work covers the model theory of valued fields, algebraic hyperstructures, and the computational interpretation of logic.
- **Audience.** Academic peers and collaborators looking up papers and preprints, mathematics students looking for course books, LaTeX guides, and study tools, and academic or technical recruiters reviewing appointments, degrees, and publications.
- **Job to be done.** Present mathematical research, teaching materials, and curriculum vitae records with the clarity of a printed mathematical monograph or journal offprint so visitors can scan, cite, and download material without marketing chrome.

## Color palette

Five named hex colors define the palette. They draw from archival monograph paper, carbon printing ink, and Prussian blue fountain-pen ink. Every text pairing meets WCAG AA or AAA contrast requirements.

| Role             | Name                     | Hex       | CSS tokens                                 | Contrast on `#F6F6F2` |
| :--------------- | :----------------------- | :-------- | :----------------------------------------- | :-------------------- |
| Primary canvas   | **Archival Stone Paper** | `#F6F6F2` | `--color-background`, `--color-on-primary` | 1.0:1 (paper stock)   |
| Recessed surface | **Folio Ledger Wash**    | `#EDEBE4` | `--color-secondary`, `--color-muted`       | 1.09:1 (plate wash)   |
| Primary ink      | **Carbon Ink**           | `#16181D` | `--color-foreground`, `--color-primary`    | 16.2:1 (AAA)          |
| Secondary ink    | **Slate Marginalia**     | `#525866` | `--color-muted-foreground`                 | 6.7:1 (AA)            |
| Academic accent  | **Prussian Theorem Ink** | `#1B3B6F` | `--color-accent`, `--color-accent-cyan`    | 10.1:1 (AAA)          |

Structural hairline dividers use `--color-border: #D6D4CC`, mixed along the axis between Archival Stone Paper and Carbon Ink.

## Typefaces and roles

- **Heading and editorial serif (`--font-heading`).** `"Newsreader", "Iowan Old Style", "Charter", "Palatino Linotype", Georgia, serif`. Used for page titles (`h1`), section headings (`h2`), publication and institution titles (`h3`), the home page research statement, and sentence-case italic section kickers. Loaded via Google Fonts in `index.html` with classical book-serif fallbacks.
- **Body and tabular sans (`--font-body`).** `"Source Sans 3", "Archivo", system-ui, -apple-system, sans-serif`. Used for body copy, navigation links, co-author lists, journal metadata, and student resource descriptions. Loaded via Google Fonts in `index.html` alongside self-hosted `@fontsource/archivo` (weights 400, 500, and 600, including `latin-ext` for Polish diacritics such as `Kędzierski` and `Stojałowska`). Dates, publication years, and index numerals use `font-variant-numeric: tabular-nums`.

## Layout concept and alignment

- **Shared ledger measure.** The running-head header, `.page-shell`, and footer align to a single `66rem` (`1056px`) container with `1.5rem` horizontal padding on mobile and `2rem` on desktop.
- **Running-head masthead.** Replaces the floating blurred pill header with a full-width sticky running head (`background: #F6F6F2`, `border-bottom: 1px solid #D6D4CC`). Active navigation items sit flush against the bottom border with a `2px solid #1B3B6F` underline.
- **Memorable hero moment (Monograph Title Plate and Research Ledger).** On `Home.jsx`, a double top ledger rule (`2px solid #16181D` above a `1px solid #D6D4CC` hairline) frames an asymmetric two-column layout on desktop (`7fr` left dossier, `5fr` right research index). The left column pairs a rectangular archival portrait (`border-radius: 2px`, `1px solid #D6D4CC` frame) with a sentence-case italic rubric, a Newsreader display heading, and an italicized serif research statement. The right column presents `Areas of work` above the fold as a numbered three-part index (`01`, `02`, `03`) divided by hairline rules.
- **Flush-left marginalia and ruled index plates.** On `Publications.jsx` and `CV.jsx`, years and date ranges sit in a dedicated left column (`tabular-nums`) beside bottom-bordered content rows. Across `Teaching.jsx` and `AIGallery.jsx`, flat ruled index plates (`background: #EDEBE4`, `border: 1px solid #D6D4CC`, `border-left: 2px solid #1B3B6F`, `border-radius: 0`) replace rounded translucent cards.

## Design principles

1. **Ink and paper over glass and glow.** Remove the `#020617` dark background, `#22c55e` acid green, `#06b6d4` 24px cyan grid, `backdrop-filter` blurs, and drop shadows. Hierarchy comes from Carbon Ink (`#16181D`) and Prussian Theorem Ink (`#1B3B6F`) on Archival Stone Paper (`#F6F6F2`).
2. **Ruled ledgers over SaaS cards.** Structure publications, timelines, collaborators, and teaching materials as flat horizontal rows and sharp-cornered plates bounded by `1px` hairlines and `2px` accent rules.
3. **Sentence-case scholarly hierarchy.** Signal structure with serif and sans contrast, italics, and tabular numerals instead of uppercase tracking, middle-dot separators, decorative monospace badges, or link arrows.
4. **Token-bound contrast and quiet motion.** Bind every component color to `@theme` variables, keep `2px solid #1B3B6F` focus outlines visible on all interactive controls, and limit motion to `150ms` color transitions that disable under `prefers-reduced-motion: reduce`.

## Audit against AI-default tells

- **No dark acid-green cyber grid.** Replaces `#020617`, `#22c55e`, `#06b6d4`, and the 24px `body` linear-gradient grid with `#F6F6F2` paper and `#1B3B6F` Prussian ink.
- **No warm cream and `#D97757` terracotta.** Uses cool mineral `#F6F6F2` and `#1B3B6F` Prussian blue.
- **No Gumroad palette or Domine.** Avoids `Domine`, `#0B1C2C`, and `#B08D57`.
- **No SaaS rounded cards or soft shadows.** Removes `rounded-2xl` header pills, `backdrop-blur`, `box-shadow` washes, and rounded `.glass-card` boxes.
- **No ALL-CAPS eyebrows.** Removes `text-transform: uppercase` and wide letter-spacing from `.page-kicker`, `.pub-year`, and language tags in `AIGallery.jsx`.
- **No middle-dot meta strings.** Replaces `·` separators in `Home.jsx`, `CV.jsx`, `PublicationItem.jsx`, and `PageMeta.jsx` with standard punctuation.
- **No arrows on links.** Removes `<ArrowRight />` from the primary action link on `Home.jsx`.
