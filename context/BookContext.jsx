import React, { useReducer, createContext } from "react";
import axios from "axios";

export const BookContext = createContext();

const initialState = {
  googleBooks: {},
  error: "",
  searchTerm: "",
};

const googleBooksReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "FETCH_STREAMS":
      return {
        ...initialState,
        googleBooks: action.payload,
      };
    case "SET_ERROR":
      return {
        ...initialState,
        error: "Something goes wrong!",
      };
    case "SET_TERM":
      return {
        ...initialState,
        searchTerm: action.payload,
      };
    default:
      return initialState;
  }
};

const BooksContextProvider = (props) => {
  const [{ googleBooks, error, searchTerm }, dispatch] = useReducer(
    googleBooksReducer,
    initialState
  );

  const API_KEY = "AIzaSyCXx4CYC_kuKFQAaWrNxGWus3gw9hNe1b8";

  const fetchBooks = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}&maxResults=10`
      )
      .then((data) => dispatch({ type: "FETCH_STREAMS", payload: data }))
      .catch((error) => dispatch({ type: "SET_ERROR", payload: error }))
  };

  const setTerm = (term) => {
    dispatch({ type: "SET_TERM", payload: term });
    console.log(searchTerm);
  };

  return (
    <BooksContextProvider
      value={(googleBooks, fetchBooks, setTerm, searchTerm)}
    >
      {props.children}
    </BooksContextProvider>
  );
};

export default BooksContextProvider;
