import React, { createContext, useReducer } from "react";
import books from "../api/books";
import history from "../history";
import _ from "lodash";

export const UserBooksContext = createContext();

const initialState = {
  userBooks: {},
  filteredBooks: {},
  isPending: false,
  searchTerm: "",
};

const userBooksReducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS":
      return {
        ...prevState,
        userBooks: _.mapKeys(action.payload, "id"),
        filteredBooks: _.mapKeys(action.payload, "id"),
        isPending: false,
      };
    case "FILTER_BOOKS":
      return {
        ...prevState,
        filteredBooks: action.payload,
      };
    case "SET_IS_PENDING":
      return {
        ...prevState,
        isPending: true,
      };
    case "ADD_BOOK":
      return {
        ...prevState,
        userBooks: {
          ...prevState.userBooks,
          [action.payload.id]: action.payload,
        },
      };
    case "DELETE_BOOK":
      // debugger;
      return {
        ...prevState,
        userBooks: _.omit(prevState.userBooks, action.payload),
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

const UserBooksContextProvider = (props) => {
  const [
    { filteredBooks, userBooks, isPending, searchTerm },
    dispatch,
  ] = useReducer(userBooksReducer, initialState);

  const fetchUserBooks = async () => {
    dispatch({ type: "SET_IS_PENDING" });

    await books.get("/books").then((response) => {
      dispatch({ type: "FETCH_BOOKS", payload: response.data });
    });
  };

  const setTerm = (e) => {
    dispatch({ type: "SET_TERM", payload: e.target.value });
  };

  const addBookToFavorite = async (book) => {
    await books.post("/books", book).then((response) => {
      dispatch({ type: "ADD_BOOK", payload: response.data });
    });
  };

  const deleteBook = async (id) => {
    await books.delete(`/books/${id}`);
    dispatch({ type: "DELETE_BOOK", payload: id });
    history.push("/books/userbooks");
    // fetchUserBooks();
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    filterBooks();
  };

  const filterBooks = () => {
    if (userBooks.length === 0) {
      return `You don't have any books!`;
    }

    const filteredBooks = Object.values(userBooks).filter((book) => {
      return (
        book.title.toLowerCase().includes(searchTerm) ||
        book.authors
          ?.reduce((prev, curr) => `${curr}${prev}`)
          .toLowerCase()
          .includes(searchTerm)
      );
    });

    dispatch({ type: "FILTER_BOOKS", payload: filteredBooks });
  };

  return (
    <UserBooksContext.Provider
      value={{
        filteredBooks,
        addBookToFavorite,
        fetchUserBooks,
        deleteBook,
        isPending,
        setTerm,
        searchTerm,
        onSearchSubmit,
        userBooks,
        deleteBook,
      }}
    >
      {props.children}
    </UserBooksContext.Provider>
  );
};

export default UserBooksContextProvider;
