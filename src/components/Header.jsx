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
        <div className="prompt">
          <span className="prompt-user">alessandro</span>
          <span className="prompt-char">@</span>
          <span className="prompt-host">website</span>
          <span className="prompt-char">:</span>
          <span className="prompt-dir">~</span>
          <span className="prompt-char">$</span>
          <Link to="/" className="logo" onClick={closeMenu} style={{ marginLeft: '0.5rem', color: 'inherit' }}>
            cd /home
          </Link>
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/cv" className={`nav-link ${isActive('/cv')}`} onClick={closeMenu}>./cv.sh</Link>
            </li>
            <li>
              <Link to="/publications" className={`nav-link ${isActive('/publications')}`} onClick={closeMenu}>./research.sh</Link>
            </li>
            <li>
              <Link to="/teaching" className={`nav-link ${isActive('/teaching')}`} onClick={closeMenu}>./teaching.sh</Link>
            </li>
            <li>
              <Link to="/academic-net" className={`nav-link ${isActive('/academic-net')}`} onClick={closeMenu}>./academic-net.sh</Link>
            </li>
            <li>
              <Link to="/ai-gallery" className={`nav-link ${isActive('/ai-gallery')}`} onClick={closeMenu}>./ai-gallery.sh</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
