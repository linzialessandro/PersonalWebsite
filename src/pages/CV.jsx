import React from 'react'
import { FileText, Download } from 'lucide-react'

// Import asset
import cvUrl from '../assets/cv-alessandro-linzi.pdf'

const CV = () => {
  return (
    <div className="page-header">
      <div className="container">
        <h1 style={{ marginBottom: '1rem' }}>Curriculum Vitae</h1>
        <p className="subtitle" style={{ margin: '0 auto 3rem auto' }}>My Academic Background and Experience</p>
        
        <div className="document-content text-left">
          <div className="glass-card">
            <div className="resource-card" style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="resource-info" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '1rem', borderRadius: '50%' }}>
                  <FileText size={28} color="#60a5fa" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>Alessandro Linzi - CV</h4>
                  <p style={{ margin: '0.2rem 0 0 0', color: '#9ca3af' }}>Detailed Curriculum Vitae (PDF format)</p>
                </div>
              </div>
              <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem' }}>
                <Download size={18} /> Download CV
              </a>
            </div>
            
            <div style={{ marginTop: '3rem', textAlign: 'left' }}>
              <p style={{ marginBottom: '1.5rem', color: '#f3f4f6' }}>
                You can download my full CV using the button above. The document contains comprehensive details regarding my:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: '#9ca3af', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Academic Education</li>
                <li>Research Experience and Positions</li>
                <li>Publications and Preprints</li>
                <li>Conferences and Talks</li>
                <li>Teaching Experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV
