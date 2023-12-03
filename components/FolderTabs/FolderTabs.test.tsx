import { render, screen } from "@testing-library/react";

import { FolderTabs } from ".";

describe("Components/FolderTabs", () => {
  it("renders", () => {
    render(<FolderTabs data-testid="folderTabs" tabs={[]} />);

    const folderTabs = screen.getByTestId("folderTabs");
    expect(folderTabs).toBeInTheDocument();
  });
});
