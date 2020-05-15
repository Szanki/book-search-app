import React, { useContext } from "react";
import GoogleAuth from "../GoogleAuth";
import { BookContext } from "../context/BookContext";

export default function NavigationBar() {
  const { setTerm, onSearchSubmit, searchTerm } = useContext(BookContext);

  return (
    <div className="navigation-bar-container">
      <ul>
        <li>My book list</li>
        <li>Monthly ranking</li>
      </ul>
      <form onSubmit={onSearchSubmit} className="navigation-form-container">
        <input
          type="text"
          placeholder="What do you want to read?"
          autoComplete="off"
          value={searchTerm}
          onChange={setTerm}
        />
        <input type="submit" value="Search" />
      </form>

      <GoogleAuth />
    </div>
  );
}
