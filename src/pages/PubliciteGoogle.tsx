import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import ContactModal from "@/components/ContactModal";
import {
  AdVariantsVisual,
  CountUpValue,
  CpcVisual,
  HeroSearchDemo,
  KeywordsVisual,
  LandingVisual,
  TrackingVisual,
} from "@/components/AdsPageVisuals";

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
    desc: "On définit où se battre : les recherches, les zones et les clients qui rapportent. Pas ceux qui coûtent. Chaque euro part sur une intention réelle d'achat.",
    visual: <KeywordsVisual />,
  },
  {
    num: "02",
    title: "Annonces les plus pertinentes",
    desc: "Des annonces écrites pour votre métier, testées et affinées en continu. Plus l'annonce est pertinente, plus Google vous favorise, et moins le clic coûte cher.",
    visual: <AdVariantsVisual />,
  },
  {
    num: "03",
    title: "Coût par clic rentable",
    desc: "Chaque enchère est pilotée pour rester sous votre seuil de rentabilité : un clic doit pouvoir devenir un client, sinon on ne le paie pas.",
    visual: <CpcVisual />,
  },
  {
    num: "04",
    title: "Page de destination dédiée",
    desc: "Le clic n'arrive jamais sur une page d'accueil générique, mais sur une page conçue pour convertir : appel, devis ou réservation.",
    visual: <LandingVisual />,
  },
  {
    num: "05",
    title: "Tracking & rentabilité",
    desc: "Appels, formulaires, réservations : tout est mesuré. On coupe ce qui ne rapporte pas, on renforce ce qui rapporte. C'est ce pilotage qui fait la rentabilité.",
    visual: <TrackingVisual />,
  },
];

type Stat = { num: number; decimals?: number; suffix?: string; label: string; note?: string };

// Retours sur investissement constatés (chiffres fournis par Netfox).
const ROI_STRIP = [
  { name: "Summer Party", sector: "Événementiel", num: 2.4, decimals: 1, note: "moyenne toutes campagnes" },
  { name: "NPS Acoustique", sector: "B2B industriel", num: 7.5, decimals: 1, note: "dès le premier mois" },
  { name: "Top Service", sector: "Nettoyage de toitures", num: 5.5, decimals: 1, note: "lissé sur l'année" },
  { name: "CleaningPage", sector: "Plateforme SaaS", num: 3, decimals: 0, note: "moyenne" },
];

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
      { num: 69400, label: "Impressions" },
      { num: 7410, label: "Clics" },
      { num: 10.7, decimals: 1, suffix: " %", label: "Taux de clic", note: "moyenne du secteur : 3 à 5 %" },
      { num: 0.56, decimals: 2, suffix: " €", label: "Coût par clic moyen" },
      { num: 1951, label: "Passages en billetterie" },
      { num: 2.13, decimals: 2, suffix: " €", label: "Coût par passage" },
    ],
    context:
      "Pages de destination créées sur mesure, tracking billetterie et gestion complète des campagnes multilingues (FR, EN, IT), par soirée et par ville. 4 165 € investis sur 90 jours, 1 951 passages en billetterie mesurés et un retour moyen de ×2,4 sur l'ensemble des campagnes.",
  },
  {
    name: "NPS Acoustique",
    sector: "Distributeur industriel B2B · Isolation acoustique",
    badge: "Campagne en cours · premiers résultats",
    stats: [
      { num: 2000, label: "Impressions" },
      { num: 140, label: "Clics" },
      { num: 7.0, decimals: 1, suffix: " %", label: "Taux de clic", note: "moyenne du secteur : 3 à 5 %" },
      { num: 1.33, decimals: 2, suffix: " €", label: "Coût par clic moyen" },
    ],
    context:
      "Marché de niche B2B où chaque contact vaut cher. Structure, annonces et suivi posés dès le départ : ×7,5 de retour sur investissement dès le premier mois de campagne.",
  },
];

