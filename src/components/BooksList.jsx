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

    if (wasRequestEmpty) {
      return (
        <FeedbackComponent text="Can't found any matches. Try another one." />
      );
    }

    if (!googleBooks.length) {
      return searchTerm ? (
        <FeedbackComponent text='Please click on "Search" button to find some books' />
      ) : (
        <FeedbackComponent text="Please fill search input above." />
      );
    }

    return (
      <div className="book-list-container">
        {googleBooks.map((book) => {
          return <Book key={book.id} book={book} />;
        })}
      </div>
    );
  };

  return renderBookList();
}
