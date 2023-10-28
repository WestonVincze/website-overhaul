import React from "react";
import { Container } from "../../components/Container";
import { AnimatedContent } from "../../components/AnimatedContent";
import { Resume } from "../../components/Resume";

export const ResumeScene = (): JSX.Element => {
  return (
    <Container>
      <AnimatedContent>
        <Resume />
      </AnimatedContent>
    </Container>
  );
};
