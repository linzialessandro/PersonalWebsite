import React from 'react'
import { Github, BookOpen } from 'lucide-react'

const Teaching = () => {
  return (
    <div className="page-header">
      <div className="container">
        <h1>Teaching & Projects</h1>
        <p className="subtitle" style={{ margin: '0 auto 3rem auto' }}>Educational Initiatives and Open Source</p>
        
        <div className="document-content text-left">
          <div className="glass-card document-section">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={24} /> Mate-ematician
            </h3>
            <p style={{ color: '#f3f4f6', marginBottom: '1.5rem' }}>
              Mate-ematician is an initiative aimed at providing accessible mathematical resources and tools for students and educators. Through this project, I explore interactive ways to teach complex algebraic concepts, leveraging modern web technologies to make mathematics more intuitive.
            </p>
            
            <div className="resource-card" style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="resource-info" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '1rem', borderRadius: '50%' }}>
                  <Github size={28} color="#60a5fa" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>GitHub Repository</h4>
                  <p style={{ margin: '0.2rem 0 0 0', color: '#9ca3af' }}>View source code and materials</p>
                </div>
              </div>
              <a href="https://github.com/linzialessandro" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem' }}>
                <Github size={18} /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teaching
