import { TopNav } from "./components/TopNav";
import { Hero } from "./components/Hero";
import { SectionTitle } from "./components/SectionTitle";
import { StatGrid } from "./components/StatGrid";
import { SkillCards } from "./components/SkillCards";
import { ShowcaseGrid } from "./components/ShowcaseGrid";
import { ContactCard } from "./components/ContactCard";
import { profile } from "./data/profile";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-noise">
      <TopNav />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Hero
          cover={profile.cover}
          avatar={profile.avatar}
          displayName={profile.displayName}
          handle={profile.handle}
          tagline={profile.tagline}
          status={profile.status}
          location={profile.location}
          about={profile.about}
          ctas={profile.ctas}
          links={profile.links}
        />

        <section className="mt-8">
          <SectionTitle
            title="Infos rapides (style Steam)"
            subtitle="Des cartes courtes et lisibles — parfait pour donner le contexte en 3 secondes."
          />
          <StatGrid stats={profile.stats} />
        </section>

        <section id="services" className="mt-10 scroll-mt-24">
          <SectionTitle
            title="Services"
            subtitle="Coaching, mapmaking, moviemaking — tout ce que tu veux mettre en avant."
          />
          <SkillCards skills={profile.skills} />
        </section>

        <section id="portfolio" className="mt-10 scroll-mt-24">
          <SectionTitle
            title="Portfolio"
            subtitle="Quelques blocs 'showcase' (tu peux remplacer par tes maps, vidéos, liens, etc.)."
          />
          <ShowcaseGrid items={profile.showcases} />
        </section>

        <section id="contact" className="mt-10 scroll-mt-24">
          <SectionTitle
            title="Me contacter"
            subtitle="Une CTA claire + liens. Objectif : convertir rapidement."
          />
          <ContactCard links={profile.links} />
        </section>

        <footer className="mt-12 border-t border-border/40 py-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} playSURE — React + Tailwind • Palette inspirée CS2
        </footer>
      </main>
    </div>
  );
}
