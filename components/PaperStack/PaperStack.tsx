import React, { useEffect, useRef, useState } from 'react'
// import styles from './PaperStack.module.css'
import { LinedPaper, LinedPaperProps } from './LinedPaper/LinedPaper'
import { useTrail, animated } from 'react-spring'

// hook should allow developer to create paper with addPaper()
// hook should return a list of papers
// hook can be used to add and remove elements on the fly (why?)
/*
export function usePaperStack (): JSX.Element {
  function addPaper (paper: LinedPaperProps): JSX.Element {
    return (<LinedPaper {...paper} />)
  }
  return (<></>)
}
*/

// phase 1: animate paper stack into frame from top
// phase 2: animate paper stack out of folder, off screen, then into frame.
// phase 3: reverse animations to put items away and take them out once user scrolls object out of screen from top

export function PaperStack ({ papers }: PaperStackProps): JSX.Element {
  // animations handeled here
  const stackRef = useRef<HTMLDivElement>(null)

  // consider adding AnimationStates as a type
  const [animationState, setAnimationState] = useState<AnimationState>('from-inside')
  // consider changing name (height of stack + window)
  const [stackHeight, setStackHeight] = useState(0)

  // determines how much distance the stack needs to travel in order to be off screen
  // calculation adds extra space (total height + PaperStack height)
  useEffect(() => {
    let height = 0
    if (stackRef?.current?.offsetHeight !== undefined) {
      height = stackRef?.current?.offsetHeight
    }
    // might want to trigger onResize as well
    setStackHeight(-1 * (height + window.innerHeight))
  }, [stackRef])

  useEffect(() => {
    setTimeout(() => {
      setAnimationState('from-top')
    }, 300)
  }, [setAnimationState])

  const animationValues = {
    'from-inside': {
      to: { y: stackHeight, x: 200 },
      from: { y: 0, x: 0 }
    },
    'from-top': {
      to: { y: 0, x: 0 },
      from: { y: stackHeight, x: 200 }
    },
    'from-mid': {
      to: { y: stackHeight, x: 200 },
      from: { y: 0, x: 0 }
    }
  }

  console.log(animationValues[animationState].to)

  // is it dangerous to use "papers.length" and access array directly?
  const paperStackTrail = useTrail(papers.length, {
    config: { mass: 10, tension: 3500, friction: 500 },
    loop: false,
    delay: 500,
    // update to getter function
    // get the height of the paperstack and use it for the y value
    // to: animationState === 'in' ? { y: 0, x: 0 } : { y: stackHeight, x: 200 },
    to: animationValues[animationState].to,
    from: animationValues[animationState].from
  })

  return (<div ref={stackRef}> {
    paperStackTrail.map((styles, i) =>
      (<animated.div
        key={i}
        style={styles}>
        <LinedPaper key={i} {...papers[i]} />
      </animated.div>)
    )
  }</div>)
}

interface PaperStackProps {
  papers: LinedPaperProps[] // change this to use an array of paper props
}

type AnimationState = 'from-inside' | 'from-top' | 'from-mid'
