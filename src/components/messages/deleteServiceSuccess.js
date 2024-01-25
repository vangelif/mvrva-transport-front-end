// SuccessMessage.js
import React from 'react';
import PropTypes from 'prop-types';

const DeleteMessage = ({ message }) => (
  <div className="success-message">
    <p>{message}</p>
  </div>
);

DeleteMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default DeleteMessage;
