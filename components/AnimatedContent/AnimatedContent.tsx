import React, { useEffect, useRef, useState } from 'react'
import { animated, useTrail } from 'react-spring'

// animated content acts as a wrapper component for page content that
// will be animated in and out of the scene

export function AnimatedContent ({ children }: AnimatedContentProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)
  const [animationState, setAnimationState] = useState<AnimationState>('from-inside')
  const [yOffset, setYOffset] = useState(0)

  // calculates yOffset based on container and window height
  useEffect(() => {
    let height = 0
    if (containerRef?.current?.offsetHeight !== undefined) {
      height = containerRef?.current?.offsetHeight
    }
    // we may want to trigger onResize as well
    setYOffset(-1 * (height + window.innerHeight))
  }, [yOffset])

  useEffect(() => {
    setTimeout(() => {
      setAnimationState('from-top')
    }, 600)
  })

  const animationValues = {
    'from-inside': {
      to: { y: yOffset, x: 200 },
      from: { y: 0, x: 0 }
    },
    'from-top': {
      to: { y: 0, x: 0 },
      from: { y: yOffset, x: 200 }
    },
    'from-mid': {
      to: { y: yOffset, x: 200 },
      from: { y: 0, x: 0 }
    }
  }

  const contentTrail = useTrail(children.length, {
    config: { mass: 10, tension: 3500, friction: 500 },
    delay: 500,
    to: animationValues[animationState].to,
    from: animationValues[animationState].from
  })

  return (
    <div ref={containerRef}>
      {contentTrail.map((style, i) => (
        <animated.div style={style} key={i}>
          {children[i]}
        </animated.div>
      ))}
    </div>
  )
}

interface AnimatedContentProps {
  children: JSX.Element[]
}

type AnimationState = 'from-inside' | 'from-top' | 'from-mid'