const PubliciteGoogle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <Helmet>
        <title>Publicité Google · Netfox</title>
        <meta
          name="description"
          content="Être premier sur Google au moment exact où l'on vous cherche. Stratégie, annonces, coût par clic rentable, pages dédiées et tracking : la méthode Netfox, avec de vrais rapports de campagne."
        />
      </Helmet>

      {/* Ambiance : grille discrète + halos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 0.022) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.022) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(closest-side, hsl(0 0% 100% / 0.07), transparent)" }}
      />

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
            className="flex items-center gap-2 min-h-[44px] text-[13px] font-medium text-foreground/70 hover:text-foreground transition-colors pl-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.6} />
            <span className="text-sm font-medium tracking-[0.22em] text-foreground">NETFOX</span>
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-full bg-foreground text-background text-[13px] font-semibold px-4 sm:px-5 min-h-[40px] transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_-8px_rgba(255,255,255,0.35)]"
          >
            Créer votre projet
          </button>
        </nav>
      </motion.header>

      <main className="relative">
        {/* Hero */}
        <section className="pt-36 sm:pt-44 pb-16 sm:pb-20 px-5 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-muted-foreground font-medium"
            >
              Publicité Google
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: EASE }}
              className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.04] mt-6"
            >
              Être <span className="text-[#8FD0A0]">premier</span> sur Google,
              <br />
              au moment exact où
              <br />
              l'on vous cherche.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.65, ease: EASE }}
              className="text-muted-foreground text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto mt-7"
            >
              Le principe est simple : vous payez Google pour apparaître tout en
              haut des résultats, et vous ne payez que lorsqu'un client clique.
              C'est le levier le plus rapide pour générer des appels et des
              demandes de devis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.85, ease: EASE }}
              className="mt-12"
            >
              <HeroSearchDemo />
            </motion.div>
          </div>
        </section>

        {/* Le vrai enjeu */}
        <section className="py-14 sm:py-20 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <p className="text-foreground text-xl sm:text-2xl md:text-[1.7rem] font-normal leading-relaxed tracking-tight">
                Mais être premier ne suffit pas.
                <br />
                <span className="text-muted-foreground">
                  Sans stratégie, une campagne dépense. Avec la bonne méthode,
                  elle rapporte. Toute la différence se joue sur cinq points.
                </span>
              </p>
            </FadeUp>
          </div>
        </section>

        {/* La méthode */}
        <section className="py-14 sm:py-20 px-5 sm:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <FadeUp>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-muted-foreground font-medium">
                  La méthode
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground mt-5">
                  Cinq points, zéro improvisation.
                </h2>
              </FadeUp>
            </div>

            <div className="mt-12 sm:mt-16 space-y-5 sm:space-y-6">
              {METHOD.map((m, i) => (
                <FadeUp key={m.num} delay={i * 0.05}>
                  <div
                    className="grid md:grid-cols-[minmax(260px,320px)_1fr] gap-5 md:gap-8 items-center rounded-3xl p-5 sm:p-7 transition-transform duration-300 hover:-translate-y-1"
                    style={glassStyle}
                  >
                    {m.visual}
                    <div className="px-1 sm:px-0">
                      <div className="font-mono text-[11px] tracking-[0.25em] text-[#8FD0A0]/90">
                        {m.num}
                      </div>
                      <h3 className="text-lg sm:text-2xl font-semibold text-foreground tracking-tight mt-2.5">
                        {m.title}
                      </h3>
                      <p className="text-muted-foreground text-[15px] sm:text-base font-normal leading-relaxed mt-3 max-w-xl">
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
        <section className="py-14 sm:py-20 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <FadeUp>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-muted-foreground font-medium">
                  Résultats réels
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground mt-5">
                  Les chiffres, pas les promesses.
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-muted-foreground text-[15px] sm:text-base md:text-lg font-normal max-w-xl mx-auto mt-5">
                  Retours sur investissement constatés chez nos clients, et
                  extraits directs de nos comptes Google Ads.
                </p>
              </FadeUp>
            </div>

            {/* Bandeau ROI */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16">
              {ROI_STRIP.map((r, i) => (
                <FadeUp key={r.name} delay={i * 0.08} className="h-full">
                  <div
                    className="h-full rounded-3xl px-5 py-6 sm:px-7 sm:py-8 text-center transition-transform duration-300 hover:-translate-y-1"
                    style={{
                      ...glassStyle,
                      background:
                        "radial-gradient(130% 100% at 50% 0%, rgba(143, 208, 160, 0.09) 0%, rgba(255, 255, 255, 0.02) 55%)",
                    }}
                  >
                    <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#8FD0A0] tabular-nums">
                      <CountUpValue value={r.num} decimals={r.decimals} prefix="×" />
                    </div>
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium text-muted-foreground mt-2">
                      Retour sur investissement
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-foreground mt-3">
                      {r.name}
                    </div>
                    <div className="text-xs font-normal text-muted-foreground mt-0.5">
                      {r.sector} · {r.note}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={0.3}>
              <p className="text-center text-muted-foreground text-sm font-normal mt-5">
                Et bien d'autres.
              </p>
            </FadeUp>

            <div className="space-y-6 sm:space-y-8 mt-12 sm:mt-16">
              {REPORTS.map((r, ri) => (
                <FadeUp key={r.name} delay={ri * 0.1}>
                  <article className="rounded-3xl p-7 sm:p-10" style={glassStyle}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                          {r.name}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm font-normal mt-1">
                          {r.sector}
                        </p>
                      </div>
                      <span
                        className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium text-foreground/70 rounded-full px-3.5 py-1.5"
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
                          <div className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground tabular-nums">
                            <CountUpValue value={s.num} decimals={s.decimals ?? 0} suffix={s.suffix ?? ""} />
                          </div>
                          <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium text-muted-foreground mt-2">
                            {s.label}
                          </div>
                          {s.note && (
                            <div className="text-[11px] sm:text-xs font-normal text-foreground/55 mt-1.5">
                              {s.note}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <p className="text-muted-foreground text-[15px] sm:text-base font-normal leading-relaxed mt-7 max-w-3xl">
                      {r.context}
                    </p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 sm:py-36 px-5 sm:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(143, 208, 160, 0.09), transparent)" }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <FadeUp>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground leading-[1.1]">
                Faites partie de ceux qui sont
                <br />
                <span className="text-[#8FD0A0]">rentables</span> avec la
                publicité Google.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-muted-foreground text-[15px] sm:text-base md:text-lg font-normal max-w-lg mx-auto mt-6">
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

      <footer className="py-8 px-5 text-center text-xs text-muted-foreground font-light">
        <Link
          to="/"
          className="link-underline hover:text-foreground/80 transition-colors inline-flex items-center min-h-[44px]"
        >
          © Netfox · Retour à l'accueil
        </Link>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PubliciteGoogle;
