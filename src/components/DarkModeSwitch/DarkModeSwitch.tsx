import { useEffect, useState } from "react";
import { Switch, SwitchSkeleton } from "@components/Switch";

export const DarkModeSwitch = () => {
  const [prefersDark, setPrefersDark] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPrefersDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const toggleDarkMode = (on: boolean) => {
    document.body.dataset.theme = on ? "dark" : "light";
  };

  return prefersDark !== null ? (
    <Switch
      storageKey="darkMode"
      onIcon="Moon"
      offIcon="Sun"
      title="Dark mode theme toggle"
      initialValue={prefersDark}
      onToggle={toggleDarkMode}
      onMount={toggleDarkMode}
    />
  ) : (
    <SwitchSkeleton />
  );
};
