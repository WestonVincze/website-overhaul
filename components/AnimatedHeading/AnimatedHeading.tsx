import React from 'react'
import { ContentRow } from '../ContentRow'
import { AnimatedWord } from '../AnimatedWord'
import { useRouter } from 'next/router'
import { animated, useSpring } from 'react-spring'
import { Typewriter } from '../Typewriter'

const large = {
  fontSize: '100px'
}
const small = {
  fontSize: '60px'
}

type route = '/' | '/resume' | '/skills'

const typewriterText = {
  '/': 'Web Developer',
  '/resume': 'My Resume',
  '/skills': 'My Skills'
}

export const AnimatedHeading = (): JSX.Element => {
  const router = useRouter()

  const path = router.pathname as route
  const isHomeScene = path === '/'
  const animatedStyle = useSpring({
    ...isHomeScene ? large : small
  })

  return (
    <>
      <animated.div style={animatedStyle}>
        <ContentRow>
          <AnimatedWord word={'Weston'} animatedStyle={animatedStyle} />
          <AnimatedWord word={'Vincze'} animatedStyle={animatedStyle} />
        </ContentRow>
      </animated.div>
      <Typewriter lines={typewriterText[path]} inlineTag={true} centered={true} />
    </>
  )
}
