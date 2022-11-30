import React, { useState } from 'react'
import style from './FolderTabs.module.css'
import { FolderTab, FolderTabProps } from './FolderTab/FolderTab'

/**
 * @param tabs
 */
export function FolderTabs ({ tabs, ...props }: FolderTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('')

  function handleClick (id: string): void {
    if (activeTab === id) return
    setActiveTab(id)
  }

  return (
    <div className={style.folderTabs} {...props}> {
      tabs.map((tab) =>
        <span onClick={() => handleClick(tab.id)} key={tab.id}>
          <FolderTab
            id={tab.id}
            path={tab.path}
            text={tab.text}
            isActive={activeTab === tab.id}
            key={tab.id} />
        </span>
      )}
    </div>)
}

interface FolderTabsProps {
  tabs: FolderTabProps[]
}
