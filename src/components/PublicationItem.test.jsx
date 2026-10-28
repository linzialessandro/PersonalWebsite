import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { publications, submissions } from "../data/publications";
import PublicationItem from "./PublicationItem";

const preface = publications.find((item) => item.kind === "preface");
const withExtra = publications.find((item) => item.extraLink);
const doi = publications.find((item) => item.link?.includes("doi.org"));

describe("PublicationItem", () => {
  it("emphasizes each occurrence of A. Linzi and shows a DOI", () => {
    render(<PublicationItem pub={doi} />);

    const authors = document.querySelector(".pub-authors");
    expect(
      within(authors)
        .getAllByText("A. Linzi")
        .every((node) => node.tagName === "STRONG")
    ).toBe(true);
    expect(authors).toHaveTextContent(doi.authors);
    expect(
      screen.getByRole("heading", { name: doi.title })
    ).toBeInTheDocument();
    expect(screen.getByText(`${doi.venue}, ${doi.year}`)).toBeInTheDocument();

    const link = screen.getByRole("link", { name: "DOI" });
    expect(link).toHaveAttribute("href", doi.link);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveClass("pub-link");
  });

  it("marks a preface and keeps a custom link label plus an extra link", () => {
    render(<PublicationItem pub={preface} />);
    expect(
      screen.getByText(`${preface.venue}, ${preface.year}, preface`)
    ).toBeInTheDocument();

    render(<PublicationItem pub={withExtra} />);
    expect(
      screen.getByRole("link", { name: withExtra.extraLinkText })
    ).toHaveAttribute("href", withExtra.extraLink);
  });

  it("says the manuscript is in review when it has no link", () => {
    render(<PublicationItem pub={submissions[0]} />);
    expect(screen.getByText("In review")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("covers missing years, non-DOI labels, and an unlabeled extra link", () => {
    render(
      <PublicationItem
        pub={{
          title: "Undated note",
          authors: "A. N. Other",
          venue: "Notes",
          kind: "preface",
          link: "https://example.com/notes",
          extraLink: "https://example.com/extra",
        }}
      />
    );

    expect(screen.getByText("Notes, preface")).toBeInTheDocument();
    expect(document.querySelector("strong")).not.toBeInTheDocument();
    const links = screen.getAllByRole("link", { name: "Link" });
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "https://example.com/notes",
      "https://example.com/extra",
    ]);
  });

  it("emphasizes a repeated author mark", () => {
    render(
      <PublicationItem
        pub={{
          title: "Joint note",
          authors: "A. Linzi and A. Linzi",
          venue: "Journal",
          year: 2020,
          link: "https://doi.org/10.1000/example",
          linkText: "arXiv:0000.00000",
        }}
      />
    );

    expect(document.querySelectorAll(".pub-authors strong")).toHaveLength(2);
    expect(
      screen.getByRole("link", { name: "arXiv:0000.00000" })
    ).toHaveAttribute("href", "https://doi.org/10.1000/example");
  });
});
