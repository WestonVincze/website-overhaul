import { render, screen } from "@testing-library/react";
import { AnimatedLetter } from ".";

describe("Components/AnimatedLetter", () => {
  it("renders", () => {
    render(<AnimatedLetter letter="A" />);

    const animatedLetter = screen.getByText(/A/i);
    expect(animatedLetter).toBeInTheDocument();
  });
});
