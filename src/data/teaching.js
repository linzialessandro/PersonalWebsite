import firstTexUrl from "../assets/FirstTeX.pdf";

export { firstTexUrl };

export const teachingBook = {
  title: "Matematika za gospodarski inženiring",
  authors: "I. Cristea, H. Bordbar, A. Linzi",
  imprint:
    "Založba Univerze, Nova Gorica, 2024. ISBN 978-961-7025-41-5. Pressbooks.",
  url: "https://books.ung.si/calculus22/",
  note: "Open textbook for students of the School of Engineering and Management at the University of Nova Gorica.",
};

export const latexGuides = [
  {
    url: "https://tug.org/TUGboat/Articles/tb23-2/tb74flynn.pdf",
    label: "A beginner’s introduction to typesetting with LaTeX",
    suffix: " — Peter Flynn",
  },
  {
    url: "https://texdoc.org/serve/TeXbyTopic.pdf/0",
    label: "TeX by Topic",
    suffix: " — Victor Eijkhout",
  },
  {
    url: "https://www.maths.tcd.ie/~dwilkins/LaTeXPrimer/",
    label: "Getting started with LaTeX",
    suffix: " — David R. Wilkins",
  },
  {
    url: "https://users.dimi.uniud.it/~gianluca.gorni/",
    label: "TeX page",
    suffix: " — Gianluca Gorni",
  },
];

export const italianLatexGuides = [
  {
    url: "https://www.lorenzopantieri.net/LaTeX_files/ArteLaTeX.pdf",
    label: "L’arte di scrivere con LaTeX",
  },
  {
    url: "https://www.lorenzopantieri.net/LaTeX_files/LaTeXimpaziente.pdf",
    label: "LaTeX per l’impaziente",
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
    suffix: " — Python in the browser, no local setup",
  },
  {
    url: "https://scipy-lectures.org/",
    label: "SciPy Lectures",
    suffix: " — scientific computing in Python",
  },
];

export const visualizationResources = [
  {
    url: "https://www.desmos.com/calculator",
    label: "Desmos",
    suffix: " — graphing calculator",
  },
  {
    url: "https://www.geogebra.org/",
    label: "GeoGebra",
    suffix: " — dynamic geometry and algebra",
  },
  {
    url: "https://www.3blue1brown.com/",
    label: "3Blue1Brown",
    extra: { url: "https://www.manim.community/", label: "Manim" },
    suffix: " — mathematical animation, and the engine behind it",
  },
];

export const competitionResources = [
  {
    url: "https://projecteuler.net/",
    label: "Project Euler",
    suffix: " — mathematical programming problems",
  },
  {
    url: "https://artofproblemsolving.com/community/c13_contests",
    label: "Art of Problem Solving",
    suffix: " — contest archive and community",
  },
];

export const teachingApps = {
  mateStudio:
    "https://ai.studio/apps/d7d3b68b-cce8-4dfb-8479-25120f4cf98d?fullscreenApplet=true",
  mateGithub: "https://github.com/linzialessandro",
  senzaTesto: "https://linzialessandro.github.io/SenzaTesto/",
  aiLiteracy:
    "https://services.google.com/fh/files/misc/bia_ai-literacy-guide_en.pdf",
};

export const teachingNav = [
  { id: "materials", label: "Materials" },
  { id: "projects", label: "Projects" },
  { id: "students", label: "For students" },
];
