import firstTexUrl from "../assets/FirstTeX.pdf";

export { firstTexUrl };

export const teachingBook = {
  title:
    "Book for Slovenian students of the School of Engineering and Management.",
  authors: "I. Cristea, H. Bordbar, A. Linzi.",
  italicTitle: "Matematika za gospodarski inženiring.",
  rest: "V Novi Gorici: Založba Univerze. ISBN: 978-961-7025-41-5. Pressbooks, 2024.",
  url: "https://books.ung.si/calculus22/",
};

export const latexGuides = [
  {
    url: "https://tug.org/TUGboat/Articles/tb23-2/tb74flynn.pdf",
    label: "A beginner's introduction to typesetting with LaTeX",
    suffix: " — A gentle introduction by Peter Flynn.",
  },
  {
    url: "https://texdoc.org/serve/TeXbyTopic.pdf/0",
    label: "TeX by Topic",
    suffix: " — A free online book by Victor Eijkhout.",
  },
  {
    url: "https://www.maths.tcd.ie/~dwilkins/LaTeXPrimer/",
    label: "Getting started with LaTeX",
    suffix: " — A dedicated webpage by David R. Wilkins.",
  },
  {
    url: "https://users.dimi.uniud.it/~gianluca.gorni/",
    label: "TeX page",
    suffix: " — Maintained by Prof. Gianluca Gorni.",
  },
];

export const italianLatexGuides = [
  {
    url: "https://www.lorenzopantieri.net/LaTeX_files/ArteLaTeX.pdf",
    label: "L'arte di scrivere con LaTeX",
  },
  {
    url: "https://www.lorenzopantieri.net/LaTeX_files/LaTeXimpaziente.pdf",
    label: "LaTeX per l'impaziente",
  },
  {
    url: "https://www.lorenzopantieri.net/LaTeX_files/LaTeXpedia.pdf",
    label: "LaTeXpedia",
  },
];

export const codingResources = [
  {
    url: "https://colab.research.google.com/",
    label: "Google Colab",
    suffix: " — Run Python directly in your browser with zero setup.",
  },
  {
    url: "https://scipy-lectures.org/",
    label: "SciPy Lectures",
    suffix: " — Great tutorials for learning scientific computing in Python.",
  },
];

export const visualizationResources = [
  {
    url: "https://www.desmos.com/calculator",
    label: "Desmos Graphing Calculator",
    suffix:
      " — A beautiful, intuitive, and widely used online graphing calculator.",
  },
  {
    url: "https://www.3blue1brown.com/",
    label: "3Blue1Brown",
    extra: { url: "https://www.manim.community/", label: "Manim" },
    suffix:
      " — Incredible math animations and the open-source Python engine used to create them.",
  },
];

export const competitionResources = [
  {
    url: "https://projecteuler.net/",
    label: "Project Euler",
    suffix:
      " — A series of challenging mathematical/computer programming problems.",
  },
  {
    url: "https://artofproblemsolving.com/community/c13_contests",
    label: "Art of Problem Solving (AoPS)",
    suffix:
      " — An amazing community and archive of math olympiad problems from around the world.",
  },
];

export const teachingApps = {
  mateStudio:
    "https://ai.studio/apps/d7d3b68b-cce8-4dfb-8479-25120f4cf98d?fullscreenApplet=true",
  mateGithub: "https://github.com/linzialessandro",
  senzaTesto: "https://linzialessandro.github.io/SenzaTesto/",
  aiLiteracy:
    "https://services.google.com/fh/files/misc/bia_ai-literacy-guide_en.pdf",
  geogebra: "https://www.geogebra.org/",
};
