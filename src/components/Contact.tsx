"use client";

import { FormEvent, useState } from "react";
import { Link2, Mail, Phone } from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/data/profile";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" eyebrow="05 · Let's talk" title="Contact">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-black/70 dark:text-white/70">
            Open to full-stack, mobile, and blockchain roles or freelance projects. The fastest way to
            reach me is email — I&apos;ll usually reply within a day.
          </p>
          <div className="space-y-3 text-sm">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:underline">
              <Mail size={16} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:underline">
              <Phone size={16} /> {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Link2 size={16} /> linkedin.com/in/michaelhandumon
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-black/60 dark:text-white/60">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-black/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:focus:border-white/30"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-black/60 dark:text-white/60">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-black/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:focus:border-white/30"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-black/60 dark:text-white/60">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border border-black/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:focus:border-white/30"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="cursor-pointer rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-85 disabled:opacity-50 dark:bg-white dark:text-black"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && (
            <p className="text-sm text-green-600 dark:text-green-400">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 dark:text-red-400">
              Something went wrong — please email me directly instead.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
