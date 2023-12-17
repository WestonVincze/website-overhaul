import { render, act, screen, waitFor } from "@testing-library/react";
import { AnimatedHeading } from "./AnimatedHeading";

describe("Components/AnimatedHeading", () => {
  it("renders AnimatedHeading component", async () => {
    const { getByTestId } = render(<AnimatedHeading />);
    const greeting = getByTestId("greeting");
    expect(greeting).toBeInTheDocument();

    const styles = window.getComputedStyle(greeting);
    expect(styles.opacity).toBe("1");

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByText("< />")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Hi. My name is")).toBeInTheDocument();
    });
  });
});
