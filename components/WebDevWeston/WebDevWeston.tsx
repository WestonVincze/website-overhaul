import React from "react";
import Image from "next/image";
import { DragSnap } from "../Drag/DragSnap";
import styles from "./WebDevWeston.module.css";
import webDevWestonGIF from "../../public/images/web-dev-weston.gif";
import { Browser } from "./Browser";

export const WebDevWeston = (): JSX.Element => {
  return (
    <DragSnap>
      <div className={styles.weston}>
        <Image
          priority={true}
          className={styles.weston}
          width={400}
          src={webDevWestonGIF}
          alt="Animated GIF of Weston 'web' developing"
        />
        <Browser />
      </div>
    </DragSnap>
  );
};
