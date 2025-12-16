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
        videos={profile.heroVideos}
        avatar={profile.avatar}
        displayName={profile.displayName}
        handle={profile.handle}
        tagline={profile.tagline}
        status={""} // osef
        location={""} // osef
        about={profile.about}
        ctas={profile.ctas}
        links={profile.links}
      />

        <section className="mt-8">
          <SectionTitle
            title="Informations"
          />
          <StatGrid stats={profile.stats} />
        </section>

        <section id="services" className="mt-10 scroll-mt-24">
          <SectionTitle
            title="Services"
          />
          <SkillCards skills={profile.skills} />
        </section>

        <section id="services_2nd" className="mt-10 scroll-mt-24">
          <SectionTitle
            title="Autres domaines"
          />
          <SkillCards skills={profile.skills_2nd} />
        </section>

        <section id="portfolio" className="mt-10 scroll-mt-24">
          <SectionTitle
            title="Portfolio"
          />
          <ShowcaseGrid items={profile.showcases} />
        </section>

        <footer className="mt-12 border-t border-border/40 py-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} playSURE — CS2 Coaching
        </footer>
      </main>
    </div>
  );
}
