import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './service/servicesSlice';
import serviceDetailsReducer from './service/serviceDetailsSlice';
import memberReducer from './adminRouteSlice';
import authReducer from './auth/authSlice';
import selectedServiceReducer from './service/selectedServiceSlice';
import reservationsReducer from './reservationsSlice';

const store = configureStore({
  reducer: {
    services: servicesReducer,
    serviceDetails: serviceDetailsReducer,
    member: memberReducer,
    selectedService: selectedServiceReducer,
    reservations: reservationsReducer,
    auth: authReducer,
  },
});

export default store;
