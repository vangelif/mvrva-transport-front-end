// import React from 'react';

// const DeleteServiceButton = ({ serviceId }) => {
//   const handleDeleteService = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/v1/services/${serviceId}`, {
//         method: 'DELETE',
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Service was deleted successfully, handle success case here
//         console.log('Service deleted successfully:', data);
//       } else {
//         // Handle error case
//         console.error('Error deleting service:', data.error);
//       }
//     } catch (error) {
//       console.error('Error deleting service:', error.message);
//     }
//   };

//   return <button onClick={handleDeleteService}>Delete Service</button>;
// };

// export default DeleteServiceButton;

// ServiceList.js
import React from 'react';
import { useSelector } from 'react-redux';
import NewServiceForm from './add_services';

const ServiceList2 = () => {
  const services = useSelector((state) => state.services.data);

  return (
    <div>
      <h2>Service List</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
      <NewServiceForm />
    </div>
  );
};

export default ServiceList2;
