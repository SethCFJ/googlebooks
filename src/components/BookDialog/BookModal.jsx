import React, { useRef, useEffect } from "react";
import styles from "./BookModal.module.scss";
const BookModal = (modalData, openModal, closeModal) => {
  const ref = useRef();
  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, []);
  return (
    <dialog className={styles.modal} ref={ref} onCancel={closeModal}>
      <h1>Test Title </h1>
      {/* <h1>{modalData.volumeInfo.title}</h1> */}
      <button
        onClick={() => {
          openModal = false;
          console.log("close button pressed");
          console.log(openModal);
        }}
      >
        Close
      </button>
    </dialog>
  );
};

export default BookModal;
