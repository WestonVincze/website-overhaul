import React from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { Container } from "../../components/Container";
import { AnimatedContent } from "../../components/AnimatedContent";
import { ProjectsContent } from "../../components/ProjectCard/ProjectsContent";

export const ProjectsScene = (): JSX.Element => {
  return (
    <Container>
      <AnimatedContent>
        <ProjectCard {...ProjectsContent.websites[0]} />
      </AnimatedContent>
    </Container>
  );
};
