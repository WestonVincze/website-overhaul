import { render, screen } from "@testing-library/react";
import { AnimatedLetter } from ".";

describe("Components/AnimatedLetter", () => {
  it("renders", () => {
    render(<AnimatedLetter letter="A" />);

    const animatedLetter = screen.getByText(/A/i);
    // should we...
    // check if 'div' element is rendered?
    // check if class "animatedLetter" is part of it?

    expect(animatedLetter).toBeInTheDocument();
  });
});
