import React, { useContext, useState } from "react";
import { UserBooksContext } from "../../context/UserBooksContext";
import Grid from "@material-ui/core/Grid";
import { Button, Snackbar } from "@material-ui/core";
import RemoveButton from "./ButtonComponents/RemoveButton";
import AddButton from "./ButtonComponents/AddButton";

export default function AddToFavoriteButon(props) {
  const { addBookToFavorite, userBooks, deleteBook } = useContext(
    UserBooksContext
  );
  const [open, setOpen] = useState(false);

  const onAddButtonClick = () => {
    const favoriteBook = {
      ...props,
    };
    addBookToFavorite(favoriteBook);
    setOpen(true);
  };

  const handleSnackBarClose = () => {
    setOpen(false);
  };

  const onRemoveButtonClick = () => {
    deleteBook(props.id);
  };

  const renderButtonText = () => {
    return Object.values(userBooks).some((book) => book.id === props.id) ? (
      <RemoveButton onRemoveButtonClick={onRemoveButtonClick} />
    ) : (
      <AddButton onAddButtonClick={onAddButtonClick} />
    );
  };

  return (
    <>
      <Grid item className="ui-container-add-button">
        {/* TODO: <FavouriveButton book={book.id}/>
        const { myBooks } = MyBooksContext;
        const shouldDisplayRemoveFromFavouritesButton = myBooks.some(book => book.id === bookId);
        return shouldDisplayRemoveFromFavouritesButton ? <RemoveButton bookId/> : <AddButton book/> */}
        <div>{renderButtonText()}</div>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        onClose={handleSnackBarClose}
        autoHideDuration={3000}
        message="Book added successfully!"
      />
    </>
  );
}
