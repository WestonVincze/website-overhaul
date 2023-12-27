import { IconName } from "@assets/Icons";

export type SocialLink = {
  icon: IconName;
  text: string;
  url: string;
};

export type ProjectDetails = {
  projectName: string;
  id?: string;
  year?: string;
  status?: "in progress" | "complete";
  skills: IconName[];
  description: string;
  contributions?: string;
  highlights?: string[];
  links?: SocialLink[];
};
