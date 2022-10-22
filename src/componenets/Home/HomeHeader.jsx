import React from "react";
import { Grid, Typography } from "@mui/material";
const HomeHeader = () => {
  return (
    <Grid container display={"flex"} justifyContent={"center"}>
      <Typography m={2} variant={"h4"} color={"GrayText"}>
        Contact Dashboard
      </Typography>
    </Grid>
  );
};

export default HomeHeader;
