import { IconNames } from "../Icons";

export type SocialLink = {
  icon: IconNames;
  text: string;
  url: string;
};

export type ProjectDetails = {
  title: string;
  year: string;
  status: "in progress" | "complete";
  skills: IconNames[];
  description: string;
  highlights: string[];
  links?: SocialLink[];
};
