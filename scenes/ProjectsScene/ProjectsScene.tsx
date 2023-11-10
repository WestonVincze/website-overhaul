import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/Container";
import { AnimatedContent } from "@/components/AnimatedContent";
import { ProjectsContent } from "@/components/ProjectCard/ProjectsContent";

export const ProjectsScene = (): JSX.Element => {
  return (
    <Container>
      <AnimatedContent>
        {ProjectsContent.websites.map((website, i) => (
          <ProjectCard {...website} key={i} />
        ))}
      </AnimatedContent>
    </Container>
  );
};
