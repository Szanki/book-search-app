import React, { useState } from "react";
import { Button } from "@material-ui/core";
import DeleteBookModal from "../../DeleteBookModal";

export default function RemoveButton(props) {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true)
  }

  return (
    <>
    <Button
      variant="contained"
      color="secondary"
      className="add-to-favorite-button"
      style={{ fontWeight: 700 }}
      onClick={showModal}
    >
      Delete from favorite
    </Button>
    {open && <DeleteBookModal open={open} deleteBook={props.onRemoveButtonClick} cancel={() => setOpen(false)}/>}
    </>
  );
}
