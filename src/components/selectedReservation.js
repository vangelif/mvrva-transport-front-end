import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

const ReservationForm = ({ onConfirmReservation }) => {
  const selectedService = useSelector((state) => state.selectedService);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }
  }, []);

  if (!selectedService) {
    return <div>No service selected</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onConfirmReservation();
  };

  return (
    <Form className="ml-5" onSubmit={handleSubmit}>
      <h3>Selected Service:</h3>
      <p>
        Name:
        {' '}
        {userName || 'User'}
      </p>
      <p>
        Description:
        {' '}
        {selectedService.description}
      </p>
      <p>
        Min Cost:
        {' '}
        $
        {selectedService.min_cost}
      </p>
      <Button type="submit" variant="success">
        Confirm Reservation
      </Button>
    </Form>
  );
};

ReservationForm.propTypes = {
  onConfirmReservation: PropTypes.func.isRequired,
};

export default ReservationForm;
