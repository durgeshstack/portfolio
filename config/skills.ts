import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Build scalable full-stack applications using server components, API routes and optimized routing.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Develop modern user interfaces using reusable components, hooks and efficient state management.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Node.js",
    description:
      "Build backend services and APIs using asynchronous JavaScript runtime.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Express.js",
    description:
      "Create RESTful APIs and backend services with a lightweight Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "TypeScript",
    description:
      "Write scalable and maintainable applications with static typing for JavaScript.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "JavaScript",
    description:
      "Core language for building dynamic and interactive web applications.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "MongoDB",
    description:
      "Design and manage NoSQL databases for scalable applications.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "Prisma / Drizzle ORM",
    description:
      "Type-safe database ORM for managing SQL databases efficiently in Node.js applications.",
    rating: 4,
    icon: Icons.prisma,
  },
  {
    name: "Redis",
    description:
      "Use in-memory data storage for caching, session management and improving performance.",
    rating: 3,
    icon: Icons.redis,
  },
  {
    name: "Docker",
    description:
      "Containerize applications to ensure consistent environments for development and deployment.",
    rating: 3,
    icon: Icons.docker,
  },
  {
    name: "AWS",
    description:
      "Deploy and manage scalable applications using cloud services like S3 and EC2.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "Tailwind CSS",
    description:
      "Create modern and responsive UI designs using a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "HTML5",
    description:
      "Structure semantic and accessible web pages using modern HTML standards.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS3",
    description:
      "Style responsive web interfaces with modern CSS techniques.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Jest",
    description:
      "Write unit tests for JavaScript and Node.js applications to ensure reliability.",
    rating: 3,
    icon: Icons.jest,
  },
  {
    name: "System Design",
    description:
      "Design scalable backend systems including APIs, database structure and caching strategies.",
    rating: 3,
    icon: Icons.systemDesign,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);