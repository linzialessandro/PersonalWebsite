import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { aiGuides, aiPrompts, aiToolGroups } from "../data/aiGuide";
import { leanGuide, leanResources } from "../data/leanGuide";
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
      "ai",
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
      { id: "students-lean", heading: "Formalizing mathematics in Lean" },
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

  it("renders the Lean subsection with resources and guide download", () => {
    const { container } = render(
      <MemoryRouter>
        <Teaching />
      </MemoryRouter>
    );

    const lean = container.querySelector("#students-lean");
    expect(lean).not.toBeNull();

    for (const item of leanResources) {
      const link = within(lean).getByRole("link", { name: item.label });
      expect(link).toHaveAttribute("href", item.url);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");

      if (item.extra) {
        const extra = within(lean).getByRole("link", {
          name: item.extra.label,
        });
        expect(extra).toHaveAttribute("href", item.extra.url);
        expect(extra).toHaveAttribute("target", "_blank");
        expect(extra).toHaveAttribute("rel", "noopener noreferrer");
      }
    }

    expect(
      within(lean).getByText("Last checked: November 2026.")
    ).toBeInTheDocument();

    const guide = within(lean).getByRole("link", {
      name: `Download ${leanGuide.title} (PDF)`,
    });
    expect(guide).toHaveAttribute(
      "href",
      "/guides/getting-started-with-lean.pdf"
    );
    expect(guide).toHaveAttribute("download");

    for (const anchor of within(lean).getAllByRole("link")) {
      expect(anchor.getAttribute("href")).not.toContain(
        "github.com/linzialessandro"
      );
    }
  });

  it("renders the Working with AI section", () => {
    const { container } = render(
      <MemoryRouter>
        <Teaching />
      </MemoryRouter>
    );

    const section = container.querySelector("section#ai");
    expect(
      within(section).getByRole("heading", {
        level: 2,
        name: "Working with AI",
      })
    ).toBeInTheDocument();

    const parts = [
      { id: "ai-method", heading: "How to use it" },
      { id: "ai-tools", heading: "Tools by task" },
      { id: "ai-prompts", heading: "Prompts to copy" },
      { id: "ai-guides", heading: "Guides (PDF)" },
    ];
    for (const { id, heading } of parts) {
      const el = section.querySelector(`#${id}`);
      expect(el).not.toBeNull();
      expect(
        within(el).getByRole("heading", { level: 3, name: heading })
      ).toBeInTheDocument();
    }

    for (const group of aiToolGroups) {
      for (const tool of group.tools) {
        const link = within(section).getByRole("link", { name: tool.label });
        expect(link).toHaveAttribute("href", tool.url);
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
        if (tool.extra) {
          const extra = within(section).getByRole("link", {
            name: tool.extra.label,
          });
          expect(extra).toHaveAttribute("href", tool.extra.url);
          expect(extra).toHaveAttribute("target", "_blank");
          expect(extra).toHaveAttribute("rel", "noopener noreferrer");
        }
      }
    }

    expect(
      screen.getByText(
        "Last checked: November 2026. These tools change quickly."
      )
    ).toBeInTheDocument();

    for (const g of aiGuides) {
      const link = screen.getByRole("link", {
        name: `Download ${g.title} (PDF)`,
      });
      expect(link).toHaveAttribute("href", `/guides/${g.file}`);
      expect(link).toHaveAttribute("download");
    }

    expect(
      screen.getByRole("link", { name: "AI Literacy Guide" })
    ).toBeInTheDocument();
  });

  it("copies a prompt to the clipboard", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      configurable: true,
    });
    render(
      <MemoryRouter>
        <Teaching />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Copy prompt: Socratic tutor" })
    );
    await waitFor(() =>
      expect(writeText).toHaveBeenCalledWith(
        aiPrompts.find((p) => p.id === "socratic-tutor").text
      )
    );
  });
});
