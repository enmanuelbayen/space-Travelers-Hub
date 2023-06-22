import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, joinMission, cancelReservation } from '../Redux/missions/missionSlice';
import '../assests/mission.css';

const MissionRow = ({ mission, handleJoinMission, handleCancelReservation }) => (
  <tr key={mission.mission_id}>
    <td className="mission">{mission.mission_name}</td>
    <td className="descriptions">{mission.description}</td>
    <td className={`missionStatus${mission.reserved ? ' activeMember' : ' notAMember'}`}>
      {mission.reserved ? (
        <span className="activeMemberText">ACTIVE MEMBER</span>
      ) : (
        <span className="notAMemberText">NOT A MEMBER</span>
      )}
    </td>
    <td className="missionButton">
      {mission.reserved ? (
        <button onClick={() => handleCancelReservation(mission.mission_id)} type="button" className="leave">
          Leave Mission
        </button>
      ) : (
        <button onClick={() => handleJoinMission(mission.mission_id)} type="button" className="joined">
          Join Mission
        </button>
      )}
    </td>
  </tr>
);

MissionRow.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
  handleJoinMission: PropTypes.func.isRequired,
  handleCancelReservation: PropTypes.func.isRequired,
};

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
    content = <tr><td colSpan="4" className="loader">Loading...</td></tr>;
  } else if (status === 'succeeded') {
    content = missions.map((mission) => (
      <MissionRow
        key={mission.mission_id}
        mission={mission}
        handleJoinMission={(missionId) => dispatch(joinMission(missionId))}
        handleCancelReservation={(missionId) => dispatch(cancelReservation(missionId))}
      />
    ));
  } else if (status === 'failed') {
    content = <tr><td colSpan="4">{error}</td></tr>;
  }

  return (
    <table className="missionsTable">
      <thead>
        <tr>
          <th>Mission Name</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {content}
      </tbody>
    </table>
  );
};

export default Missions;
