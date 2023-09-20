import React from 'react'
import { animated } from 'react-spring'
/**
 * This component will be used to dynamically type words
 * It should be usable within the SVG and for the sub-heading
 * Requirements:
 * - given a sentence, animate the letters one at a time
 * - should be able to receive an array of sentences
 *   - should it be a dict to allow for custom timing?
 * - flashing cursor (loop)
 * Potential features:
 * - ability to backspace?
 * - choose font size?
 */

interface TypewriterProps {
  lines: string | string[]
  centered?: boolean
}

export const Typewriter = ({ lines, centered = false, ...props }: TypewriterProps): JSX.Element => {
  return (<>
    <animated.h1 style={centered ? { textAlign: 'center' } : {}} {...props}>
      {lines}
    </animated.h1>
  </>)
}
