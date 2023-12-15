import styles from "./SkillStickers.module.css";
import { IconNames } from "../Icons";
import { StickyNote } from "../StickyNote";

/**
 * Accepts a list of `iconNames` to create a grid of StickyNote stickers
 */
interface SkillStickersProps {
  skills: IconNames[];
}

export const SkillStickers = ({ skills }: SkillStickersProps) => {
  // TODO: implement a form of interactivity (perhaps clicking on / hovering will highlight all relevant skills)
  return (
    <div className={styles.skillStickers}>
      {skills.map((icon, i) => (
        <StickyNote key={i} variant="sticker" icon={icon} size="small" />
      ))}
    </div>
  );
};
