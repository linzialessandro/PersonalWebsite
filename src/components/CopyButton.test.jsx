import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import CopyButton from "./CopyButton";

const setClipboard = (value) =>
  Object.defineProperty(navigator, "clipboard", {
    value,
    configurable: true,
  });

const click = async (button) => {
  await act(async () => {
    fireEvent.click(button);
  });
};

describe("CopyButton", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => {
    vi.useRealTimers();
    setClipboard(undefined);
  });

  it("copies text, shows Copied, then resets", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    setClipboard({ writeText });
    render(<CopyButton text="hello" label="Copy" />);

    const button = screen.getByRole("button", { name: "Copy" });
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveAttribute("aria-live", "polite");
    expect(button).not.toHaveAttribute("aria-label");

    await click(button);
    expect(writeText).toHaveBeenCalledWith("hello");
    expect(screen.getByRole("button", { name: "Copied" })).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1600);
    });
    expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument();
  });

  it("shows Copy failed when writeText rejects", async () => {
    setClipboard({ writeText: vi.fn().mockRejectedValue(new Error("no")) });
    render(<CopyButton text="x" label="Copy" />);
    await click(screen.getByRole("button"));
    expect(
      screen.getByRole("button", { name: "Copy failed" })
    ).toBeInTheDocument();
  });

  it("shows Copy failed when the clipboard is missing", async () => {
    setClipboard(undefined);
    render(<CopyButton text="x" label="Copy" />);
    await click(screen.getByRole("button"));
    expect(
      screen.getByRole("button", { name: "Copy failed" })
    ).toBeInTheDocument();
  });

  it("uses ariaLabel when idle and status text otherwise", async () => {
    setClipboard({ writeText: vi.fn().mockResolvedValue(undefined) });
    render(<CopyButton text="x" label="Copy" ariaLabel="Copy prompt: A" />);
    const button = screen.getByRole("button", { name: "Copy prompt: A" });
    expect(button).toHaveTextContent("Copy");
    await click(button);
    expect(button).toHaveAttribute("aria-label", "Copied");
    expect(button).toHaveTextContent("Copied");
  });
});
