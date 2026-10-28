import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { AppRoutes } from "./App";

describe("App routes", () => {
  it("renders the home portfolio with areas of work and selected papers", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    const main = screen.getByRole("main");
    expect(
      within(main).getByRole("heading", { level: 1, name: "Alessandro Linzi" })
    ).toBeInTheDocument();
    expect(within(main).getByText("Udine, Italy")).toBeInTheDocument();
    expect(
      within(main).getByRole("complementary", { name: "Areas of work" })
    ).toBeInTheDocument();
    expect(
      within(main).getByRole("heading", { name: "Selected papers" })
    ).toBeInTheDocument();
    expect(
      within(main).getByRole("link", { name: "Research" })
    ).toHaveAttribute("href", "/publications");
  });

  it("renders a 404 page for unknown paths", async () => {
    render(
      <MemoryRouter initialEntries={["/does-not-exist"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(
      await screen.findByRole("heading", { name: "This page is not here" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Back to the home page" })
    ).toHaveAttribute("href", "/");
  });
});
