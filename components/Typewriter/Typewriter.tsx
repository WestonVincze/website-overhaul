import React, { useState } from 'react'
import { FlashingCursor } from './FlashingCursor'
import { useTypewriter } from './useTypewriter'
/**
 * This component will be used to dynamically type words
 * It should be usable within the SVG and for the sub-heading
 * Requirements:
 * - [x] given a sentence, animate the letters one at a time
 * - [ ] should be able to receive an array of sentences
 *   - [no] should it be a dict to allow for custom timing?
 * - [x] (optional) flashing cursor loop
 * Potential features:
 * - [x] ability to backspace?
 * - [ ] choose font size?
 * - [ ] randomized mistakes? <3
 *
 * FSM would be more practical once I add more features
 * - idle - done typing
 * - typing
 * - deleting
 */

interface TypewriterProps {
  lines: string // | string[]
  inlineTag?: boolean
  flashingCursor?: boolean
  centered?: boolean
  typeSpeed?: number
  startDelay?: number
  immediateDelete?: boolean
}

export const Typewriter = ({
  lines,
  inlineTag = false,
  flashingCursor = false,
  centered = false,
  typeSpeed = 40,
  startDelay = 0,
  immediateDelete = false,
  ...props
}: TypewriterProps): JSX.Element => {
  const [isIdle, setIsIdle] = useState(false)

  const typed = useTypewriter({
    text: lines,
    typeSpeed,
    immediateDelete,
    onStartTyping: () => setIsIdle(false),
    onDoneTyping: () => setIsIdle(true)
  })

  return (<h1 style={centered ? { textAlign: 'center' } : {}} {...props}>
    {inlineTag ? `<${typed} />` : typed }
    {flashingCursor && <FlashingCursor toggle={isIdle} />}
  </h1>)
}
