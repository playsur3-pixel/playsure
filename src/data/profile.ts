export type Locale = "fr" | "eng";
export type Link = { label: string; href: string };
export type Showcase = { title: string; desc: string; img: string; tags: string[]; href?: string };
export type Product = {
  kicker: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  blocks: { title: string; items: string[] }[];
  tags: string[];
};
export type NavItem = { label: string; href: string };
export type Profile = {
  handle: string;
  displayName: string;
  tagline: string;
  avatar: string;
  links: Link[];
  about: string;
  nav: NavItem[];
  offersTitle: string;
  offersSubtitle: string;
  products: Product[];
  portfolioTitle: string;
  portfolioSubtitle: string;
  galleryLabel: string;
  showcaseViewLabel: string;
  showcases: Showcase[];
  footer: string;
};

const shared = {
  handle: "playSURE",
  displayName: "Romain 'playSURE' LE GALL",
  avatar: "/assets/avatar-romain-headset.webp",
  links: [
    { label: "YouTube", href: "https://www.youtube.com/@playSUR3" },
    { label: "Discord Coaching", href: "https://discord.gg/PJZ4dzjJp" },
    { label: "Discord StratMotion", href: "https://discord.gg/nRDNrbTtG" },
    { label: "TikTok", href: "https://www.tiktok.com/@playsur3" },
  ] as Link[],
};

