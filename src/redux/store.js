// store.js

import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './service/servicesSlice';
import serviceDetailsReducer from './service/serviceDetailsSlice';
import memberReducer from './adminRouteSlice';

const store = configureStore({
  reducer: {
    services: servicesReducer,
    serviceDetails: serviceDetailsReducer,
    member: memberReducer,
  },
});

export default store;
