import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchReservations } from '../redux/reservationsSlice'; // Import fetchReservations action

const MyReservations = () => {
  const dispatch = useDispatch();

  // Fetch reservations when the component mounts
  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservations.entities);

  return (
    <div className="reservation">
      <h1>Reservations</h1>
      {reservations.length === 0 ? (
        <p>No reservations available.</p>
      ) : (
        reservations.map((reservation) => (
          <div key={reservation.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>
                  Service ID:
                  {' '}
                  {reservation.service_id || 'N/A'}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Description:
                  {' '}
                  {reservation.description || 'N/A'}
                </Card.Subtitle>
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
              </Card.Body>
            </Card>
          </div>
        ))
      )}
    </div>
  );
};

export default MyReservations;
