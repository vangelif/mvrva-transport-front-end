// ServicesList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteMessage from '../messages/deleteServiceSuccess';
import { fetchServices, deleteService } from '../../redux/service/servicesSlice';
import { Accordion } from 'react-bootstrap';

const ServiceDeletion = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.data);
  const status = useSelector((state) => state.services.status);
  const [deletedServiceId, setDeletedServiceId] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchServices());
    }
  }, [status, dispatch]);

  const handleDelete = (serviceId) => {
    dispatch(deleteService(serviceId));
    setDeletedServiceId(serviceId);
  };

  const handleAccordionClick = (id) => {
    setActiveAccordion(id === activeAccordion ? null : id);
  };
  console.log(services)
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
            className={`accordion ${activeAccordion === service.id ? 'active' : ''}`}
            onClick={() => handleAccordionClick(service.id)}
            tabIndex={0} // Add this line
          >
              <Accordion.Header>{service.name}</Accordion.Header>
              <Accordion.Body>
                <em>Created at {service.created_at} by admin with ID: {service.user_id} and costs ${service.min_cost}</em><br /><br />
                <p>{service.description}</p>
                <button type="button" onClick={() => handleDelete(service.id)} style={{ backgroundColor: 'var(--primary-color)', color: '#fff', border: 'none', paddingBlock: '0.7%', paddingInline: '0.7%', borderRadius: '10%' }}>
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
