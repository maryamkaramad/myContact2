import { configureStore } from '@reduxjs/toolkit'
import  ContactSlice  from './slice/contact.reducer'
export const store = configureStore({
  reducer: {
    contacts:ContactSlice
  },
})