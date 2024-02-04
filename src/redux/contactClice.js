import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';
import contactExample from '../redux/constants';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactExample,
  },
  // state= {contacts: {contacts: contactExample}}
  reducers: {
    addContact(state, action) {
      state.contacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload.id);
    },
  },
});

const persistConfig = {
  key: 'contactsLS',
  storage,
};

export const contactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
export const { addContact, deleteContact } = contactSlice.actions;
