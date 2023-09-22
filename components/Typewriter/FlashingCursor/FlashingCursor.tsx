import React from 'react'
import { useSpring, animated } from 'react-spring'

interface FlashingCursorProps {
  cursor?: string
  toggle: boolean
}

export const FlashingCursor = ({ cursor = '|', toggle }: FlashingCursorProps): JSX.Element => {
  const animatedStyle = useSpring({
    duration: 500,
    from: { opacity: 1 },
    to: { opacity: 0 },
    loop: { reverse: true }
  })
  return (<animated.span style={toggle ? animatedStyle : {}}>{cursor}</animated.span>)
}
