/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";
import { CircularProgress } from "@material-ui/core";
import FeedbackComponent from "./FeedbackComponent";

export default function BooksList() {
  const {
    googleBooks,
    fetchBooks,
    searchTerm,
    isPending,
    wasRequestEmpty,
  } = useContext(BookContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  const renderBookList = () => {
    if (isPending) {
      return (
        <div className="spinner-container">
          <CircularProgress style={{ width: "150px", height: "150px" }} />
        </div>
      );
    }

    if (wasRequestEmpty || !googleBooks.length) {
      return (
        <FeedbackComponent
          wasRequestEmpty={wasRequestEmpty}
          noBooks={!googleBooks.length}
          noSearchTerm={!searchTerm}
        />
      );
    }

    return (
      <div className="book-list-container">
        {googleBooks.map((book) => {
          return <Book googleId={book.id} key={book.id} book={book.volumeInfo} />;
        })}
      </div>
    );
  };

  return renderBookList();
}
