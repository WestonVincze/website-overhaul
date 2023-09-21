import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useTypewriter } from '../../../Typewriter/useTypewriter'
import { Animations } from './Animations'
import { useMachine } from '@xstate/react'
import { AnimatedScreenFSM } from './AnimatedScreenFSM'

/**
 * Acts as a screen within the Browser SVG component
 * - animation should play in which html is typed and once completed,
 *  a specific element is rendered and translated
 * - each animation will have multiple elements being generated
 * - we should loop through multiple animations
 *
 * How should I actually animate this?
 * - sequentially in a loop?
 * - using an FSM?
 *   - would each string + path pair be its own state?
 *   - how would we switch between them?
 * - what about a custom hook?
 *   - this would return the formatted text and related animated path
 *   - we could pass in variants for the decision
 */

export const AnimatedScreen = (): JSX.Element => {
  const [current, send] = useMachine(AnimatedScreenFSM)
  const [text, setText] = useState(Animations[current.context.currentIndex].text)

  useEffect(() => {
    setText(Animations[current.context.currentIndex].text)
  }, [current])

  const handleDoneTyping = useCallback((): void => {
    setTimeout(() => send('NEXT'), 500)
  }, [send])

  const typed = useTypewriter({ text, onDoneTyping: handleDoneTyping })

  const lines = useMemo(() => typed.split('|'), [typed])

  return (
    <text
      width="80%"
      x="0"
      y="30%"
      dominantBaseline="middle"
      stroke="black"
      strokeWidth=".5"
      fontSize={14}
    >
      {lines.map((line, i) =>
        <tspan x="5%" dy={i === 0 ? '0' : '1.2em'} key={i}>
          {line}
        </tspan>)}
    </text>
  )
}
