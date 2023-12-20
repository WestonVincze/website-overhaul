import { Container } from "@components/Container";
import { LinedPaper } from "@components/LinedPaper";
import { WebDevWeston } from "@components/WebDevWeston";
import { HomeContent } from "./HomeContent";

export const HomeScene = () => {
  return (
    <Container centered={true}>
      <LinedPaper title="Welcome!">
        <p>{HomeContent.intro}</p>
      </LinedPaper>
      <WebDevWeston />
    </Container>
  );
};
