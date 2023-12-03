import { act, render, screen, waitFor } from "@testing-library/react";
import { Typewriter } from "./Typewriter";

describe("Typewriter", () => {
  it("types the provided text", async () => {
    const { getByTestId } = render(
      <Typewriter data-testid="typewriter" text="Hello, world!" delay={100} />,
    );

    const typewriter = getByTestId("typewriter");

    // typewriter should start with no text content
    expect(typewriter).toHaveTextContent("");

    // typewriter should be partially typed
    await waitFor(() => {
      expect(typewriter).toHaveTextContent("Hello,");
    });

    // typewriter should be fully typed
    await waitFor(() => {
      expect(typewriter).toHaveTextContent("Hello, world!");
    });
  });
});
