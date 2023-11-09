import Image from "next/image";
import styles from "./WebDevWeston.module.css";
import webDevWestonGIF from "../../public/images/web-dev-weston.gif";
import { Browser } from "./Browser";

export const WebDevWeston = () => {
  return (
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
  );
};
