import { FolderTabs } from "@components/FolderTabs";
import styles from "./Heading.module.css";
import { SocialIcons } from "@components/SocialIcons";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <FolderTabs
        tabs={[
          { path: "/", text: "Home" },
          { path: "/resume", text: "Resume" },
          { path: "/projects", text: "Projects" },
        ]}
      />
      <SocialIcons />
    </header>
  );
};
