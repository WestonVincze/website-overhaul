import React, { useState } from 'react'
import style from './FolderTab.module.css'
import { animated, useSpring } from 'react-spring'
import Link from 'next/link'

export function FolderTab ({ path, text, ...props }: FolderTabProps): JSX.Element {
  const [isTargeted, setIsTargeted] = useState(false)
  // repeated code, extract into shared component
  function onMouseEnter (): void {
    if (isTargeted) return
    setIsTargeted(true)
  }

  function onMouseLeave (): void {
    if (!isTargeted) return
    setIsTargeted(false)
  }

  const animatedStyle = useSpring({
    loop: { reverse: true },
    y: isTargeted ? '0' : '7px'
  })

  return (<>
    <animated.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={animatedStyle}>
      <Link href={path} className={style.folderTab}>
        {text}
      </Link>
    </animated.div>
  </>)
}

export interface FolderTabProps {
  path: string
  text: string
}
