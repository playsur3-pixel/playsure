import { Badge } from "./Badge";
import { Card } from "./Card";
import type { Product } from "../data/profile";

export function ProductSplit({ products }: { products: Product[] }) {
  return (
    <section id="offers" className="mt-10 scroll-mt-24">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Coaching et StratMotion</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-muted">
          Deux activités séparées. Même terrain : mieux comprendre CS2, mieux s'entraîner, mieux transmettre, mieux exécuter.
        </p>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-2">
        <div className="pointer-events-none absolute left-1/2 top-4 hidden h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cs2/50 to-transparent lg:block" />

        {products.map((product) => (
          <Card
            key={product.title}
            className="relative overflow-hidden p-6 md:p-7"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cs2/60 to-transparent" />

            <div className="flex min-h-full flex-col">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cs2">
                  {product.kicker}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  {product.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {product.description}
                </p>
              </div>

              <a
                href={product.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit rounded-full bg-cs2 px-5 py-2.5 text-sm font-semibold text-bg hover:bg-cs2b"
              >
                {product.ctaLabel}
              </a>

              <div className="mt-6 grid gap-3">
                {product.blocks.map((block) => (
                  <div
                    key={block.title}
                    className="rounded-xl border border-border/60 bg-bg/45 p-4"
                  >
                    <h4 className="text-sm font-semibold">{block.title}</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cs2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} className="border-cs2/30">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
