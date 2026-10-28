import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/nav";
import { profile } from "../data/profile";
import { useMobileMenu } from "../hooks/useMobileMenu";
import siteMark from "../assets/site-mark.svg";

const linkClass = (base, isActive) =>
  isActive ? `${base} ${base}-active` : base;

const NavList = ({ className, linkBase, pathname, onNavigate }) => (
  <ul className={className}>
    {navLinks.map((link) => (
      <li key={link.path}>
        <Link
          to={link.path}
          onClick={onNavigate}
          className={linkClass(linkBase, pathname === link.path)}
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
);

const Header = () => {
  const { pathname } = useLocation();
  const menu = useMobileMenu(pathname);

  return (
    <header className="site-masthead">
      <div className="masthead-inner">
        <Link to="/" className="masthead-brand" onClick={menu.close}>
          <img
            src={siteMark}
            alt=""
            width={24}
            height={24}
            className="avatar"
          />
          <span>{profile.shortName}</span>
        </Link>

        <button
          ref={menu.buttonRef}
          className="lg:hidden icon-btn"
          onClick={menu.toggle}
          aria-label={menu.isOpen ? "Close menu" : "Open menu"}
          aria-expanded={menu.isOpen}
          aria-controls="mobile-nav"
        >
          {menu.isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav className="hidden lg:block" aria-label="Primary">
          <NavList
            className="masthead-nav-list"
            linkBase="nav-link"
            pathname={pathname}
          />
        </nav>
      </div>

      {menu.isOpen ? (
        <nav
          ref={menu.menuRef}
          id="mobile-nav"
          aria-label="Mobile"
          className="mobile-nav lg:hidden"
        >
          <NavList
            className="plain-list m-0 flex flex-col"
            linkBase="mobile-nav-link"
            pathname={pathname}
            onNavigate={menu.close}
          />
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
