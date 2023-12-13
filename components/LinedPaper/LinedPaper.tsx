import styles from "./LinedPaper.module.css";

export interface LinedPaperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
}

export const LinedPaper = ({ title, children, ...props }: LinedPaperProps) => {
  return (
    <div className={styles.paper} {...props}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};
