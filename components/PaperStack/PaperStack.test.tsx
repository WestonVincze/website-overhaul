import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { PaperStack } from ".";
import { LinedPaperProps } from "../LinedPaper/LinedPaper";

const papers: LinedPaperProps[] = [
  {
    title: "title1",
    children: "message1",
  },
  {
    title: "title2",
    children: "message2",
  },
  {
    title: "title3",
    children: "message3",
  },
];

describe("Components/PaperStack", () => {
  it("renders a series of LinedPaper components", () => {
    render(<PaperStack papers={papers} />);

    papers.map((p) => expect(screen.getByText(p.children)).toBeInTheDocument());
  });
});
