import React, { useState } from 'react';
import {
  Button, Form, Row, Col, Alert,
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createReservation } from '../redux/reservationsSlice';

function SelectedReservation() {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.reservations.error);
  const navigate = useNavigate();
  const { id } = useParams();
  const localUser = JSON.parse(localStorage.getItem('user'));
  const userName = localUser.user.name;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const formData = new FormData(form);
      let data = Object.fromEntries(formData);

      data = { ...data, service_id: id, client_name: userName };

      dispatch(createReservation(data)).then(() => {
        form.reset();
        setValidated(false);
        navigate('/my-reservations');
      });
    }

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="form-background d-flex flex-column justify-content-center align-items-center vh-100"
    >
      <Row>
        <Col lg={4}>
          <Form.Group className="mb-3" controlId="pickupAddress">
            <Form.Control required type="text" placeholder="Pickup Address" className="form-control" name="pickup_address" />
          </Form.Group>
        </Col>
        <Col lg={4}>
          <Form.Group className="mb-3" controlId="dropAddress">
            <Form.Control required type="text" placeholder="Drop Address" className="form-control" name="drop_address" />
          </Form.Group>
        </Col>
        <Col lg={4}>
          <Form.Group className="mb-3" controlId="description">
            <Form.Control required type="text" placeholder="Description" className="form-control" name="description" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <Form.Group className="mb-3" controlId="contact">
            <Form.Control required type="text" placeholder="Contact" className="form-control" name="contact" />
          </Form.Group>
        </Col>
        <Col lg={4}>
          <Form.Group className="mb-3" controlId="pickupDate">
            <Form.Control required type="date" placeholder="Pickup Date" className="form-control" name="pickup_date" />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {error && <Alert variant="danger">{error}</Alert>}
      {validated && !error && (
        <Alert variant="danger">
          Your reservation has not been created. Please check the details properly.
        </Alert>
      )}
    </Form>
  );
}

export default SelectedReservation;
