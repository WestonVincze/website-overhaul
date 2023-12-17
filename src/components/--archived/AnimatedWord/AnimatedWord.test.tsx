import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { AnimatedWord } from ".";

describe("Components/AnimatedWord", () => {
  const testWord = "word";

  it("renders as many animated letters as there are characters in the word prop", () => {
    render(<AnimatedWord data-testid={testWord} word={testWord} />);

    // ensures each letter from 'word' prop is rendered
    testWord
      .split("")
      .map((letter) => expect(screen.getByText(letter)).toBeInTheDocument());
  });
});
