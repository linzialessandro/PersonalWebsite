export const leanLastChecked = "November 2026";

export const leanIntro = [
  "A proof assistant is a program that checks proofs. You write each step in a precise language, and the computer accepts the proof only when every step follows from the previous ones. Nothing is left as “clearly” or “similarly”.",
  "Lean 4 is an open-source programming language and proof assistant. Mathlib is its community library of formalized mathematics, from algebra and number theory to analysis and topology.",
  "Formalizing is worth trying even for a short exercise. You find out exactly what a proof needs: which hypothesis is used where, which case you forgot, which step you only believed. The games below run in the browser, so you can start in five minutes.",
];

export const leanGuide = {
  file: "getting-started-with-lean.pdf",
  title: "Getting Started with Lean",
  description:
    "What Lean is, a first proof by induction, a learning path, and these links.",
};

export const leanResources = [
  {
    url: "https://adam.math.hhu.de/#/g/leanprover-community/nng4",
    label: "Natural Number Game",
    suffix:
      " — start here: rebuild the natural numbers from the Peano axioms in the browser; available in Italian too",
  },
  {
    url: "https://adam.math.hhu.de/",
    label: "Lean Game Server",
    suffix:
      " — more games after that, such as Scribble (first-year university topics), Set Theory, Number Theory, and Real Analysis",
  },
  {
    url: "https://live.lean-lang.org/",
    label: "Lean 4 Web",
    suffix:
      " — the official web editor: try small Lean snippets, with Mathlib, before you install anything",
  },
  {
    url: "https://lean-lang.org/install/",
    label: "Install Lean",
    suffix:
      " — official instructions: VS Code with the Lean 4 extension, from the Lean website",
  },
  {
    url: "https://leanprover-community.github.io/mathematics_in_lean/",
    label: "Mathematics in Lean",
    suffix:
      " — the standard tutorial for doing mathematics with Mathlib: logic, sets and functions, number theory, algebra, topology, calculus",
  },
  {
    url: "https://lean-lang.org/theorem_proving_in_lean4/",
    label: "Theorem Proving in Lean 4",
    suffix:
      " — how Lean works underneath: dependent type theory, propositions as types, and tactics",
  },
  {
    url: "https://www.ma.imperial.ac.uk/~buzzard/xena/formalising-mathematics-2024/",
    label: "Formalising Mathematics",
    suffix:
      " — Kevin Buzzard’s handbook for his Imperial College course, written for final-year undergraduates",
  },
  {
    url: "https://mathlib.org/",
    label: "Mathlib",
    extra: {
      url: "https://leanprover-community.github.io/mathlib4_docs/",
      label: "its documentation",
    },
    suffix: " — what is already formalized, and the full API",
  },
  {
    url: "https://loogle.lean-lang.org/",
    label: "Loogle",
    suffix:
      " — search Mathlib for a lemma by name, by a constant it mentions, or by the shape of its statement",
  },
  {
    url: "https://leanprover.zulipchat.com/",
    label: "Lean Zulip",
    suffix:
      " — the community chat; ask your first questions in the new members channel",
  },
];
