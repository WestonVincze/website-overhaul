import { IconNames } from "@assets/Icons";

const intro =
  "I am a self-driven frontend web developer backed by over 5 years of professional experience. I specialize in JavaScript, including a plethora of libraries and frameworks, with a strong proficiency in React and TypeScript.";

type TechnicalSkill = {
  title: string;
  skills: string[];
};

const technicalSkills: TechnicalSkill[] = [
  {
    title: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "C#",
      "SQL",
      "PHP",
      "Go",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "NextJS",
      "VueJS",
      "Jest",
      "Storybook",
      "GraphQL",
      "Redux",
      "RxJS",
      "XState",
      "React-Spring",
      "ChartsJS",
      "jQuery",
      "AJAX",
      "Material UI",
      "Chakra UI",
      "Bootstrap",
      "Scss",
      "Less",
      "WordPress",
    ],
  },
  {
    title: "Backend",
    skills: [
      "NodeJS",
      "MongoDB",
      "ASP.NET",
      "Entity Framework",
      "LINQ",
      "SQL",
      "Colyseus",
    ],
  },
  {
    title: "DevOps",
    skills: ["Vercel", "AWS", "Docker", "K8s", "Helm", "Azure"],
  },
  {
    title: "Tools",
    skills: [
      "Webpack",
      "Git",
      "Figma",
      "JIRA",
      "Postman",
      "Vim",
      "BabylonJS",
      "Unity",
    ],
  },
];

type WorkExperience = {
  company: string;
  title: string;
  skills: IconNames[];
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
};

