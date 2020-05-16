import books from "../api/books";
import React, { createContext, useReducer } from "react";

const UserBooksContext = createContext();

const initialState = {
  books: [],
};

const userBooksReducer = (prevState, action) => {
  switch (action.payload) {
    case "FETCH_STREAMS":
      return {
        ...prevState,
        books: action.payload,
      };
    case "ADD_BOOK":
      return {
        ...prevState,
      };
    case "DELETE_BOOK":
      return {
        ...prevState,
      };
    default:
      return prevState;
  }
};

const UserBooksContextProvider = (props) => {
  const [{ books }, dispatch] = useReducer(userBooksReducer, initialState);

  const fetchUserBooks = async () => {
    await books
      .get("/books")
      .then((response) =>
        dispatch({ type: "FETCH_STREAMS", payload: response.data })
      );
  };

  return (
    <UserBooksContext.Provider value={books}>
      {props.children}
    </UserBooksContext.Provider>
  );
};

export default UserBooksContextProvider;
