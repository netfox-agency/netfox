import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import cleanelLive from "@/assets/portfolio/cleanel-live.jpg";
import rcmLive from "@/assets/portfolio/rcm-live.jpg";
import npsLive from "@/assets/portfolio/nps-live.jpg";
import southstreetLive from "@/assets/portfolio/southstreet-live.jpg";
import artisaLive from "@/assets/portfolio/artisa-live.jpg";
import cycyLive from "@/assets/portfolio/cycy-live.jpg";
import nimesLive from "@/assets/portfolio/nimes-live.jpg";
import summerpartyLive from "@/assets/portfolio/summerparty-live.jpg";
import flashfreeplayLive from "@/assets/portfolio/flashfreeplay-live.jpg";
import gombertoisLive from "@/assets/portfolio/gombertois-live.jpg";
import demoLoccar from "@/assets/portfolio/demo-loccar.jpg";
import demoCoteprivee from "@/assets/portfolio/demo-coteprivee.jpg";
import cpDetailedny from "@/assets/portfolio/cp-detailedny.jpg";
import cpPrestige from "@/assets/portfolio/cp-prestige.jpg";
import cpCslpv from "@/assets/portfolio/cp-cslpv.jpg";
import cpVitres from "@/assets/portfolio/cp-vitres.jpg";
import cpVoiture from "@/assets/portfolio/cp-voiture.jpg";

// Sites clients en ligne + exemples repris des sites RentyPage et CleaningPage,
// sans noms affichés : le défilé montre le travail, les prospects n'ont rien à googler.
export const SHOWCASE = [
  cleanelLive,
  cpDetailedny,
  summerpartyLive,
  rcmLive,
  demoLoccar,
  artisaLive,
  cpVitres,
  cycyLive,
  demoCoteprivee,
  southstreetLive,
  cpPrestige,
  npsLive,
  nimesLive,
  cpVoiture,
  gombertoisLive,
  flashfreeplayLive,
  cpCslpv,
];

export function ShowcaseRow({
  items,
  direction = "left",
  duration = 80,
}: {
  items: string[];
  direction?: "left" | "right";
  duration?: number;
}) {
  const reduced = useReducedMotion();
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2 sm:py-3">
      <motion.div
        className="flex gap-3 sm:gap-5 md:gap-6 w-max"
        initial={direction === "right" ? { x: "-50%" } : undefined}
        animate={reduced ? undefined : { x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((src, i) => (
          <figure
            key={i}
            className="relative shrink-0 h-[clamp(150px,28vh,320px)] aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden"
            style={{
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          >
            <img
              src={src}
              alt="Création Netfox"
              className="w-full h-full object-cover object-top"
              draggable={false}
              loading="lazy"
            />
          </figure>
        ))}
      </motion.div>
    </div>
  );
}

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

/** Galerie plein écran : deux rangées de créations qui défilent, sans noms. */
export function ExamplesGallery({ isOpen, onClose }: GalleryProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col"
          style={{
            background: "rgba(6, 6, 9, 0.85)",
            backdropFilter: "blur(40px) saturate(1.6)",
            WebkitBackdropFilter: "blur(40px) saturate(1.6)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-between gap-4 px-5 sm:px-10 pt-5 sm:pt-8 pb-2"
          >
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-foreground/60 font-medium">
              Sites & design · Une sélection de créations
            </div>
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shrink-0"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px) saturate(1.8)",
                WebkitBackdropFilter: "blur(20px) saturate(1.8)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              <X className="h-4 w-4 text-foreground/90" />
            </button>
          </motion.div>

          <div className="relative flex-1 flex flex-col justify-center overflow-hidden">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10"
              style={{ background: "linear-gradient(to right, rgba(6,6,9,1) 0%, rgba(6,6,9,0) 100%)" }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10"
              style={{ background: "linear-gradient(to left, rgba(6,6,9,1) 0%, rgba(6,6,9,0) 100%)" }}
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <ShowcaseRow items={SHOWCASE.filter((_, i) => i % 2 === 0)} direction="left" duration={70} />
              <ShowcaseRow items={SHOWCASE.filter((_, i) => i % 2 === 1)} direction="right" duration={85} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-[10px] sm:text-xs uppercase tracking-[0.3em] text-foreground/50 font-medium pb-6 sm:pb-8"
          >
            Chaque création est en ligne et travaille pour son entreprise · ESC pour fermer
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
