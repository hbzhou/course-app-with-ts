import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button className={cn(className, styles["btn"])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
