import { Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { JOURNEY } from "@/lib/journey";

export default function Journey() {
  return (
    <section id="journey" className="px-6 py-28">
      <ScrollReveal className="mx-auto max-w-5xl">
        <p className="font-mono text-base text-muted">Background</p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          Journey
        </h2>

        {JOURNEY.length === 0 ? (
          <div className="mt-14 flex flex-col items-center justify-center rounded-lg border border-dashed border-border px-6 py-24 text-center">
            <Clock className="h-7 w-7 text-muted" strokeWidth={1.5} />
            <p className="mt-4 font-mono text-base text-muted">
              Journey timeline coming soon
            </p>
            <p className="mt-1 max-w-sm text-base text-muted/70">
              This section will fill in as studies and milestones are added.
            </p>
          </div>
        ) : (
          <ol className="relative mt-14 border-l border-border pl-8">
            {JOURNEY.map((entry, index) => (
              <li key={`${entry.role}-${index}`} className="mb-12 last:mb-0">
                <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent" />
                <p className="font-mono text-xs text-muted">{entry.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-text">{entry.role}</h3>
                <p className="font-mono text-sm text-muted">{entry.org}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {entry.description}
                </p>
                {entry.tags && entry.tags.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        )}
      </ScrollReveal>
    </section>
  );
}