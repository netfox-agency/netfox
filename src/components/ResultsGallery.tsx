"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import resultArtisa from "@/assets/result-artisa.png";
import resultBakery from "@/assets/result-bakery.webp";
import resultElectricity from "@/assets/result-electricity.webp";
import resultAnimated from "@/assets/result-animated.webp";
import resultYacht from "@/assets/result-yacht.gif";

const RESULTS = [
  { src: resultArtisa, title: "Artisa", subtitle: "E-commerce cosmétique" },
  { src: resultBakery, title: "Smart Bakery", subtitle: "Landing cinématique" },
  { src: resultYacht, title: "Yacht Club", subtitle: "Expérience immersive" },
  { src: resultElectricity, title: "Énergie", subtitle: "Dashboard analytique" },
  { src: resultAnimated, title: "Motion", subtitle: "Direction artistique" },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function Row({
  items,
  direction = "left",
  duration = 60,
}: {
  items: typeof RESULTS;
  direction?: "left" | "right";
  duration?: number;
}) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2 sm:py-3 md:py-4">
      <motion.div
        className="flex gap-3 sm:gap-5 md:gap-6 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((r, i) => (
          <figure
            key={i}
            className="group relative shrink-0 w-[clamp(220px,58vw,560px)] aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden"
            style={{
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          >
            <img
              src={r.src}
              alt={r.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              draggable={false}
              loading="lazy"
            />
            <figcaption
              className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex items-end justify-between gap-2"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)",
              }}
            >
              <div>
                <div className="text-foreground text-sm sm:text-base font-light tracking-tight">
                  {r.title}
                </div>
                <div className="text-foreground/60 text-[10px] sm:text-xs font-light tracking-wide">
                  {r.subtitle}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </div>
  );
}

export default function ResultsGallery({ isOpen, onClose }: Props) {
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

  // Split into two rows scrolling opposite directions
  const rowA = RESULTS;
  const rowB = [...RESULTS].reverse();

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
            background: "rgba(8, 8, 12, 0.78)",
            backdropFilter: "blur(40px) saturate(1.6)",
            WebkitBackdropFilter: "blur(40px) saturate(1.6)",
          }}
        >
          {/* Top bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start justify-between gap-4 px-5 sm:px-10 pt-6 sm:pt-10 pb-2"
          >
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-foreground/50 font-light">
                Maison Netfox
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-foreground mt-2 italic">
                Quelques œuvres choisies
              </h2>
              <p className="text-xs sm:text-sm text-foreground/50 font-light mt-2 max-w-md">
                Un instant suspendu dans notre atelier.
              </p>
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

          {/* Scrolling rows */}
          <div className="relative flex-1 flex flex-col justify-center overflow-hidden">
            {/* Edge fades */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10"
              style={{
                background:
                  "linear-gradient(to right, rgba(8,8,12,1) 0%, rgba(8,8,12,0) 100%)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10"
              style={{
                background:
                  "linear-gradient(to left, rgba(8,8,12,1) 0%, rgba(8,8,12,0) 100%)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Row items={rowA} direction="left" duration={55} />
              <Row items={rowB} direction="right" duration={70} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-[10px] sm:text-xs uppercase tracking-[0.3em] text-foreground/40 font-light pb-6 sm:pb-8"
          >
            ESC pour fermer
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
