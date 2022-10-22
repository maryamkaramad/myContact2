import React from "react";
import { Grid } from "@mui/material";
import HomeHeader from '../../componenets/Home/HomeHeader';
import TableContact from "../../componenets/Home/TableContact";

const Home = () => {
  return (
  <Grid>
      <Grid><HomeHeader/></Grid>
      <Grid><TableContact/></Grid>
      </Grid>
  
  );
};

export default Home;
