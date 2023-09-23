import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { LinedPaper } from ".";

describe("Components/PaperStack/LinedPaper", () => {
  it("renders a title and message", () => {
    render(<LinedPaper id={1} title="title" message="message" />);

    const title = screen.getByText("title");
    expect(title).toBeInTheDocument();
    const message = screen.getByText("message");
    expect(message).toBeInTheDocument();
  });
});
