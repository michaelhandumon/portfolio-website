import { Section } from "./Section";
import { skillGroups } from "@/data/profile";

export function Skills() {
  return (
    <Section id="skills" eyebrow="03 · What I work with" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
          >
            <h3 className="mb-3 font-mono text-sm uppercase tracking-wide text-black/40 dark:text-white/40">
              {group.title}
            </h3>
            <ul className="space-y-1.5 text-base text-black/75 dark:text-white/75">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
