import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactClice';
import filterReducer from './filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});

export default store;
