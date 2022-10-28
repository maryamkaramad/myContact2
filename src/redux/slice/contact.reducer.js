import { createSlice } from '@reduxjs/toolkit'
import data from './../../data/data';

const initialState = data

export const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      const { payload } = action
      //payload===id
      const index = state.findIndex(state => state.id === payload.id)
      state.splice(index, 1)
    },
    addContact: (state, action) => {
      const { payload } = action
      //payload==={id name number country}

      state.push(payload)

    },
    updateContact: (state, action) => {
      const { payload } = action
      //payload==={id name number country}
      const index = state.findIndex(state => state.id === payload.id)
      state[index] = payload

    },
    favoriteContact: (state, action) => {
      debugger
      const { payload } = action
      //payload==={id name number country}
      console.log('payload', payload, "state", state, "action,", action)
      const index = state.findIndex(state => state.id === payload.id)
      state[index] = { ...payload, Favorite: !payload.Favorite }
      setTimeout(() => {
        console.log('state[index]', state)
      }, 2000);
    },
  },
})


export const { deleteContact, addContact, updateContact, favoriteContact } = ContactSlice.actions

export default ContactSlice.reducer