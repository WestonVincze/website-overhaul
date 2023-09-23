import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { FolderTabs } from ".";

describe("Components/FolderTabs", () => {
  it("renders", () => {
    render(<FolderTabs data-testid="folderTabs" tabs={[]} />);

    const folderTabs = screen.getByTestId("folderTabs");
    expect(folderTabs).toBeInTheDocument();
  });
});
