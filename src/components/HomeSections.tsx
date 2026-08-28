import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ClipboardCheck, FileText, MonitorSmartphone, Rocket } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { AdsVisual, CodeVisual, FunnelVisual, SeoVisual } from "@/components/ExpertiseVisuals";

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
    <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-muted-foreground font-medium">
      {children}
    </p>
  );
}

// Cartes quasi opaques : le shader en fond ne doit jamais délaver le texte.
const cardStyle: React.CSSProperties = {
  background:
    "linear-gradient(150deg, rgba(23, 23, 26, 0.94) 0%, rgba(13, 13, 15, 0.92) 100%)",
  border: "1px solid hsl(0 0% 100% / 0.08)",
  boxShadow: "inset 0 1px 0 hsl(0 0% 100% / 0.06), 0 24px 60px -24px rgba(0,0,0,0.6)",
};

const ACCESS_STEPS = [
  {
    icon: FileText,
    title: "Candidature",
    desc: "Vous décrivez votre projet en quelques lignes. Deux minutes suffisent.",
  },
  {
    icon: ClipboardCheck,
    title: "Étude personnelle",
    desc: "Chaque demande est étudiée une par une. Réponse sous 24 h.",
  },
  {
    icon: MonitorSmartphone,
    title: "Maquette privée",
    desc: "Vous découvrez votre futur site en ligne, avant tout engagement.",
  },
  {
    icon: Rocket,
    title: "Lancement",
    desc: "Mise en ligne, référencement, acquisition. Nous concevons, vous performez.",
  },
];

