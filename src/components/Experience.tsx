import { Section } from "./Section";
import { experience } from "@/data/profile";

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 · Where I've worked" title="Experience">
      <ol className="space-y-8 border-l border-black/10 pl-6 dark:border-white/10">
        {experience.map((entry) => (
          <li key={`${entry.company}-${entry.period}`} className="relative">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-black dark:bg-white" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-semibold">
                {entry.role} <span className="text-black/50 dark:text-white/50">— {entry.company}</span>
              </h3>
              <span className="font-mono text-base text-black/40 dark:text-white/40">{entry.period}</span>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-lg text-black/75 dark:text-white/75">
              {entry.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {entry.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-black/60 dark:bg-white/10 dark:text-white/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
