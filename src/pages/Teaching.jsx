import React from 'react'
import { ExternalLink, Book, FileText, Download } from 'lucide-react'
import firstTexUrl from '../assets/FirstTeX.pdf'

const Teaching = () => {
  return (
    <div className="page-header">
      <div className="container">
        <h1>Teaching</h1>
        
        <div className="document-content text-left" style={{ marginTop: '3rem' }}>
          
          <div className="glass-card document-section" style={{ marginBottom: '2rem' }}>
            <h3>Book for Slovenian students of the School of Engineering and Management.</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', color: '#f3f4f6' }}>
              <li>I. Cristea, H. Bordbar, A. Linzi. <i>Matematika za gospodarski inženiring.</i> V Novi Gorici: Založba Univerze. ISBN: 978-961-7025-41-5. Pressbooks, 2024. <a href="https://books.ung.si/calculus22/" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'underline' }}>[LINK]</a></li>
            </ul>
          </div>

          <div className="glass-card document-section" style={{ marginBottom: '2rem' }}>
            <h3>GeoGebra</h3>
            <p style={{ color: '#f3f4f6', marginBottom: '1rem' }}>
              <a href="https://www.geogebra.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'underline' }}>GeoGebra</a> is a free mathematics platform that empowers students and educators with dynamic tools for learning and teaching. This comprehensive suite offers an extensive collection of interactive mathematical resources available directly through your web browser.
            </p>
          </div>

          <div className="glass-card document-section" style={{ marginBottom: '2rem' }}>
            <h3>LaTeX for Your First Paper</h3>
            <p style={{ color: '#f3f4f6', marginBottom: '1.5rem' }}>
              A concise essential guide written by me in the form of a presentation.
            </p>
            <a href={firstTexUrl} download target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', width: 'fit-content' }}>
              <Download size={18} /> Download Presentation
            </a>
          </div>

          <div className="glass-card document-section" style={{ marginBottom: '2rem' }}>
            <h3>LaTeX Resources for Users and Beginners</h3>
            
            <ul style={{ paddingLeft: '1.5rem', color: '#f3f4f6', lineHeight: '2' }}>
              <li>
                <a href="https://tug.org/TUGboat/Articles/tb23-2/tb74flynn.pdf" target="_blank" rel="noopener noreferrer" style={{color: '#60a5fa'}}>
                  A beginner's introduction to typesetting with LaTeX
                </a> — A gentle introduction by Peter Flynn.
              </li>
              <li>
                <a href="https://texdoc.org/serve/TeXbyTopic.pdf/0" target="_blank" rel="noopener noreferrer" style={{color: '#60a5fa'}}>
                  TeX by Topic
                </a> — A free online book by Victor Eijkhout.
              </li>
              <li>
                <a href="https://www.maths.tcd.ie/~dwilkins/LaTeXPrimer/" target="_blank" rel="noopener noreferrer" style={{color: '#60a5fa'}}>
                  Getting started with LaTeX
                </a> — A dedicated webpage by David R. Wilkins.
              </li>
              <li>
                <a href="https://users.dimi.uniud.it/~gianluca.gorni/" target="_blank" rel="noopener noreferrer" style={{color: '#60a5fa'}}>
                  TeX page
                </a> — Maintained by Prof. Gianluca Gorni.
              </li>
            </ul>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Italian Resources</h4>
            <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>Three very useful texts by Lorenzo Pantieri which I still consult very often:</p>
            <ul style={{ paddingLeft: '1.5rem', color: '#f3f4f6', lineHeight: '2' }}>
              <li><a href="http://www.lorenzopantieri.net/LaTeX_files/ArteLaTeX.pdf" target="_blank" rel="noopener noreferrer" style={{color: '#60a5fa'}}>L'arte di scrivere con LaTeX</a></li>
              <li><a href="http://www.lorenzopantieri.net/LaTeX_files/LaTeXimpaziente.pdf" target="_blank" rel="noopener noreferrer" style={{color: '#60a5fa'}}>LaTeX per l'impaziente</a></li>
              <li><a href="http://www.lorenzopantieri.net/LaTeX_files/LaTeXpedia.pdf" target="_blank" rel="noopener noreferrer" style={{color: '#60a5fa'}}>LaTeXpedia</a></li>
            </ul>
          </div>

          <div className="glass-card document-section" style={{ marginBottom: '2rem' }}>
            <h3>Mate-ematician</h3>
            <p style={{ color: '#f3f4f6', marginBottom: '1rem' }}>
              MacTutor is a free online resource containing biographies of more than 3000 mathematicians. <i>Mate-matician</i> is an app which I created to discover the wonderful MacTutor biographies repository in an interactive way. The app can be accessed through this link, using a google account. The link redirects to the public preview on the Google AI Studio platform. Let the browser load the app, then set it to full screen and try it yourself!
            </p>
            <p style={{ color: '#f3f4f6', marginBottom: '1.5rem' }}>
              Alternatively, here is the link to the GitHub repository.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://aistudio.google.com/apps/c765648a-02a0-4004-97fc-af6eb15db905" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', width: 'fit-content' }}>
                <ExternalLink size={18} /> Open App in AI Studio
              </a>
              <a href="https://github.com/linzialessandro" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', width: 'fit-content' }}>
                <ExternalLink size={18} /> View GitHub Repo
              </a>
            </div>
          </div>

          <div className="glass-card document-section" style={{ marginBottom: '2rem' }}>
            <h3>It seems everyone is talking about AI—but what's it all about?</h3>
            <p style={{ color: '#f3f4f6' }}>
              Here is the <a href="https://services.google.com/fh/files/misc/bia_ai-literacy-guide_en.pdf" target="_blank" rel="noopener noreferrer" style={{color: '#60a5fa', textDecoration: 'underline'}}>AI Literacy Guide</a> provided by Google.
            </p>
          </div>

        </div>
      </div>

      <section className="quote-section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="quote-mark">"</div>
          <p className="quote-text serif" style={{ fontSize: '1.5rem' }}>
            <i>[...] All such expressions as √-1, √-2, √-3, √-4 &amp;c. are consequently impossible, or imaginary numbers, since they represent roots of negative quantities; and of such numbers we may truly assert that they are neither nothing, nor greater than nothing, nor less than nothing; which necessarily constitutes them imaginary, or impossible. [...]</i>
          </p>
          <span className="quote-author">— Leonhard Euler. Elements of Algebra (Translation from French). Chapter XIII, page 43, paragraph 144.</span>
        </div>
      </section>

    </div>
  )
}

export default Teaching
