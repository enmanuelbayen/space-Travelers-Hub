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
    <section className="missionTitle">
      <h2>Missions</h2>
      <h2>discription</h2>
      <h2>status</h2>
      {content}
    </section>
  );
};

export default Missions;
