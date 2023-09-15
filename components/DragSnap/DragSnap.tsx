import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

interface DragSnapProps {
  children: JSX.Element
}

export const DragSnap = ({ children }: DragSnapProps): JSX.Element => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
  })
  return (
    <animated.div {...bind()} style={{ x, y }}>
      {children}
    </animated.div>
  )
}
