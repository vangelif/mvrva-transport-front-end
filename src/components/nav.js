import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import logoImg from "../assets/Logo.png";
import "../css/custom.css";

function BasicExample() {
  const storedValue = localStorage.getItem("activeNavLink");
  const initialActiveNavLink = storedValue;
  const [activeNavLink, setActiveNavLink] = useState(initialActiveNavLink);

  const handleNavLinkClick = (navLink) => {
    setActiveNavLink(navLink);
    localStorage.setItem("activeNavLink", navLink);
  };

  useEffect(
    () => () => {
      localStorage.removeItem("activeNavLink");
    },
    []
  );

  const menus = [
    { name: "Services", link: "/api/v1/services" },
    { name: "Reserve Form", link: "/reserve-form" },
    { name: "My Reservations", link: "/my-reservations" },
    { name: "Add Services", link: "/add-reservation" },
    { name: "Delete Services", link: "/delete-reservation" },
  ];

  const socials = [
    {
      name: "Twitter",
      link: "https://twitter.com",
      icon: <FontAwesomeIcon icon={faTwitter} size="2x" />,
    },
    {
      name: "Facebook",
      link: "https://facebook.com",
      icon: <FontAwesomeIcon icon={faFacebook} size="2x" />,
    },
    {
      name: "GitHub",
      link: "https://github.com",
      icon: <FontAwesomeIcon icon={faGithub} size="2x" />,
    },
  ];

  return (
    <div className="navbar-container">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="text-start nav-body px-4 max-w-6xl mx-auto"
      >
        <div className="menu-main">
          <Container fluid>
            <div className="menu-main">
              <div>
                <Navbar.Brand href="/" className="d-flex align-items-center">
                  <img
                    src={logoImg}
                    alt="MVRVA Transport Logo"
                    className="logo-img"
                  />
                </Navbar.Brand>
              </div>
              <div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </div>
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto d-flex flex-column">
                {menus.map((menu) => (
                  <Nav.Link
                    href={menu.link}
                    key={menu.name}
                    onClick={() => handleNavLinkClick(menu.name.toLowerCase())}
                    className={
                      activeNavLink === menu.name.toLowerCase() ? "active" : ""
                    }
                  >
                    <span className="navlink-text">{menu.name}</span>
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </div>
        <Container className="mt-4 py-3 sc-container d-flex flex-column">
          <div className="text-center">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={`Visit ${social.name} profile`}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="text-center mt-2 copy-right-text">
            © 2024 MVRVA Transport.
            <br />
            All rights reserved.
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
