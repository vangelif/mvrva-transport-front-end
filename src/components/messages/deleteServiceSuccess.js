// SuccessMessage.js
import React from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DeleteMessage = ({ message }) => (
  <Alert variant="danger">
    <p>{message}</p>
  </Alert>
);

DeleteMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default DeleteMessage;
