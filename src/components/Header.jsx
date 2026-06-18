import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header glass">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Alessandro Linzi
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/cv" className={`nav-link ${isActive('/cv')}`} onClick={closeMenu}>CV</Link>
            </li>
            <li>
              <Link to="/publications" className={`nav-link ${isActive('/publications')}`} onClick={closeMenu}>Research</Link>
            </li>
            <li>
              <Link to="/teaching" className={`nav-link ${isActive('/teaching')}`} onClick={closeMenu}>Teaching</Link>
            </li>
            <li>
              <Link to="/academic-net" className={`nav-link ${isActive('/academic-net')}`} onClick={closeMenu}>Academic Net</Link>
            </li>
            <li>
              <Link to="/ai-gallery" className={`nav-link ${isActive('/ai-gallery')}`} onClick={closeMenu}>AI Gallery</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
