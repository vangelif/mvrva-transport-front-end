// store.js

import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './servicesSlice';
import serviceDetailsReducer from './serviceDetailsSlice';
import memberReducer from './adminRouteSlice';

const store = configureStore({
  reducer: {
    services: servicesReducer,
    serviceDetails: serviceDetailsReducer,
    member: memberReducer,
  },
});

export default store;
