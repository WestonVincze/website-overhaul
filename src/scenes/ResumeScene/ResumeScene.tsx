import { Container } from "@components/Container";
import { ResumeContent } from "./ResumeContent";
import { LinedPaper } from "@components/LinedPaper";
import { SkillStickers } from "@components/SkillStickers";
import styles from "./ResumeScene.module.css";
import { StickyNote } from "@components/StickyNote";
import { HighlightedHeading } from "@components/HighlightedHeading";

export const ResumeScene = () => {
  return (
    <Container>
      <article className={styles.resume}>
        <header className={styles.stickyNotes}>
          <a href="/images/WestonVinczeResume.pdf" download>
            <StickyNote icon="Download" text="Download" />
          </a>
          <a href="/images/WestonVinczeResume.pdf" target="_blank">
            <StickyNote icon="Eye" text="View" />
          </a>
        </header>

        <section>
          <HighlightedHeading id="summary" text="Summary." />
          <LinedPaper>
            <p>{ResumeContent.intro}</p>
          </LinedPaper>
        </section>

        <section>
          <HighlightedHeading id="skills" text="Skills." />
          {ResumeContent.technicalSkills.map((skillType, i) => (
            <LinedPaper key={i} title={skillType.title}>
              <ul className={styles.skills}>
                {skillType.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </LinedPaper>
          ))}
        </section>

        <section>
          <HighlightedHeading id="experience" text="Experience." />
          {ResumeContent.workExperience.map((role, i) => (
            <LinedPaper key={i} title={role.title}>
              <header>
                <h4>{role.company}</h4>
                <p>{`${role.startDate} - ${role.endDate}`}</p>
              </header>

              <section>
                <SkillStickers skills={role.skills} />
              </section>

              <section>
                <p>{role.description}</p>
              </section>

              <section>
                <ul>
                  {role.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </section>
            </LinedPaper>
          ))}
        </section>

        <section>
          <HighlightedHeading id="education" text="Education." />
          <LinedPaper
            title={`${ResumeContent.education.program} (${ResumeContent.education.degree})`}
          >
            <header>
              <h3>{ResumeContent.education.school}</h3>
              <h4>{`${ResumeContent.education.startDate} - ${ResumeContent.education.endDate}`}</h4>
            </header>

            <section>
              <p>{ResumeContent.education.description}</p>
            </section>

            <section>
              <ul>
                {ResumeContent.education.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </section>
          </LinedPaper>
        </section>

        <section>
          <HighlightedHeading id="hobbies" text="Hobbies." />
          <LinedPaper>
            <ul className={styles.hobbies}>
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
      </article>
    </Container>
  );
};
