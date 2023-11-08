import styles from "./FolderBody.module.css";
import { AnimatedHeading } from "../AnimatedHeading";

interface FolderBodyProps {
  children: React.ReactNode;
}

export const FolderBody = ({ children }: FolderBodyProps) => {
  return (
    <div className={styles.folder}>
      <AnimatedHeading />
      {children}
    </div>
  );
};
