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
  videos
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
  videos: string[];
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
          </div>
        </Card>

        <fieldset className="relative rounded-xl2 border border-border/50 p-0 shadow-soft flex flex-col">
          <legend className="ml-4 px-2 text-xs text-muted">Médias</legend>
                  
        <motion.div className="relative overflow-hidden rounded-xl2 border border-border/50 shadow-soft flex-1 min-h-[280px] flex items-center justify-center p-4">
         {videos?.length ? (
  (() => {
    const src = videos[0];

    const isYouTube =
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(src);

    const getYouTubeEmbedUrl = (url: string) => {
      // Supporte youtube.com/watch?v=... et youtu.be/...
      try {
        const u = new URL(url);
        if (u.hostname.includes("youtu.be")) {
          const id = u.pathname.replace("/", "");
          return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;
        }
        const id = u.searchParams.get("v");
        if (id) {
          return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;
        }
      } catch {
        // si URL invalide, on retombe sur le <video>
      }
      return null;
    };

    if (isYouTube) {
      const embed = getYouTubeEmbedUrl(src);
      if (embed) {
        return (
        <div className="h-full min-h-[280px] w-full flex items-center justify-center">
          <div className="w-full max-w-3xl aspect-video">
            <iframe
              className="h-full w-full rounded-xl2"
              src={embed}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        );
      }
    }

    // fallback: si ce n'est pas YouTube, on garde la vidéo HTML5
    return (
              <video
                className="h-full min-h-[280px] w-full object-cover"
                src={src}
                controls
                playsInline
                preload="metadata"
                onLoadedMetadata={(e) => {
                  e.currentTarget.volume = 0.15;
                }}
                onCanPlay={(e) => {
                  e.currentTarget.volume = 0.15;
                }}
              />
            );
          })()
        ) : (
          <>
            <img
              src={cover}
              alt="Cover"
              className="h-full min-h-[280px] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/55 to-transparent" />
          </>
        )}
        </motion.div>

        </fieldset>


      </div>
    </section>
  );
}
