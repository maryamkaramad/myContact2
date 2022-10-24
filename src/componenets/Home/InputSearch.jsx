import React from "react";
import { Grid, TextField } from "@mui/material";
import { useSelector } from "react-redux";

import { useState } from "react";
const InputSearch = () => {
  const contacts = useSelector((state) => state.contacts);

  const [search, setSearch] = useState("");

  const handlefilter = (e) => {
    const newfilter = contacts.filter((Contact) => {
      return Contact.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearch(newfilter);
  };

  return (
    <Grid sx={{ width: "100%", Margin: "10px" }}>
      <TextField
        sx={{ width: "100%" }}
        id="search"
        label="Search ..."
        variant="outlined"
        onChange={handlefilter}
      />
    </Grid>
  );
};

export default InputSearch;
