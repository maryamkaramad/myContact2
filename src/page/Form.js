import React from 'react'
import { Typography, Grid, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import FormInput from '../data/form/FormInout';
import { useDispatch } from 'react-redux';
import {addContact} from '../redux/slice/contact.reducer'
import {useNavigate} from 'react-router-dom'
const Form = () => {
  const dispatch=useDispatch();
const navigate=useNavigate()
const emptyInput={id:Math.floor(Math.random()*1000),name:"", number:"", country:""}
  const[form,setForm]=useState(emptyInput);
  console.log(form)
  const handlechang=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handlesubmit=e=>{
    e.preventDefault();
    dispatch(addContact(form))
    clearInput()
 navigate('/')
  }
  const clearInput=()=>{
    setForm(emptyInput);
  }
  useEffect(() => {
   
    return () => {
      clearInput()
  }
  },[]);
  return (
    <Grid  display={"flex"} alignItems={"center"} justifyContent={"center"}>
    <Grid container display={"flex"} flexDirection={"column"} alignItems={"center"} >
        <Grid>
        <Typography>FORM CONTACT</Typography>
        </Grid >
        <Grid m={2}  >
<form onSubmit={handlesubmit}>
  {FormInput.map(fi=>(
    <TextField onChange={handlechang} key={fi.id}  label={fi.name} name={fi.name}  value={form[fi.name]}/>
  ))}
<Button type='submit' variant='contained' color={"success"}>
    submit
</Button>
</form>
</Grid>
        </Grid>
        </Grid>
   
  )
}

export default Form