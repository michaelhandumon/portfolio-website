"use client";

import { useState } from "react";
import { Link2, FolderGit2 } from "lucide-react";
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
            className="flex flex-col rounded-2xl border border-black/10 bg-white p-6 transition duration-200 ease-out hover:-translate-y-2 hover:scale-[1.05] hover:border-black/30 hover:shadow-2xl hover:shadow-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/40 dark:hover:shadow-black/60"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div className="flex shrink-0 gap-2">
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} repository`}
                    className="flex items-center gap-1.5 rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-black/70 transition hover:border-black/30 hover:text-black dark:border-white/10 dark:text-white/70 dark:hover:border-white/30 dark:hover:text-white"
                  >
                    <FolderGit2 size={14} />
                    Repo
                  </a>
                ) : (
                  project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live link`}
                      className="flex items-center gap-1.5 rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-black/70 transition hover:border-black/30 hover:text-black dark:border-white/10 dark:text-white/70 dark:hover:border-white/30 dark:hover:text-white"
                    >
                      <Link2 size={14} />
                      Live
                    </a>
                  )
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
