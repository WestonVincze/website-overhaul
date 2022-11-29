import React from 'react'
import style from './FolderTabs.module.css'
import { FolderTab, FolderTabProps } from './FolderTab/FolderTab'

/**
 * @param tabs
 */
export function FolderTabs ({ tabs, ...props }: FolderTabsProps): JSX.Element {
  return (
    <div className={style.folderTabs} {...props}> {
      tabs.map((tab, i) =>
        <FolderTab path={tab.path} text={tab.text} key={i} />
      )}
    </div>)
}

interface FolderTabsProps {
  tabs: FolderTabProps[]
}

// create type folderTabProps or similar
// should there be a folderTab component?
