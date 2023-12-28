import { IconName, GetIcon } from "@assets/Icons";
import styles from "./Switch.module.css";
import { useState, useEffect } from "react";

/**
 * @returns localStorage value of `storageKey` converted to boolean equivalent (`true` for `"true"`), or `defaultValue` if window not defined or no value for `storageKey` is found
 */
const getLocalBoolOrDefault = (
  storageKey: string,
  defaultValue: boolean,
): boolean => {
  if (typeof window === "undefined") return defaultValue;

  const storedValue = localStorage.getItem(storageKey);

  return storedValue !== null ? storedValue === "true" : defaultValue;
};

interface SwitchProps {
  storageKey: string;
  onIcon: IconName;
  offIcon: IconName;
  title: string;
  initialValue?: boolean;
  onToggle?: (value: boolean) => void;
  onMount?: (value: boolean) => void;
}

export const Switch = ({
  storageKey,
  onIcon,
  offIcon,
  title,
  initialValue = false,
  onToggle,
  onMount,
}: SwitchProps) => {
  const [value, setValue] = useState<boolean | null>(null);

  useEffect(() => {
    setValue(getLocalBoolOrDefault(storageKey, initialValue));
  }, [initialValue, storageKey]);

  useEffect(() => {
    if (typeof window === "undefined" || value === null) return;

    localStorage.setItem(storageKey, String(value));
  }, [value, storageKey]);

  useEffect(() => {
    if (value === null) return;

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
