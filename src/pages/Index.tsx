import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { TypingEffect } from "@/components/ui/typing-effect";
import ContactModal from "@/components/ContactModal";
import HomeSections from "@/components/HomeSections";
import { ExamplesGallery } from "@/components/ShowcaseGallery";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Le shader reste éclatant sur le splash, puis s'assombrit sous le contenu
  // pour préserver le contraste des textes (voile lié au scroll).
  const { scrollY } = useScroll();
  const dimOpacity = useTransform(scrollY, [0, 500, 900], [0, 0.35, 0.72]);
  const reduced = useReducedMotion();

  // Les liens profonds (netfox.ai/#realisations) ne scrollent pas seuls dans
  // une SPA : l'ancre n'existe pas encore au moment du scroll initial du navigateur.
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView();
  }, []);

  return (
    <div className="relative flex flex-col" style={{ background: 'transparent' }}>
      <WebGLShader />
      {/* Voile teinté comme le fond du site (pas du noir pur), sinon la
          bascule entre le shader et les sections se voit. */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none bg-background"
        style={{ opacity: dimOpacity, zIndex: 0 }}
      />

      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-16 md:py-20 lg:py-24 rounded-2xl"
          style={{
            border: '1px solid rgba(178, 192, 235, 0.12)',
            background: 'rgba(10, 11, 16, 0.5)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'inset 0 1px 0 rgba(210, 220, 255, 0.07)',
          }}
        >
          {/* Typing Effect Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="w-full overflow-hidden"
          >
            {/* h1 : le titre visible est un effet machine à écrire, le texte
                complet reste lisible par les moteurs et lecteurs d'écran */}
            <h1>
              <span className="sr-only">
                Netfox, la maison digitale qui aide les entreprises à obtenir
                plus de clients grâce à Internet et aux IA
              </span>
              <TypingEffect
                texts={["Créons le futur.", "L'excellence digitale."]}
                /* Taille plafonnée : au-delà, « L'excellence digitale. » passe
                   sur deux lignes et fait sauter tout le bloc à chaque rotation. */
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground w-full text-balance"
                typingSpeed={100}
                rotationInterval={3500}
              />
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-foreground/75 text-sm sm:text-base md:text-lg lg:text-xl font-normal tracking-wide max-w-lg mx-auto mt-4 sm:mt-6"
          >
            La maison digitale qui aide les entreprises à obtenir plus de clients grâce à Internet et aux IA.
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
          </motion.div>

          {/* Lien réalisations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-6 sm:mt-8"
          >
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="link-underline text-foreground/60 hover:text-foreground text-xs sm:text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-300 py-3 px-2 -my-3"
            >
              Voir les réalisations
            </button>
          </motion.div>
        </motion.div>

        {/* Repère de défilement : sans lui, le splash occupe tout l'écran d'un
            téléphone et rien n'indique qu'il y a la suite en dessous. */}
        <motion.a
          href="#services"
          aria-label="Découvrir la suite"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-11 h-11"
        >
          <motion.span
            className="flex items-start justify-center w-6 h-9 rounded-full border border-foreground/25 pt-2"
            animate={reduced ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="w-1 h-1.5 rounded-full bg-foreground/50" />
          </motion.span>
        </motion.a>
      </main>

      <HomeSections
        onApply={() => setIsModalOpen(true)}
        onShowExamples={() => setIsGalleryOpen(true)}
      />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative py-4 sm:py-6 md:py-8 px-4 sm:px-6"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-light">© Netfox</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline font-light">L'excellence digitale</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:contact@netfox-agency.com" className="link-underline font-light hover:text-foreground/80 transition-colors inline-flex items-center min-h-[44px]">
              contact@netfox-agency.com
            </a>
            <a href="/mentions-legales" className="link-underline font-light hover:text-foreground/80 transition-colors inline-flex items-center min-h-[44px]">
              Mentions légales
            </a>
          </div>
        </div>
      </motion.footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ExamplesGallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </div>
  );
};

export default Index;
