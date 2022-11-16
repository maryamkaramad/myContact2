import React from 'react'
import { Button, Grid, Typography, Avatar } from "@mui/material";
import rowTable from '../../data/home/rowTable'
import { useDispatch } from 'react-redux';
import { favoriteContact } from '../../redux/slice/contact.reducer';
import { Link } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AlertDialog from './AlertDialog';
const TableRow = ({ contact }) => {
  const dispatch = useDispatch()

  const handlefavorite = () => {
    dispatch(favoriteContact(contact))
  }
  return (
    <Grid sx={{ boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px", textAlign: "left", marginBottom: { xs: 1 } }} container xs={12} md={12} p={2} >
      <Grid item xs={12} md={1} container justifyContent={"center"}>
        <Grid item sx={2} border={"1px solid"} borderRadius={"100px"}><Avatar alt="Remy Sharp" src={'https://robohash.org/' + contact.id} /></Grid></Grid>
      {rowTable.map(row => (
        <Grid item key={row.id} container justifyContent={"center"} md={2}  >
          <Typography> {row.title.toUpperCase()}:{contact[row.title]}</Typography>

        </Grid>))}
      <Grid item xs={12} md={1} container justifyContent={"center"}>  <Typography onClick={handlefavorite} sx={{ cursor: "pointer" }}>{contact.Favorite === true ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}</Typography></Grid>
      <Grid item container xs={12} justifyContent={"center"} alignItems={"center"} flexDirection={"row"} gap={1}>
        <Grid item  >
          <AlertDialog contact={contact} />
        </Grid>
        <Grid item>
          <Link to={`/updatecontact/${contact.id}`} >
            <Button variant={'contained'}>update</Button></Link>

        </Grid>
        <Grid item >
          <Link to={`/contacts/${contact.id}`} >
            <Button variant={'contained'} color={'warning'}>info</Button></Link>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default TableRow