import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import ContactModal from "@/components/ContactModal";

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

const glassStyle: React.CSSProperties = {
  background:
    "linear-gradient(150deg, hsl(0 0% 100% / 0.05) 0%, hsl(0 0% 100% / 0.015) 100%)",
  border: "1px solid hsl(0 0% 100% / 0.08)",
  boxShadow: "inset 0 1px 0 hsl(0 0% 100% / 0.06)",
};

const METHOD = [
  {
    num: "01",
    title: "Stratégie & positionnement",
    desc: "On définit où se battre : les recherches, les zones et les clients qui rapportent. Pas ceux qui coûtent.",
  },
  {
    num: "02",
    title: "Annonces les plus pertinentes",
    desc: "Des annonces écrites pour votre métier, testées et affinées en continu. Plus l'annonce est pertinente, plus Google vous favorise, et moins le clic coûte cher.",
  },
  {
    num: "03",
    title: "Coût par clic rentable",
    desc: "Chaque enchère est pilotée pour rester sous votre seuil de rentabilité : un clic doit pouvoir devenir un client, sinon on ne le paie pas.",
  },
  {
    num: "04",
    title: "Page de destination dédiée",
    desc: "Le clic n'arrive jamais sur une page d'accueil générique, mais sur une page conçue pour convertir : appel, devis ou réservation.",
  },
  {
    num: "05",
    title: "Tracking & rentabilité",
    desc: "Appels, formulaires, réservations : tout est mesuré. On coupe ce qui ne rapporte pas, on renforce ce qui rapporte. C'est ce pilotage qui fait la rentabilité.",
  },
];

type Stat = { value: string; label: string; note?: string };

const REPORTS: {
  name: string;
  sector: string;
  badge: string;
  stats: Stat[];
  context: string;
}[] = [
  {
    name: "Summer Party",
    sector: "Événementiel nightlife · Malte & Albanie",
    badge: "90 derniers jours · données Google Ads",
    stats: [
      { value: "69 400", label: "Impressions" },
      { value: "7 410", label: "Clics" },
      { value: "10,7 %", label: "Taux de clic", note: "moyenne du secteur : 3 à 5 %" },
      { value: "0,56 €", label: "Coût par clic moyen" },
      { value: "1 951", label: "Passages en billetterie" },
      { value: "2,13 €", label: "Coût par passage" },
    ],
    context:
      "Campagnes multilingues (FR, EN, IT) par soirée et par ville, pages dédiées et tracking billetterie. 4 165 € investis sur la saison ont généré 1 951 passages en billetterie mesurés.",
  },
  {
    name: "NPS Acoustique",
    sector: "Distributeur industriel B2B · Isolation acoustique",
    badge: "Campagne en cours · premiers résultats",
    stats: [
      { value: "2 000", label: "Impressions" },
      { value: "140", label: "Clics" },
      { value: "7,0 %", label: "Taux de clic", note: "moyenne du secteur : 3 à 5 %" },
      { value: "1,33 €", label: "Coût par clic moyen" },
    ],
    context:
      "Marché de niche B2B où chaque contact vaut cher. Campagne lancée récemment : la structure est en place, l'optimisation de la rentabilité est en cours.",
  },
];

