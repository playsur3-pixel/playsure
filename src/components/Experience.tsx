import type { ExperienceContent } from "../data/profile";

export function Experience({ content }: { content: ExperienceContent }) {
  return (
    <section id="experience" className="mx-auto mt-4 max-w-4xl scroll-mt-24">
      <details className="group overflow-hidden rounded-xl2 border border-border/50 bg-card/70 shadow-soft backdrop-blur transition hover:border-cs2/60 open:bg-card/80">
        <summary className="list-none cursor-pointer p-4 transition hover:bg-card/90 md:p-5 [&::-webkit-details-marker]:hidden">
          <span className="flex items-center justify-between gap-4 text-left">
            <span className="block">
              <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-cs2">
                {content.kicker}
              </span>
              <span className="mt-1 block text-xl font-semibold tracking-tight md:text-2xl">
                {content.title}
              </span>
              <span className="mt-1 block text-sm leading-6 text-muted">
                {content.subtitle}
              </span>
            </span>

            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-cs2/45 bg-bg/50 px-4 py-2 text-sm font-semibold text-text transition group-open:border-cs2 group-open:bg-cs2/10">
              <span className="group-open:hidden">{content.openLabel}</span>
              <span className="hidden group-open:inline">{content.closeLabel}</span>
              <span
                aria-hidden="true"
                className="text-lg leading-none text-cs2 transition-transform group-open:rotate-180"
              >
                ↓
              </span>
            </span>
          </span>
        </summary>

        <div className="border-t border-border/40 p-5 md:p-7">
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">{content.gamesTitle}</h3>

              <ol className="mt-4 grid gap-2 sm:grid-cols-2">
                {content.games.map((game) => (
                  <li
                    key={`${game.year}-${game.name}`}
                    className="flex min-h-[42px] items-center gap-3 rounded-xl border border-border/35 bg-bg/30 px-3 py-2"
                  >
                    <span className="w-12 shrink-0 text-xs font-semibold text-cs2">{game.year}</span>
                    <span className="text-sm leading-5 text-text/90">{game.name}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold">{content.lansTitle}</h3>
              <div className="mt-4 space-y-2">
                {content.lans.map((lan) => (
                  <div
                    key={`${lan.result}-${lan.event}`}
                    className="flex min-h-[42px] items-center gap-3 rounded-xl border border-border/35 bg-bg/30 px-3 py-2"
                  >
                    <span className="shrink-0 font-semibold text-cs2">{lan.result}</span>
                    <span className="text-sm leading-5 text-text/90">{lan.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            href={content.videoHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex flex-col gap-1 border-t border-border/40 pt-4 text-sm transition hover:text-cs2 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="min-w-0">
              <span className="mr-3 text-xs font-semibold uppercase tracking-[0.24em] text-cs2">
                {content.videoKicker}
              </span>
              <span className="font-semibold text-text">{content.videoTitle}</span>
            </span>
            <span className="shrink-0 font-semibold text-cs2">{content.videoCta} ↗</span>
          </a>
        </div>
      </details>
    </section>
  );
}
