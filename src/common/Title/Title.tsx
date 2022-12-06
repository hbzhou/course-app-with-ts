import React from "react";

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }) => {
  return <div className="text-3xl font-bold text-center my-2">{children}</div>;
};

export default Title;
