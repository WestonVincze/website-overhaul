import React from "react";
import Image from "next/image";
import { Container } from "../../components/Container";
import { AnimatedContent } from "../../components/AnimatedContent";
import { DragSnap } from "../../components/Drag/DragSnap";
import { Resume } from "../../components/Resume";

const resumeWidth = 700;
const resumeHeight = 900; // ~ * 1.294

export const ResumeScene = (): JSX.Element => {
  return (
    <Container>
      <AnimatedContent>
        <Resume />
        <DragSnap>
          {/* hiding this for now */}
          <Image
            style={{ display: "none" }}
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
