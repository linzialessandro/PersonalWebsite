import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isActive = (path) => {
    return location.pathname === path
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { name: 'cv.sh', path: '/cv' },
    { name: 'research.sh', path: '/publications' },
    { name: 'teaching.sh', path: '/teaching' },
    { name: 'academic-net.sh', path: '/academic-net' },
    { name: 'ai-gallery.sh', path: '/ai-gallery' },
  ]

  return (
    <header className="sticky top-6 z-50 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-background/80 backdrop-blur-xl border border-border/40 shadow-[0_8px_30px_rgb(0,0,0,0.4)] rounded-full p-2 pl-4 pr-2 flex justify-between items-center relative overflow-hidden">
          
          <div className="font-mono text-sm flex items-center shrink-0">
            <span className="text-accent font-medium">alessandro</span>
            <span className="text-muted-foreground/60 mx-1">@</span>
            <span className="text-primary font-medium hidden sm:inline">website</span>
            <span className="text-muted-foreground/60 ml-1">:</span>
            <span className="text-accent-cyan font-medium ml-1">~</span>
            <span className="text-muted-foreground/60 ml-1">$</span>
            <Link to="/" className="ml-2 text-foreground hover:text-accent transition-colors font-medium tracking-tight" onClick={closeMenu}>
              cd /home
            </Link>
          </div>
          
          <button className="lg:hidden text-foreground p-2 z-50 relative rounded-full hover:bg-white/5 transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <nav className="hidden lg:block overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <ul className="flex items-center gap-1.5 pr-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`font-mono text-[13px] px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap block ${
                      isActive(link.path) 
                        ? 'bg-accent/10 text-accent font-medium shadow-[inset_0_0_0_1px_rgba(34,197,94,0.2)]' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                    }`}
                  >
                    ./{link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-2xl border border-border/40 shadow-2xl rounded-3xl overflow-hidden z-40 p-3"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.path} className="w-full">
                  <Link 
                    to={link.path} 
                    onClick={closeMenu}
                    className={`block font-mono text-[14px] px-5 py-3.5 rounded-2xl transition-all w-full ${
                      isActive(link.path) 
                        ? 'bg-accent/10 text-accent font-medium shadow-[inset_0_0_0_1px_rgba(34,197,94,0.2)]' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                    }`}
                  >
                    ./{link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
