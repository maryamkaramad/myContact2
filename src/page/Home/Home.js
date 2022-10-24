import React from "react";
import { Grid } from "@mui/material";
import HomeHeader from '../../componenets/Home/HomeHeader';
import TableContact from "../../componenets/Home/TableContact";

import InputSearch from "./../../componenets/Home/InputSearch";


const Home = () => {


  return (
  <Grid>
      <Grid><HomeHeader/></Grid>
      <Grid><InputSearch /></Grid>
      <Grid><TableContact/></Grid>
      </Grid>
  
  );
};

export default Home;
