import React from "react";
import { Grid, TextField } from "@mui/material";

const InputSearch = ({ handlsearch }) => {
  return (
    <Grid sx={{ Margin: "10px" }} container xs={12} justifyContent={"center"} alignItems={"center"} >
      <Grid item xs={6}>
        <TextField
          fullWidth
          id="search"
          label="Search ..."
          variant="outlined"
          onChange={(e) => handlsearch(e)}
        />
      </Grid>

    </Grid>
  );
};

export default InputSearch;
