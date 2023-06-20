import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons } from '../Redux/dragons/dragonsSlice';
import Dragon from '../components/Dragon';
import '../assests/rockets.css';

const Dragons = () => {
  const dispatch = useDispatch();
  const { dragons, status, error } = useSelector((state) => state.dragons);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDragons());
    }
  }, [dispatch, status]);

  return (
    <div className="rocket-container">
      {status === 'loading' && <div>Loading...</div>}
      {status === 'succeeded' && (
      <ul className="rocket-list flex">
        {dragons.map((dragon) => (
          <Dragon
            key={dragon.id}
            name={dragon.name}
            type={dragon.type}
            image={dragon.flickr_images[0]}
            reserved={dragon.reserved}
          />
        ))}
      </ul>
      )}
      {status === 'failed' && <div>{error}</div>}
    </div>
  );
};
export default Dragons;
