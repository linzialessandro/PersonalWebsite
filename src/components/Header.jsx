import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'

// Import asset
import firstTexUrl from '../assets/FirstTeX.pdf'

const Header = () => {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className="header glass">
      <div className="container header-container">
        <Link to="/" className="logo">
          Alessandro Linzi
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
            </li>
            <li>
              <Link to="/cv" className={`nav-link ${isActive('/cv')}`}>CV</Link>
            </li>
            <li className="dropdown">
              <span className={`nav-link ${isActive('/publications')}`} style={{cursor: 'pointer'}}>Research ▾</span>
              <div className="dropdown-content glass">
                <Link to="/publications" className="dropdown-item">Publications</Link>
                <a href={firstTexUrl} target="_blank" rel="noopener noreferrer" className="dropdown-item">First TeX</a>
                <Link to="/dialogues" className="dropdown-item">Dialogues</Link>
              </div>
            </li>
            <li>
              <Link to="/teaching" className={`nav-link ${isActive('/teaching')}`}>Teaching</Link>
            </li>
            <li>
              <Link to="/academic-net" className={`nav-link ${isActive('/academic-net')}`}>Academic Net</Link>
            </li>
            <li>
              <Link to="/ai-gallery" className={`nav-link ${isActive('/ai-gallery')}`}>AI Gallery</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
