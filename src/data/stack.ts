import type { StackGroup } from "./types";

export const stackGroups: StackGroup[] = [
  {
    label: "Lenguajes",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Astro",
      "Bootstrap",
      "Framer Motion",
      "Recharts",
    ],
  },
  {
    label: "Backend y escritorio",
    items: ["Node.js", "Express.js", "Electron", "Gemini AI API"],
  },
  {
    label: "Bases de datos",
    items: ["PostgreSQL", "MySQL", "Sequelize"],
  },
  {
    label: "Herramientas",
    items: ["Git", "GitHub", "Vite", "Postman", "Arquitectura Event-Driven"],
  },
];

// Tecnologías que NO figuran en el CV: las mostramos aparte, como "explorando",
// hasta que las domines. Si preferís no mostrarlas, borrá esta lista.
export const exploring: string[] = ["Three.js", "React Three Fiber", "GSAP"];
