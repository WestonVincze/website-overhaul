import Resume from "./resume";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

const Page = () => {
  return <Resume />;
};

export default Page;