/** Timeline animée : les étapes s'allument l'une après l'autre en boucle. */
function AccessTimeline() {
  const reduced = useReducedMotion();
  const LOOP = 10;
  // fenêtre d'activation de chaque étape dans le cycle
  const win = (i: number): [number, number] => [0.06 + i * 0.23, 0.06 + i * 0.23 + 0.2];

  return (
    <div className="rounded-3xl p-6 sm:p-10" style={cardStyle}>
      {/* Piste de progression (desktop) */}
      <div className="relative hidden lg:block mx-10 mb-9">
        <div className="h-px bg-white/10" />
        <motion.div
          className="absolute inset-y-0 left-0 h-px origin-left bg-[#8FD0A0]"
          style={{ width: "100%" }}
          initial={{ scaleX: reduced ? 1 : 0 }}
          animate={reduced ? { scaleX: 1 } : { scaleX: [0, 0.02, 0.35, 0.68, 1, 1] }}
          transition={
            reduced
              ? undefined
              : { duration: LOOP, times: [0, 0.06, 0.29, 0.52, 0.75, 1], repeat: Infinity, ease: "linear" }
          }
        />
        {[0, 1, 2, 3].map((i) => {
          const [a, b] = win(i);
          return (
            <motion.span
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
              style={{ left: `calc(${(i / 3) * 100}% - 5px)`, background: "hsl(0 0% 100% / 0.18)" }}
              initial={false}
              animate={
                reduced
                  ? { backgroundColor: "#8FD0A0" }
                  : { backgroundColor: ["#3a3a3e", "#3a3a3e", "#8FD0A0", "#8FD0A0"], scale: [1, 1, 1.35, 1.15] }
              }
              transition={reduced ? undefined : { duration: LOOP, times: [0, a, a + 0.03, 1], repeat: Infinity }}
            />
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {ACCESS_STEPS.map((s, i) => {
          const [a, b] = win(i);
          const Icon = s.icon;
          return (
            <div key={s.title} className="relative rounded-2xl p-5 sm:p-6" style={{ border: "1px solid hsl(0 0% 100% / 0.07)" }}>
              {/* halo d'activation */}
              {!reduced && (
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: "linear-gradient(165deg, rgba(143,208,160,0.09), rgba(143,208,160,0.015))",
                    border: "1px solid rgba(143,208,160,0.35)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
                  transition={{ duration: LOOP, times: [0, a, a + 0.03, b, b + 0.04, 1], repeat: Infinity }}
                />
              )}
              <div className="flex items-center justify-between">
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-xl"
                  style={{ background: "hsl(0 0% 100% / 0.06)", border: "1px solid hsl(0 0% 100% / 0.1)" }}
                >
                  <Icon className="w-4 h-4 text-foreground/80" strokeWidth={1.8} />
                </span>
                <span className="font-mono text-[11px] text-muted-foreground/70">0{i + 1}</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground tracking-tight mt-4">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-[15px] font-normal leading-relaxed mt-2">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-8 text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-[#8FD0A0]"
          style={{ border: "1px solid rgba(143,208,160,0.3)" }}
        >
          Vous voyez votre site avant de vous engager
        </span>
        <span className="text-muted-foreground text-xs sm:text-sm font-normal">
          Nombre limité de projets acceptés chaque mois.
        </span>
      </div>
    </div>
  );
}

const HomeSections = ({
  onApply,
  onShowExamples,
}: {
  onApply: () => void;
  onShowExamples: () => void;
}) => {
  const actionClass =
    "group/link inline-flex items-center gap-2 text-sm font-medium text-foreground/85 hover:text-foreground transition-colors duration-300 mt-auto pt-6";

  return (
    <div className="relative" style={{ zIndex: 1 }}>
      {/* Expertises : le métier d'abord, la preuve au clic */}
      <section id="services" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center">
            <FadeUp>
              <SectionLabel>Savoir-faire</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground mt-5 leading-[1.05]">
                Notre métier : vous
                <br className="hidden sm:block" /> apporter des clients.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-muted-foreground text-[15px] sm:text-base md:text-lg font-normal max-w-xl mx-auto mt-5">
                Un site, c'est le début. Ce qui compte, c'est ce qu'il
                rapporte. Quatre expertises, un seul objectif.
              </p>
            </FadeUp>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mt-12 sm:mt-16">
            <FadeUp className="h-full">
              <article className="h-full flex flex-col rounded-3xl p-7 sm:p-9 text-left" style={cardStyle}>
                <CodeVisual />
                <div className="text-[11px] tracking-[0.25em] text-muted-foreground/70 font-light">01</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-4 tracking-tight">
                  Sites & design
                </h3>
                <p className="text-muted-foreground text-[15px] sm:text-base font-normal leading-relaxed mt-3">
                  Des sites sur mesure au design d'exception, pensés pour
                  inspirer confiance dès la première seconde et transformer la
                  visite en contact.
                </p>
                <button onClick={onShowExamples} className={actionClass}>
                  <span className="link-underline">Voir des exemples</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" strokeWidth={1.6} />
                </button>
              </article>
            </FadeUp>

            <FadeUp delay={0.1} className="h-full">
              <article className="h-full flex flex-col rounded-3xl p-7 sm:p-9 text-left" style={cardStyle}>
                <AdsVisual />
                <div className="text-[11px] tracking-[0.25em] text-muted-foreground/70 font-light">02</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-4 tracking-tight">
                  Publicité Google
                </h3>
                <p className="text-muted-foreground text-[15px] sm:text-base font-normal leading-relaxed mt-3">
                  Être positionné tout en haut de Google, au moment exact où un
                  client cherche. Des campagnes pilotées au résultat, avec de
                  vrais rapports.
                </p>
                <Link to="/publicite-google" className={actionClass}>
                  <span className="link-underline">Comment ça fonctionne</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5" strokeWidth={1.6} />
                </Link>
              </article>
            </FadeUp>

            <FadeUp delay={0.15} className="h-full">
              <article className="h-full flex flex-col rounded-3xl p-7 sm:p-9 text-left" style={cardStyle}>
                <SeoVisual />
                <div className="text-[11px] tracking-[0.25em] text-muted-foreground/70 font-light">03</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-4 tracking-tight">
                  Référencement naturel
                </h3>
                <p className="text-muted-foreground text-[15px] sm:text-base font-normal leading-relaxed mt-3">
                  Être trouvé sur Google par ceux qui cherchent déjà vos
                  services, dans votre zone. SEO technique, local et contenu,
                  intégré dès la conception du site.
                </p>
              </article>
            </FadeUp>

            <FadeUp delay={0.2} className="h-full">
              <article className="h-full flex flex-col rounded-3xl p-7 sm:p-9 text-left" style={cardStyle}>
                <FunnelVisual />
                <div className="text-[11px] tracking-[0.25em] text-muted-foreground/70 font-light">04</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-4 tracking-tight">
                  Tunnels de conversion
                </h3>
                <p className="text-muted-foreground text-[15px] sm:text-base font-normal leading-relaxed mt-3">
                  Pages dédiées, formulaires, suivi des appels et des demandes :
                  un parcours millimétré, de la recherche Google jusqu'à la
                  signature.
                </p>
              </article>
            </FadeUp>
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
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground mt-5">
                Un accès sur candidature.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-muted-foreground text-[15px] sm:text-base md:text-lg font-normal max-w-xl mx-auto mt-5">
                Vous voyez votre futur site avant de vous engager. C'est notre
                façon de travailler depuis le premier jour.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.15} className="mt-12 sm:mt-16">
            <AccessTimeline />
          </FadeUp>
        </div>
      </section>

      {/* CTA final */}
      <section id="candidature" className="py-28 sm:py-40">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
              Votre vision mérite l'exception.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-muted-foreground text-[15px] sm:text-base md:text-lg font-normal max-w-lg mx-auto mt-6">
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
