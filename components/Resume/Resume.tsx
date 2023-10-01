import { ResumeContent } from "./ResumeContent";

const workExperience = ResumeContent.workExperience
  .map((job) => {
    // return a string of the work experience
    return job.description;
  })
  .join("");

export const Resume = (): JSX.Element => {
  return <></>;
};

// create a card for each section of the resume
// split them into their own files later
// update linedPaper and PaperStack to be more reusable and have better styling
