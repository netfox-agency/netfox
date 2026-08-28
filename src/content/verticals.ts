/**
 * Contenu des pages verticales.
 *
 * Règle : chaque affirmation chiffrée vient d'un compte ou d'un site réel.
 * Rien n'est inventé ici — si une donnée manque, la phrase est retirée plutôt
 * qu'approximée. C'est ce qui rend ces pages citables par les moteurs de
 * réponse et crédibles pour un prospect qui vérifie.
 */

export type Faq = { q: string; a: string };

export type Vertical = {
  slug: string;
  /* SEO */
  title: string;
  description: string;
  /* Hero */
  eyebrow: string;
  h1: string;
  h1Accent: string;
  lead: string;
  /* Le problème, dans les mots du métier */
  problemTitle: string;
  problemLead: string;
  problems: { title: string; desc: string }[];
  /* Ce qu'on fait */
  solutionTitle: string;
  solutions: { title: string; desc: string }[];
  /* Preuves */
  proofTitle: string;
  proofLead: string;
  proofs: { name: string; place: string; result: string; url?: string }[];
  /* FAQ (balisée FAQPage) */
  faq: Faq[];
  /* CTA */
  ctaTitle: string;
  ctaAccent: string;
};

export const VERTICALS: Vertical[] = [
  {
    slug: "site-internet-couvreur",
    title: "Site internet pour couvreur : générer des devis, pas des visites",
    description:
      "Un site de couvreur ne sert à rien s'il n'amène pas d'appels. Ce qui déclenche vraiment un devis, ce que coûte un client venu de Google, et des exemples de sites de couvreurs réellement en ligne.",
    eyebrow: "Couverture · Zinguerie · Rénovation de toiture",
    h1: "Un site de couvreur qui",
    h1Accent: "amène des chantiers.",
    lead:
      "Quand une toiture fuit, le client ne compare pas dix artisans. Il cherche sur Google, il appelle les deux ou trois premiers, et il prend celui qui répond. Tout se joue là.",

    problemTitle: "Pourquoi la plupart des sites de couvreurs ne servent à rien",
    problemLead:
      "Ce ne sont pas des sites moches. Ce sont des sites qui ne répondent pas à la question que se pose la personne au moment où elle la pose.",
    problems: [
      {
        title: "Personne ne vous trouve sur votre ville",
        desc: "Un site sans travail de référencement local n'apparaît sur aucune recherche du type « couvreur + votre ville ». Il n'existe que pour ceux qui connaissent déjà votre nom.",
      },
      {
        title: "Le numéro n'est pas cliquable",
        desc: "Sur un téléphone, un numéro qu'on ne peut pas appeler d'un doigt fait perdre l'appel. C'est l'erreur la plus fréquente et la plus coûteuse.",
      },
      {
        title: "Aucune preuve du travail",
        desc: "Un client qui confie sa toiture veut voir des chantiers, des garanties, une assurance décennale. Un site sans photos réelles ni mentions concrètes ne rassure pas.",
      },
      {
        title: "Rien n'est mesuré",
        desc: "Sans suivi des appels ni des formulaires, impossible de savoir si le site rapporte. On paie un site tous les ans sans jamais savoir ce qu'il produit.",
      },
    ],

    solutionTitle: "Ce que nous construisons à la place",
    solutions: [
      {
        title: "Une page par prestation et par zone",
        desc: "Couverture neuve, réparation de fuite, démoussage, charpente, zinguerie : chaque prestation a sa page, avec le vocabulaire réellement tapé sur Google. Puis les communes autour, une par une, avec du contenu propre à chacune.",
      },
      {
        title: "L'appel à portée de pouce",
        desc: "Numéro cliquable dans l'en-tête, barre d'appel fixe en bas d'écran sur mobile, formulaire de devis court. Le parcours entre « je lis » et « je vous appelle » tient en un geste.",
      },
      {
        title: "La preuve visible",
        desc: "Vos chantiers en photo, vos garanties, votre zone d'intervention, vos avis. Ce sont ces éléments qui font choisir entre deux artisans à prix égal.",
      },
      {
        title: "Google Ads quand c'est rentable",
        desc: "Le référencement naturel met des mois. La publicité Google amène des appels dès la première semaine. Nous vous disons honnêtement si votre marché le justifie, et à partir de quel budget.",
      },
    ],

    proofTitle: "Des sites de couvreurs réellement en ligne",
    proofLead:
      "Pas des maquettes. Des sites livrés, en production, que vous pouvez ouvrir et vérifier.",
    proofs: [
      {
        name: "Debord Rénovation",
        place: "Couvreur en Ardèche du Sud",
        result: "Site vitrine, référencement local et campagnes Google Ads",
        url: "https://renovation-ardeche.fr",
      },
      {
        name: "Cycy Couverture Zinguerie",
        place: "Couvreur à Saint-Gobain, Aisne",
        result: "Site vitrine, neuf prestations, référencement local",
        url: "https://cycycouverture.fr",
      },
      {
        name: "Ladowicht",
        place: "Couvreur à Nîmes et dans le Gard",
        result: "Refonte positionnée sur la couverture et la charpente",
        url: "https://artisan-nimes.fr",
      },
    ],

    faq: [
      {
        q: "Combien coûte un site internet pour un couvreur ?",
        a: "Le budget dépend du nombre de prestations et de communes à couvrir. Un site de couvreur sérieux, avec ses pages de prestations, ses pages de communes et le suivi des appels, se situe au-dessus d'un simple site vitrine à quelques centaines d'euros, parce que c'est le travail de référencement local qui fait la différence, pas le nombre de pages. Nous chiffrons après un entretien, une fois votre zone et vos prestations connues.",
      },
      {
        q: "Combien de temps avant d'avoir des appels ?",
        a: "En référencement naturel, il faut compter plusieurs mois avant d'apparaître sur les recherches de votre ville, parfois plus dans les zones très concurrentielles. Avec Google Ads, les premiers appels arrivent dès les premiers jours de campagne. C'est pourquoi nous combinons souvent les deux : la publicité amène des chantiers tout de suite, le référencement prend le relais.",
      },
      {
        q: "Google Ads est-il rentable pour un couvreur ?",
        a: "Cela dépend de la valeur moyenne de votre chantier et de la concurrence sur votre zone. Un chantier de couverture représente souvent plusieurs milliers d'euros, donc le seuil de rentabilité est atteint avec très peu de conversions. Sur les campagnes que nous pilotons, tous secteurs confondus, les retours constatés vont de ×2,4 à ×7,5. Nous vous disons avant de commencer si votre cas s'y prête.",
      },
      {
        q: "Faut-il une page par commune ?",
        a: "Oui, mais pas n'importe comment. Multiplier des pages identiques en changeant juste le nom de la ville est pénalisé par Google. Il faut un nombre limité de pages de communes, chacune avec un contenu réellement différent : les quartiers, le type de bâti, les spécificités locales. C'est plus long à produire, mais c'est ce qui fonctionne.",
      },
      {
        q: "Est-ce que je reste propriétaire de mon site ?",
        a: "Oui. Le nom de domaine et le site vous appartiennent. Vous n'êtes pas enfermé dans un abonnement qui vous fait perdre votre site le jour où vous partez.",
      },
    ],

    ctaTitle: "Votre prochain chantier",
    ctaAccent: "commence par une recherche Google.",
  },

  {
    slug: "site-internet-entreprise-nettoyage",
    title: "Site internet pour entreprise de nettoyage : obtenir des contrats",
    description:
      "Un site de société de nettoyage doit amener des demandes de devis, pas du trafic. Ce qui fonctionne en référencement local, ce que change le crédit d'impôt, et des sites de nettoyage réellement en ligne.",
    eyebrow: "Nettoyage · Propreté · Remise en état",
    h1: "Un site de nettoyage qui",
    h1Accent: "remplit le carnet.",
    lead:
      "Dans le nettoyage, la concurrence se joue rarement sur le prix. Elle se joue sur qui apparaît en premier quand un syndic, un gérant de bureaux ou un particulier cherche un prestataire.",

    problemTitle: "Ce qui bloque la plupart des sites de nettoyage",
    problemLead:
      "Le métier a deux clientèles très différentes, particuliers et professionnels, et la plupart des sites parlent aux deux à la fois sans convaincre ni l'une ni l'autre.",
    problems: [
      {
        title: "Un discours qui mélange particuliers et professionnels",
        desc: "Un syndic et un particulier ne cherchent pas la même chose, ne tapent pas les mêmes mots et ne veulent pas les mêmes preuves. Un site qui s'adresse aux deux en même temps perd les deux.",
      },
      {
        title: "Le crédit d'impôt n'est pas exploité",
        desc: "Pour les prestations chez les particuliers, le crédit d'impôt de 50 % divise le prix perçu par deux. C'est l'argument le plus puissant du métier, et il est presque toujours enterré en bas de page.",
      },
      {
        title: "Aucune présence sur les communes autour",
        desc: "Le nettoyage est un métier de proximité. Sans travail sur les communes de la zone d'intervention, on ne capte que la ville principale et on laisse tout le reste aux concurrents.",
      },
      {
        title: "Pas de demande de devis simple",
        desc: "Un formulaire long fait fuir. Le visiteur veut décrire son besoin en trois champs et être rappelé.",
      },
    ],

    solutionTitle: "La structure qui fonctionne",
    solutions: [
      {
        title: "Une page par prestation",
        desc: "Vitres, fin de chantier, copropriétés, bureaux, remise en état : chaque prestation a sa page, avec ses mots-clés propres. C'est la structure sûre, contrairement à la multiplication de pages service par ville.",
      },
      {
        title: "Le crédit d'impôt mis en avant",
        desc: "Quand vous êtes déclaré en services à la personne, l'avantage fiscal doit être visible dès le premier écran, avec un calcul concret. C'est ce qui transforme un visiteur hésitant en demande de devis.",
      },
      {
        title: "Des pages de communes à contenu réel",
        desc: "Un nombre limité de communes, chacune avec un contenu qui lui est propre. C'est la méthode qui tient dans la durée, sans risque de pénalité.",
      },
      {
        title: "Le suivi de chaque demande",
        desc: "Appels, formulaires, messages : tout est mesuré, pour savoir quelles pages rapportent réellement des contrats.",
      },
    ],

    proofTitle: "Des sites de nettoyage réellement en ligne",
    proofLead:
      "Des entreprises de propreté pour qui nous avons conçu le site et travaillé le référencement.",
    proofs: [
      {
        name: "Cleanel Chrome",
        place: "Nettoyage à Saint-Brieuc, Côtes-d'Armor",
        result:
          "Refonte complète, quinze pages, crédit d'impôt mis en avant, position de tête préservée sur sa requête principale",
        url: "https://cleanelchrome.fr",
      },
      {
        name: "RCM Nettoyage",
        place: "Nettoyage professionnel à Bordeaux",
        result:
          "Site sur mesure, référencement local sur vingt-deux communes, click-to-call et suivi des appels",
        url: "https://rcm-nettoyage.fr",
      },

    ],

    faq: [
      {
        q: "Combien coûte un site pour une entreprise de nettoyage ?",
        a: "Le budget dépend surtout du nombre de prestations et de communes à couvrir. Ce qui fait le prix, ce n'est pas le design, c'est le travail de contenu et de référencement local, car c'est lui qui amène les demandes. Nous chiffrons après un entretien, une fois votre zone et vos prestations connues.",
      },
      {
        q: "Comment trouver des clients quand on démarre en nettoyage ?",
        a: "Trois leviers, dans cet ordre. D'abord la fiche Google Business Profile, gratuite, qui vous fait apparaître sur la carte : c'est le premier facteur de contact local. Ensuite les avis clients, à demander systématiquement après chaque intervention. Enfin le site, qui capte les recherches de prestations précises. La publicité Google vient après, une fois que vous savez ce qu'un client vous rapporte.",
      },
      {
        q: "Le crédit d'impôt de 50 % s'applique-t-il à toutes les prestations ?",
        a: "Non. Il concerne les prestations réalisées chez des particuliers par une entreprise déclarée en services à la personne. Les prestations pour les professionnels, les copropriétés ou les fins de chantier n'y ouvrent pas droit. Le site doit donc distinguer clairement les deux, sinon il crée une attente qui sera déçue.",
      },
      {
        q: "Faut-il une page par ville d'intervention ?",
        a: "Un nombre limité, oui, à condition que chaque page ait un contenu réellement différent. Générer des dizaines de pages identiques en changeant le nom de la commune est une pratique pénalisée par Google. Pour couvrir une zone large, la fiche Google Business Profile est un meilleur outil que la multiplication de pages.",
      },
      {
        q: "En combien de temps le site rapporte-t-il des contrats ?",
        a: "Le référencement naturel demande plusieurs mois pour s'installer sur les recherches de votre zone. Si vous avez besoin de demandes plus vite, la publicité Google produit des contacts dès les premiers jours. Sur les campagnes que nous pilotons dans le secteur, les retours constatés vont jusqu'à ×5,5 lissé sur l'année.",
      },
    ],

    ctaTitle: "Vos prochains contrats",
    ctaAccent: "se cherchent déjà sur Google.",
  },
  {
    slug: "agence-web-pays-basque",
    title: "Agence web au Pays Basque : sites et Google Ads à Biarritz",
    description:
      "Netfox est installé à Biarritz. Sites web sur mesure, référencement local et campagnes Google Ads pour les entreprises du Pays Basque, avec des résultats mesurés.",
    eyebrow: "Biarritz · Bayonne · Anglet · Pays Basque",
    h1: "Une agence web installée",
    h1Accent: "au Pays Basque.",
    lead:
      "Netfox est domicilié à Biarritz. Nous travaillons partout en France, mais nous connaissons ce territoire, ses saisons et sa clientèle, et cela change la façon de construire un site.",

    problemTitle: "Ce qui compte vraiment pour une entreprise locale",
    problemLead:
      "Sur un marché comme le Pays Basque, où l'activité est saisonnière et la concurrence dense, un beau site ne suffit pas. Il faut être trouvé au bon moment.",
    problems: [
      {
        title: "Apparaître sur la carte avant d'apparaître dans la liste",
        desc: "Pour une recherche locale, Google affiche d'abord une carte avec trois établissements. Y figurer dépend de votre fiche Google Business Profile et de vos avis, pas seulement de votre site.",
      },
      {
        title: "La saisonnalité change tout",
        desc: "Beaucoup d'activités ici font leur année sur quelques mois. Une campagne publicitaire qui tourne toute l'année au même rythme gaspille le budget hors saison et sous-investit au pic.",
      },
      {
        title: "Une clientèle qui vient d'ailleurs",
        desc: "Une partie de vos clients ne sont pas d'ici : ils préparent leur venue depuis Paris, Bordeaux ou l'étranger. Ils ne cherchent pas avec les mêmes mots que les habitants.",
      },
      {
        title: "Les avis pèsent plus que le discours",
        desc: "Sur un marché de proximité, la réputation circule vite. Les avis Google sont le premier élément regardé, avant même le contenu du site.",
      },
    ],

    solutionTitle: "Comment nous travaillons avec les entreprises d'ici",
    solutions: [
      {
        title: "Le référencement local d'abord",
        desc: "Fiche Google Business Profile, cohérence des coordonnées partout sur le web, avis clients, contenu réellement ancré sur vos communes. C'est ce qui fait apparaître sur la carte.",
      },
      {
        title: "Des campagnes calées sur votre saison",
        desc: "Budget renforcé au moment où vos clients cherchent, réduit quand ils ne cherchent pas. Nous pilotons le coût par clic pour qu'il reste sous votre seuil de rentabilité.",
      },
      {
        title: "Un site qui parle aux deux clientèles",
        desc: "Les habitants et les visiteurs ne cherchent pas pareil. Le site doit répondre aux deux sans se disperser.",
      },
      {
        title: "Un interlocuteur joignable",
        desc: "Vous parlez directement à la personne qui conçoit votre site, pas à un commercial ni à un centre d'appels.",
      },
    ],

    proofTitle: "Un exemple local",
    proofLead:
      "Nous n'affichons que des sites réellement en ligne, que vous pouvez ouvrir et vérifier.",
    proofs: [
      {
        name: "South Street Food",
        place: "Restauration rapide à Bayonne",
        result:
          "Site de commande en ligne, livraison sur Bayonne, Anglet et Biarritz, commandes reçues par email",
        url: "https://southstreetfood.fr",
      },
    ],

    faq: [
      {
        q: "Faut-il choisir une agence web locale ?",
        a: "Pas nécessairement pour la technique : un site se conçoit très bien à distance. En revanche, pour le référencement local, connaître le territoire aide réellement : les communes qui comptent, la saisonnalité, la façon dont les clients d'ici cherchent. Et pouvoir se rencontrer facilite le démarrage d'un projet.",
      },
      {
        q: "Intervenez-vous seulement au Pays Basque ?",
        a: "Non. Nous sommes installés à Biarritz mais nous travaillons partout en France : Bretagne, Aquitaine, Ardèche, Gard, Aisne, région parisienne, Côte d'Azur. Le Pays Basque est notre base, pas notre limite.",
      },
      {
        q: "Comment apparaître dans le pack local de Google ?",
        a: "Trois éléments comptent avant tout : une fiche Google Business Profile complète et à jour, des avis clients réguliers, et la cohérence de vos coordonnées sur l'ensemble du web. Le site vient renforcer ces signaux, il ne les remplace pas. C'est gratuit à mettre en place et c'est le premier levier local.",
      },
      {
        q: "Quel budget prévoir pour être visible localement ?",
        a: "La fiche Google Business Profile et les avis ne coûtent rien, seulement du temps. Le site représente un investissement ponctuel. La publicité Google est le seul poste récurrent, et son montant dépend de la valeur d'un client pour vous. Nous vous disons avant de commencer si votre activité justifie ce budget.",
      },
    ],

    ctaTitle: "Parlons de votre projet,",
    ctaAccent: "on est juste à côté.",
  },
];

export const VERTICAL_BY_SLUG = Object.fromEntries(
  VERTICALS.map((v) => [v.slug, v])
) as Record<string, Vertical>;
