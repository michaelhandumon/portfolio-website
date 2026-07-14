import { ReactNode } from "react";

export function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-20 px-6 py-14 md:py-16">
      <p className="font-mono text-base text-black/40 dark:text-white/40">{eyebrow}</p>
      <h2 className="mt-2 mb-8 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {children}
    </section>
  );
}
