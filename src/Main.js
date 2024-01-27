import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import ServiceList from './components/services/ServiceList';
import FormExample from './components/reservation-form';
import ServiceDeletion from './components/admin_items/delete_services';
import ServiceCreationForm from './components/admin_items/add_services';
import ReservationFormPage from './components/selectedResFormPage';
import ServiceDetails from './components/services/ServiceDetails';
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
            </Col>
            <Col md={11}>
              <>
                <Routes>
                  <Route path="/api/v1/services" element={<ServiceList />} />
                  <Route path="/services/:id" element={<ServiceDetails />} />
                  <Route path="/reservation-form-selected" element={<ReservationFormPage />} />
                  <Route path="/reserve-form" element={<FormExample />} />
                  <Route path="/my-reservations" element={<div>Action 3.1 Content</div>} />
                  <Route path="/add-reservation" element={<ServiceCreationForm />} />
                  <Route path="/delete-reservation" element={<ServiceDeletion />} />
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
