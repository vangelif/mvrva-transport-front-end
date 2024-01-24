import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import BasicExample from './components/nav';
import ServiceList from './components/services/services';
import FormExample from './components/reservation-form';
import ServiceDetails from './components/services/serviceDetails';
import ServiceDeletion from './components/admin_items/delete_services';
import ServiceCreationForm from './components/admin_items/add_services';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <BasicExample />

          <Routes>
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/api/v1/services" element={<ServiceList />} />
            <Route path="/reserve-form" element={<FormExample />} />
            <Route path="/my-reservations" element={<div>Action 3.1 Content</div>} />
            <Route path="/add-reservation" element={<ServiceCreationForm />} />
            <Route path="/delete-reservation" element={<ServiceDeletion />} />
            <Route path="/" element={<ServiceList />} />
          </Routes>
        </>
      </Router>
    </Provider>
  );
}

export default App;
