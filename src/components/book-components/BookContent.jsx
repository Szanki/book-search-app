import React from "react";
import Grid from "@material-ui/core/Grid";

export default function BookContent({
  title,
  description,
  renderAuthors,
  authors,
}) {
  return (
    <Grid
      container
      xs={8}
      xl={7}
      lg={6}
      direction="column"
      justify="space-between"
    >
      <Grid>
        <Grid item>
          <p className="area title">{title}</p>
        </Grid>
        <Grid item>
          <p className="area publishing-house">
            {authors ? renderAuthors() : null}
          </p>
        </Grid>
        <Grid item>
          <p className=" area text">{description ? description : null}</p>
        </Grid>
      </Grid>
      <Grid>
        <p className="footer">Lorem ipsum, dolor</p>
      </Grid>
    </Grid>
  );
}
