import styles from "./Switch.module.css";
import { useState } from "react";

interface SwitchProps {
  initialValue?: boolean;
  onToggle?: (value: boolean) => void;
}

export const Switch = ({ initialValue = false, onToggle }: SwitchProps) => {
  const [value, setValue] = useState(initialValue);

  const handleToggle = () => {
    setValue(!value);
    onToggle?.(value);
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={value} onChange={handleToggle} />
      {value ? "on" : "off"}
    </label>
  );
};
