import { ProjectCard } from "@components/ProjectCard";
import { Container } from "@components/Container";
import { Projects } from "@scenes/ProjectsScene/ProjectsContent";
import { HighlightedHeading } from "@components/HighlightedHeading";

export const ProjectsScene = (): JSX.Element => {
  return (
    <Container>
      <section>
        <HighlightedHeading id="challenges" text="Challenges" />
        {Projects.challenges.map((challenge, i) => (
          <ProjectCard
            {...challenge}
            id={`challenges-${challenge.id}`}
            key={i}
          />
        ))}
      </section>

      <section>
        <HighlightedHeading id="websites" text="Websites" />
        {Projects.websites.map((web, i) => (
          <ProjectCard {...web} id={`websites-${web.id}`} key={i} />
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
