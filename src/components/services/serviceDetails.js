import React from 'react'

const ServiceDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const service = useSelector((state) => state.serviceDetails.data);
  const status = useSelector((state) => state.serviceDetails.status);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        if (id) {
          await dispatch(fetchServiceDetails(id));
        }
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchDetails();
  }, [dispatch, id]);

  const handleReserveClick = () => {
    dispatch(setSelectedService(service));
    navigate('/reservation-form-selected');
  };

  if (!id || status === 'loading' || !service) {
    return <h1 className="text-center">Loading...</h1>;
  }

  const localUser = JSON.parse(localStorage.getItem('user'));
  const userRole = localUser && localUser.user && localUser.user.role;
  return (
    <div className="showcase">
      <Link to="/api/v1/services">
        <button type="button">Go Back</button>
      </Link>
      <h1>Show here</h1>
      <h2>{service.name}</h2>
      <p>
        Description:
        {service.description}
      </p>
      <p>
        Min Cost: $
        {service.min_cost}
      </p>
      <img src={service.image} alt="service" />
      {/* Use Link to navigate to the reservation form route */}
      {userRole === 'user' && (
      <Button
        type="button"
        variant="primary"
        onClick={handleReserveClick}
      >
        Reserve
      </Button>
      )}
    </div>
  );
};

ServiceDetails.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

ServiceDetails.defaultProps = {
  params: {},
};

export default ServiceDetails