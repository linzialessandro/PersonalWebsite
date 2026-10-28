import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { colleagues, otherLinks } from "../data/academicNet";
import AcademicNet from "./AcademicNet";

describe("Academic network page", () => {
  it("links a colleague's name only when a homepage is recorded", () => {
    render(
      <MemoryRouter>
        <AcademicNet />
      </MemoryRouter>
    );

    for (const person of colleagues) {
      const card = screen.getByText(person.name).closest("article");
      if (person.url) {
        expect(
          within(card).getByRole("link", { name: person.name })
        ).toHaveAttribute("href", person.url);
      } else {
        expect(
          within(card).queryByRole("link", { name: person.name })
        ).not.toBeInTheDocument();
      }

      const links = person.links ?? [];
      for (const link of links) {
        expect(
          within(card).getByRole("link", { name: link.text })
        ).toHaveAttribute("href", link.url);
      }
      if (links.length === 0) {
        expect(within(card).queryAllByRole("link")).toHaveLength(
          person.url ? 1 : 0
        );
      }
    }
  });

  it("lists each reference with its label and description", () => {
    render(
      <MemoryRouter>
        <AcademicNet />
      </MemoryRouter>
    );

    for (const item of otherLinks) {
      const row = screen
        .getByRole("link", { name: item.label })
        .closest("article");
      expect(row).toHaveTextContent(item.text);
      expect(
        within(row).getByRole("link", { name: item.label })
      ).toHaveAttribute("href", item.url);
    }
  });
});
