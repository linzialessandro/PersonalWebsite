import { describe, expect, it } from "vitest";
import {
  extraLinkLabel,
  publicationKey,
  publicationLinkLabel,
  venueLine,
} from "./publicationDisplay";

describe("publication display", () => {
  it("prefers an id, then the title, as the list key", () => {
    expect(publicationKey({ id: 4, title: "Notes" })).toBe(4);
    expect(publicationKey({ title: "Notes" })).toBe("Notes");
  });

  it("labels DOI links, custom labels, and everything else", () => {
    expect(
      publicationLinkLabel({ link: "https://doi.org/10.1000/example" })
    ).toBe("DOI");
    expect(
      publicationLinkLabel({
        link: "https://www.arxiv.org/abs/2509.19854",
        linkText: "arXiv:2509.19854",
      })
    ).toBe("arXiv:2509.19854");
    expect(publicationLinkLabel({ link: "https://ijmsi.ir/article" })).toBe(
      "Link"
    );
    expect(publicationLinkLabel({ link: null })).toBe("Link");
  });

  it("joins venue, year, and a preface mark", () => {
    expect(venueLine({ venue: "Mathematics", year: 2025 })).toBe(
      "Mathematics, 2025"
    );
    expect(
      venueLine({ venue: "Mathematics", year: 2025, kind: "preface" })
    ).toBe("Mathematics, 2025, preface");
    expect(venueLine({ venue: "Notes", kind: "preface" })).toBe(
      "Notes, preface"
    );
    expect(venueLine({ venue: "Notes" })).toBe("Notes");
    expect(venueLine({ year: 2020, kind: "preface" })).toBe(", 2020, preface");
  });

  it("falls back when an extra link has no label", () => {
    expect(extraLinkLabel({ extraLinkText: "Visualizer" })).toBe("Visualizer");
    expect(extraLinkLabel({})).toBe("Link");
  });
});
