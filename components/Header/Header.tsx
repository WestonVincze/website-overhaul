import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button } from '../Button'
import styles from './Header.module.css'

export function Header (): JSX.Element {
  return (
    <div className={styles.sticky}>
      <div className={styles.header}>
        <Head>
          <title>Weston Vincze</title>
          <link rel="icon" href="/images/PFP_Logo.jpg" /> { /* Update with proper favicon */ }
        </Head>
        <div className={styles.headerLeft}>
          <h1>Weston Vincze</h1>
        </div>
        <div className={styles.headerLogo}>
          <Link legacyBehavior href="/">
            <a>
              <img
                src="/images/PFP_Logo.jpg"
                className="img-round"
                alt="Portraits For Paws Logo"
                width="150px"
                height="150px"
              />
            </a>
          </Link>
        </div>
        <div className={styles.headerRight}>
          <Button path="/pricing" variant="navButton"><span>Pricing</span></Button>
          <Button path="/gallery" variant="navButton"><span>Gallery</span></Button>
          <Button path="/rescues" variant="navButton"><span>Rescues</span></Button>
          {/*
          <Button path="https://www.instagram.com/portraitsforpaws/" variant="navIcon"><
          </Button>
          <Button path="mailto:jyothsna.v@hotmail.com" variant="navIcon">
            <Icon type="envelope" />
          </Button>
        */}
        </div>
      </div>
    </div>
  )
}
