import React from 'react'
// import styles from './PaperStack.module.css'
import { LinedPaper, LinedPaperProps } from './LinedPaper/LinedPaper'
import { AnimatedContent } from '../AnimatedContent/AnimatedContent'

// hook should allow developer to create paper with addPaper()
// hook should return a list of papers
// hook can be used to add and remove elements on the fly (why?)
/*
export function usePaperStack (): JSX.Element {
  function addPaper (paper: LinedPaperProps): JSX.Element {
    return (<LinedPaper {...paper} />)
  }
  return (<></>)
}
*/

export function PaperStack ({ papers, isAnimated = false }: PaperStackProps): JSX.Element {
  const paperElements = papers.map((paper, i) =>
    <LinedPaper key={i} {...paper} />
  )
  return (<>
    {isAnimated
      ? <AnimatedContent>{paperElements}</AnimatedContent>
      : <div>{ paperElements }</div>}
  </>)
}

interface PaperStackProps {
  papers: LinedPaperProps[]
  isAnimated?: boolean
}
