import { Card } from "./Card";
import type { Link } from "../data/profile";
import { SocialLinks } from "./SocialLinks";

export function Hero({
  avatar,
  displayName,
  handle,
  tagline,
  about,
  links,
}: {
  avatar: string;
  displayName: string;
  handle: string;
  tagline: string;
  about: string;
  links: Link[];
}) {
  return (
    <section id="overview" className="scroll-mt-24">
      <Card className="mx-auto max-w-4xl p-6 text-center md:p-9">
        <div className="mx-auto h-36 w-36 overflow-hidden rounded-[2rem] border border-cs2/45 bg-bg/40 shadow-soft md:h-44 md:w-44">
          <img
            src={avatar}
            alt={displayName}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cs2">
            @{handle}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
            {displayName}
          </h1>
          <p className="mt-3 text-base font-medium text-text/90 md:text-lg">
            {tagline}
          </p>
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-muted md:text-base">
          {about}
        </p>

        <div className="mt-6 flex justify-center">
          <SocialLinks links={links} />
        </div>
      </Card>
    </section>
  );
}
