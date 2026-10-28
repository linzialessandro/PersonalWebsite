import { afterEach, describe, expect, it, vi } from "vitest";
import { SITE_URL, absoluteUrl, getBasename } from "./site";

describe("site URLs", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("prefixes a path with the canonical site origin", () => {
    expect(absoluteUrl()).toBe(`${SITE_URL}/`);
    expect(absoluteUrl("/")).toBe(`${SITE_URL}/`);
    expect(absoluteUrl("/cv")).toBe(`${SITE_URL}/cv`);
  });

  it("uses the Vite base path, dropping a trailing slash", () => {
    vi.stubEnv("BASE_URL", "/PersonalWebsite/");
    expect(getBasename()).toBe("/PersonalWebsite");

    vi.stubEnv("BASE_URL", "/");
    expect(getBasename()).toBeUndefined();
  });
});
