import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../Redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const status = useSelector((state) => state.missions.status);
  const error = useSelector((state) => state.missions.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [dispatch, status]);

  let content;

  if (status === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (status === 'succeeded') {
    content = missions.map((mission) => (
      <div key={mission.mission_id} className="mission">
        <h2>{mission.mission_name}</h2>
        <p>{mission.description}</p>
      </div>
    ));
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h1>Missions</h1>
      {content}
    </section>
  );
};

export default Missions;
