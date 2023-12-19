import { Container } from "@components/Container";
import { LinedPaper } from "@components/LinedPaper";
import { WebDevWeston } from "@components/WebDevWeston";

export const HomeScene = () => {
  return (
    <Container centered={true}>
      <LinedPaper>
        <p>
          {`I'm a self-driven frontend developer with a passion for crafting
          immersive digital experiences. I'm an avid creator with an obsession
          for problem solving and an insatiable thirst for knowledge. I'm
          continuously engaged in learning and experimenting with the latest
          technologies, perpetually seeking to expand my skills and creative
          horizons.`}
        </p>
      </LinedPaper>
      <WebDevWeston />
    </Container>
  );
};
