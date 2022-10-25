import React from "react";
import { Button, Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const FoveriteContact = () => {
  const contacts = useSelector((state) => state.contacts);
  const [favorite, setfavorite] = useState([]);
  const handlecontact = () => {
    const data = contacts.filter((contact) => contact.Favorite === false);
    console.log(data);
  };
  const handlefavorite = () => {
    const data = contacts.filter((contact) => contact.Favorite === true);
    console.log(data);
  };
  useEffect(() => {}, []);
  return (
    <Grid
      margin={2}
      continer
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
    >
      <Grid
        item
        container
        xs={3}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Grid item>
          <Button onClick={handlecontact}>
            <ContactsIcon sx={{ cursor: "pointer" }} />
          </Button>
        </Grid>
        <Grid item>
          <Button color="warning" onClick={handlefavorite}>
            <FavoriteIcon sx={{ cursor: "pointer" }} />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FoveriteContact;
