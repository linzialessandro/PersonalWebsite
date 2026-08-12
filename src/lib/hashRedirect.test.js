import { afterEach, describe, expect, it, vi } from "vitest";
import { redirectLegacyHashRoute } from "./hashRedirect";

describe("redirectLegacyHashRoute", () => {
  afterEach(() => {
    window.history.replaceState(null, "", "/");
    vi.unstubAllEnvs();
  });

  it("rewrites a legacy hash path to a real pathname", () => {
    vi.stubEnv("BASE_URL", "/");
    window.history.replaceState(null, "", "/#/publications");

    redirectLegacyHashRoute();

    expect(window.location.pathname).toBe("/publications");
    expect(window.location.hash).toBe("");
  });

  it("leaves ordinary paths alone", () => {
    window.history.replaceState(null, "", "/cv");

    redirectLegacyHashRoute();

    expect(window.location.pathname).toBe("/cv");
  });
});
