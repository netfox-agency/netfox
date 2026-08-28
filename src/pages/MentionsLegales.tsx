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

        <h1 className="text-3xl sm:text-4xl font-extralight tracking-tight text-foreground mt-8">
          Mentions légales
        </h1>

        <div className="mt-10 space-y-10 text-sm sm:text-base font-light leading-relaxed text-foreground/60">
          <section>
            <h2 className="text-foreground text-lg font-light mb-3">Éditeur du site</h2>
            <p>
              Netfox, entreprise individuelle.
              <br />
              {/* TODO: compléter SIRET, adresse et nom complet avant mise en ligne */}
              SIRET : [à compléter]
              <br />
              Contact : contact@netfox-agency.com
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-light mb-3">Hébergement</h2>
            {/* TODO: confirmer l'hébergeur réel (Lovable ou autre) avant mise en ligne */}
            <p>
              Ce site est hébergé par Lovable Labs Inc.
              <br />
              lovable.dev
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-light mb-3">Données personnelles</h2>
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
            <h2 className="text-foreground text-lg font-light mb-3">Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies publicitaires. Seules des
              mesures d'audience anonymes peuvent être collectées afin
              d'améliorer le site.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-light mb-3">Propriété intellectuelle</h2>
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
