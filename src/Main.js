import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './redux/store';
import Register from './components/auth/register';
import Login from './components/auth/login';
import ServiceList from './components/services/ServiceList';
import MyReservations from './components/MyReservations';
import ReservationForm from './components/ReservationForm';
import ServiceDeletion from './components/admin_items/delete_services';
import ServiceCreationForm from './components/admin_items/add_services';
// import ReservationFormPage from './components/ReservationFormPage';
import SelectedReservation from './components/selectedReservation';
import SuccessComponent from './components/messages/serviceSuccess';
import ServiceDetails from './components/services/serviceDetails';
import './css/custom.css';
import Sidebar from './components/Sidebar';

function Main() {
  return (
    <Provider store={store}>
      <Router>
        <Container fluid className="app">
          <Row>
            <Col md={1}>
              <Sidebar />
              <ToastContainer />
            </Col>
            <Col md={11}>
              <>
                <Routes>
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/api/v1/services" element={<ServiceList />} />
                  <Route path="/services/:id" element={<ServiceDetails />} />
                  <Route path="/service/:id/reservation" element={<SelectedReservation />} />
                  <Route path="/reserve-form" element={<ReservationForm />} />
                  <Route path="/my-reservations" element={<MyReservations />} />
                  <Route path="/add-reservation" element={<ServiceCreationForm />} />
                  <Route path="/delete-reservation" element={<ServiceDeletion />} />
                  <Route path="/reservation-confirmation" element={<SuccessComponent />} />
                  <Route path="/*" element={<ServiceList />} />
                </Routes>
              </>
            </Col>
          </Row>
        </Container>
      </Router>
    </Provider>
  );
}

export default Main;
