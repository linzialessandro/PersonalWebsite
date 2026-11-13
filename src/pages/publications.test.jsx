import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { formalization } from "../data/formalization";
import { preprints, publications, submissions } from "../data/publications";
import Publications from "./Publications";

describe("Publications page", () => {
  it("renders every listed paper, preprint, and submission", () => {
    render(
      <MemoryRouter>
        <Publications />
      </MemoryRouter>
    );

    for (const item of [...publications, ...preprints, ...submissions]) {
      expect(
        screen.getByText(item.title, { exact: false })
      ).toBeInTheDocument();
    }

    expect(
      screen.getAllByRole("link", { name: /doi|arxiv|^link$/i })
    ).toHaveLength(
      [...publications, ...preprints].filter((item) => item.link).length
    );
  });

  it("offers BibTeX copy only where a stored entry exists", () => {
    render(
      <MemoryRouter>
        <Publications />
      </MemoryRouter>
    );

    const withBibtex = [...publications, ...preprints, ...submissions].filter(
      (item) => item.bibtex
    );
    expect(screen.getAllByRole("button", { name: "BibTeX" })).toHaveLength(
      withBibtex.length
    );
  });

  describe("Formalized mathematics section", () => {
    const renderPage = () =>
      render(
        <MemoryRouter>
          <Publications />
        </MemoryRouter>
      );

    it("is linked from the TOC and comes after Submitted", () => {
      renderPage();
      expect(
        screen.getByRole("link", { name: "Formalized mathematics" })
      ).toHaveAttribute("href", "#formalization");
      const heading = screen.getByRole("heading", {
        name: "Formalized mathematics",
      });
      const submitted = screen.getByRole("heading", { name: "Submitted" });
      expect(
        submitted.compareDocumentPosition(heading) &
          Node.DOCUMENT_POSITION_FOLLOWING
      ).toBeTruthy();
      const sections = document.querySelectorAll(".content-block");
      expect(sections[sections.length - 1]).toContainElement(heading);
    });

    it("states the project facts", () => {
      renderPage();
      const text = document.getElementById("formalization").textContent;
      for (const fact of [
        "submissions to Mathlib",
        "valuation theory",
        "Kuhlmann",
        "long-term project",
        "FundamentalInequality",
        "simple fundamental inequality",
        "Chapter 6",
        "Lemmas 6.12 and 6.13",
        "no sorry",
        "Lean 4.36 (rc1), Mathlib",
      ]) {
        expect(text).toContain(fact);
      }
    });

    it("renders the inequality accessibly", () => {
      renderPage();
      const math = screen.getByRole("math");
      expect(math.textContent).toBe("e(L/K) f(L/K) \u2264 [L:K]");
      expect(math).toHaveAttribute("aria-label", formalization.inequalityLabel);
    });

    it("lists the key results", () => {
      renderPage();
      const items = screen.getAllByRole("listitem").map((li) => li.textContent);
      for (const result of [
        "Residue degree f and ramification index e",
        "Multiplicativity in towers",
        "Immediate if and only if e = f = 1",
        "Valuation independence (Kuhlmann Lemma 6.12)",
        "The fundamental inequality (Lemma 6.13)",
      ]) {
        expect(items).toContain(result);
      }
    });

    it("links externally to the repository and the book", () => {
      renderPage();
      for (const href of [
        "https://github.com/linzialessandro/FundamentalInequality",
        "https://www.fvkuhlmann.de/Fvkbook.htm",
      ]) {
        const links = Array.from(
          document.querySelectorAll(`a[href="${href}"]`)
        );
        expect(links.length).toBeGreaterThan(0);
        for (const a of links) {
          expect(a).toHaveAttribute("target", "_blank");
          expect(a).toHaveAttribute("rel", expect.stringContaining("noopener"));
        }
      }
    });

    it("does not mention Tau Ceti", () => {
      renderPage();
      expect(document.body.textContent).not.toMatch(/tau ceti/i);
    });
  });
});
