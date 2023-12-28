import styles from "./Switch.module.css";

export const SwitchSkeleton = () => {
  return <div className={`${styles.switch} ${styles.skeleton}`} />;
};
