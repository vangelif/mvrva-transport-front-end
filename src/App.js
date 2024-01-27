import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import BasicExample from './components/nav';
import Register from './components/auth/register';
import Login from './components/auth/login';
import ServiceList from './components/services/services';
import ReservationForm from './components/reservation-form';
import ServiceDetails from './components/services/ServiceDetails';
import ServiceDeletion from './components/admin_items/delete_services';
import ServiceCreationForm from './components/admin_items/add_services';
import ReservationFormPage from './components/ReservationFormPage';
import MyReservations from './components/MyReservations';
import SuccessComponent from './components/messages/serviceSuccess';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <BasicExample />
          <ToastContainer />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/api/v1/services" element={<ServiceList />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/reserve-form" element={<ReservationForm />} />
            <Route path="/reservation-form-selected" element={<ReservationFormPage />} />
            <Route path="/my-reservations" element={<MyReservations />} />
            <Route path="/add-reservation" element={<ServiceCreationForm />} />
            <Route path="/delete-reservation" element={<ServiceDeletion />} />
            <Route path="/reservation-confirmation" element={<SuccessComponent />} />
            <Route path="/" element={<ServiceList />} />
          </Routes>
        </>
      </Router>
    </Provider>
  );
}

export default App;
