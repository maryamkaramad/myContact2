import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const HomeHeader = () => {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <Typography m={2} variant={"h4"} color={"GrayText"}>
        Contact Dashboard
      </Typography>
      <Grid>
        <Link to={"/addcontact"}>
          <Button varient="outlined">add contact</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default HomeHeader;
