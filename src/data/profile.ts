export const profile = {
  name: "Kent Michael Handumon",
  role: "Full-Stack Software Engineer",
  tagline:
    "I build reliable web and mobile applications end-to-end, focused on quality and reliability. I specialize in full-stack development, DevOps deployment, and blockchain integration.",
  location: "Iloilo, Philippines",
  email: "kmcaelian@gmail.com",
  phone: "0938 111 6730",
  linkedin: "https://www.linkedin.com/in/michaelhandumon",
  github: "https://github.com/",
  resumeUrl: "/resume.pdf",
};

export const about = {
  summary: [
    "I'm a software engineer with a Bachelor's degree in Software Engineering from Central Philippine University. I have 5+ years of professional experience shipping full-stack products from web, mobile, to most recently, blockchain.",
    "I started as a backend-leaning developer building REST APIs, moved into full ownership of frontend and mobile delivery (including an app shipped to the App Store), and specialized in DevOps deployment across AWS, Vercel, Railway, and Render. Testing has been part of that ownership throughout, from unit tests to end-to-end coverage with tools like Jest and Playwright.",
    "Most recently I've been designing, developing, and creating smart contracts on the Internet Computer Protocol (ICP), connecting on-chain logic to production frontends.",
    "I also make AI tools part of my everyday development workflow, using them to speed up implementation, explore approaches, and review code while staying accountable for the architecture, quality, and correctness of everything I ship through testing and code reviews.",
  ],
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "WordPress"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "GraphQL"],
  },
  {
    title: "Mobile & Game",
    items: ["Unity", "Android Studio", "React Native"],
  },
  {
    title: "Blockchain",
    items: ["Solidity", "Smart Contracts", "Internet Computer (ICP)", "Metamask API"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "Firebase", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, Lightsail, RDS)", "Vercel", "Railway", "Render", "Docker"],
  },
  {
    title: "Testing & Quality",
    items: ["Jest", "Playwright", "Cucumber", "Cypress", "Unit & E2E Testing", "CI/CD", "GitHub Actions"],
  },
  {
    title: "AI & Other",
    items: ["OpenAI Integration", "Basic Machine Learning", "Claude Code", "GitHub Copilot", "ChatGPT"],
  },
  {
    title: "Work Preferences",
    items: ["English Proficiency — Professional", "Remote / On-site / Hybrid", "Full-time / Part-time / Contract", "Dayshift / Nightshift / Flexible Hours"],
  },
  {
    title: "Agile Methodologies",
    items: ["Kanban", "Scrum"],
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub"],
  },
  {
    title: "Programming Languages",
    items: ["TypeScript", "JavaScript", "C#", "Python", "Java"],
  },
  {
    title: "Project Management & Collaboration",
    items: ["Jira", "Linear", "Trello", "Slack", "Discord", "Figma"],
  }

];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  employmentType: "Full-time Employee" | "Part-time Employee" | "Independent Contractor" | "Project-based Contractor" | "Intern";
  workArrangement: "Remote" | "On-site" | "Hybrid";
  location: "Philippines" | "Singapore" | "United States";
  stack: string[];
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Fullstack Software Engineer",
    company: "Confidential Client",
    period: "2025 - 2026",
    employmentType: "Independent Contractor",
    workArrangement: "Remote",
    location: "United States",
    stack: ["PostgreSQL", "GraphQL", "NestJS", "Next.js", "Tailwind CSS", "shadcn/ui", "Tanstack Query", "Solidity", "Hardhat", "TypeScript", "ICP", "Vercel", "Railway", "Playwright", "Jest", "GitHub Actions", "Metamask API"],
    highlights: [
      "Developed and tested smart contracts on the Internet Computer (ICP), covering contract logic and emitted events to ensure reliability before deployment.",
      "Architected backend layers (services, controllers, modules) for maintainable, scalable API design.",
      "Built frontend pages and reusable components with TanStack Query that connect cleanly to the on-chain layer.",
      "Integrate Unit and End-to-End testing with Jest and Playwright for quality assurance and regression testing.",
      "Implement proper CI/CD pipelines for automated testing and deployment to Vercel and Railway.",
      "Authored YAML workflow files for GitHub Actions to automate testing and deployment pipelines.",
      "Write proper documentation for the project, including API endpoints and smart contract interfaces using Swagger.",
    ],
  },
  {
    role: "Software Engineer (Fullstack / DevOps)",
    company: "Prometheus",
    period: "2024 - 2025",
    employmentType: "Full-time Employee",
    workArrangement: "Hybrid",
    location: "Philippines",
    stack: ["PostgreSQL", "NestJS", "Next.js", "React Native", "Tailwind CSS", "shadcn/ui", "TypeScript", "AWS Lightsail", "AWS RDS", "Vercel", "Railway", "Render", "Jest", "GitHub Actions"],
    highlights: [
      "Developed an ERP system for a Local Government Unit (LGU), covering government workflow processes end-to-end from backend services to frontend delivery.",
      "Coordinated face-to-face meetings with government clients and departments to provide consultation, translating their operational goals and requirements directly into application features.",
      "Conducted hands-on trainings and product demos with LGU staff to drive adoption and ensure the system matched real workflow needs.",
      "Specialized in DevOps processes, deploying multiple applications using Vercel, AWS Lightsail, Railway, and Render.",
      "Authored YAML workflow files for GitHub Actions to automate testing and deployment pipelines.",
      "Worked a flexible full-stack role covering end-to-end responsibilities from backend service structure, quality and responsive UI, to scalable deployment in AWS.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Prometheus",
    period: "2023 - 2024",
    employmentType: "Full-time Employee",
    workArrangement: "Hybrid",
    location: "Philippines",
    stack: ["PostgreSQL", "Express.js", "Node.js", "OpenAI", "React Native", "WordPress", "Next.js", "JavaScript", "TypeScript", "C#", "GitHub Actions"],
    highlights: [
      "Built REST APIs and set up databases using PostgreSQL; structured backend services.",
      "Developed food/product delivery and emergency response mobile app with React Native.",
      "Worked within a no-code WordPress environment, translating Figma UI designs into fully built websites for hospital and meal-plan provider clients.",
      "Built OpenAI-powered projects and integrated AI features into websites (Discord Clone, Chatbot).",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Jhelord Taxi Connect",
    period: "2022 - 2023",
    employmentType: "Independent Contractor",
    workArrangement: "Remote",
    location: "Philippines",
    stack: ["Google Firebase", "Express.js", "React Native", "Next.js", "JavaScript", "Google Maps API",  "GitHub Actions"],
    highlights: [
      "Built an admin system for operator and driver communication.",
      "Created API endpoints on the backend.",
      "Integrated APIs on the frontend and shipped the app through the App Store.",
      "Participated in manual testing."
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Cuppa",
    period: "2022",
    employmentType: "Intern",
    workArrangement: "Remote",
    location: "Singapore",
    stack: ["Express.js", "React.js", "JavaScript", "Cypress", "Github Actions"],
    highlights: [
      "Maintained the CI/CD integration system and wrote system documentation.",
      "Handled API integration on the frontend and created API endpoints on the backend.",
      "Create unit and end-to-end tests for both frontend and backend using Jest and Cypress.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Confidential Client",
    period: "2021 - 2022",
    employmentType: "Project-based Contractor",
    workArrangement: "Remote",
    location: "Philippines",
    stack: ["PostgreSQL", "Node.js", "React.js", "JavaScript"],
    highlights: [
      "Created API endpoints on the backend.",
      "Wrote PostgreSQL and GraphQL queries.",
    ],
  },
];

export type EducationEntry = {
  level?: string;
  school: string;
  degree: string;
  location: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    level: "College",
    school: "Central Philippine University",
    degree: "Bachelor of Science in Software Engineering",
    location: "Iloilo, Philippines",
    period: "2018 - 2023",
  },
  {
    level: "Secondary School",
    school: "Al-Jazeera International Philippine School in Dammam",
    degree: "",
    location: "Dammam, Kingdom of Saudi Arabia",
    period: "2012 - 2014",
  },
  {
    school: "International Philippine School in Al-Khobar",
    degree: "",
    location: "Al-Khobar, Kingdom of Saudi Arabia",
    period: "2014 - 2017",
  },
  {
    school: "Future Generations Philippine International School",
    degree: "",
    location: "Riyadh, Kingdom of Saudi Arabia",
    period: "2017 - 2018",
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
    title: "The Prominent",
    description:
      "An ERP system built and developed for a Local Government Unit (LGU), with modules automating workflow processes across different government departments through role-based logins and department-exclusive features. Client-facing work included face-to-face trainings, consultations, and requirement specification.",
    stack: ["PostgreSQL", "NestJS", "Next.js", "Tailwind CSS", "shadcn/ui", "TypeScript", "AWS Lightsail", "AWS RDS", "Vercel", "Railway", "Render", "Jest", "GitHub Actions"],
    tags: ["Web"],
    link: "https://theprominent.ph/"
  },
  {
    title: "Peer-to-Peer Capital Raising/Donation Platform",
    description:
      "A transparent donation platform where donors fund verified campaigns and can trace how every contribution is spent, with community governance over fund allocation.",
    stack: ["PostgreSQL", "GraphQL", "NestJS", "Next.js", "Tailwind CSS", "shadcn/ui", "Tanstack Query", "Solidity", "Hardhat", "TypeScript", "ICP", "Vercel", "Railway", "Playwright", "Jest", "GitHub Actions", "Metamask API"],
    tags: ["Blockchain", "Web", "Mobile"],
  },
  {
    title: "Cart2Go",
    description:
      "A capstone e-commerce and grocery delivery app for web and mobile, with online payment options and role-based login for Shoppers and Shop Managers.",
    stack: ["React Native", "PostgreSQL", "TypeScript", "Cypress", "Sentry", "React", "Jest", "Google Maps"],
    tags: ["Web", "Mobile"],
    link: "https://cart2go.vercel.app/",
  },
  {
    title: "Goozam",
    description:
      "A mobile food and product delivery app with a built-in emergency response feature, allowing users to have the ability to request help alongside their regular delivery orders.",
    stack: ["React Native", "PostgreSQL", "TypeScript", "Google Maps API", "Firebase", "Express.js"],
    tags: ["Mobile"],
  },
  {
    title: "Jhelord Taxi Connect",
    description:
      "A ride-hailing app built for Jhelord, a local taxi operator, allowing passengers to book rides and drivers to accept and manage trips. Paired with an admin system that lets operators dispatch bookings, monitor active trips, and communicate with drivers in real time.",
    stack: ["Google Firebase", "Express.js", "React Native", "Next.js", "JavaScript", "Google Maps API",  "GitHub Actions"],
    tags: ["Mobile", "Web"],
    repo: "https://github.com/michaelhandumon/jhelord",

  },
  {
    title: "AI Turner",
    description:
      "An AI chatbot with real-time voice integration, built around a structured context system that keeps conversations coherent and grounded across turns.",
    stack: ["OpenAI", "Next.js", "TypeScript", "JavaScript"],
    tags: ["AI", "Web"],
    repo: "https://github.com/michaelhandumon/ai-turner"
  },
  {
    title: "This Portfolio",
    description:
      "Structured as a small full-stack app and built with Claude Code.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Claude Code"],
    tags: ["Web", "AI"],
  },
];
