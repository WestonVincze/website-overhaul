import React from 'react'
import Head from 'next/head'
import styles from './Header.module.css'

export function Header (): JSX.Element {
  return (
    <div className={styles.sticky}>
      <div className={styles.header}>
        <Head>
          <title>Weston Vincze</title>
        </Head>
        <div className={styles.headerLeft}>
          <h1>Weston Vincze</h1>
        </div>
      </div>
    </div>
  )
}
