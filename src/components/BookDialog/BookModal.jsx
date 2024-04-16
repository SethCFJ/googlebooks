import React, { useRef, useEffect } from "react";
import styles from "./BookModal.module.scss";
import noCover from "../../assets/noCover.jpg";
const BookModal = ({ modalData, openModal, closeModal, setModal }) => {
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
      <div className={styles.container}>
        {/* Book Title */}
        <div className={styles.header}>
          <div className={styles.header__titleContainer}>
            {modalData.saleInfo.buyLink ? (
              <a
                target="_blank"
                className={styles.link}
                href={modalData.saleInfo.buyLink}
              >
                <h1>{modalData.volumeInfo.title}</h1>
              </a>
            ) : (
              <h1>{modalData.volumeInfo.title}</h1>
            )}

            {modalData.volumeInfo.publishedDate && (
              <h3>{modalData.volumeInfo.publishedDate}</h3>
            )}
          </div>
          <button
            className={styles.button}
            onClick={() => {
              openModal = false;
              console.log("close button pressed");
              console.log(openModal);
              setModal(false);
            }}
          >
            X
          </button>
        </div>

        {modalData.volumeInfo.imageLinks ? (
          <img
            className={styles.img}
            alt="Book Cover"
            src={modalData.volumeInfo.imageLinks.thumbnail}
          />
        ) : (
          <img className={styles.img} alt="No Cover" src={noCover} />
        )}

        {/* Author List */}
        <ul className={styles.list}>
          {modalData.volumeInfo.authors && <h3>Author/s:</h3>}
          {modalData.volumeInfo.authors &&
            modalData.volumeInfo.authors.map((author) => (
              <li key={author}>{author}</li>
            ))}
        </ul>
        <div className={styles.description}>
          {modalData.volumeInfo.description && <h3>Description:</h3>}
          {modalData.volumeInfo.description && (
            <p>{modalData.volumeInfo.description}</p>
          )}
        </div>
        <div className={styles.moreInfo}>
          {modalData.volumeInfo.publisher && (
            <div className={styles.moreInfo__entries}>
              <h3>Publisher:</h3>
              <p>{modalData.volumeInfo.publisher}</p>
            </div>
          )}
          {modalData.volumeInfo.pageCount && (
            <div className={styles.moreInfo__entries}>
              <h3>Total Pages:</h3>
              <p>{modalData.volumeInfo.pageCount}</p>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default BookModal;
