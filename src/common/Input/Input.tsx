import React from "react";

interface Props {
  placeholder?: string;
  className?: string;
}

const Input: React.FC<Props> = ({ placeholder, className }) => {
  return (
    <div>
      <input type="text" placeholder={placeholder} className={className} />
    </div>
  );
};

export default Input;
