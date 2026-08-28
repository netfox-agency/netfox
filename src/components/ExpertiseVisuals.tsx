import { motion, useReducedMotion } from "framer-motion";
import { Search } from "lucide-react";

/*
 * Visuels animés des cartes expertises (façon bento).
 * Contraintes : transform/opacity en priorité (largeur animée limitée aux petits
 * spans du faux code), boucles lentes avec temps de repos, état final statique
 * sous prefers-reduced-motion.
 */

const LOOP = 9; // durée d'un cycle complet, en secondes
const EASE = [0.22, 1, 0.36, 1] as const;

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative h-44 sm:h-48 rounded-2xl overflow-hidden mb-6"
      style={{
        background: "rgba(0, 0, 0, 0.35)",
        border: "1px solid hsl(0 0% 100% / 0.06)",
        boxShadow: "inset 0 1px 0 hsl(0 0% 100% / 0.04)",
      }}
    >
      {children}
    </div>
  );
}

/* ── 01 · Sites & design : le code s'écrit ───────────────────────────── */

type Seg = { t: string; c: string };
const CODE: Seg[][] = [
  [
    { t: "const ", c: "#B48EF7" },
    { t: "site", c: "#D6DAE2" },
    { t: " = ", c: "#6E7480" },
    { t: "creerSite", c: "#7FB4E8" },
    { t: "({", c: "#6E7480" },
  ],
  [
    { t: "  design", c: "#D6DAE2" },
    { t: ": ", c: "#6E7480" },
    { t: '"sur-mesure"', c: "#8FD0A0" },
    { t: ",", c: "#6E7480" },
  ],
  [
    { t: "  seo", c: "#D6DAE2" },
    { t: ": ", c: "#6E7480" },
    { t: "true", c: "#B48EF7" },
    { t: ",", c: "#6E7480" },
  ],
  [
    { t: "  objectif", c: "#D6DAE2" },
    { t: ": ", c: "#6E7480" },
    { t: '"clients"', c: "#8FD0A0" },
    { t: ",", c: "#6E7480" },
  ],
  [{ t: "});", c: "#6E7480" }],
  [
    { t: "deploy", c: "#7FB4E8" },
    { t: "(site)", c: "#6E7480" },
    { t: "  ✓ en ligne", c: "#8FD0A0" },
  ],
];

