import { createSlice } from '@reduxjs/toolkit';

const filterClice = createSlice({
  name: 'filter',
  initialState: '',
  // state = {filter: ''}
  reducers: {
    addFilter: (_, action) => {
      return action.payload;
    },
  },
});

export const { addFilter } = filterClice.actions;
export default filterClice.reducer;
