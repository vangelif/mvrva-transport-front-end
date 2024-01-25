import React from 'react';
import { useSelector } from 'react-redux';
import ReservationForm from './selectedReservation';

const ReservationFormPage = () => {
  const selectedService = useSelector((state) => state.selectedService);

  if (!selectedService) {
    return <div>No service selected</div>;
  }

  return (
    <div>
      <h1 className="ml-5">
        Reserve:
        {selectedService.name}
      </h1>
      <ReservationForm service={selectedService || { name: '', description: '', price: '' }} />
    </div>
  );
};

export default ReservationFormPage;
