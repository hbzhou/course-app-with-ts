import React from "react";
import Button from "../Button/Button";
import "./Modal.module.scss";

interface Props {
  handleClose: () => void;
  show: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ show, handleClose, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
        <Button className="modal-close" onClick={handleClose}>
          close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
