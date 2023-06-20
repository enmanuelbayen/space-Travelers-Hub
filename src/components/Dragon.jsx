import PropTypes from 'prop-types';
import '../assests/rockets.css';

const Dragon = ({
  name, type, image, reserved = false,
}) => {
  const onReserve = () => {
    console.log(`Reserving ${name}`);
  };

  return (
    <li>
      <img src={image} className="rocket-img" alt={name} />
      <div className="rocket-textBox flex">
        <h3 className="rocket-name">{name}</h3>
        {reserved && <div className="dragon--badge">RESERVED</div>}
        <p className="rocket-description">{type}</p>
        <button
          type="button"
          className={reserved ? 'btn btn-danger' : 'reserveBttn'}
          onClick={onReserve}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
        </button>
      </div>
    </li>
  );
};

Dragon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  reserved: PropTypes.bool,
};

export default Dragon;
