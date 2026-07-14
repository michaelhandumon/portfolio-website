import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-sm text-black/40 dark:text-white/40 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
