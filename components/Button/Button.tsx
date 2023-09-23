import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";
import { ButtonVariants } from "./types";

interface ButtonProps {
  /* text: string */
  path: string;
  variant?: ButtonVariants;
  children?: JSX.Element;
}

export const Button = ({
  path,
  variant,
  children
}: ButtonProps): JSX.Element => {
  const buttonStyle = variant != null ? styles[variant] : styles.primary;

  return (
    <Link legacyBehavior href={path}>
      <a className={`${styles.button} ${buttonStyle}`}>{children}</a>
    </Link>
  );
};
