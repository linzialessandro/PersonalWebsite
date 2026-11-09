import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";

describe("SocialLinks", () => {
  it("renders an external Gumroad link pointing to profile.links.gumroad", () => {
    expect(profile.links.gumroad).toBe("https://alessandrolinzi.gumroad.com/");

    render(<SocialLinks />);

    const link = screen.getByRole("link", { name: "Gumroad" });
    expect(link).toHaveAttribute(
      "href",
      "https://alessandrolinzi.gumroad.com/"
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders an external Buy Me a Coffee link pointing to profile.links.buymeacoffee", () => {
    expect(profile.links.buymeacoffee).toBe("https://buymeacoffee.com/alinzi");

    render(<SocialLinks />);

    const link = screen.getByRole("link", { name: "Buy Me a Coffee" });
    expect(link).toHaveAttribute("href", "https://buymeacoffee.com/alinzi");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveAttribute("title", "Buy Me a Coffee");
  });
});
