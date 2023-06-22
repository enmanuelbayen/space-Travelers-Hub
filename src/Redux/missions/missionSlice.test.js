// eslint-disable-next-line import/named
import { missionsSlice, setJoinedMission, cancelReservation } from './missionSlice';

describe('missions reducer', () => {
  const initialState = {
    missions: [
      {
        mission_id: '1', mission_name: 'Mars Mission', description: 'Mission to Mars', joined: false,
      },
      {
        mission_id: '2', mission_name: 'Moon Mission', description: 'Mission to the Moon', joined: false,
      },
    ],
    status: 'idle',
    error: null,
  };

  it('should update the joined property of a mission when setJoinedMission action is dispatched', () => {
    const missionId = '1';
    const action = setJoinedMission({ missionId, joined: true });
    const newState = missionsSlice.reducer(initialState, action);

    expect(newState.missions[0].joined).toBe(true);
  });

  it('should cancel a mission reservation when cancelReservation action is dispatched', () => {
    const missionId = '2';
    const action = cancelReservation(missionId);
    const newState = missionsSlice.reducer(initialState, action);

    expect(newState.missions[1].reserved).toBe(false);
    expect(newState.missions[1].joined).toBe(false);
  });
});
