import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { Phone, Search } from "lucide-react";

/*
 * Visuels animés de la page Publicité Google.
 * Mêmes règles que les cartes expertises : transform/opacity, boucles lentes,
 * état final statique sous prefers-reduced-motion.
 */

const LOOP = 9;
const EASE = [0.22, 1, 0.36, 1] as const;

function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(160deg, rgba(20, 22, 30, 0.96), rgba(11, 12, 17, 0.96))",
        border: "1px solid rgba(178, 192, 235, 0.12)",
        boxShadow: "inset 0 1px 0 rgba(210, 220, 255, 0.07)",
      }}
    >
      {children}
    </div>
  );
}

/* ── Hero : la démo grand format ─────────────────────────────────────── */

function HeroSkeleton() {
  return (
    <div className="rounded-xl px-4 py-3" style={{ border: "1px solid rgba(178, 192, 235, 0.1)" }}>
      <div className="h-2 w-1/2 rounded-full bg-white/[0.2]" />
      <div className="h-1.5 w-3/4 rounded-full bg-white/[0.18] mt-2.5" />
    </div>
  );
}

export function HeroSearchDemo() {
  const reduced = useReducedMotion();
  const SHIFT = 78;
  const t = { duration: LOOP, times: [0, 0.24, 0.38, 1], repeat: Infinity, ease: EASE };
  return (
    <div
      className="max-w-2xl mx-auto rounded-2xl"
      style={{
        boxShadow:
          "0 50px 160px -40px rgba(143, 208, 160, 0.22), 0 24px 70px -30px rgba(0, 0, 0, 0.8)",
      }}
    >
      <Panel>
      <div className="px-5 sm:px-7 pt-5 pb-6">
        {/* Barre de recherche */}
        <div
          className="flex items-center gap-3 rounded-full px-4 py-2.5 sm:py-3"
          style={{ background: "hsl(0 0% 100% / 0.06)", border: "1px solid hsl(0 0% 100% / 0.09)" }}
        >
          <Search className="w-4 h-4 text-foreground/40 shrink-0" strokeWidth={2} />
          {reduced ? (
            <span className="text-sm font-normal text-foreground/85">couvreur bordeaux</span>
          ) : (
            <>
              <motion.span
                className="inline-block overflow-hidden whitespace-nowrap text-sm font-normal text-foreground/85"
                initial={{ width: "0px" }}
                animate={{ width: ["0px", "0px", "142px", "142px"] }}
                transition={{ duration: LOOP, times: [0, 0.02, 0.18, 1], repeat: Infinity, ease: "linear" }}
              >
                couvreur bordeaux
              </motion.span>
              <motion.span
                className="w-[2px] h-4 bg-foreground/60 -ml-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </>
          )}
        </div>

        {/* Résultats */}
        <div className="relative mt-4" style={{ height: 226 }}>
          {/* Votre annonce */}
          <motion.div
            className="absolute inset-x-0 top-0 z-10 rounded-xl px-4 py-3.5"
            style={{
              background: "hsl(0 0% 100% / 0.09)",
              border: "1px solid hsl(0 0% 100% / 0.24)",
              boxShadow: "0 12px 40px -12px rgba(0,0,0,0.7)",
            }}
            initial={reduced ? { y: 0, opacity: 1 } : { y: SHIFT * 2, opacity: 0 }}
            animate={reduced ? { y: 0, opacity: 1 } : { y: [SHIFT * 2, SHIFT * 2, 0, 0], opacity: [0, 1, 1, 1] }}
            transition={reduced ? undefined : t}
          >
            <div className="flex items-center gap-2.5 flex-wrap">
              <span
                className="text-[10px] font-medium uppercase tracking-[0.08em] text-foreground/85 rounded px-1.5 py-0.5"
                style={{ border: "1px solid hsl(0 0% 100% / 0.3)" }}
              >
                Sponsorisé
              </span>
              <span className="text-sm font-semibold text-foreground">votre-entreprise.fr</span>
              <motion.span
                className="ml-auto inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium text-[#8FD0A0]"
                style={{ border: "1px solid rgba(143, 208, 160, 0.35)" }}
                initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                animate={reduced ? { opacity: 1, scale: 1 } : { opacity: [0, 0, 1, 1], scale: [0.9, 0.9, 1, 1] }}
                transition={reduced ? undefined : { duration: LOOP, times: [0, 0.44, 0.5, 1], repeat: Infinity, ease: EASE }}
              >
                <Phone className="w-3 h-3" strokeWidth={2} />
                Appels en direct
              </motion.span>
            </div>
            <div className="h-2 w-4/5 rounded-full bg-white/[0.24] mt-3" />
            <div className="h-1.5 w-3/5 rounded-full bg-white/[0.2] mt-2" />
          </motion.div>

          {/* Concurrents */}
          <motion.div
            className="absolute inset-x-0 top-0 space-y-3"
            initial={{ y: reduced ? SHIFT + 8 : 0 }}
            animate={reduced ? { y: SHIFT + 8 } : { y: [0, 0, SHIFT + 8, SHIFT + 8] }}
            transition={reduced ? undefined : t}
          >
            <HeroSkeleton />
            <HeroSkeleton />
          </motion.div>
        </div>

        <div className="text-center text-xs font-medium uppercase tracking-[0.18em] text-foreground/45 mt-1">
          Position n°1 · payée au clic uniquement
        </div>
      </div>
      </Panel>
    </div>
  );
}

