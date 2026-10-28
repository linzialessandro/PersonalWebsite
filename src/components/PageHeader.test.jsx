import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PageHeader from "./PageHeader";

describe("PageHeader", () => {
  it("renders a kicker, title, and subtitle", () => {
    render(
      <PageHeader kicker="Network" title="People and references">
        Colleagues I have worked with.
      </PageHeader>
    );

    expect(screen.getByText("Network")).toHaveClass("page-kicker");
    expect(
      screen.getByRole("heading", { name: "People and references" })
    ).toBeInTheDocument();
    expect(screen.getByText("Colleagues I have worked with.")).toHaveClass(
      "subtitle"
    );
  });

  it("omits the kicker and subtitle when they are absent", () => {
    render(<PageHeader title="Bare title" />);

    expect(
      screen.getByRole("heading", { name: "Bare title" })
    ).toBeInTheDocument();
    expect(document.querySelector(".page-kicker")).not.toBeInTheDocument();
    expect(document.querySelector(".subtitle")).not.toBeInTheDocument();
  });
});
