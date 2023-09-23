import React, { useState } from 'react'
import { FlashingCursor } from './FlashingCursor'
import { useTypewriter } from './useTypewriter'
import styles from './Typewriter.module.css'
/**
 * Basic implementation of the useTypewriter hook
 */

export type Size = 'small' | 'medium' | 'large'
interface TypewriterProps {
  text: string
  size?: Size
  inlineTag?: boolean
  flashingCursor?: boolean
  centered?: boolean
  onDoneTyping?: () => void
  onStartTyping?: () => void
}

export const Typewriter = ({
  text,
  inlineTag = false,
  flashingCursor = false,
  centered = false,
  size = 'medium',
  onDoneTyping,
  onStartTyping,
  ...props
}: TypewriterProps): JSX.Element => {
  const [isIdle, setIsIdle] = useState(false)

  const handleDoneTyping = (): void => {
    setIsIdle(true)
    onDoneTyping?.()
  }

  const handleStartTyping = (): void => {
    setIsIdle(false)
    onStartTyping?.()
  }

  const typed = useTypewriter({
    text,
    playRetypeAnimation: true,
    onStartTyping: handleStartTyping,
    onDoneTyping: handleDoneTyping
  })

  return (<h1 className={styles[size]} style={centered ? { textAlign: 'center' } : {}} {...props}>
    {inlineTag ? `<${typed} />` : typed }
    {flashingCursor && <FlashingCursor toggle={isIdle} />}
  </h1>)
}
