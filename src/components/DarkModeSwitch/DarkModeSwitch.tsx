import { Switch } from "@components/Switch";

export const DarkModeSwitch = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const toggleDarkMode = (on: boolean) => {
    document.body.dataset.theme = on ? "dark" : "light";
  };

  return (
    <Switch
      storageKey="darkMode"
      onIcon="Moon"
      offIcon="Sun"
      title="Dark mode theme toggle"
      onMount={toggleDarkMode}
      onToggle={toggleDarkMode}
      initialValue={prefersDark}
    />
  );
};
