import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-background">

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
      {/* Accent orb bordeaux subtil */}
      <div 
        className="glass-orb w-[400px] h-[400px] bg-gradient-to-br from-[#8B1E3F]/10 to-transparent top-[20%] right-[10%]"
        style={{ animation: 'float-slow 18s ease-in-out infinite reverse' }}
      />

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Main Title avec animation plus visible */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-tighter leading-[0.85] mb-6"
        >
          <span className="text-shimmer-enhanced">Créons le futur.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-muted-foreground text-base sm:text-lg md:text-xl font-light tracking-wide max-w-lg"
        >
          Maison digitale de luxe. Sites web d'exception.
        </motion.p>

        {/* CTA Button Premium - Style Apple moderne */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 sm:mt-16"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="cta-premium group relative px-8 sm:px-12 py-4 sm:py-5 rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.03] active:scale-[0.98]"
          >
            {/* Gradient background animé */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground to-foreground/90 transition-all duration-500" />
            
            {/* Bordure subtile */}
            <div className="absolute inset-0 rounded-full border border-white/10" />
            
            {/* Shine effect premium */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </div>
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#8B1E3F]/20 via-transparent to-[#8B1E3F]/20 blur-xl" />
            
            <span className="relative z-10 text-background font-medium text-sm sm:text-[15px] tracking-wide flex items-center gap-3">
              Créer votre projet
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 py-6 sm:py-8 px-6"
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
