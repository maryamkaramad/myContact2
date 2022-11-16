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
      xs={12}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      md={12}
      sx={{ marginBottom: { xs: 2 } }}
    >
      <Grid item continer xs={12} md={6} justifyContent={"flex-start"}
        alignItems={"center"}>
        <Grid item><Typography m={2} variant={"h6"} color={"GrayText"}></Typography></Grid>
        <Grid item> <ContactPageIcon sx={{ fontSize: 50 }} />
          {contacts.length} contacts</Grid>


      </Grid>

      <Grid item container xs={12} md={6} justifyContent={"flex-end"}
        alignItems={"center"}>
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
