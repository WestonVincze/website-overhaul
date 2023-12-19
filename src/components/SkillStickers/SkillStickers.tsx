import styles from "./SkillStickers.module.css";
import { IconNames } from "@assets/Icons";
import { StickyNote } from "../StickyNote";
// TODO: implement a form of interactivity (perhaps clicking on / hovering will highlight all relevant skills)
/**
 * add clicked skills to url query params, then force active state on any matching skills
 * this should extend to "skills" section of resume
 * should query params transfer to other pages?
 * how should this feature be communicated to users?
 * should we mark the margins of LinedPaper whenever selected?
 */

/**
 * Accepts a list of `iconNames` to create a grid of StickyNote stickers
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
