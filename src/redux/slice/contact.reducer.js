import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {id:1,name:'maryam',number:'09162780255',country:"iran",todo:[{id:1,title:'buy ticket',status:false}]},
  {id:2,name:'mohsen',number:'09176718827',country:"iran",todo:[{id:1,title:'buy milk',status:false}]}
  ]

export const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state,action) => {
  const{payload}=action
  //payload===id
     const index=state.findIndex(state => state.id ===payload.id)
     state.splice(index,1)
    },
 
  },
})


export const { deleteContact, decrement, incrementByAmount } = ContactSlice.actions

export default ContactSlice.reducer