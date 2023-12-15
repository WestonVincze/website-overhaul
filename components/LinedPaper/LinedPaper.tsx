import styles from "./LinedPaper.module.css";

export interface LinedPaperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
}

export const LinedPaper = ({ title, children, ...props }: LinedPaperProps) => {
  return (
    <article className={styles.paper} {...props}>
      <header>{title && <h3>{title}</h3>}</header>
      <section>{children}</section>
    </article>
  );
};
