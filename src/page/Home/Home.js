import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import HomeHeader from '../../componenets/Home/HomeHeader';
import TableContact from "../../componenets/Home/TableContact";
import FoveriteContact from "../../componenets/Home/FoveriteContact";
import InputSearch from "./../../componenets/Home/InputSearch";
import { useSelector } from "react-redux";


const Home = () => {
  const contacts = useSelector((state) => state.contacts)
  const [tempContacts, setTempContacts] = useState([]);
  console.log('first', tempContacts)
  useEffect(() => {
    setTempContacts(contacts)
  }, [contacts])

  const handlsearch = (e) => {
    const { value } = e.target;
    const data = contacts.filter((item) =>
      item.name.toUpperCase().includes(value.toUpperCase())
    );
    setTempContacts(data)
  };
  return (
    <Grid>
      <Grid><HomeHeader /></Grid>
      <Grid><InputSearch handlsearch={handlsearch} /></Grid>
      <Grid><FoveriteContact /></Grid>
      <Grid><TableContact contacts={tempContacts} /></Grid>
    </Grid>

  );
};

export default Home;
