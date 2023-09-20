import { useEffect, useState } from 'react'

interface useTypewriterProps {
  text: string
  immediateDelete: boolean
  typeSpeed: number
  onStartTyping?: () => void
  onDoneTyping?: () => void
}

export const useTypewriter = ({
  text,
  immediateDelete = false,
  typeSpeed = 40,
  onStartTyping = () => {},
  onDoneTyping = () => {}
}: useTypewriterProps): string => {
  const [typed, setTyped] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (immediateDelete) setTyped('')
    else setIsDeleting(typed.length > 0)

    onStartTyping()
  }, [text])

  useEffect(() => {
    if (isDeleting && typed.length === 0) setIsDeleting(false)
    if (typed.length >= text.length && !isDeleting) {
      onDoneTyping()
      return
    }

    const typeDelay = isDeleting
      ? setTimeout(() => setTyped(typed.slice(0, -1)), typeSpeed)
      : setTimeout(() => setTyped(typed + text[typed.length]), typeSpeed)

    return () => clearTimeout(typeDelay)
  }, [text, typed, isDeleting])

  return typed
}
