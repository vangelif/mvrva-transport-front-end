// servicesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch services from Rails API
export const fetchServices = createAsyncThunk('services/fetchServices', async () => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/services');
  return response.data.services;
});

// Thunk to create a new service
export const createService = createAsyncThunk('services/createService', async (serviceData) => {
  const response = await axios.post('http://127.0.0.1:3000/api/v1/services', serviceData);
  return response.data.service; // Assuming the API returns the newly created service
});

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createService.fulfilled, (state, action) => {
        state.data.push(action.payload); // Add the newly created service to the state
      });
  },
});

export default servicesSlice.reducer;
