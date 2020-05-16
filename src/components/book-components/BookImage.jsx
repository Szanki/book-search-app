import React from "react";
import Grid from "@material-ui/core/Grid";

export default function BookImage({ previewLink, imageLinks, title }) {
  return (
    <Grid item xs={3} xl={2} lg={3}>
      <a href={previewLink} target="_blank">
        <img src={imageLinks ? imageLinks.thumbnail : null} alt={title} />
      </a>
    </Grid>
  );
}
