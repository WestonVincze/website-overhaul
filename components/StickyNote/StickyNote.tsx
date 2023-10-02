import styles from "./StickyNote.module.css";
import {
  ReactIcon,
  GithubIcon,
  LinkedInIcon,
  EmailIcon,
  DownloadIcon,
} from "../Icons";
// transparent tape
// core body
// icon and text variants
// medium and tiny sizes

// should this accept any content..?

interface StickyNoteProps {
  text?: string;
  variant?: "taped" | "sticker";
  size?: "medium" | "small";
}

export const StickyNote = ({
  text,
  variant = "taped",
  size = "medium",
}: StickyNoteProps) => {
  return (
    <div className={`${styles.stickyNote} ${styles[variant]} ${styles[size]}`}>
      {text && text}
      <DownloadIcon />
    </div>
  );
};
