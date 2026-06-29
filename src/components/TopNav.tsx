import { cn } from "../lib/cn";
import type { Locale, NavItem } from "../data/profile";

export function TopNav({
  nav,
  locale,
  onLanguageChange,
}: {
  nav: NavItem[];
  locale: Locale;
  onLanguageChange: (locale: Locale) => void;
}) {
  return (
    <div className="sticky top-0 z-40 border-b border-border/40 bg-bg/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cs2 shadow-[0_0_18px_rgba(255,161,0,.75)]" />
          <span className="font-semibold tracking-tight">playSURE</span>
        </a>

        <div className="flex items-center gap-3">
          <div className="hidden gap-1 sm:flex">
            {nav.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm text-muted hover:text-text",
                  "hover:bg-card/40"
                )}
              >
                {it.label}
              </a>
            ))}
          </div>

          <div className="flex rounded-full border border-border/60 bg-card/40 p-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => onLanguageChange("fr")}
              className={cn(
                "rounded-full px-2.5 py-1 transition",
                locale === "fr" ? "bg-cs2 text-bg" : "text-muted hover:text-text"
              )}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange("eng")}
              className={cn(
                "rounded-full px-2.5 py-1 transition",
                locale === "eng" ? "bg-cs2 text-bg" : "text-muted hover:text-text"
              )}
            >
              ENG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
