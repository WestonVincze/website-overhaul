import styles from "./ProjectCard.module.css";
import { LinedPaper } from "../LinedPaper";
import { StickyNote } from "../StickyNote";
import { ProjectDetails } from "./types";

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
    <LinedPaper>
      <section className={styles.header}>
        <div>
          <h2>{title}</h2>
          <h3 className={styles.stamp}>[{status}]</h3>
        </div>
        {skills.map((skill, i) => (
          <StickyNote key={i} variant="sticker" icon={skill} size="small" />
        ))}
      </section>
      <section className={styles.body}>
        <h4>{year}</h4>
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
