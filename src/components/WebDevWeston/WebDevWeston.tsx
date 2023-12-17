import Image from "next/image";
import styles from "./WebDevWeston.module.css";
import webDevWestonGIF from "/public/images/web-dev-weston.gif";
import webDevWestonPNG from "/public/images/web-dev-weston.png";
import { Browser } from "./Browser";
import { useAppState } from "@providers/AppStateProvider";

export const WebDevWeston = () => {
  const { reducedMotion } = useAppState();
  const webDevWestonImage = reducedMotion ? webDevWestonPNG : webDevWestonGIF;
  const imageType = reducedMotion ? "PNG image" : "Animated GIF";
  return (
    <div className={styles.weston}>
      <Image
        priority={true}
        className={styles.weston}
        width={400}
        src={webDevWestonImage}
        alt={`${imageType} of Weston 'web' developing`}
      />
      <Browser />
    </div>
  );
};
