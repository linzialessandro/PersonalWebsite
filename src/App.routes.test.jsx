import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { AppRoutes } from "./App";

describe("App routes", () => {
  it("renders a 404 page for unknown paths", async () => {
    render(
      <MemoryRouter initialEntries={["/does-not-exist"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(
      await screen.findByRole("heading", { name: "404" })
    ).toBeInTheDocument();
    expect(
      screen
        .getAllByRole("link", { name: "cd /home" })
        .every((link) => link.getAttribute("href") === "/")
    ).toBe(true);
  });
});