const PubliciteGoogle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <Helmet>
        <title>Publicité Google · Netfox</title>
        <meta
          name="description"
          content="Être premier sur Google au moment exact où l'on vous cherche. Stratégie, annonces, coût par clic rentable, pages dédiées et tracking : la méthode Netfox, avec de vrais rapports de campagne."
        />
      </Helmet>

      {/* Nav */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        className="fixed top-0 inset-x-0 z-40 flex justify-center px-4 pt-4 sm:pt-5"
      >
        <nav
          className="flex items-center gap-4 sm:gap-6 rounded-full pl-3 pr-2 py-2"
          style={{
            background: "rgba(8, 8, 10, 0.6)",
            backdropFilter: "blur(24px) saturate(1.5)",
            WebkitBackdropFilter: "blur(24px) saturate(1.5)",
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-[13px] font-light text-foreground/70 hover:text-foreground transition-colors pl-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.6} />
            <span className="text-sm font-medium tracking-[0.22em] text-foreground">NETFOX</span>
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-full bg-foreground text-background text-[13px] font-medium px-4 sm:px-5 py-2 transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_-8px_rgba(255,255,255,0.35)]"
          >
            Créer votre projet
          </button>
        </nav>
      </motion.header>

      <main className="relative">
        {/* Hero */}
        <section className="pt-36 sm:pt-44 pb-16 sm:pb-24 px-5 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-muted-foreground font-light"
            >
              Publicité Google
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: EASE }}
              className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tighter text-foreground leading-[1.04] mt-6"
            >
              Être premier sur Google,
              <br />
              au moment exact où
              <br />
              l'on vous cherche.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.65, ease: EASE }}
              className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed tracking-wide max-w-2xl mx-auto mt-7"
            >
              Le principe est simple : vous payez Google pour apparaître tout en
              haut des résultats, et vous ne payez que lorsqu'un client clique.
              C'est le levier le plus rapide pour générer des appels et des
              demandes de devis.
            </motion.p>
          </div>
        </section>

        {/* Le vrai enjeu */}
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <p className="text-foreground text-xl sm:text-2xl md:text-[1.7rem] font-light leading-relaxed tracking-tight">
                Mais être premier ne suffit pas. Sans stratégie, une campagne
                dépense. Avec la bonne méthode, elle rapporte. Toute la
                différence se joue sur cinq points.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* La méthode */}
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <FadeUp>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-muted-foreground font-light">
                  La méthode
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl sm:text-5xl font-extralight tracking-tighter text-foreground mt-5">
                  Cinq points, zéro improvisation.
                </h2>
              </FadeUp>
            </div>

            <div className="max-w-3xl mx-auto mt-12 sm:mt-16 space-y-4 sm:space-y-5">
              {METHOD.map((m, i) => (
                <FadeUp key={m.num} delay={i * 0.06}>
                  <div className="flex gap-5 sm:gap-8 rounded-3xl p-6 sm:p-8" style={glassStyle}>
                    <div className="text-[11px] tracking-[0.25em] text-muted-foreground/70 font-light pt-1.5 shrink-0">
                      {m.num}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-light text-foreground tracking-tight">
                        {m.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-[15px] font-light leading-relaxed mt-2">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Résultats réels */}
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <FadeUp>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-muted-foreground font-light">
                  Résultats réels
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl sm:text-5xl font-extralight tracking-tighter text-foreground mt-5">
                  Les chiffres, pas les promesses.
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-light tracking-wide max-w-xl mx-auto mt-5">
                  Extraits directs de nos comptes Google Ads. D'autres études de
                  cas sont en cours d'ajout.
                </p>
              </FadeUp>
            </div>

            <div className="space-y-6 sm:space-y-8 mt-12 sm:mt-16">
              {REPORTS.map((r, ri) => (
                <FadeUp key={r.name} delay={ri * 0.1}>
                  <article className="rounded-3xl p-7 sm:p-10" style={glassStyle}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-light text-foreground tracking-tight">
                          {r.name}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm font-light mt-1">
                          {r.sector}
                        </p>
                      </div>
                      <span
                        className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-light text-foreground/60 rounded-full px-3.5 py-1.5"
                        style={{ border: "1px solid hsl(0 0% 100% / 0.14)" }}
                      >
                        {r.badge}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-7 sm:mt-9">
                      {r.stats.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-2xl px-5 py-5 sm:px-6 sm:py-6"
                          style={{
                            background: "hsl(0 0% 100% / 0.03)",
                            border: "1px solid hsl(0 0% 100% / 0.06)",
                          }}
                        >
                          <div className="text-2xl sm:text-4xl font-light tracking-tight text-foreground">
                            {s.value}
                          </div>
                          <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-light text-muted-foreground mt-2">
                            {s.label}
                          </div>
                          {s.note && (
                            <div className="text-[11px] sm:text-xs font-light text-foreground/45 mt-1.5">
                              {s.note}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <p className="text-muted-foreground text-sm sm:text-[15px] font-light leading-relaxed mt-7 max-w-3xl">
                      {r.context}
                    </p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-36 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <h2 className="text-3xl sm:text-5xl font-extralight tracking-tighter text-foreground">
                Et si vos clients vous
                <br /> trouvaient en premier ?
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-light tracking-wide max-w-lg mx-auto mt-6">
                Décrivez votre activité et votre zone. On vous dit honnêtement
                si Google Ads est rentable pour vous, réponse sous 24 h.
              </p>
            </FadeUp>
            <FadeUp delay={0.3} className="mt-10">
              <LiquidButton
                size="xl"
                onClick={() => setIsModalOpen(true)}
                className="text-foreground text-xs sm:text-sm md:text-base tracking-wide rounded-full px-6 sm:px-10 py-3 sm:py-4"
              >
                Créer votre projet
              </LiquidButton>
            </FadeUp>
          </div>
        </section>
      </main>

      <footer className="py-8 px-5 text-center text-xs text-muted-foreground/60 font-light">
        <Link to="/" className="link-underline hover:text-foreground/80 transition-colors">
          © Netfox · Retour à l'accueil
        </Link>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PubliciteGoogle;
