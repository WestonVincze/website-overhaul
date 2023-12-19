import { StickyNote } from "../StickyNote";
import styles from "./SocialIcons.module.css";

export const SocialIcons = () => {
  return (
    <nav className={styles.socialIcons}>
      <a
        href="https://github.com/WestonVincze"
        target="_blank"
        rel="noreferrer"
      >
        <StickyNote size="small" icon="GitHub" text="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/weston-vincze/"
        target="_blank"
        rel="noreferrer"
      >
        <StickyNote size="small" icon="Linkedin" text="linkedin" />
      </a>
      <a
        href="https://codesandbox.io/u/WestonVincze"
        target="_blank"
        rel="noreferrer"
      >
        <StickyNote size="small" icon="CodeSandbox" text="sandbox" />
      </a>
      <a href="mailto:westonvincze@gmail.com" target="_blank" rel="noreferrer">
        <StickyNote size="small" icon="Email" text="email" />
      </a>
    </nav>
  );
};
