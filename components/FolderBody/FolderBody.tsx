import React from 'react'
import styles from './FolderBody.module.css'

export function FolderBody ({ margin, children }: FolderBodyProps): JSX.Element {
  // folder colored container
  // margin options
  return (<div className={styles.folder}>{children}</div>)
}

interface FolderBodyProps {
  margin?: number
  children: JSX.Element
}
