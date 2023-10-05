import { StickyNote } from "../StickyNote";
import styles from "./SocialIcons.module.css";

export const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <a
        href="https://github.com/WestonVincze"
        target="_blank"
        rel="noreferrer"
      >
        <StickyNote size="small" icon="Github" />
      </a>
      <a
        href="https://www.linkedin.com/in/weston-vincze/"
        target="_blank"
        rel="noreferrer"
      >
        <StickyNote size="small" icon="Linkedin" />
      </a>
      <a href="mailto:westonvincze@gmail.com" target="_blank" rel="noreferrer">
        <StickyNote size="small" icon="Email" />
      </a>
    </div>
  );
};
