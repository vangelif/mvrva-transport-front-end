import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceList from './components/services/ServiceList';
import FormExample from './components/reservation-form';
import ServiceDetails from './components/services/ServiceDetails';
import ServiceDeletion from './components/admin_items/delete_services';
import ServiceCreationForm from './components/admin_items/add_services';
import ReservationFormPage from './components/selectedResFormPage';
import './css/custom.css';

function Main() {
  return (
            <Provider store={store}>
    <section className="main">
        <Router>
          <>
            <Routes>
              <Route path="/api/v1/services" element={<ServiceList />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/reservation-form-selected" element={<ReservationFormPage />} />
              <Route path="/reserve-form" element={<FormExample />} />
              <Route path="/my-reservations" element={<div>Action 3.1 Content</div>} />
              <Route path="/add-reservation" element={<ServiceCreationForm />} />
              <Route path="/delete-reservation" element={<ServiceDeletion />} />
              <Route path="/" element={<ServiceList />} />
            </Routes>
          </>
        </Router>
    </section>
        </Provider>
  );
}

export default Main;
