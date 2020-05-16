import React from "react";
import { Link } from "react-router-dom";

export default function HomeSearchInput({
  setTerm,
  searchTerm,
  onSearchSubmit,
  fetchBooks,
}) {
  return (
    <>
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
    </>
  );
}
