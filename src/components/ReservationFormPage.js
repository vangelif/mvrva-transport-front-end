import React from 'react';
import { useSelector } from 'react-redux';
import SelectedReservation from './SelectedReservation.js';

const ReservationFormPage = () => {
  const selectedService = useSelector((state) => state.selectedService);

  if (!selectedService) {
    return <div>No service selected</div>;
  }

  return (
    <div>
      <h1 className="ml-5">
        Reserve:
        {' '}
        {selectedService.name}
      </h1>
      <SelectedReservation service={selectedService || { name: '', description: '', price: '' }} />
    </div>
  );
};

export default ReservationFormPage;
