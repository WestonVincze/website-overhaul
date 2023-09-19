import React, { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styles from './PaperPreview.module.css'
import { useMachine } from '@xstate/react'
import { animationMachine, AnimationStates } from './AnimationFSM'

interface PaperPreviewProps {
  hovering: boolean
  active: boolean
  startActive?: boolean
  z: number
}

const PaperPreview = ({ hovering = false, active = false, z, startActive = false }: PaperPreviewProps): JSX.Element => {
  const [reset, setReset] = useState(startActive)
  const [current, send] = useMachine(animationMachine)

  useEffect(() => {
    send(hovering ? 'HOVER' : 'LEAVE_HOVER')
  }, [hovering])

  useEffect(() => {
    if (active) {
      send('ACTIVE')
    } else {
      send('LEAVE_ACTIVE')
      resetAnimation()
    }
  }, [active])

  const resetAnimation = (): void => {
    setReset(true)
  }

  const springProps = useSpring({
    to: { y: current.context.y, x: current.context.x, z },
    onRest: current.value === AnimationStates.active ? resetAnimation : {},
    immediate: reset
  })

  useEffect(() => {
    if (reset) setReset(false)
  }, [reset])

  return (
    <animated.div
      style={springProps}
      className={styles.paperPreview}
    />
  )
}

export default PaperPreview
