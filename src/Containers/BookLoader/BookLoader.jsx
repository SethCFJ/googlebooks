import React, { useEffect, useState } from "react";
import { getBookBySearchTerm } from "../../../services/book-services/book-services";
import BookCards from "../../components/BookCards/BookCards";
import spinner from "../../assets/loading.gif";
import styles from "./BookLoader.module.scss";
const BookLoader = ({ searchTerm }) => {
  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setError(false);
    setBookData(null);
    if (searchTerm != null) {
      setIsLoading(true);
      getBookBySearchTerm(searchTerm)
        .then((results) => setBookData(results))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }
  }, [searchTerm]);

  return (
    <>
      {isLoading && <img className={styles.spinner} src={spinner} />}
      {!isLoading && error && <p>{error.message}</p>}
      {!isLoading && bookData && <BookCards bookData={bookData} />}
    </>
  );
};

export default BookLoader;
