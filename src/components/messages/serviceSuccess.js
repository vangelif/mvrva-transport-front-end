import React from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types'; // Import PropTypes

const SuccessComponent = ({ message }) => (
  <Alert variant="success">
    <p>{message}</p>
  </Alert>
);

SuccessComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SuccessComponent;
