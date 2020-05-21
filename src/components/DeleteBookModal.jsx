import React from "react";
import ReactDOM from "react-dom";
import { Modal } from '@material-ui/core';

const DeleteBookModal = ({deleteBook, cancel, open}) => {

  return <Modal
  open={open}s
  onClose={cancel}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
      <>
        <div className="header">Delete Book</div>
          Are you sure you want to delete this book?
        <div className="actions">
          <button onClick={deleteBook} className=" ui primary button">Delete</button>
          <button onClick={cancel} className=" ui button">Cancel</button>
        </div>
      </>
    </Modal>
};

export default DeleteBookModal;
