import React, { useState } from "react";
import styles from "./BookCards.module.scss";
import noCover from "../../assets/noCover.jpg";
import BookModal from "../BookDialog/BookModal";

const BookCards = ({ bookData }) => {
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  return (
    <div className={styles.container}>
      {bookData.map((data) => (
        <div className={styles.card} key={data.id}>
          {data.volumeInfo.imageLinks ? (
            <img
              className={styles.card__imgContainer}
              alt="Book Cover"
              src={data.volumeInfo.imageLinks.thumbnail}
            />
          ) : (
            <img
              className={styles.card__imgContainer}
              alt="No Cover"
              src={noCover}
            />
          )}

          <div className={styles.card__text}>
            <p className={styles.card__text__title}>{data.volumeInfo.title}</p>
            {data.volumeInfo.authors && <h4>Author/s:</h4>}
            <ul className={styles.card__text__authorList}>
              {data.volumeInfo.authors &&
                data.volumeInfo.authors.map((author) => (
                  <li key={author}>{author}</li>
                ))}
            </ul>

            <button
              className={styles.button}
              onClick={() => {
                setModal(true);
                setModalInfo(data);
                console.log("open modal clicked");
                console.log(modal);
              }}
            >
              More info
            </button>
          </div>
        </div>
      ))}

      {modal && (
        <BookModal
          openModal={modal}
          closeModal={() => setModal(false)}
          modalData={modalInfo}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default BookCards;
