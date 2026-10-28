import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Header from "./Header";

function renderAt(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <Header />
      <Routes>
        <Route path="*" element={<p>page body</p>} />
      </Routes>
    </MemoryRouter>
  );
}

const menuButton = () =>
  screen.getByRole("button", { name: /^(Open|Close) menu$/ });
const mobileNav = () => screen.queryByRole("navigation", { name: "Mobile" });

function openMenu() {
  fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
  return screen.getByRole("navigation", { name: "Mobile" });
}

describe("Header", () => {
  it("lists every section in the primary nav and marks the current one", () => {
    renderAt("/teaching");
    const nav = screen.getByRole("navigation", { name: "Primary" });
    const links = within(nav).getAllByRole("link");

    expect(links.map((link) => link.textContent)).toEqual([
      "Research",
      "Teaching",
      "CV",
      "Network",
      "Dialogues",
    ]);
    expect(within(nav).getByRole("link", { name: "Teaching" })).toHaveClass(
      "nav-link nav-link-active"
    );
    expect(within(nav).getByRole("link", { name: "CV" })).toHaveClass(
      "nav-link"
    );
    expect(within(nav).getByRole("link", { name: "CV" })).not.toHaveClass(
      "nav-link-active"
    );
  });

  it("links the brand to the home page", () => {
    renderAt("/cv");
    expect(
      screen.getByRole("link", { name: "Alessandro Linzi" })
    ).toHaveAttribute("href", "/");
  });

  it("opens the mobile menu, focuses its first link, and marks the current page", () => {
    renderAt("/cv");
    expect(mobileNav()).not.toBeInTheDocument();
    expect(menuButton()).toHaveAttribute("aria-expanded", "false");

    const nav = openMenu();

    expect(menuButton()).toHaveAccessibleName("Close menu");
    expect(menuButton()).toHaveAttribute("aria-expanded", "true");
    expect(within(nav).getByRole("link", { name: "Research" })).toHaveFocus();
    expect(within(nav).getByRole("link", { name: "CV" })).toHaveClass(
      "mobile-nav-link mobile-nav-link-active"
    );
    expect(within(nav).getByRole("link", { name: "Research" })).not.toHaveClass(
      "mobile-nav-link-active"
    );
  });

  it("toggles closed from the menu button", () => {
    renderAt("/");
    openMenu();
    fireEvent.click(menuButton());
    expect(mobileNav()).not.toBeInTheDocument();
  });

  it("closes on Escape and returns focus to the menu button", () => {
    renderAt("/");
    openMenu();

    fireEvent.keyDown(document, { key: "Enter" });
    expect(mobileNav()).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(mobileNav()).not.toBeInTheDocument();
    expect(menuButton()).toHaveFocus();
  });

  it("closes on a pointer press outside, not inside the menu or on the button", () => {
    renderAt("/");
    const nav = openMenu();

    fireEvent.mouseDown(within(nav).getByRole("link", { name: "CV" }));
    expect(mobileNav()).toBeInTheDocument();

    fireEvent.mouseDown(menuButton());
    expect(mobileNav()).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByText("page body"));
    expect(mobileNav()).not.toBeInTheDocument();
  });

  it("closes after following a mobile link, including to the current page", () => {
    renderAt("/cv");
    fireEvent.click(within(openMenu()).getByRole("link", { name: "Teaching" }));
    expect(mobileNav()).not.toBeInTheDocument();
    expect(
      within(screen.getByRole("navigation", { name: "Primary" })).getByRole(
        "link",
        { name: "Teaching" }
      )
    ).toHaveClass("nav-link-active");

    fireEvent.click(within(openMenu()).getByRole("link", { name: "Teaching" }));
    expect(mobileNav()).not.toBeInTheDocument();
  });

  it("closes when the brand link is followed", () => {
    renderAt("/");
    openMenu();
    fireEvent.click(screen.getByRole("link", { name: "Alessandro Linzi" }));
    expect(mobileNav()).not.toBeInTheDocument();
  });
});
