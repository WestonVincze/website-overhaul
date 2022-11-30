import React from 'react'
import Image from 'next/image'
import { Container } from '../../components/Container/Container'
import { LinedPaperProps } from '../../components/PaperStack/LinedPaper/LinedPaper'
import { PaperStack } from '../../components/PaperStack'
import { AnimatedWord } from '../../components/AnimatedWord'
import { ContentRow } from '../../components/ContentRow'

// I could move this to a separate file to emulate a fetch request and keep this
// logic separate
const paperContent: LinedPaperProps[] = [
  {
    id: 1,
    title: 'I am a title',
    message: 'test',
    orientLeft: true
  },
  {
    id: 2,
    title: 'I am a title also',
    message: 'test 2',
    orientLeft: false
  }
]

export function HomeScene (): JSX.Element {
  return (
    <>
      <Container centered={true}>
        <>
          <ContentRow>
            <AnimatedWord word={'Weston'} />
            <AnimatedWord word={'Vincze'} />
          </ContentRow>
          <Image width={500} height={500} src="/images/web-dev-weston.gif" alt="Animated Weston 'developing web'" />
          <PaperStack papers={paperContent} />
        </>
      </Container>
    </>
  )
}
