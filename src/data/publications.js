export const publications = [
  {
    id: 1,
    title: "Oettli-Théra and Caristi-Kirk ball spaces and applications.",
    authors: "P. Blaszkiewicz, H. Cmiel, A. Linzi, P. Szewczyk.",
    venue: "Journal of Fixed Point Theory and Applications",
    year: 2019,
    link: "https://doi.org/10.1007/s11784-019-0729-4",
  },
  {
    id: 2,
    title: "Orderings and valuations in hyperfields.",
    authors: "K. Kuhlmann, A. Linzi, H. Stojalowska.",
    venue: "Journal of Algebra",
    year: 2022,
    link: "https://doi.org/10.1016/j.jalgebra.2022.08.006",
    selected: true,
  },
  {
    id: 3,
    title:
      "Characteristic, C-characteristic and positive cones in hyperfields.",
    authors: "D. E. Kędzierski, A. Linzi and H. Stojalowska.",
    venue: "Mathematics",
    year: 2023,
    link: "https://doi.org/10.3390/math11030779",
  },
  {
    id: 4,
    title: "Dependence relations and grade fuzzy set.",
    authors: "A. Linzi and I. Cristea.",
    venue: "Symmetry",
    year: 2023,
    link: "https://doi.org/10.3390/sym15020311",
  },
  {
    id: 5,
    title: "A result of Krasner in categorial form.",
    authors: "A. Linzi.",
    venue: "Mathematics",
    year: 2023,
    link: "https://doi.org/10.3390/math11244923",
  },
  {
    id: 6,
    title: "Polygroup objects in regular categories.",
    authors: "A. Linzi.",
    venue: "AIMS Mathematics",
    year: 2024,
    link: "https://doi.org/10.3934/math.2024552",
  },
  {
    id: 7,
    title: "Notes on valuation theory for Krasner hyperfields.",
    authors: "A. Linzi.",
    venue: "Israel Journal of Mathematics",
    year: 2025,
    link: "https://doi.org/10.1007/s11856-025-2721-6",
    selected: true,
  },
  {
    id: 8,
    title:
      'Preface to the Special Issue "Algebraic Structures and Graph Theory, 2nd Edition".',
    authors: "A. Linzi and I. Cristea.",
    venue: "Mathematics",
    year: 2025,
    kind: "preface",
    link: "https://doi.org/10.3390/math13040577",
  },
  {
    id: 9,
    title: "On the hyperfields associated to valued fields.",
    authors: "A. Linzi and P. Touchard.",
    venue: "Journal of Pure and Applied Algebra",
    year: 2025,
    link: "https://doi.org/10.1016/j.jpaa.2025.107985",
    selected: true,
  },
  {
    id: 10,
    title: "Hypervaluations on hyperfields and ordered canonical hypergroups.",
    authors: "A. Linzi, H. Stojalowska.",
    venue: "Iranian Journal of Mathematical Sciences and Informatics",
    year: 2025,
    link: "https://ijmsi.ir/article-1-2055-en.html",
  },
  {
    id: 11,
    title: "On algebraically closed Krasner hyperfields.",
    authors: "A. Linzi.",
    venue: "Italian Journal of Pure and Applied Mathematics",
    year: 2025,
    link: "https://ijpam.uniud.it/online_issue/202554/08%20Linzi.pdf",
  },
  {
    id: 12,
    title: "L-mosaics and orthomodular lattices.",
    authors: "N. Cangiotti, A. Linzi and E. Talotti.",
    venue: "Italian Journal of Pure and Applied Mathematics",
    year: 2025,
    link: "https://ijpam.uniud.it/online_issue/202554/04%20Cangiotti-Linzi-Talotti.pdf",
  },
];

export const preprints = [
  {
    id: 1,
    title: "L-Mosaics and Bounded Join-Semilattices in Isabelle/HOL.",
    authors: "A. Linzi.",
    venue: "arXiv",
    year: 2025,
    link: "https://www.arxiv.org/abs/2509.19854",
    linkText: "arXiv:2509.19854",
  },
  {
    id: 2,
    title:
      "Finite-field Krasner quotients: isomorphism thresholds, characteristics, and censuses.",
    authors: "A. Linzi.",
    venue: "arXiv",
    year: 2026,
    link: "https://www.arxiv.org/abs/2608.03625",
    linkText: "arXiv:2608.03625",
  },
  {
    id: 3,
    title: "Valued Mosaics.",
    authors: "A. Linzi.",
    venue: "arXiv",
    year: 2026,
    link: "https://www.arxiv.org/abs/2608.10616",
    linkText: "arXiv:2608.10616",
  },
];

export const submissions = [
  {
    id: 1,
    title: "A Horn Theory of Fields and Certain Hyperfields.",
    authors: "A. Linzi.",
    venue: "Submitted",
    year: 2026,
    link: null,
  },
];

export const selectedPublications = publications
  .filter((item) => item.selected)
  .sort((a, b) => b.year - a.year);

export function groupByYear(items) {
  const groups = new Map();
  for (const item of items) {
    const year = item.year ?? "Other";
    if (!groups.has(year)) groups.set(year, []);
    groups.get(year).push(item);
  }
  for (const group of groups.values()) {
    group.sort((a, b) => {
      if (a.kind === "preface" && b.kind !== "preface") return 1;
      if (b.kind === "preface" && a.kind !== "preface") return -1;
      return 0;
    });
  }
  return [...groups.entries()].sort((a, b) => Number(b[0]) - Number(a[0]));
}
