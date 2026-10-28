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
    isActive(path) ? "nav-link nav-link-active" : "nav-link";

  const mobileLinkClass = (path) =>
    isActive(path)
      ? "mobile-nav-link mobile-nav-link-active"
      : "mobile-nav-link";

  return (
    <header className="site-masthead">
      <div className="masthead-inner">
        <Link to="/" className="masthead-brand" onClick={closeMenu}>
          <img
            src={profilePhoto}
            alt=""
            width={24}
            height={24}
            className="avatar"
          />
          <span>{profile.shortName}</span>
        </Link>

        <button
          ref={buttonRef}
          className="lg:hidden icon-btn"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="masthead-nav-list">
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

      {isMenuOpen ? (
        <nav
          ref={menuRef}
          id="mobile-nav"
          aria-label="Mobile"
          className="mobile-nav lg:hidden"
        >
          <ul className="plain-list m-0 flex flex-col">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className={mobileLinkClass(link.path)}
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
