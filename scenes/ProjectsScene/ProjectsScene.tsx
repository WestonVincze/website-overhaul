import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/Container";
import { AnimatedContent } from "@/components/AnimatedContent";
import { Projects } from "@/scenes/ProjectsScene/ProjectsContent";

export const ProjectsScene = (): JSX.Element => {
  return (
    <Container>
      <AnimatedContent>
        <section>
          <h2 id="web-dev">Web Development</h2>
          {Projects.websites.map((web, i) => (
            <ProjectCard id={`web-dev-${web.id}`} {...web} key={i} />
          ))}
        </section>

        <section>
          <h2 id="game-dev">Game Development</h2>
          {Projects.games.map((game, i) => (
            <ProjectCard {...game} id={`game-dev-${game.id}`} key={i} />
          ))}
        </section>
      </AnimatedContent>
    </Container>
  );
};
