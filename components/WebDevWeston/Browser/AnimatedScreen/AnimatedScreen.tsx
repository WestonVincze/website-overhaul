import React, { useEffect, useMemo, useState } from 'react'
import { useTypewriter } from '../../../Typewriter/useTypewriter'
import { Animations } from './Animations'

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

interface AnimatedScreenProps {
  toggle: boolean
}

export const AnimatedScreen = ({ toggle }: AnimatedScreenProps): JSX.Element => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!toggle) return

    setText(Animations[index].text)
  }, [toggle])

  const handleDoneTyping = (): void => {
    setIndex((prevIndex) => prevIndex < Animations.length - 1 ? prevIndex + 1 : 0)
    setTimeout(() => {
      setText(Animations[index].text)
    }, 1000)
  }

  const typed = useTypewriter({ text, onDoneTyping: () => handleDoneTyping() })

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
