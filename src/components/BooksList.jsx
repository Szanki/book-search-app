/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";
import { CircularProgress } from "@material-ui/core";

export default function BooksList() {
  const { googleBooks, fetchBooks, searchTerm, isPending, wasRequestEmpty } = useContext(BookContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  const renderBookList = () => {

    if (isPending) {
      return (
        <div className="spinner-container">
          <CircularProgress style={{ width: '150px', height: '150px' }} />
        </div>
        // <div className="spinner-container">loading</div>
      );
    }


    if (wasRequestEmpty) {
      {/* TODO: If you create custom component like "FeedbackComponent", style it, and render some text here */ }
      // <FeedbackComponent wasRequestEmpty={wasRequestEmpty} googleBooks ={googleBooks} searchTerm= {searchTerm}/>
      return <div> Can't found any matches. Try another one.</div>
    }

    if (!googleBooks.length) {
      return searchTerm ? <div> Please click on "Search" button to find some books</div> : <div> Please fill search input above.</div>
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
