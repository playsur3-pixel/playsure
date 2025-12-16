import { cn } from "../lib/cn";

const items = [
  { label: "Overview", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function TopNav() {
  return (
    <div className="sticky top-0 z-40 border-b border-border/40 bg-bg/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cs2 shadow-[0_0_18px_rgba(227,134,23,.8)]" />
          <span className="font-semibold tracking-tight">playSURE</span>
        </a>
        <div className="hidden gap-1 sm:flex">
          {items.map((it) => (
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
        <a
          href="#contact"
          className="rounded-full bg-cs2 px-4 py-2 text-sm font-semibold text-bg hover:bg-cs2b"
        >
          Me contacter
        </a>
      </div>
    </div>
  );
}
