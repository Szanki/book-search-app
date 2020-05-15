import React, { useEffect, useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";
import { CircularProgress } from "@material-ui/core";

export default function BooksList() {
  const { googleBooks, fetchBooks } = useContext(BookContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  const renderBookList = () => {
    if (!googleBooks.length) {
      return (
        <div className="spinner-container">
          <CircularProgress className="spinner" />
        </div>
        // <div className="spinner-container">loading</div>
      );
    } else {
      return (
        <div className="book-list-container">
          {googleBooks.map((book) => {
            return <Book key={book.id} book={book}></Book>;
          })}
        </div>
      );
    }
  };

  return <>{renderBookList()}</>;
}
