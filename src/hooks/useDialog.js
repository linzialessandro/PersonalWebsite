import { useEffect, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function focusableIn(root) {
  return Array.from(root.querySelectorAll(FOCUSABLE));
}

function wrapTarget(items, active, backwards) {
  const first = items[0];
  const last = items[items.length - 1];
  if (backwards && active === first) return last;
  if (!backwards && active === last) return first;
  return null;
}

function trapTab(event, root) {
  const target = wrapTarget(
    focusableIn(root),
    document.activeElement,
    event.shiftKey
  );
  if (!target) return;
  event.preventDefault();
  target.focus();
}

function lockScroll() {
  const previous = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  return () => {
    document.body.style.overflow = previous;
  };
}

export function useDialog({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const root = dialogRef.current;
    const returnFocusTo = document.activeElement;
    focusableIn(root)[0]?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "Tab") {
        trapTab(event, root);
      }
    };

    const unlockScroll = lockScroll();
    document.addEventListener("keydown", onKeyDown);

    return () => {
      unlockScroll();
      document.removeEventListener("keydown", onKeyDown);
      if (returnFocusTo instanceof HTMLElement) returnFocusTo.focus();
    };
  }, [isOpen, onClose]);

  return dialogRef;
}
