import React from "react";
import { PortfolioItem } from "../../components/PortfolioItem";
import { Container } from "../../components/Container";
import { AnimatedContent } from "../../components/AnimatedContent";

export const PortfolioScene = (): JSX.Element => {
  return (
    <Container>
      <AnimatedContent>
        <PortfolioItem
          title="MTX Login Page"
          description="test"
          links={[
            {
              icon: "Github",
              text: "github",
              url: "",
            },
            {
              icon: "Github",
              text: "codesandbox",
              url: "",
            },
            {
              icon: "Github",
              text: "itch",
              url: "",
            },
          ]}
        />
      </AnimatedContent>
    </Container>
  );
};
