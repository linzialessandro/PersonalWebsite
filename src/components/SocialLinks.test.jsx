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
});
