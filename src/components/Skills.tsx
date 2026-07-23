import { Section } from "./Section";
import { skillGroups } from "@/data/profile";

export function Skills() {
  return (
    <Section id="skills" eyebrow="03 · What I work with" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-black/10 bg-white p-6 transition duration-200 ease-out hover:-translate-y-2 hover:scale-[1.05] hover:border-black/30 hover:shadow-2xl hover:shadow-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/40 dark:hover:shadow-black/60"
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
