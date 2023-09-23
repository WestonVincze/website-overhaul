import React, { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styles from './PaperPreview.module.css'
import { useMachine, useSelector } from '@xstate/react'
import { PaperPreviewFSM, AnimationStates } from './PaperPreviewFSM'
import { useAppState } from '../../AppStateProvider'
import { OFF_SCREEN_Y_OFFSET, OFF_SCREEN_X_OFFSET } from './types'

interface PaperPreviewProps {
  hovering: boolean
  active: boolean
  startActive?: boolean
  z: number
}

export const PaperPreview = ({ hovering = false, active = false, z, startActive = false }: PaperPreviewProps): JSX.Element => {
  const [reset, setReset] = useState(startActive)
  const [current, send] = useMachine(PaperPreviewFSM)
  const { appState, isReady } = useAppState()
  const ready = useSelector(appState, isReady)

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
    from: active && !ready ? { x: OFF_SCREEN_X_OFFSET, y: OFF_SCREEN_Y_OFFSET } : {},
    to: { x: current.context.x, y: current.context.y, z },
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
