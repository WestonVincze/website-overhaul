import { ProjectDetails } from "./types";

export const Demos: ProjectDetails[] = [
  {
    projectName: "Scroll Driven Animations",
    category: "demo",
    id: "scroll-driven-animations",
    year: "2023",
    status: "complete",
    skills: ["JavaScript", "HTML", "CSS", "CodeSandbox"],
    subheading: "POC Demo",
    description:
      "A scroll-driven animation demo on CodeSandbox using the Intersection Observer API. Cards animate onto the page as the user scrolls down and when the last card is visible new cards are generated which creates an infinite scroll effect.",
    links: [
      {
        icon: "CodeSandbox",
        text: "Live Demo",
        url: "https://codesandbox.io/p/sandbox/scroll-driven-animated-content-kv3yr9",
      },
    ],
  },
  {
    projectName: "Animated Sprite Sheet",
    category: "demo",
    id: "animated-sprite-sheet",
    year: "2023",
    status: "complete",
    skills: ["JavaScript", "HTML", "CSS", "CodeSandbox"],
    subheading: "POC Demo",
    description:
      "A CodeSandbox demo created as a self-challenge to test weather animating a sprite sheet using only vanilla CSS was possible. I completed the challenge in one night and wrote an article to document my experience.",
    links: [
      {
        icon: "CodeSandbox",
        text: "Live Demo",
        url: "https://codesandbox.io/p/sandbox/animated-sprite-sheet-m2s46x",
      },
      {
        icon: "Eye",
        text: "Read Article",
        url: "https://medium.com/@westonvincze/i-challenged-myself-to-animate-a-sprite-sheet-using-only-js-and-css-3460d30cc818",
      },
    ],
  },
];
