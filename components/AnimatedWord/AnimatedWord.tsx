import React from 'react'
import { AnimatedLetter } from '../AnimatedLetter'
import { animated } from 'react-spring'

interface AnimatedWordProps {
  word: string
  animatedStyle: any // THE ANY BOOGEYMAN IS HERE (FOR NOW) AND I HATE IT
}

/**
 * Creates a collection of AnimatedLetters from a string
 * @param word the word to be animated
 */
export const AnimatedWord = ({ word, animatedStyle, ...props }: AnimatedWordProps): JSX.Element => {
  return (
    <animated.div style={animatedStyle} {...props}>
      {word.split('').map((character, i) =>
        <AnimatedLetter
          key={i}
          letter={character}
        />)}
    </animated.div>
  )
}
