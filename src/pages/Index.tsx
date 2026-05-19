import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { TypingEffect } from "@/components/ui/typing-effect";
import ContactModal from "@/components/ContactModal";
import ResultsGallery from "@/components/ResultsGallery";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);


  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: 'transparent' }}>
      <WebGLShader />

      <main className="relative flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-16 md:py-20 lg:py-24 rounded-2xl"
          style={{
            border: '1px solid hsl(0 0% 100% / 0.08)',
            background: 'hsl(0 0% 0% / 0.3)',
            backdropFilter: 'blur(2px)',
          }}
        >
          {/* Typing Effect Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="w-full overflow-hidden"
          >
            <TypingEffect
              texts={["Créons le futur.", "L'excellence digitale."]}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tighter text-foreground w-full"
              typingSpeed={100}
              rotationInterval={3500}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide max-w-lg mx-auto mt-4 sm:mt-6"
          >
            Maison digitale de luxe. Sites web d'exception.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <LiquidButton
              size="xl"
              onClick={() => setIsModalOpen(true)}
              className="text-foreground text-xs sm:text-sm md:text-base tracking-wide rounded-full px-6 sm:px-10 py-3 sm:py-4"
            >
              Créer votre projet
            </LiquidButton>
            <LiquidButton
              size="xl"
              onClick={() => setIsGalleryOpen(true)}
              className="text-foreground/90 text-xs sm:text-sm md:text-base tracking-wide rounded-full px-6 sm:px-10 py-3 sm:py-4"
            >
              Effleurez notre atelier
            </LiquidButton>

          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative py-4 sm:py-6 md:py-8 px-4 sm:px-6"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-muted-foreground/60">
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

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ResultsGallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </div>
  );
};

export default Index;
