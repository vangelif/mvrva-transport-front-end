import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import SuccessComponent from '../messages/serviceSuccess';
import { createService } from '../../redux/service/servicesSlice';

const ServiceCreationForm = () => {
  const [serviceAdded, setServiceAdded] = useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    min_cost: 0,
  });

  const localuser = JSON.parse(localStorage.getItem('user'));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Include the user's ID when creating a service
    const serviceData = { ...formData, user_id: localuser.user.id };

    dispatch(createService(serviceData));
    setFormData({
      name: '', description: '', image: '', min_cost: 0,
    });

    setTimeout(() => {
      // After the service is added successfully, setServiceAdded to true
      setServiceAdded(true);
    }, 1000);
  };

  return (
    <Form onSubmit={handleSubmit} className="add-service-submit">
      <Form.Group controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description:</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="image">
        <Form.Label>Image URL:</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="min_cost">
        <Form.Label>Minimum Cost:</Form.Label>
        <Form.Control
          type="number"
          name="min_cost"
          value={formData.min_cost}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Service
      </Button>

      {serviceAdded && <SuccessComponent message="✅ Service added successfully!" />}
    </Form>
  );
};

// Add PropTypes for the userId prop
ServiceCreationForm.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default ServiceCreationForm;
