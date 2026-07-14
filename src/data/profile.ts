export const profile = {
  name: "Kent Michael Handumon",
  role: "Full-Stack Software Engineer",
  tagline:
    "I build web, mobile, and blockchain products end to end — from database schema to on-chain contract to the pixel on screen.",
  location: "Iloilo, Philippines",
  email: "kmcaelian@gmail.com",
  phone: "0938 111 6730",
  linkedin: "https://www.linkedin.com/in/michaelhandumon",
  github: "https://github.com/",
  resumeUrl: "/resume.pdf",
};

export const about = {
  summary: [
    "I'm a software engineer with a Bachelor's degree in Software Engineering from Central Philippine University, and about four years of professional experience shipping full-stack products — web, mobile, and most recently, blockchain.",
    "I started as a backend-leaning developer building REST APIs and PostgreSQL schemas, moved into full ownership of frontend and mobile delivery (including an app shipped to the App Store), and specialized in DevOps deployment across AWS, Vercel, Railway, and Render.",
    "Most recently I've been designing, developing, and testing smart contracts on the Internet Computer (ICP), connecting on-chain logic to production frontends. I care about reliability as much as shipping speed — CI/CD, unit tests, and end-to-end tests are part of how I build, not an afterthought.",
  ],
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "RESTful APIs"],
  },
  {
    title: "Mobile & Game",
    items: ["React Native", "Unity"],
  },
  {
    title: "Blockchain",
    items: ["Solidity", "Smart Contracts", "Internet Computer (ICP)"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, Lightsail, RDS)", "Vercel", "Railway", "Render"],
  },
  {
    title: "Testing & Quality",
    items: ["Jest", "Playwright", "Cucumber", "Unit & E2E Testing", "CI/CD"],
  },
  {
    title: "AI & Other",
    items: ["OpenAI Integration", "Basic Machine Learning", "Python", "Java", "C#"],
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  stack: string[];
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Fullstack Developer",
    company: "NDA Company",
    period: "2025 - 2026",
    stack: ["React", "Next.js", "Solidity", "Smart Contracts", "NestJS", "Jest", "Playwright", "ICP"],
    highlights: [
      "Designed, developed, and tested smart contracts on the Internet Computer (ICP), covering contract logic and emitted events to ensure reliability before deployment.",
      "Built frontend pages and reusable components that connect cleanly to the on-chain layer.",
      "Delivered full-stack blockchain features end to end, from smart contract to UI.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Prometheus",
    period: "2024 - 2025",
    stack: ["Next.js", "NestJS", "React Native", "TypeScript", "AWS Lightsail"],
    highlights: [
      "Specialized in DevOps processes, deploying multiple applications using Vercel, AWS Lightsail, Railway, and Render.",
      "Worked a flexible full-stack role covering quality UI and backend service structure.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Prometheus",
    period: "2023 - 2024",
    stack: ["Next.js", "PostgreSQL", "React Native", "WordPress"],
    highlights: [
      "Built REST APIs and set up databases using PostgreSQL; owned the overall backend services structure.",
      "Developed a mobile app using React Native.",
      "Maintained quality assurance through CI/CD, e2e testing, and unit testing.",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Jhelord Taxi Connect",
    period: "2022 - 2023",
    stack: ["React Native", "PostgreSQL", "JavaScript", "Express"],
    highlights: [
      "Built an admin system for operator and driver communication.",
      "Wrote PostgreSQL queries and created API endpoints on the backend.",
      "Integrated APIs on the frontend and shipped the app through the App Store.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Cuppa",
    period: "2022",
    stack: ["React.js", "Express.js", "PostgreSQL", "JavaScript"],
    highlights: [
      "Maintained the CI/CD integration system and wrote system documentation.",
      "Handled API integration on the frontend and created API endpoints on the backend.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2021 - 2022",
    stack: ["React.js", "Node.js", "PostgreSQL", "JavaScript"],
    highlights: [
      "Built end-to-end and unit tests for both frontend and backend.",
      "Created API endpoints on the backend for client projects.",
    ],
  },
];

export type EducationEntry = {
  school: string;
  degree: string;
  location: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    school: "Central Philippine University",
    degree: "Bachelor of Science in Software Engineering",
    location: "Iloilo, Philippines",
    period: "2018 - 2023",
  },
];

export type ProjectEntry = {
  title: string;
  description: string;
  stack: string[];
  tags: ("Web" | "Mobile" | "Blockchain" | "AI")[];
  link?: string;
  repo?: string;
};

export const projects: ProjectEntry[] = [
  {
    title: "Jhelord Taxi Connect",
    description:
      "Admin system enabling real-time communication between taxi operators and drivers. Owned PostgreSQL data modeling, backend endpoints, and frontend API integration; shipped to the App Store.",
    stack: ["React Native", "Express", "PostgreSQL", "JavaScript"],
    tags: ["Mobile", "Web"],
  },
  {
    title: "On-Chain Feature Suite (ICP)",
    description:
      "Smart contracts on the Internet Computer covering business logic and emitted events, paired with a Next.js frontend that reads and writes to the on-chain layer.",
    stack: ["Solidity", "ICP", "Next.js", "NestJS", "Playwright"],
    tags: ["Blockchain", "Web"],
  },
  {
    title: "Backend Platform & DevOps Rollouts",
    description:
      "REST API and PostgreSQL-backed services deployed and maintained across AWS Lightsail, Vercel, Railway, and Render, with CI/CD and automated testing gating releases.",
    stack: ["NestJS", "Node.js", "PostgreSQL", "AWS", "Jest"],
    tags: ["Web"],
  },
  {
    title: "This Portfolio",
    description:
      "This site itself — Next.js, TypeScript, and Tailwind, deployed on Vercel, built to double as a live demo of how I structure a small full-stack app.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    tags: ["Web", "AI"],
    repo: "#",
  },
];
