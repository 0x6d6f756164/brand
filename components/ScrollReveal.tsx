"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function ScrollReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Default to true: content is visible unless JS actively decides to
  // animate it in. This guarantees content is never hidden if the
  // observer, refs, or timing fail on a given device/browser.
  const [isVisible, setIsVisible] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const node = ref.current;
    if (!node) return;

    // Defer until after paint so layout (including async font swaps) has
    // settled before we measure or attach the observer.
    const raf = requestAnimationFrame(() => {
      const rect = node.getBoundingClientRect();
      const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (alreadyInView) {
        setHasMounted(true);
        return;
      }

      // Only now do we opt INTO the hidden starting state, immediately
      // before observing — so there's no window where content is
      // invisible without an active observer watching it.
      setIsVisible(false);
      setHasMounted(true);

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0, rootMargin: "0px 0px -10% 0px" }
      );
      observer.observe(node);

      return () => observer.disconnect();
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        hasMounted ? "duration-700 ease-out" : ""
      } ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
