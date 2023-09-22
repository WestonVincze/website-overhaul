import React, { useState } from 'react'
import styles from '../Drag.module.css'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { DragProps } from '../types'

export const DragSnap = ({ children, preventDefault = true }: DragProps): JSX.Element => {
  const [{ x, y, scale }, api] = useSpring(() => ({ x: 0, y: 0, scale: 1 }))
  const [active, setActive] = useState(false)

  const bind = useDrag(({ active, event, down, movement: [mx, my] }) => {
    if (preventDefault) event.preventDefault()
    setActive(active)
    api.start({
      x: down ? mx : 0,
      y: down ? my : 0,
      scale: active ? 1.2 : 1,
      immediate: (k) => k !== 'scale' && active
    })
  })

  return (
    <animated.span className={`${styles.draggable} ${active ? styles.active : ''}`} {...bind()} style={{ x, y, scale, display: 'inline-block' }}>
      {children}
    </animated.span>
  )
}
