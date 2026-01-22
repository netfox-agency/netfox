import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Liquid Glass Background Orbs */}
      <div 
        className="glass-orb w-[600px] h-[600px] bg-gradient-to-br from-white/20 to-transparent top-[-200px] right-[-100px]"
        style={{ animation: 'float 20s ease-in-out infinite' }}
      />
      <div 
        className="glass-orb w-[500px] h-[500px] bg-gradient-to-tr from-white/10 to-transparent bottom-[-150px] left-[-100px]"
        style={{ animation: 'float-slow 25s ease-in-out infinite' }}
      />
      <div 
        className="glass-orb w-[300px] h-[300px] bg-white/5 top-[40%] left-[20%]"
        style={{ animation: 'pulse-soft 8s ease-in-out infinite' }}
      />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Logo - Tie Icon (reproducing the exact shape from the image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12"
        >
          <svg 
            viewBox="0 0 80 180" 
            className="w-10 h-20"
            fill="none"
          >
            {/* Tie knot - diamond shape */}
            <path 
              d="M40 0 L55 20 L40 40 L25 20 Z" 
              fill="#8B1A1A"
            />
            {/* Tie body - elegant tapered shape */}
            <path 
              d="M32 40 L40 170 L48 40 Q44 50 40 55 Q36 50 32 40 Z" 
              fill="#8B1A1A"
            />
          </svg>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9] mb-8"
        >
          <span className="text-shimmer">Créons le futur.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-muted-foreground text-base sm:text-lg font-light tracking-wide max-w-md"
        >
          Maison digitale de luxe. Sites web d'exception.
        </motion.p>

        {/* CTA Button - Art Digital Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative"
          >
            {/* Animated border gradient */}
            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-sm" />
            
            {/* Main button */}
            <div className="relative overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.02]">
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              <div className="relative flex items-center gap-5 px-7 py-4">
                <span className="text-[13px] font-light tracking-[0.15em] text-foreground/70 group-hover:text-foreground transition-colors duration-500">
                  Créer votre projet
                </span>
                
                {/* Arrow circle */}
                <div className="relative w-9 h-9 rounded-full border border-white/[0.12] flex items-center justify-center overflow-hidden group-hover:border-white/25 transition-all duration-500">
                  <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <svg 
                    className="relative w-3.5 h-3.5 text-foreground/50 group-hover:text-foreground transition-all duration-500 group-hover:translate-x-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
          <div className="flex items-center gap-2">
            <span className="font-light">© Netfox</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline font-light">L'excellence digitale</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="mailto:contact@netfox-agency.com" className="link-underline font-light hover:text-foreground/80 transition-colors">
              contact@netfox-agency.com
            </a>
          </div>
        </div>
      </motion.footer>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Index;
