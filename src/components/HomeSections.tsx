import { motion, useReducedMotion } from "framer-motion";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
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

const EASE = [0.22, 1, 0.36, 1] as const;

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-muted-foreground font-light">
      {children}
    </p>
  );
}

// Sites clients en ligne + exemples repris des sites RentyPage et CleaningPage,
// sans noms affichés : le défilé montre le travail, les prospects n'ont rien à googler.
const SHOWCASE = [
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

function ShowcaseRow({
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

const EXPERTISES = [
  {
    num: "01",
    title: "Sites & design",
    desc: "Des sites sur mesure au design d'exception, pensés pour inspirer confiance dès la première seconde et transformer la visite en contact.",
  },
  {
    num: "02",
    title: "Référencement naturel",
    desc: "Être trouvé sur Google par ceux qui cherchent déjà vos services, dans votre zone. SEO technique, local et contenu.",
  },
  {
    num: "03",
    title: "Publicité Google",
    desc: "Des campagnes Google Ads pilotées au résultat : chaque euro investi se mesure en appels et en demandes de devis.",
  },
  {
    num: "04",
    title: "Tunnels de conversion",
    desc: "Pages dédiées, formulaires, suivi des appels : un parcours millimétré, de la recherche Google jusqu'à la signature.",
  },
];

const ACCESS_STEPS = [
  {
    num: "01",
    title: "Candidature",
    desc: "Vous décrivez votre projet en quelques lignes. Deux minutes suffisent.",
  },
  {
    num: "02",
    title: "Étude",
    desc: "Chaque demande est étudiée personnellement. Réponse sous 24 h.",
  },
  {
    num: "03",
    title: "Conception",
    desc: "Vous découvrez une maquette privée de votre futur site, avant tout engagement.",
  },
  {
    num: "04",
    title: "Lancement",
    desc: "Mise en ligne, référencement, acquisition. Nous concevons, vous performez.",
  },
];

const HomeSections = ({ onApply }: { onApply: () => void }) => {
  return (
    <div className="relative" style={{ zIndex: 1 }}>
      {/* Réalisations : défilé de créations en ligne */}
      <section id="realisations" className="py-24 sm:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <FadeUp>
            <SectionLabel>Réalisations</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tighter text-foreground mt-5">
              Une sélection de créations.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-light tracking-wide max-w-xl mx-auto mt-5">
              Sites clients, plateformes et campagnes conçus par le studio.
              Chaque création est en ligne et travaille pour son entreprise.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.25} className="mt-12 sm:mt-16">
          <ShowcaseRow items={SHOWCASE.filter((_, i) => i % 2 === 0)} direction="left" duration={70} />
          <ShowcaseRow items={SHOWCASE.filter((_, i) => i % 2 === 1)} direction="right" duration={85} />
        </FadeUp>
      </section>

      {/* Expertises */}
      <section id="services" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center">
            <FadeUp>
              <SectionLabel>Savoir-faire</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tighter text-foreground mt-5">
                Notre métier : vous apporter des clients.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-light tracking-wide max-w-xl mx-auto mt-5">
                Un site, c'est le début. Ce qui compte, c'est ce qu'il
                rapporte. Quatre expertises, un seul objectif.
              </p>
            </FadeUp>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mt-12 sm:mt-16">
            {EXPERTISES.map((s, i) => (
              <FadeUp key={s.num} delay={i * 0.1} className="h-full">
                <article
                  className="h-full rounded-3xl p-7 sm:p-9 text-left"
                  style={{
                    background:
                      "linear-gradient(150deg, hsl(0 0% 100% / 0.05) 0%, hsl(0 0% 100% / 0.015) 100%)",
                    border: "1px solid hsl(0 0% 100% / 0.08)",
                    boxShadow: "inset 0 1px 0 hsl(0 0% 100% / 0.06)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                  }}
                >
                  <div className="text-[11px] tracking-[0.25em] text-muted-foreground/70 font-light">
                    {s.num}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-foreground mt-4 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-[15px] font-light leading-relaxed mt-3">
                    {s.desc}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Accès sur candidature */}
      <section id="acces" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center">
            <FadeUp>
              <SectionLabel>Méthode</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tighter text-foreground mt-5">
                Un accès sur candidature.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-light tracking-wide max-w-xl mx-auto mt-5">
                Pour préserver la qualité de chaque création, un nombre limité
                de projets est accepté chaque mois.
              </p>
            </FadeUp>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-12 sm:mt-16">
            {ACCESS_STEPS.map((s, i) => (
              <FadeUp key={s.num} delay={i * 0.1}>
                <div className="border-t border-white/10 pt-6 text-left">
                  <div className="text-[11px] tracking-[0.25em] text-muted-foreground/70 font-light">
                    {s.num}
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-foreground mt-3 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed mt-3">
                    {s.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="candidature" className="py-28 sm:py-40">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tighter text-foreground">
              Votre vision mérite l'exception.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-light tracking-wide max-w-lg mx-auto mt-6">
              Décrivez votre projet. Chaque candidature reçoit une réponse
              personnelle sous 24 h.
            </p>
          </FadeUp>
          <FadeUp delay={0.3} className="mt-10">
            <LiquidButton
              size="xl"
              onClick={onApply}
              className="text-foreground text-xs sm:text-sm md:text-base tracking-wide rounded-full px-6 sm:px-10 py-3 sm:py-4"
            >
              Créer votre projet
            </LiquidButton>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default HomeSections;
