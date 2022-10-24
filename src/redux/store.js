import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  ContactSlice  from './slice/contact.reducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
}

const allReducer= combineReducers({
  contacts:ContactSlice,
})

const persistReducers= persistReducer(persistConfig,allReducer)

export const store = configureStore({
  reducer: persistReducers,
})
 
export const persistore=persistStore(store)