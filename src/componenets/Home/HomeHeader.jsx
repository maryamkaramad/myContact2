import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { useSelector } from "react-redux";

const HomeHeader = () => {
  const contacts = useSelector((state) => state.contacts);
  return (
    <Grid
      flexDirection={"row"}
      display={"flex"}
      container
      xs={12}
      justifyContent={"center"}
      alignItems={"flex-end"}
      gap={2}
      md={12}
      sx={{ marginBottom: { xs: 2 } }}
    >
      <Grid item continer xs={4} md={4} justifyContent={"flex-start"}
        alignItems={"center"}>
        <Grid item><Typography m={2} variant={"h6"} color={"GrayText"}></Typography></Grid>
        <Grid item > <ContactPageIcon sx={{ fontSize: 50, color: "green" }} />
          {contacts.length} contacts</Grid>


      </Grid>

      <Grid item container xs={4} md={4} justifyContent={"flex-end"}
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
