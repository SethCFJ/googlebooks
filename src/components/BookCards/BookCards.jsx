import React from "react";
import styles from "./BookCards.module.scss";
import noCover from "../../assets/noCover.jpg";
const BookCards = ({ bookData }) => {
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
            {data.volumeInfo.description && <h4>Description:</h4>}
            {data.volumeInfo.description && (
              <p>{data.volumeInfo.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCards;
