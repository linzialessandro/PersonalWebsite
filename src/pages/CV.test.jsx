import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { credentials, cvData, education, positions, service } from "../data/cv";
import CV from "./CV";

function renderCV() {
  render(
    <MemoryRouter>
      <CV />
    </MemoryRouter>
  );
}

describe("CV page", () => {
  it("offers the PDF and the conversational interface", () => {
    renderCV();

    expect(
      screen.getByRole("img", { name: "Alessandro Linzi" })
    ).toHaveAttribute("src", expect.stringContaining("profile"));
    const pdf = screen.getByRole("link", { name: "Download PDF" });
    expect(pdf).toHaveAttribute("href", cvData.pdfUrl);
    expect(pdf).toHaveAttribute("download", "cv-alessandro-linzi.pdf");
    expect(
      screen.getByRole("link", { name: "available here" })
    ).toHaveAttribute("href", cvData.aiCvLink);
  });

  it("renders every appointment and degree, including units only when present", () => {
    renderCV();

    for (const item of [...positions, ...education]) {
      const role = item.place ? `${item.role}, ${item.place}` : item.role;
      const card = screen.getAllByText(item.org).find((node) => {
        const article = node.closest("article");
        return (
          article?.textContent.includes(item.years) &&
          article.textContent.includes(role)
        );
      });
      const article = card.closest("article");
      expect(article).toHaveTextContent(item.years);
      expect(article).toHaveTextContent(role);
      if (item.unit) {
        expect(article).toHaveTextContent(item.unit);
      } else {
        expect(within(article).getAllByText(role)).toHaveLength(1);
      }
    }
  });

  it("lists qualifications and editorial lines, linking only a complete detail", () => {
    renderCV();

    for (const item of credentials) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }

    for (const item of service) {
      const row = screen.getByText(item.text).closest("li");
      if (item.href && item.detail) {
        expect(row).toHaveTextContent(`${item.text}. ${item.detail}`);
        expect(
          within(row).getByRole("link", { name: item.detail })
        ).toHaveAttribute("href", item.href);
      } else {
        expect(within(row).queryByRole("link")).not.toBeInTheDocument();
        expect(row).toHaveTextContent(item.text);
      }
    }
  });
});
