import styles from "./ProjectCard.module.css";
import { LinedPaper } from "../LinedPaper";
import { StickyNote } from "../StickyNote";
import { ProjectDetails } from "./types";
import { SkillStickers } from "../SkillStickers";

interface ProjectCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<ProjectDetails, "anchorName"> {}

export const ProjectCard = ({
  id,
  projectName,
  year,
  status,
  skills,
  description,
  contributions,
  highlights,
  links,
  ...props
}: ProjectCardProps) => {
  return (
    <LinedPaper id={id} style={links && { marginBottom: "100px" }} {...props}>
      <header className={styles.header}>
        <h3>{`${projectName} (${year})`}</h3>
        <h3 className={styles.stamp}>{`[${status}]`}</h3>
      </header>

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

      <section>
        <h4>Highlights</h4>
        <ul>
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </section>

      <nav className={styles.footer}>
        {links?.map((link) => (
          <a href={link.url} target="_blank" rel="noreferrer" key={link.text}>
            <StickyNote text={link.text} icon={link.icon} />
          </a>
        ))}
      </nav>
    </LinedPaper>
  );
};
