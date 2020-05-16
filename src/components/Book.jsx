import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import Grid from "@material-ui/core/Grid";
import AddToFavoriteButon from "./book-components/AddToFavoriteButon";
import BookImage from "./book-components/BookImage";
import BookContent from "./book-components/BookContent";
import "../book.css";

export default function Book({ book }) {
  // const {setTerm} =useContext(BookContext)
  const {
    title,
    description,
    authors,
    imageLinks,
    previewLink,
  } = book.volumeInfo;

  const renderAuthors = () => {
    return (
      <>
        {authors.map((author) => (
          <span className="author-span">{author} </span>
        ))}
      </>
    );
  };

  return (
    <Grid
      container
      xs={12}
      xl={7}
      lg={9}
      className="book-container"
      justify="space-between"
    >
      <BookImage
        previewLink={previewLink}
        imageLinks={imageLinks}
        title={title}
      />
      <BookContent
        title={title}
        authors={authors}
        renderAuthors={renderAuthors}
        description={description}
      />
      <AddToFavoriteButon />
    </Grid>
  );
}
