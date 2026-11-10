import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("hides the support sentence on teaching but keeps Gumroad and Buy Me a Coffee icons", () => {
    render(<Footer pathname="/teaching" />);

    expect(
      screen.queryByText(/Like my writing\? Support it on/i)
    ).not.toBeInTheDocument();

    const footer = screen.getByRole("contentinfo");
    expect(
      within(footer).getByRole("link", { name: "Gumroad" })
    ).toBeInTheDocument();
    expect(
      within(footer).getByRole("link", { name: "Buy Me a Coffee" })
    ).toHaveAttribute("href", "https://buymeacoffee.com/alinzi");
  });

  it("shows the support sentence off teaching alongside the icon", () => {
    render(<Footer pathname="/" />);
    expect(
      screen.getByText(/Like my writing\? Support it on/i)
    ).toBeInTheDocument();
    const footer = screen.getByRole("contentinfo");
    const bmcLinks = within(footer).getAllByRole("link", {
      name: "Buy Me a Coffee",
    });
    expect(bmcLinks.length).toBeGreaterThanOrEqual(2);
    expect(
      bmcLinks.every(
        (link) =>
          link.getAttribute("href") === "https://buymeacoffee.com/alinzi"
      )
    ).toBe(true);
  });
});
