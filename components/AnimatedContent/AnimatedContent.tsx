import React, { useState } from 'react'
import { animated, useTrail } from 'react-spring'

interface AnimatedContentProps {
  children: JSX.Element[]
}

/**
 * Animates multiple elements onto the screen in a staggered pattern
 * @param children an array of JSX.Elements to animate
 */
export function AnimatedContent ({ children }: AnimatedContentProps): JSX.Element {
  const [yOffset] = useState(-1 * window.innerHeight)
  const [xOffset] = useState(window.innerWidth)

  const contentTrail = useTrail(children.length, {
    delay: 300,
    from: { y: yOffset, x: xOffset },
    to: { y: 0, x: 0 }
  })

  return (
    <>
      {contentTrail.map((style, i) => (
        <animated.div style={style} key={i}>
          {children[i]}
        </animated.div>
      ))}
    </>
  )
}
