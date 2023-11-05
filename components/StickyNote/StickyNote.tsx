import styles from "./StickyNote.module.css";
import { Icons, IconName } from "../Icons";

interface StickyNoteProps {
  text?: string;
  icon?: IconName;
  variant?: "taped" | "sticker";
  size?: "medium" | "small";
}

export const StickyNote = ({
  text,
  icon,
  variant = "taped",
  size = "medium",
}: StickyNoteProps) => {
  return (
    <div className={`${styles.stickyNote} ${styles[variant]} ${styles[size]}`}>
      <div className={styles.content}>{icon && Icons[icon]()}</div>
      {variant === "taped" && (
        <div className={styles.fold}>
          <>{text}</>
        </div>
      )}
    </div>
  );
};
