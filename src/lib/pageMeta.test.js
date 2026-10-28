import { afterEach, describe, expect, it } from "vitest";
import { SITE_NAME, SITE_URL } from "./site";
import { applyPageMeta } from "./pageMeta";

const HEAD = `
  <meta name="description" content="old description" />
  <meta property="og:description" content="old og description" />
  <link rel="canonical" href="https://old.example/" />
  <meta property="og:url" content="https://old.example/" />
  <meta property="og:title" content="Old" />
`;

function content(selector) {
  return document.querySelector(selector)?.getAttribute("content") ?? null;
}

describe("applyPageMeta", () => {
  afterEach(() => {
    document.head.innerHTML = "";
    document.title = "";
  });

  it("writes the document title, description, and canonical URL", () => {
    document.head.innerHTML = HEAD;

    applyPageMeta({
      title: "Research",
      description: "Papers and preprints.",
      pathname: "/publications",
    });

    expect(document.title).toBe(`Research | ${SITE_NAME}`);
    expect(content('meta[name="description"]')).toBe("Papers and preprints.");
    expect(content('meta[property="og:description"]')).toBe(
      "Papers and preprints."
    );
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `${SITE_URL}/publications`
    );
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute(
      "href",
      `${SITE_URL}/publications`
    );
    expect(content('meta[property="og:title"]')).toBe(document.title);
  });

  it("uses the site name alone and leaves description tags untouched", () => {
    document.head.innerHTML = HEAD;

    applyPageMeta({ pathname: "/" });

    expect(document.title).toBe(SITE_NAME);
    expect(content('meta[name="description"]')).toBe("old description");
    expect(content('meta[property="og:description"]')).toBe(
      "old og description"
    );
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `${SITE_URL}/`
    );
  });

  it("does nothing to tags that are not in the document", () => {
    applyPageMeta({
      title: "Network",
      description: "Colleagues.",
      pathname: "/academic-net",
    });

    expect(document.title).toBe(`Network | ${SITE_NAME}`);
    expect(document.querySelector("meta")).toBeNull();
    expect(document.querySelector("link")).toBeNull();
  });
});