/* ── 01 · Stratégie : le tri des recherches ──────────────────────────── */

const KEYWORDS = [
  { t: "couvreur bordeaux", good: true },
  { t: "fuite toiture urgence", good: true },
  { t: "couvreur gratuit", good: false },
  { t: "devis toiture bordeaux", good: true },
  { t: "formation couvreur", good: false },
];

export function KeywordsVisual() {
  const reduced = useReducedMotion();
  return (
    <Panel className="h-44 sm:h-48">
      <div className="px-4 pt-4 space-y-2">
        {KEYWORDS.map((k, i) => {
          const start = 0.05 + i * 0.08;
          const verdict = start + 0.28;
          return (
            <motion.div
              key={k.t}
              className="flex items-center justify-between gap-3 rounded-lg px-3 py-1.5"
              style={{ border: "1px solid rgba(178, 192, 235, 0.11)" }}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={
                reduced
                  ? { opacity: k.good ? 1 : 0.38 }
                  : {
                      opacity: [0, 0, 1, 1, k.good ? 1 : 0.38, k.good ? 1 : 0.38],
                      y: [8, 8, 0, 0, 0, 0],
                    }
              }
              transition={
                reduced
                  ? undefined
                  : { duration: LOOP, times: [0, start, start + 0.05, verdict, verdict + 0.05, 1], repeat: Infinity, ease: EASE }
              }
            >
              <span className={`text-xs font-normal ${k.good ? "text-foreground/85" : "text-foreground/60 line-through"}`}>
                {k.t}
              </span>
              <motion.span
                className={`font-mono text-[11px] ${k.good ? "text-[#8FD0A0]" : "text-[#D08F8F]"}`}
                initial={{ opacity: reduced ? 1 : 0 }}
                animate={reduced ? { opacity: 1 } : { opacity: [0, 0, 1, 1] }}
                transition={reduced ? undefined : { duration: LOOP, times: [0, verdict, verdict + 0.05, 1], repeat: Infinity }}
              >
                {k.good ? "✓" : "✕"}
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </Panel>
  );
}

/* ── 02 · Annonces : la meilleure variante gagne ─────────────────────── */

export function AdVariantsVisual() {
  const reduced = useReducedMotion();
  const reveal = { times: [0, 0.06, 0.14, 1] };
  const judge = 0.45;
  return (
    <Panel className="h-44 sm:h-48">
      <div className="px-4 pt-4 grid grid-cols-2 gap-3">
        {[
          { name: "Annonce A", ctr: "3,1 %", win: false },
          { name: "Annonce B", ctr: "11,2 %", win: true },
        ].map((v) => (
          <motion.div
            key={v.name}
            className="rounded-xl px-3 py-3"
            style={{ border: "1px solid hsl(0 0% 100% / 0.08)", background: "hsl(0 0% 100% / 0.03)" }}
            initial={reduced ? {} : { opacity: 0, y: 10 }}
            animate={
              reduced
                ? { opacity: v.win ? 1 : 0.45, scale: 1 }
                : {
                    opacity: [0, 0, 1, 1, v.win ? 1 : 0.45, v.win ? 1 : 0.45],
                    y: [10, 10, 0, 0, 0, 0],
                    scale: [1, 1, 1, 1, v.win ? 1.03 : 0.99, v.win ? 1.03 : 0.99],
                  }
            }
            transition={
              reduced
                ? undefined
                : { duration: LOOP, times: [0, reveal.times[1], reveal.times[2], judge, judge + 0.07, 1], repeat: Infinity, ease: EASE }
            }
          >
            <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-foreground/45">
              {v.name}
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/[0.2] mt-2.5" />
            <div className="h-1.5 w-2/3 rounded-full bg-white/[0.13] mt-1.5" />
            <div className="h-1.5 w-3/4 rounded-full bg-white/[0.13] mt-1.5" />
            <motion.div
              className={`mt-3 inline-flex items-center rounded-full px-2 py-0.5 font-mono text-[10px] ${
                v.win ? "text-[#8FD0A0]" : "text-foreground/50"
              }`}
              style={{
                border: v.win ? "1px solid rgba(143, 208, 160, 0.35)" : "1px solid hsl(0 0% 100% / 0.1)",
              }}
              initial={{ opacity: reduced ? 1 : 0 }}
              animate={reduced ? { opacity: 1 } : { opacity: [0, 0, 1, 1] }}
              transition={reduced ? undefined : { duration: LOOP, times: [0, judge, judge + 0.07, 1], repeat: Infinity }}
            >
              CTR {v.ctr}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="px-4 mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/35">
        Testées en continu, la meilleure reste
      </div>
    </Panel>
  );
}

/* ── 03 · CPC : l'enchère descend ────────────────────────────────────── */

export function CpcVisual() {
  const reduced = useReducedMotion();
  const mv = useMotionValue(reduced ? 0.56 : 1.24);
  const text = useTransform(mv, (v) => `${v.toFixed(2).replace(".", ",")} €`);

  useEffect(() => {
    if (reduced) return;
    let cancelled = false;
    let controls: ReturnType<typeof animate> | undefined;
    const run = () => {
      if (cancelled) return;
      mv.set(1.24);
      controls = animate(mv, 0.56, { duration: 2.4, delay: 1, ease: EASE });
      timer = window.setTimeout(run, LOOP * 1000);
    };
    let timer = 0;
    run();
    return () => {
      cancelled = true;
      controls?.stop();
      window.clearTimeout(timer);
    };
  }, [reduced, mv]);

  return (
    <Panel className="h-44 sm:h-48">
      <div className="h-full flex flex-col items-center justify-center px-4">
        <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/40">
          Coût par clic
        </div>
        <motion.div className="font-mono text-4xl sm:text-[2.6rem] font-semibold tracking-tight text-foreground mt-2">
          {text}
        </motion.div>
        <div className="mt-3 flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[11px] text-[#8FD0A0]"
            style={{ border: "1px solid rgba(143, 208, 160, 0.35)" }}
          >
            ↓ enchères optimisées
          </span>
        </div>
        <div className="w-3/4 h-1.5 rounded-full bg-white/[0.18] mt-4 overflow-hidden">
          <motion.div
            className="h-full rounded-full origin-left bg-[#8FD0A0]/70"
            initial={{ scaleX: reduced ? 0.45 : 1 }}
            animate={reduced ? { scaleX: 0.45 } : { scaleX: [1, 1, 0.45, 0.45] }}
            transition={reduced ? undefined : { duration: LOOP, times: [0, 0.11, 0.38, 1], repeat: Infinity, ease: EASE }}
          />
        </div>
      </div>
    </Panel>
  );
}

/* ── 04 · Page dédiée : la landing s'assemble ────────────────────────── */

export function LandingVisual() {
  const reduced = useReducedMotion();
  const block = (start: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: [0, 0, 1, 1], y: [10, 10, 0, 0] },
          transition: { duration: LOOP, times: [0, start, start + 0.07, 1], repeat: Infinity, ease: EASE },
        };
  return (
    <Panel className="h-44 sm:h-48">
      <div className="px-4 pt-4">
        <div className="rounded-xl p-3" style={{ border: "1px solid hsl(0 0% 100% / 0.08)" }}>
          {/* nav */}
          <motion.div className="flex items-center justify-between" {...block(0.05)}>
            <div className="h-1.5 w-14 rounded-full bg-white/[0.2]" />
            <div className="h-4 w-16 rounded-full bg-white/[0.18]" />
          </motion.div>
          {/* hero */}
          <motion.div className="mt-3" {...block(0.15)}>
            <div className="h-2.5 w-3/4 rounded-full bg-white/[0.22]" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/[0.1] mt-2" />
          </motion.div>
          {/* CTA */}
          <motion.div className="mt-3.5 flex items-center gap-2.5" {...block(0.28)}>
            <motion.div
              className="rounded-full bg-foreground text-background text-[10px] font-semibold px-3 py-1.5"
              animate={reduced ? {} : { scale: [1, 1, 1.06, 1, 1] }}
              transition={reduced ? undefined : { duration: LOOP, times: [0, 0.42, 0.47, 0.52, 1], repeat: Infinity, ease: EASE }}
            >
              Demander un devis
            </motion.div>
            <div
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-medium text-foreground/75"
              style={{ border: "1px solid hsl(0 0% 100% / 0.14)" }}
            >
              <Phone className="w-3 h-3" strokeWidth={2} />
              06 12 34 56 78
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/35"
          {...block(0.4)}
        >
          Un clic, une page, une action
        </motion.div>
      </div>
    </Panel>
  );
}

/* ── 05 · Tracking : tout se mesure ──────────────────────────────────── */

const BARS = [0.35, 0.5, 0.42, 0.62, 0.78, 0.95];

export function TrackingVisual() {
  const reduced = useReducedMotion();
  return (
    <Panel className="h-44 sm:h-48">
      <div className="px-4 pt-4 h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/40">
            Appels & devis mesurés
          </div>
          <motion.span
            className="font-mono text-[11px] text-[#8FD0A0]"
            initial={{ opacity: reduced ? 1 : 0 }}
            animate={reduced ? { opacity: 1 } : { opacity: [0, 0, 1, 1] }}
            transition={reduced ? undefined : { duration: LOOP, times: [0, 0.6, 0.68, 1], repeat: Infinity }}
          >
            +171 %
          </motion.span>
        </div>
        <div className="flex-1 flex items-end gap-2.5 pb-5 pt-3">
          {BARS.map((h, i) => {
            const start = 0.08 + i * 0.08;
            return (
              <div key={i} className="flex-1 h-full flex items-end rounded-t">
                <motion.div
                  className="w-full rounded-t"
                  style={{
                    height: `${h * 100}%`,
                    background: i === BARS.length - 1 ? "#8FD0A0" : "hsl(0 0% 100% / 0.3)",
                    transformOrigin: "bottom",
                  }}
                  initial={{ scaleY: reduced ? 1 : 0 }}
                  animate={reduced ? { scaleY: 1 } : { scaleY: [0, 0, 1, 1] }}
                  transition={reduced ? undefined : { duration: LOOP, times: [0, start, start + 0.1, 1], repeat: Infinity, ease: EASE }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Panel>
  );
}

/* ── Compteur : les chiffres se comptent quand ils entrent à l'écran ─── */

export function CountUpValue({
  value,
  decimals = 0,
  suffix = "",
  prefix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) =>
    `${prefix}${v.toLocaleString("fr-FR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`
  );

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(mv, value, { duration: 1.6, ease: EASE });
    return () => controls.stop();
  }, [inView, reduced, value, mv]);

  if (reduced) {
    return (
      <span ref={ref}>
        {prefix}
        {value.toLocaleString("fr-FR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
        {suffix}
      </span>
    );
  }
  return (
    <span ref={ref}>
      <motion.span>{text}</motion.span>
    </span>
  );
}
