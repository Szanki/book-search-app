import React, { useEffect, useContext } from "react";
import { UserBooksContext } from "../context/UserBooksContext";
import { CircularProgress } from "@material-ui/core";
import Book from './Book'

export default function UserBooks() {
  const { fetchUserBooks, userBooks, isPending } = useContext(UserBooksContext);

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
    return (
      <div className="book-list-container">
        {Object.values(userBooks).map((book) => {
          return <Book key={book.id} book={book} />;
        })}
      </div>
    
    );
  }

return <div>{renderBookList()}</div>;
}
