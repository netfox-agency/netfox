/**
 * Génère un fichier HTML par route après le build.
 *
 * Pourquoi : le site est une application React rendue côté navigateur. Google
 * finit par exécuter le JavaScript, mais les robots des moteurs de réponse
 * (GPTBot, ClaudeBot, PerplexityBot, Applebot) ne le font pas. Sans ce script,
 * toutes les routes servent le même index.html quasi vide : même titre, même
 * description, aucun contenu.
 *
 * Ce que fait ce script : il copie index.html vers dist/<route>/index.html en
 * remplaçant le titre, la description, le canonical, l'Open Graph, le balisage
 * JSON-LD et le contenu de repli <noscript> par ceux de la page.
 *
 * Volontairement sans navigateur ni jsdom : le script tourne en Node pur, donc
 * il ne peut pas casser le déploiement sur l'hébergeur.
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";
import { VERTICALS } from "../src/content/verticals";

const SITE = "https://netfox.ai";

type Route = {
  path: string;
  title: string;
  description: string;
  /** Contenu de repli, lu par les robots qui n'exécutent pas le JavaScript. */
  body: string;
  /** Balisage JSON-LD propre à la page, en plus du graphe global. */
  jsonLd?: object;
  noindex?: boolean;
};

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const routes: Route[] = [
  {
    path: "/publicite-google",
    title: "Publicité Google pour artisans et PME · Netfox",
    description:
      "Être premier sur Google au moment exact où l'on vous cherche. Notre méthode en cinq points et les retours sur investissement constatés chez nos clients : ×2,4 à ×7,5.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Publicité Google (Google Ads)",
      serviceType: "Gestion de campagnes Google Ads",
      provider: { "@id": `${SITE}/#organisation` },
      areaServed: { "@type": "Country", name: "France" },
      description:
        "Stratégie de positionnement, annonces testées en continu, coût par clic piloté sous le seuil de rentabilité, pages de destination dédiées et suivi des conversions.",
    },
    body: `
      <h1>Être premier sur Google, au moment exact où l'on vous cherche</h1>
      <p>Vous payez Google pour apparaître tout en haut des résultats, et seulement lorsqu'un client clique. C'est le levier le plus rapide pour générer des appels et des demandes de devis.</p>
      <h2>Mais être premier ne suffit pas</h2>
      <p>Sans méthode, une campagne dépense. Avec la bonne, elle rapporte. Toute la différence se joue sur cinq points.</p>
      <ol>
        <li><strong>On choisit le terrain.</strong> Les recherches, les zones et les clients qui rapportent, jamais ceux qui coûtent.</li>
        <li><strong>On écrit, on teste, on garde.</strong> Plus l'annonce est pertinente, plus Google vous favorise, et moins le clic coûte cher.</li>
        <li><strong>On tient le prix du clic.</strong> Chaque enchère est pilotée pour rester sous votre seuil de rentabilité.</li>
        <li><strong>On construit où le clic atterrit.</strong> Jamais une page d'accueil générique, mais une page conçue pour déclencher l'appel ou le devis.</li>
        <li><strong>On mesure, on coupe, on renforce.</strong> Appels, formulaires et réservations sont mesurés chaque mois.</li>
      </ol>
      <h2>Les chiffres, pas les promesses</h2>
      <p>Retours sur investissement constatés sur des comptes Google Ads réels que nous pilotons :</p>
      <ul>
        <li>Summer Party, événementiel : ×2,4 en moyenne sur l'ensemble des campagnes.</li>
        <li>NPS Acoustique, B2B industriel : ×7,5 dès le premier mois.</li>
        <li>Top Service, nettoyage de toitures : ×5,5 lissé sur l'année.</li>
        <li>CleaningPage, plateforme SaaS : ×3 en moyenne.</li>
      </ul>
      <p>Décrivez votre activité et votre zone : nous vous disons honnêtement si Google Ads est rentable pour vous, réponse sous 24 h à <a href="mailto:contact@netfox-agency.com">contact@netfox-agency.com</a>.</p>
    `,
  },
  {
    path: "/mentions-legales",
    title: "Mentions légales · Netfox",
    description: "Informations légales de la société NETFOX.",
    noindex: true,
    body: `
      <h1>Mentions légales</h1>
      <p>NETFOX, société par actions simplifiée au capital de 1 000 €. Siège social : 24 boulevard Marcel Dassault, 64200 Biarritz, France. SIREN 102 875 317, SIRET 102 875 317 00012, TVA FR93102875317. Contact : contact@netfox-agency.com.</p>
    `,
  },
  ...VERTICALS.map((v) => ({
    path: `/${v.slug}`,
    title: `${v.title} · Netfox`,
    description: v.description,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: v.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    body: `
      <p>${esc(v.eyebrow)}</p>
      <h1>${esc(`${v.h1} ${v.h1Accent}`)}</h1>
      <p>${esc(v.lead)}</p>
      <h2>${esc(v.problemTitle)}</h2>
      <p>${esc(v.problemLead)}</p>
      <ul>${v.problems.map((p) => `<li><strong>${esc(p.title)}</strong> ${esc(p.desc)}</li>`).join("")}</ul>
      <h2>${esc(v.solutionTitle)}</h2>
      <ul>${v.solutions.map((s) => `<li><strong>${esc(s.title)}</strong> ${esc(s.desc)}</li>`).join("")}</ul>
      <h2>${esc(v.proofTitle)}</h2>
      <p>${esc(v.proofLead)}</p>
      <ul>${v.proofs
        .map(
          (p) =>
            `<li><strong>${esc(p.name)}</strong>, ${esc(p.place)} : ${esc(p.result)}${
              p.url ? ` (<a href="${esc(p.url)}">${esc(p.url.replace("https://", ""))}</a>)` : ""
            }</li>`
        )
        .join("")}</ul>
      <h2>Les questions qu'on nous pose</h2>
      ${v.faq.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("")}
      <p>Décrivez votre activité et votre zone, réponse sous 24 h à <a href="mailto:contact@netfox-agency.com">contact@netfox-agency.com</a>.</p>
    `,
  })),
];

const dist = resolve("dist");
const shell = readFileSync(resolve(dist, "index.html"), "utf8");

for (const r of routes) {
  let html = shell;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[\s\S]*?" \/>/,
    `<meta name="description" content="${esc(r.description)}" />`
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${SITE}${r.path}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${SITE}${r.path}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[\s\S]*?" \/>/,
    `<meta property="og:title" content="${esc(r.title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[\s\S]*?" \/>/,
    `<meta property="og:description" content="${esc(r.description)}" />`
  );

  if (r.noindex) {
    html = html.replace("</head>", '  <meta name="robots" content="noindex, follow" />\n  </head>');
  }
  if (r.jsonLd) {
    html = html.replace(
      "</head>",
      `  <script type="application/ld+json">${JSON.stringify(r.jsonLd)}</script>\n  </head>`
    );
  }

  // Remplacement du repli noscript par celui de la page
  html = html.replace(
    /<noscript>[\s\S]*?<\/noscript>/,
    `<noscript><main style="max-width:44rem;margin:0 auto;padding:3rem 1.5rem;font-family:system-ui,sans-serif;color:#f0f0f0;background:#0a0b10">${r.body}<p><a href="/" style="color:#8FD0A0">Retour à l'accueil Netfox</a></p></main></noscript>`
  );

  const dir = resolve(dist, r.path.replace(/^\//, ""));
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, "index.html"), html);
  console.log(`  ${r.path} → dist${r.path}/index.html`);
}

console.log(`prerender : ${routes.length} routes générées`);
