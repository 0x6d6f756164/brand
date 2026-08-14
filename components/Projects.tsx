import { Hammer } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="work" className="px-6 py-28">
      <ScrollReveal className="mx-auto max-w-5xl">
        <p className="font-mono text-base text-muted">Selected work</p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          Projects
        </h2>

        {PROJECTS.length === 0 ? (
          <div className="mt-14 flex flex-col items-center justify-center rounded-lg border border-dashed border-border px-6 py-24 text-center">
            <Hammer className="h-7 w-7 text-muted" strokeWidth={1.5} />
            <p className="mt-4 font-mono text-base text-muted">
              More projects coming soon
            </p>
            <p className="mt-1 max-w-sm text-base text-muted/70">
              This section is being filled in as work ships. Check back
              shortly.
            </p>
          </div>
        ) : (
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}
