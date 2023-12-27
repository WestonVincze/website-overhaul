import { FolderTabs } from "@components/FolderTabs";
import styles from "./Heading.module.css";
import { SocialIcons } from "@components/SocialIcons";
import { DarkModeSwitch } from "@components/DarkModeSwitch";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <span className={styles.buttons}>
        <DarkModeSwitch />
        <SocialIcons />
      </span>
      <span className={styles.tabs}>
        <FolderTabs
          tabs={[
            { path: "/", text: "Home" },
            { path: "/resume", text: "Resume" },
            { path: "/projects", text: "Projects" },
          ]}
        />
      </span>
    </header>
  );
};
