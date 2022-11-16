import { createSlice } from '@reduxjs/toolkit';
export const initialItems = createSlice({
  name: 'item',
  initialState: [],
  reducer: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = initialItems.actions;
