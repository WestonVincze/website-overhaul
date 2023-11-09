import { Container } from "@/components/Container";
import { AnimatedContent } from "@/components/AnimatedContent";
import { WebDevWeston } from "@/components/WebDevWeston";

export const HomeScene = () => {
  return (
    <Container centered={true}>
      <AnimatedContent>
        <WebDevWeston />
      </AnimatedContent>
    </Container>
  );
};
