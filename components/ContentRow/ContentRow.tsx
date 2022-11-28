import React from 'react'
import styles from './ContentRow.module.css'

/**
 * Wrapper for displaying content within a row
 * @param cols the number of columns for the content row
 */
export function ContentRow ({ children, ...props }: ContentRowProps): JSX.Element {
  return (
    <div className={`${styles.contentRow} ${styles[`col-${'cols'}`]}`} {...props}>
      {children.map(c => c)}
    </div>
  )
}

interface ContentRowProps {
  // cols?: number
  children: JSX.Element[]
}
