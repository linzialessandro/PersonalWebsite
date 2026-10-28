import { useEffect, useRef, useState } from "react";

export function useMobileMenu(pathname) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((open) => !open);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;

    menuRef.current.querySelector("a")?.focus();

    const isInside = (target) =>
      menuRef.current?.contains(target) || buttonRef.current.contains(target);

    const onPointerDown = (event) => {
      if (!isInside(event.target)) setIsOpen(false);
    };

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      buttonRef.current.focus();
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return { isOpen, close, toggle, menuRef, buttonRef };
}
