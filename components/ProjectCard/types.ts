import { IconNames } from "../Icons";

export type SocialLink = {
  icon: IconNames;
  text: string;
  url: string;
};

export type ProjectDetails = {
  projectName: string;
  anchorTag?: string;
  year: string;
  status: "in progress" | "complete";
  skills: IconNames[];
  description: string;
  contributions?: string;
  highlights: string[];
  links?: SocialLink[];
};
