# Netfox · Stratégie d'acquisition organique

Document de travail, 28 août 2026. Objectif : des leads qualifiés, pas des positions.

---

## 1. Le constat de départ, sans complaisance

### Ce que dit le terrain

J'ai regardé la concurrence réelle sur les trois angles possibles :

| Angle | Concurrence constatée | Verdict |
|---|---|---|
| « création site internet », « agence web » | Annuaires, comparateurs, plateformes, des milliers d'agences et de freelances | **Injouable.** Aucun retour avant des années, et encore. |
| « agence web Pays Basque / Biarritz » | 10+ agences installées, dont certaines depuis 2008 avec 300+ sites livrés (Geek Tonic, Redmoot, Konekta, Idetik, Studio Waaz, Linkeo…) | **Jouable mais lent**, et le volume de recherche est faible. |
| « site internet pour couvreur » et verticales métier | 7+ agences déjà positionnées avec des pages dédiées et des guides | **Jouable**, concurrence beaucoup plus faible et intention d'achat bien plus forte. |
| « comment trouver des clients [métier] » | Des éditeurs de contenu, pas des agences | **Le vrai angle mort.** C'est là que sont les prospects. |

### Le blocage technique qui rend tout le reste inutile

`netfox.ai` sert **77 caractères de texte** quand on le charge sans JavaScript. C'est une application React rendue côté navigateur, sans pré-rendu.

Conséquences concrètes :
- Google sait exécuter le JavaScript, mais il le fait plus tard et avec moins de confiance. Le site part avec un handicap.
- Les robots des IA (GPTBot, ClaudeBot, PerplexityBot) **n'exécutent pas le JavaScript**. Pour ChatGPT et Perplexity, netfox.ai est aujourd'hui une page vide.
- Le `sitemap.xml` ne contient qu'une seule URL. Le `llms.txt` décrit une page unique.

**Rien ne peut se classer tant que ce point n'est pas réglé.** C'est le préalable absolu.

---

## 2. L'idée directrice

> **Ne pas se battre pour être trouvé par ceux qui cherchent une agence.
> Être trouvé par ceux qui cherchent des clients.**

Un couvreur ne tape pas « agence web ». Il tape « comment trouver des chantiers de couverture ». Un patron de société de nettoyage ne cherche pas un webdesigner, il cherche « trouver des clients nettoyage professionnel ».

Sur ces requêtes, la concurrence n'est pas composée d'agences : ce sont des éditeurs de contenu génériques qui n'ont jamais géré une campagne. Netfox arrive avec quelque chose qu'aucun d'eux n'a : **des chiffres réels sortis de vrais comptes Google Ads.**

L'ordre est : on répond à sa question → il découvre qu'on connaît son métier mieux que lui → il devient client.

---

## 3. Les quatre atouts que la concurrence ne peut pas copier

1. **Des ROI réels et vérifiables.** ×2,4 · ×7,5 · ×5,5 · ×3 sur des comptes en production. Tout le monde promet des résultats, presque personne ne publie de chiffres avec la méthode.
2. **Des sites clients qui rankent vraiment.** Cleanel Chrome est premier sur « nettoyage vitres Saint-Brieuc ». C'est une preuve qu'on peut montrer en direct.
3. **Deux SaaS verticaux** (CleaningPage pour le nettoyage, RentyPage pour la location). Ils prouvent une connaissance métier qu'un généraliste ne peut pas simuler, et ce sont des domaines qui existent déjà.
4. **Un parc de sites clients en ligne.** Dix sites livrés = dix sources potentielles de liens entrants thématiquement parfaits. Voir le point 6.

---

## 4. Le plan, en trois cercles

### Cercle 1 · Répondre à la question du prospect (le moteur à leads)

Cibles : les recherches que font les artisans et patrons de PME, pas celles qui mènent à une agence.

Exemples de pages à écrire, une par mois, chacune adossée à des données réelles :

- « Combien coûte un client venu de Google Ads quand on est couvreur ? » → chiffres réels Debord / VB Rénovation
- « Trouver des chantiers de nettoyage : ce qui marche vraiment en 2026 » → chiffres Cleanel, RCM, CleaningPage
- « Google Ads pour artisan : à partir de quel budget c'est rentable ? » → seuils réels par métier
- « Pourquoi votre site d'artisan ne vous apporte aucun appel » → diagnostic, avec exemples avant/après
- « Faut-il payer Google quand on est déjà premier naturellement ? » → question que tous se posent

**Règle de fer : chaque page contient au moins un chiffre issu d'un compte réel, avec sa période et sa méthode.** C'est ce qui la rend inimitable et citable.

### Cercle 2 · Les pages verticales (la conversion)

Une page par métier, structurée pareil, avec la preuve du métier :

