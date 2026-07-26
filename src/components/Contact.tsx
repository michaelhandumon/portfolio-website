import { ArrowRight, FileText, GitFork, Mail, MapPin, Phone } from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/data/profile";

const cards = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    icon: Phone,
    external: false,
  },
  {
    label: "GitHub",
    value: profile.github.replace(/^https?:\/\//, ""),
    href: profile.github,
    icon: GitFork,
    external: true,
  },
  {
    label: "Resume",
    value: "Handumon_CV.pdf",
    href: profile.resumeUrl,
    icon: FileText,
    external: false,
  },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="05 · Let's talk" title="Contact">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something.
          </h3>
          <p className="max-w-md text-black/70 dark:text-white/70">
            Currently open to full-stack, mobile, and blockchain. If you&apos;re looking for a quick response, 
            feel free to reach out to me via email or phone. I&apos;m always happy to chat about new opportunities, roles, or collaborations!
          </p>
        </div>
        <div className="space-y-3">
          {cards.map(({ label, value, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group flex items-center justify-between rounded-lg border border-black/10 px-5 py-4 transition hover:border-black/30 dark:border-white/10 dark:hover:border-white/30"
            >
              <div>
                <p className="flex items-center gap-1.5 font-mono text-xs tracking-wide text-orange-500 uppercase dark:text-orange-400">
                  <Icon size={12} /> {label}
                </p>
                <p className="mt-1 text-sm">{value}</p>
              </div>
              <ArrowRight
                size={16}
                className="text-black/30 transition group-hover:translate-x-0.5 group-hover:text-black/60 dark:text-white/30 dark:group-hover:text-white/60"
              />
            </a>
          ))}
          <div className="flex items-center justify-between rounded-lg border border-black/10 px-5 py-4 dark:border-white/10">
            <div>
              <p className="flex items-center gap-1.5 font-mono text-xs tracking-wide text-orange-500 uppercase dark:text-orange-400">
                <MapPin size={12} /> Location
              </p>
              <p className="mt-1 text-sm">{profile.location}</p>
              <p className="mt-0.5 font-mono text-xs text-black/40 dark:text-white/40">
                GMT+8 — remote across time zones
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
