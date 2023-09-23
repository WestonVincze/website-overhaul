import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Container } from ".";

describe("Components/Container", () => {
  it("renders", () => {
    render(
      <Container>
        <p>I am in a container</p>
      </Container>,
    );

    const containerContent = screen.getByText(/I am in a container/i);
    expect(containerContent).toBeInTheDocument();
  });
});
