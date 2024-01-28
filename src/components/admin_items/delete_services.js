// ServicesList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import DeleteMessage from '../messages/deleteServiceSuccess';
import { fetchServices, deleteService } from '../../redux/service/servicesSlice';

const ServiceDeletion = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.data);
  const status = useSelector((state) => state.services.status);
  const [deletedServiceId, setDeletedServiceId] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchServices());
    }
  }, [status, dispatch]);

  const handleDelete = (serviceId) => {
    dispatch(deleteService(serviceId));
    setDeletedServiceId(serviceId);
  };

  return (
    <div className="card-submit">
      {deletedServiceId && (
      <DeleteMessage message={`Service with ID ${deletedServiceId} deleted successfully!❌`} />
      )}
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error loading services</p>}
      {status === 'succeeded' && (
      <div>
        <h2 style={{ marginBottom: '5%' }}>Services List</h2>
        <Accordion defaultActiveKey="0">
          {services.map((service) => (
            <Accordion.Item
              key={service.id}
              eventKey={service.id.toString()}
            >
              <Accordion.Header>{service.name}</Accordion.Header>
              <Accordion.Body>
                <em>
                  Created at
                  {service.created_at}
                  {' '}
                  by admin with ID:
                  {service.user_id}
                  {' '}
                  and costs $
                  {service.min_cost}
                </em>
                <br />
                <br />
                <p>{service.description}</p>
                <button
                  type="button"
                  onClick={() => handleDelete(service.id)}
                  style={{
                    backgroundColor: 'var(--primary-color)', color: '#fff', border: 'none', paddingBlock: '0.7%', paddingInline: '0.7%', borderRadius: '10%',
                  }}
                >
                  Delete
                </button>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
      )}
    </div>
  );
};

export default ServiceDeletion;
