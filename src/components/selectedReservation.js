import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ReservationForm = ({ selectedService, onConfirmReservation }) => (
  <div>
    <h3>Selected Service:</h3>
    <p>
      Name:
      {selectedService.name}
    </p>
    <p>
      Description:
      {selectedService.description}
    </p>
    <p>
      Min Cost: $
      {selectedService.min_cost}
    </p>
    <Button type="button" variant="success" onClick={onConfirmReservation}>
      Confirm Reservation
    </Button>
  </div>
);

ReservationForm.propTypes = {
  selectedService: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    min_cost: PropTypes.number.isRequired,
  }),
  onConfirmReservation: PropTypes.func.isRequired,
};

// Provide defaultProps if needed
ReservationForm.defaultProps = {
  selectedService: null,
};
export default ReservationForm;
