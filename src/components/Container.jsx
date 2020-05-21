import React from "react";
import { Router, Route } from "react-router-dom";
import HomeSearch from "./HomeSearch";
import BooksList from "./BooksList";
import NavigationBar from "./NavigationBar";
import AuthContextProvider from "../context/AuthContext";
import BooksContextProvider from "../context/BookContext";
import UserBooksContextProvider from "../context/UserBooksContext";
import UserBooks from "./UserBooks";
import history from "../history";
import { Modal } from "@material-ui/core";

export default function Container() {
  return (
    <div className="app-container">
      <Router history={history}>
        <UserBooksContextProvider>
          <BooksContextProvider>
            <AuthContextProvider>
              <React.Fragment>
                <Route path="/" exact component={HomeSearch} />
                <Route path="/books" component={NavigationBar} />
                <Route path="/books/list" component={BooksList} />
                <Route path="/books/delete" exact component={Modal} />
                <Route path="/books/userbooks" component={UserBooks} />
              </React.Fragment>
            </AuthContextProvider>
          </BooksContextProvider>
        </UserBooksContextProvider>
      </Router>
    </div>
  );
}
