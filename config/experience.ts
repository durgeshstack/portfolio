import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "panopic",
    position: "Full Stack Developer",
    company: "Panopic Infotech Pvt Ltd",
    location: "Jaipur, Rajasthan",
    startDate: "2025-07-01",
    endDate: "Present",
    description: [
      "Working on BimaSathi, a multi-tenant insurance SaaS platform integrating policies, POSPs, brokerage, accounting, billing, and reporting.",
      "Developing scalable modules using Next.js, Node.js, and MySQL.",
      "Implemented schema validation using Zod to improve API reliability and maintainability.",
    ],
    achievements: [
      "Built secure role-based access control systems for admins, brokers, agents, and users.",
      "Designed modular APIs and optimized database queries for large-scale insurance data.",
      "Improved system scalability for insurance SaaS architecture.",
    ],
    skills: ["Next.js", "React", "Typescript", "Node.js", "MySQL", "Zod"],
    logo: "/experience/panoptic-logo.svg",
  },

  {
    id: "blue-sparing",
    position: "Frontend Developer",
    company: "Blue Sparing",
    location: "Jaipur, Rajasthan",
    startDate: "2024-08-01",
    endDate: "2025-06-01",
    description: [
      "Developed and maintained production web applications using the MERN stack.",
      "Built dashboards, document upload systems, and reporting modules for insurance SaaS platforms.",
    ],
    achievements: [
      "Collaborated with backend engineers to build scalable UI components.",
      "Delivered multiple production-ready modules used by internal teams.",
    ],
    skills: ["React", "Javascript", "Node.js", "MongoDB", "Express"],
  logo: "/experience/bluesparing-logo.png",
  },

  {
    id: "codeapex",
    position: "Junior Software Engineer",
    company: "CodeApex LLP",
    location: "Faridabad, Haryana",
    startDate: "2023-10-01",
    endDate: "2024-06-01",
    description: [
      "Developed a cross-platform mobile event management application using React Native.",
      "Integrated Stripe payment gateway and implemented authentication with JWT and OTP.",
    ],
    achievements: [
      "Built reusable UI components and optimized performance for smooth mobile experience.",
      "Improved payment flow reliability using Stripe integration.",
    ],
    skills: ["React Native", "Javascript", "Node.js", "Stripe"],
    logo: "/experience/codeapex.webp",
  },
];