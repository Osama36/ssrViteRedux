import { createSlice } from '@reduxjs/toolkit';

const persistedSlice = createSlice({
  name: 'persisted',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  },
});

export const { increment, decrement } = persistedSlice.actions;
export default persistedSlice.reducer;

