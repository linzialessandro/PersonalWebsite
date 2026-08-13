import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/nav";
import { profile } from "../data/profile";
import profilePhoto from "../assets/profile.jpg";

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

  const linkClass = (path) =>
    `block rounded-md px-3 py-2 text-sm tracking-tight transition-colors ${
      isActive(path)
        ? "text-foreground bg-white/5"
        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
    }`;

  return (
    <header className="sticky top-0 z-50 px-4 md:px-6 pt-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-background/80 backdrop-blur-xl border border-border/40 rounded-2xl px-4 py-2.5 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2.5 font-heading font-semibold text-[0.95rem] tracking-tight text-foreground hover:text-accent transition-colors"
            onClick={closeMenu}
          >
            <img
              src={profilePhoto}
              alt=""
              width={28}
              height={28}
              className="avatar"
            />
            {profile.shortName}
          </Link>

          <button
            ref={buttonRef}
            className="lg:hidden text-foreground p-2 rounded-full hover:bg-white/5 transition-colors"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-0.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass(link.path)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {isMenuOpen ? (
        <nav
          ref={menuRef}
          id="mobile-nav"
          aria-label="Mobile"
          className="mobile-nav lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className={`${linkClass(link.path)} px-4 py-3 text-[15px]`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
