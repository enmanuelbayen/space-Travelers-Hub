import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, selectRocket } from '../Redux/rockets/RocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const selectedRocket = useSelector((state) => state.rockets.selectedRocket);
  const status = useSelector((state) => state.rockets.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (rockets.length > 0) {
      dispatch(selectRocket(rockets[0]));
    }
  }, [dispatch, rockets]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Failed to load rocket data</div>;
  }

  return (
    <div>
      <h2>Rockets</h2>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <div>
              <h3>{rocket.name}</h3>
              <p>
                Type:
                {' '}
                {rocket.description}
              </p>
              <img src={rocket.flickr_images[0]} alt={rocket.name} />
            </div>
          </li>
        ))}
      </ul>
      {selectedRocket && (
        <div>
          <h3>{selectedRocket.name}</h3>
          <p>
            Type:
            {' '}
            {selectedRocket.description}
          </p>
          <img src={selectedRocket.flickr_images[0]} alt={selectedRocket.name} />
        </div>
      )}
    </div>
  );
};

export default Rockets;
