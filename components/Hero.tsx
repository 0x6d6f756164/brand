import { ArrowDown } from "lucide-react";
import { SITE, AVAILABILITY, SOCIALS } from "@/lib/constants";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const STATUS_COLOR = AVAILABILITY.isAvailable
  ? AVAILABILITY.availableColor
  : AVAILABILITY.unavailableColor;

const SOCIAL_LINKS = [
  { label: "GitHub", href: SOCIALS.github, icon: FaGithub },
  { label: "WhatsApp", href: SOCIALS.whatsapp, icon: FaWhatsapp },
  { label: "Instagram", href: SOCIALS.instagram, icon: FaInstagram },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-20"
    >
      <div className="dot-grid" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-border px-4 py-1.5 font-mono text-sm text-muted">
          <span className="relative flex h-2 w-2">
            {AVAILABILITY.isAvailable && (
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                style={{ backgroundColor: STATUS_COLOR }}
              />
            )}
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ backgroundColor: STATUS_COLOR }}
            />
          </span>
          {AVAILABILITY.isAvailable
            ? AVAILABILITY.label
            : AVAILABILITY.unavailableLabel}
        </div>

        <h1 className="text-5xl font-semibold tracking-tight text-text sm:text-7xl lg:text-8xl">
          {SITE.name}
        </h1>
        <p className="mt-4 font-mono text-xl text-muted sm:text-2xl">
          {SITE.role}
        </p>

        <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
          {SITE.bio}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#contact"
            className="rounded-md bg-accent px-6 py-3 font-mono text-base text-bg transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted transition-colors hover:text-text"
              >
                <social.icon className="h-6 w-6" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#tech-stack"
        aria-label="Scroll to work section"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-text"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" strokeWidth={1.5} />
      </a>
    </section>
  );
}
