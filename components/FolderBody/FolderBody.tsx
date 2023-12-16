import styles from "./FolderBody.module.css";
import { AnimatedHeading } from "../AnimatedHeading";

interface FolderBodyProps {
  children: React.ReactNode;
}

export const FolderBody = ({ children, ...props }: FolderBodyProps) => {
  return (
    <main className={styles.folder} {...props}>
      <AnimatedHeading />
      {children}
    </main>
  );
};
