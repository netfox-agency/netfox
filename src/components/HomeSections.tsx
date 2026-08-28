import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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

// Cartes quasi opaques et PLUS CLAIRES que le fond : c'est l'écart de
// luminosité, pas l'ombre, qui donne le relief sur un site sombre.
// Bordure légèrement froide plutôt que blanc pur, sinon l'ensemble paraît plat.
const cardStyle: React.CSSProperties = {
  background:
    "linear-gradient(150deg, rgba(28, 30, 40, 0.96) 0%, rgba(18, 19, 26, 0.94) 100%)",
  border: "1px solid rgba(178, 192, 235, 0.11)",
  boxShadow:
    "inset 0 1px 0 rgba(210, 220, 255, 0.07), 0 28px 70px -28px rgba(0, 0, 0, 0.75)",
};

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
              <article className="group h-full flex flex-col rounded-3xl p-7 sm:p-9 text-left transition-transform duration-500 hover:-translate-y-1" style={cardStyle}>
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
              <article className="group h-full flex flex-col rounded-3xl p-7 sm:p-9 text-left transition-transform duration-500 hover:-translate-y-1" style={cardStyle}>
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
              <article className="group h-full flex flex-col rounded-3xl p-7 sm:p-9 text-left transition-transform duration-500 hover:-translate-y-1" style={cardStyle}>
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
              <article className="group h-full flex flex-col rounded-3xl p-7 sm:p-9 text-left transition-transform duration-500 hover:-translate-y-1" style={cardStyle}>
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
