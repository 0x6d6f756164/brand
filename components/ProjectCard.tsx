import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/lib/projects";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-lg border border-border bg-panel p-6 transition-colors hover:border-accent/40">
      {project.image && (
        <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-md border border-border">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-text">{project.title}</h3>
        <div className="flex shrink-0 items-center gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} repository`}
              className="text-muted transition-colors hover:text-text"
            >
              <FaGithub className="h-4 w-4" strokeWidth={1.5} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="text-muted transition-colors hover:text-text"
            >
              <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
