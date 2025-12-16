import { motion } from "framer-motion";
import { Card } from "./Card";
import type { Link } from "../data/profile";
import { SocialLinks } from "./SocialLinks";

export function Hero({
  cover,
  avatar,
  displayName,
  handle,
  tagline,
  status,
  location,
  about,
  ctas,
  links,
}: {
  cover: string;
  avatar: string;
  displayName: string;
  handle: string;
  tagline: string;
  status: string;
  location: string;
  about: string;
  ctas: Link[];
  links: Link[];
}) {
  return (
    <section id="overview" className="scroll-mt-24">
      <div className="grid gap-4 lg:grid-cols-[360px_1fr]">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="relative">
              <img
                src={avatar}
                alt={displayName}
                className="h-20 w-20 rounded-2xl border border-border/50 object-cover"
              />
              <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-card bg-cs2" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-lg font-semibold">{displayName}</div>
              <div className="truncate text-sm text-muted">@{handle}</div>
              <div className="mt-2 text-sm">{tagline}</div>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-border/50 bg-bg/40 p-3">
            <div className="text-sm font-semibold">{status}</div>
            <div className="mt-1 text-xs text-muted">{location}</div>
          </div>

          <p className="mt-4 text-sm text-muted">{about}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {ctas.map((c) => (
              <a
                key={c.href}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cs2 px-4 py-2 text-sm font-semibold text-bg hover:bg-cs2b"
              >
                {c.label}
              </a>
            ))}
          </div>

          <div className="mt-5">
            <SocialLinks links={links} />
          </div>

          <div className="mt-5 text-xs text-muted">
            Tip : remplace <span className="text-text">/public/assets/avatar.png</span> par ta photo.
          </div>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-xl2 border border-border/50 shadow-soft"
        >
          <img src={cover} alt="Cover" className="h-full min-h-[280px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/50 to-transparent" />
          <div className="absolute inset-0 p-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-bg/40 px-3 py-1 text-xs text-muted">
                <span className="h-2 w-2 rounded-full bg-cs2" />
                Profil — style Steam / CS2
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight">
                Un profil propre, orienté perf, avec une vibe CS2.
              </h1>
              <p className="mt-3 text-sm text-muted">
                Page unique (React + Tailwind) : stats rapides, services, portfolio, liens — parfait pour une bio TikTok/YouTube
                ou une page d’accueil.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href="#services"
                  className="rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm font-semibold hover:border-cs2/60"
                >
                  Voir mes services
                </a>
                <a
                  href="#portfolio"
                  className="rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm font-semibold hover:border-cs2/60"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
