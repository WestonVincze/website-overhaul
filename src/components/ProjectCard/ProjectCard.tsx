import styles from "./ProjectCard.module.css";
import { LinedPaper } from "../LinedPaper";
import { StickyNote } from "../StickyNote";
import { ProjectDetails } from "./types";
import { SkillStickers } from "../SkillStickers";

interface ProjectCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ProjectDetails {}

export const ProjectCard = ({
  id,
  projectName,
  skills,
  description,
  contributions,
  highlights,
  links,
}: ProjectCardProps) => {
  return (
    <LinedPaper
      id={id}
      title={`${projectName}`}
      style={links && { marginBottom: "80px" }}
    >
      <section>
        <SkillStickers skills={skills} />
      </section>

      <section>
        <h4>Description</h4>
        <p>{description}</p>
      </section>

      {contributions && (
        <section>
          <h4>My Contributions</h4>
          <p>{contributions}</p>
        </section>
      )}

      {highlights && (
        <section>
          <h4>Highlights</h4>
          <ul>
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </section>
      )}

      {links && (
        <nav className={styles.footer}>
          {links.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              key={link.text}
              aria-label={`${link.text} for ${projectName}`}
            >
              <StickyNote text={link.text} icon={link.icon} />
            </a>
          ))}
        </nav>
      )}
    </LinedPaper>
  );
};
