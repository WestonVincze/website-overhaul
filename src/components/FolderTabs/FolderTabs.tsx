import React, { useState } from "react";
import styles from "./FolderTabs.module.css";
import { PaperPreview } from "./PaperPreview";
import { usePathname } from "next/navigation";
import Link from "next/link";

export interface FolderTab {
  path: string;
  text?: string;
  isActive?: boolean;
}
interface FolderTabsProps {
  tabs: FolderTab[];
}

export const FolderTabs = ({ tabs, ...props }: FolderTabsProps) => {
  const currentPage = usePathname();

  const [activeTab, setActiveTab] = useState(currentPage);
  const [hoverTab, setHoverTab] = useState("");

  function handleClick(path: string): void {
    if (activeTab === path) return;
    setActiveTab(path);
  }

  function handleHover(path: string): void {
    setHoverTab(path);
  }

  return (
    <nav className={styles.folderTabs} {...props}>
      {tabs.map((tab, i) => (
        <React.Fragment key={i}>
          <PaperPreview
            hovering={hoverTab === tab.path && hoverTab !== activeTab}
            active={tab.path === activeTab}
            key={i}
          />
          <Link
            className={`${styles.folderTab} ${
              tab.path === activeTab ? styles.active : ""
            }`}
            href={tab.path}
            aria-label={tab.text}
            onFocus={() => handleHover(tab.path)}
            onBlur={() => handleHover("")}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleClick(tab.path);
              }
            }}
          >
            <span
              onClick={() => handleClick(tab.path)}
              onMouseEnter={() => handleHover(tab.path)}
              onMouseLeave={() => handleHover("")}
              aria-hidden="true"
            >
              {tab.text}
            </span>
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};
