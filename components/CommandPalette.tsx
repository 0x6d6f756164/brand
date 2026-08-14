"use client";

import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import {
  Search,
  Compass,
  Mail,
  Copy,
  Check,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { SITE, SOCIALS } from "@/lib/constants";

type CommandItem = {
  id: string;
  label: string;
  hint?: string;
  icon: typeof FaGithub;
  action: () => void;
};

function toLabel(id: string) {
  return id
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [sectionIds, setSectionIds] = useState<string[]>([]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const goTo = useCallback(
    (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      close();
    },
    [close]
  );

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(SITE.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
    window.setTimeout(close, 600);
  }, [close]);

  const openLink = useCallback(
    (url: string) => {
      window.open(url, "_blank", "noopener,noreferrer");
      close();
    },
    [close]
  );

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section[id]")
    );
    setSectionIds(sections.map((section) => section.id));
  }, []);

  const items: CommandItem[] = useMemo(() => {
    const navItems: CommandItem[] = sectionIds.map((id) => ({
      id: `goto-${id}`,
      label: `Go to ${toLabel(id)}`,
      icon: Compass,
      action: () => goTo(id),
    }));

    return [
      ...navItems,
      {
        id: "copy-email",
        label: copied ? "Copied!" : "Copy email address",
        hint: SITE.email,
        icon: copied ? Check : Copy,
        action: copyEmail,
      },
      {
        id: "github",
        label: "Open GitHub",
        icon: FaGithub,
        action: () => openLink(SOCIALS.github),
      },
      {
        id: "whatsapp",
        label: "Open WhatsApp",
        icon: FaWhatsapp,
        action: () => openLink(SOCIALS.whatsapp),
      },
      {
        id: "instagram",
        label: "Open Instagram",
        icon: FaInstagram,
        action: () => openLink(SOCIALS.instagram),
      },
    ];
  }, [sectionIds, copied, goTo, copyEmail, openLink]);

  const filtered = useMemo(
    () =>
      items.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      ),
    [items, query]
  );

  const openRef = useRef(open);
  const filteredRef = useRef(filtered);
  const activeIndexRef = useRef(activeIndex);

  useEffect(() => {
    openRef.current = open;
  }, [open]);
  useEffect(() => {
    filteredRef.current = filtered;
  }, [filtered]);
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isMod = event.metaKey || event.ctrlKey;

      if (isMod && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
        return;
      }

      if (!openRef.current) return;

      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, filteredRef.current.length - 1));
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      } else if (event.key === "Enter") {
        event.preventDefault();
        filteredRef.current[activeIndexRef.current]?.action();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full border border-border bg-panel/80 px-4 py-2.5 font-mono text-xs text-muted backdrop-blur-md transition-colors hover:text-text sm:flex"
      >
        <Search className="h-3.5 w-3.5" strokeWidth={1.5} />
        <span>Search</span>
        <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px]">⌘K</kbd>
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-start justify-center bg-bg/80 px-4 pt-24"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-panel shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search className="h-4 w-4 shrink-0 text-muted" strokeWidth={1.5} />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command..."
            className="w-full bg-transparent font-mono text-sm text-text outline-none placeholder:text-muted/60"
          />
          <kbd className="shrink-0 rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted">esc</kbd>
        </div>

        <ul className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center font-mono text-sm text-muted">No results</li>
          )}
          {filtered.map((item, index) => (
            <li key={item.id}>
              <button
                onClick={item.action}
                onMouseEnter={() => setActiveIndex(index)}
                className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left font-mono text-sm transition-colors ${
                  index === activeIndex ? "bg-border/60 text-text" : "text-muted"
                }`}
              >
                <span className="flex items-center gap-3">
                  <item.icon className="h-4 w-4" strokeWidth={1.5} />
                  {item.label}
                </span>
                {item.hint && <span className="text-xs text-muted/70">{item.hint}</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}