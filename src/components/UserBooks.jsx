/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { UserBooksContext } from "../context/UserBooksContext";
import { CircularProgress } from "@material-ui/core";
import Book from "./Book";
import FeedbackComponent from "./FeedbackComponent";

export default function UserBooks() {
  const { fetchUserBooks, filteredBooks, isPending, userBooks } = useContext(
    UserBooksContext
  );

  useEffect(() => {
    fetchUserBooks();
  }, []);

  const renderBookList = () => {
    if (isPending) {
      return (
        <div className="spinner-container">
          <CircularProgress style={{ width: "150px", height: "150px" }} />
        </div>
      );
    }

    if (!Object.values(filteredBooks).length) {
      return <FeedbackComponent noUserBooks={!filteredBooks.length} />;
    }

    return (
      <div className="book-list-container">
        {Object.values(filteredBooks).map((book) => {
          return <Book key={book.id} book={book} googleId={book.id} />;
        })}
      </div>
    );
  };

  return <div>{renderBookList()}</div>;
}
