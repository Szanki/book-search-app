import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import "../book.css";

export default function Book(props) {
  // const {setTerm} =useContext(BookContext)
  const {
    title,
    description,
    authors,
    imageLinks,
    previewLink,
  } = props.book.volumeInfo;

  console.log(authors);

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
      <Grid item xs={3} xl={2} lg={3}>
        <a href={previewLink} target="_blank">
          <img src={imageLinks ? imageLinks.thumbnail : null} alt={title} />
        </a>
      </Grid>
      <Grid
        container
        xs={8}
        xl={7}
        lg={6}
        direction="column"
        justify="space-between"
      >
        <Grid xs={7} xl={6} lg={5}>
          <Grid item xs={1} xl={1} lg={1}>
            <p className="area title">{title}</p>
          </Grid>
          <Grid item xs={1} xl={1} lg={1}>
            <p className="area publishing-house">
              {authors ? renderAuthors() : null}
            </p>
          </Grid>
          <Grid item xs={4} xl={3} lg={3}>
            <p className=" area text">{description}</p>
          </Grid>
        </Grid>
        {/* justify="flex-end" */}
        <Grid item xs={1} xl={1} lg={1}>
          <p className="footer">Lorem ipsum, dolor</p>
        </Grid>
      </Grid>
      <Grid item className="ui-container-add-button">
        <Button variant="contained" color="primary">
          Add to favorites
        </Button>
      </Grid>
    </Grid>
  );
}
