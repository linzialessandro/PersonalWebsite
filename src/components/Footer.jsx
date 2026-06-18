import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Alessandro Linzi. All rights reserved.</p>
        <div className="social-links" style={{ marginTop: '0.5rem' }}>
          <a href="mailto:linzi.alessandro@gmail.com" className="social-icon" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://github.com/linzialessandro" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/alessandro-linzi" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
