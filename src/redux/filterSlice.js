import { createSlice } from '@reduxjs/toolkit';

const filterClice = createSlice({
  name: 'filter',
  initialState: '',
  // state = {filter: ''}
  reducers: {
    getFilter: (_, action) => {
      //   console.log(action.payload);
      return action.payload;
    },
  },
});

export const { getFilter } = filterClice.actions;
export default filterClice.reducer;
