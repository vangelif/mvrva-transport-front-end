import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/custom.css';

function BasicExample() {
  // Initialize activeNavLink based on localStorage or default to 'services'
  const storedValue = localStorage.getItem('activeNavLink');
  const initialActiveNavLink = storedValue;
  const [activeNavLink, setActiveNavLink] = useState(initialActiveNavLink);

  // Function to handle NavLink click and update active state and localStorage
  const handleNavLinkClick = (navLink) => {
    setActiveNavLink(navLink);
    localStorage.setItem('activeNavLink', navLink);
  };

  // Clear localStorage when the component is unmounted
  useEffect(() => () => {
    localStorage.removeItem('activeNavLink');
  }, []);

  return (
    <>
      {/* Navbar Component */}
      <Navbar expand="lg" className="text-start nav-body">
        <Navbar.Brand
          href="/"
          onClick={() => handleNavLinkClick('services')}
          className={activeNavLink === 'services' ? 'active' : ''}
        >
          React-Bootstrap
        </Navbar.Brand>
        <Container className="d-flex flex-column">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex flex-column">
              <Nav.Link
                href="/services"
                onClick={() => handleNavLinkClick('services')}
                className={activeNavLink === 'services' ? 'active' : ''}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="/reserve-form"
                onClick={() => handleNavLinkClick('reserve-form')}
                className={activeNavLink === 'reserve-form' ? 'active' : ''}
              >
                Reserve form
              </Nav.Link>
              <Nav.Link
                href="/my-reservations"
                onClick={() => handleNavLinkClick('my-reservations')}
                className={activeNavLink === 'my-reservations' ? 'active' : ''}
              >
                My reservations
              </Nav.Link>
              <Nav.Link
                href="/add-reservation"
                onClick={() => handleNavLinkClick('add-reservation')}
                className={activeNavLink === 'add-reservation' ? 'active' : ''}
              >
                Add Reservation
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container className="mt-4 sc-container d-flex flex-column">
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
          <div className="text-center mt-2">
            © 2024 MVRVA Transport.
            <br />
            All rights reserved.
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