const workExperience: WorkExperience[] = [
  {
    company: "Auvik Networks",
    title: "Software Developer",
    skills: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Jest",
      "Storybook",
      "GraphQL",
      "Go",
      "AWS",
      "Docker",
      "Kubernetes",
      "Helm",
      "JIRA",
      "Gitlab",
    ],
    description:
      "Collaborated as a frontend specialist within the account management team on a highly secure SaaS platform.",
    location: "Waterloo, Canada (Remote)",
    startDate: "01/2023",
    endDate: "09/2023",
    highlights: [
      "Contributed to multiple microservice repositories with automated CI/CD pipeline integration",
      "Led project to refactor legacy payment form and enhance payment options with React, GraphQL, and Go",
      "Seamlessly integrated iframe despite strict constraints through strategic CSS and state management",
      "Commended by design team for my dedication to design details when developing UI components",
      "Created reusable hooks for API requests and common patterns with a focus on ease of use",
      "Wrote rigorous tests and Storybook stories, incorporating modular tools to simplify intricate testing logic",
      "Provided comprehensive feedback during code reviews and wrote descriptive details for pull requests",
      "Extensively documented work with highly readable code, JSDoc function descriptions, and e2e flow charts",
      "Persistently addressed tech debt, risks, and improvement opportunities during sprint grooming and retro",
    ],
  },
  {
    company: "Bitovi",
    title: "JavaScript Consultant",
    skills: [
      "React",
      "NextJS",
      "Redux",
      "TypeScript",
      "HTML",
      "CSS",
      "Jest",
      "Storybook",
      "GraphQL",
      "NodeJS",
      "MaterialUI",
      "ChakraUI",
      "JIRA",
      "GitHub",
    ],
    description:
      "Engaged as a versatile React developer and consultant, serving an array of diverse clients. Projects ranged from short-term individual assignments to substantial, collaborative endeavors within agile teams.",
    location: "Chicago, USA (Remote)",
    startDate: "11/2021",
    endDate: "11/2022",
    highlights: [
      "Collaborated on the architectural planning and development of a project to refactor an existing web app into a modular white-label product with a shared and customizable component library",
      "Conducted rigorous testing and leveraged Storybook to showcase UI components and their various states",
      "Represented Bitovi during virtual events to deliver live presentations on trending technologies",
      "Contributed to Bitovi supported open source libraries like StackStorm and react-to-webcomponent",
      "Designed a senior-level take-home test and rubric for a client to assist their hiring process",
    ],
  },
  {
    company: "Richmond Day",
    title: "Full Stack Developer",
    skills: [
      "JQuery",
      "AJAX",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "ASPnet",
      "Csharp",
      "SQL",
      "WordPress",
      "PHP",
      "JIRA",
      "GitHub",
    ],
    description:
      "Collaborated closely with project managers and designers to plan, develop, and maintain websites for an extensive and distinguished clientele, including industry leaders such as MINI, BMW, and LG.",
    location: "Toronto, Canada (Remote)",
    startDate: "04/2020",
    endDate: "11/2021",
    highlights: [
      "Wrote frontend from scratch for a virtual retreat hosted by MINI, featuring interactive games and contests",
      "Developed scalable, database-first applications primarily using ASP.NET, SQL, and jQuery",
      "Crafted interactive web components using JavaScript and customized open-source libraries",
      "Implemented pixel-perfect, responsive designs from PSD mockups provided by designers",
    ],
  },
  {
    company: "Self Employed",
    title: "Freelance Web Developer",
    skills: [
      "JQuery",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "WordPress",
      "PHP",
      "Figma",
    ],
    description:
      "Cultivated client relationships, gathered project requirements, and delivered full websites from scratch.",
    location: "Toronto, Canada (Remote)",
    startDate: "11/2019",
    endDate: "04/2020",
    highlights: [
      "Managed deployment and hosting of web domains as well as SEO, mailing services, and eCommerce",
      "Designed, developed, and deployed luxury watch store splash page within tight two day deadline",
      "Refactored code, improved SEO, and established article publication workflow for psychology website",
      "Integrated calendar scheduling, PayPal services, and improved UI layout for virtual classroom website",
    ],
  },
  {
    company: "LBC IT Solutions, Inc",
    title: "Junior Web Developer",
    skills: [
      "VueJS",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "ASPnet",
      "Csharp",
      "SQL",
      "WordPress",
      "PHP",
      "Azure",
      "Trello",
      "Bitbucket",
    ],
    description:
      "Worked within a small development team to deliver large-scale web apps and WordPress websites.",
    location: "Toronto, Canada (Remote)",
    startDate: "07/2018",
    endDate: "11/2019",
    highlights: [
      "Contributed to dynamic MVC web apps with VueJS views, ASP.NET controllers, and SQL data",
      "Collaborated on React application with Contentful integration for user friendly article management",
      "Independently built and launched WordPress website with a customized theme using Isotope.js and PHP",
    ],
  },
  {
    company: "PWC Technology Services, Inc",
    title: "Software Developer Intern",
    skills: [
      "JQuery",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "AJAX",
      "SQL",
      "PHP",
    ],
    description:
      "Collaborated in an agile development environment and worked independently on web apps.",
    location: "Scarborough, Canada",
    startDate: "01/2017",
    endDate: "07/2017",
    highlights: [
      "Actively participated in scrum meetings and consistently completed sprint tasks ahead of schedule",
      "Developed web app prototype to fetch, render, and filter nutrition data from nearby restaurants",
    ],
  },
];

type Education = {
  school: string;
  program: string;
  degree: string;
  description: string;
  startDate: string;
  endDate: string;
  highlights: string[];
};

const education: Education = {
  school: "Seneca College",
  program: "Computer Programmer",
  degree: "Advanced Diploma",
  description:
    "Mastered the fundamentals of object oriented programming (OOP), web development, computer networking, database design, normalization, and collaboration.",
  startDate: "09/2015",
  endDate: "05/2018",
  highlights: [
    "Made the dean's list and graduated with honors",
    "Excelled as a leader and team player for multiple group projects and presentations",
  ],
};

type Hobby = {
  name: string;
  url?: string;
};

const hobbies: Hobby[] = [
  { name: "Game Development", url: "https://weasyv.itch.io/" },
  { name: "Drawing & Animation" },
  { name: "World Building" },
  { name: "Improv & TTRPG`s" },
  { name: "Reading & Writing" },
  { name: "Snowboarding" },
];

export type Resume = {
  intro: string;
  workExperience: WorkExperience[];
  technicalSkills: TechnicalSkill[];
  education: Education;
  hobbies: Hobby[];
};

export const ResumeContent: Resume = {
  intro,
  technicalSkills,
  workExperience,
  education,
  hobbies,
};
