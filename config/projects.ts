import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date | "Present";
  companyLogoImg: string;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "portfolio-template",
    companyName: "Portfolio Website",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Open-source Next.js portfolio template recognized and forked by developers worldwide, optimized for SEO/AEO and performance.",
    websiteLink: "https://nbarkiya.xyz",
    githubLink: "https://github.com/durgeshstack/portfolio",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/portfolio.png",
    pagesInfoArr: [
      {
        title: "Landing & Sections",
        description:
          "A clean, minimal landing page with sections for skills, projects, contributions, and experience.",
        imgArr: ["/projects/portfolio.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I created an open-source Next.js portfolio template to help developers ship a modern, responsive portfolio quickly.",
        "The project focuses heavily on performance, clean typography, and strong SEO/AEO foundations, and it has been adopted and forked by developers globally.",
      ],
      bullets: [
        "Created an open-source Next.js portfolio template recognized and forked by developers worldwide.",
        "Optimized SEO/AEO structure for discoverability.",
        "Maintained a fast, responsive UI with a minimal themeable design system.",
      ],
    },
  },

  {
    id: "bimasathi-insurance-platform",
    companyName: "Panopic Infotect Private Limited",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "SaaS"],
    shortDescription:
      "Multi-tenant insurance management SaaS platform for managing users, policies, POSPs, brokerage, accounting, billing, and reporting.",
    websiteLink: "https://beemasathi.com/",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MySQL",
      "Zod",
    ],
    startDate: new Date("2025-01-01"),
    endDate: "Present",
    companyLogoImg: "/projects/beemasathi.png",
    pagesInfoArr: [
      {
        title: "Insurance Platform Dashboard",
        description:
          "Dashboard to manage policies, POSPs, brokerage, billing, and insurance reporting.",
        imgArr: ["/projects/beemasathi.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Beemasathi is a multi-tenant SaaS insurance platform designed to manage policies, POSPs, brokerage, accounting, and reporting workflows.",
        "The platform includes scalable backend services, role-based access control, and automated reporting modules for insurance operations.",
      ],
      bullets: [
        "Developed a multi-tenant insurance management platform handling policies and POSP workflows.",
        "Implemented role-based access control and automated quality-check reporting modules.",
        "Built scalable backend services using Node.js and MySQL.",
        "Used Next.js for frontend performance optimization and Zod for schema validation.",
      ],
    },
  },

  {
    id: "loan-management-system",
    companyName: "Blue Sparing Private Limited",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "Fintech"],
    shortDescription:
      "Loan management system for managing lenders, borrowers, EMI tracking, repayment schedules, and financial reporting.",
    websiteLink: "https://aapkafuture.com/",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MySQL",
    ],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/loan-management.png",
    pagesInfoArr: [
      {
        title: "Loan Management Dashboard",
        description:
          "Dashboard to manage lenders, borrowers, EMI tracking, loan approvals, and financial insights.",
        imgArr: ["/projects/loan-management.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a loan management system to streamline loan processing, borrower tracking, and financial reporting.",
        "The system includes automated EMI tracking, repayment scheduling, approval workflows, and reporting dashboards.",
      ],
      bullets: [
        "Built a loan management platform for lenders and borrowers.",
        "Implemented loan approval workflows and EMI repayment schedules.",
        "Developed financial dashboards for loan analytics and reporting.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);