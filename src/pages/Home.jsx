import React from 'react'
import { Github, Linkedin, ChevronRight } from 'lucide-react'
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
            <div className="hero-desc" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                I am a mathematician specializing in the model theory of valued fields and algebraic hyperstructures (hyperfields, polygroups), with broader interests spanning valuation theory, mathematical logic, and the foundations of computation. My doctoral research established novel connections across these areas, leading to publications in journals such as Journal of Algebra and Israel Journal of Mathematics.
              </p>
              <p>
                My expertise extends to constructive logic, proof theory, and category theory, with a particular interest in the computational interpretation of logical principles, including the Curry–Howard correspondence. I am especially drawn to the role of logic as a bridge between foundational mathematics, AI theory, and aspects of quantum logic.
              </p>
              <p>
                Alongside research, I have significant teaching experience at the university level and have contributed to collaborative projects and mentoring of graduate students.
              </p>
              <p>
                Further details about my work and publications can be found on this page.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1.5rem' }}>
              <a href="mailto:alessandro.linzi.phd@icloud.com" className="btn btn-primary">
                Contact Me
              </a>
              <Link to="/publications" className="btn btn-outline">
                View Publications <ChevronRight size={18} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
            
            <div className="social-links" style={{ marginTop: '1.5rem' }}>
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
            [...] 1+1=2<br/>
            Dem. [...]<br/>
            <i>The above proposition is occasionally useful. It is used at least three times, [...]</i>
          </p>
          <span className="quote-author">— Bertrand Russell. Principia Mathematica. 1912. Volume II, p. 83 in the 2nd edition.</span>
        </div>
      </section>
    </div>
  )
}

export default Home
