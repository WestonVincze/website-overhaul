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
  const [z, setZ] = useState(-1);

  function handleClick(id: string, z: number): void {
    if (activeTab === id) return;
    setActiveTab(id);
    setZ(z);
  }

  function handleHover(id: string, z: number): void {
    setHoverTab(id);
    setZ(z);
  }

  return (
    <div className={style.folderTabs} {...props}>
      {tabs.map((tab, i) => (
        <div key={i}>
          <PaperPreview
            hovering={hoverTab === tab.id && hoverTab !== activeTab}
            active={tab.id === activeTab}
            z={z}
            key={i}
          />
          <span
            onClick={() => handleClick(tab.id, i)}
            onMouseEnter={() => handleHover(tab.id, i)}
            onMouseLeave={() => handleHover("", -1)}
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
        </div>
      ))}
    </div>
  );
};

interface FolderTabsProps {
  tabs: FolderTabProps[];
}
