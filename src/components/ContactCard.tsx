import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import type { Link } from "../data/profile";

export function ContactCard({ links }: { links: Link[] }) {
  return (
    <Card className="p-0">
      <CardHeader>
        <CardTitle>Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted">
          Mets ici tes liens réels (Steam/Faceit/Discord). L’idée : 1 clic → prise de contact.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border/50 bg-bg/40 px-3 py-2 text-sm text-muted hover:border-cs2/60 hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
