import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './service/servicesSlice';
import serviceDetailsReducer from './service/serviceDetailsSlice';
import memberReducer from './adminRouteSlice';
import authReducer from './auth/authSlice';
import selectedServiceReducer from './service/selectedServiceSlice';
import reservationsReducer from './reservationsSlice';

const rootReducer = {
  services: servicesReducer,
  serviceDetails: serviceDetailsReducer,
  member: memberReducer,
  selectedService: selectedServiceReducer,
  reservations: reservationsReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
