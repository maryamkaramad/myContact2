import React from 'react'
import { Grid } from "@mui/material";

import TableRow from './TableRow';
const TableContact = ({ contacts }) => {

  return (
    <Grid container display={"flex"} flexDirection={"column"} justifyContent={"space-around"} alignContent={"stretch"}>
      {contacts.map(contact =>
        <TableRow contact={contact} />)}
    </Grid>
  )
}

export default TableContact