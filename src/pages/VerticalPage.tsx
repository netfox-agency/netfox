import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import NotFound from "@/pages/NotFound";
import { VERTICAL_BY_SLUG } from "@/content/verticals";

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

const HAIRLINE = "rgba(178, 192, 235, 0.1)";

const VerticalPage = ({ slug }: { slug: string }) => {
  const v = VERTICAL_BY_SLUG[slug];
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!v) return <NotFound />;

  const url = `https://netfox.ai/${v.slug}`;
  const cta =
    "group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-7 pr-2.5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-500 hover:shadow-[0_16px_50px_-12px_rgba(255,255,255,0.3)]";

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <Helmet>
        <title>{v.title} · Netfox</title>
        <meta name="description" content={v.description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${v.title} · Netfox`} />
        <meta property="og:description" content={v.description} />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                "@id": `${url}#faq`,
                mainEntity: v.faq.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://netfox.ai/" },
                  { "@type": "ListItem", position: 2, name: v.eyebrow, item: url },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-64 left-0 -translate-x-1/3 w-[min(900px,140vw)] h-[700px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(143,208,160,0.07), transparent)" }}
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
        {/* Ouverture */}
        <section className="pt-36 sm:pt-48 pb-14 sm:pb-20 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-y-8 gap-x-10 items-end">
            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
                className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium"
              >
                {v.eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: EASE }}
                className="text-[2.4rem] sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.03] mt-6"
              >
                {v.h1}{" "}
                <span className="font-serif italic font-normal">{v.h1Accent}</span>
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease: EASE }}
              className="lg:col-span-4"
            >
              <p className="text-muted-foreground text-[15px] sm:text-base font-normal leading-relaxed">
                {v.lead}
              </p>
              <button onClick={() => setIsModalOpen(true)} className={`${cta} mt-7`}>
                Créer votre projet
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-background text-foreground transition-transform duration-500 group-hover:scale-110">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.8} />
                </span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Le problème */}
        <section className="py-14 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground max-w-3xl leading-[1.08]">
                {v.problemTitle}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-muted-foreground text-[15px] sm:text-lg font-normal leading-relaxed max-w-2xl mt-6">
                {v.problemLead}
              </p>
            </FadeUp>
            <div className="grid sm:grid-cols-2 gap-x-10 mt-12 sm:mt-16">
              {v.problems.map((p, i) => (
                <FadeUp key={p.title} delay={i * 0.06}>
                  <div className="py-7 border-t" style={{ borderColor: HAIRLINE }}>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-[15px] font-normal leading-relaxed mt-3">
                      {p.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* La solution */}
        <section className="py-14 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground max-w-3xl leading-[1.08]">
                {v.solutionTitle}
              </h2>
            </FadeUp>
            <div className="mt-12 sm:mt-16 space-y-6 sm:space-y-8 max-w-3xl">
              {v.solutions.map((s, i) => (
                <FadeUp key={s.title} delay={i * 0.06}>
                  <div className="flex gap-5">
                    <span className="mt-1 shrink-0 flex items-center justify-center w-6 h-6 rounded-full" style={{ border: "1px solid rgba(143,208,160,0.4)" }}>
                      <Check className="w-3.5 h-3.5 text-[#8FD0A0]" strokeWidth={2.2} />
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">
                        {s.title}
                      </h3>
                      <p className="text-muted-foreground text-[15px] sm:text-base font-normal leading-relaxed mt-2">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Preuves */}
        <section className="py-14 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground max-w-3xl leading-[1.08]">
                {v.proofTitle}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-muted-foreground text-[15px] sm:text-lg font-normal max-w-2xl mt-6">
                {v.proofLead}
              </p>
            </FadeUp>
            <div className="mt-12 sm:mt-16">
              {v.proofs.map((pr, i) => (
                <FadeUp key={pr.name} delay={i * 0.08}>
                  <div
                    className={`grid sm:grid-cols-12 gap-y-2 gap-x-8 py-7 border-t ${
                      i === v.proofs.length - 1 ? "border-b" : ""
                    }`}
                    style={{ borderColor: HAIRLINE }}
                  >
                    <div className="sm:col-span-4">
                      <div className="text-lg font-semibold text-foreground tracking-tight">
                        {pr.name}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{pr.place}</div>
                    </div>
                    <div className="sm:col-span-6 text-[15px] text-muted-foreground leading-relaxed">
                      {pr.result}
                    </div>
                    <div className="sm:col-span-2 sm:text-right">
                      {pr.url && (
                        <a
                          href={pr.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline inline-flex items-center gap-1.5 min-h-[44px] text-sm font-medium text-foreground/75 hover:text-foreground transition-colors"
                        >
                          Voir le site
                          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.8} />
                        </a>
                      )}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground leading-[1.08]">
                Les questions <span className="font-serif italic font-normal">qu'on nous pose.</span>
              </h2>
            </FadeUp>
            <div className="mt-12 sm:mt-16 max-w-3xl">
              {v.faq.map((f, i) => (
                <FadeUp key={f.q} delay={i * 0.05}>
                  <div className="py-7 border-t" style={{ borderColor: HAIRLINE }}>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">
                      {f.q}
                    </h3>
                    <p className="text-muted-foreground text-[15px] sm:text-base font-normal leading-relaxed mt-3">
                      {f.a}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Clôture */}
        <section className="pt-10 pb-24 sm:py-32 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <h2 className="text-[2.1rem] sm:text-5xl font-semibold tracking-tight text-foreground leading-[1.06] max-w-3xl">
                {v.ctaTitle}{" "}
                <span className="font-serif italic font-normal text-[#8FD0A0]">{v.ctaAccent}</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-muted-foreground text-[15px] sm:text-lg font-normal max-w-xl mt-6 leading-relaxed">
                Décrivez votre activité et votre zone. On vous dit honnêtement ce
                qui est réaliste, réponse sous 24 h.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <button onClick={() => setIsModalOpen(true)} className={`${cta} mt-9`}>
                Créer votre projet
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-background text-foreground transition-transform duration-500 group-hover:scale-110">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.8} />
                </span>
              </button>
            </FadeUp>
          </div>
        </section>
      </main>

      <footer className="py-10 px-5 sm:px-8 border-t" style={{ borderColor: HAIRLINE }}>
        <div className="max-w-6xl mx-auto flex flex-wrap gap-x-8 gap-y-1 text-xs text-muted-foreground">
          <Link to="/" className="link-underline hover:text-foreground/80 transition-colors inline-flex items-center min-h-[44px]">
            © Netfox
          </Link>
          <Link to="/publicite-google" className="link-underline hover:text-foreground/80 transition-colors inline-flex items-center min-h-[44px]">
            Publicité Google
          </Link>
          <Link to="/mentions-legales" className="link-underline hover:text-foreground/80 transition-colors inline-flex items-center min-h-[44px]">
            Mentions légales
          </Link>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default VerticalPage;