export const profiles: Record<Locale, Profile> = {
  fr: {
    ...shared,
    tagline: "Coach CS2 joueur & équipe • Méthode A.R.C. • Créateur de StratMotion",
    about:
      "J'accompagne les joueurs et les équipes CS2 avec la méthode A.R.C. Le coaching reste centré sur l'analyse, la progression et l'exécution collective. StratMotion est un logiciel indépendant du coaching, mais cohérent avec le même univers : rendre les idées stratégiques plus claires, plus visibles et plus simples à transmettre.",
    nav: [
      { label: "Profil", href: "#overview" },
      { label: "Offres", href: "#offers" },
      { label: "Portfolio", href: "#portfolio" },
    ],
    offersTitle: "Coaching et StratMotion",
    offersSubtitle:
      "Deux activités séparées. Même terrain : mieux comprendre CS2, mieux s'entraîner, mieux transmettre, mieux exécuter.",
    products: [
      {
        kicker: "Coaching",
        title: "Coaching CS2 sur CoachingMaster",
        description:
          "Un accompagnement pour joueur ou équipe, structuré autour de la méthode A.R.C. : comprendre la situation réelle, transformer l'analyse en objectifs concrets, puis coordonner l'exécution individuelle et collective.",
        href: "https://coachingmaster.fr/coach_profile.php?coach_id=122",
        ctaLabel: "Accéder à CoachingMaster",
        blocks: [
          {
            title: "Méthode A.R.C.",
            items: [
              "Une méthode de coaching propriétaire pensée pour structurer l'analyse, la progression et l'exécution en jeu.",
              "Le but est de transformer une VOD, une difficulté ou un problème d'équipe en priorités de travail claires.",
              "Le contenu précis de la méthode reste réservé aux séances de coaching.",
              "Tracer sa trajectoire : comprendre, anticiper, exécuter.",
            ],
          },
          {
            title: "Ce que je travaille",
            items: [
              "Joueur : prises d'informations, timings, duels, gestion du risque et habitudes qui limitent la progression.",
              "Équipe : communication utile, spacing, trades, reprises de BP, mid-round et cohérence des rôles.",
              "Méthode : objectifs simples, routine courte, priorités réalistes et suivi des axes de progression.",
            ],
          },
          {
            title: "Format des séances",
            items: [
              "Session Discord d'environ 1h, construite selon le besoin : accompagnement en direct sur stream, observation en retrait pendant une partie, ou review d'une VOD sélectionnée.",
              "Le travail peut partir d'un défaut précis à corriger ou d'une analyse globale du match pour faire émerger les priorités réelles.",
              "Les axes possibles : prise d'information, communication, duels, spacing, timings, décisions, gestion du risque, rôles ou exécution collective.",
              "Chaque séance se termine par un plan d'action clair pour transformer l'analyse en travail exploitable.",
            ],
          },
          {
            title: "Suivi d'entraînement et analyse de match",
            items: [
              "Outil disponible de suivi d'entraînement individuel pour structurer les exercices, noter les résultats et suivre l'évolution du joueur.",
              "Outil d'analyse de match en cours de création pour compléter le travail de coaching avec une lecture plus précise des performances.",
              "Objectif : passer d'un ressenti flou à des priorités de progression claires, mesurables et exploitables.",
            ],
          },
        ],
        tags: ["VOD review", "Joueur", "Équipe", "Rôles", "Comms", "Suivi"],
      },
      {
        kicker: "Logiciel",
        title: "StratMotion",
        description:
          "Un logiciel complètement à part du coaching, mais construit dans le même thème : aider les joueurs, coachs et équipes à préparer, visualiser et expliquer des stratégies CS2 avec plus de clarté et une timeline basée sur la vitesse réelle du jeu.",
        href: "https://stratmotion.netlify.app/",
        ctaLabel: "Découvrir StratMotion",
        blocks: [
          {
            title: "Ce que le logiciel apporte",
            items: [
              "Création de stratégies sur overview avec joueurs, trajectoires, timings, grenades et déroulé de round.",
              "Timeline basée sur la vitesse de déplacement réelle de CS2 pour rendre les timings plus crédibles qu'un schéma figé.",
              "Support utile pour coach, IGL, équipe amateur ou joueur qui veut documenter ses idées proprement.",
            ],
          },
          {
            title: "Commercialisation",
            items: [
              "Démo StratMotion : 1 map disponible, sans sauvegarde, avec 1 export vidéo de 55 secondes pour découvrir le fonctionnement de l'outil.",
              "Accès anticipé bêta : 15 € pour soutenir le développement, tester l'outil en avance et obtenir 2 mois Creator offerts à la sortie de la V1.",
              "Licence Creator V1 : accès complet pensé pour les coachs, IGL, joueurs investis et équipes souhaitant structurer leurs stratégies.",
              "Mensuel : 5,50 € / mois.",
              "6 mois : 29 €, soit 4,83 € / mois, 12 % de réduction.",
              "Annuel : 48 €, soit 4,00 € / mois, 27,27 % de réduction.",
              "Date de sortie prévue de la bêta : 03/07/2026.",
            ],
          },
          {
            title: "Cas d'utilisation",
            items: [
              "Préparer une exec, un default, une reprise de BP ou une adaptation mid-round.",
              "Créer un support visuel clair avant entraînement pour éviter les explications longues et floues.",
              "Documenter les idées d'équipe dans un format plus propre qu'une note texte ou un dessin rapide.",
            ],
          },
          {
            title: "Positionnement",
            items: [
              "StratMotion n'est pas une prestation de coaching : c'est un produit indépendant.",
              "Il complète naturellement le travail d'équipe en transformant les idées, protocoles et adaptations en supports lisibles.",
              "Il évite de disperser les strats entre Google Sheets, Discord, Paint, screenshots et notes isolées.",
            ],
          },
        ],
        tags: ["CS2", "Strats", "Timeline", "Vitesse réelle", "Overview", "Équipe"],
      },
    ],
    portfolioTitle: "Portfolio",
    portfolioSubtitle: "Quelques traces de mon parcours Counter-Strike, hors prestations actuelles.",
    galleryLabel: "Galerie officielle VaKarM.net",
    showcaseViewLabel: "Voir",
    showcases: [
      {
        title: "LAN sur CS:GO",
        desc: "De nuit, l'ambiance s'intensifie. Prêt à dormir sous les tables ?",
        img: "/assets/portfolio-aware-1.webp",
        tags: ["LAN", "Team", "Chill"],
      },
      {
        title: "LAN sur CS:GO",
        desc: "Expérience LAN entre potes après notre âge d'or, peu importe le niveau.",
        img: "/assets/portfolio-aware-2.webp",
        tags: ["LAN", "Team", "Chill"],
      },
      {
        title: "Ambiance Nantarena",
        desc: "Merci à VaKarM.net pour les photos de couverture.",
        img: "/assets/portfolio-nantarena.webp",
        tags: ["Cover", "French Touch", "Archive"],
      },
    ],
    footer: "Coaching CS2 & StratMotion",
  },
  eng: {
    ...shared,
    tagline: "CS2 player & team coach • A.R.C. method • StratMotion creator",
    about:
      "I coach CS2 players and teams through the A.R.C. method. The work focuses on analysis, progression and collective execution. StratMotion is independent from coaching, but built in the same CS2 environment: making strategic ideas clearer, easier to visualize and easier to communicate.",
    nav: [
      { label: "Profile", href: "#overview" },
      { label: "Offers", href: "#offers" },
      { label: "Portfolio", href: "#portfolio" },
    ],
    offersTitle: "Coaching and StratMotion",
    offersSubtitle:
      "Two separate activities. Same field: understand CS2 better, train better, communicate better, execute better.",
    products: [
      {
        kicker: "Coaching",
        title: "CS2 coaching on CoachingMaster",
        description:
          "Coaching for individual players or teams, structured around the A.R.C. method: understand the actual situation, turn analysis into concrete goals, then coordinate individual and collective execution.",
        href: "https://coachingmaster.fr/coach_profile.php?coach_id=122",
        ctaLabel: "Go to CoachingMaster",
        blocks: [
          {
            title: "A.R.C. method",
            items: [
              "A proprietary coaching method designed to structure analysis, progression and in-game execution.",
              "The goal is to turn a VOD, a specific issue or a team problem into clear work priorities.",
              "The detailed method remains reserved for coaching sessions.",
              "Draw your trajectory: understand, anticipate, execute.",
            ],
          },
          {
            title: "What I work on",
            items: [
              "Player: information gathering, timings, duels, risk management and habits that slow progression.",
              "Team: useful communication, spacing, trades, retakes, mid-round decisions and role consistency.",
              "Method: simple goals, short routines, realistic priorities and follow-up on progression areas.",
            ],
          },
          {
            title: "Session format",
            items: [
              "Discord session of around 1 hour, built around the need: live support on stream, silent observation during a match, or review of a selected VOD.",
              "The work can start from a specific weakness to correct or from a global match analysis to reveal the real priorities.",
              "Possible axes: information gathering, communication, duels, spacing, timings, decisions, risk management, roles or collective execution.",
              "Each session ends with a clear action plan to turn analysis into usable work.",
            ],
          },
          {
            title: "Training tracking and match analysis",
            items: [
              "Available individual training tracker to structure exercises, record results and follow player progression.",
              "Match analysis tool currently in development to complete coaching work with a more precise reading of performance.",
              "Goal: move from vague feeling to clear, measurable and usable progression priorities.",
            ],
          },
        ],
        tags: ["VOD review", "Player", "Team", "Roles", "Comms", "Tracking"],
      },
      {
        kicker: "Software",
        title: "StratMotion",
        description:
          "A standalone product, separate from coaching, built in the same CS2 environment: helping players, coaches and teams prepare, visualize and explain CS2 strategies more clearly with a timeline based on real in-game movement speed.",
        href: "https://stratmotion.netlify.app/",
        ctaLabel: "Discover StratMotion",
        blocks: [
          {
            title: "What the software brings",
            items: [
              "Strategy creation on overviews with players, paths, timings, grenades and round flow.",
              "Timeline based on CS2 real movement speed to make timings more credible than a static drawing.",
              "Useful support for coaches, IGLs, amateur teams or players who want to document ideas cleanly.",
            ],
          },
          {
            title: "Commercial access",
            items: [
              "StratMotion Demo: 1 available map, no save feature, with 1 video export of 55 seconds to understand how the tool works.",
              "Early beta access: €15 to support development, test the tool early and receive 2 Creator months included when V1 launches.",
              "Creator V1 license: full access designed for coaches, IGLs, invested players and teams that want to structure their strategies.",
              "Monthly: €5.50 / month.",
              "6 months: €29, equal to €4.83 / month, 12% discount.",
              "Yearly: €48, equal to €4.00 / month, 27.27% discount.",
              "Planned beta release date: July 3, 2026.",
            ],
          },
          {
            title: "Use cases",
            items: [
              "Prepare an execute, default, retake or mid-round adaptation.",
              "Create a clear visual support before practice to avoid long and vague explanations.",
              "Document team ideas in a cleaner format than a text note or quick drawing.",
            ],
          },
          {
            title: "Positioning",
            items: [
              "StratMotion is not a coaching service: it is an independent product.",
              "It naturally complements team work by turning ideas, protocols and adaptations into readable supports.",
              "It avoids spreading strats across Google Sheets, Discord, Paint, screenshots and isolated notes.",
            ],
          },
        ],
        tags: ["CS2", "Strats", "Timeline", "Real speed", "Overview", "Team"],
      },
    ],
    portfolioTitle: "Portfolio",
    portfolioSubtitle: "A few traces from my Counter-Strike background, outside current services.",
    galleryLabel: "Official VaKarM.net gallery",
    showcaseViewLabel: "View",
    showcases: [
      {
        title: "CS:GO LAN",
        desc: "At night, the atmosphere gets heavier. Ready to sleep under the tables?",
        img: "/assets/portfolio-aware-1.webp",
        tags: ["LAN", "Team", "Chill"],
      },
      {
        title: "CS:GO LAN",
        desc: "LAN experience with friends after our golden age, regardless of level.",
        img: "/assets/portfolio-aware-2.webp",
        tags: ["LAN", "Team", "Chill"],
      },
      {
        title: "Nantarena atmosphere",
        desc: "Thanks to VaKarM.net for the cover photos.",
        img: "/assets/portfolio-nantarena.webp",
        tags: ["Cover", "French Touch", "Archive"],
      },
    ],
    footer: "CS2 coaching & StratMotion",
  },
};

export const defaultLocale: Locale = "fr";
export const availableLocales: Locale[] = ["fr", "eng"];
