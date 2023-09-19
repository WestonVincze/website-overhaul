import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import style from './AnimatedLetter.module.css'
import { DragSnap } from '../Drag/DragSnap'

const ROTATION_THRESHOLD = 15

interface AnimatedLetterProps {
  letter: string
}

type rotateDirection = 'left' | 'right'

const rotateAngle = (direction: rotateDirection): string => {
  return `${direction === 'left' ? '-' : ''}${ROTATION_THRESHOLD}`
}

/**
 * Creates a letter that can be manipulated by user
 * @param letter the letter to be animated
 */
export const AnimatedLetter = ({ letter }: AnimatedLetterProps): JSX.Element => {
  const [isTargeted, setIsTargeted] = useState(false)
  const [rotateDirection, setRotateDirection] = useState<rotateDirection>('left')

  const flipRotation = (): void => {
    setRotateDirection(rotateDirection === 'left' ? 'right' : 'left')
  }

  const onMouseEnter = (): void => {
    if (isTargeted) return
    setIsTargeted(true)
  }

  const onMouseLeave = (): void => {
    if (!isTargeted) return
    setIsTargeted(false)
  }

  const animatedStyle = useSpring({
    loop: { reverse: true },
    transform: isTargeted ? `rotate(${rotateAngle(rotateDirection)}deg)` : 'rotate(0deg)',
    onRest: () => flipRotation()
  })

  return (
    <DragSnap>
      <animated.div
        className={style.animatedLetter}
        onMouseEnter={() => onMouseEnter()}
        onMouseLeave={() => onMouseLeave()}
        style={animatedStyle}>
        {letter}
      </animated.div>
    </DragSnap>
  )
}
