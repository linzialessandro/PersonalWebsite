import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import CV from './pages/CV'
import Publications from './pages/Publications'
import Teaching from './pages/Teaching'
import AcademicNet from './pages/AcademicNet'
import AIGallery from './pages/AIGallery'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/academic-net" element={<AcademicNet />} />
          <Route path="/ai-gallery" element={<AIGallery />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
