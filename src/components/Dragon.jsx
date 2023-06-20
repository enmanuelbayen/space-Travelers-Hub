import PropTypes from 'prop-types';
import '../assests/rockets.css';
import { useDispatch } from 'react-redux';
import { joinMission, cancelReservation } from '../Redux/dragons/dragonsSlice';

const Dragon = ({
  name, type, id, image, reserved = false,
}) => {
  const dispatch = useDispatch();

  const onReserve = () => {
    if (reserved) {
      dispatch(cancelReservation(id));
    } else {
      dispatch(joinMission(id));
    }
  };

  return (
    <li>
      <img src={image} className="rocket-img" alt={name} />
      <div className="rocket-textBox flex">
        <h3 className="rocket-name">{name}</h3>
        {reserved && <div className="reserved--badge">RESERVED</div>}
        <p className="rocket-description">{type}</p>
        <button
          type="button"
          className={`btn col-2 ${reserved ? 'btn-outline-danger' : 'btn-primary'}`}
          onClick={onReserve}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
        </button>
      </div>
    </li>
  );
};

Dragon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  reserved: PropTypes.bool,
};

export default Dragon;
