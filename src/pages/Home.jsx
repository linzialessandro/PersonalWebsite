import React from 'react'
import { Mail, Github, Linkedin, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content glass-card">
            <span className="subtitle">Research Profile</span>
            <h1 style={{ marginBottom: '1.5rem' }}>Alessandro Linzi</h1>
            <p className="hero-desc">
              I am a mathematician primarily working in Valuation Theory. My research interests include valued fields, ordered algebraic structures, valuation independence, and algebraic hyperstructures. 
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a href="mailto:linzi.alessandro@gmail.com" className="btn btn-primary">
                Contact Me
              </a>
              <Link to="/publications" className="btn btn-outline">
                View Publications <ChevronRight size={18} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/linzialessandro" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/alessandro-linzi" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container">
          <div className="quote-mark">"</div>
          <p className="quote-text serif">
            Mathematics, rightly viewed, possesses not only truth, but supreme beauty—a beauty cold and austere, like that of sculpture, without appeal to any part of our weaker nature, without the gorgeous trappings of painting or music, yet sublimely pure, and capable of a stern perfection such as only the greatest art can show.
          </p>
          <span className="quote-author">— Bertrand Russell</span>
        </div>
      </section>
    </div>
  )
}

export default Home
