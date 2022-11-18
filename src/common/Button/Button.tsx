import React from "react";
interface Props {
  children: React.ReactNode;
  onclick: () => void;
}

const Button: React.FC<Props> = ({ children, onclick }) => {
  return <button onClick={onclick}>{children}</button>;
};

export default Button;
