import { ResumeContent } from "./ResumeContent";
import { LinedPaper, LinedPaperProps } from "../LinedPaper";
import { PaperStack } from "../PaperStack";

const skillPapers: LinedPaperProps[] = ResumeContent.technicalSkills.map(
  (skillType) => ({
    title: skillType.title,
    children: <>{skillType.skills.map((skill) => skill).join(", ")}</>,
  }),
);

const workExperiencePapers: LinedPaperProps[] =
  ResumeContent.workExperience.map((role) => ({
    title: `${role.title} - ${role.company}`,
    children: (
      <>
        <h4>{`${role.startDate} - ${role.endDate}`}</h4>
        <p>{role.description}</p>
        <ul>
          {role.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </>
    ),
  }));

export const Resume = (): JSX.Element => {
  return (
    <div style={{ textAlign: "left" }}>
      <LinedPaper>{ResumeContent.intro}</LinedPaper>
      <h1>Skills.</h1>
      <PaperStack papers={skillPapers} />
      <h1>Experience.</h1>
      <PaperStack papers={workExperiencePapers} />
      <h1>Education.</h1>
      <LinedPaper
        title={`${ResumeContent.education.program} - ${ResumeContent.education.degree}`}
      >
        <h2>{ResumeContent.education.school}</h2>
        <h4>{`${ResumeContent.education.startDate} - ${ResumeContent.education.endDate}`}</h4>
        <p>{ResumeContent.education.description}</p>
      </LinedPaper>
      <h1>Hobbies</h1>
      <LinedPaper title="Hobbies">
        <ul>
          {ResumeContent.hobbies.map((hobby, i) => (
            <li key={i}>{hobby}</li>
          ))}
        </ul>
      </LinedPaper>
    </div>
  );
};
