// store.js

import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './servicesSlice';
import serviceDetailsReducer from './serviceDetailsSlice';

const store = configureStore({
  reducer: {
    services: servicesReducer,
    serviceDetails: serviceDetailsReducer,
  },
});

export default store;
