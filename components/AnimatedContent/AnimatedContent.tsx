import React from 'react'
import { animated, useTrail } from 'react-spring'

const DELAY_FACTOR = 300

interface AnimatedContentProps {
  children: JSX.Element[]
}

/**
 * Animates multiple elements onto the screen in a staggered pattern
 * @param children an array of JSX.Elements to animate
 */
export function AnimatedContent ({ children }: AnimatedContentProps): JSX.Element {
  const contentTrail = useTrail(children.length, {
    delay: DELAY_FACTOR,
    config: { mass: 25, tension: 2000, friction: 500 },
    from: { y: '-15vh', x: '100vw' },
    to: { y: '0%', x: '0%' }
  })

  return (
    <>
      {contentTrail.map((style, i) => (
        <animated.div key={i} style={style}>
          {children[i]}
        </animated.div>
      ))}
    </>
  )
}
