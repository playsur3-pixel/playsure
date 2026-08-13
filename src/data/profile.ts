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
export type ExperienceContent = {
  kicker: string;
  title: string;
  subtitle: string;
  openLabel: string;
  closeLabel: string;
  gamesTitle: string;
  games: { year: string; name: string }[];
  lansTitle: string;
  lans: { result: string; event: string }[];
  videoKicker: string;
  videoTitle: string;
  videoHref: string;
  videoCta: string;
};
export type Profile = {
  handle: string;
  displayName: string;
  tagline: string;
  avatar: string;
  links: Link[];
  about: string;
  experience: ExperienceContent;
  nav: NavItem[];
  offersTitle: string;
  offersSubtitle: string;
  products: Product[];
  portfolioTitle: string;
  portfolioUpdate: string;
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
    { label: "Discord StratMotion", href: "https://discord.gg/CUtsdSZEb" },
    { label: "TikTok", href: "https://www.tiktok.com/@playsur3" },
  ] as Link[],
};

export const profiles: Record<Locale, Profile> = {
  fr: {
    ...shared,
    tagline: "Coach CS2 joueur & équipe • Méthode A.R.C. • Créateur de StratMotion",
    about:
      "J'accompagne les joueurs et les équipes CS2 avec la méthode A.R.C. Le coaching reste centré sur l'analyse, la progression et l'exécution collective. StratMotion est un logiciel indépendant du coaching, mais cohérent avec le même univers : rendre les idées stratégiques plus claires, plus visibles et plus simples à transmettre.",
    experience: {
      kicker: "Parcours",
      title: "Expérience",
      subtitle: "Historique FPS, résultats en LAN et archives Counter-Strike.",
      openLabel: "Afficher",
      closeLabel: "Masquer",
      gamesTitle: "Historique des jeux",
      games: [
        { year: "1996", name: "Doom I / II" },
        { year: "1996", name: "Marathon I / II" },
        { year: "1997", name: "Duke Nukem 3D" },
        { year: "2001", name: "Quake 2 / 3" },
        { year: "2002", name: "Unreal Tournament 2003" },
        { year: "2003", name: "Soldier of Fortune II" },
        { year: "2005", name: "Counter-Strike 1.6" },
        { year: "2010", name: "Call of Duty: Black Ops" },
        { year: "2013", name: "Counter-Strike: Global Offensive" },
        { year: "2023", name: "Counter-Strike 2" },
      ],
      lansTitle: "Résultats LAN",
      lans: [
        { result: "Top 1", event: "LRS'06 — Quake 3" },
        { result: "Top 1", event: "LRS'08 — Counter-Strike 1.6" },
        { result: "Top 8–16", event: "Nantarena 14.1 — CS:GO" },
        { result: "Top 18–32", event: "Nantarena 15.1 — CS:GO" },
        { result: "Top 18–32", event: "Nantarena 16.2 — CS:GO" },
        { result: "Top 18–24", event: "Nantarena 17.2 — CS:GO" },
      ],
      videoKicker: "Archives",
      videoTitle: "20th Anniversary — juillet 2024",
      videoHref: "https://www.youtube.com/playlist?list=PLUY6Q0MPXCk3tSZ_CRutbUV7nQylZJN3N",
      videoCta: "Voir la playlist YouTube",
    },
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
        title: "StratMotion — Beta Contributor",
        description:
          "StratMotion est un planificateur tactique CS2 indépendant du jeu, actuellement en Beta Contributor basé sur la version stable 1.2. Il permet aux joueurs, IGL, coachs et équipes de préparer, visualiser et partager des stratégies sur les overviews de map avec trajectoires, utilitaires, timeline et export vidéo.",
        href: "https://stratmotion.netlify.app/",
        ctaLabel: "Découvrir StratMotion",
        blocks: [
          {
            title: "Beta Contributor",
            items: [
              "Maps disponibles : Ancient, Anubis, Cache, Dust2, Inferno, Mirage et Nuke.",
              "Création de stratégies TR / CT avec joueurs, trajectoires, positions HOLD, smoke, flash, HE, molotov, C4, plant, defuse et kit.",
              "Types de round : Gun, Semi, Force et Full Buy.",
              "Timeline, notes, historique, callouts, zoom, déplacement de l'overview, recentrage et gestion Upper / Lower sur Nuke.",
            ],
          },
          {
            title: "Export et partage",
            items: [
              "Export MP4 en 1080p à 30 FPS pour transformer une stratégie en support vidéo directement partageable.",
              "Ratios 16:9, 1:1 et 9:16, cadre d'export activable, watermark et freeze time de 5 secondes au début et à la fin.",
              "L'objectif est de présenter une exec, un default, une reprise de BP ou une adaptation de manière plus lisible qu'avec des notes ou des screenshots dispersés.",
            ],
          },
          {
            title: "Accès Beta Contributor",
            items: [
              "Accès actuellement proposé gratuitement pendant 30 jours en échange de feedback, bug tracking, remarques d'ergonomie et idées d'évolution.",
              "La demande d'accès s'effectue depuis le site StratMotion ; le projet est encore en phase de stabilisation avant une éventuelle commercialisation.",
              "La version Windows x64 est distribuée avec un outil de vérification SHA-256 afin de contrôler l'intégrité des fichiers fournis.",
            ],
          },
          {
            title: "Indépendant de CS2",
            items: [
              "StratMotion fonctionne comme une application séparée : il ne lance pas CS2.exe, ne s'injecte pas dans le jeu et ne modifie pas son processus.",
              "Il n'interagit pas directement avec Steam ou Counter-Strike 2 et ne nécessite pas l'option -allow_third_party_software.",
              "Le logiciel sert à préparer, documenter et partager les stratégies en dehors du client de jeu.",
            ],
          },
        ],
        tags: ["CS2", "Beta 1.2", "Strats", "Timeline", "Export MP4", "IGL", "Beta Contributor"],
      }
    ],
    portfolioTitle: "Portfolio",
    portfolioUpdate: "Les données ne sont plus disponibles sur VaKarM.net, je ne pourrais pas les partager sans leur permission.",
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
    experience: {
      kicker: "Background",
      title: "Experience",
      subtitle: "FPS history, LAN results and Counter-Strike archives.",
      openLabel: "Show",
      closeLabel: "Hide",
      gamesTitle: "Game history",
      games: [
        { year: "1996", name: "Doom I / II" },
        { year: "1996", name: "Marathon I / II" },
        { year: "1997", name: "Duke Nukem 3D" },
        { year: "2001", name: "Quake 2 / 3" },
        { year: "2002", name: "Unreal Tournament 2003" },
        { year: "2003", name: "Soldier of Fortune II" },
        { year: "2005", name: "Counter-Strike 1.6" },
        { year: "2010", name: "Call of Duty: Black Ops" },
        { year: "2013", name: "Counter-Strike: Global Offensive" },
        { year: "2023", name: "Counter-Strike 2" },
      ],
      lansTitle: "LAN results",
      lans: [
        { result: "Top 1", event: "LRS'06 — Quake 3" },
        { result: "Top 1", event: "LRS'08 — Counter-Strike 1.6" },
        { result: "Top 8–16", event: "Nantarena 14.1 — CS:GO" },
        { result: "Top 18–32", event: "Nantarena 15.1 — CS:GO" },
        { result: "Top 18–32", event: "Nantarena 16.2 — CS:GO" },
        { result: "Top 18–24", event: "Nantarena 17.2 — CS:GO" },
      ],
      videoKicker: "Archives",
      videoTitle: "20th Anniversary — July 2024",
      videoHref: "https://www.youtube.com/playlist?list=PLUY6Q0MPXCk3tSZ_CRutbUV7nQylZJN3N",
      videoCta: "Watch the YouTube playlist",
    },
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
        title: "StratMotion — Beta Contributor",
        description:
          "StratMotion is a standalone CS2 tactical planner, currently available as Beta Contributor based on stable version 1.2. It helps players, IGLs, coaches and teams prepare, visualize and share strategies on map overviews with paths, utility, a timeline and video export.",
        href: "https://stratmotion.netlify.app/",
        ctaLabel: "Discover StratMotion",
        blocks: [
          {
            title: "Beta Contributor",
            items: [
              "Available maps: Ancient, Anubis, Cache, Dust2, Inferno, Mirage and Nuke.",
              "T / CT strategy creation with players, paths, HOLD positions, smoke, flash, HE, molotov, C4, plant, defuse and kit.",
              "Round types: Gun, Semi, Force and Full Buy.",
              "Timeline, notes, edit history, callouts, zoom, overview pan, recenter and Upper / Lower management on Nuke.",
            ],
          },
          {
            title: "Export and sharing",
            items: [
              "1080p 30 FPS MP4 export to turn a strategy into a video support that can be shared directly with a team.",
              "16:9, 1:1 and 9:16 ratios, optional export frame, watermark and a 5-second freeze time at the beginning and end.",
              "The goal is to present an execute, default, retake or adaptation more clearly than through scattered notes and screenshots.",
            ],
          },
          {
            title: "Beta Contributor access",
            items: [
              "Current access is free for 30 days in exchange for feedback, bug reports, usability observations and feature ideas.",
              "Access can be requested from the StratMotion website; the project is still being stabilized before any potential commercial release.",
              "The Windows x64 build is distributed with a SHA-256 verification tool to check the integrity of the provided files.",
            ],
          },
          {
            title: "Independent from CS2",
            items: [
              "StratMotion runs as a separate application: it does not launch CS2.exe, inject into the game or modify the game process.",
              "It does not directly interact with Steam or Counter-Strike 2 and does not require -allow_third_party_software.",
              "The software is used to prepare, document and share strategies outside the game client.",
            ],
          },
        ],
        tags: ["CS2", "Beta 1.2", "Strats", "Timeline", "MP4 export", "IGL", "Beta Contributor"],
      }
    ],
    portfolioTitle: "Portfolio",
    portfolioUpdate: "The data is no longer available on VaKarM.net, I cannot share it without their permission.",
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
