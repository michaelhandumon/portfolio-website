"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-7xl flex-col justify-center gap-6 px-6 pb-16 pt-16 md:min-h-[65vh] md:pt-0">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="font-mono text-base text-black/50 dark:text-white/50"
      >
        Hi, I&apos;m
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-5xl font-bold tracking-tight sm:text-7xl"
      >
        {profile.name}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl font-medium text-black/60 dark:text-white/60 sm:text-3xl"
      >
        {profile.role}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-2xl text-lg text-black/70 dark:text-white/70 sm:text-xl"
      >
        {profile.tagline}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center gap-4 pt-2"
      >
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-base font-medium text-white transition hover:opacity-85 dark:bg-white dark:text-black"
        >
          <Mail size={18} />
          Get in touch
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-base font-medium transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
        >
          See my work
          <ArrowDown size={18} />
        </a>
      </motion.div>
    </section>
  );
}
