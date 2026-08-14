import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiDotnet,
  SiMysql,
  SiGit,
  SiPython,
  SiUnity
} from "react-icons/si";

export type Tech = {
  name: string;
  icon: IconType;
};

export const TECH_STACK: Tech[] = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "MySQL", icon: SiMysql },
  { name: ".Net", icon: SiDotnet },
  { name: "Git", icon: SiGit },
  { name: "Python", icon: SiPython },
  { name: "Unity", icon: SiUnity },
];
