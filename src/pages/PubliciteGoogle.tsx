import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Mise en page éditoriale : chaque chapitre alterne, la numérotation est
   composée en gros, et rien n'est enfermé dans une carte. */
const CHAPTERS = [
  {
    num: "01",
    title: "On choisit le terrain",
    lead: "Où se battre, et surtout où ne pas se battre.",
    desc: "Les recherches, les zones et les clients qui rapportent, jamais ceux qui coûtent.",
    visual: <KeywordsVisual />,
  },
  {
    num: "02",
    title: "On écrit, on teste, on garde",
    lead: "L'annonce la plus pertinente gagne deux fois.",
    desc: "Plus l'annonce est pertinente, plus Google vous favorise et moins le clic coûte cher.",
    visual: <AdVariantsVisual />,
  },
  {
    num: "03",
    title: "On tient le prix du clic",
    lead: "Un clic doit pouvoir devenir un client.",
    desc: "Chaque enchère reste sous votre seuil de rentabilité. En dessous on paie, au-dessus non.",
    visual: <CpcVisual />,
  },
  {
    num: "04",
    title: "On construit où le clic atterrit",
    lead: "Jamais sur une page d'accueil générique.",
    desc: "Une page conçue pour une seule chose : déclencher l'appel ou le devis. Le reste est enlevé.",
    visual: <LandingVisual />,
  },
  {
    num: "05",
    title: "On mesure, on coupe, on renforce",
    lead: "C'est le pilotage qui fait la rentabilité.",
    desc: "Tout est mesuré. Ce qui ne rapporte pas est coupé. Chaque mois, vous savez où va l'argent.",
    visual: <TrackingVisual />,
  },
];

const ROI = [
  { name: "Summer Party", sector: "Événementiel", num: 2.4, decimals: 1, note: "moyenne toutes campagnes" },
  { name: "NPS Acoustique", sector: "B2B industriel", num: 7.5, decimals: 1, note: "dès le premier mois" },
  { name: "Top Service", sector: "Nettoyage de toitures", num: 5.5, decimals: 1, note: "lissé sur l'année" },
  { name: "CleaningPage", sector: "Plateforme SaaS", num: 3, decimals: 0, note: "moyenne" },
];

