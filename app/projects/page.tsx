import Projects from "./projects";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const Page = () => {
  return <Projects />;
};

export default Page;
