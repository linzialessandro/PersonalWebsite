import React from 'react'
import { Info, X } from 'lucide-react'
import TerminalWindow from './TerminalWindow'

const SiteInfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <TerminalWindow title="./site_info.sh" delay={0}>
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ margin: 0 }}>Site Information</h2>
              <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
                <X size={24} />
              </button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="info-block">
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-success)' }}>&gt;</span> Open Source
                </h3>
                <p>
                  This entire website is open source under the MIT License. Feel free to explore the source code on my GitHub.
                </p>
              </div>

              <div className="info-block">
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-success)' }}>&gt;</span> Privacy
                </h3>
                <p>
                  There are no cookies, trackers, or other invasive technologies here. The only tracking mechanism is Google Search Console, which I had to use strictly to ensure the website gets indexed on Google.
                </p>
              </div>

              <div className="info-block">
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-success)' }}>&gt;</span> Acknowledgements
                </h3>
                <p>
                  Finally, I must mention that some tasks in building this website were delegated to AI agents. I am warmly grateful to my silicon-based assistants—they type faster than me and don't require coffee breaks.
                </p>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  )
}

export default SiteInfoModal
