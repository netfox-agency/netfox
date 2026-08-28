import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Mentions légales · Netfox</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main className="flex-1 max-w-3xl mx-auto px-5 sm:px-8 py-20 sm:py-28 w-full">
        <Link
          to="/"
          className="text-foreground/40 text-sm font-light hover:text-foreground transition-colors"
        >
          ← Retour au site
        </Link>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mt-8">
          Mentions légales
        </h1>

        <div className="mt-10 space-y-10 text-[15px] sm:text-base font-normal leading-relaxed text-foreground/65">
          <section>
            <h2 className="text-foreground text-lg font-semibold mb-3">Éditeur du site</h2>
            <p>
              NETFOX, société par actions simplifiée au capital de 1 000 €.
              <br />
              Siège social : 24 boulevard Marcel Dassault, 64200 Biarritz, France.
              <br />
              SIREN : 102 875 317 · SIRET (siège) : 102 875 317 00012
              <br />
              TVA intracommunautaire : FR93102875317
              <br />
              Directeur de la publication : le Président de NETFOX.
              <br />
              Contact : contact@netfox-agency.com
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold mb-3">Hébergement</h2>
            <p>
              Ce site est hébergé par Cloudflare, Inc.
              <br />
              101 Townsend St, San Francisco, CA 94107, États-Unis · www.cloudflare.com
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold mb-3">Données personnelles</h2>
            <p>
              Les informations transmises via le formulaire de contact (nom
              d'entreprise, email, téléphone, description du projet) sont
              utilisées uniquement pour répondre à votre demande. Elles ne sont
              ni vendues, ni partagées avec des tiers. Vous pouvez demander
              leur suppression à tout moment en écrivant à
              contact@netfox-agency.com.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold mb-3">Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies publicitaires. Seules des
              mesures d'audience anonymes peuvent être collectées afin
              d'améliorer le site.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold mb-3">Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus de ce site (textes, visuels, créations)
              est la propriété de Netfox. Toute reproduction sans autorisation
              est interdite. Les sites présentés dans la section Réalisations
              restent la propriété de leurs entreprises respectives.
            </p>
          </section>
        </div>
      </main>

      <footer className="py-8 px-5 text-center text-xs text-muted-foreground/60 font-light">
        © Netfox · contact@netfox-agency.com
      </footer>
    </div>
  );
};

export default MentionsLegales;
