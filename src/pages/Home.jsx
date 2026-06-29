import React, { useState } from 'react'
import { Github, Linkedin, ChevronRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TerminalWindow from '../components/TerminalWindow'
import SiteInfoModal from '../components/SiteInfoModal'
import { Info } from 'lucide-react'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <div className="container mx-auto px-6 pt-12 pb-24 md:pt-20">
      
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Left Column: Typography & Identity */}
        <motion.div className="lg:col-span-5 flex flex-col justify-center h-full pt-4" variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-mono mb-6 w-max">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Research Profile
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-on-primary font-heading drop-shadow-md">
            Alessandro Linzi
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 font-body leading-relaxed max-w-md">
            Mathematician specializing in the model theory of valued fields, constructive logic, and the foundations of computation.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="mailto:alessandro.linzi.phd@icloud.com" className="group relative inline-flex items-center justify-center px-6 py-3 font-mono text-sm font-medium text-background bg-accent rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              <span className="relative flex items-center gap-2">
                <Mail size={16} /> Contact Me
              </span>
            </a>
            
            <Link to="/publications" className="group inline-flex items-center justify-center px-6 py-3 font-mono text-sm font-medium text-foreground border border-border rounded-lg transition-all hover:border-accent hover:text-accent hover:bg-accent/5">
              Publications <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <a href="https://github.com/linzialessandro" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-accent transition-colors rounded-full hover:bg-accent/10">
              <Github size={22} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/alessandro-linzi-65bb41354/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-[#0a66c2] transition-colors rounded-full hover:bg-[#0a66c2]/10">
              <Linkedin size={22} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Terminal Window */}
        <motion.div className="lg:col-span-7" variants={itemVariants}>
          <TerminalWindow title="cat profile.txt" delay={300}>
            <div className="flex flex-col gap-4 text-muted-foreground">
              <p>
                <span className="text-accent-cyan font-bold"># EXPERTISE</span><br/>
                My doctoral research established novel connections across the model theory of valued fields and algebraic hyperstructures (hyperfields, polygroups). This work led to publications in leading journals such as Journal of Algebra and Israel Journal of Mathematics.
              </p>
              <p>
                <span className="text-accent-cyan font-bold"># RESEARCH_INTERESTS</span><br/>
                My expertise extends to constructive logic, proof theory, and category theory. I am deeply interested in the computational interpretation of logical principles, particularly the Curry–Howard correspondence. I view logic as a bridge connecting foundational mathematics, AI theory, and quantum logic.
              </p>
              <p>
                <span className="text-accent-cyan font-bold"># ACADEMIC_EXPERIENCE</span><br/>
                Alongside research, I have substantial teaching experience at the university level. I actively contribute to collaborative projects and mentor graduate students to foster the next generation of mathematical logicians.
              </p>
              <p className="text-accent mt-2">
                &gt; Execute ./research.sh for full publication list.
              </p>
            </div>
          </TerminalWindow>
        </motion.div>

      </motion.div>

      {/* Quote Section */}
      <motion.div 
        className="mt-24 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative p-8 md:p-12 rounded-2xl bg-secondary/20 border border-border/40 backdrop-blur-sm">
          <div className="absolute -top-6 -left-2 text-6xl text-accent/20 font-serif leading-none">"</div>
          <p className="text-lg md:text-xl font-body text-foreground leading-relaxed italic mb-6">
            [...] 1+1=2<br/>
            Dem. [...]<br/>
            The above proposition is occasionally useful. It is used at least three times, [...]
          </p>
          <div className="flex items-center gap-4">
            <div className="h-px bg-border/80 flex-grow max-w-[40px]"></div>
            <span className="font-mono text-sm text-muted-foreground uppercase tracking-wider">
              Bertrand Russell. Principia Mathematica. 1912.
            </span>
          </div>
        </div>
      </motion.div>

      <button 
        className="fixed bottom-6 right-6 p-3 rounded-full bg-secondary/80 backdrop-blur-md border border-border/50 text-muted-foreground hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all z-40 group"
        onClick={() => setIsModalOpen(true)}
        aria-label="Site Information"
        title="Site Information"
      >
        <Info size={24} className="group-hover:scale-110 transition-transform" />
      </button>

      <SiteInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default Home
