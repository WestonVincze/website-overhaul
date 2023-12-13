import styles from "./StickyNote.module.css";
import { Icons, IconNames } from "../Icons";

interface StickyNoteProps {
  icon: IconNames;
  text?: string;
  variant?: "taped" | "sticker";
  size?: "medium" | "small";
}

export const StickyNote = ({
  text,
  icon,
  variant = "taped",
  size = "medium",
  ...props
}: StickyNoteProps) => {
  if (!text) {
    text = Icons[icon] ? Icons[icon].title : "";
  }

  return (
    <div
      className={`${styles.stickyNote} ${styles[variant]} ${styles[size]}`}
      {...props}
    >
      <div className={styles.content}>{Icons[icon] && Icons[icon].icon()}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
