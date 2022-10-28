import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { useSelector } from "react-redux";
const HomeHeader = () => {
  const contacts = useSelector((state) => state.contacts);
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <Typography m={2} variant={"h6"} color={"GrayText"}>
        <ContactPageIcon sx={{ fontSize: 50 }} />
        {contacts.length} contacts
      </Typography>
      <Grid>
        <Link to={"/addcontact"}>
          <Button variant="contained" color="success">
            add contact
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default HomeHeader;
