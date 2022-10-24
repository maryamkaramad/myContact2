import React from "react";
import { Grid, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import singleContactData from "./../../data/singleContact/singleContactData";
import { Link } from "react-router-dom";
const SingleContactTable = () => {
  const { contactId } = useParams();
  const contacts = useSelector((state) => state.contacts);
  const [contact, setcontact] = useState({});

  useEffect(() => {
    setcontact(contacts.filter((c) => c.id === Number(contactId))[0]);
  }, []);

  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid
        container
        item
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
        alignItems={"center"}
        alignContent={"center"}
        mt={"200px"}
        sx={{ boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
        width={"400px"}
        height={"400px"}
      >
        <Grid
          item
          border={"1px solid grey"}
          borderRadius={"100px"}
          width={"100px"}
          height={"100px"}
        >
          <img
            item
            alt="Remy Sharp"
            src={"https://robohash.org/" + contact.id}
            width={"100%"}
            height={"90%"}
            align-self={"center"}
          />
        </Grid>
        {singleContactData.map((s) => (
          <Grid
            item
            key={s.id}
            sx={{ boxShadow: "rgb(165 149 149 / 9%) 0px -5px 24px;" }}
            width={"400px"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Grid p={"20px"}>
              {s.name}: {contact[s.name]}
            </Grid>
          </Grid>
        ))}
        <Link to={"/"}>
          <Button variant="contained">back</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default SingleContactTable;
