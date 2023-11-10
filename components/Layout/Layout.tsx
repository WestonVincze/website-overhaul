"use client";

import { FolderBody } from "../FolderBody";
import { FolderTabs } from "../FolderTabs";
import { SocialIcons } from "../SocialIcons";
import { AppStateProvider } from "../AppStateProvider";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <AppStateProvider>
      <SocialIcons />
      <FolderTabs
        tabs={[
          { path: "/projects", text: "PROJECTS" },
          { path: "/resume", text: "RESUME" },
          { path: "/", text: "HOME" },
        ]}
      />
      <FolderBody>{children}</FolderBody>
    </AppStateProvider>
  );
};
