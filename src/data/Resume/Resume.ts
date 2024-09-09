import type { ResumeFormat } from "./types";
import { education } from "./Education";
import { hobbies } from "./Hobbies";
import { technicalSkills } from "./TechnicalSkills";
import { workExperience } from "./WorkExperience";

const intro =
  "I am a self-driven frontend web developer backed by over 5 years of professional experience. I specialize in JavaScript, including a plethora of libraries and frameworks, with a strong proficiency in React and TypeScript.";

export const Resume: ResumeFormat = {
  intro,
  technicalSkills,
  workExperience,
  education,
  hobbies,
};
