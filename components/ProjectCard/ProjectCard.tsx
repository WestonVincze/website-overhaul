import styles from "./ProjectCard.module.css";
import { LinedPaper } from "../LinedPaper";
import { StickyNote } from "../StickyNote";
import { ProjectDetails } from "./types";
import { SkillStickers } from "../SkillStickers";

type ProjectCardProps = ProjectDetails;

export const ProjectCard = ({
  title,
  year,
  status,
  skills,
  description,
  highlights,
  links,
}: ProjectCardProps) => {
  return (
    <LinedPaper style={links && { marginBottom: "100px" }}>
      <section className={styles.header}>
        <h2>
          {title} ({year})
        </h2>
        <h3 className={styles.stamp}>[{status}]</h3>
      </section>
      <SkillStickers skills={skills} />
      <section className={styles.body}>
        <h4>Description</h4>
        <p>{description}</p>
        <h4>Highlights</h4>
        <ul>
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </section>
      <section className={styles.footer}>
        {links?.map((link) => (
          <a href={link.url} target="_blank" rel="noreferrer" key={link.text}>
            <StickyNote text={link.text} icon={link.icon} />
          </a>
        ))}
      </section>
    </LinedPaper>
  );
};
