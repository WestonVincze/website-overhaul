import { render } from "@testing-library/react";
import { ProjectCard } from "./ProjectCard";

describe("Components/ProjectCard", () => {
  it("renders with all content", () => {
    const { getByTestId } = render(
      <ProjectCard
        data-testid="card"
        projectName={"Test Project"}
        year={"2023"}
        status={"in progress"}
        skills={[]}
        description={"consider me described"}
        highlights={["I am a highlight"]}
      />,
    );

    const card = getByTestId("card");
    expect(card).toBeInTheDocument();

    expect(card).toHaveTextContent(/Test Project/);
    expect(card).toHaveTextContent(/2023/);
    expect(card).toHaveTextContent(/in progress/);
    expect(card).toHaveTextContent(/consider me described/);
    expect(card).toHaveTextContent(/I am a highlight/);
  });
});
