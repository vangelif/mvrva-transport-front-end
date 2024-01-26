import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  Button, Form, Row, Col,
} from 'react-bootstrap';

const ReservationForm = ({ onConfirmReservation }) => {
  const selectedService = useSelector((state) => state.selectedService);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onConfirmReservation();
  };

  if (!selectedService) {
    return <div>No service selected</div>;
  }

  return (
    <Form className="ml-5" onSubmit={handleSubmit}>
      <h3>Selected Service:</h3>
      <p>
        Name:
        {' '}
        {userName || 'User'}
      </p>
      <Row>
        <Col>
          <Form.Group controlId="pickupAddress">
            <Form.Label>Pickup Address</Form.Label>
            <Form.Control required type="text" placeholder="Enter Pickup Address" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="dropAddress">
            <Form.Label>Drop Address</Form.Label>
            <Form.Control required type="text" placeholder="Enter Drop Address" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="contact">
            <Form.Label>Contact</Form.Label>
            <Form.Control required type="text" placeholder="Enter Contact" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="pickupDate">
            <Form.Label>Pickup Date</Form.Label>
            <Form.Control required type="date" placeholder="Enter Pickup Date" />
          </Form.Group>
        </Col>
      </Row>
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
