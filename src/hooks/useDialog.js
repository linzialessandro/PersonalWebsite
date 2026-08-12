import { useEffect, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function useDialog({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const lastFocusRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    lastFocusRef.current = document.activeElement;
    const root = dialogRef.current;
    const focusable = () =>
      root ? Array.from(root.querySelectorAll(FOCUSABLE)) : [];

    const first = focusable()[0];
    first?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !root) return;

      const items = focusable();
      if (items.length === 0) return;

      const firstEl = items[0];
      const lastEl = items[items.length - 1];

      if (event.shiftKey && document.activeElement === firstEl) {
        event.preventDefault();
        lastEl.focus();
      } else if (!event.shiftKey && document.activeElement === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      if (lastFocusRef.current instanceof HTMLElement) {
        lastFocusRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  return dialogRef;
}
