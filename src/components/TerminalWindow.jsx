import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TerminalWindow = ({ title = "bash", children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#0a0a0a]/90 border border-border/50 rounded-xl mb-8 overflow-hidden shadow-2xl backdrop-blur-md"
    >
      <div className="bg-secondary/40 px-4 py-2.5 flex items-center border-b border-border/40">
        <div className="flex gap-2 mr-4">
          <span className="w-3 h-3 rounded-full bg-red-500 border border-red-600/50"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-600/50"></span>
          <span className="w-3 h-3 rounded-full bg-green-500 border border-green-600/50"></span>
        </div>
        <div className="text-muted-foreground text-xs flex-grow text-center mr-12 font-mono">
          {title}
        </div>
      </div>
      <div className="p-6 md:p-8 text-foreground font-mono text-base md:text-lg leading-relaxed relative min-h-[200px]">
        {isVisible && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {/* We map over the children to animate them sequentially if possible, 
                otherwise we just fade the whole block. */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -5 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {children}
            </motion.div>
            <motion.span
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="inline-block w-2.5 h-[1.2em] bg-accent align-middle mt-4 animate-[blink_1s_step-end_infinite]"
            ></motion.span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TerminalWindow;
