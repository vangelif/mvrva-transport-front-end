import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchReservations, deleteReservation } from '../redux/reservationsSlice'; // Import fetchReservations action

const MyReservations = () => {
  const dispatch = useDispatch();

  // Fetch reservations when the component mounts
  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservations.entities);

  const deleteStatus = useSelector((state) => state.reservations.loading);

  const handleDeleteReservation = (reservationId) => {
    dispatch(deleteReservation(reservationId));
  };

  return (
    <div className="reservation">
      <h1 className="text-center">Reservations</h1>
      {deleteStatus === 'loading' && <p className="text-center">Deleting...</p>}
      <div className="d-flex flex-row flex-wrap g-2 p-5">
        {reservations.length === 0 ? (
          <h4 className="text-center">No reservations available.</h4>
        ) : (
          reservations.map((reservation) => (
            <div key={reservation.id} className="col mb-3">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Text>
                    Service ID:
                    {' '}
                    {reservation.service_id || 'N/A'}
                  </Card.Text>
                  <Card.Text className="mb-2 text-muted">
                    Description:
                    {' '}
                    {reservation.description || 'N/A'}
                  </Card.Text>
                  <Card.Text>
                    Pickup Address:
                    {' '}
                    {reservation.pickup_address || 'N/A'}
                  </Card.Text>
                  <Card.Text>
                    Drop Address:
                    {' '}
                    {reservation.drop_address || 'N/A'}
                  </Card.Text>
                  <Card.Text>
                    Contact:
                    {' '}
                    {reservation.contact || 'N/A'}
                  </Card.Text>
                  <Card.Text>
                    Pickup Date:
                    {' '}
                    {reservation.pickup_date || 'N/A'}
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteReservation(reservation.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyReservations;
