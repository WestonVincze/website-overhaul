import { IconNames, Icons } from "@assets/Icons";
import styles from "./Switch.module.css";
import { useState, useEffect } from "react";

interface SwitchProps {
  storageKey: string;
  onIcon: IconNames;
  offIcon: IconNames;
  onToggle?: (value: boolean) => void;
  title: string;
}

export const Switch = ({
  storageKey,
  onIcon,
  offIcon,
  onToggle,
  title,
}: SwitchProps) => {
  const initialValue = localStorage.getItem(storageKey) === "true";
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(storageKey, String(value));
  }, [value, storageKey]);

  const handleToggle = () => {
    const newValue = !value;
    setValue(newValue);
    onToggle?.(newValue);
  };

  return (
    <button
      className={`${styles.switch} ${value ? styles.on : styles.off}`}
      title={title}
      onClick={handleToggle}
    >
      {Icons[onIcon].icon()}
      {Icons[offIcon].icon()}
    </button>
  );
};
