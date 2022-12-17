import React from "react";
import cn from "classnames";

const Button: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button className={cn("border-solid border-2 p-1", className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
