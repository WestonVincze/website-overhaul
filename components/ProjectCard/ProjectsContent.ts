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
      "You are currently viewing this project! I created this website using NextJS to act as a hub for my portfolio and resume. The source code is openly available and demonstrates my iterative development style. This project is in active development and improves every day. You can view the project board and git history to see the most recent and upcoming changes.",
    highlights: [
      "Designed project's initial concept using Figma",
      "Hand drawn and programmatic animations with custom SVG",
      "Integrated autodeploy workflow using Vercel",
      "StateMachine integration using XState to track animations and interactions",
      "Animated UI components using react-spring",
      "Component-level CSS modules and custom theme with standardized values using css variables",
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
      "A 'Bad UI Battle' contribution that simulates a login page environment in which the user must purchase 'characters' using a micro-transaction store.",
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
      "Trello",
      "Photoshop",
    ],
    description:
      "I built this application from scratch as part of a take-home challenge that led to my employment at Richmond Day. I built this application using ASP.NET MVC, Entity Framework, and VueJS. I was given mock data in an excel sheet and tasked with designing a database and a full stack application to manage and display the data.",
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
      "Trello",
      "Illustrator",
    ],
    description:
      "I designed and built a mock dog store web application using ASP.net core MVC, C#, Bootstrap, and SQL. Source code available on my GitHub. Though it is no longer live, I did establish an autodeploy pipeline using Azure DevOps. I designed and animated the logo, created the layout, and developed the application as a learning project. This project utilizes the MVC methodology, and features user creation, management, a virtual checkout system, and a form with client/server validation. Data was stored within an SQL database and accessed using controllers built with C# and Entity Framework Core. Views were created using VueJS and provided an interactive layer for users to view and modify data.",
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
    title: "Personal Website",
    year: "2019",
    status: "complete",
    skills: ["NextJS", "JavaScript", "HTML", "CSS", "Trello", "Illustrator"],
    description:
      "A website I created as an avenue to learn NextJS, test out GitHub pages, and publicly host a portfolio of my work to market myself as a freelance web developer.",
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
    skills: ["Unity", "Csharp", "Blender", "Figma"],
    description:
      "Dwarf Forges is a 3D game being built with Untiy and planned to release in 2024. The team consists of 3 developers, 1 artist, 1 sound engineer. My role as a project manager and developer involves creating tickets, assembling meetings, leading collaborative brainstorming sessions, and completing development tasks. Dwarf Forges is a game in which you play as an enchanted forge and must save yourself from a horde of Dwarves who intend to drag you back to their fortress. Smelt down your enemies into metal bars, imbuing them with special effects, and use them to create a variety of unique weapons. Use your crafted weapons to fend off the dwarves until there are none left!",
    highlights: [
      "Physics based movement and object interactions",
      "Third person RTS Camera controls with locked and free roam camera states",
      "Modular, event driven components for managing game states",
      "Custom 3D models created in Blender and concept art sketches",
      "UI mockup and feature planning using Figma and FigJam",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/Dwarf-Forges",
      },
    ],
  },
  /*
  {
    title: "Stolen Creation",
    year: "2023",
    status: "in progress",
    skills: [],
    description: "",
    highlights: [],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/Dog-Dojo",
      },
    ],
  },
  */
  {
    title: "Tossed Away",
    year: "2022",
    status: "complete",
    skills: ["Unity", "Csharp", "Aseprite", "Trello"],
    description:
      "Tossed away was a Submission for the 7DRL Challenge (a one week game jam) in 2022. The team consisted of 2 developers, 2 artists, 1 sound designer, and 1 musician. I was a developer and technical artist for the project. My primary tasks involved implementing animation logic, item interactions, scene management, environment integration, and contributing to the character controller. In Tossed Away, you play as a skeleton who was summoned to fetch a cook book. You use your bones to destroy runic pillars and fend off enemies as you venture through your master's lair. Be careful! Throwing your last bone results in death. Don't make your master send in a replacement...",
    highlights: [
      "Successfully submitted within 7 day time limit and managed to create a playable proof of concept (3 levels)",
      "Unique gameplay mechanic in which the player uses health (bones) as fuel for attacks",
      "Top-down, 2d environment with a cohesive character style that extends to the UI and cursor",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/Roasted-Goblin-Studio/7DRL-Jam/tree/master",
      },
      {
        icon: "Itch",
        text: "Play Game",
        url: "https://roasted-goblin-studios.itch.io/tossed-away",
      },
    ],
  },
  {
    title: "Blood & Gold",
    year: "2021",
    status: "complete",
    skills: ["Unity", "Csharp", "Aseprite", "Trello"],
    description:
      "Blood & Gold is a game built for the 'Metroidvania Month 13' Game Jam. The team consisted of 2 developers, 3 artists, 1 sound designer, and 1 musician. I played a pivotal role in assembling the team and organizing collaborative game design and planning meetings. As a developer I implemented all animation logic, lantern and lighting logic, modular item interaction, health and death mechanics, game state, scene transitions, and I contributed to the character controller and state management. As a technical artist I converted sprite sheets into animations and tile sets, implemented UI and Game Menu, and painted environment using tile sets based on level layout mockup. I also continued the development of the project post-submission and squished bugs, added features, implemented player feedback, improved the player's weapon animations, and created animations for some enemies. Blood & Gold is a game in which you play as a brave cowboy who delves into a forgotten mine that he should have left forgotten. You venture through the mines with a revolver to fend off corrupted enemies and a lantern to light your way. Fend off zombies and mutant insects in order to find the key and unlock the golden gate. Find the foreman and defeat him to earn a special weapon, if you dare. Unlock hidden paths and alternate routes. Defeat the mutant canary to end the mine's corruption and become a hero.",
    highlights: [
      "3100+ page views, 1600+ browser plays, and 180+ downloads on Itch.io",
      "Voted #2 for audio due to its environment-driven soundtrack/SFX and adrenaline fueling boss battle tracks",
      "Live WebGL version and downloads for all operating systems available on Itch.io",
      "All sprite sheets, tile sets, music, SFX, and code were created and owned by team members",
      "Creative UI elements used to convey player states like health, ammo, and light",
      "Challenging gameplay that teaches the player how to play one death at a time",
      "Lantern light mechanics create a time incentive for the player due to limited lantern oil",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/PhillypHenning/Blood-and-Gold-2D-Platformer",
      },
      {
        icon: "Itch",
        text: "Play Game",
        url: "https://roasted-goblin-studios.itch.io/blood-and-gold",
      },
    ],
  },
];

export const ProjectsContent = {
  websites,
  games,
};
