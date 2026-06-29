import { TopNav } from "./components/TopNav";
import { Hero } from "./components/Hero";
import { ProductSplit } from "./components/ProductSplit";
import { SectionTitle } from "./components/SectionTitle";
import { ShowcaseGrid } from "./components/ShowcaseGrid";
import { profile } from "./data/profile";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-noise">
      <TopNav />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Hero
          avatar={profile.avatar}
          displayName={profile.displayName}
          handle={profile.handle}
          tagline={profile.tagline}
          about={profile.about}
          links={profile.links}
        />

        <ProductSplit products={profile.products} />

        <section id="portfolio" className="mt-12 scroll-mt-24">
          <SectionTitle
            title="Portfolio"
            subtitle="Quelques traces de mon parcours Counter-Strike, hors prestations actuelles."
          />
          <a
            href="https://vakarm.net/coverage/galerie/Nantarena-16-2-Samedi/593"
            target="_blank"
            rel="noreferrer"
            className="mb-5 inline-flex rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm font-semibold hover:border-cs2/60"
          >
            Galerie officielle VaKarM.net
          </a>
          <ShowcaseGrid items={profile.showcases} />
        </section>

        <footer className="mt-12 border-t border-border/40 py-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} playSURE — Coaching CS2 & StratMotion
        </footer>
      </main>
    </div>
  );
}
