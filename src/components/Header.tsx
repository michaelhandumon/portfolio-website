import Link from "next/link";
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

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-[#0a0a0f]/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-mono text-base font-semibold tracking-tight">
          {profile.name}
        </Link>
        <nav className="hidden gap-6 text-base text-black/70 dark:text-white/70 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-current">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download
            className="hidden items-center gap-1.5 rounded-full border border-black/10 px-4 py-1.5 text-base transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10 sm:inline-flex"
          >
            <Download size={16} />
            Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
