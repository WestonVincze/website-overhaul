import { useState } from "react";
import Link from "next/link";
import styles from "./FolderTab.module.css";
import { animated, useSpring } from "react-spring";

export interface FolderTabProps {
  path: string;
  text?: string;
  isActive?: boolean;
}

export const FolderTab = ({
  path,
  text,
  isActive = false,
  ...props
}: FolderTabProps) => {
  const [isTargeted, setIsTargeted] = useState(false);

  const onMouseEnter = (): void => {
    if (isTargeted) return;
    setIsTargeted(true);
  };

  const onMouseLeave = (): void => {
    if (!isTargeted) return;
    setIsTargeted(false);
  };

  const animatedStyle = useSpring({
    loop: { reverse: true },
    y: isTargeted || isActive ? "2px" : "7px",
  });

  return (
    <animated.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={animatedStyle}
      {...props}
    >
      <Link
        href={path}
        className={`${styles.folderTab} ${isActive ? styles.active : ""} ${
          text == null ? styles.blankTab : ""
        }`}
      >
        <span>{text}</span>
      </Link>
    </animated.div>
  );
};
