import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import contactExample from '../redux/constants';

const contactSlice = createSlice({
  name: 'contacts',
  //   initialState: contactExample,
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

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
