import React from 'react'
import Head from 'next/head'
import styles from './Header.module.css'

// - navigation tabs
// - my name (smaller on non-index pages)
export function Header (): JSX.Element {
  return (
    <div className={styles.sticky}>
      <div className={styles.header}>
        <Head>
          <title>Weston Vincze</title>
        </Head>
      </div>
    </div>
  )
}
