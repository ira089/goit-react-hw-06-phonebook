import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import contactExample from '../redux/constants';

const contactSlice = createSlice({
  name: 'contacts',
  //   initialState: contactExample,
  initialState: {
    contacts: contactExample,
  },
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

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: [],

//   reducers: {
//     addContact: {
//       reducer: (state, { payload }) => {
//         state.push(payload);
//         console.log(state);
//         console.log(payload);
//       },

//       prepare: data => {
//         return {
//           payload: {
//             id: nanoid(),
//             ...data,
//           },
//         };
//       },
//     },
//     deleteBook: (state, { payload }) =>
//       state.filter(item => item.id !== payload),
//   },
// });

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
