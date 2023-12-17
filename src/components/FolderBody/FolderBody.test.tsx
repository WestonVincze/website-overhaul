import { render } from "@testing-library/react";
import { FolderBody } from "./FolderBody";

describe("Components/FolderBody", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <FolderBody data-testid="folder">
        <p>content</p>
      </FolderBody>,
    );

    const folder = getByTestId("folder");
    expect(folder).toBeInTheDocument();

    expect(folder).toHaveTextContent(/content/);
  });
});
