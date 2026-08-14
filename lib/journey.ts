export type JourneyEntry = {
  role: string;
  org: string;
  period: string;
  description: string;
  tags?: string[];
};

export const JOURNEY: JourneyEntry[] = [
  {
    role: "Classe Préparatoire MP",
    org: "Centre CPGE Al Zahrawi, Rabat",
    period: "2025 — 2026",
    description:
      "Second year of preparatory classes (MP track) at one of Morocco's leading CPGE centers, intensifying focus on mathematics, physics, and computer science ahead of engineering school entrance exams.",
    tags: ["Mathematics", "Algorithms", "Physics"],
  },
  {
    role: "Classe Préparatoire MPSI",
    org: "Centre CPGE Moulay Idriss, Fes",
    period: "2024 — 2025",
    description:
      "First year of preparatory classes (MPSI track), building the foundation in mathematics, physics, and computer science for the concours ahead.",
    tags: ["Mathematics", "Algorithms", "Physics"],
  },
];