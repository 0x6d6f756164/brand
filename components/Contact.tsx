"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE, SOCIALS } from "@/lib/constants";

// Swap this with your real Formspree endpoint, e.g. "https://formspree.io/f/xxxxxxxx"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzerwjv";

const CONTACT_LINKS = [
  { label: SITE.email, href: `mailto:${SITE.email}`, icon: Mail },
  // { label: "GitHub", href: SOCIALS.github, icon: FaGithub },
  // { label: "LinkedIn", href: SOCIALS.linkedin, icon: FaLinkedin },
  { label: "WhatsApp", href: SOCIALS.whatsapp, icon: FaWhatsapp },
  { label: "Instagram", href: SOCIALS.instagram, icon: FaInstagram },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-28">
      <ScrollReveal className="mx-auto max-w-5xl">
        <p className="font-mono text-base text-muted">Get in touch</p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          Contact
        </h2>
        <p className="mt-4 max-w-lg text-lg text-muted">
          Have a project in mind or just want to say hi? Reach out directly
          or use the form below.
        </p>

        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {CONTACT_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-text"
              >
                <link.icon className="h-4 w-4" strokeWidth={1.5} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid max-w-xl gap-5"
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="font-mono text-xs text-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-md border border-border bg-panel px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="font-mono text-xs text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-md border border-border bg-panel px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
            />
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="message"
              className="font-mono text-xs text-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="resize-none rounded-md border border-border bg-panel px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-fit rounded-md bg-accent px-5 py-2.5 font-mono text-sm text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {status === "submitting" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="font-mono text-sm text-muted">
              Message sent — thanks, I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="font-mono text-sm text-muted">
              Something went wrong. Try again, or email me directly.
            </p>
          )}
        </form>
      </ScrollReveal>
    </section>
  );
}
