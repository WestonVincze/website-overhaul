import React from 'react'
import styles from './ContentRow.module.css'

interface ContentRowProps {
  // cols?: number
  children: JSX.Element[]
}

/**
 * Wrapper for displaying content within a row
 * @param cols the number of columns for the content row
 */
export const ContentRow = ({ children, ...props }: ContentRowProps): JSX.Element => {
  return (
    <div className={`${styles.contentRow} ${styles[`col-${'cols'}`]}`} {...props}>
      {children.map(c => c)}
    </div>
  )
}
