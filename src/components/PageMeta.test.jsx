import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import { SITE_NAME, SITE_URL } from "../lib/site";
import PageMeta from "./PageMeta";

describe("PageMeta", () => {
  afterEach(() => {
    document.head.innerHTML = "";
    document.title = "";
  });

  it("applies the current route when the page renders", () => {
    document.head.innerHTML = `<link rel="canonical" href="https://old.example/" />`;

    render(
      <MemoryRouter initialEntries={["/teaching"]}>
        <PageMeta title="Teaching" description="Course materials." />
      </MemoryRouter>
    );

    expect(document.title).toBe(`Teaching | ${SITE_NAME}`);
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `${SITE_URL}/teaching`
    );
  });
});
