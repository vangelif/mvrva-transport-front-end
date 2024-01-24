// ServicesList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices, deleteService } from '../../redux/service/servicesSlice';

const ServiceDeletion = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.data);
  const status = useSelector((state) => state.services.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchServices());
    }
  }, [status, dispatch]);

  const handleDelete = (serviceId) => {
    dispatch(deleteService(serviceId));
  };

  return (
    <div className="card-submit">
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error loading services</p>}
      {status === 'succeeded' && (
        <div>
          <h2>Services List</h2>
          <ul>
            {services.map((service) => (
              <li key={service.id}>
                {service.name}
                {' '}
                <button type="button" onClick={() => handleDelete(service.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceDeletion;
