import { render, screen } from "@testing-library/react";
import { LinedPaper } from ".";

describe("Components/PaperStack/LinedPaper", () => {
  it("renders", () => {
    render(
      <LinedPaper id={"1"} title="title">
        message
      </LinedPaper>,
    );

    const title = screen.getByText("title");
    expect(title).toBeInTheDocument();

    const message = screen.getByText("message");
    expect(message).toBeInTheDocument();
  });
});
