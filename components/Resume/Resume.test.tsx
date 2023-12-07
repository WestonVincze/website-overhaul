import { render } from "@testing-library/react";
import { Resume } from "./Resume";

describe("Components/Resume", () => {
  it("renders", () => {
    const { getByTestId } = render(<Resume data-testid="resume" />);

    const resume = getByTestId("resume");
    expect(resume).toBeInTheDocument();
  });
});
