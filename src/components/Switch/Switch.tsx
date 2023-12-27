import { IconName, GetIcon } from "@assets/Icons";
import styles from "./Switch.module.css";
import { useState, useEffect } from "react";

interface SwitchProps {
  storageKey: string;
  onIcon: IconName;
  offIcon: IconName;
  initialValue?: boolean;
  title: string;
  onToggle?: (value: boolean) => void;
  onMount?: (value: boolean) => void;
}

export const Switch = ({
  storageKey,
  onIcon,
  offIcon,
  initialValue = false,
  title,
  onToggle,
  onMount,
}: SwitchProps) => {
  const storedValue =
    typeof localStorage !== "undefined" && localStorage.getItem(storageKey);
  const [value, setValue] = useState<boolean>(
    storedValue !== null ? storedValue === "true" : initialValue,
  );

  useEffect(() => {
    if (typeof localStorage === "undefined") return;

    localStorage.setItem(storageKey, String(value));
  }, [value, storageKey]);

  useEffect(() => {
    onMount?.(value);
  }, [onMount, value]);

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
      <span className={styles.onIcon}>{GetIcon(onIcon)}</span>
      <span className={styles.offIcon}>{GetIcon(offIcon)}</span>
    </button>
  );
};