| Page | Preuve à afficher |
|---|---|
| `/site-internet-couvreur` | Debord, Cycy, Ladowicht Nîmes, ESPADE |
| `/site-internet-entreprise-nettoyage` | Cleanel (#1 Google), RCM, Klynera, Bretonnet |
| `/site-internet-location-vehicules` | Vendôme Plaza, ClassicAutoLoc, RentyPage |
| `/google-ads-artisan` | Les 4 ROI + la méthode en 5 points |

Ces pages captent une intention d'achat directe et servent aussi d'atterrissage aux campagnes Google Ads. Double usage, même travail.

### Cercle 3 · Le local (la crédibilité de proximité)

Netfox est domicilié à Biarritz. Le pack local est atteignable là où le référencement national ne l'est pas.

- Créer et remplir la **fiche Google Business Profile** (catégorie « Agence de publicité » ou « Concepteur de sites web », zone Pays Basque + Landes)
- Une page `/agence-web-pays-basque` avec un contenu réellement local
- Collecter des avis Google auprès des clients satisfaits : c'est le facteur numéro un du classement local, et c'est aussi ce que regarde un prospect après un appel téléphonique

---

## 5. Le pari IA, à faire maintenant

Le référencement classique dans cette niche demande douze mois. **La citation par les IA est atteignable en quelques mois**, parce que presque aucun concurrent ne s'en occupe.

Quand un patron demande à ChatGPT « quelle agence pour refaire le site de mon entreprise de nettoyage », il faut que Netfox sorte. Pour cela :

- Régler le pré-rendu (sans ça, rien n'est possible)
- Enrichir `llms.txt` avec les verticales, les preuves et les chiffres
- Écrire des **passages citables** : une réponse nette en deux phrases juste après chaque question, avec le chiffre dedans
- Balisage `FAQPage` et `Article` sur les pages du cercle 1
- Autoriser explicitement GPTBot, ClaudeBot, PerplexityBot, Google-Extended dans `robots.txt` (ils ne sont pas nommés aujourd'hui)

---

## 6. Le multiplicateur que personne n'utilise : le parc client

Dix sites clients en ligne, chacun avec un discret **« Site réalisé par Netfox »** en pied de page pointant vers netfox.ai.

Ce que ça donne :
- Dix liens entrants thématiquement parfaits (des sites d'artisans vers une agence pour artisans)
- Des liens naturels, pérennes, gratuits, impossibles à répliquer par un concurrent
- Un canal de découverte direct : le visiteur d'un site de couvreur qui trouve le site beau clique

C'est probablement **l'action au meilleur rapport effort/résultat de tout ce document.** À demander à chaque client, et à intégrer par défaut sur tous les prochains.

---

## 7. Ordre d'exécution

### ✅ Fait le 28 août 2026
1. **Pré-rendu par route** (`scripts/prerender.ts`, lancé en `postbuild`). Chaque page a désormais son propre fichier HTML avec titre, description, canonical, Open Graph, JSON-LD et contenu de repli. Le site passe de 77 caractères indexables à 1 100–4 800 par page. Script en Node pur, sans navigateur : aucun risque pour le déploiement.
2. **`robots.txt`** : GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot et CCBot explicitement autorisés.
3. **`llms.txt`** enrichi : 600 → 4 400 caractères, avec les ROI chiffrés, les secteurs, les projets nommés et la méthode.
4. **Balisage** : graphe `ProfessionalService` + `WebSite` avec adresse, TVA, `knowsAbout` et catalogue des quatre prestations. `FAQPage` sur les pages métier.
5. **Deux pages verticales publiées** : `/site-internet-couvreur` et `/site-internet-entreprise-nettoyage`, chacune avec le problème du métier, la méthode, des preuves cliquables et cinq questions balisées.
6. **Maillage interne** : bloc « Vous êtes artisan ? » sur l'accueil, liens en pied de page, sitemap à 4 URLs.

### À faire par Melvin (hors code, et déterminant)
7. **Fiche Google Business Profile** créée et remplie. C'est le facteur numéro un du référencement local et c'est gratuit.
8. **Lien « Site réalisé par Netfox »** demandé à chaque client et intégré par défaut sur les prochains sites. Meilleur rapport effort/résultat du document.
9. **Search Console** : propriété vérifiée, sitemap soumis, indexation des nouvelles pages demandée.

### Mois 1-2 — compléter le socle
10. Deux pages verticales de plus : location de véhicules et bateaux, puis une page `/agence-web-pays-basque` pour le local.
11. Suivi des appels et des formulaires, pour savoir quelles pages rapportent.

### Mois 3-6 — le moteur à contenu
9. Une page « question de prospect » par mois (cercle 1), toujours avec des chiffres réels
10. Collecte d'avis Google, en visant dix avis
11. Première mesure : quelles pages amènent des demandes, pas quelles pages amènent du trafic

### Mois 6-12 — l'autorité
12. Une étude de cas détaillée par vertical
13. Publication annuelle de type « Ce que coûte vraiment un client sur Google, métier par métier » à partir des données accumulées : c'est le genre de contenu qui se fait citer et reprendre

---

## 8. Ce qu'on mesure

Le trafic n'est pas l'objectif. Les demandes le sont.

| Indicateur | Avant | Aujourd'hui | 3 mois | 6 mois | 12 mois |
|---|---|---|---|---|---|
| Pages indexables | 1 | **5** | 8 | 14 | 20 |
| Caractères lisibles sans JS (accueil) | 77 | **1 094** | — | — | — |
| Demandes entrantes / mois | 0 | 0 | 2 | 5 | 10 |
| Avis Google | 0 | 0 | 5 | 10 | 20 |
| Citations IA (ChatGPT/Perplexity sur requêtes métier) | 0 | 0 | à mesurer | présent | régulier |
| Position pack local Pays Basque | absent | absent | top 10 | top 5 | top 3 |

**Le seul chiffre qui compte vraiment : le nombre de demandes de projet reçues qui ne viennent pas du téléphone.**

---

## 9. Ce que ce plan ne fera pas

Par honnêteté :

- Il ne fera pas ranker Netfox sur « agence web » ni « création site internet ». C'est un choix, pas un échec.
- Il ne remplacera pas la prospection téléphonique à court terme. Il la rend plus efficace : un prospect appelé qui vérifie ensuite et trouve des chiffres réels et des avis se convertit beaucoup mieux.
- Il ne produit rien avant trois mois. Le référencement dans une niche saturée n'a pas de raccourci.

Ce qu'il fait : il construit un actif qui compose. Chaque campagne client produit des données, les données produisent du contenu, le contenu produit des clients, qui produisent des données.
