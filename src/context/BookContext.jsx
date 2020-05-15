import React, { useReducer, createContext } from "react";
import axios from "axios";

export const BookContext = createContext();

const initialState = {
  googleBooks: [],
  error: "",
  searchTerm: "",
};

const googleBooksReducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_STREAMS":
      return {
        ...prevState,
        googleBooks: action.payload,
      };
    case "SET_ERROR":
      return {
        ...prevState,
        error: "Something goes wrong!",
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
  const [{ googleBooks, error, searchTerm }, dispatch] = useReducer(
    googleBooksReducer,
    initialState
  );

  const API_KEY = "AIzaSyCXx4CYC_kuKFQAaWrNxGWus3gw9hNe1b8";

  const fetchBooks = async () => {
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
      value={{ googleBooks, fetchBooks, setTerm, searchTerm, onSearchSubmit }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BooksContextProvider;