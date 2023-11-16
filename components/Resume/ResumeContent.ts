import { IconNames } from "../Icons";

const intro =
  "I am a passionate web developer backed by over 5 years of professional experience. I specialize in JavaScript libraries and frameworks with a strong proficiency in React and TypeScript.";

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
      "GoLang",
      "AWS",
      "Docker",
      "Kubernetes",
      "Helm",
      "JIRA",
      "Gitlab",
    ],
    description:
      "Collaborated as a frontend specialist in an agile team with a primary focus on account management and the consolidation of legacy code into a unified platform. Executed a wide range of tasks from minor microservice updates to leading full project lifecycles.",
    location: "Waterloo, Canada (Remote)",
    startDate: "January 2023",
    endDate: "September 2023",
    highlights: [
      "Contributed to Avuik’s SaaS platform and microservices emphasizing security and role management standards ",
      "Led project to rebuild legacy payment form and enhance payment options with React, GraphQL, and GoLang",
      "Seamlessly integrated third party iframe into Auvik's design despite strict constraints using strategic CSS",
      "Commended by design team for my dedication to design details when developing UI components from mockups",
      "Developed robust React components and custom hooks with extensive documentation and testing for ease of use",
      "Implemented microservices to handle database queries and API requests using GraphQL, GoLang, and Kubernetes",
      "Persistently addressed tech debt, risks, and improvement opportunities during sprint grooming and retro meetings",
    ],
  },
  {
    company: "Bitovi",
    title: "JavaScript Consultant",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Jest",
      "Storybook",
      "GraphQL",
      "NextJS",
      "Redux",
      "NodeJS",
      "MaterialUI",
      "ChakraUI",
      "JIRA",
      "GitHub",
    ],
    description:
      "Engaged as a versatile developer and consultant within Bitovi's React Department, serving an array of diverse clients. Proficiently managed a broad spectrum of frontend React projects from short-term individual assignments to substantial, collaborative endeavors within agile teams.",
    location: "Chicago, USA (Remote)",
    startDate: "November 2021",
    endDate: "November 2022",
    highlights: [
      "Collaborated with a small team to design architectural patterns and develop a white-label React application and shared component library using Redux, TypeScript, and Charts.js",
      "Conducted rigorous testing using Jest and leveraged Storybook to showcase UI components and their various states",
      "Represented Bitovi during virtual events and delivered live presentations on open-source libraries like Storybook and react-to-webcomponent",
      "Contributed to Bitovi maintained open source libraries like StackStorm and react-to-webcomponent",
      "Designed a senior-level take-home test and rubric for a client to assist their hiring process",
    ],
  },
  {
    company: "Richmond Day",
    title: "Full Stack Developer",
    skills: [
      "JQuery",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "ASPnet",
      "Csharp",
      //"Entity Framework",
      "AJAX",
      "SQL",
      "WordPress",
      "PHP",
      //"Liquid",
      "JIRA",
      "GitHub",
    ],
    description:
      "Collaborated closely with project managers and designers to plan, develop, and maintain websites for an extensive and distinguished clientele, including industry leaders such as MINI, BMW, and LG.",
    location: "Toronto, Canada (Remote)",
    startDate: "April 2020",
    endDate: "November 2021",
    highlights: [
      "Developed scalable, database-first applications primarily using ASP.NET, SQL, and jQuery",
      "Created interactive web components using JavaScript and customized open-source libraries",
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
      "Photoshop",
      "Illustrator",
    ],
    description:
      "Cultivated client relationships, gathered project requirements, facilitated contract negotiations, and consistently delivered websites, primarily leveraging WordPress and custom themes.",
    location: "Toronto, Canada (Remote)",
    startDate: "November 2019",
    endDate: "April 2020",
    highlights: [
      "Managed deployment and hosting of web domains as well as SEO, contact forms, and eCommerce",
      "Worked closely with non-technical clients to gather requirements and create mockups true to their vision and budget",
      "Designed, developed, and deployed luxury watch splash page within tight two day deadline",
      "Refactored code, improved SEO, and established article publication workflow for psychology article website",
      "Integrated calendar scheduling, PayPal services, and improved UI layout for virtual classroom website",
    ],
  },
  {
    company: "LBC IT Solutions, Inc",
    title: "Junior Web Developer",
    skills: [
      "VueJS",
      "React",
      "JQuery",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "ASPnet",
      "Csharp",
      //"Entity Framework",
      "SQL",
      "WordPress",
      "PHP",
      "Trello",
      "Bitbucket",
      "Azure",
    ],
    description:
      "Worked in a small development team to deliver large-scale web applications as well as WordPress websites for clients.",
    location: "Toronto, Canada (Remote)",
    startDate: "July 2018",
    endDate: "November 2019",
    highlights: [
      "Developed a dynamic, data-driven, MVC web application for Telus using ASP.NET Core and VueJS",
      "Collaborated on a React application for Air Canada capable of fetching and displaying article data from Contentful",
      "Independently built and launched a WordPress website for a client with a fully customized theme using Isotope.js",
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
      "Collaborated in an agile development team contracted by Scotiabank and worked independently on web applications.",
    location: "Scarborough, Canada",
    startDate: "January 2017",
    endDate: "July 2017",
    highlights: [
      "Actively participated in scrum meetings and consistently completed sprint tasks ahead of schedule",
      "Developed web application capable of making API calls using AJAX and rendering nutritional information data",
    ],
  },
];

const education = {
  school: "Seneca College",
  program: "Computer Programmer",
  degree: "Advanced Diploma",
  description:
    "Excelled as a team player and leader for multiple group projects and mastered object oriented programming (OOP), web development, computer networking, database design, normalization, and collaboration.",
  highlights: [
    "Made the dean's list and graduated with honors",
    "Excelled as a leader and team member for multiple group projects and presentations",
  ],
  startDate: "September 2015",
  endDate: "May 2018",
};

type TechnicalSkill = {
  title: string;
  skills: string[];
};

const technicalSkills: TechnicalSkill[] = [
  {
    title: "Languages",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "C#",
      "SQL",
      "PHP",
      "GoLang",
      "Python",
      "Bash",
      "Liquid",
      "Java",
      "C++",
      "C",
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      "React",
      "NextJS",
      "NodeJS",
      "Redux",
      "Scss",
      "Sass",
      "Less",
      "ASP.NET",
      "Entity Framework",
      "Bootstrap",
      "jQuery",
      "AJAX",
      "WordPress",
      "GraphQL",
      "VueJS",
      "RxJS",
      "XState",
      "React-spring",
      "Material UI",
      "Chakra UI",
      "MySQL",
      "MongoDB",
      "Unity",
      "AngularJS",
      "BabylonJS",
      "CanJS",
      "Colyseus",
    ],
  },
  {
    title: "Development Tools",
    skills: [
      "Git",
      "RESTful APIs",
      "JIRA",
      "Webpack",
      "Figma",
      "SEO",
      "OpenGraph",
      "Browser Dev Tools",
      "JSON",
      "Vim",
    ],
  },
  {
    title: "Cloud & Deployment",
    skills: ["Vercel", "AWS", "Docker", "Azure", "Kubernetes", "Helm"],
  },
  {
    title: "Testing & Debugging",
    skills: ["Jest", "Storybook", "React Testing Library", "Postman"],
  },
];

const hobbies = [
  "Game Development",
  "Drawing & Animation",
  "World Building",
  "Improv & TTRPG`s",
  "Reading & Writing",
  "Snowboarding",
];

export const ResumeContent = {
  intro,
  workExperience,
  technicalSkills,
  education,
  hobbies,
};
