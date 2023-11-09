import styles from "./LinedPaper.module.css";

export interface LinedPaperProps {
  title?: string;
  orientLeft?: boolean;
  children?: React.ReactNode;
}

export const LinedPaper = ({
  title,
  orientLeft = true,
  children,
}: LinedPaperProps) => {
  const orientation = orientLeft ? styles.paperLeft : styles.paperRight;

  return (
    <div className={`${styles.paper} ${orientation}`}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};
