import React from 'react'
import styles from './Button.module.css'
import Link from 'next/link'
import { ButtonVariants } from './types'

export function Button ({ path, variant, children }: ButtonProps): JSX.Element {
  const buttonStyle = variant != null ? styles[variant] : styles.primary

  return (
    <Link href={path}>
      <a className={`${styles.button} ${buttonStyle}`}>
        {children}
      </a>
    </Link>
  )
}

interface ButtonProps {
  path: string
  variant?: ButtonVariants
  children?: any
}
