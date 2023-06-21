import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch missions');
  }
});

export const missionsSlice = createSlice({
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
    builder.addCase(fetchMissions.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.missions = action.payload;
    });
    builder.addCase(fetchMissions.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { joinMission, cancelReservation, setJoinedMission } = missionsSlice.actions;
export default missionsSlice.reducer;
