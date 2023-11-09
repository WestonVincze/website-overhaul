import styles from "./SkillStickers.module.css";
import { IconNames } from "../Icons";
import { StickyNote } from "../StickyNote";

/**
 * Accepts a list of iconNames to create an array of StickyNote stickers
 */
interface SkillStickersProps {
  skills: IconNames[];
}

export const SkillStickers = ({ skills }: SkillStickersProps) => {
  return (
    <div className={styles.skillStickers}>
      {skills.map((icon, i) => (
        <StickyNote key={i} variant="sticker" icon={icon} size="small" />
      ))}
    </div>
  );
};
