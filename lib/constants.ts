
export const SITE = {
  name: "MuathDev",
  role: "Full-Stack Developer",
  bio: `Engineering student building web applications, AI-powered tools, and interactive experiences.
        I enjoy turning ideas into clean, reliable software with a focus on thoughtful design and engineering.`,
  email: "muathdeveloper0@gmail.com",
  url: "https://mouad-dev.vercel.app", 
} as const;

export const AVAILABILITY = {
  isAvailable: true,
  label: "Available for work",
  unavailableLabel: "Not currently available",
  availableColor: "#a3e635", // lime
  unavailableColor: "#ff2400", // scarlet
} as const;

export const SOCIALS = {
  github: "https://github.com/0x6d6f756164",
  whatsapp: "https://wa.me/+212639657644",
  // linkedin: "https://linkedin.com/",
  instagram: "https://instagram.com/4d75617468",
} as const;

export const NAV_LINKS = [
  { label: "Tech Stack", href: "#tech-stack", id: "tech-stack" },
  // { label: "Journey", href: "#journey", id: "journey" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;
