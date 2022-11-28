import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import { ContentRow } from ".";

describe('Components/ContentRow', () => {
  it('renders', () => {
    render(
      <ContentRow data-testid='contentRow'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </ContentRow>
    )

    const contentRow = screen.getByTestId(/contentRow/i)
    expect(contentRow).toBeInTheDocument()
  })
})