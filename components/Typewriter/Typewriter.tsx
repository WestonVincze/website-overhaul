import React, { useState } from 'react'
import { FlashingCursor } from './FlashingCursor'
import { useTypewriter } from './useTypewriter'
/**
 * Basic implementation of the useTypewriter hook
 */

interface TypewriterProps {
  lines: string // | string[]
  inlineTag?: boolean
  flashingCursor?: boolean
  centered?: boolean
}

export const Typewriter = ({
  lines,
  inlineTag = false,
  flashingCursor = false,
  centered = false,
  ...props
}: TypewriterProps): JSX.Element => {
  const [isIdle, setIsIdle] = useState(false)

  const typed = useTypewriter({
    text: lines,
    playRetypeAnimation: true,
    onStartTyping: () => setIsIdle(false),
    onDoneTyping: () => setIsIdle(true)
  })

  return (<h1 style={centered ? { textAlign: 'center' } : {}} {...props}>
    {inlineTag ? `<${typed} />` : typed }
    {flashingCursor && <FlashingCursor toggle={isIdle} />}
  </h1>)
}
