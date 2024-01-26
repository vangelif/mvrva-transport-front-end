import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import servicesReducer from './service/servicesSlice';
import serviceDetailsReducer from './service/serviceDetailsSlice';
import memberReducer from './adminRouteSlice';
import authReducer from './auth/authSlice';
import selectedServiceReducer from './service/selectedServiceSlice';
import reservationsReducer from './reservationsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  services: servicesReducer,
  serviceDetails: serviceDetailsReducer,
  member: memberReducer,
  selectedService: selectedServiceReducer,
  reservations: reservationsReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
