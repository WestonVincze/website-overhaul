import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import style from './AnimatedLetter.module.css'

/**
 * Creates a letter that can be manipulated by user
 * @param letter the letter to be animated
 */
export function AnimatedLetter ({ letter }: AnimatedLetterProps): JSX.Element {
  // on hover and click certain events can occur
  const [isTargeted, setIsTargeted] = useState(false)
  // const [click, setClick] = useState(false)

  /*
  useEffect(() => {
    if (isTargeted) return

  }, [isTargeted])
  */

  function onMouseEnter (): void {
    if (isTargeted) return
    setIsTargeted(true)
  }

  function onMouseLeave (): void {
    if (!isTargeted) return
    setIsTargeted(false)
  }

  /*
  function onClick (): void {
    // pulse animation
  }
  */

  const animatedStyle = useSpring({
    loop: { reverse: true },
    transform: isTargeted ? 'rotate(15deg)' : 'rotate(0deg)'
  })

  return (
    <animated.div
      className={style.animatedLetter}
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
      style={animatedStyle}>
      {letter}
    </animated.div>
  )
}

interface AnimatedLetterProps {
  letter: string
}
