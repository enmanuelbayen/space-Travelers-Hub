import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons } from '../Redux/dragons/dragonsSlice';

const Dragons = () => {
  const dispatch = useDispatch();
  const { dragons, status, error } = useSelector((state) => state.dragons);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDragons());
    }
  }, [dispatch, status]);

  return (
    <div>
      <h1>Dragons</h1>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'succeeded' && (
      <ul>
        {dragons.map((dragon) => (
          <li key={dragon.id}>{dragon.name}</li>
        ))}
      </ul>
      )}
      {status === 'failed' && <div>{error}</div>}
    </div>
  );
};
export default Dragons;
