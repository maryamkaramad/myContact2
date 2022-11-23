import React from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import singleContactData from "./../../data/singleContact/singleContactData";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const SingleContactTable = () => {
  const { contactId } = useParams();
  const contacts = useSelector((state) => state.contacts);
  const [contact, setcontact] = useState({});

  useEffect(() => {
    setcontact(contacts.filter((c) => c.id === Number(contactId))[0]);
  }, []);

  return (
    <Grid container justifyContent={"center"} alignItems={"center"} sx={{ marginTop: "200px" }} xs={12} >
      <Grid item justifyContent={"center"} alignItems={"center"} sx={{ width: 500 }}>
        <Card sx={{ maxWidth: 500 }} >
          <CardMedia
            component="img"
            alt="green iguana"
            height="250"
            image={"https://robohash.org/" + contact.id} />
          <CardContent>
            {singleContactData.map((s) => (
              <Grid
                item
                key={s.id}
              >
                <Grid container gap={2} justifyContent={"flex-start"} textAlign={"left"} >
                  <Typography >
                    {s.name}:
                  </Typography>
                  <Typography >
                    {contact[s.name]}
                  </Typography>

                </Grid>
              </Grid>
            ))}

          </CardContent>
          <CardActions>
            <Grid sx={12} container justifyContent={"center"} alignItems={"center"}>
              <Link to={"/"}>
                <Button variant="contained">back</Button>
              </Link>
            </Grid>

          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SingleContactTable;
