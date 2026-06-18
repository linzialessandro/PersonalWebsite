import React from 'react'
import { Bot, ExternalLink } from 'lucide-react'

const AIGallery = () => {
  return (
    <div className="page-header">
      <div className="container">
        <h1>AI Gallery</h1>
        <p className="subtitle" style={{ margin: '0 auto 3rem auto' }}>Interactive AI experiences and applications</p>
        
        <div className="document-content text-left">
          <div className="glass-card document-section">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bot size={24} /> Interactive CV
            </h3>
            <p style={{ color: '#f3f4f6', marginBottom: '1.5rem' }}>
              Explore my background, experience, and publications through an interactive AI-powered conversational interface. Ask questions about my research in Valuation Theory, my academic journey, or my teaching experience.
            </p>
            
            <div className="resource-card" style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="resource-info" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '1rem', borderRadius: '50%' }}>
                  <Bot size={28} color="#60a5fa" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>Interactive AI CV</h4>
                  <p style={{ margin: '0.2rem 0 0 0', color: '#9ca3af' }}>Powered by Google AI Studio</p>
                </div>
              </div>
              <a href="https://aistudio.google.com/apps/c765648a-02a0-4004-97fc-af6eb15db905" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem' }}>
                Launch App <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIGallery
