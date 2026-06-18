import React from 'react'
import { FileText, Download, Bot, ExternalLink } from 'lucide-react'
import TerminalWindow from '../components/TerminalWindow'

// Import asset
import cvUrl from '../assets/cv-alessandro-linzi.pdf'

const CV = () => {
  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      <TerminalWindow title="cat cv.md" delay={0}>
        <div className="page-header" style={{ padding: '1rem 0' }}>
          <h1 style={{ marginBottom: '1rem' }}>Curriculum Vitae</h1>
          <p className="subtitle" style={{ margin: '0 auto 3rem auto' }}>My Academic Background and Experience</p>
        </div>
        
        <div className="document-content text-left">
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Bot size={24} /> Interactive AI CV
            </h3>
            <p style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Explore my background, experience, and publications through an interactive AI-powered conversational interface. Ask questions about my research in Valuation Theory, my academic journey, or my teaching experience.
            </p>
            
            <div className="resource-card">
              <div className="resource-info" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(34, 211, 238, 0.2)', padding: '1rem', borderRadius: '50%' }}>
                  <Bot size={28} color="var(--accent-primary)" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>Interactive AI CV</h4>
                  <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-secondary)' }}>Powered by Google AI Studio</p>
                </div>
              </div>
              <a href="https://aistudio.google.com/apps/c765648a-02a0-4004-97fc-af6eb15db905" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem' }}>
                [ Launch App ] <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <FileText size={24} /> Standard CV Document
            </h3>
            <div className="resource-card">
              <div className="resource-info" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(34, 211, 238, 0.2)', padding: '1rem', borderRadius: '50%' }}>
                  <FileText size={28} color="var(--accent-primary)" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>Alessandro Linzi - CV</h4>
                  <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-secondary)' }}>Detailed Curriculum Vitae (PDF format)</p>
                </div>
              </div>
              <a href={cvUrl} download="cv-alessandro-linzi.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem' }}>
                <Download size={18} /> [ Download CV ]
              </a>
            </div>
            
            <div style={{ marginTop: '2rem', textAlign: 'left' }}>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                You can download my full CV using the button above. The document contains comprehensive details regarding my:
              </p>
              <ul style={{ listStyleType: 'square', paddingLeft: '2rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Academic Education</li>
                <li>Research Experience and Positions</li>
                <li>Publications and Preprints</li>
                <li>Conferences and Talks</li>
                <li>Teaching Experience</li>
              </ul>
            </div>
          </div>

        </div>
      </TerminalWindow>

      <TerminalWindow title="./godel_quote.sh" delay={300}>
        <section className="quote-section" style={{ padding: '2rem 0' }}>
          <div className="quote-mark">"</div>
          <p className="quote-text serif" style={{ fontSize: '1.2rem' }}>
            <i>[...] One can (assuming the consistency of classical mathematics) even give examples of propositions [...] which are really contentually true but are unprovable in the formal system of classical mathematics. Therefore if one adjoins the negation of such a proposition to the axioms of classical mathematics, one obtains a consistent system in which a contentually false proposition is provable.</i>
          </p>
          <span className="quote-author">— Kurt Gödel. Könisberg, September 7, 1930. Discussion on the Foundation of Mathematics, Translated and edited by J. W. Dawson Jr., History and Philosophy of Logic, 5:1. 1984.</span>
        </section>
      </TerminalWindow>
    </div>
  )
}

export default CV
