import React from 'react'
import { Button, Grid, Typography,Avatar} from "@mui/material";
import rowTable from '../../data/home/rowTable'
import { useDispatch } from 'react-redux';
import { deleteContact,favoriteContact } from '../../redux/slice/contact.reducer';
import { Link} from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
const TableRow = ( {contact}) => {
  const dispatch=useDispatch()
  const handledelete=id=>{
dispatch(deleteContact(id))
  }
const handlefavorite= ()=>{
  dispatch(favoriteContact(contact))
}

  return (
    <Grid display={'flex'} flexDirection={"row"} padding={2} alignItems={"center"} justifyContent={"space-around"} sx={{boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px",textAlign:"left" }}>
     <Grid  border={"1px solid"} borderRadius={"100px"} ><Avatar alt="Remy Sharp" src={'https://robohash.org/' + contact.id}  /></Grid> 
    {rowTable.map(row=>(
<Grid padding={2} key={row.id}>
<Typography> {row.title.toUpperCase()}:{contact[row.title]}</Typography>

</Grid> ))}
<Typography onClick={handlefavorite} sx={{cursor:"pointer"}}>{contact.Favorite === true ? <ThumbUpIcon />: <ThumbUpOffAltIcon />}</Typography>
<Grid padding={2}>
<Button variant={'contained'}  color={'error'} onClick={()=>handledelete(contact.id)}>Delete</Button>
</Grid>
<Grid padding={2}>
  <Link to={`/updatecontact/${contact.id}`} >
  <Button variant={'contained'}>update</Button></Link>

</Grid>
<Grid padding={2}>
<Link to={`/contacts/${contact.id}`} >
<Button variant={'contained'} color={'warning'}>info</Button></Link>
</Grid>
</Grid>
  )
}

export default TableRow