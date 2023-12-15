import { Container } from "@/components/Container";
import { AnimatedContent } from "@/components/AnimatedContent";
import { ResumeContent } from "./ResumeContent";
import { LinedPaper, LinedPaperProps } from "@/components/LinedPaper";
import { SkillStickers } from "@/components/SkillStickers";
import styles from "./ResumeScene.module.css";
import { StickyNote } from "@/components/StickyNote";
import { PaperStack } from "@/components/PaperStack";

const skillPapers: LinedPaperProps[] = ResumeContent.technicalSkills.map(
  (skillType) => ({
    title: skillType.title,
    children: <p>{skillType.skills.map((skill) => skill).join(", ")}</p>,
  }),
);

const workExperiencePapers: LinedPaperProps[] =
  ResumeContent.workExperience.map((role) => ({
    title: `${role.title} - ${role.company}`,
    children: (
      <>
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

export const ResumeScene = () => {
  return (
    <Container>
      <article className={styles.resume}>
        <AnimatedContent>
          <header className={styles.stickyNotes}>
            <a href="/images/WestonVinczeResume.pdf" download>
              <StickyNote icon="Download" text="Download" />
            </a>
            <a href="/images/WestonVinczeResume.pdf" target="_blank">
              <StickyNote icon="Eye" text="View" />
            </a>
          </header>

          <section>
            <h2>Summary.</h2>
            <LinedPaper>
              <p>{ResumeContent.intro}</p>
            </LinedPaper>
          </section>

          <section>
            <h2>Skills.</h2>
            <PaperStack papers={skillPapers} />
          </section>

          <section>
            <h2>Experience.</h2>
            <PaperStack papers={workExperiencePapers} />
          </section>

          <section>
            <h2>Education.</h2>
            <LinedPaper
              title={`${ResumeContent.education.program} - ${ResumeContent.education.degree}`}
            >
              <h3>{ResumeContent.education.school}</h3>
              <h4>{`${ResumeContent.education.startDate} - ${ResumeContent.education.endDate}`}</h4>
              <p>{ResumeContent.education.description}</p>
              <ul>
                {ResumeContent.education.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </LinedPaper>
          </section>

          <section>
            <h2>Hobbies.</h2>
            <LinedPaper>
              <ul className={styles.columns}>
                {ResumeContent.hobbies.map((hobby, i) => (
                  <li key={i}>
                    {hobby.url ? (
                      <a href={hobby.url} target="_blank">
                        {hobby.name}
                      </a>
                    ) : (
                      hobby.name
                    )}
                  </li>
                ))}
              </ul>
            </LinedPaper>
          </section>
        </AnimatedContent>
      </article>
    </Container>
  );
};
