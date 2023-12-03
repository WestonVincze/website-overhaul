import { render } from "@testing-library/react";
import { Container } from ".";

describe("Components/Container", () => {
  it("renders", () => {
    const { getByText } = render(
      <Container>
        <p>I am in a container</p>
      </Container>,
    );

    const containerContent = getByText(/I am in a container/i);
    expect(containerContent).toBeInTheDocument();
  });
});
