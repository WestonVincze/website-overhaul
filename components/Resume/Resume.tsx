import styles from "./Resume.module.css";
import { ResumeContent } from "./ResumeContent";
import { LinedPaper, LinedPaperProps } from "../LinedPaper";
import { PaperStack } from "../PaperStack";
import { StickyNote } from "../StickyNote";
import { SkillStickers } from "../SkillStickers";

const skillPapers: LinedPaperProps[] = ResumeContent.technicalSkills.map(
  (skillType) => ({
    children: (
      <>
        <h2>{skillType.title}</h2>
        <p>{skillType.skills.map((skill) => skill).join(", ")}</p>
      </>
    ),
  }),
);

const workExperiencePapers: LinedPaperProps[] =
  ResumeContent.workExperience.map((role) => ({
    title: role.title,
    children: (
      <>
        <h3>{role.company}</h3>
        <h4>{`${role.startDate} - ${role.endDate}`}</h4>
        <SkillStickers skills={role.skills} />
        <p>{role.description}</p>
        <ul>
          {role.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </>
    ),
  }));

export const Resume = () => (
  <div className={styles.resume}>
    <div className={styles.stickyNotes}>
      <a href="/images/WestonVinczeResume.pdf" download>
        <StickyNote icon="PDF" text="Download" size="small" />
      </a>
      <a href="/images/WestonVinczeResume.pdf" target="_blank">
        <StickyNote icon="PDF" text="View" size="small" />
      </a>
    </div>
    <h1>Summary.</h1>
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
      <ul>
        <li>Made the dean&apos;s list and graduated with honors</li>
      </ul>
    </LinedPaper>
    <h1>Hobbies.</h1>
    <LinedPaper>
      <ul className={styles.columns}>
        {ResumeContent.hobbies.map((hobby, i) => (
          <li key={i}>{hobby}</li>
        ))}
      </ul>
    </LinedPaper>
  </div>
);
