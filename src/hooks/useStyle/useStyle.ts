import { useEffect, useState } from "react";

export const useStyle = (property: string, defaultValue: number) => {
  const [styleValue, setStyleValue] = useState(defaultValue);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const computedValue = getComputedStyle(
        document.documentElement,
      ).getPropertyValue(property);
      setStyleValue(computedValue ? parseFloat(computedValue) : defaultValue);
    }
  }, [property, defaultValue]);

  return styleValue;
};
