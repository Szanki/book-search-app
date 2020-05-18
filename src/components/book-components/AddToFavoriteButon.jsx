import React, { useContext, useState } from "react";
import { UserBooksContext } from "../../context/UserBooksContext";
import Grid from "@material-ui/core/Grid";
import { Button, Snackbar } from "@material-ui/core";

export default function AddToFavoriteButon(props) {
  const { addBookToFavorite } = useContext(UserBooksContext);
  const [open, setOpen] = useState(false);


  const onButtonClick = () => {
    const favoriteBook = {
      ...props
    }
    addBookToFavorite(favoriteBook);
    setOpen(true);
  };

  const handleSnackBarClose = () => {
    setOpen(false);
  }

  return (
    <>
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
    <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        onClose={handleSnackBarClose}
        autoHideDuration={3000}
        message="Book added successfully!"
      />
    </>
  );
}
