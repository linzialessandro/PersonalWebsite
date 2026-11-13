# AI study guides (LaTeX sources)

Sources for the PDFs linked from the Teaching page: the three "Working with AI" guides and _Getting Started with Lean_ (For students → Formalizing mathematics in Lean).
Shared style: `aiguide.sty` (TeX Gyre Pagella, Prussian-blue accent).

Build with pdfLaTeX and copy the PDFs into `public/guides/`:

```sh
cd guides-src
for f in studying-mathematics-with-ai which-ai-tool-for-which-job spotting-ai-mistakes-in-mathematics getting-started-with-lean; do
  latexmk -pdf -interaction=nonstopmode -halt-on-error "$f.tex"
  cp "$f.pdf" ../public/guides/
done
latexmk -c
```

Keep the tool facts in `which-ai-tool-for-which-job.tex` in sync with `src/data/aiGuide.js`.

The Lean example in `getting-started-with-lean.tex` is in `lean/GettingStartedExample.lean`; check it with `lean lean/GettingStartedExample.lean` after any edit.
