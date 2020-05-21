import React, { useReducer, createContext } from "react";
import axios from "axios";
require("dotenv").config();

export const BookContext = createContext();

const initialState = {
  googleBooks: [],
  error: "",
  searchTerm: "",
  isPending: false,
  wasRequestEmpty: false,
};

const googleBooksReducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_STREAMS":
      return {
        ...prevState,
        googleBooks: action.payload || [],
        wasRequestEmpty: !action.payload,
        isPending: false,
      };
    case "SET_ERROR":
      return {
        ...prevState,
        error: "Something goes wrong!",
        googleBooks: [],
        isPending: false,
      };
    case "SET_IS_PENDING":
      return {
        ...prevState,
        isPending: true,
      };
    case "SET_TERM":
      return {
        ...prevState,
        searchTerm: action.payload,
      };
    default:
      return prevState;
  }
};

const BooksContextProvider = (props) => {
  const [
    { googleBooks, isPending, wasRequestEmpty, error, searchTerm },
    dispatch,
  ] = useReducer(googleBooksReducer, initialState);
  const API_KEY = process.env.REACT_APP_BOOK_SEARCH_API_KEY;

  const fetchBooks = async () => {
    dispatch({ type: "SET_IS_PENDING" });
    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}&maxResults=10`
      )
      .then((response) =>
        dispatch({ type: "FETCH_STREAMS", payload: response.data.items })
      )
      .catch((error) => dispatch({ type: "SET_ERROR", payload: error }));
  };

  const setTerm = (e) => {
    dispatch({ type: "SET_TERM", payload: e.target.value });
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <BookContext.Provider
      value={{
        googleBooks,
        fetchBooks,
        setTerm,
        searchTerm,
        onSearchSubmit,
        isPending,
        wasRequestEmpty,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BooksContextProvider;
