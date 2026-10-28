import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { dialogues, poetry } from "../data/aiGallery";
import AIGallery from "./AIGallery";

describe("Dialogues page", () => {
  it("links each dialogue PDF and marks a language only when one is set", () => {
    render(
      <MemoryRouter>
        <AIGallery />
      </MemoryRouter>
    );

    for (const person of dialogues) {
      const link = screen.getByRole("link", { name: person.name });
      const row = link.closest("article");
      expect(link).toHaveAttribute("href", person.url);
      expect(link).toHaveAttribute("download", `${person.name}.pdf`);
      expect(row).toHaveTextContent(person.topic);
      if (person.lang) {
        expect(row).toHaveTextContent(`(${person.lang.toLowerCase()})`);
      } else {
        expect(within(row).queryByText(/^\([a-z]+\)$/)).not.toBeInTheDocument();
      }
    }
  });

  it("prints every verse and the archival image caption", () => {
    render(
      <MemoryRouter>
        <AIGallery />
      </MemoryRouter>
    );

    for (const poem of poetry) {
      const card = screen
        .getByRole("heading", { name: poem.title })
        .closest("article");
      for (const line of poem.lines) {
        expect(card).toHaveTextContent(line);
      }
    }

    expect(
      screen.getByRole("img", {
        name: "AI generated image titled The Mandelbrot Dream",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText("The Mandelbrot Dream. Generated with AI.")
    ).toBeInTheDocument();
  });
});
