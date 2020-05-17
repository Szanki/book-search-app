import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeSearch from "./HomeSearch";
import BooksList from "./BooksList";
import NavigationBar from "./NavigationBar";
import AuthContextProvider from "../context/AuthContext";
import BooksContextProvider from "../context/BookContext";
import UserBooksContextProvider from "../context/UserBooksContext";
import UserBooks from "./UserBooks";

export default function Container() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <UserBooksContextProvider>
          <BooksContextProvider>
            <AuthContextProvider>
              <React.Fragment>
                <Route path="/" exact component={HomeSearch} />
                <Route path="/books" component={NavigationBar} />
                <Route path="/books/list" component={BooksList} />
                <Route path="/books/userbooks" component={UserBooks} />
              </React.Fragment>
            </AuthContextProvider>
          </BooksContextProvider>
        </UserBooksContextProvider>
      </BrowserRouter>
    </div>
  );
}
