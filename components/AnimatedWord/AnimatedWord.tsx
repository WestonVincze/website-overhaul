import React from 'react'
import { AnimatedLetter } from '../AnimatedLetter'

interface AnimatedWordProps {
  word: string
}

/**
 * Creates a collection of AnimatedLetters from a string
 * @param word the word to be animated
 */
export const AnimatedWord = ({ word, ...props }: AnimatedWordProps): JSX.Element => {
  // animation for the word itself could be added
  return (<div {...props}>{word.split('').map((character, i) => <AnimatedLetter key={i} letter={character} />)}</div>)
}
