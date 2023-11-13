import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/Container";
import { AnimatedContent } from "@/components/AnimatedContent";
import { ProjectsContent } from "@/components/ProjectCard/ProjectsContent";

export const ProjectsScene = (): JSX.Element => {
  return (
    <Container>
      <AnimatedContent>
        <h1 id="web-dev">Web Development</h1>
        <section>
          {ProjectsContent.websites.map((web, i) => (
            <ProjectCard id={`web-dev-${web.anchorTag}`} {...web} key={i} />
          ))}
        </section>

        <h1 id="game-dev">Game Development</h1>
        <section>
          {ProjectsContent.games.map((game, i) => (
            <ProjectCard id={`game-dev-${game.anchorTag}`} {...game} key={i} />
          ))}
        </section>
      </AnimatedContent>
    </Container>
  );
};
