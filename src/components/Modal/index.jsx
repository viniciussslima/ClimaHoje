import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./styles.css";

function Modal({ title, content, options, onClose }) {
  return (
    <div className="modal-content">
      <AiFillCloseCircle size={30} onClick={onClose} />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Modal;
