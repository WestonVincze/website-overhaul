import React, { useEffect } from 'react'
import { Container } from '../../components/Container'
import { AnimatedContent } from '../../components/AnimatedContent'
import { WebDevWeston } from '../../components/WebDevWeston'

export const HomeScene = (): JSX.Element => {
  useEffect(() => {
    const isFirstVisit = sessionStorage.getItem('visitedBefore') !== 'true'

    if (isFirstVisit) {
      sessionStorage.setItem('visitedBefore', 'true')
      console.log('FIRST TIME LOADING PAGE')
    } else console.log('WELCOME BACK')
  }, [])

  return (
    <>
      <Container centered={true}>
        <AnimatedContent>
          <WebDevWeston />
        </AnimatedContent>
      </Container>
    </>
  )
}
