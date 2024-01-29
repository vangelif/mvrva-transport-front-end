import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { logout, reset } from '../redux/auth/authSlice';
import logoImg from '../assets/Logo.png';
import '../css/custom.css';

function Sidebar() {
  const navigate = useNavigate(); // Moved useNavigate to the beginning

  const storedValue = localStorage.getItem('activeNavLink');
  const initialActiveNavLink = storedValue;
  const [activeNavLink, setActiveNavLink] = useState(initialActiveNavLink);

  const handleNavLinkClick = (navLink) => {
    setActiveNavLink(navLink);
    localStorage.setItem('activeNavLink', navLink);
  };

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  const localUser = JSON.parse(localStorage.getItem('user'));
  const userRole = localUser && localUser.user && localUser.user.role;

  useEffect(() => {
    localStorage.removeItem('activeNavLink');
  }, []);

  // if (!userRole) {
  //   // Redirect to login page or handle not logged in state
  //   navigate('/login');
  //   return null;
  // }

  return (
    <>
      <div className="sidebar">
        <Navbar expand="lg" className="text-start nav-body" style={{ zIndex: 9999, backgroundColor: 'white' }}>
          <Container className="d-flex flex-column">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto d-flex flex-column ">
                <Navbar.Brand href="/">
                  <img
                    src={logoImg}
                    alt="MVRVA Transport Logo"
                    className="logo-img"
                  />
                </Navbar.Brand>
                {(!userRole) && (
                <>
                  <Nav.Link
                    href="/register"
                    onClick={() => handleNavLinkClick('register')}
                    className={activeNavLink === 'register' ? 'active' : ''}
                  >
                    <span className="navlink-text">
                      Register
                    </span>
                  </Nav.Link>
                  <Nav.Link
                    href="/login"
                    onClick={() => handleNavLinkClick('login')}
                    className={activeNavLink === 'login' ? 'active' : ''}
                  >
                    <span className="navlink-text">
                      Login
                    </span>
                  </Nav.Link>
                </>
                )}
                {(userRole === 'user' || userRole === 'admin') && (
                <button type="button" onClick={onLogout}>
                  Logout
                </button>
                )}
                <Nav.Link
                  href="/api/v1/services"
                  onClick={() => {
                    handleNavLinkClick('services');
                    navigate('/api/v1/services');
                  }}
                  className={activeNavLink === 'services' ? 'active' : ''}
                >
                  <span className="navlink-text">
                    Services
                  </span>
                </Nav.Link>
                {(userRole === 'user' || userRole === 'admin') && (
                <>
                  <Nav.Link
                    href="/reserve-form"
                    onClick={() => {
                      handleNavLinkClick('reserve-form');
                      navigate('/reserve-form');
                    }}
                    className={activeNavLink === 'reserve-form' ? 'active' : ''}
                  >
                    <span className="navlink-text">
                      Reserve Form
                    </span>
                  </Nav.Link>
                  <Nav.Link
                    href="/my-reservations"
                    onClick={() => {
                      handleNavLinkClick('my-reservations');
                      navigate('/my-reservations');
                    }}
                    className={activeNavLink === 'my-reservations' ? 'active' : ''}
                  >
                    <span className="navlink-text">
                      My Reservations
                    </span>
                  </Nav.Link>
                </>
                )}
                {userRole === 'admin' && (
                <>
                  <Nav.Link
                    href="/add-reservation"
                    onClick={() => {
                      handleNavLinkClick('add-reservation');
                      navigate('/add-reservation');
                    }}
                    className={activeNavLink === 'add-reservation' ? 'active' : ''}
                  >
                    <span className="navlink-text">Add Services</span>
                  </Nav.Link>
                  <Nav.Link
                    href="/delete-reservation"
                    onClick={() => {
                      handleNavLinkClick('delete-reservation');
                      navigate('/delete-reservation');
                    }}
                    className={activeNavLink === 'delete-reservation' ? 'active' : ''}
                  >
                    <span className="navlink-text">Delete Services</span>
                  </Nav.Link>
                </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
          <Container className="mt-4 py-3 sc-container d-flex flex-column">
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
            <div className="text-center mt-2 copy-right-text">
              © 2024 MVRVA Transport.
              <br />
              All rights reserved.
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Sidebar;
