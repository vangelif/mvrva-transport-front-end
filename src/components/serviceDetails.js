// ServiceDetails.js
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchServiceDetails } from '../redux/serviceDetailsSlice';

const ServiceDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const service = useSelector((state) => state.serviceDetails.data);
  const status = useSelector((state) => state.serviceDetails.status);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        if (id) {
          await dispatch(fetchServiceDetails(id));
        }
      } catch (error) {
        // Removed the console.error statement
      }
    };

    fetchDetails();
  }, [dispatch, id]);

  if (!id || status === 'loading' || !service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="showcase">
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
      {/* Add more details as needed */}
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
