import React, { useState } from 'react'
import Link from 'next/link'
import style from './FolderTab.module.css'
import { animated, useSpring } from 'react-spring'

export interface FolderTabProps {
  id: string
  path: string
  text?: string
  isActive?: boolean
}

const FolderTab = ({ path, text, isActive = false, ...props }: FolderTabProps): JSX.Element => {
  const [isTargeted, setIsTargeted] = useState(false)

  const onMouseEnter = (): void => {
    if (isTargeted) return
    setIsTargeted(true)
  }

  const onMouseLeave = (): void => {
    if (!isTargeted) return
    setIsTargeted(false)
  }

  const animatedStyle = useSpring({
    loop: { reverse: true },
    y: isTargeted || isActive ? '0' : '7px'
  })

  return (
    <animated.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={animatedStyle}
      {...props}>
      <Link
        href={path}
        className={`${style.folderTab} ${isActive ? style.active : ''} ${text == null ? style.blankTab : ''}`} >
        {text}
      </Link>
    </animated.div>
  )
}

export default FolderTab
