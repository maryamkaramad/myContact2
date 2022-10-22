import React from 'react'
import { Typography, Grid, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import FormInput from '../data/form/FormInout';
import { useDispatch } from 'react-redux';
import {addContact, updateContact} from '../redux/slice/contact.reducer'
import {useNavigate} from 'react-router-dom'
import { Link,useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Form = () => {
  const {contactId}=useParams()
  const contacts = useSelector((state) => state.contacts)
  const dispatch=useDispatch();
const navigate=useNavigate()
const emptyInput={id:Math.floor(Math.random()*1000),name:"", number:"", country:""}
  const[form,setForm]=useState(emptyInput);

  const handlechang=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const [state,setState]=useState('add')
  const handlesubmit=e=>{
    e.preventDefault();
    if(state==='add'){  dispatch(addContact(form))
     }
else if(state==='update'){
dispatch(updateContact(form))
}
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

  useEffect(()=>{
const c = contacts.filter(contact=> contact.id===Number(contactId))[0]
if(c){
  setForm(c)
  setState('update')
}
  },[])


  return (
    <Grid  display={"flex"} alignItems={"center"} justifyContent={"center"}>
    <Grid container display={"flex"} flexDirection={"column"} alignItems={"center"} >
        <Grid display={"flex"} gap={"100px"} justifyContent={"space-around"}>
        <Typography>FORM CONTACT</Typography>
      <Link to={'/'}>
        <Button variant="contained">back</Button>
      </Link>
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