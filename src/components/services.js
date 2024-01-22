import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchServices } from '../redux/servicesSlice';

const BasicExample2 = () => {
  const dispatch = useDispatch();
  const { data: services, status, error } = useSelector((state) => state.services);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  // Specify the number of services per item
  const servicesPerItem = 3;

  // Group services into arrays based on the specified number of services per item
  const groupedServices = [];
  for (let i = 0; i < services.length; i += servicesPerItem) {
    groupedServices.push(services.slice(i, i + servicesPerItem));
  }

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-body">
        {groupedServices.map((group) => (
          <Carousel.Item key={uuidv4()} className="carousel-bg">
            <Carousel.Caption>
              {group.map((service) => (
                <Card key={uuidv4()} style={{ width: '18rem', height: '2rem' }}>
                  <Card.Img variant="top" src={service.image} alt={service.name} />
                  <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              ))}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default BasicExample2;
