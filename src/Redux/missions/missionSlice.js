import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  return response.data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === missionId) {
          return {
            ...mission,
            reserved: true,
            joined: true,
          };
        }
        return mission;
      });
    },
    cancelReservation: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === missionId) {
          return {
            ...mission,
            reserved: false,
            joined: false,
          };
        }
        return mission;
      });
    },
    setJoinedMission: (state, action) => {
      const { missionId, joined } = action.payload;
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === missionId) {
          return {
            ...mission,
            joined,
          };
        }
        return mission;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload.map((mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
          joined: false,
        }));
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { joinMission, cancelReservation, setJoinedMission } = missionsSlice.actions;
export default missionsSlice.reducer;
