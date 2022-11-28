import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { PaperStack } from '.'
import { LinedPaperProps } from './LinedPaper/LinedPaper'

const papers: LinedPaperProps[] = [
  {
    id: 1,
    title: 'title1',
    message: 'message1'
  },
  {
    id: 2,
    title: 'title2',
    message: 'message2'
  },
  {
    id: 3,
    title: 'title3',
    message: 'message3'
  }
]

describe('Components/PaperStack', () => {
  it('renders a series of LinedPaper components', () => {
    render(<PaperStack papers={papers} />)

    papers.map(p => expect(screen.getByText(p.message)).toBeInTheDocument())
  })
})