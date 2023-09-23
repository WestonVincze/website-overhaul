import { useEffect, useState } from 'react'

interface useTypewriterProps {
  text: string
  typeSpeed?: number
  playRetypeAnimation?: boolean
  onStartTyping?: () => void
  onDoneTyping?: () => void
}

export const useTypewriter = ({
  text,
  typeSpeed = 40,
  playRetypeAnimation = false,
  onStartTyping = () => {},
  onDoneTyping = () => {}
}: useTypewriterProps): string => {
  const [typed, setTyped] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (playRetypeAnimation) setIsDeleting(typed.length > 0)
    else setTyped('')
    // TODO: something isn't working here
    onStartTyping()
  }, [text])

  useEffect(() => {
    if (isDeleting && typed.length === 0) setIsDeleting(false)
    if (typed === text && !isDeleting) {
      // TODO: something isn't working here
      onDoneTyping()
      return
    }

    const typeDelay = setTimeout(() => {
      setTyped((prevTyped) => {
        if (isDeleting && prevTyped.length > 0) {
          return prevTyped.slice(0, -1)
        }
        return prevTyped + text[prevTyped.length]
      })
    }, typeSpeed)

    return () => clearTimeout(typeDelay)
  }, [text, typed, isDeleting])

  return typed
}
