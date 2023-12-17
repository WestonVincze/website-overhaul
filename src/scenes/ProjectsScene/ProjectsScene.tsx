import { ProjectCard } from "@components/ProjectCard";
import { Container } from "@components/Container";
import { Projects } from "@scenes/ProjectsScene/ProjectsContent";
import { HighlightedHeading } from "@components/HighlightedHeading";

export const ProjectsScene = (): JSX.Element => {
  return (
    <Container>
      <section>
        <HighlightedHeading id="web-dev" text="Web Development" />
        {Projects.websites.map((web, i) => (
          <ProjectCard id={`web-dev-${web.id}`} {...web} key={i} />
        ))}
      </section>

      <section>
        <HighlightedHeading id="game-dev" text="Game Development" />
        {Projects.games.map((game, i) => (
          <ProjectCard {...game} id={`game-dev-${game.id}`} key={i} />
        ))}
      </section>
    </Container>
  );
};
