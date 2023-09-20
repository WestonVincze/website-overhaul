import React from 'react'
import { AnimatedLetter } from '../AnimatedLetter'
import { animated } from 'react-spring'

interface AnimatedWordProps {
  word: string
}

/**
 * Creates a collection of AnimatedLetters from a string
 * @param word the word to be animated
 */
export const AnimatedWord = ({ word, ...props }: AnimatedWordProps): JSX.Element => {
  return (
    <animated.div {...props}>
      {word.split('').map((character, i) =>
        <AnimatedLetter
          key={i}
          letter={character}
        />)}
    </animated.div>
  )
}
