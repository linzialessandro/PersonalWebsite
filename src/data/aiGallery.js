import archimedesUrl from "../assets/Dialogues/Archimedes.pdf";
import bellavitisUrl from "../assets/Dialogues/Bellavitis.pdf";
import erdosUrl from "../assets/Dialogues/Erdos.pdf";
import fibonacciUrl from "../assets/Dialogues/Fibonacci.pdf";
import godelUrl from "../assets/Dialogues/Godel.pdf";
import hilbertUrl from "../assets/Dialogues/Hilbert.pdf";
import leibnizUrl from "../assets/Dialogues/Leibniz.pdf";
import russellUrl from "../assets/Dialogues/Russell.pdf";
import turingUrl from "../assets/Dialogues/Turing.pdf";

export const dialogues = [
  { name: "Archimedes", url: archimedesUrl },
  { name: "Bellavitis", url: bellavitisUrl, lang: "IT" },
  { name: "Erdos", url: erdosUrl },
  { name: "Fibonacci", url: fibonacciUrl },
  { name: "Godel", url: godelUrl },
  { name: "Hilbert", url: hilbertUrl },
  { name: "Leibniz", url: leibnizUrl },
  { name: "Russell", url: russellUrl },
  { name: "Turing", url: turingUrl },
];

export const poetry = [
  {
    title: "The Riemann Zeta",
    lines: [
      "A line of zeros, perfectly aligned,",
      "In critical strip where primes are intertwined.",
      "A mystery deep that Riemann left behind,",
      "The greatest secret of the human mind.",
    ],
  },
  {
    title: "Fibonacci's Spiral",
    lines: [
      "One, then one again, the sequence starts,",
      "To two, then three, the golden spiral parts.",
      "Five petals bloom, eight leaves upon the tree,",
      "Nature's own design in harmony.",
    ],
  },
];
