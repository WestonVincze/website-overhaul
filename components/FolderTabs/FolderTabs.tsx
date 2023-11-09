import React, { useState } from "react";
import style from "./FolderTabs.module.css";
import { FolderTab, FolderTabProps } from "./FolderTab";
import { PaperPreview } from "./PaperPreview";
import { usePathname } from "next/navigation";

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
    <div className={style.folderTabs} {...props}>
      {tabs.map((tab, i) => (
        <React.Fragment key={i}>
          <PaperPreview
            hovering={hoverTab === tab.path && hoverTab !== activeTab}
            active={tab.path === activeTab}
            key={i}
          />
          <span
            onClick={() => handleClick(tab.path)}
            onMouseEnter={() => handleHover(tab.path)}
            onMouseLeave={() => handleHover("")}
          >
            <FolderTab
              path={tab.path}
              text={tab.text}
              isActive={activeTab === tab.path}
            />
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

interface FolderTabsProps {
  tabs: FolderTabProps[];
}
