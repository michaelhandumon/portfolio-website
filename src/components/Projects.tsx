"use client";

import { useState } from "react";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { Section } from "./Section";
import { projects } from "@/data/profile";

const filters = ["All", "Web", "Mobile", "Blockchain", "AI"] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible =
    active === "All" ? projects : projects.filter((project) => project.tags.includes(active));

  return (
    <Section id="projects" eyebrow="04 · Selected work" title="Projects">
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm transition ${
              active === filter
                ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                : "border-black/10 text-black/70 hover:bg-black/5 dark:border-white/10 dark:text-white/70 dark:hover:bg-white/10"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {visible.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-2xl border border-black/10 p-6 transition hover:border-black/20 dark:border-white/10 dark:hover:border-white/20"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div className="flex gap-2 text-black/40 dark:text-white/40">
                {project.repo && (
                  <a href={project.repo} aria-label={`${project.title} repository`}>
                    <FolderGit2 size={18} />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} aria-label={`${project.title} live link`}>
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <p className="flex-1 text-base text-black/70 dark:text-white/70">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-black/60 dark:bg-white/10 dark:text-white/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
