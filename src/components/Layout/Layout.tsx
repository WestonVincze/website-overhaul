"use client";

import { FolderBody } from "../FolderBody";
import { FolderTabs } from "../FolderTabs";
import { SocialIcons } from "../SocialIcons";
import { AppStateProvider } from "@providers/AppStateProvider";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <AppStateProvider>
      <FolderTabs
        tabs={[
          { path: "/", text: "HOME" },
          { path: "/resume", text: "RESUME" },
          { path: "/projects", text: "PROJECTS" },
        ]}
      />
      <SocialIcons />
      <FolderBody>{children}</FolderBody>
    </AppStateProvider>
  );
};
