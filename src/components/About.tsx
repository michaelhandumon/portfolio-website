import { Section } from "./Section";
import { about, education } from "@/data/profile";

export function About() {
  return (
    <Section id="about" eyebrow="01 · Who I am" title="About">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-4 text-lg text-black/75 dark:text-white/75 md:col-span-2">
          {about.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div>
          <h3 className="mb-3 font-mono text-sm uppercase tracking-wide text-black/40 dark:text-white/40">
            Education
          </h3>
          <ul className="max-h-[36rem] space-y-4 overflow-y-auto pr-2">
            {education.map((entry, index) => (
              <li key={entry.school}>
                {entry.level && entry.level !== education[index - 1]?.level && (
                  <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wide text-black/40 dark:text-white/40">
                    {entry.level}
                  </p>
                )}
                {entry.degree && <p className="text-lg font-medium">{entry.degree}</p>}
                <p className={entry.degree ? "text-base text-black/60 dark:text-white/60" : "text-lg font-medium"}>
                  {entry.school}
                </p>
                <p className="text-base text-black/40 dark:text-white/40">
                  {entry.location} &middot; {entry.period}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
