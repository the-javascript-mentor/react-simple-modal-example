import "./App.css";
import React from "react";
import useModalState from "./useModalState";

const Modal = () => {
  const { isModalOpen, openModal, closeModal } = useModalState();
  return (
    <div className="App">
      <input type="text" tabIndex={isModalOpen ? -1 : 0} />
      <button onClick={openModal} tabIndex={isModalOpen ? -1 : 0}>
        Open modal
      </button>
      {isModalOpen && (
        <>
          <div className="ModalLayover" />
          <div className="Modal">
            <p>Modal content will come here.</p>
            <button className="ModalCloseButton" onClick={closeModal}>
              ✕
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
