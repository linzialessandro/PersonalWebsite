import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../data/nav";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const isActive = (path) => location.pathname === path;
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const firstLink = menuRef.current?.querySelector("a");
    firstLink?.focus();

    const onPointerDown = (event) => {
      const target = event.target;
      if (
        menuRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }
      setIsMenuOpen(false);
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const linkClass = (path, compact) =>
    `font-mono rounded-full transition-all duration-300 whitespace-nowrap block ${
      compact
        ? "text-[13px] px-4 py-2"
        : "text-[14px] px-5 py-3.5 rounded-2xl w-full"
    } ${
      isActive(path)
        ? "bg-accent/10 text-accent font-medium shadow-[inset_0_0_0_1px_rgba(34,197,94,0.2)]"
        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
    }`;

  return (
    <header className="sticky top-6 z-50 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-background/80 backdrop-blur-xl border border-border/40 shadow-[0_8px_30px_rgb(0,0,0,0.4)] rounded-full p-2 pl-4 pr-2 flex justify-between items-center relative overflow-hidden">
          <div className="font-mono text-sm flex items-center shrink-0">
            <span className="text-accent font-medium">alessandro</span>
            <span className="text-muted-foreground/60 mx-1">@</span>
            <span className="text-muted-foreground font-medium hidden sm:inline">
              website
            </span>
            <span className="text-muted-foreground/60 ml-1">:</span>
            <span className="text-accent-cyan font-medium ml-1">~</span>
            <span className="text-muted-foreground/60 ml-1">$</span>
            <Link
              to="/"
              className="ml-2 text-foreground hover:text-accent transition-colors font-medium tracking-tight"
              onClick={closeMenu}
            >
              cd /home
            </Link>
          </div>

          <button
            ref={buttonRef}
            className="lg:hidden text-foreground p-2 z-50 relative rounded-full hover:bg-white/5 transition-colors"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <nav
            className="hidden lg:block overflow-x-auto scrollbar-hide"
            aria-label="Primary"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <ul className="flex items-center gap-1.5 pr-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass(link.path, true)}>
                    ./{link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-nav"
            role="navigation"
            aria-label="Mobile"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-2xl border border-border/40 shadow-2xl rounded-3xl overflow-hidden z-40 p-3"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.path} className="w-full">
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className={linkClass(link.path, false)}
                  >
                    ./{link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
