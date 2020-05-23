import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const DeleteBookModal = ({ deleteBook, cancel, open }) => {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      className={classes.modal}
      onClose={cancel}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <div className="header">Delete Book</div>
        Are you sure you want to delete this book?
        <div className="actions">
          <button onClick={deleteBook} className=" ui primary button">
            Delete
          </button>
          <button onClick={cancel} className=" ui button">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteBookModal;
