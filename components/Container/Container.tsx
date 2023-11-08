import styles from "./Container.module.css";

interface ContainerProps {
  children?: React.ReactNode;
  centered?: boolean;
}

export const Container = ({
  children,
  centered = true,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={`${styles.container} ${centered ? "text-center" : ""}`}
      {...props}
    >
      {children}
    </div>
  );
};
