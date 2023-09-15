import React from 'react'
import { PaperStack } from '../../components/PaperStack'
import { Container } from '../../components/Container'
import { LinedPaperProps } from '../../components/PaperStack/LinedPaper/LinedPaper'

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

export function ResumeScene (): JSX.Element {
  return (
    <Container>
      <>
        <div>RESUME</div>
        <PaperStack papers={paperContent} isAnimated={true} />
        <PaperStack papers={paperContent} isAnimated={false} />
      </>
    </Container>
  )
}
