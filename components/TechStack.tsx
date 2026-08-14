import { TECH_STACK } from "@/lib/techstack";
import ScrollReveal from "@/components/ScrollReveal";

export default function TechStack() {
  // Duplicate the list so the marquee can loop seamlessly at -50% translate
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <section id="tech-stack" className="px-6 py-20">
      <ScrollReveal className="mx-auto max-w-5xl">
        <p className="font-mono text-base text-muted">Tech stack</p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          Tools I work with
        </h2>

        <div className="marquee-fade mt-12 overflow-hidden">
          <div className="marquee-track gap-12">
            {items.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex w-24 shrink-0 flex-col items-center gap-3"
                title={tech.name}
              >
                <tech.icon
                  className="h-9 w-9 text-muted transition-colors hover:text-text"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs text-muted">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
