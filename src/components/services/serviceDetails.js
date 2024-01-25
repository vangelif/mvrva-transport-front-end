import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ReservationForm from '../selectedReservation';
import { fetchServiceDetails } from '../../redux/service/serviceDetailsSlice';
import { createReservation } from '../../redux/reservationsSlice';

const ServiceDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const service = useSelector((state) => state.serviceDetails.data);
  const status = useSelector((state) => state.serviceDetails.status);

  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        if (id) {
          await dispatch(fetchServiceDetails(id));
        }
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchDetails();
  }, [dispatch, id]);

  const handleConfirmReservation = () => {
    // Add your logic for confirming the reservation
    if (selectedService) {
      dispatch(createReservation(selectedService));
      // Additional logic if needed after reservation creation
    }
  };

  if (!id || status === 'loading' || !service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="showcase">
      <Link to="/api/v1/services">
        <button type="button">Go Back</button>
      </Link>
      <h1>Show here</h1>
      <h2>{service.name}</h2>
      <p>
        Description:
        {service.description}
      </p>
      <p>
        Min Cost: $
        {service.min_cost}
      </p>
      <img src={service.image} alt="service" />
      {/* Use Link to navigate to the reservation form route */}

      <Button
        type="button"
        variant="primary"
        onClick={() => setSelectedService(service)}
      >
        Reserve
      </Button>

      {/* Display selected service information */}
      {selectedService && (
        <ReservationForm
          selectedService={selectedService}
          onConfirmReservation={handleConfirmReservation}
        />
      )}
    </div>
  );
};

ServiceDetails.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

ServiceDetails.defaultProps = {
  params: {},
};

export default ServiceDetails;
