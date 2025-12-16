export type Link = { label: string; href: string };
export type Stat = { label: string; value: string; hint?: string };
export type Skill = { title: string; desc: string; tags: string[] };
export type Showcase = { title: string; desc: string; img: string; tags: string[]; href?: string };

export const profile = {
  handle: "playSURE",
  displayName: "Romain 'playSURE' LE GALL",
  status:"Actif",
  tagline: "• Coach CS2 • Data Analyse • Mappeur • Moviemaker",
  location: "France, Nantes",
  cover: "/assets/cover-cs2.png",
  avatar: "/assets/image_profile.png",

  ctas: [
    { label: "CoachingMaster", href: "https://coachingmaster.fr/coach_profile.php?coach_id=122" },
  ] as Link[],

  links: [
    { label: "YouTube", href: "https://www.youtube.com/@playSUR3" },
    { label: "Discord", href: "https://discord.gg/DjxqXj67HU" },
  ] as Link[],

  about:
    "J’aide les joueurs et les équipes CS2 à structurer leur progression (méthode A.R.C.), tout en produisant du contenu : demos → fragmovies, overlays, et projets de mapmaking.",

  stats: [
    { label: "Rôle", value: "Tous", hint: "" },
    { label: "Spécialité", value: "Coaching d'équipe", hint: "" },
  ] as Stat[],

  skills: [
    {
      title: "Coaching CS2",
      desc: "Analyse VOD, rôles, comms, exécutions simples, routines d'entraînement.",
      tags: ["Solo", "Team", "ARC", "Review", "Roadmap"],
    },
        {
      title: "Data & Dashboards",
      desc: "Stats CS2, dashboards, insights sur perfs (maps, roles, trends).",
      tags: ["Power BI", "CSV", "Web", "Analytics"],
    },
    {
      title: "Mapmaking",
      desc: "Création / prototypage de maps, routes de cam, overviews & visuels stratégiques.",
      tags: ["Source 2", "Hammer", "Overview", "Strats"],
    },
    {
      title: "Moviemaking",
      desc: "Fragmovies, one-action, motion design, titrage 3D, sound design.",
      tags: ["S2FM", "After Effects", "Premiere", "60fps"],
    },
  ] as Skill[],

  showcases: [
    {
      title: "LAN & compétition",
      desc: "Expérience IRL, teamplay sous pression — base solide pour coacher proprement.",
      img: "/assets/lan-wide.png",
      tags: ["LAN", "Team", "Comms"],
    },
    {
      title: "Review de match (setup)",
      desc: "Workflow de review en équipe : lecture, callouts, erreurs récurrentes, plan d'action.",
      img: "/assets/lan-close.png",
      tags: ["VOD Review", "Coaching", "Structure"],
    },
    {
      title: "Branding CS2 (cover)",
      desc: "Palette orange/gris inspirée CS2, utilisable en bannières et pages de profil.",
      img: "/assets/cover-cs2.png",
      tags: ["Design", "CS2", "Brand"],
    },
  ] as Showcase[],
};
