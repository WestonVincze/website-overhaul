import React, { useEffect } from 'react'
import { Container } from '../../components/Container'
import { AnimatedContent } from '../../components/AnimatedContent'
import { AnimatedWord } from '../../components/AnimatedWord'
import { ContentRow } from '../../components/ContentRow'
import { WebDevWeston } from '../../components/WebDevWeston'

export function HomeScene (): JSX.Element {
  return (
    <>
      <Container centered={true}>
        <AnimatedContent>
          <ContentRow>
            <AnimatedWord word={'Weston'} />
            <AnimatedWord word={'Vincze'} />
          </ContentRow>
          <WebDevWeston />
        </AnimatedContent>
      </Container>
    </>
  )
}
