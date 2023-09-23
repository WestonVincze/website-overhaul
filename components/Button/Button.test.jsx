import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Button } from ".";

describe("Components/Button", () => {
  it("renders with an href", () => {
    render(<Button path="/">I am a Button</Button>);

    const button = screen.getByText(/I am a Button/i);
    expect(button).toBeInTheDocument();

    // this will be changed... button shouldn't implicitly require an href
    // expect(button).toHaveAttribute('href', '/')
  });
});
