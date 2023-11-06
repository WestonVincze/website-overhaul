import { IconName } from "../Icons";

export type SocialLink = {
  icon: IconName;
  text: string;
  url: string;
};

export type ProjectDetails = {
  title: string;
  year: string;
  status: "in progress" | "complete";
  skills: IconName[];
  description: string;
  highlights: string[];
  links?: SocialLink[];
};
