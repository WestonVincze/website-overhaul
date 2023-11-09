import styles from "./StickyNote.module.css";
import { Icons, IconNames } from "../Icons";

interface StickyNoteProps {
  text?: string;
  icon: IconNames;
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
    <div
      className={`${styles.stickyNote} ${styles[variant]} ${styles[size]}`}
      aria-label={Icons[icon] ? Icons[icon]?.ariaLabel : "Sticky Note Graphic"}
    >
      <div className={styles.content}>{Icons[icon] && Icons[icon].icon()}</div>
      {(variant === "taped" || text) && (
        <div className={styles.text}>{text}</div>
      )}
    </div>
  );
};
