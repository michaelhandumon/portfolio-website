"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = ["top", ...links.map((link) => link.href.slice(1))];

export function Header() {
  const [active, setActive] = useState<string>("#top");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-[#0a0a0f]/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.replaceState(null, "", "#top");
          }}
          className={`font-mono text-base font-semibold tracking-tight transition ${
            active === "#top" ? "text-orange-500 dark:text-orange-400" : ""
          }`}
        >
          Introduction
        </a>
        <nav className="hidden gap-6 text-base text-black/70 dark:text-white/70 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition hover:text-current ${
                active === link.href ? "font-semibold text-orange-500 dark:text-orange-400" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download="Handumon_CV.pdf"
            className="hidden items-center gap-1.5 rounded-full border border-black/10 px-4 py-1.5 text-base transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10 sm:inline-flex"
          >
            Resume
            <Download size={16} />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
