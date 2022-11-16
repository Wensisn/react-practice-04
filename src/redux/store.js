import { configureStore } from '@reduxjs/toolkit';
import { mySlice } from './mySlice/mySlice';
import { initialItems } from './initialItems/initialItems';
import { userSlice } from './userSlice';

export const store = configureStore({
  reducer: {
    myValue: mySlice.reducer,
    items: initialItems.reducer,
    user: userSlice.reducer,
  },
});
