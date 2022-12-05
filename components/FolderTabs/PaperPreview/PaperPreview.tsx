import React, { useEffect, useRef, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styles from './PaperPreview.module.css'

export function PaperPreview ({ hovering = false, active = false, z }: PaperPreviewProps): JSX.Element {
  // const [active, setActive] = useState(false)
  const [cancel, setCancel] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationState, setAnimationState] = useState<PaperPreviewAnimationState>('hidden')
  const [yValue, setYValue] = useState(0)

  useEffect(() => {
    // animate off screen, pause animation, reset position without animation
    if (isAnimating) return
    if (active) {
      // animation needs to finish before resetting
      setYValue(-150)
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
        // I could hide the paper once the animation finishes......
        setCancel(true)
        setYValue(35)
        setTimeout(() => {
          setCancel(false)
        }, 500)
      }, 500)
    } else if (hovering) {
      setYValue(10)
    } else {
      setYValue(35)
    }
  }, [hovering, active])

  // stack of 'paper' that animates into view when a folder tab is hovered
  // on click, papers fly off screen
  /*
  function peak () {

  }
  function flyOut () {

  }
  */
  // need to track z-index which should change depending on which tab is being hovered over
  // 3 states
  // (hidden) default -> paper is off screen (inside folder)
  // (peak) on hover -> paper can be seen 'peaking' from folder
  // (offScreen) on select -> paper is off screen (above DOM)
  const animationStyle = useSpring({
    to: { y: yValue, z },
    cancel,
    onRest: () => console.log('resting')
  })
  // onRest should fire a callback to set the state?

  function getAnimationValue (state: PaperPreviewAnimationState): object {
    const animationValue = { to: { y: 0 }, from: { y: 0 } }
    if (state === 'hidden') {
      animationValue.to.y = 15
    } else if (state === 'peak') {
      animationValue.to.y = 0
    } else if (state === 'offScreen') {
      animationValue.to.y = -50
    }
    return animationValue
  }

  return (
    <animated.div
      style={animationStyle}
      className={styles.paperPreview}
    />
  )
}

interface PaperPreviewProps {
  hovering?: boolean
  active?: boolean
  z: number
}

type PaperPreviewAnimationState = 'hidden' | 'peak' | 'offScreen'
