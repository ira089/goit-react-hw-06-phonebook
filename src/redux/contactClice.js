import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
  },

  reducers: {
    addContact(state, action) {
      console.log(state);
      console.log(action);

      state.contacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {},
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
