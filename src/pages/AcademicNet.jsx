import React from 'react'
import { Link2, ExternalLink } from 'lucide-react'

const AcademicNet = () => {
  const networks = [
    {
      name: "ResearchGate",
      description: "Follow my latest research updates and publications.",
      url: "https://www.researchgate.net/profile/Alessandro-Linzi",
      color: "#00ccbb"
    },
    {
      name: "Google Scholar",
      description: "View my citation metrics and academic footprint.",
      url: "https://scholar.google.com/citations?user=eX42s68AAAAJ",
      color: "#4285F4"
    },
    {
      name: "ORCID",
      description: "My ORCID academic identifier and record.",
      url: "https://orcid.org/0000-0002-8615-5645",
      color: "#A6CE39"
    },
    {
      name: "arXiv",
      description: "Access my preprints and latest mathematical articles.",
      url: "https://arxiv.org/a/linzi_a_1.html",
      color: "#B31B1B"
    }
  ]

  return (
    <div className="page-header">
      <div className="container">
        <h1>Academic Network</h1>
        <p className="subtitle" style={{ margin: '0 auto 3rem auto' }}>Connect with my research across different platforms</p>
        
        <div className="document-content text-left">
          <div className="grid-2">
            {networks.map((net, index) => (
              <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: net.color, borderBottom: 'none', marginBottom: '0.5rem' }}>
                  <Link2 size={24} /> {net.name}
                </h3>
                <p style={{ color: '#9ca3af', flex: 1, marginBottom: '1.5rem' }}>
                  {net.description}
                </p>
                <a href={net.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', width: 'fit-content' }}>
                  Visit Profile <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcademicNet
