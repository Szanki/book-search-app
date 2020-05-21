import React from "react";
import { Button } from "@material-ui/core";

export default function AddButtonClick(props) {
  return (
    <Button
      variant="contained"
      color="primary"
      className="add-to-favorite-button"
      style={{ fontWeight: 700 }}
      onClick={props.onAddButtonClick}
    >
      Add to favorite
    </Button>
  );
}
