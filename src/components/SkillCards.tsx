import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Badge } from "./Badge";
import type { Skill } from "../data/profile";

export function SkillCards({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {skills.map((s) => (
        <Card key={s.title} className="p-0">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{s.title}</span>
              <span className="h-2 w-2 rounded-full bg-cs2" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted">{s.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
