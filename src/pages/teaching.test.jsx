import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import {
  codingResources,
  competitionResources,
  everydayResources,
  italianLatexGuides,
  latexGuides,
  learningResources,
  teachingApps,
  teachingBook,
  teachingNav,
  visualizationResources,
} from "../data/teaching";
import Teaching from "./Teaching";

describe("Teaching page", () => {
  it("renders top-level sections and student subsections with deep-link ids", () => {
    const { container } = render(
      <MemoryRouter>
        <Teaching />
      </MemoryRouter>
    );

    expect(teachingNav.map((item) => item.id)).toEqual([
      "materials",
      "projects",
      "students",
    ]);

    for (const item of teachingNav) {
      expect(screen.getByRole("link", { name: item.label })).toHaveAttribute(
        "href",
        `#${item.id}`
      );
      expect(container.querySelector(`section#${item.id}`)).not.toBeNull();
    }

    const studentsSection = container.querySelector("section#students");
    const expectedSubsections = [
      { id: "students-everyday", heading: "Everyday tools" },
      { id: "students-typesetting", heading: "Typesetting" },
      { id: "students-learning", heading: "Learn and practice" },
      { id: "students-computation", heading: "Computation" },
      { id: "students-visualization", heading: "Visualization" },
      { id: "students-problems", heading: "Problems" },
      { id: "students-ai", heading: "Working with AI" },
    ];

    for (const { id, heading } of expectedSubsections) {
      const subsection = studentsSection.querySelector(`#${id}`);
      expect(subsection).not.toBeNull();
      expect(
        within(subsection).getByRole("heading", { level: 3, name: heading })
      ).toBeInTheDocument();
    }
  });

  it("renders every resource registry item and omits dead course links", () => {
    render(
      <MemoryRouter>
        <Teaching />
      </MemoryRouter>
    );

    const registries = [
      ...everydayResources,
      ...latexGuides,
      ...italianLatexGuides,
      ...learningResources,
      ...codingResources,
      ...visualizationResources,
      ...competitionResources,
    ];

    for (const item of registries) {
      const link = screen.getByRole("link", { name: item.label });
      expect(link).toHaveAttribute("href", item.url);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");

      if (item.extra) {
        const extraLink = screen.getByRole("link", { name: item.extra.label });
        expect(extraLink).toHaveAttribute("href", item.extra.url);
      }
    }

    expect(screen.getByRole("link", { name: "Overleaf" })).toHaveAttribute(
      "href",
      "https://www.overleaf.com/"
    );
    expect(screen.getByRole("link", { name: "Wolfram Alpha" })).toHaveAttribute(
      "href",
      "https://www.wolframalpha.com/"
    );
    expect(
      screen.getByRole("link", { name: "Khan Academy Mathematics" })
    ).toHaveAttribute("href", "https://www.khanacademy.org/math");
    expect(screen.getByRole("link", { name: "YouMath" })).toHaveAttribute(
      "href",
      "https://www.youmath.it/"
    );
    expect(
      screen.getByRole("link", { name: "Paul’s Online Math Notes" })
    ).toHaveAttribute("href", "https://tutorial.math.lamar.edu/");
    expect(
      screen.getByRole("link", { name: "MIT OCW Single Variable Calculus" })
    ).toHaveAttribute(
      "href",
      "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/"
    );
    expect(
      screen.getByRole("link", { name: "MIT OCW Linear Algebra" })
    ).toHaveAttribute(
      "href",
      "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
    );
    expect(screen.getByRole("link", { name: "Read online" })).toHaveAttribute(
      "href",
      teachingBook.url
    );
    expect(
      screen.getByRole("link", { name: "AI Literacy Guide" })
    ).toHaveAttribute("href", teachingApps.aiLiteracy);

    const allHrefs = screen
      .getAllByRole("link")
      .map((anchor) => anchor.getAttribute("href"));
    expect(allHrefs).not.toContain("https://ocw.mit.edu/courses/18-06scf11/");
  });
});
