// ServiceList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card, Row, Col, Container,
} from 'react-bootstrap';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchServices } from '../../redux/service/servicesSlice';

const ServiceList = () => {
  const dispatch = useDispatch();
  const { data: services, status, error } = useSelector((state) => state.services);
  const [index, setIndex] = useState(0);
  const [servicesPerItem, setServicesPerItem] = useState(3); // Initial value for servicesPerItem

  const handleResize = () => {
    // Adjust servicesPerItem based on screen width
    const screenWidth = window.innerWidth;

    if (screenWidth < 576) {
      setServicesPerItem(1); // Show 1 service per item for extra small screens
    } else if (screenWidth < 768) {
      setServicesPerItem(1); // Show 2 services per item for small screens
    } else if (screenWidth < 992) {
      setServicesPerItem(1); // Show 2 services per item for small screens
    } else if (screenWidth < 1200) {
      setServicesPerItem(2); // Show 2 services per item for small screens
    } else {
      setServicesPerItem(3); // Show 3 services per item for medium and larger screens
    }
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial call to handleResize
    handleResize();

    // Fetch services on component mount
    dispatch(fetchServices());

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  if (status === 'loading') {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  const truncateDescription = (text, maxLength) => {
    const words = text.split(' ');
    if (words.length > maxLength) {
      return `${words.slice(0, maxLength).join(' ')}...`;
    }
    return text;
  };

  // Group services into arrays based on the specified number of services per item
  const groupedServices = [];
  for (let i = 0; i < services.length; i += servicesPerItem) {
    groupedServices.push(services.slice(i, i + servicesPerItem));
  }

  return (
    <>
      <div className="service-component">
        <div className="service-header mt-3">
          <h1 className="text-center">OFFERED SERVICES</h1>
          <span className="text-center d-block text-grey">Explore our services from below</span>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-body">
          {groupedServices.map((group) => (
            <Carousel.Item key={uuidv4()} className="carousel-bg">
              <Carousel.Caption>
                <Row className="d-flex justify-content-between card-body">
                  {group.map((service) => (
                    <Col key={uuidv4()} xs={12} sm={6} md={2} lg={6} xl={4}>
                      {/* Wrap each card with Link component */}
                      <Card className="card-sizing">
                        <Link to={`/services/${service.id}`} className="card-link">
                          <>
                            <div className="card-space p-4">
                              <Card.Img variant="top" src={service.image} alt={service.name} style={{ height: '200px' }} />
                              <Card.Body>
                                <Card.Title className="custom-title-style">
                                  <strong>{service.name}</strong>
                                </Card.Title>
                                <Card.Text style={{ color: 'grey', fontSize: '0.8em' }} className="custom-card-text">
                                  {truncateDescription(service.description, 20)}
                                  <div>
                                    {' '}
                                    {service.description.split(' ').length > 20 && (
                                    <Link to={`/services/${service.id}`} className="learn-more-link">
                                      Learn More
                                    </Link>
                                    )}
                                  </div>
                                </Card.Text>
                              </Card.Body>
                            </div>
                          </>
                        </Link>
                        <Container className=" py-3 sc-container d-flex flex-column">
                          <div className="text-center">
                            <a
                              href="https://twitter.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social-icon"
                              aria-label="Visit Twitter profile"
                            >
                              <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a
                              href="https://facebook.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social-icon"
                              aria-label="Visit Facebook profile"
                            >
                              <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a
                              href="https://github.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social-icon"
                              aria-label="Visit GitHub profile"
                            >
                              <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                          </div>
                        </Container>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ServiceList;
