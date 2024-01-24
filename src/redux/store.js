// store.js

import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './servicesSlice';
import serviceDetailsReducer from './serviceDetailsSlice';
import memberReducer from './adminRouteSlice';
import authReducer from './auth/authSlice';

const store = configureStore({
  reducer: {
    services: servicesReducer,
    serviceDetails: serviceDetailsReducer,
    member: memberReducer,
    auth: authReducer,
  },
});

export default store;
