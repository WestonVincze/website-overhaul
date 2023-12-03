import { render, act } from "@testing-library/react";
import { AnimatedContent } from "./AnimatedContent";

describe("Components/AnimatedContent", () => {
  it("renders", () => {
    const { getByText } = render(
      <AnimatedContent>
        <div>Child 1</div>
        <div>Child 2</div>
      </AnimatedContent>,
    );

    act(() => {
      jest.advanceTimersByTime(500); // Advance timers to allow for animation delay
    });

    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });
});
