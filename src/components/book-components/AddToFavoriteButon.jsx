import React, { useContext } from "react";
import { UserBooksContext } from "../../context/UserBooksContext";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

export default function AddToFavoriteButon({
  id,
  title,
  description,
  previewLink,
  imageLinks,
  authors,
  
}) {
  const { addBookToFavorite } = useContext(UserBooksContext);

  const onButtonClick = () => {
    const favoriteBook = {
      id: id,
      title: title,
      authors: authors,
      description: description,
      previewLink: previewLink,
      imageLinks: imageLinks,
    };
    addBookToFavorite(favoriteBook);
  };

  return (
    <Grid item className="ui-container-add-button">
      {/* TODO: <FavouriveButton book={book.id}/>
        const { myBooks } = MyBooksContext;
        const shouldDisplayRemoveFromFavouritesButton = myBooks.some(book => book.id === bookId);
        return shouldDisplayRemoveFromFavouritesButton ? <RemoveButton bookId/> : <AddButton book/> */}
      <Button
        variant="contained"
        color="primary"
        className="add-to-favorite-button"
        style={{ fontWeight: 700 }}
        onClick={onButtonClick}
      >
        Add to favorites
      </Button>
    </Grid>
  );
}
