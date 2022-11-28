import React from 'react'
import styles from './Container.module.css'

export function Container ({ children, centered = true, ...props }: ContainerProps): JSX.Element {
  return (
    <div className={`${styles.container} ${centered ? 'text-center' : ''}`} {...props}>
      {children}
    </div>
  )
}

interface ContainerProps {
  children?: JSX.Element
  centered?: boolean
}
