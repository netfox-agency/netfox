"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import resultArtisa from "@/assets/result-artisa.png";
import resultBakery from "@/assets/result-bakery.webp";
import resultElectricity from "@/assets/result-electricity.webp";
import resultAnimated from "@/assets/result-animated.webp";

const RESULTS = [
  { src: resultArtisa, title: "Artisa", subtitle: "E-commerce cosmétique" },
  { src: resultBakery, title: "Smart Bakery", subtitle: "Landing cinématique" },
  { src: resultElectricity, title: "Énergie", subtitle: "Dashboard analytique" },
  { src: resultAnimated, title: "Motion", subtitle: "Expérience animée" },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResultsGallery({ isOpen, onClose }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % RESULTS.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + RESULTS.length) % RESULTS.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const next = () => setIndex((i) => (i + 1) % RESULTS.length);
  const prev = () => setIndex((i) => (i - 1 + RESULTS.length) % RESULTS.length);

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
            background: "rgba(8, 8, 12, 0.72)",
            backdropFilter: "blur(40px) saturate(1.6)",
            WebkitBackdropFilter: "blur(40px) saturate(1.6)",
          }}
        >
          {/* Top bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-between px-6 sm:px-10 py-5"
          >
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-foreground/50 font-light">
                Résultats de notre studio
              </span>
              <span className="text-sm sm:text-base text-foreground/80 font-light mt-1">
                {String(index + 1).padStart(2, "0")} / {String(RESULTS.length).padStart(2, "0")}
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="group relative h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
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

          {/* Image stage */}
          <div className="relative flex-1 flex items-center justify-center px-4 sm:px-12 pb-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-6xl max-h-full flex flex-col items-center"
              >
                <div
                  className="relative rounded-2xl overflow-hidden w-full"
                  style={{
                    boxShadow:
                      "0 40px 120px rgba(0,0,0,0.6), 0 8px 32px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.08)",
                  }}
                >
                  <img
                    src={RESULTS[index].src}
                    alt={RESULTS[index].title}
                    className="w-full h-auto max-h-[68vh] object-cover block"
                    draggable={false}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="mt-6 text-center"
                >
                  <h3 className="text-xl sm:text-2xl font-extralight tracking-tight text-foreground">
                    {RESULTS[index].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/50 font-light mt-1 tracking-wide">
                    {RESULTS[index].subtitle}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={prev}
              aria-label="Précédent"
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px) saturate(1.8)",
                WebkitBackdropFilter: "blur(20px) saturate(1.8)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              <ChevronLeft className="h-5 w-5 text-foreground/90" />
            </button>
            <button
              onClick={next}
              aria-label="Suivant"
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px) saturate(1.8)",
                WebkitBackdropFilter: "blur(20px) saturate(1.8)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              <ChevronRight className="h-5 w-5 text-foreground/90" />
            </button>
          </div>

          {/* Thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center gap-2 sm:gap-3 pb-6 sm:pb-8 px-4"
          >
            {RESULTS.map((r, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Voir ${r.title}`}
                className="relative h-12 w-16 sm:h-14 sm:w-20 rounded-lg overflow-hidden transition-all duration-500"
                style={{
                  opacity: i === index ? 1 : 0.4,
                  transform: i === index ? "scale(1.05)" : "scale(1)",
                  boxShadow:
                    i === index
                      ? "0 0 0 1px rgba(255,255,255,0.6), 0 8px 24px rgba(0,0,0,0.4)"
                      : "0 0 0 1px rgba(255,255,255,0.1)",
                }}
              >
                <img src={r.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
