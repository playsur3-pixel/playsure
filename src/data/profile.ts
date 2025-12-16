export type Link = { label: string; href: string };
export type Stat = { label: string; value: string; hint?: string };
export type Skill = { title: string; desc: string; tags: string[], featured?: boolean };
export type Skill_2nd = { title: string; desc: string; tags: string[], featured?: boolean };
export type Showcase = { title: string; desc: string; img: string; tags: string[]; href?: string };

export const profile = {
  handle: "playSURE",
  displayName: "Romain 'playSURE' LE GALL",
  tagline: "Coach CS2 • Teamplay • Strats • VOD Review",

  cover: "/assets/cover-cs2.png",
  avatar: "/assets/Image_Profil.png",

  ctas: [
    { label: "CoachingMaster", href: "https://coachingmaster.fr/coach_profile.php?coach_id=122" },
  ] as Link[],

  
  // Réseaux 
  socials: [
    { label: "TikTok", href: "https://www.tiktok.com/@playsur3" },
    { label: "Instagram", href: "https://www.instagram.com/play.sur3/" },
    { label: "YouTube Shorts", href: "https://www.youtube.com/@playSUR3/posts" },
    { label: "Facebook", href: "https://www.facebook.com/people/Playsure/61585334156709/" },
  ] as Link[],

  links: [
    { label: "YouTube", href: "https://www.youtube.com/@playSUR3" },
    { label: "Discord", href: "https://discord.gg/DjxqXj67HU" },
  ] as Link[],

  about:
    "Coach CS2 orienté progression mesurable : VOD review, structuration des rôles, routines d’entraînement et plan d’action clair. Objectif : te faire gagner du temps, réduire les erreurs qui coûtent des rounds, et jouer plus propre en solo comme en équipe.",

  stats: [
    { label: "Format", value: "Session Discord (1h)", hint: "VOD review + plan d’action" },
    { label: "Focus", value: "Teamplay & décision", hint: "execs • mid-round • retakes" },
    { label: "Méthode", value: "A.R.C.", hint: "analyse → corrections → routine" },
    { label: "Bonus", value: "Suivi & ressources", hint: "docs • routines • objectifs" },
  ] as Stat[],

  skills: [
    {
      title: "Coaching CS2",
      desc: "Analyse VOD, rôles, comms, exécutions simples, routines d'entraînement.",
      tags: ["Solo", "Team", "ARC", "Review", "Roadmap"],
      featured: true,
    },
 ] as Skill[],

   skills_2nd: [
    {
      title: "Moviemaking",
      desc: "Fragmovies, one-action, motion design, titrage 3D, sound design.",
      tags: ["S2FM", "HLAE", "After Effects", "Premiere", "1080p@60fps"],
    },
    {
      title: "Création de maps",
      desc: "Création / prototypage de maps, routes de cam, overviews & visuels stratégiques.",
      tags: ["Gold SRC", "Source 2", "Hammer"],
    },
    {
      title: "Data & Dashboards",
      desc: "Stats CS2, dashboards, insights sur perfs (maps, rôles, trends).",
      tags: ["Power BI", "CSV"],
    },
  ] as Skill_2nd[],


  showcases: [
    {
      title: "LAN & compétition",
      desc: "Expérience LAN entre potes après notre âge d'or, mais peut importe ! Faites en !",
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

    // video skillCard
    heroVideos: [
      "/assets/hero-video-1.mp4",
      "/assets/hero-video-2.mp4",
],


};
