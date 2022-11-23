import React from 'react'
import { Typography, Grid, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import FormInput from '../data/form/FormInout';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../redux/slice/contact.reducer'
import { useNavigate } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Form = () => {
  const { contactId } = useParams()
  const contacts = useSelector((state) => state.contacts)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const emptyInput = { id: Math.floor(Math.random() * 1000), img: 'https://robohash.org/${id}', name: "", number: "", country: "" }
  const [form, setForm] = useState(emptyInput);

  const handlechang = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const [state, setState] = useState('add')
  const handlesubmit = e => {
    e.preventDefault();
    if (state === 'add') {
      dispatch(addContact(form))
    }
    else if (state === 'update') {
      dispatch(updateContact(form))
    }
    clearInput()
    navigate('/')

  }
  const clearInput = () => {
    setForm(emptyInput);
  }
  useEffect(() => {

    return () => {
      clearInput()
    }
  }, []);

  useEffect(() => {
    const c = contacts.filter(contact => contact.id === Number(contactId))[0]
    if (c) {
      setForm(c)
      setState('update')
    }
  }, [])


  return (
    <Grid container justifyContent={"center"} alignItems={"center"} sx={{ marginTop: 20 }}>
      <Grid container item xs={8} md={3} lg={3} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} >
        <Grid item container justifyContent={"center"} alignItems={"center"} flexDirection={"column"} >
          <Typography>FORM CONTACT</Typography>


          <Grid display={"flex"} flexDirection={"column"} m={"7px"} Gap={"2px"}>
            <form onSubmit={handlesubmit}  >

              {FormInput.map(fi => (
                <TextField item sx={{ width: "90%" }} onChange={handlechang} key={fi.id} label={fi.name} name={fi.name} value={form[fi.name]} margin="dense" />
              ))}

              <Grid item container xs={11} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2} sx={{ marginTop: 2 }}>
                <Button item type='submit' variant='contained' color={"success"} sx={{ width: "70%" }} >
                  submit
                </Button>
                <Grid sx={{ width: "70%" }}>
                  <Link to={'/'} >
                    <Button item variant="contained" sx={{ width: "100%" }}>back</Button>
                  </Link></Grid>
              </Grid>
            </form>

          </Grid>
        </Grid>
      </Grid>
    </Grid>


  )
}

export default Form