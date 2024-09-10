import { IconName } from "@assets/Icons";

export type TechnicalSkill = {
  title: string;
  skills: string[];
};

export type WorkExperience = {
  company: string;
  title: string;
  skills: IconName[];
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
};

export type Education = {
  school: string;
  program: string;
  degree: string;
  description: string;
  startDate: string;
  endDate: string;
  highlights: string[];
};

export type Hobby = {
  name: string;
  url?: string;
};

export type ResumeFormat = {
  intro: string;
  workExperience: WorkExperience[];
  technicalSkills: TechnicalSkill[];
  education: Education;
  hobbies: Hobby[];
};
