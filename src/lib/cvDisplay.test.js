import { describe, expect, it } from "vitest";
import { serviceLink, timelineRole } from "./cvDisplay";

describe("CV display", () => {
  it("joins a role and a place, and omits a missing place", () => {
    expect(timelineRole({ role: "Tutor", place: "Udine" })).toBe(
      "Tutor, Udine"
    );
    expect(timelineRole({ role: "Tutor" })).toBe("Tutor");
    expect(timelineRole({ role: "Tutor", place: "" })).toBe("Tutor");
  });

  it("returns an editorial link only when both parts are present", () => {
    expect(
      serviceLink({
        href: "https://example.com/issue",
        detail: "Special issue",
      })
    ).toEqual({
      href: "https://example.com/issue",
      detail: "Special issue",
    });
    expect(serviceLink({ text: "Referee" })).toBeNull();
    expect(serviceLink({ href: "https://example.com/issue" })).toBeNull();
    expect(serviceLink({ detail: "Special issue" })).toBeNull();
  });
});
