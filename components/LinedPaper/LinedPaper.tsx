import React from "react";
import styles from "./LinedPaper.module.css";
import { DragSnap } from "../Drag/DragSnap";

export interface LinedPaperProps {
  id: number;
  title: string;
  message: string;
  orientLeft?: boolean;
}

export const LinedPaper = ({
  message,
  title,
  orientLeft = true,
}: LinedPaperProps): JSX.Element => {
  const orientation = orientLeft ? styles.paperLeft : styles.paperRight;

  return (
    <DragSnap>
      <div className={`${styles.paper} ${orientation}`}>
        <h1 className="written">{title}</h1>
        <p>{message}</p>
      </div>
    </DragSnap>
  );
};
