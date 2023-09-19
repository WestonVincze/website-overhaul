import React from 'react'
import { useSpring, animated } from 'react-spring'

interface PathProps {
  stroke: string
  fill: string
  d: string
  transform?: string
}

export const Path = ({ stroke, fill, d, transform = 'translate(0,0)' }: PathProps): JSX.Element => {
  const animatedStyle = useSpring({
    from: { opacity: 0.5 },
    to: { opacity: 1 },
    loop: { reverse: true }
  })
  return (
    <animated.path style={{
      stroke,
      fill,
      strokeWidth: '0',
      strokeDasharray: 'none',
      strokeLinecap: 'butt',
      strokeDashoffset: '0',
      strokeLinejoin: 'miter',
      strokeMiterlimit: '4',
      fillRule: 'nonzero',
      ...animatedStyle
    }}
    transform={transform}
    d={d}
    strokeLinecap = "round"
    />)
}
