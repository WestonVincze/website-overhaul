import { render } from "@testing-library/react";
import { FolderTab } from "./FolderTab";

describe("Components/FolderTab", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <FolderTab data-testid="tab" text="home" path={"/"} />,
    );

    const tab = getByTestId("tab");

    expect(tab).toBeInTheDocument();
    expect(tab).toHaveTextContent("home");
  });
});
