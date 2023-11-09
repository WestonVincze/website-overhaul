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
      "ReactSpring",
      "Jest",
    ],
    description:
      "Revamping my old NextJS website with TypeScript integration, react-spring, new custom assets, and a 'fractal modlet' architecture pattern.",
    highlights: ["", "", "", ""],
    links: [
      {
        icon: "Github",
        text: "GitHub",
        url: "https://github.com/WestonVincze/website-overhaul",
      },
      {
        icon: "Github",
        text: "GitHub Projects",
        url: "https://github.com/users/WestonVincze/projects/1",
      },
    ],
  },
  {
    title: "Micro-Transaction Login Page",
    year: "2023",
    status: "in progress",
    skills: [],
    description: "",
    highlights: [],
    links: [],
  },
  {
    title: "Wedding Website",
    year: "2021",
    status: "complete",
    skills: [],
    description: "",
    highlights: [],
    links: [],
  },
  {
    title: "We Sell Users",
    year: "2020",
    status: "complete",
    skills: [],
    description: "",
    highlights: [],
    links: [],
  },
  {
    title: "Dog Dojo",
    year: "2020",
    status: "complete",
    skills: [],
    description: "",
    highlights: [],
    links: [],
  },
  {
    title: "Personal Website v1",
    year: "2019",
    status: "complete",
    skills: [],
    description: "",
    highlights: [],
    links: [],
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
