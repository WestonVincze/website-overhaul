import React, { useEffect } from 'react'
import styles from './LinedPaper.module.css'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'

// animations could be handeled by an external manager
// - manager would be used as an 'engine' to obtain the current state of the animation
// - all animation types would be much more structured

export function LinedPaper ({ message, title, orientLeft = true }: LinedPaperProps): JSX.Element {
  const orientation = orientLeft ? styles.paperLeft : styles.paperRight
  useEffect(() => {
    const preventDefault = (e: Event): void => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)

    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  }, [])

  const [{ rotateX, rotateY, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1
  }))

  useGesture(
    {
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 })
    }
  )

  return (
    <animated.div style={{ rotateX, rotateY, scale }}>
      <div className={`${styles.paper} ${orientation}`}>
        <h1 className="written">{title}</h1>
        <p>{message}</p>
      </div>
    </animated.div>
  )
}

export interface LinedPaperProps {
  id: number
  title: string
  message: string
  orientLeft?: boolean
}
