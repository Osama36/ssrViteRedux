// src/slices/defaultSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const defaultSlice = createSlice({
  name: 'default',
  initialState: { data: null },
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = defaultSlice.actions;
export default defaultSlice.reducer;