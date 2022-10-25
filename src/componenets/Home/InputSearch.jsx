import React from "react";
import { Grid, TextField } from "@mui/material";

const InputSearch = ({ handlsearch }) => {
  return (
    <Grid sx={{ width: "100%", Margin: "10px" }}>
      <TextField
        sx={{ width: "100%" }}
        id="search"
        label="Search ..."
        variant="outlined"
        onChange={handlsearch}
      />
    </Grid>
  );
};

export default InputSearch;
