import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/Container";
import { AnimatedContent } from "@/components/AnimatedContent";
import { ProjectsContent } from "@/components/ProjectCard/ProjectsContent";

export const ProjectsScene = (): JSX.Element => {
  return (
    <Container>
      <AnimatedContent>
        <h1>Web Development</h1>
        {ProjectsContent.websites.map((website, i) => (
          <ProjectCard {...website} key={i} />
        ))}
        <h1>Game Development</h1>
        {ProjectsContent.games.map((game, i) => (
          <ProjectCard {...game} key={i} />
        ))}
      </AnimatedContent>
    </Container>
  );
};
