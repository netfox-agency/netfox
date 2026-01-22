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
        {/* Logo - Exact tie shape from the image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-14"
        >
          <svg 
            viewBox="0 0 60 140" 
            className="w-8 h-[70px]"
            fill="none"
          >
            {/* Tie knot - diamond/rhombus shape */}
            <path 
              d="M30 0 L42 15 L30 30 L18 15 Z" 
              fill="#8B1E1E"
            />
            {/* Tie body - curved elegant shape with pointed end */}
            <path 
              d="M22 30 
                 Q20 45 22 60 
                 Q24 80 28 100 
                 L30 130 
                 L32 100 
                 Q36 80 38 60 
                 Q40 45 38 30 
                 Q34 35 30 38 
                 Q26 35 22 30 Z" 
              fill="#8B1E1E"
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

        {/* CTA Button - Apple Style, visible and elegant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative px-8 py-4 rounded-full bg-foreground text-background font-normal text-[15px] tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] active:scale-[0.98]"
          >
            <span className="relative z-10">Créer votre projet</span>
            
            {/* Subtle shine effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
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
