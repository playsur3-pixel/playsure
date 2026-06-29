import { useEffect, useMemo, useState } from "react";
import { TopNav } from "./components/TopNav";
import { Hero } from "./components/Hero";
import { ProductSplit } from "./components/ProductSplit";
import { SectionTitle } from "./components/SectionTitle";
import { ShowcaseGrid } from "./components/ShowcaseGrid";
import { availableLocales, defaultLocale, profiles, type Locale } from "./data/profile";

const STORAGE_KEY = "playsure-language";

function readLocaleFromPath(pathname: string): Locale | null {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return availableLocales.includes(firstSegment as Locale) ? (firstSegment as Locale) : null;
}

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return availableLocales.includes(stored as Locale) ? (stored as Locale) : null;
}

function setUrlLocale(locale: Locale, mode: "push" | "replace" = "push") {
  const hash = window.location.hash;
  const nextUrl = `/${locale}${hash}`;
  if (mode === "replace") {
    window.history.replaceState(null, "", nextUrl);
  } else {
    window.history.pushState(null, "", nextUrl);
  }
}

function LanguageChoice({ onSelect }: { onSelect: (locale: Locale) => void }) {
  return (
    <div className="min-h-screen bg-noise px-4 py-10">
      <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl items-center justify-center">
        <section className="w-full rounded-[2rem] border border-border/60 bg-card/80 p-8 text-center shadow-soft md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cs2">playSURE</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Choisir la langue
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted md:text-base">
            Sélection conservée localement dans le navigateur. Le site utilise ensuite une URL dédiée : /fr ou /eng.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => onSelect("fr")}
              className="rounded-2xl border border-cs2/50 bg-bg/50 p-5 text-left hover:border-cs2 hover:bg-cs2/10"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-cs2">Français</span>
              <span className="mt-2 block text-lg font-semibold">Version française</span>
              <span className="mt-2 block text-sm leading-6 text-muted">Coaching CS2, StratMotion et portfolio.</span>
            </button>

            <button
              type="button"
              onClick={() => onSelect("eng")}
              className="rounded-2xl border border-cs2/50 bg-bg/50 p-5 text-left hover:border-cs2 hover:bg-cs2/10"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-cs2">English</span>
              <span className="mt-2 block text-lg font-semibold">English version</span>
              <span className="mt-2 block text-sm leading-6 text-muted">CS2 coaching, StratMotion and portfolio.</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  const initialLocale = useMemo(() => readLocaleFromPath(window.location.pathname), []);
  const [locale, setLocale] = useState<Locale | null>(initialLocale);

  useEffect(() => {
    const fromPath = readLocaleFromPath(window.location.pathname);
    if (fromPath) {
      window.localStorage.setItem(STORAGE_KEY, fromPath);
      setLocale(fromPath);
      return;
    }

    const stored = readStoredLocale();
    if (stored) {
      setUrlLocale(stored, "replace");
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setLocale(readLocaleFromPath(window.location.pathname) ?? readStoredLocale() ?? null);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function chooseLocale(nextLocale: Locale) {
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    setUrlLocale(nextLocale);
    setLocale(nextLocale);
  }

  if (!locale) {
    return <LanguageChoice onSelect={chooseLocale} />;
  }

  const profile = profiles[locale] ?? profiles[defaultLocale];

  return (
    <div id="top" className="min-h-screen bg-noise">
      <TopNav nav={profile.nav} locale={locale} onLanguageChange={chooseLocale} />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Hero
          avatar={profile.avatar}
          displayName={profile.displayName}
          handle={profile.handle}
          tagline={profile.tagline}
          about={profile.about}
          links={profile.links}
        />

        <ProductSplit
          products={profile.products}
          title={profile.offersTitle}
          subtitle={profile.offersSubtitle}
        />

        <section id="portfolio" className="mt-12 scroll-mt-24">
          <SectionTitle title={profile.portfolioTitle} subtitle={profile.portfolioSubtitle} />
          <a
            href="https://vakarm.net/coverage/galerie/Nantarena-16-2-Samedi/593"
            target="_blank"
            rel="noreferrer"
            className="mb-5 inline-flex rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm font-semibold hover:border-cs2/60"
          >
            {profile.galleryLabel}
          </a>
          <ShowcaseGrid items={profile.showcases} viewLabel={profile.showcaseViewLabel} />
        </section>

        <footer className="mt-12 border-t border-border/40 py-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} playSURE — {profile.footer}
        </footer>
      </main>
    </div>
  );
}
