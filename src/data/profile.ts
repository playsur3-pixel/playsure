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

export const profile = {
  handle: "playSURE",
  displayName: "Romain 'playSURE' LE GALL",
  tagline: "Coach CS2 joueur & équipe • Méthode A.R.C. • Créateur de StratMotion",

  avatar: "/assets/avatar-romain-headset.webp",

  links: [
    { label: "YouTube", href: "https://www.youtube.com/@playSUR3" },
    { label: "Discord", href: "https://discord.gg/DjxqXj67HU" },
    { label: "TikTok", href: "https://www.tiktok.com/@playsur3" },
  ] as Link[],

  about:
    "J'accompagne les joueurs et les équipes CS2 avec la méthode A.R.C. : Analyse, Réaction, Coordination. Le coaching reste centré sur la lecture du présent, la réaction orientée objectif et l'exécution collective. StratMotion est un logiciel indépendant du coaching, mais cohérent avec le même univers : rendre les idées stratégiques plus claires, plus visibles et plus simples à transmettre.", 

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
            "Date de la sortie prévu de la béta : 03/07/2026."
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
  ] as Product[],

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
  ] as Showcase[],

  heroVideos: ["https://www.youtube.com/watch?v=OeV0DkwvGbc"],
};