const PubliciteGoogle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cta =
    "group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-7 pr-2.5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-500 hover:shadow-[0_16px_50px_-12px_rgba(255,255,255,0.3)]";

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <Helmet>
        <title>Publicité Google · Netfox</title>
        <meta
          name="description"
          content="Être premier sur Google au moment exact où l'on vous cherche. Notre méthode en cinq points et les retours sur investissement constatés chez nos clients."
        />
      </Helmet>

      {/* Halo chaud très diffus : évite le fond plat d'une seule couleur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-64 left-0 -translate-x-1/3 w-[min(900px,140vw)] h-[700px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(143,208,160,0.07), transparent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[45%] right-0 translate-x-1/3 w-[min(800px,130vw)] h-[800px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(150,170,255,0.05), transparent)" }}
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
            background: "rgba(10, 11, 16, 0.66)",
            backdropFilter: "blur(24px) saturate(1.5)",
            WebkitBackdropFilter: "blur(24px) saturate(1.5)",
            border: "1px solid rgba(178, 192, 235, 0.12)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(210,220,255,0.08)",
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
            className="rounded-full bg-foreground text-background text-[13px] font-semibold px-4 sm:px-5 min-h-[40px] transition-all duration-300 hover:bg-white"
          >
            Créer votre projet
          </button>
        </nav>
      </motion.header>

      <main className="relative">
        {/* ── Ouverture : composition asymétrique, pas un bloc centré ── */}
        <section className="pt-36 sm:pt-48 pb-16 sm:pb-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-y-8 gap-x-10 items-end">
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.35, ease: EASE }}
                className="lg:col-span-8 text-[2.6rem] sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.02]"
              >
                Être premier sur Google,
                <br className="hidden sm:block" /> au moment exact où{" "}
                <br className="hidden sm:block" />
                <span className="font-serif italic font-normal tracking-tight">
                  l'on vous cherche.
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.55, ease: EASE }}
                className="lg:col-span-4"
              >
                <p className="text-muted-foreground text-[15px] sm:text-base font-normal leading-relaxed">
                  Vous n'êtes en haut des résultats que lorsqu'un client cherche, et
                  vous ne payez que s'il clique. C'est le levier le plus rapide
                  pour générer des appels.
                </p>
                <button onClick={() => setIsModalOpen(true)} className={`${cta} mt-7`}>
                  Créer votre projet
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-background text-foreground transition-transform duration-500 group-hover:scale-110">
                    <ArrowRight className="w-4 h-4" strokeWidth={1.8} />
                  </span>
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.75, ease: EASE }}
              className="mt-14 sm:mt-20"
            >
              <HeroSearchDemo />
            </motion.div>
          </div>
        </section>

        {/* ── Résultats : chiffres composés, séparateurs fins, aucune carte ── */}
        <section className="py-12 sm:py-28 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground max-w-2xl leading-[1.08]">
                Les chiffres,
                <br />
                <span className="font-serif italic font-normal">pas les promesses.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-muted-foreground text-[15px] sm:text-lg font-normal leading-relaxed max-w-xl mt-5">
                Retours sur investissement constatés chez nos clients, sur des
                campagnes que nous gérons de bout en bout.
              </p>
            </FadeUp>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 mt-10 sm:mt-16">
              {ROI.map((r, i) => (
                /* Les classes de bord et d'espacement vivent sur l'élément de
                   grille lui-même : sur l'enfant unique, first:/last: seraient
                   tous deux vrais et supprimeraient toutes les marges. */
                <FadeUp key={r.name} delay={i * 0.08} className="h-full">
                  <div
                    className={`h-full py-6 lg:py-0 border-t lg:border-t-0 ${
                      i === 0 ? "lg:pr-8" : "lg:px-8 lg:border-l"
                    } ${i === ROI.length - 1 ? "lg:pr-0" : ""}`}
                    style={{ borderColor: "rgba(178, 192, 235, 0.12)" }}
                  >
                    <div className="text-[2.4rem] sm:text-6xl font-semibold tracking-tight text-[#8FD0A0] tabular-nums leading-none">
                      <CountUpValue value={r.num} decimals={r.decimals} prefix="×" />
                    </div>
                    {/* La mention « retour sur investissement » figure déjà dans
                        l'intro de la section : la répéter sous chacun des quatre
                        chiffres n'ajoute rien et double la hauteur sur mobile. */}
                    <div className="text-[15px] sm:text-base font-semibold text-foreground mt-3">{r.name}</div>
                    <div className="text-[13px] sm:text-sm font-normal text-muted-foreground mt-1">
                      {r.sector} · {r.note}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.3}>
              <p className="text-muted-foreground text-sm font-normal mt-8">
                Et bien d'autres. Campagnes gérées de bout en bout : stratégie,
                annonces, pages dédiées et tracking.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Bascule : une phrase, pleine largeur, décalée ── */}
        <section className="py-14 sm:py-32 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <p className="max-w-4xl text-[1.6rem] sm:text-4xl md:text-[2.9rem] font-semibold tracking-tight leading-[1.15] text-foreground">
                Mais être premier ne suffit pas.
                <br />
                <span className="text-muted-foreground font-normal">
                  Sans méthode, une campagne dépense.{" "}
                  <span className="font-serif italic text-foreground">
                    Avec la bonne, elle rapporte.
                  </span>
                </span>
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Les cinq chapitres : liste éditoriale alternée, sans cartes ── */}
        <section className="px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            {CHAPTERS.map((c, i) => (
              <FadeUp key={c.num}>
                <article
                  className={`grid lg:grid-cols-12 gap-y-8 gap-x-12 items-center py-12 sm:py-24 border-t ${
                    i === CHAPTERS.length - 1 ? "border-b" : ""
                  }`}
                  style={{ borderColor: "rgba(178, 192, 235, 0.1)" }}
                >
                  <div
                    className={`lg:col-span-6 ${
                      i % 2 === 1 ? "lg:order-2 lg:col-start-7" : ""
                    }`}
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="font-serif text-[2.6rem] sm:text-[3.4rem] leading-none text-[#8FD0A0]/70">
                        {c.num}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                        {c.title}
                      </h2>
                    </div>
                    <p className="font-serif italic text-2xl sm:text-3xl text-foreground mt-5 leading-snug">
                      {c.lead}
                    </p>
                    <p className="text-muted-foreground text-[15px] sm:text-base font-normal leading-relaxed mt-4 max-w-xl">
                      {c.desc}
                    </p>
                  </div>
                  <div className={`order-first lg:order-none lg:col-span-6 ${i % 2 === 1 ? "lg:order-1 lg:col-start-1" : ""}`}>
                    {c.visual}
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ── Clôture ── */}
        <section className="pt-10 pb-20 sm:py-40 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <h2 className="text-[2.2rem] sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.06] max-w-4xl">
                Faites partie de ceux qui sont
                <br />
                <span className="font-serif italic font-normal text-[#8FD0A0]">rentables</span>{" "}
                avec la publicité Google.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-muted-foreground text-[15px] sm:text-lg font-normal max-w-xl mt-7 leading-relaxed">
                Décrivez votre activité et votre zone. On vous dit honnêtement si
                Google Ads est rentable pour vous, réponse sous 24 h.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <button onClick={() => setIsModalOpen(true)} className={`${cta} mt-10`}>
                Créer votre projet
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-background text-foreground transition-transform duration-500 group-hover:scale-110">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.8} />
                </span>
              </button>
            </FadeUp>
          </div>
        </section>
      </main>

      <footer
        className="py-10 px-5 sm:px-8 border-t"
        style={{ borderColor: "rgba(178, 192, 235, 0.1)" }}
      >
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="link-underline text-xs text-muted-foreground hover:text-foreground/80 transition-colors inline-flex items-center min-h-[44px]"
          >
            © Netfox · Retour à l'accueil
          </Link>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PubliciteGoogle;
