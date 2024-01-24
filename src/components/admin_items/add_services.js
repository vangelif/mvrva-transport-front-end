import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useDispatch } from 'react-redux';
import { createService } from '../../redux/service/servicesSlice';

const ServiceCreationForm = ({ userId }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    min_cost: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Include the user's ID when creating a service
    const serviceData = { ...formData, user_id: userId };

    dispatch(createService(serviceData));
    setFormData({
      name: '', description: '', image: '', min_cost: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="card-submit">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="min_cost">Minimum Cost:</label>
        <input
          type="number"
          id="min_cost"
          name="min_cost"
          value={formData.min_cost}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Create Service</button>
    </form>
  );
};

// Add PropTypes for the userId prop
ServiceCreationForm.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default ServiceCreationForm;
