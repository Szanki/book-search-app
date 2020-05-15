import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeSearch from "./HomeSearch";
import BooksList from "./BooksList";
import NavigationBar from "./NavigationBar";
import AuthContextProvider from "../context/AuthContext";
import BooksContextProvider from "../context/BookContext";

export default function Container() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <BooksContextProvider>
          <AuthContextProvider>
            <React.Fragment>
              <Route path="/" exact component={HomeSearch} />

              <Route path="/books" component={NavigationBar} />
              <Route path="/books/list" component={BooksList} />
            </React.Fragment>
          </AuthContextProvider>
        </BooksContextProvider>
      </BrowserRouter>
    </div>
  );
}
