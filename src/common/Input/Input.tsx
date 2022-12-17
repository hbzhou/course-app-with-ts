import React, { ChangeEventHandler, forwardRef } from "react";
import cn from "classnames";

interface Props {
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input ref={ref} {...props} className={cn(props.className, "border-solid border-2 p-2 h-10 w-80")} />;
});

export default Input;
