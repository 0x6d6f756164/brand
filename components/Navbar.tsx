"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>(NAV_LINKS[0]?.id ?? "");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter((el): el is HTMLElement => el !== null);

    function handleScroll() {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0];
      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          current = section;
        }
      }
      if (current) setActiveId(current.id);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-mono text-sm tracking-tight text-text">
            {SITE.name.toLowerCase().replace(/\s+/g, ".")}
          </a>

          <ul className="hidden items-center gap-6 font-mono text-sm sm:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition-colors ${
                    activeId === link.id ? "text-text" : "text-muted hover:text-text"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center">
              <ThemeToggle />
            </li>
          </ul>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="text-muted transition-colors hover:text-text sm:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </nav>
      </header>
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-bg sm:hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <a
              href="#home"
              onClick={handleLinkClick}
              className="font-mono text-sm tracking-tight text-text"
            >
              {SITE.name.toLowerCase().replace(/\s+/g, ".")}
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-muted transition-colors hover:text-text"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <ul className="flex flex-1 flex-col items-center justify-center gap-8 font-mono text-lg">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`transition-colors ${
                    activeId === link.id ? "text-text" : "text-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <ThemeToggle />
            </li>
          </ul>
        </div>
        
      )}
    </>
  );
}