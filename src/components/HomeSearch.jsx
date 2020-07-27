import React, { useContext } from "react";
import GoogleAuth from "../GoogleAuth";
import { BookContext } from "../context/BookContext";
import { Link } from "react-router-dom";
import { Input } from "@material-ui/core";
import HomeSearchInput from "./SearchInput";

export default function HomeSearch() {
  const { searchTerm, setTerm, fetchBooks, onSearchSubmit } = useContext(
    BookContext
  );

  return (
    <>
      <GoogleAuth />
      <div className="home-form-container">
        <div className="flex-form">
          <input
            type="text"
            className="home-search"
            placeholder="What do you want to read?"
            autoComplete="off"
            value={searchTerm}
            onChange={setTerm}
            onSubmit={onSearchSubmit}
          />
          <Link to="/books/list" className="searchInput" onClick={fetchBooks}>
            Search
          </Link>
        </div>
      </div>
      <div className="fullscreen-video-wrap">
        <img
          className="background-video"
          src={require("../media/bookshelves.svg")}
        ></img>
      </div>
    </>
  );
}
