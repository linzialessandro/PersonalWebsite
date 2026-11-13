export const formalization = {
  id: "formalization",
  title: "Formalized mathematics",
  repoUrl: "https://github.com/linzialessandro/FundamentalInequality",
  bookUrl: "https://www.fvkuhlmann.de/Fvkbook.htm",
  // Intro prose as segments: plain text, italic text, or a link to a named URL.
  intro: [
    {
      text: "I am preparing submissions to Mathlib on valuation theory, following F.-V. Kuhlmann\u2019s book in preparation, ",
    },
    { link: "bookUrl", text: "Valuation Theory", italic: true },
    { text: ". It is a long-term project, and the " },
    { link: "repoUrl", text: "FundamentalInequality" },
    {
      text: " repository shows how far this work has come so far: a Lean 4 and Mathlib formalization of the simple fundamental inequality for finite extensions of valued fields, following Chapter 6 (\u00a76.3, Lemmas 6.12 and 6.13). The development is complete, with no sorry.",
    },
  ],
  // Display inequality: strings are upright, { v } entries are italic variables.
  inequality: [
    { v: "e" },
    "(",
    { v: "L" },
    "/",
    { v: "K" },
    ") ",
    { v: "f" },
    "(",
    { v: "L" },
    "/",
    { v: "K" },
    ") \u2264 [",
    { v: "L" },
    ":",
    { v: "K" },
    "]",
  ],
  inequalityLabel:
    "e of L over K times f of L over K is at most the degree of L over K",
  resultsHeading: "Key results",
  results: [
    ["Residue degree ", { v: "f" }, " and ramification index ", { v: "e" }],
    ["Multiplicativity in towers"],
    ["Immediate if and only if ", { v: "e" }, " = ", { v: "f" }, " = 1"],
    ["Valuation independence (Kuhlmann Lemma 6.12)"],
    ["The fundamental inequality (Lemma 6.13)"],
  ],
  leanVersion: "Lean 4.36 (rc1), Mathlib",
  links: [
    { label: "FundamentalInequality on GitHub", href: "repoUrl" },
    { label: "Kuhlmann, Valuation Theory", href: "bookUrl" },
  ],
};
