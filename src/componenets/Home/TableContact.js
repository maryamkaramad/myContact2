import React from 'react'
import { Button, Grid, Typography } from "@mui/material";
import rowTable from '../../data/home/rowTable'
const TableContact = () => {
 
  return (
    <Grid container>
        <Grid display={'flex'} flexDirection={"row"} padding={2} alignItems={'center'}>
            {rowTable.map(row=>(
 <Grid padding={2} key={row.id}>
 <Typography> {row.title.toUpperCase()}:{row.title}</Typography>
 </Grid> ))}
 <Grid padding={2}>
        <Button variant={'contained'}  color={'error'}>Delete</Button>
        </Grid>
        <Grid padding={2}>
        <Button variant={'contained'}>Info</Button>
        </Grid>
        <Grid padding={2}>
        <Button variant={'contained'} color={'warning'}>ChekTodo</Button>
        </Grid>
      
       
       
        </Grid>
    </Grid>
  )
}

export default TableContact