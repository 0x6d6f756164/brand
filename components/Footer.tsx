import { SITE } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}
