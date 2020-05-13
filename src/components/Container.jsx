import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeSearch from "./HomeSearch";
import BooksList from "./BooksList";
import AuthContextProvider from "../context/AuthContext";
import BooksContextProvider from "../context/BookContext";

export default function Container() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <BooksContextProvider>
          <AuthContextProvider>
            <React.Fragment>
              <Route path="/" component={HomeSearch} />
            </React.Fragment>
          </AuthContextProvider>
        </BooksContextProvider>
      </BrowserRouter>
    </div>
  );
}
