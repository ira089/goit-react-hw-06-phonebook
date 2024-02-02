import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactClice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    // редюсер для фильтра
  },
});

export default store;
