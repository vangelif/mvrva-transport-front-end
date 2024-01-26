import { createSlice } from '@reduxjs/toolkit';

const selectedServiceSlice = createSlice({
  name: 'selectedService',
  initialState: null,
  reducers: {
    setSelectedService: (state, action) => action.payload,
  },
});

export const { setSelectedService } = selectedServiceSlice.actions;

export default selectedServiceSlice.reducer