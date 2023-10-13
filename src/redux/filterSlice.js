import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './initialState';
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterByName: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
  },
});

export const { setFilterByName } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
