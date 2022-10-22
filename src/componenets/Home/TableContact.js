import React from 'react'
import {Grid} from "@mui/material";
import { useSelector} from 'react-redux'
import TableRow from './TableRow';
const TableContact = () => {
  const contacts = useSelector((state) => state.contacts)


  return (
    <Grid container display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
{contacts.map(contact=><TableRow contact={contact}/> )}
    </Grid>
  )
}

export default TableContact