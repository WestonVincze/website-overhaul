import React from 'react'
import styles from './FolderBody.module.css'

interface FolderBodyProps {
  margin?: number
  children: JSX.Element
}

export const FolderBody = ({ margin, children }: FolderBodyProps): JSX.Element => {
  return (<div className={styles.folder}>{children}</div>)
}
