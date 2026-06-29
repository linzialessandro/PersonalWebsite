import firstTexUrl from "../assets/FirstTeX.pdf";

export const teachingSections = [
  {
    id: "book",
    title:
      "Book for Slovenian students of the School of Engineering and Management.",
    type: "list",
    items: [
      {
        content:
          "I. Cristea, H. Bordbar, A. Linzi. Matematika za gospodarski inženiring. V Novi Gorici: Založba Univerze. ISBN: 978-961-7025-41-5. Pressbooks, 2024.",
        italicText: "Matematika za gospodarski inženiring.",
        link: "https://books.ung.si/calculus22/",
        linkText: "[LINK]",
      },
    ],
  },
  {
    id: "geogebra",
    title: "GeoGebra",
    type: "text",
    content:
      " is a free mathematics platform that empowers students and educators with dynamic tools for learning and teaching. This comprehensive suite offers an extensive collection of interactive mathematical resources available directly through your web browser.",
    linkPrefix: { text: "GeoGebra", url: "https://www.geogebra.org/" },
  },
  {
    id: "first-tex",
    title: "LaTeX for Your First Paper",
    type: "download",
    content:
      "A concise essential guide written by me in the form of a presentation.",
    downloadUrl: firstTexUrl,
    downloadLabel: "Download Presentation",
  },
  {
    id: "latex-resources",
    title: "LaTeX Resources for Users and Beginners",
    type: "links-list",
    items: [
      {
        url: "https://tug.org/TUGboat/Articles/tb23-2/tb74flynn.pdf",
        linkText: "A beginner's introduction to typesetting with LaTeX",
        suffix: " — A gentle introduction by Peter Flynn.",
      },
      {
        url: "https://texdoc.org/serve/TeXbyTopic.pdf/0",
        linkText: "TeX by Topic",
        suffix: " — A free online book by Victor Eijkhout.",
      },
      {
        url: "https://www.maths.tcd.ie/~dwilkins/LaTeXPrimer/",
        linkText: "Getting started with LaTeX",
        suffix: " — A dedicated webpage by David R. Wilkins.",
      },
      {
        url: "https://users.dimi.uniud.it/~gianluca.gorni/",
        linkText: "TeX page",
        suffix: " — Maintained by Prof. Gianluca Gorni.",
      },
    ],
    subsections: [
      {
        title: "Italian Resources",
        description:
          "Three very useful texts by Lorenzo Pantieri which I still consult very often:",
        items: [
          {
            url: "http://www.lorenzopantieri.net/LaTeX_files/ArteLaTeX.pdf",
            linkText: "L'arte di scrivere con LaTeX",
          },
          {
            url: "http://www.lorenzopantieri.net/LaTeX_files/LaTeXimpaziente.pdf",
            linkText: "LaTeX per l'impaziente",
          },
          {
            url: "http://www.lorenzopantieri.net/LaTeX_files/LaTeXpedia.pdf",
            linkText: "LaTeXpedia",
          },
        ],
      },
    ],
  },
  {
    id: "matematician",
    title: "Mate-ematician",
    type: "app",
    content:
      "MacTutor is a free online resource containing biographies of more than 3000 mathematicians. Mate-matician is an app which I created to discover the wonderful MacTutor biographies repository in an interactive way. The app can be accessed through this link, using a google account. The link redirects to the public preview on the Google AI Studio platform. Let the browser load the app, then set it to full screen and try it yourself!",
    subContent:
      "Alternatively, you may clone the corresponding GitHub repository.",
    links: [
      {
        url: "https://aistudio.google.com/apps/c765648a-02a0-4004-97fc-af6eb15db905",
        label: "Open App in AI Studio",
      },
      { url: "https://github.com/linzialessandro", label: "View GitHub Repo" },
    ],
  },
  {
    id: "ai-literacy",
    title: "It seems everyone is talking about AI—but what's it all about?",
    type: "text",
    content: "Here is the ",
    linkSuffix: {
      text: "AI Literacy Guide",
      url: "https://services.google.com/fh/files/misc/bia_ai-literacy-guide_en.pdf",
    },
    afterLink: " provided by Google.",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering for Math Students",
    type: "quote",
    content:
      "As AI becomes more prevalent, learning how to use it effectively is crucial. When stuck on a math problem, don't just ask an AI for the answer. Instead, ask it to act as a Socratic tutor.",
    quote:
      '"I am stuck on this calculus problem. Please don\'t give me the final answer. Instead, explain the concept of the chain rule as it applies here, and give me a hint on what my first step should be."',
  },
  {
    id: "interactive-coding",
    title: "Interactive Coding for Mathematics",
    type: "links-list",
    description:
      "Programming is an incredible tool for visualizing and solving mathematical problems. I highly recommend students explore Python with libraries like NumPy, SymPy, and Matplotlib.",
    items: [
      {
        url: "https://colab.research.google.com/",
        linkText: "Google Colab",
        suffix: " — Run Python directly in your browser with zero setup.",
      },
      {
        url: "https://scipy-lectures.org/",
        linkText: "SciPy Lectures",
        suffix:
          " — Great tutorials for learning scientific computing in Python.",
      },
    ],
  },
  {
    id: "modern-vis",
    title: "Modern Visualization Tools",
    type: "links-list",
    items: [
      {
        url: "https://www.desmos.com/calculator",
        linkText: "Desmos Graphing Calculator",
        suffix:
          " — A beautiful, intuitive, and widely used online graphing calculator.",
      },
      {
        url: "https://www.3blue1brown.com/",
        linkText: "3Blue1Brown",
        middle: " & ",
        url2: "https://www.manim.community/",
        linkText2: "Manim",
        suffix:
          " — Incredible math animations and the open-source Python engine used to create them.",
      },
    ],
  },
  {
    id: "math-comp",
    title: "Mathematics Competitions",
    type: "links-list",
    description:
      "For students who enjoy challenging problem-solving and out-of-the-box thinking:",
    items: [
      {
        url: "https://projecteuler.net/",
        linkText: "Project Euler",
        suffix:
          " — A series of challenging mathematical/computer programming problems.",
      },
      {
        url: "https://artofproblemsolving.com/community/c13_contests",
        linkText: "Art of Problem Solving (AoPS)",
        suffix:
          " — An amazing community and archive of math olympiad problems from around the world.",
      },
    ],
  },
];
