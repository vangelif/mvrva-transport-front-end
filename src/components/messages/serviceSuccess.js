import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const SuccessComponent = ({ message }) => (
  <div className="success-message">
    <p>{message}</p>
  </div>
);

SuccessComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SuccessComponent;
