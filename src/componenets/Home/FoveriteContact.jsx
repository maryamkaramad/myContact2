import React from "react";
import { Button, Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContactsIcon from "@mui/icons-material/Contacts";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useEffect } from "react";

const FoveriteContact = ({ handlefavorite, handlecontact }) => {
  useEffect(() => { }, []);
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
            <AccountBoxIcon sx={{ cursor: "pointer" }} />
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
