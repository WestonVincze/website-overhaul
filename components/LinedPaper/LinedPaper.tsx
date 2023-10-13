import React from "react";
import styles from "./LinedPaper.module.css";
import { DragSnap } from "../Drag/DragSnap";

export interface LinedPaperProps {
  title?: string;
  orientLeft?: boolean;
  children?: React.ReactNode;
}

export const LinedPaper = ({
  title,
  orientLeft = true,
  children,
}: LinedPaperProps): JSX.Element => {
  const orientation = orientLeft ? styles.paperLeft : styles.paperRight;

  return (
    <DragSnap>
      <div className={`${styles.paper} ${orientation}`}>
        <h1>{title}</h1>
        {children}
      </div>
    </DragSnap>
  );
};
