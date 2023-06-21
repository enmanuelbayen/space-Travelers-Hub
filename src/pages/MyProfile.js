/* eslint-disable max-len */
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const reservedDragons = useSelector((state) => state.dragons.dragons.filter((dragon) => dragon.reserved === true));

  const joinedMissions = useSelector((state) => state.missions.missions.filter((mission) => mission.joined === true));

  return (
    <div className="profile-section">
      <div className="container row col-4">
        <h3>My Rockets</h3>
        <ul className="list-group">
          <li className="list-group-item">No Reserved Rockets</li>
        </ul>
      </div>

      <div className="container row col-4">
        <h3>My Missions</h3>
        <ul className="list-group">
          {joinedMissions.length ? (
            joinedMissions.map((mission) => (
              <li key={mission.mission_id} className="list-group-item">
                {mission.mission_name}
              </li>
            ))
          ) : (
            <li className="list-group-item">No Joined Missions</li>
          )}
        </ul>
      </div>

      <div className="container row col-4">
        <h3>My Dragons</h3>
        <ul className="list-group">
          {reservedDragons.length ? (
            reservedDragons.map((dragon) => (
              <li key={dragon.id} className="list-group-item">
                {dragon.name}
              </li>
            ))
          ) : (
            <li className="list-group-item">No Reserved Dragons</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
