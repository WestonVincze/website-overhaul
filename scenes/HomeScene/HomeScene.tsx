import React from "react";
import { Container } from "../../components/Container";
import { AnimatedContent } from "../../components/AnimatedContent";
import { WebDevWeston } from "../../components/WebDevWeston";

export const HomeScene = (): JSX.Element => {
  return (
    <Container centered={true}>
      <AnimatedContent>
        <WebDevWeston />
      </AnimatedContent>
    </Container>
  );
};
