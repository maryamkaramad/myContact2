import React from 'react'
import { Grid } from "@mui/material";

import TableRow from './TableRow';
const TableContact = ({ contacts }) => {

  return (
    <Grid container xs={12} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
      {contacts.map(contact =>
        <TableRow contact={contact} />)}
    </Grid>
  )
}

export default TableContact