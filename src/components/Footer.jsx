import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border/40 bg-background/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground/80">
          &copy; {new Date().getFullYear()} <span className="text-foreground">Alessandro Linzi</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a href="mailto:linzi.alessandro@gmail.com" className="p-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-300" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://github.com/linzialessandro" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full transition-all duration-300" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/alessandro-linzi-65bb41354/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-[#0a66c2] hover:bg-[#0a66c2]/10 rounded-full transition-all duration-300" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
