import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { fetchServiceDetails } from '../../redux/service/serviceDetailsSlice';
import { setSelectedService } from '../../redux/service/selectedServiceSlice';

const ServiceDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const service = useSelector((state) => state.serviceDetails.data);
  const status = useSelector((state) => state.serviceDetails.status);
  const navigate = useNavigate();

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

  const handleReserveClick = () => {
    dispatch(setSelectedService(service));
    navigate('/reservation-form-selected');
  };

  if (!id || status === 'loading' || !service) {
    return <h1 className="text-center">Loading...</h1>;
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
        onClick={handleReserveClick}
      >
        Reserve
      </Button>
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
