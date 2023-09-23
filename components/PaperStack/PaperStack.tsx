import React from "react";
// import styles from './PaperStack.module.css'
import { LinedPaper, LinedPaperProps } from "../LinedPaper";
import { AnimatedContent } from "../AnimatedContent";

interface PaperStackProps {
  papers: LinedPaperProps[];
  isAnimated?: boolean;
}

export const PaperStack = ({
  papers,
  isAnimated = false
}: PaperStackProps): JSX.Element => {
  const paperElements = papers.map((paper, i) => (
    <LinedPaper key={i} {...paper} />
  ));
  return (
    <>
      {isAnimated ? (
        <AnimatedContent>{paperElements}</AnimatedContent>
      ) : (
        <div>{paperElements}</div>
      )}
    </>
  );
};
