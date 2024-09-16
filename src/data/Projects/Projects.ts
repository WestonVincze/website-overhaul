import { ProjectDetails } from "./types";
import { Demos } from "./Demos";
import { Games } from "./Games";
import { Websites } from "./Websites";

export const Projects: Record<string, ProjectDetails[]> = {
  demos: Demos,
  websites: Websites,
  games: Games,
};
