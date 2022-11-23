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
  const handlecontact = () => {

    setTempContacts(contacts)
  };
  const handlefavorite = () => {
    const data = contacts.filter((contact) => contact.Favorite === true);
    setTempContacts(data)
  };
  return (
    <Grid>
      <Grid><HomeHeader /></Grid>
      <Grid><InputSearch handlsearch={handlsearch} /></Grid>
      <Grid><FoveriteContact handlecontact={handlecontact} handlefavorite={handlefavorite} /></Grid>
      <TableContact contacts={tempContacts} />
    </Grid>

  );
};

export default Home;
