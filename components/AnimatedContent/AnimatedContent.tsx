import React from 'react'
import { animated, useTrail } from 'react-spring'
import { useAppState } from '../AppStateProvider'
import { useSelector } from '@xstate/react'

const DELAY_FACTOR = 500

interface AnimatedContentProps {
  children: JSX.Element[] | JSX.Element
}

/**
 * Animates multiple elements onto the screen in a staggered pattern
 * @param children an array of JSX.Elements to animate
 */
export const AnimatedContent = ({ children }: AnimatedContentProps): JSX.Element => {
  const content = Array.isArray(children) ? children : [children]

  const { appState, isReady } = useAppState()
  const introDone = useSelector(appState, isReady)

  const contentTrail = useTrail(content.length, {
    delay: DELAY_FACTOR,
    config: { mass: 25, tension: 2000, friction: 500 },
    from: { y: '-15vh', x: '100vw' },
    to: introDone && { y: '0%', x: '0%' }
  })

  return (
    <>
      {contentTrail.map((style, i) => (
        <animated.div key={i} style={style}>
          {content[i]}
        </animated.div>
      ))}
    </>
  )
}
