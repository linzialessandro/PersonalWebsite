import React from 'react'
import { FileText, Download } from 'lucide-react'

// Import assets
import archimedesUrl from '../assets/Dialogues/Archimedes.pdf'
import bellavitisUrl from '../assets/Dialogues/Bellavitis.pdf'
import erdosUrl from '../assets/Dialogues/Erdos.pdf'
import fibonacciUrl from '../assets/Dialogues/Fibonacci.pdf'
import godelUrl from '../assets/Dialogues/Godel.pdf'
import hilbertUrl from '../assets/Dialogues/Hilbert.pdf'
import leibnizUrl from '../assets/Dialogues/Leibniz.pdf'
import russellUrl from '../assets/Dialogues/Russell.pdf'
import turingUrl from '../assets/Dialogues/Turing.pdf'

const AIGallery = () => {
  const dialogues = [
    { name: "Archimedes", url: archimedesUrl },
    { name: "Bellavitis", url: bellavitisUrl },
    { name: "Erdos", url: erdosUrl },
    { name: "Fibonacci", url: fibonacciUrl },
    { name: "Godel", url: godelUrl },
    { name: "Hilbert", url: hilbertUrl },
    { name: "Leibniz", url: leibnizUrl },
    { name: "Russell", url: russellUrl },
    { name: "Turing", url: turingUrl }
  ]

  return (
    <div className="page-header">
      <div className="container">
        <h1>AI Gallery</h1>
        <p className="subtitle" style={{ margin: '0 auto 3rem auto' }}>Conversations with great mathematical minds</p>
        
        <div className="document-content text-left">
          <div className="glass-card document-section">
            <h3 style={{ marginBottom: '1.5rem' }}>AI-Generated Dialogues</h3>
            <p style={{ color: '#f3f4f6', marginBottom: '2rem' }}>
              A collection of imaginative dialogues featuring historical figures in mathematics and computer science. 
              These texts explore their foundational ideas and historical contexts.
            </p>
            
            <div className="grid-2">
              {dialogues.map((person, index) => (
                <div key={index} className="resource-card" style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '1rem' }}>
                  <div className="resource-info" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ background: 'rgba(139, 92, 246, 0.2)', padding: '0.75rem', borderRadius: '50%' }}>
                      <FileText size={20} color="#a78bfa" />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#fff' }}>{person.name}</h4>
                      <p style={{ margin: '0.2rem 0 0 0', color: '#9ca3af', fontSize: '0.85rem' }}>PDF Dialogue</p>
                    </div>
                  </div>
                  <a href={person.url} download={`${person.name}.pdf`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
                    <Download size={16} /> Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIGallery
