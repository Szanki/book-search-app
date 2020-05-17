import React, { createContext, useReducer } from "react";
import books from "../api/books";
import _ from "lodash";

export const UserBooksContext = createContext();

const initialState = {
  userBooks: {},
  isPending: false,
  searchTerm: "",
};

const userBooksReducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_STREAMS":
      return {
        ...prevState,
        userBooks: _.mapKeys(action.payload, "id"),
        isPending: false
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
      return {
        ...prevState,
        userBooks: _.omit(prevState, action.payload),
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
  const [{ userBooks, isPending, searchTerm }, dispatch] = useReducer(userBooksReducer, initialState);

  const fetchUserBooks = async () => {
    dispatch({type:'SET_IS_PENDING'});
  
    await books.get("/books").then((response) => {
      dispatch({ type: "FETCH_STREAMS", payload: response.data });
    });
  };

  const setTerm = (e) => {
    
    dispatch({ type: "SET_TERM", payload: e.target.value });
  };

  // Do i need dispatch this i tak ładuje komponent przy starcie listy?
  const addBookToFavorite = async (book) => {
    
    await books.post("/books", book).then((response) => {
      dispatch({ type: "ADD_BOOK", payload: response.data });
    });
  };

  const deleteBook = async (id) => {
    await books.delete(`/books/${id}`);
    dispatch({ type: "DELETE_BOOK", payload: id });
  };

  const onSearchSubmit = (e) => {
    
    e.preventDefault();
    filterBooks()
  };

  const filterBooks = (term)=>{
if(userBooks.length === 0){
  return `You don't have any books!`
}

const filteredBooks = Object.values(userBooks).filter(book=>{
  return book.title.toLowerCase().includes(searchTerm)
})
  return filteredBooks
  }

  return (
    <UserBooksContext.Provider
      value={{ userBooks, addBookToFavorite, fetchUserBooks, deleteBook, isPending, setTerm, searchTerm, onSearchSubmit }}
    >
      {props.children}
    </UserBooksContext.Provider>
  );
};

export default UserBooksContextProvider;
