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
        {/* Logo - Tie Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12"
        >
          <svg 
            viewBox="0 0 100 200" 
            className="w-12 h-24"
            fill="none"
          >
            {/* Tie knot */}
            <path 
              d="M50 10 L65 25 L50 40 L35 25 Z" 
              fill="#8B1A1A"
            />
            {/* Tie body */}
            <path 
              d="M42 40 L50 160 L58 40 Z" 
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative overflow-hidden px-10 py-5 rounded-full bg-foreground text-background font-light text-sm tracking-widest uppercase transition-all duration-700 hover:tracking-[0.3em]"
          >
            <span className="relative z-10">Collaborer</span>
            <div className="absolute inset-0 bg-gradient-to-r from-foreground via-muted-foreground to-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
            <a href="mailto:contact@netfox.studio" className="link-underline font-light hover:text-foreground/80 transition-colors">
              contact@netfox.studio
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
