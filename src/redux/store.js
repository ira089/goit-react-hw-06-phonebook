import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import contactReducer from './contactClice';
// import filterReducer from './filterSlice';
import { reducer } from './reducer';

// export const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     filter: filterReducer,
//   },
// });
// вариант Ломач
const persistConfig = {
  key: 'contactsLS',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);
