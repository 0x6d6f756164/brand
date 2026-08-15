export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
};

// Add real projects here as you ship them. Leave empty and the Projects
// section automatically falls back to a "coming soon" placeholder —
// no need to toggle anything manually.
export const PROJECTS: Project[] = [
  // {
  //   title: "Project Name",
  //   description: "One or two sentences on what it does and why it exists.",
  //   tags: ["Next.js", "TypeScript", "Tailwind"],
  //   liveUrl: "https://example.com",
  //   repoUrl: "https://github.com/your-username/project",
  //   image: "/image.jpg"
  // },
  {
    title: "Krispr",
    description: "No fancy dining room. Just a flat top, a fryer, and way too much hot sauce.",
    tags: ["Next.js", "TypeScript", "Tailwindcss"],
    liveUrl: "https://krispr.vercel.app",
    image: "/krispr.svg"
  },
  {
    title: "Momentum",
    description: "A confident, data-driven landing page for a growth marketing agency",
    tags: ["Next.js", "TypeScript", "Tailwindcss"],
    liveUrl: "https://momentum-mock-design.vercel.app",
    image: "/momentum.svg"
  },
];