export function CodeVisual() {
  const reduced = useReducedMotion();
  const perLine = 0.09; // part du cycle par ligne
  return (
    <Frame>
      <div className="flex items-center gap-3 px-4 py-2 border-b border-white/[0.05]">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#5a4344]" />
          <span className="w-2 h-2 rounded-full bg-[#5a5343]" />
          <span className="w-2 h-2 rounded-full bg-[#43524a]" />
        </div>
        <span className="font-mono text-[10px] text-foreground/35">index.tsx</span>
      </div>
      <div className="px-4 py-2.5 font-mono text-[11px] sm:text-xs leading-[1.6]">
        {CODE.map((line, i) => {
          const start = 0.04 + i * perLine;
          const end = start + perLine * 0.9;
          const content = line.map((s, j) => (
            <span key={j} style={{ color: s.c }}>
              {s.t}
            </span>
          ));
          return (
            <div key={i} className="whitespace-nowrap">
              {reduced ? (
                <span className="inline-block whitespace-nowrap align-bottom">{content}</span>
              ) : (
                <motion.span
                  className="inline-block overflow-hidden align-bottom whitespace-nowrap"
                  initial={{ width: "0%" }}
                  animate={{ width: ["0%", "0%", "100%", "100%"] }}
                  transition={{ duration: LOOP, times: [0, start, end, 1], repeat: Infinity, ease: "linear" }}
                >
                  {content}
                </motion.span>
              )}
            </div>
          );
        })}
        {!reduced && (
          <motion.span
            className="absolute left-4 bottom-2.5 w-[7px] h-3.5 bg-foreground/70"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>
    </Frame>
  );
}

/* ── 02 · Publicité Google : l'annonce prend la première place ───────── */

function SkeletonResult() {
  return (
    <div className="rounded-xl px-3.5 py-2.5" style={{ border: "1px solid hsl(0 0% 100% / 0.05)" }}>
      <div className="h-1.5 w-2/3 rounded-full bg-white/[0.13]" />
      <div className="h-1.5 w-2/5 rounded-full bg-white/[0.07] mt-2" />
    </div>
  );
}

export function AdsVisual() {
  const reduced = useReducedMotion();
  const SHIFT = 58; // décalage des concurrents quand l'annonce s'installe
  return (
    <Frame>
      <div className="px-4 pt-3.5">
        {/* Barre de recherche */}
        <div
          className="flex items-center gap-2.5 rounded-full px-3.5 py-2"
          style={{ background: "hsl(0 0% 100% / 0.06)", border: "1px solid hsl(0 0% 100% / 0.08)" }}
        >
          <Search className="w-3.5 h-3.5 text-foreground/40 shrink-0" strokeWidth={2} />
          {reduced ? (
            <span className="text-xs font-normal text-foreground/80 whitespace-nowrap">couvreur bordeaux</span>
          ) : (
            <motion.span
              className="inline-block overflow-hidden whitespace-nowrap text-xs font-normal text-foreground/80"
              initial={{ width: "0px" }}
              animate={{ width: ["0px", "0px", "128px", "128px"] }}
              transition={{ duration: LOOP, times: [0, 0.03, 0.2, 1], repeat: Infinity, ease: "linear" }}
            >
              couvreur bordeaux
            </motion.span>
          )}
        </div>

        {/* Résultats */}
        <div className="relative mt-3" style={{ height: 170 }}>
          {/* L'annonce : arrive du bas et prend la position 1 */}
          <motion.div
            className="absolute inset-x-0 top-0 z-10 rounded-xl px-3.5 py-2.5"
            style={{
              background: "hsl(0 0% 100% / 0.09)",
              border: "1px solid hsl(0 0% 100% / 0.22)",
              boxShadow: "0 8px 28px -10px rgba(0,0,0,0.6)",
            }}
            initial={reduced ? { y: 0, opacity: 1 } : { y: SHIFT * 2, opacity: 0 }}
            animate={
              reduced
                ? { y: 0, opacity: 1 }
                : { y: [SHIFT * 2, SHIFT * 2, 0, 0], opacity: [0, 1, 1, 1] }
            }
            transition={
              reduced
                ? undefined
                : { duration: LOOP, times: [0, 0.26, 0.4, 1], repeat: Infinity, ease: EASE }
            }
          >
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] font-medium uppercase tracking-[0.06em] text-foreground/85 rounded px-1.5 py-0.5"
                style={{ border: "1px solid hsl(0 0% 100% / 0.3)" }}
              >
                Sponsorisé
              </span>
              <span className="text-xs font-medium text-foreground">votre-entreprise.fr</span>
            </div>
            <div className="h-1.5 w-3/4 rounded-full bg-white/[0.16] mt-2" />
          </motion.div>

          {/* Concurrents : glissent d'un cran vers le bas */}
          <motion.div
            className="absolute inset-x-0 top-0 space-y-2.5"
            initial={reduced ? { y: SHIFT } : { y: 0 }}
            animate={reduced ? { y: SHIFT } : { y: [0, 0, SHIFT, SHIFT] }}
            transition={reduced ? undefined : { duration: LOOP, times: [0, 0.26, 0.4, 1], repeat: Infinity, ease: EASE }}
          >
            <SkeletonResult />
            <SkeletonResult />
          </motion.div>
        </div>
      </div>
    </Frame>
  );
}

/* ── 03 · Référencement naturel : votre site grimpe en tête ──────────── */

export function SeoVisual() {
  const reduced = useReducedMotion();
  const ROW = 34;
  // Votre site part de la 4e place et grimpe palier par palier.
  const climbTimes = [0, 0.2, 0.3, 0.38, 0.48, 0.56, 0.66, 1];
  const climbY = [ROW * 3, ROW * 3, ROW * 2, ROW * 2, ROW, ROW, 0, 0];
  // Chaque concurrent descend d'un cran au moment où votre site le dépasse :
  // le rang 3 (index 2) d'abord, puis le rang 2, puis le rang 1.
  const OVERTAKE: [number, number][] = [
    [0.56, 0.66], // index 0 (rang 1)
    [0.38, 0.48], // index 1 (rang 2)
    [0.2, 0.3], // index 2 (rang 3)
  ];

  return (
    <Frame>
      <div className="px-4 pt-3.5">
        <div className="text-[10px] uppercase tracking-[0.2em] font-medium text-foreground/35 mb-2">
          Résultats Google
        </div>
        <div className="relative" style={{ height: ROW * 4 }}>
          {/* rangs fixes */}
          {[1, 2, 3, 4].map((n, i) => (
            <div
              key={n}
              className="absolute left-0 font-mono text-[11px] text-foreground/30"
              style={{ top: i * ROW + 8 }}
            >
              {n}.
            </div>
          ))}
          {/* votre site */}
          <motion.div
            className="absolute left-6 right-0 flex items-center gap-2 rounded-lg px-3 py-2"
            style={{
              background: "hsl(0 0% 100% / 0.09)",
              border: "1px solid hsl(0 0% 100% / 0.2)",
            }}
            initial={{ y: reduced ? 0 : ROW * 3 }}
            animate={reduced ? { y: 0 } : { y: climbY }}
            transition={reduced ? undefined : { duration: LOOP, times: climbTimes, repeat: Infinity, ease: EASE }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8FD0A0] shrink-0" />
            <span className="text-xs font-medium text-foreground">votre-site.fr</span>
            <span className="ml-auto text-[10px] font-mono text-[#8FD0A0]">↑</span>
          </motion.div>
          {/* concurrents */}
          {[0, 1, 2].map((i) => {
            const [a, b] = OVERTAKE[i];
            return (
              <motion.div
                key={i}
                className="absolute left-6 right-0 rounded-lg px-3 py-2.5"
                style={{ border: "1px solid hsl(0 0% 100% / 0.05)" }}
                initial={{ y: reduced ? (i + 1) * ROW : i * ROW }}
                animate={
                  reduced
                    ? { y: (i + 1) * ROW }
                    : { y: [i * ROW, i * ROW, (i + 1) * ROW, (i + 1) * ROW] }
                }
                transition={
                  reduced
                    ? undefined
                    : { duration: LOOP, times: [0, a, b, 1], repeat: Infinity, ease: EASE }
                }
              >
                <div className="h-1.5 w-1/2 rounded-full bg-white/[0.12]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Frame>
  );
}

/* ── 04 · Tunnels de conversion : on ne garde que ce qui rapporte ────── */

const FUNNEL = [
  { label: "Visiteurs", pct: "100 %", w: 1, dim: true },
  { label: "Clics", pct: "32 %", w: 0.56, dim: true },
  { label: "Appels", pct: "11 %", w: 0.26, dim: true },
  { label: "Clients", pct: "4,6 %", w: 0.12, dim: false },
];

export function FunnelVisual() {
  const reduced = useReducedMotion();
  return (
    <Frame>
      <div className="px-4 pt-3.5 space-y-3">
        {FUNNEL.map((f, i) => {
          const start = 0.06 + i * 0.1;
          const end = start + 0.12;
          return (
            <div key={f.label}>
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-xs font-medium text-foreground/75">{f.label}</span>
                <motion.span
                  className={`font-mono text-xs ${f.dim ? "text-foreground/55" : "text-[#8FD0A0]"}`}
                  initial={{ opacity: reduced ? 1 : 0 }}
                  animate={reduced ? { opacity: 1 } : { opacity: [0, 0, 1, 1] }}
                  transition={reduced ? undefined : { duration: LOOP, times: [0, end - 0.02, end + 0.04, 1], repeat: Infinity }}
                >
                  {f.pct}
                </motion.span>
              </div>
              <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  className="h-full rounded-full origin-left"
                  style={{
                    width: `${f.w * 100}%`,
                    background: f.dim ? "hsl(0 0% 100% / 0.28)" : "#8FD0A0",
                  }}
                  initial={{ scaleX: reduced ? 1 : 0 }}
                  animate={reduced ? { scaleX: 1 } : { scaleX: [0, 0, 1, 1] }}
                  transition={reduced ? undefined : { duration: LOOP, times: [0, start, end, 1], repeat: Infinity, ease: EASE }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Frame>
  );
}
