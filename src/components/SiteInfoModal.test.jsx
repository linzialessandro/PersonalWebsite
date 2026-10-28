import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Footer from "./Footer";

function openModal() {
  render(<Footer />);
  const trigger = screen.getByRole("button", { name: "About this site" });
  trigger.focus();
  fireEvent.click(trigger);
  return { trigger, dialog: screen.getByRole("dialog") };
}

describe("SiteInfoModal", () => {
  it("opens from the footer as a labelled modal dialog", () => {
    const { dialog } = openModal();

    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAccessibleName("About this site");
    expect(
      within(screen.getByRole("dialog")).getByRole("link", { name: "GitHub" })
    ).toHaveAttribute("href", "https://github.com/linzialessandro");
  });

  it("moves focus into the dialog and locks page scroll while open", () => {
    document.body.style.overflow = "auto";
    openModal();

    expect(
      screen.getByRole("button", { name: "Close site information" })
    ).toHaveFocus();
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("closes on Escape, restores scroll, and returns focus to the trigger", () => {
    document.body.style.overflow = "auto";
    const { trigger } = openModal();

    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("auto");
    expect(trigger).toHaveFocus();
  });

  it("closes from the close button and from the overlay, not from the content", () => {
    const { dialog } = openModal();

    fireEvent.click(dialog);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.click(dialog.parentElement);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "About this site" }));
    fireEvent.click(
      screen.getByRole("button", { name: "Close site information" })
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("traps Tab focus inside the dialog in both directions", () => {
    openModal();
    const close = screen.getByRole("button", {
      name: "Close site information",
    });
    const last = within(screen.getByRole("dialog")).getByRole("link", {
      name: "GitHub",
    });

    fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
    expect(last).toHaveFocus();

    fireEvent.keyDown(document, { key: "Tab" });
    expect(close).toHaveFocus();
  });

  it("closes without restoring focus when nothing was focused before open", () => {
    const active = vi
      .spyOn(document, "activeElement", "get")
      .mockReturnValue(null);
    render(<Footer />);
    fireEvent.click(screen.getByRole("button", { name: "About this site" }));
    active.mockRestore();

    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("leaves Tab alone when focus is between the first and last items", () => {
    openModal();
    const close = screen.getByRole("button", {
      name: "Close site information",
    });

    expect(close).toHaveFocus();
    expect(fireEvent.keyDown(document, { key: "Tab" })).toBe(true);

    within(screen.getByRole("dialog"))
      .getByRole("link", { name: "GitHub" })
      .focus();
    expect(fireEvent.keyDown(document, { key: "Tab", shiftKey: true })).toBe(
      true
    );
    expect(fireEvent.keyDown(document, { key: "Enter" })).toBe(true);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
