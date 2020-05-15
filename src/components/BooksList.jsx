/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";
import { CircularProgress } from "@material-ui/core";

export default function BooksList() {
  const { googleBooks, fetchBooks, searchTerm, isPending } = useContext(BookContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  const renderBookList = () => {

    if (isPending) {
      return (
        <div className="spinner-container">
          <CircularProgress className="spinner" />
        </div>
        // <div className="spinner-container">loading</div>
      );
    }

    if (!googleBooks.length) {
      return searchTerm ? <div> Please click on "Search" button to find some books</div> : <div> Please fill search input above.</div>
    }

    return (
      <div className="book-list-container">
        {googleBooks.map((book) => {
          return <Book key={book.id} book={book}></Book>;
        })}
      </div>
    );
  };

  return <>{renderBookList()}</>;
}
