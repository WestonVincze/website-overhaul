import { IconName, GetIcon } from "@assets/Icons";
import styles from "./Switch.module.css";
import { useState, useEffect } from "react";

interface SwitchProps {
  storageKey: string;
  onIcon: IconName;
  offIcon: IconName;
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
      aria-label="Switch"
    >
      <span className={styles.offIcon}>{GetIcon(offIcon)}</span>
      <span className={styles.onIcon}>{GetIcon(onIcon)}</span>
    </button>
  );
};
