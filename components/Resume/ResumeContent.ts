const intro =
  "I am a passionate frontend web developer backed by over 5 years of professional experience. I specialize in JavaScript libraries and frameworks with a strong proficiency in React and TypeScript.";

const workExperience = [
  {
    company: "Auvik Networks",
    title: "Software Developer",
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
    description:
      "Cultivated client relationships, gathered project requirements, facilitated contract negotiations, and consistently delivered websites, primarily leveraging WordPress and custom themes.",
    location: "Toronto, Canada (Remote)",
    startDate: "May 2018",
    endDate: "April 2020",
    highlights: [
      "Managed deployment and hosting of web domains as well as SEO, contact forms, and eCommerce",
      "Worked closely with non-technical clients to gather requirements and create mockups true to their vision and budget",
      "Delivered websites from conception to production within timelines as short as three days",
    ],
  },
  {
    company: "LBC IT Solutions, Inc",
    title: "Junior Web Developer",
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
    "Excelled as a team player and leader for multiple group projects and learned the fundamentals of programming (OOP), web development, networking, database design, normalization, and collaboration.",
  startDate: "September 2015",
  endDate: "May 2018",
};

// not used
const skillHighlights = [
  "Superb with state management patterns",
  "Well-versed with RESTful API methodology",
  "Implements intuitive and responsive UI/UX",
  "Ensures accessibility compliance (WCAG)",
  "Quick to learn new frameworks and tech",
  "Leverages and customizes open-source tools",
  "Capably communicates across all skill levels",
  "Thoroughly tests and documents code",
  "Emphasizes type safety and code clarity",
  "Develops DRY-minded modular code",
  "Adheres to source control best practices",
  "Proficient with task management tools",
  "Confidently handles client consultations",
  "Adept with CI/CD deployment workflows",
];

const technicalSkills = [
  {
    title: "Languages",
    expert: ["HTML", "CSS", "JavaScript", "TypeScript", "C#", "SQL", "PHP"],
    advanced: ["GoLang", "Python", "Bash"],
    intermediate: ["Liquid", "Java", "C++", "C"],
  },
  {
    title: "Libraries & Frameworks",
    expert: [
      "React",
      "React Hooks",
      "NextJS",
      "Jest",
      "Storybook",
      "Node",
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
    ],
    advanced: [
      "GraphQL",
      "VueJS",
      "RxJS",
      "XState",
      "Spring",
      "Material UI",
      "Chakra UI",
      "MySQL",
      "MongoDB",
      "Unity",
    ],
    intermediate: ["AngularJS, BabylonJS, CanJS"],
  },
  {
    title: "Tools & Technologies",
    expert: [
      "Git",
      "RESTful API",
      "JIRA",
      "SEO",
      "Dev Tools",
      "JSON",
      "Figma",
      "Vim",
    ],
    advanced: ["Webpack", "AWS", "Docker", "Azure", "Vercel"],
    intermediate: ["Kubernetes", "Helm", "Postman"],
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
  skillHighlights,
  technicalSkills,
  education,
  hobbies,
};
