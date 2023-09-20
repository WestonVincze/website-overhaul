import React from 'react'
import Image from 'next/image'
import { Container } from '../../components/Container'
import { AnimatedContent } from '../../components/AnimatedContent'
import { DragSnap } from '../../components/Drag/DragSnap'

const resumeWidth = 700
const resumeHeight = 900 // ~ * 1.294

export const ResumeScene = (): JSX.Element => {
  return (
    <Container>
      <AnimatedContent>
        <DragSnap>
          <Image src="/images/WestonResume-Page1.png" alt="Weston Resume Page 1" width={resumeWidth} height={resumeHeight} />
        </DragSnap>
        <DragSnap>
          <Image src="/images/WestonResume-Page2.png" alt="Weston Resume Page 2" width={resumeWidth} height={resumeHeight} />
        </DragSnap>
      </AnimatedContent>
    </Container>
  )
}
