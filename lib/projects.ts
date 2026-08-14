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
  
];
