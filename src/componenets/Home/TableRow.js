import React from 'react'
import { Button, Grid, Typography } from "@mui/material";
import rowTable from '../../data/home/rowTable'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice/contact.reducer';
const TableRow = ( {contact}) => {
  const dispatch=useDispatch()
  const handledelete=id=>{
dispatch(deleteContact(id))
  }
  return (
    <Grid display={'flex'} flexDirection={"row"} padding={2} alignItems={'center'} justifyContent={"space-around"}>
    {rowTable.map(row=>(
<Grid padding={2} key={row.id}>
<Typography> {row.title.toUpperCase()}:{contact[row.title]}</Typography>
</Grid> ))}
<Grid padding={2}>
<Button variant={'contained'}  color={'error'} onClick={()=>handledelete(contact.id)}>Delete</Button>
</Grid>
<Grid padding={2}>
<Button variant={'contained'}>Info</Button>
</Grid>
<Grid padding={2}>
<Button variant={'contained'} color={'warning'}>ChekTodo</Button>
</Grid>
</Grid>
  )
}

export default TableRow