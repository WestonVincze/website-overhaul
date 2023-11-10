import styles from "./LinedPaper.module.css";

export interface LinedPaperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  orientLeft?: boolean;
  children?: React.ReactNode;
}

export const LinedPaper = ({
  title,
  orientLeft = true,
  children,
  ...props
}: LinedPaperProps) => {
  const orientation = orientLeft ? styles.paperLeft : styles.paperRight;

  return (
    <div className={`${styles.paper} ${orientation}`} {...props}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};
