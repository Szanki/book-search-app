import React, { useEffect, useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function BooksList() {
  const { googleBooks, fetchBooks } = useContext(BookContext);

  return <div>{googleBooks}</div>;
}
