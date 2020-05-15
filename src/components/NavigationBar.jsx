import React, { useContext } from "react";
import GoogleAuth from "../GoogleAuth";
import { BookContext } from "../context/BookContext";
import SearchInput from './SearchInput';

export default function NavigationBar(props) {

  // console.log(props);
  // const bookContext = props.locaion.path === '/books/mylist' ? MyBookContext : FetchBooksContext
  const { setTerm, onSearchSubmit, searchTerm } = useContext(BookContext);

  return (
    <div className="navigation-bar-container">
      <ul>
        <li>My book list</li>
        <li>Monthly ranking</li>
      </ul>
      <SearchInput onSearchSubmit={onSearchSubmit} setTerm={setTerm} searchTerm={searchTerm} />
      <GoogleAuth />
    </div>
  );
}
