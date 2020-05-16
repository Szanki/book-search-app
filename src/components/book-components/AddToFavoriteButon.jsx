import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

export default function AddToFavoriteButon() {
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
      >
        Add to favorites
      </Button>
    </Grid>
  );
}
