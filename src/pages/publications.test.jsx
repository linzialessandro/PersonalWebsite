import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
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
});
