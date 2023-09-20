import React from 'react'
import styles from './FolderBody.module.css'
import { AnimatedHeading } from '../AnimatedHeading'

interface FolderBodyProps {
  children: JSX.Element
}

export const FolderBody = ({ children }: FolderBodyProps): JSX.Element => {
  return (<div className={styles.folder}>
    <AnimatedHeading />
    {children}
  </div>)
}
