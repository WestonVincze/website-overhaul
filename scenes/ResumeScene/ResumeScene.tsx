import React from "react";
import Image from "next/image";
import { Container } from "../../components/Container";
import { AnimatedContent } from "../../components/AnimatedContent";
import { DragSnap } from "../../components/Drag/DragSnap";

const resumeWidth = 700;
const resumeHeight = 900; // ~ * 1.294

export const ResumeScene = (): JSX.Element => {
  // add a switch of some sort to change the content based on the page
  // pdf viewer
  // new tab link
  return (
    <Container>
      <AnimatedContent>
        <DragSnap>
          <Image
            src="/images/WestonResume.png"
            alt="Weston Resume Page 1"
            width={resumeWidth}
            height={resumeHeight}
          />
        </DragSnap>
      </AnimatedContent>
    </Container>
  );
};
