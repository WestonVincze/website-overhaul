import React, { useState } from "react";
import style from "./FolderTabs.module.css";
import { FolderTab, FolderTabProps } from "./FolderTab";
import { PaperPreview } from "./PaperPreview";
import { useRouter } from "next/router";

/**
 * @param tabs
 */
export const FolderTabs = ({
  tabs,
  ...props
}: FolderTabsProps): JSX.Element => {
  const router = useRouter();
  const currentPage = router.pathname.split("").splice(1).join("");

  const [activeTab, setActiveTab] = useState(
    currentPage === "" ? "home" : currentPage,
  );
  const [hoverTab, setHoverTab] = useState("");

  function handleClick(id: string): void {
    if (activeTab === id) return;
    setActiveTab(id);
  }

  function handleHover(id: string): void {
    setHoverTab(id);
  }

  return (
    <div className={style.folderTabs} {...props}>
      {tabs.map((tab, i) => (
        <React.Fragment key={i}>
          <PaperPreview
            hovering={hoverTab === tab.id && hoverTab !== activeTab}
            active={tab.id === activeTab}
            key={i}
          />
          <span
            onClick={() => handleClick(tab.id)}
            onMouseEnter={() => handleHover(tab.id)}
            onMouseLeave={() => handleHover("")}
            style={{ zIndex: i }}
            key={tab.id}
          >
            <FolderTab
              id={tab.id}
              path={tab.path}
              text={tab.text}
              isActive={activeTab === tab.id}
              key={tab.id}
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
