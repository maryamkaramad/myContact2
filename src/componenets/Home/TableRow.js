import React from 'react'
import { Grid, Avatar } from "@mui/material";
import rowTable from '../../data/home/rowTable'
import { useDispatch } from 'react-redux';
import { favoriteContact } from '../../redux/slice/contact.reducer';
import { Link } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AlertDialog from './AlertDialog';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const TableRow = ({ contact }) => {
  const dispatch = useDispatch()

  const handlefavorite = () => {
    dispatch(favoriteContact(contact))
  }
  return (
    <Grid item container xs={12} md={3} lg={2} p={1} justifyContent={"center"} alignItems={"center"}>
      <Grid item display={"flex"} >
        <Card sx={{ maxWidth: 345 }} >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={'https://robohash.org/' + contact.id} />
          <CardContent>
            {rowTable.map(row => (
              <Grid key={row.id}   >
                <Grid container justifyContent={"flex-start"} gap={6}>
                  <Grid item>
                    {row.icon}
                  </Grid>
                  <Grid item>
                    <Typography>  {contact[row.title]}</Typography>
                  </Grid>
                </Grid>
              </Grid>))}
            <Grid item container justifyContent={"center"} alignItems={"center"}>  <Typography onClick={handlefavorite} sx={{ cursor: "pointer" }}>{contact.Favorite === true ? <ThumbUpIcon sx={{ color: "red" }} /> : <ThumbUpOffAltIcon />}</Typography></Grid>
          </CardContent>
          <CardActions>
            <Grid   >
              <AlertDialog contact={contact} />
            </Grid>
            <Grid >
              <Link to={`/updatecontact/${contact.id}`} >
                <Button variant={'contained'}>update</Button></Link>
            </Grid>
            <Grid  >
              <Link to={`/contacts/${contact.id}`} >
                <Button variant={'contained'} color={'warning'}>info</Button></Link>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TableRow