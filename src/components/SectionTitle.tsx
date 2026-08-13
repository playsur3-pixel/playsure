import * as React from "react";
import { cn } from "../lib/cn";

export function SectionTitle({
  title,
  update,
  subtitle,
  className,
}: {
  title: string;
  update: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-4", className)}>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {update ? <p className="mt-1 text-sm text-muted">{update}</p> : null}
      {subtitle ? <p className="mt-1 text-sm text-muted"><em><s>{subtitle}</s></em></p> : null}
    </div>
  );
}
