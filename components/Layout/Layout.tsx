import React from "react";
import { FolderBody } from "../FolderBody";
import { FolderTabs } from "../FolderTabs";
import { Footer } from "../Footer";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div style={{ overflow: "hidden" }}>
      <FolderTabs
        tabs={[
          { id: "skills", path: "/skills", text: "SKILLS" },
          { id: "resume", path: "/resume", text: "RESUME" },
          { id: "home", path: "/" }
        ]}
      />
      <main>
        <FolderBody>{children}</FolderBody>
      </main>
    </div>
  );
};
