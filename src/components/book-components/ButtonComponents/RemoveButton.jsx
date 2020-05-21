import React from "react";
import { Button } from "@material-ui/core";
// import Modal from "../../DeleteBookModal";
import { Link } from "react-router-dom";

export default function RemoveButton(props) {
  return (
    // <Link to="/books/delete">
    <Button
      variant="contained"
      color="secondary"
      className="add-to-favorite-button"
      style={{ fontWeight: 700 }}
      onClick={props.onRemoveButtonClick}
    >
      Delete from favorite
    </Button>
    // </Link>
  );
}
