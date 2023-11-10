import { ProjectDetails } from "./types";

const websites: ProjectDetails[] = [
  {
    title: "Personal Website",
    year: "2023",
    status: "in progress",
    skills: [
      "NextJS",
      "Vercel",
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Jest",
      "XState",
      "ReactSpring",
      "Figma",
    ],
    description:
      "Revamping my old NextJS website with TypeScript integration, react-spring, new custom assets, and a 'fractal modlet' architecture pattern.",
    highlights: [
      "Custom design created using Figma",
      "Hand drawn and programmatic animations and SVG customization",
      "Integrated autodeploy workflow using Vercel",
      "AppState and Animation state machines using XState",
      "Animated components using react-spring",
      "Component-level CSS modules and global theme variables",
      "Modular components with strong separation of concerns",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/website-overhaul",
      },
      {
        icon: "GitHub2",
        text: "Project Board",
        url: "https://github.com/users/WestonVincze/projects/1",
      },
    ],
  },
  {
    title: "Micro-Transaction Login Page",
    year: "2023",
    status: "in progress",
    skills: [
      "React",
      "Redux",
      "TypeScript",
      "HTML",
      "CSS",
      "Jest",
      "CodeSandbox",
    ],
    description:
      "A Bad UI Battle contribution that simulates a login page environment in which the user must purchase 'characters' using a micro-transaction store.",
    highlights: [
      "Simulated API data requests using custom hooks and local storage",
      "Cached and memoized user data for data persistence",
      "Robust state management using Redux slices",
      "React-Toastify and React-Modal Integration",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/mtx-login-page",
      },
      {
        icon: "CodeSandbox",
        text: "Live Demo",
        url: "https://codesandbox.io/s/mtx-login-page-initial-concept-pdngmn",
      },
    ],
  },
  /*
  {
    title: "Wedding Website",
    year: "2021",
    status: "complete",
    skills: ["WordPress", "HTML", "CSS", "JavaScript"],
    description: "Center",
    highlights: [],
  },
  */
  {
    title: "We Sell Users",
    year: "2020",
    status: "complete",
    skills: [
      "VueJS",
      "ASPnet",
      "Csharp",
      "JavaScript",
      "HTML",
      "CSS",
      "AJAX",
      "SQL",
    ],
    description:
      "I built this application from scratch as a take-home challenge for my employment at Richmond Day. I primarily used ASP.NET MVC, Entity Framework, and Vue.js.\nFor this challenge I was given mock data in an excel sheet and tasked with designing a database and a full stack application to manage and display the data.  Initially, I deployed the project on Azure for public use. Due to costs, it is no longer available on the web, but its source code lives on.",
    highlights: [
      "Successfully led to employment at Richmond Day",
      "Project completed and deployed to Azure within one week",
      "Interactive interface for editing data seamlessly blended into UI",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/We-Sell-Users",
      },
    ],
  },
  {
    title: "Dog Dojo",
    year: "2020",
    status: "complete",
    skills: [
      "VueJS",
      "ASPnet",
      "Csharp",
      "JavaScript",
      "HTML",
      "CSS",
      "AJAX",
      "SQL",
    ],
    description:
      "ASP.NET Core MVC & VueJS e-commerce app simulating a dog purchasing platform.",
    highlights: [
      "Mock e-commerce experience featuring item details, shopping cart, and a checkout page",
      "Dynamic routing for item detail pages",
      "Created a minimalist logo of a dog and that wagged its tail whenever the user hovered over interactive elements",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/Dog-Dojo",
      },
    ],
  },
  {
    title: "Personal Website v1",
    year: "2019",
    status: "complete",
    skills: ["NextJS", "JavaScript", "HTML", "CSS"],
    description:
      "A website I made to learn NextJS, test out GitHub pages, and publicly host a portfolio of my work to market myself as a freelance web developer.",
    highlights: [
      "Designed and built from scratch",
      "Static rendering using NextJS",
      "GitHub pages integration",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/website",
      },
    ],
  },
];

const games: ProjectDetails[] = [
  {
    title: "Dwarf Forges",
    year: "2023",
    status: "in progress",
    skills: [],
    description: "",
    highlights: [],
    links: [],
  },
  {
    title: "Stolen Creation",
    year: "2023",
    status: "in progress",
    skills: [],
    description: "",
    highlights: [],
    links: [],
  },
  {
    title: "Tossed Away",
    year: "2022",
    status: "in progress",
    skills: [],
    description: "",
    highlights: [],
    links: [],
  },
  {
    title: "Blood & Gold",
    year: "2021",
    status: "in progress",
    skills: [],
    description: "",
    highlights: [],
    links: [],
  },
];

export const ProjectsContent = {
  websites,
  games,
};
