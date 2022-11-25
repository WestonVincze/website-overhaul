import React from 'react'
import styles from './Container.module.css'

export function Container ({ children, centered = true }: ContainerProps): JSX.Element {
  return (
    <div className={`${styles.container} ${centered ? 'text-center' : ''}`}>
      {children}
    </div>
  )
}

interface ContainerProps {
  children?: any
  centered?: boolean
}
