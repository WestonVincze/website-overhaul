import React from 'react'
import Image from 'next/image'
import { Container } from '../../components/Container/Container'
import { AnimatedWord } from '../../components/AnimatedWord'
import { ContentRow } from '../../components/ContentRow'

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
        </>
      </Container>
    </>
  )
}
