import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../redux/store';
import ServiceList from "./services/services";
import FormExample from "./reservation-form";
import ServiceDetails from "./services/serviceDetails";
import ServiceDeletion from "./admin_items/delete_services";
import ServiceCreationForm from "./admin_items/add_services";
import ReservationForm from "./selectedReservation";

const MainContent = () => {
  return (
    <div className="main-content-container">
      <Provider store={store}>
        <Router>
          <div className="flex">
                <div className="col-span-6 xl:col-span-7 lg:col-span-7 ml-16">
                    <Routes>
                        <Route path="/api/v1/services" element={<ServiceList />} />
                        <Route path="/services/:id" element={<ServiceDetails />} />
                        <Route
                        path="/reservation-form-selected"
                        element={<ReservationForm />}
                        />
                        <Route path="/reserve-form" element={<FormExample />} />
                        <Route
                        path="/my-reservations"
                        element={<div>Action 3.1 Content</div>}
                        />
                        <Route
                        path="/add-reservation"
                        element={<ServiceCreationForm />}
                        />
                        <Route
                        path="/delete-reservation"
                        element={<ServiceDeletion />}
                        />
                        <Route path="/" element={<ServiceList />} />
                    </Routes>
                </div>
          </div>
        </Router>
      </Provider>
    </div>
  );
};

export default MainContent;
